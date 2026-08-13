import type { Metadata } from "next";
import Link from "next/link";
import { PostList } from "@/components/admin/post-list";
import { Plus } from "@/components/icons";
import { getAllPosts } from "@/lib/blog-server";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function AdminPostsPage() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="headline text-2xl text-ink uppercase sm:text-3xl">
            Posts
          </h1>
          <p className="mt-2 text-sm text-steel">
            Everything written for the blog, published or not.
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition-colors hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          New post
        </Link>
      </div>

      <PostList posts={posts} />
    </>
  );
}
