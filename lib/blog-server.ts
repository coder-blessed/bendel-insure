import "server-only";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import { newsStories, type Story } from "@/lib/content";
import {
  getCloudinaryPostById,
  getCloudinaryPostBySlug,
  getCloudinaryPosts,
} from "@/lib/cloudinary-posts";

/**
 * Retrieves all published blog posts from Cloudinary, newest first.
 * Used by the public blog.
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const all = await getCloudinaryPosts();
    return all
      .filter((post) => post.status === "published")
      .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  } catch (error) {
    console.error("getPublishedPosts error:", error);
    return [];
  }
}

/** Combines published admin posts with the existing newsroom stories. */
export async function getNewsStories(): Promise<Story[]> {
  const posts = await getPublishedPosts();
  const publishedSlugs = new Set(posts.map((post) => post.slug));
  const publishedStories: Story[] = posts.map((post) => ({
    slug: post.slug,
    category: post.category,
    timestamp: formatPostDate(post.publishedAt),
    image: post.image,
    title: post.title,
    excerpt: post.excerpt,
    content: post.body,
    tone: post.tone,
  }));

  return [
    ...publishedStories,
    ...newsStories.filter((story) => !publishedSlugs.has(story.slug)),
  ];
}

/**
 * Retrieves a single post by slug from Cloudinary.
 */
export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  try {
    return await getCloudinaryPostBySlug(slug);
  } catch (error) {
    console.error("getPostBySlug error:", error);
    return undefined;
  }
}

/**
 * Retrieves published posts sharing a category, excluding the current post.
 */
export async function getRelatedPosts(
  post: BlogPost,
  limit = 3,
): Promise<BlogPost[]> {
  try {
    const published = await getPublishedPosts();
    const sameCategory = published.filter(
      (item) => item.id !== post.id && item.category === post.category,
    );
    const rest = published.filter(
      (item) => item.id !== post.id && item.category !== post.category,
    );

    return [...sameCategory, ...rest].slice(0, limit);
  } catch (error) {
    console.error("getRelatedPosts error:", error);
    return [];
  }
}

/**
 * Retrieves every post regardless of status for the admin dashboard.
 * Newest updated first.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const all = await getCloudinaryPosts();
    return [...all].sort((a, b) =>
      (b.updatedAt || "").localeCompare(a.updatedAt || ""),
    );
  } catch (error) {
    console.error("getAllPosts error:", error);
    return [];
  }
}

/**
 * Retrieves a single post by id from Cloudinary.
 */
export async function getPostById(
  id: string,
): Promise<BlogPost | undefined> {
  try {
    return await getCloudinaryPostById(id);
  } catch (error) {
    console.error("getPostById error:", error);
    return undefined;
  }
}
