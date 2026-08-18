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
  const title = (formData.get("title") as string).trim();
  const slug =
    ((formData.get("slug") as string) || "").trim() || slugify(title);
  const body = (formData.get("body") as string).trim();
  const status = formData.get("status") as "draft" | "published";

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
    // Only set published_at on new posts or when first publishing
    ...(isNew
      ? { published_at: new Date().toISOString().slice(0, 10) }
      : {}),
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
  const supabase = await createSupabaseServerClient();
  const row = buildPostRow(formData, true);

  const { error } = await supabase.from("posts").insert(row);

  if (error) {
    console.error("savePostAction:", error.message);
    return { error: "Failed to save post. Please try again." };
  }

  revalidatePath("/blog");
  revalidatePath("/admin/posts");
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
  const supabase = await createSupabaseServerClient();
  const row = buildPostRow(formData, false);

  const { data: existing } = await supabase
    .from("posts")
    .select("published_at, status")
    .eq("id", id)
    .single();

  // Set published_at when transitioning from draft → published
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
    return { error: "Failed to update post. Please try again." };
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${row.slug}`);
  revalidatePath("/admin/posts");
  redirect("/admin/posts");
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
