"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Hydration-safe wrapper around `useReducedMotion`.
 *
 * Framer seeds its state directly from the media query
 * (`useState(prefersReducedMotion.current)`), so on a device with Reduced
 * Motion enabled the first client render disagrees with the server render and
 * hydration fails. Report `false` until after mount so both passes produce
 * identical markup, then switch to the real preference.
 */
export function useReducedMotionSafe(): boolean {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && Boolean(prefersReduced);
}
