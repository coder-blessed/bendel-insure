"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { DeletePostDialog } from "@/components/admin/delete-post-dialog";
import { StatusChip } from "@/components/admin/status-chip";
import { Pencil } from "@/components/icons";
import { type BlogPost, formatPostDate } from "@/lib/blog";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

const EASE = [0.16, 1, 0.3, 1] as const;

type Filter = "all" | "published" | "draft";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "draft", label: "Drafts" },
];

export function PostList({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const reduceMotion = useReducedMotionSafe();

  const visible =
    filter === "all" ? posts : posts.filter((post) => post.status === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter posts by status"
        className="mb-6 inline-flex flex-wrap gap-1 rounded-pill bg-white p-1.5"
      >
        {FILTERS.map((tab) => {
          const selected = tab.key === filter;
          const count =
            tab.key === "all"
              ? posts.length
              : posts.filter((post) => post.status === tab.key).length;

          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(tab.key)}
              className={`relative rounded-pill px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                selected ? "text-white" : "text-steel hover:text-ink"
              }`}
            >
              {selected ? (
                <motion.span
                  layoutId="post-filter-pill"
                  className="absolute inset-0 rounded-pill bg-ink"
                  transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
                />
              ) : null}
              <span className="relative">
                {tab.label}
                <span className="ml-1.5 tabular-nums opacity-60">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-card border border-ink/10 bg-white px-6 py-16 text-center">
          <p className="headline text-lg text-ink uppercase">No posts here</p>
          <p className="mt-2 text-sm text-steel">
            Nothing matches this filter yet.
          </p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.ul
            key={filter}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="divide-y divide-ink/8 overflow-hidden rounded-card bg-white"
          >
            {visible.map((post) => (
              <li
                key={post.id}
                className="flex flex-wrap items-center gap-x-4 gap-y-3 p-4 transition-colors hover:bg-smoke/60 md:p-5"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <StatusChip status={post.status} />
                    <span className="eyebrow text-[9px] text-brand">
                      {post.category}
                    </span>
                  </div>
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="headline mt-2 block text-base text-ink uppercase transition-colors hover:text-brand sm:text-lg"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-1.5 text-xs text-steel">
                    {post.author} &middot; updated{" "}
                    <span className="tabular-nums">
                      {formatPostDate(post.updatedAt)}
                    </span>
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    aria-label={`Edit ${post.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 bg-white text-steel transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <Pencil className="h-4 w-4" />
                  </Link>
                  <DeletePostDialog id={post.id} slug={post.slug} title={post.title} />
                </div>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
}
