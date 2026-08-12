"use client";

import { useRef } from "react";
import { Trash } from "@/components/icons";

/**
 * Native `<dialog>` rather than a hand-rolled overlay: `showModal()` brings
 * focus trapping, inertness of the page behind, and Escape-to-close with no
 * dependency and no bespoke keyboard handling.
 */
export function DeletePostDialog({ title }: { title: string }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-label={`Delete ${title}`}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 bg-white text-steel transition-colors hover:border-red-300 hover:text-red-600"
      >
        <Trash className="h-4 w-4" />
      </button>

      <dialog
        ref={ref}
        aria-labelledby="delete-post-heading"
        className="m-auto w-[min(92vw,26rem)] rounded-card bg-white p-6 text-ink backdrop:bg-black/70"
      >
        <h2
          id="delete-post-heading"
          className="headline text-xl text-ink uppercase"
        >
          Delete this post?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-steel">
          &ldquo;{title}&rdquo; will be removed from the blog. This cannot be
          undone.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="eyebrow flex-1 rounded-pill bg-red-600 px-5 py-3 text-[10px] text-white transition-colors hover:bg-red-700"
          >
            Delete post
          </button>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="eyebrow flex-1 rounded-pill border border-ink/15 bg-white px-5 py-3 text-[10px] text-ink transition-colors hover:border-ink/30"
          >
            Cancel
          </button>
        </div>
      </dialog>
    </>
  );
}
