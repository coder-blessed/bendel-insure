"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "bifc-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Private browsing or storage disabled: skip the banner rather than break.
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Ignore write failures.
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.section
          aria-label="Cookie notice"
          className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-[76rem] md:inset-x-6 md:bottom-6"
          initial={{ y: "130%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "130%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-card border border-white/12 bg-ink/95 p-4 backdrop-blur-lg md:p-5">
            <p className="max-w-2xl text-sm text-white/70">
              We use cookies to improve your experience on this site. By
              continuing you agree to their use, as set out in our{" "}
              <Link
                href="/legal/cookies"
                className="text-gold underline decoration-gold/40 underline-offset-2 transition-colors hover:decoration-gold"
              >
                cookie policy
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={accept}
              className="eyebrow rounded-pill bg-gold px-6 py-3 text-[10px] text-brand-deep transition-colors hover:bg-white"
            >
              Accept
            </button>
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
