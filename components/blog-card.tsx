"use client";

import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import { Media } from "@/components/media";
import { ArrowRight } from "@/components/icons";

type BlogCardVariant = "default" | "lead";

export type BlogCardProps = {
  post: BlogPost;
  variant?: BlogCardVariant;
};

function renderMarkdown(text: string) {
  const lines = text.trim().split("\n");
  const elements: React.ReactNode[] = [];

  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;

    elements.push(
      <ul
        key={`list-${elements.length}`}
        className="my-5 list-disc space-y-2 pl-6 text-sm leading-7 text-steel"
      >
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>
            {formatInlineMarkdown(item)}
          </li>
        ))}
      </ul>,
    );

    listItems = [];
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line === "---") {
      flushList();

      elements.push(
        <hr
          key={`hr-${index}`}
          className="my-8 border-ink/10"
        />,
      );

      return;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (/^\d+\.\s/.test(line)) {
      const number = line.match(/^(\d+)\.\s/)?.[1] ?? "1";
      const content = line.replace(/^\d+\.\s/, "");

      elements.push(
        <div
          key={`number-${index}`}
          className="my-3 flex gap-3 text-sm leading-7 text-steel"
        >
          <span className="font-bold text-brand">
            {number}.
          </span>

          <span>
            {formatInlineMarkdown(content)}
          </span>
        </div>,
      );

      return;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${index}`}
          className="headline mt-8 mb-3 text-xl uppercase text-ink"
        >
          {formatInlineMarkdown(line.slice(4))}
        </h3>,
      );

      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${index}`}
          className="headline mt-10 mb-4 text-2xl uppercase text-brand sm:text-3xl"
        >
          {formatInlineMarkdown(line.slice(3))}
        </h2>,
      );

      return;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${index}`}
          className="headline mt-8 mb-5 text-3xl uppercase text-ink sm:text-4xl"
        >
          {formatInlineMarkdown(line.slice(2))}
        </h1>,
      );

      return;
    }

    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`quote-${index}`}
          className="my-6 border-l-4 border-gold bg-brand/5 px-5 py-4 text-sm italic leading-7 text-ink"
        >
          {formatInlineMarkdown(line.slice(2))}
        </blockquote>,
      );

      return;
    }

    elements.push(
      <p
        key={`paragraph-${index}`}
        className="my-4 text-sm leading-7 text-steel sm:text-base"
      >
        {formatInlineMarkdown(line)}
      </p>,
    );
  });

  flushList();

  return elements;
}

function formatInlineMarkdown(text: string) {
  const parts = text.split(
    /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g,
  );

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={index}
          className="font-bold text-ink"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index}>
          {part.slice(1, -1)}
        </em>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-xs text-brand"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

function BlogPostModal({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-deep/80 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-brand-deep/90 text-xl text-white shadow-lg transition-transform hover:scale-105"
        >
          ×
        </button>

        {/* Hero image */}
        <div className="relative h-48 shrink-0 bg-brand-deep sm:h-64 lg:h-72">
          <Media
            src={post.image}
            tone={post.tone}
            monogram
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <span className="eyebrow inline-flex rounded-pill bg-gold px-3 py-1.5 text-[9px] text-brand-deep">
              {post.category}
            </span>

            <h2
              id="blog-modal-title"
              className="headline mt-3 max-w-4xl text-2xl uppercase text-white sm:text-4xl lg:text-5xl"
            >
              {post.title}
            </h2>
          </div>
        </div>

        {/* Article header */}
        <div className="border-b border-ink/10 bg-smoke px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-steel">
            <span className="font-semibold text-ink">
              {post.author}
            </span>

            <span>•</span>

            <span>
              {formatPostDate(post.publishedAt)}
            </span>

            <span>•</span>

            <span>
              {post.readMinutes} min read
            </span>
          </div>
        </div>

        {/* Article body */}
        <div className="overflow-y-auto px-5 py-7 sm:px-8 sm:py-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-base font-medium leading-7 text-ink sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>

            <div>
              {renderMarkdown(post.body)}
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-ink/10 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow text-[9px] text-brand">
                    Bendel Insurance FC
                  </p>

                  <p className="mt-1 text-xs text-steel">
                    The Benin Arsenal
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition-transform hover:scale-105"
                >
                  Close article
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function BlogCard({
  post,
  variant = "default",
}: BlogCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isLead = variant === "lead";

  return (
    <>
      <article
        className={`group overflow-hidden rounded-card border border-ink/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isLead ? "lg:grid lg:grid-cols-2" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-brand-deep ${
            isLead
              ? "aspect-[16/10] lg:aspect-auto lg:min-h-[380px]"
              : "aspect-[16/10]"
          }`}
        >
          <Media
            src={post.image}
            tone={post.tone}
            monogram
            sizes={
              isLead
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />

          <div className="absolute left-4 top-4">
            <span className="eyebrow rounded-pill bg-gold px-3 py-1.5 text-[9px] text-brand-deep">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col ${
            isLead ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6"
          }`}
        >
          <div className="flex items-center gap-3 text-[10px] text-steel">
            <span>{formatPostDate(post.publishedAt)}</span>

            <span>•</span>

            <span>{post.readMinutes} min read</span>
          </div>

          <h3
            className={`headline mt-3 uppercase text-ink transition-colors group-hover:text-brand ${
              isLead
                ? "text-2xl sm:text-3xl lg:text-4xl"
                : "text-xl"
            }`}
          >
            {post.title}
          </h3>

          <p
            className={`mt-3 leading-relaxed text-steel ${
              isLead ? "text-sm sm:text-base" : "text-xs"
            }`}
          >
            {post.excerpt}
          </p>

          <div className="mt-auto pt-6">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition-all hover:gap-3 hover:bg-brand-dark"
            >
              Read more
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </article>

      {isOpen && (
        <BlogPostModal
          post={post}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export function BlogGrid({
  posts,
  variant = "default",
}: {
  posts: BlogPost[];
  variant?: BlogCardVariant;
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
          variant={variant}
        />
      ))}
    </div>
  );
}