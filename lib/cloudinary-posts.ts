import "server-only";
import { type BlogPost, posts as defaultPosts } from "@/lib/blog";
import {
  deleteRawFromCloudinary,
  fetchJsonFromCloudinary,
  getCloudinaryConfig,
  uploadJsonToCloudinary,
} from "@/lib/cloudinary";

// Keep the last known posts only as a fallback if Cloudinary is temporarily unavailable.
let memoryCache: BlogPost[] | null = null;

function getManifestPublicId(): string {
  const { folder } = getCloudinaryConfig();
  return `${folder}/posts/manifest.json`;
}

function getPostPublicId(id: string): string {
  const { folder } = getCloudinaryConfig();
  return `${folder}/posts/${id}.json`;
}

/**
 * Ensures Cloudinary has the initial manifest seeded with default blog posts if empty.
 */
export async function seedCloudinaryPostsIfEmpty(): Promise<BlogPost[]> {
  const manifestId = getManifestPublicId();
  const existing = await fetchJsonFromCloudinary<BlogPost[]>(manifestId);

  if (existing && Array.isArray(existing) && existing.length > 0) {
    memoryCache = existing;
    return existing;
  }

  // Seed default posts to Cloudinary
  try {
    await uploadJsonToCloudinary(manifestId, defaultPosts);
    // Also save individual post JSON files for granular persistence
    for (const post of defaultPosts) {
      await uploadJsonToCloudinary(getPostPublicId(post.id), post).catch(() => {});
    }
    memoryCache = defaultPosts;
    return defaultPosts;
  } catch (err) {
    console.warn("Could not seed Cloudinary manifest:", err);
    return defaultPosts;
  }
}

/**
 * Retrieves all blog posts from Cloudinary.
 */
export async function getCloudinaryPosts(): Promise<BlogPost[]> {
  try {
    const manifestId = getManifestPublicId();
    const remotePosts = await fetchJsonFromCloudinary<BlogPost[]>(manifestId);

    if (remotePosts && Array.isArray(remotePosts) && remotePosts.length > 0) {
      memoryCache = remotePosts;
      return remotePosts;
    }

    // If manifest was not found, seed with defaults
    return await seedCloudinaryPostsIfEmpty();
  } catch (error) {
    console.error("getCloudinaryPosts error:", error);
    if (memoryCache) return memoryCache;
    return defaultPosts;
  }
}

/**
 * Retrieves a single post by its ID from Cloudinary.
 */
export async function getCloudinaryPostById(
  id: string,
): Promise<BlogPost | undefined> {
  const all = await getCloudinaryPosts();
  const found = all.find((p) => p.id === id);
  if (found) return found;

  // Try direct individual asset lookup
  try {
    const individual = await fetchJsonFromCloudinary<BlogPost>(getPostPublicId(id));
    if (individual && individual.id === id) {
      return individual;
    }
  } catch {
    // Ignore
  }

  return undefined;
}

/**
 * Retrieves a single post by its URL slug from Cloudinary.
 */
export async function getCloudinaryPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const all = await getCloudinaryPosts();
  return all.find((p) => p.slug === slug);
}

/**
 * Persists a new blog post directly to Cloudinary.
 */
export async function createPostInCloudinary(
  post: BlogPost,
): Promise<BlogPost> {
  const all = await getCloudinaryPosts();

  // Avoid duplicate IDs or Slugs
  const existingIndex = all.findIndex(
    (p) => p.id === post.id || p.slug === post.slug,
  );

  let updatedList: BlogPost[];
  if (existingIndex >= 0) {
    updatedList = [...all];
    updatedList[existingIndex] = post;
  } else {
    updatedList = [post, ...all];
  }

  // 1. Upload individual post JSON
  await uploadJsonToCloudinary(getPostPublicId(post.id), post);

  // 2. Upload updated master manifest
  await uploadJsonToCloudinary(getManifestPublicId(), updatedList);

  // Update in-memory cache
  memoryCache = updatedList;

  return post;
}

/**
 * Updates an existing blog post in Cloudinary.
 */
export async function updatePostInCloudinary(
  id: string,
  updates: Partial<BlogPost>,
): Promise<BlogPost> {
  const all = await getCloudinaryPosts();
  const index = all.findIndex((p) => p.id === id);

  if (index === -1) {
    throw new Error(`Post with id "${id}" not found.`);
  }

  const existing = all[index];
  const updated: BlogPost = {
    ...existing,
    ...updates,
    id: existing.id,
    updatedAt: new Date().toISOString().slice(0, 10),
  };

  const updatedList = [...all];
  updatedList[index] = updated;

  // 1. Upload individual post JSON
  await uploadJsonToCloudinary(getPostPublicId(id), updated);

  // 2. Upload updated master manifest
  await uploadJsonToCloudinary(getManifestPublicId(), updatedList);

  // Update in-memory cache
  memoryCache = updatedList;

  return updated;
}

/**
 * Deletes a post from Cloudinary.
 */
export async function deletePostFromCloudinary(id: string): Promise<void> {
  const all = await getCloudinaryPosts();
  const updatedList = all.filter((p) => p.id !== id);

  // 1. Destroy individual post JSON asset
  await deleteRawFromCloudinary(getPostPublicId(id));

  // 2. Update master manifest in Cloudinary
  await uploadJsonToCloudinary(getManifestPublicId(), updatedList);

  // Update in-memory cache
  memoryCache = updatedList;
}
