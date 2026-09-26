"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/blog";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function estimateReadMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function buildPostRow(formData: FormData, isNew: boolean) {
  const title = ((formData.get("title") as string) || "").trim();
  const slug =
    ((formData.get("slug") as string) || "").trim() || slugify(title);
  const body = ((formData.get("body") as string) || "").trim();
  const status = (formData.get("status") as "draft" | "published") || "draft";

  if (!title || !body) {
    throw new Error("Title and body are required before saving a post.");
  }

  return {
    title,
    slug,
    body,
    status,
    excerpt: ((formData.get("excerpt") as string) || "").trim(),
    category: ((formData.get("category") as string) || "Club").trim(),
    author: ((formData.get("author") as string) || "").trim(),
    image: ((formData.get("image") as string) || "").trim(),
    tone: 0,
    read_minutes: estimateReadMinutes(body),
    updated_at: new Date().toISOString(),
    ...(isNew
      ? { published_at: new Date().toISOString().slice(0, 10) }
      : {}),
  };
}

function getSupabaseStorageError() {
  const hasUrl = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL,
  );
  const hasKey = Boolean(
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
      process.env.SUPABASE_ANON_KEY,
  );

  if (!hasUrl || !hasKey) {
    return "Cloudinary is used for cover-image uploads. Supabase is still required for blog post metadata storage. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY) to the app environment before publishing.";
  }

  return null;
}

// ---------------------------------------------------------------------------
// Save (new post)
// ---------------------------------------------------------------------------

export type PostActionState = { error?: string } | undefined;

export async function savePostAction(
  _prev: PostActionState,
  formData: FormData,
): Promise<PostActionState> {
  try {
    const supabaseConfigError = getSupabaseStorageError();
    if (supabaseConfigError) {
      return { error: supabaseConfigError };
    }

    const supabase = await createSupabaseServerClient();
    const row = buildPostRow(formData, true);

    const { error } = await supabase.from("posts").insert(row);

    if (error) {
      console.error("savePostAction:", error.message);
      return { error: `Failed to save post: ${error.message}` };
    }

    revalidatePath("/blog");
    revalidatePath("/admin/posts");
    redirect("/admin/posts");
  } catch (error) {
    console.error("savePostAction exception:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to save post. Please check your Supabase configuration.",
    };
  }
}

// ---------------------------------------------------------------------------
// Update (existing post)
// ---------------------------------------------------------------------------

export async function updatePostAction(
  id: string,
  _prev: PostActionState,
  formData: FormData,
): Promise<PostActionState> {
  try {
    const supabaseConfigError = getSupabaseStorageError();
    if (supabaseConfigError) {
      return { error: supabaseConfigError };
    }

    const supabase = await createSupabaseServerClient();
    const row = buildPostRow(formData, false);

    const { data: existing } = await supabase
      .from("posts")
      .select("published_at, status")
      .eq("id", id)
      .single();

    if (
      existing &&
      existing.status === "draft" &&
      row.status === "published" &&
      !existing.published_at
    ) {
      (row as Record<string, unknown>).published_at = new Date()
        .toISOString()
        .slice(0, 10);
    }

    const { error } = await supabase.from("posts").update(row).eq("id", id);

    if (error) {
      console.error("updatePostAction:", error.message);
      return { error: `Failed to update post: ${error.message}` };
    }

    revalidatePath("/blog");
    revalidatePath(`/blog/${row.slug}`);
    revalidatePath("/admin/posts");
    redirect("/admin/posts");
  } catch (error) {
    console.error("updatePostAction exception:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to update post. Please check your Supabase configuration.",
    };
  }
}

// ---------------------------------------------------------------------------
// Delete
// ---------------------------------------------------------------------------

export async function deletePostAction(id: string, slug: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    console.error("deletePostAction:", error.message);
    return;
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/posts");
}
