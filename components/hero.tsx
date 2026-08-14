"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Pause, Play } from "@/components/icons";
import { Media } from "@/components/media";
import { heroSlides as defaultHeroSlides } from "@/lib/content";
import type { HeroSlide } from "@/lib/site-content";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

const SLIDE_MS = 7000;
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ slides }: { slides?: HeroSlide[] }) {
  const reduceMotion = useReducedMotionSafe();

  const activeSlides =
    slides && slides.length > 0
      ? slides
      : defaultHeroSlides.map((slide, idx) => ({
          id: `default-${idx}`,
          slug: slide.slug,
          eyebrow: slide.eyebrow,
          title: slide.title,
          excerpt: slide.excerpt,
          image: slide.image,
          cta: slide.cta,
          duration: slide.duration,
          tone: slide.tone,
          sortOrder: idx + 1,
          isActive: true,
        }));

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = activeSlides[index] || activeSlides[0];

  const go = useCallback(
    (next: number) => {
      setIndex((next + activeSlides.length) % activeSlides.length);
    },
    [activeSlides.length],
  );

  useEffect(() => {
    if (paused || reduceMotion || activeSlides.length <= 1) return;
    const id = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduceMotion, go, activeSlides.length]);

  return (
    <section
      aria-label="Featured"
      aria-roledescription="carousel"
      className="relative isolate flex min-h-[34rem] flex-1 flex-col justify-end overflow-hidden bg-brand-deep"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.slug || slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Media
            src={slide.image}
            tone={slide.tone}
            monogram={false}
            sizes="100vw"
            priority={index === 0}
            className={reduceMotion ? "" : "animate-kenburns"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-28 pb-8 md:px-8 md:pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.slug || slide.id}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-3xl"
          >
            <span className="eyebrow mb-4 hidden rounded-pill bg-gold px-3 py-1.5 text-[10px] text-brand-deep sm:inline-block">
              {slide.eyebrow}
            </span>

            <h1 className="headline text-3xl text-white uppercase sm:text-5xl lg:text-7xl">
              {slide.title}
            </h1>

            <div className="mt-3 flex items-center gap-2.5">
              <span className="eyebrow text-[10px] text-gold sm:hidden">
                {slide.eyebrow}
              </span>
              {slide.duration ? (
                <>
                  <span aria-hidden="true" className="text-white/40 sm:hidden">
                    &middot;
                  </span>
                  <span className="eyebrow text-[10px] text-white/70 tabular-nums">
                    {slide.duration}
                  </span>
                </>
              ) : null}
            </div>

            <p className="mt-4 hidden max-w-xl text-base leading-relaxed text-white/75 sm:block sm:text-lg">
              {slide.excerpt}
            </p>

            <Link
              href={slide.slug ? `/tv/${slide.slug}` : "/blog"}
              className="eyebrow group mt-6 flex w-full items-center justify-center gap-3 rounded-pill bg-white px-7 py-4 text-[11px] text-ink transition-all duration-300 hover:bg-gold sm:mt-7 sm:inline-flex sm:w-auto"
            >
              <Play className="h-3.5 w-3.5 text-brand transition-transform duration-300 group-hover:scale-125" />
              {slide.cta}
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide controls */}
        {activeSlides.length > 1 && (
          <div className="relative mt-8 flex items-center justify-center sm:mt-10 sm:justify-start sm:gap-4">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="absolute top-1/2 left-0 flex h-10 w-10 shrink-0 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-gold hover:text-gold sm:static sm:translate-y-0"
            >
              {paused || reduceMotion ? (
                <Play className="h-3.5 w-3.5" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>

            <div className="flex items-center gap-2.5 sm:flex-1 sm:gap-2">
              {activeSlides.map((item, slideIndex) => {
                const active = slideIndex === index;
                return (
                  <button
                    key={item.id || item.slug}
                    type="button"
                    onClick={() => go(slideIndex)}
                    aria-label={`Show slide ${slideIndex + 1}: ${item.title}`}
                    aria-current={active}
                    className={`relative h-2 shrink-0 overflow-hidden rounded-full bg-white/25 transition-[width,background-color] duration-500 ease-out sm:h-1.5 sm:w-auto sm:flex-1 sm:shrink ${
                      active ? "w-16 sm:w-auto" : "w-2 hover:bg-white/50"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        key={`${index}-${paused}`}
                        className="absolute inset-y-0 left-0 rounded-full bg-gold"
                        initial={{ width: "0%" }}
                        animate={{
                          width: paused || reduceMotion ? "12%" : "100%",
                        }}
                        transition={{
                          duration:
                            paused || reduceMotion ? 0.3 : SLIDE_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>

            <span className="eyebrow hidden text-[10px] text-white/60 sm:block">
              {index + 1} / {activeSlides.length}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
