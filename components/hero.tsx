"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Pause, Play } from "@/components/icons";
import { Media } from "@/components/media";
import { heroSlides } from "@/lib/content";

const SLIDE_MS = 7000;
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[index];

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduceMotion, go]);

  return (
    <section
      aria-label="Featured"
      aria-roledescription="carousel"
      className="relative isolate flex min-h-[34rem] flex-1 flex-col justify-end overflow-hidden bg-brand-deep"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.slug}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Media
            tone={slide.tone}
            monogram={false}
            className={reduceMotion ? "" : "animate-kenburns"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-28 pb-8 md:px-8 md:pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.slug}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-3xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="eyebrow rounded-pill bg-gold px-3 py-1.5 text-[10px] text-brand-deep">
                {slide.eyebrow}
              </span>
              <span className="eyebrow rounded-pill border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] text-white/80 backdrop-blur-sm">
                {slide.duration}
              </span>
            </div>

            <h1 className="headline text-[2.75rem] text-white uppercase sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {slide.excerpt}
            </p>

            <Link
              href={`/tv/${slide.slug}`}
              className="eyebrow group mt-7 inline-flex items-center gap-3 rounded-pill bg-white px-7 py-4 text-[11px] text-ink transition-all duration-300 hover:bg-gold"
            >
              <Play className="h-3.5 w-3.5 text-brand transition-transform duration-300 group-hover:scale-125" />
              {slide.cta}
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide controls */}
        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-gold hover:text-gold"
          >
            {paused || reduceMotion ? (
              <Play className="h-3.5 w-3.5" />
            ) : (
              <Pause className="h-3.5 w-3.5" />
            )}
          </button>

          <div className="flex flex-1 items-center gap-2">
            {heroSlides.map((item, slideIndex) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => go(slideIndex)}
                aria-label={`Show slide ${slideIndex + 1}: ${item.title}`}
                aria-current={slideIndex === index}
                className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/25"
              >
                {slideIndex === index ? (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-0 origin-left rounded-full bg-gold"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused || reduceMotion ? 0.06 : 1 }}
                    transition={{
                      duration: paused || reduceMotion ? 0.3 : SLIDE_MS / 1000,
                      ease: "linear",
                    }}
                  />
                ) : (
                  <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-white/60 transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </button>
            ))}
          </div>

          <span className="eyebrow hidden text-[10px] text-white/60 sm:block">
            {index + 1} / {heroSlides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
