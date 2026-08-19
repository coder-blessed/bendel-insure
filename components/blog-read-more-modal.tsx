"use client";

import { useEffect } from "react";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

type BlogReadMoreModalProps = {
  post: BlogPost | null;
  onClose: () => void;
};

function renderMarkdown(text: string) {
  return text
    .trim()
    .split("\n")
    .map((line, index) => {
      const key = `${index}-${line}`;

      if (!line.trim()) {
        return <div key={key} className="h-3" />;
      }

      if (line.startsWith("## ")) {
        return (
          <h2
            key={key}
            className="headline mt-8 mb-3 text-2xl uppercase text-ink"
          >
            {line.replace("## ", "")}
          </h2>
        );
      }

      if (line.startsWith("### ")) {
        return (
          <h3
            key={key}
            className="headline mt-6 mb-2 text-xl uppercase text-ink"
          >
            {line.replace("### ", "")}
          </h3>
        );
      }

      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={key}
            className="my-6 border-l-4 border-gold bg-smoke px-5 py-4 italic text-steel"
          >
            {line.replace("> ", "")}
          </blockquote>
        );
      }

      if (line === "---") {
        return <hr key={key} className="my-8 border-ink/10" />;
      }

      if (/^\d+\.\s/.test(line)) {
        return (
          <li
            key={key}
            className="ml-6 list-decimal pl-2 text-base leading-8 text-steel"
          >
            {formatInlineMarkdown(line.replace(/^\d+\.\s/, ""))}
          </li>
        );
      }

      if (line.startsWith("- ")) {
        return (
          <li
            key={key}
            className="ml-6 list-disc pl-2 text-base leading-8 text-steel"
          >
            {formatInlineMarkdown(line.replace("- ", ""))}
          </li>
        );
      }

      return (
        <p
          key={key}
          className="mb-4 text-base leading-8 text-steel"
        >
          {formatInlineMarkdown(line)}
        </p>
      );
    });
}

function formatInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

export default function BlogReadMoreModal({
  post,
  onClose,
}: BlogReadMoreModalProps) {
  useEffect(() => {
    if (!post) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [post, onClose]);

  if (!post) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-card bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-ink/10 bg-white px-6 py-5 md:px-8">
          <div className="pr-6">
            <span className="eyebrow text-[10px] text-brand">
              {post.category}
            </span>

            <h2
              id="blog-modal-title"
              className="headline mt-2 text-2xl uppercase text-ink md:text-3xl"
            >
              {post.title}
            </h2>

            <div className="mt-2 flex flex-wrap gap-2 text-xs text-steel">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatPostDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-smoke text-xl text-ink transition hover:bg-brand hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Article */}
        <div className="overflow-y-auto">
          {post.image && (
            <div className="relative h-56 w-full overflow-hidden bg-brand-deep md:h-80">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <article className="px-6 py-8 md:px-12 md:py-10">
            <p className="mb-8 text-lg leading-relaxed text-steel">
              {post.excerpt}
            </p>

            <div>{renderMarkdown(post.body)}</div>
          </article>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-ink/10 bg-smoke px-6 py-4 md:px-8">
          <span className="eyebrow text-[9px] text-steel">
            Bendel Insurance FC
          </span>

          <button
            type="button"
            onClick={onClose}
            className="eyebrow rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition hover:bg-brand-dark"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}