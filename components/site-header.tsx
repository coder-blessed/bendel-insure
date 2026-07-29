"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand";
import { ArrowRight, Close, Menu, Search, User } from "@/components/icons";
import { primaryNav, utilityNav } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-black text-white/70 lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8">
          <nav aria-label="Secondary" className="flex items-center gap-6">
            {utilityNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow py-2 text-[9px] transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/membership"
            className="eyebrow py-2 text-[9px] text-gold transition-colors hover:text-white"
          >
            Become a member
          </Link>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-brand-deep/95 backdrop-blur-md"
            : "bg-gradient-to-b from-black/75 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 md:px-8">
          <Link
            href="/"
            aria-label="Bendel Insurance FC home"
            className="text-white"
          >
            <Wordmark />
          </Link>

          <nav
            aria-label="Primary"
            className="ml-6 hidden flex-1 items-center gap-7 lg:flex"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow group relative py-2 text-[11px] text-white/85 transition-colors hover:text-white"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1 lg:gap-2">
            <button
              type="button"
              aria-label="Search the site"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-gold"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/account"
              aria-label="Your account"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-gold"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              href="/tickets"
              className="eyebrow hidden rounded-pill bg-gold px-5 py-3 text-[10px] text-brand-deep transition-all duration-300 hover:bg-white sm:block"
            >
              Buy tickets
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-gold lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70"
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[min(88vw,22rem)] flex-col rounded-l-media bg-brand-deep"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="eyebrow text-[10px] text-gold">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-gold"
                >
                  <Close className="h-6 w-6" />
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="flex-1 overflow-y-auto px-5 py-4"
              >
                {primaryNav.map((item, itemIndex) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + itemIndex * 0.05,
                      duration: 0.4,
                      ease: EASE,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="headline flex items-center justify-between rounded-control px-3 py-3.5 text-xl text-white uppercase transition-colors hover:bg-white/8 hover:text-gold"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 text-gold" />
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {utilityNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="eyebrow rounded-pill border border-white/15 px-3.5 py-2 text-[10px] text-white/60 transition-colors hover:border-gold/50 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="p-5">
                <Link
                  href="/tickets"
                  onClick={() => setOpen(false)}
                  className="eyebrow block rounded-pill bg-gold px-5 py-4 text-center text-[11px] text-brand-deep"
                >
                  Buy tickets
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
