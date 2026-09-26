"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { type BlogPost, slugify } from "@/lib/blog";
import {
  createPostInCloudinary,
  deletePostFromCloudinary,
  getCloudinaryPostById,
  updatePostInCloudinary,
} from "@/lib/cloudinary-posts";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function estimateReadMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function parsePostFormData(formData: FormData) {
  const title = ((formData.get("title") as string) || "").trim();
  const slug =
    ((formData.get("slug") as string) || "").trim() || slugify(title);
  const body = ((formData.get("body") as string) || "").trim();
  const status = (formData.get("status") as "draft" | "published") || "draft";

  if (!title) {
    throw new Error("A post title is required before saving.");
  }
  if (!body) {
    throw new Error("Post body content cannot be empty.");
  }

  return {
    title,
    slug,
    body,
    status,
    excerpt: ((formData.get("excerpt") as string) || "").trim(),
    category: ((formData.get("category") as string) || "Club").trim(),
    author: ((formData.get("author") as string) || "Club Media").trim(),
    image: ((formData.get("image") as string) || "").trim(),
    tone: 0,
    readMinutes: estimateReadMinutes(body),
  };
}

// ---------------------------------------------------------------------------
// Save (new post)
// ---------------------------------------------------------------------------

export type PostActionState = { error?: string } | undefined;

export async function savePostAction(
  _prev: PostActionState,
  formData: FormData,
): Promise<PostActionState> {
  let createdSlug = "";
  try {
    const parsed = parsePostFormData(formData);
    createdSlug = parsed.slug;
    const now = new Date().toISOString().slice(0, 10);

    const newPost: BlogPost = {
      id: `p-${Date.now()}`,
      title: parsed.title,
      slug: parsed.slug,
      excerpt: parsed.excerpt,
      body: parsed.body,
      category: parsed.category,
      author: parsed.author,
      image: parsed.image,
      tone: parsed.tone,
      status: parsed.status,
      publishedAt: parsed.status === "published" ? now : "",
      updatedAt: now,
      readMinutes: parsed.readMinutes,
    };

    await createPostInCloudinary(newPost);
  } catch (error) {
    console.error("savePostAction exception:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to persist post to Cloudinary.",
    };
  }

  revalidatePath("/blog");
  if (createdSlug) {
    revalidatePath(`/blog/${createdSlug}`);
  }
  revalidatePath("/admin/posts");
  revalidatePath("/admin");
  redirect("/admin/posts");
}

// ---------------------------------------------------------------------------
// Update (existing post)
// ---------------------------------------------------------------------------

export async function updatePostAction(
  id: string,
  _prev: PostActionState,
  formData: FormData,
): Promise<PostActionState> {
  let targetSlug = "";
  try {
    const parsed = parsePostFormData(formData);
    targetSlug = parsed.slug;
    const existing = await getCloudinaryPostById(id);

    const now = new Date().toISOString().slice(0, 10);
    let publishedAt = existing?.publishedAt ?? "";

    // Set publishedAt when transitioning from draft → published for the first time
    if (parsed.status === "published" && !publishedAt) {
      publishedAt = now;
    }

    const updates: Partial<BlogPost> = {
      title: parsed.title,
      slug: parsed.slug,
      excerpt: parsed.excerpt,
      body: parsed.body,
      category: parsed.category,
      author: parsed.author,
      image: parsed.image,
      status: parsed.status,
      publishedAt,
      updatedAt: now,
      readMinutes: parsed.readMinutes,
    };

    await updatePostInCloudinary(id, updates);
  } catch (error) {
    console.error("updatePostAction exception:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to update post in Cloudinary.",
    };
  }

  revalidatePath("/blog");
  if (targetSlug) {
    revalidatePath(`/blog/${targetSlug}`);
  }
  revalidatePath("/admin/posts");
  revalidatePath("/admin");
  redirect("/admin/posts");
}

// ---------------------------------------------------------------------------
// Delete
// ---------------------------------------------------------------------------

export async function deletePostAction(id: string, slug: string) {
  try {
    await deletePostFromCloudinary(id);

    revalidatePath("/blog");
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }
    revalidatePath("/admin/posts");
    revalidatePath("/admin");
  } catch (error) {
    console.error("deletePostAction exception:", error);
  }
}
