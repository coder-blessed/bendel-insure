import "server-only";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { BlogPost, PostStatus } from "@/lib/blog";

// biome-ignore lint/suspicious/noExplicitAny: Supabase row shape
function rowToPost(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? "",
    body: row.body ?? "",
    category: row.category ?? "Club",
    author: row.author ?? "",
    image: row.image ?? "",
    tone: row.tone ?? 0,
    status: row.status as PostStatus,
    publishedAt: row.published_at ?? row.publishedAt ?? "",
    updatedAt: (row.updated_at ?? row.updatedAt ?? "").slice(0, 10),
    readMinutes: row.read_minutes ?? row.readMinutes ?? 3,
  };
}

/** Newest published first. Used by the public blog. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("getPublishedPosts:", error.message);
    return [];
  }
  return (data ?? []).map(rowToPost);
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return undefined;
  return rowToPost(data);
}

export async function getRelatedPosts(
  post: BlogPost,
  limit = 3,
): Promise<BlogPost[]> {
  const supabase = await createSupabaseServerClient();

  const { data: sameCategory } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("category", post.category)
    .neq("id", post.id)
    .order("published_at", { ascending: false })
    .limit(limit);

  const samePosts = (sameCategory ?? []).map(rowToPost);
  if (samePosts.length >= limit) return samePosts.slice(0, limit);

  const { data: others } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .neq("category", post.category)
    .neq("id", post.id)
    .order("published_at", { ascending: false })
    .limit(limit - samePosts.length);

  return [...samePosts, ...(others ?? []).map(rowToPost)].slice(0, limit);
}

/** Every post regardless of status. Newest updated first. */
export async function getAllPosts(): Promise<BlogPost[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("getAllPosts:", error.message);
    return [];
  }
  return (data ?? []).map(rowToPost);
}

export async function getPostById(
  id: string,
): Promise<BlogPost | undefined> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return undefined;
  return rowToPost(data);
}
