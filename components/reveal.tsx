"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Always renders the same element type regardless of motion preference:
 * swapping between `div` and `motion.div` changes the DOM between the server
 * and client renders and breaks hydration. Only the animation props vary.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotionSafe();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Wipes a gold rule in from the left as it enters the viewport. */
export function RuleReveal({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotionSafe();

  return (
    <motion.span
      aria-hidden="true"
      className={`block h-1.5 w-full origin-left rounded-full bg-gold ${className}`}
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={reduceMotion ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE }}
    />
  );
}
