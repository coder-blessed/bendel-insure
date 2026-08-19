"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import BlogReadMoreModal from "@/components/blog-read-more-modal";

type BlogCardProps = {
  post: BlogPost;
};

type BlogGridProps = {
  posts: BlogPost[];
};

export function BlogCard({ post }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-card border border-ink/8 bg-white">
        {post.image ? (
          <div className="aspect-[16/10] overflow-hidden bg-brand-deep">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-brand-deep">
            <span className="headline text-4xl text-gold">
              B.I.F.C.
            </span>
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="eyebrow text-[9px] text-brand">
              {post.category}
            </span>

            <span className="text-xs text-steel">
              {post.readMinutes} min read
            </span>
          </div>

          <h3 className="headline mt-3 text-xl uppercase text-ink">
            {post.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-steel">
            {post.excerpt}
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="eyebrow inline-flex items-center rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Read More
            </button>
          </div>
        </div>
      </article>

      <BlogReadMoreModal
        post={isModalOpen ? post : null}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}