"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import { Media } from "@/components/media";
import { ArrowRight } from "@/components/icons";

type BlogCardVariant = "default" | "lead";

export type BlogCardProps = {
  post: BlogPost;
  variant?: BlogCardVariant;
};

/**
 * Simple inline markdown renderer.
 *
 * Supports:
 * - **bold**
 * - *italic*
 */
function formatInlineMarkdown(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}

/**
 * Converts the markdown-style body stored in BlogPost
 * into readable React elements.
 */
function renderBody(body: string): ReactNode {
  const lines = body.trim().split("\n");

  const elements: ReactNode[] = [];

  let unorderedItems: string[] = [];
  let orderedItems: string[] = [];

  const flushUnorderedList = () => {
    if (unorderedItems.length === 0) return;

    elements.push(
      <ul
        key={`unordered-${elements.length}`}
        className="my-5 list-disc space-y-2 pl-6 text-sm leading-7 text-steel sm:text-base"
      >
        {unorderedItems.map((item, index) => (
          <li key={`${item}-${index}`}>
            {formatInlineMarkdown(item)}
          </li>
        ))}
      </ul>,
    );

    unorderedItems = [];
  };

  const flushOrderedList = () => {
    if (orderedItems.length === 0) return;

    elements.push(
      <ol
        key={`ordered-${elements.length}`}
        className="my-5 list-decimal space-y-2 pl-6 text-sm leading-7 text-steel sm:text-base"
      >
        {orderedItems.map((item, index) => (
          <li key={`${item}-${index}`}>
            {formatInlineMarkdown(item)}
          </li>
        ))}
      </ol>,
    );

    orderedItems = [];
  };

  const flushLists = () => {
    flushUnorderedList();
    flushOrderedList();
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushLists();
      return;
    }

    /*
     * Unordered list
     */
    if (/^[-*]\s+/.test(line)) {
      flushOrderedList();

      unorderedItems.push(
        line.replace(/^[-*]\s+/, ""),
      );

      return;
    }

    /*
     * Ordered list
     */
    if (/^\d+\.\s+/.test(line)) {
      flushUnorderedList();

      orderedItems.push(
        line.replace(/^\d+\.\s+/, ""),
      );

      return;
    }

    flushLists();

    /*
     * Horizontal rule
     */
    if (line === "---") {
      elements.push(
        <hr
          key={`hr-${index}`}
          className="my-8 border-0 border-t border-ink/10"
        />,
      );

      return;
    }

    /*
     * H1
     */
    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${index}`}
          className="headline mt-10 text-3xl uppercase text-brand sm:text-4xl"
        >
          {formatInlineMarkdown(line.slice(2))}
        </h1>,
      );

      return;
    }

    /*
     * H2
     */
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${index}`}
          className="headline mt-10 text-2xl uppercase text-brand sm:text-3xl"
        >
          {formatInlineMarkdown(line.slice(3))}
        </h2>,
      );

      return;
    }

    /*
     * H3
     */
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${index}`}
          className="headline mt-8 text-xl uppercase text-ink"
        >
          {formatInlineMarkdown(line.slice(4))}
        </h3>,
      );

      return;
    }

    /*
     * Blockquote
     */
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`quote-${index}`}
          className="my-6 border-l-4 border-gold bg-brand/5 px-5 py-4 text-base italic leading-7 text-ink"
        >
          {formatInlineMarkdown(line.slice(2))}
        </blockquote>,
      );

      return;
    }

    /*
     * Normal paragraph
     */
    elements.push(
      <p
        key={`paragraph-${index}`}
        className="my-4 text-sm leading-7 text-steel sm:text-base"
      >
        {formatInlineMarkdown(line)}
      </p>,
    );
  });

  flushLists();

  return elements;
}

/**
 * Close icon.
 *
 * We keep this local instead of importing X from components/icons.tsx,
 * because the current icons.tsx does not export an X icon.
 */
function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

/**
 * Full article modal.
 */
function ArticleModal({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  /*
   * Close modal with Escape.
   *
   * Also prevent the page behind the modal from scrolling.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep/80 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`article-title-${post.id}`}
      onMouseDown={(event) => {
        /*
         * Clicking the dark backdrop closes the modal.
         * Clicking inside the article does not.
         */
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-card bg-white shadow-2xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-brand-deep/90 text-white shadow-lg transition hover:scale-105 hover:bg-brand"
        >
          <CloseIcon />
        </button>

        {/* Article hero */}
        <div className="relative shrink-0 bg-brand-deep">
          <div className="relative aspect-[16/7] min-h-[220px] overflow-hidden">
            <Media
              src={post.image}
              tone={post.tone}
              monogram={true}
              sizes="(max-width: 1024px) 100vw, 1024px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow rounded-pill bg-gold px-3 py-1.5 text-[9px] text-brand-deep">
                  {post.category}
                </span>

                <span className="eyebrow text-[9px] text-white/75">
                  {post.readMinutes} min read
                </span>
              </div>

              <h1
                id={`article-title-${post.id}`}
                className="headline mt-3 max-w-4xl text-2xl uppercase text-white sm:text-4xl lg:text-5xl"
              >
                {post.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span>{post.author}</span>

                <span aria-hidden="true">•</span>

                <span>
                  {formatPostDate(post.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable article */}
        <div className="overflow-y-auto">
          <article className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
            {/* Excerpt */}
            <p className="mb-8 border-b border-ink/10 pb-8 text-base font-medium leading-7 text-ink sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>

            {/* Full article */}
            <div>{renderBody(post.body)}</div>

            {/* Article footer */}
            <div className="mt-10 border-t border-ink/10 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow text-[9px] text-steel">
                    Written by
                  </p>

                  <p className="mt-1 font-semibold text-ink">
                    {post.author}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition hover:bg-brand-dark"
                >
                  Close article
                  <CloseIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

/**
 * Blog Card
 */
export function BlogCard({
  post,
  variant = "default",
}: BlogCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isLead = variant === "lead";

  return (
    <>
      <article
        className={[
          "group overflow-hidden rounded-card border border-ink/8 bg-white transition-all duration-300",
          "hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand/10",
          isLead ? "lg:grid lg:grid-cols-2" : "",
        ].join(" ")}
      >
        {/* Image */}
        <div
          className={[
            "relative overflow-hidden bg-brand-deep",
            isLead
              ? "aspect-[16/10] lg:aspect-auto lg:min-h-full"
              : "aspect-[16/10]",
          ].join(" ")}
        >
          <Media
            src={post.image}
            tone={post.tone}
            monogram={true}
            sizes={
              isLead
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 1024px) 100vw, 33vw"
            }
          />

          {/* Category */}
          <div className="absolute left-4 top-4">
            <span className="eyebrow rounded-pill bg-gold px-3 py-1.5 text-[9px] text-brand-deep shadow-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={[
            "flex flex-col",
            isLead
              ? "justify-center p-6 sm:p-8 lg:p-10"
              : "p-5 sm:p-6",
          ].join(" ")}
        >
          {/* Date */}
          <div className="flex items-center gap-2 text-[10px] text-steel">
            <span>
              {formatPostDate(post.publishedAt)}
            </span>

            <span aria-hidden="true">•</span>

            <span>
              {post.readMinutes} min read
            </span>
          </div>

          {/* Title */}
          <h2
            className={[
              "headline mt-3 uppercase text-ink transition-colors group-hover:text-brand",
              isLead
                ? "text-2xl sm:text-3xl lg:text-4xl"
                : "text-xl sm:text-2xl",
            ].join(" ")}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p
            className={[
              "mt-3 leading-relaxed text-steel",
              isLead
                ? "text-base sm:text-lg"
                : "text-sm",
            ].join(" ")}
          >
            {post.excerpt}
          </p>

          {/* Bottom */}
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="text-xs text-steel">
              By{" "}
              <span className="font-semibold text-ink">
                {post.author}
              </span>
            </div>

            {/* Read more */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="eyebrow inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-4 py-2.5 text-[9px] text-white transition-all hover:scale-105 hover:bg-brand-dark"
            >
              Read more

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </article>

      {/* Modal */}
      {isOpen && (
        <ArticleModal
          post={post}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

/**
 * Blog grid.
 *
 * This export also fixes:
 *
 * Module '"@/components/blog-card"' has no exported member 'BlogGrid'
 */
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