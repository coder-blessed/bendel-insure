"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import BlogReadMoreModal from "@/components/blog-read-more-modal";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-card border border-ink/8 bg-white">
        {/* Image */}
        {post.image && (
          <div className="aspect-[16/10] overflow-hidden bg-brand-deep">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
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