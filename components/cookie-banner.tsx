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
          className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-gold bg-ink/97 backdrop-blur"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
            <p className="max-w-2xl text-sm text-white/70">
              We use cookies to improve your experience on this site. By
              continuing you agree to their use, as set out in our{" "}
              <Link href="/legal/cookies" className="text-gold underline">
                cookie policy
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={accept}
              className="eyebrow bg-gold px-6 py-3 text-[10px] text-brand-deep transition-colors hover:bg-white"
            >
              Accept
            </button>
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
