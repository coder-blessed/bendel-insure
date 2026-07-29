"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@/components/icons";

/**
 * Horizontal snap-scrolling rail with desktop arrow controls, used for the
 * Insurance TV and squad carousels.
 */
export function Rail({
  children,
  label,
  dark = false,
}: {
  children: ReactNode;
  label: string;
  dark?: boolean;
}) {
  const scrollerRef = useRef<HTMLElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = scrollerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrowBase = dark
    ? "border-white/25 bg-ink text-white hover:border-gold hover:bg-gold hover:text-brand-deep"
    : "border-ink/15 bg-white text-ink hover:border-brand hover:text-brand";

  return (
    <div className="relative">
      <section
        ref={scrollerRef}
        onScroll={sync}
        // biome-ignore lint/a11y/noNoninteractiveTabindex: the rail scrolls, so keyboard users need to focus it
        tabIndex={0}
        aria-label={label}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 md:mx-0 md:px-0"
      >
        {children}
      </section>

      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        aria-label={`Scroll ${label} backwards`}
        className={`absolute top-1/2 -left-5 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border transition-all disabled:pointer-events-none disabled:opacity-0 md:flex ${arrowBase}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        aria-label={`Scroll ${label} forwards`}
        className={`absolute top-1/2 -right-5 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border transition-all disabled:pointer-events-none disabled:opacity-0 md:flex ${arrowBase}`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
