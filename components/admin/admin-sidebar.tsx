"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logoutAction } from "@/app/admin/(auth)/login/actions";
import { Crest } from "@/components/brand";
import {
  Close,
  Eye,
  FileText,
  Logout,
  Menu,
  Photo,
  Settings,
} from "@/components/icons";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Media and Settings are shown but inert. Listing the intended shape of the
 * dashboard is more useful than hiding it, and a disabled item is honest in a
 * way a link to a 404 is not.
 */
const NAV = [
  { label: "Posts", href: "/admin/posts", icon: FileText, ready: true },
  { label: "Settings", href: "/admin/settings", icon: Settings, ready: true },
];

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Dashboard" className="flex flex-col gap-1">
      {NAV.map((item) => {
        const Icon = item.icon;
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        if (!item.ready) {
          return (
            <span
              key={item.href}
              className="flex items-center gap-3 rounded-control px-3 py-2.5 text-sm font-medium text-white/30"
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              {item.label}
              <span className="eyebrow ml-auto rounded-pill bg-white/8 px-2 py-0.5 text-[8px] text-white/40">
                Soon
              </span>
            </span>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-control px-3 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "bg-gold text-brand-deep"
                : "text-white/75 hover:bg-white/8 hover:text-white"
            }`}
          >
            <Icon className="h-4.5 w-4.5 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <div className="flex items-center gap-2.5 px-3 py-1">
        <Crest className="h-9 shrink-0" />
        <span className="leading-[0.9]">
          <span className="headline block text-[13px] text-white uppercase">
            Bendel Insurance
          </span>
          <span className="eyebrow block text-[9px] text-gold">Admin</span>
        </span>
      </div>

      <div className="mt-8 flex-1">
        <NavList onNavigate={onNavigate} />
      </div>

      <div className="mt-8 flex flex-col gap-1 border-t border-white/10 pt-4">
        <Link
          href="/blog"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-control px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/8 hover:text-white"
        >
          <Eye className="h-4.5 w-4.5 shrink-0" />
          View blog
        </Link>
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-control px-3 py-2.5 text-left text-sm font-medium text-white/60 transition-colors hover:bg-white/8 hover:text-white"
          >
            <Logout className="h-4.5 w-4.5 shrink-0" />
            Sign out
          </button>
        </form>
      </div>
    </>
  );
}

/** Desktop rail. Sticks for the full viewport height so long lists scroll under it. */
export function AdminSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 bg-brand-deep lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:p-5">
      <SidebarBody />
    </aside>
  );
}

/** Below lg the rail becomes a bar plus a drawer. */
export function AdminMobileNav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotionSafe();

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-3 bg-brand-deep px-4 py-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open dashboard menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-gold"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Crest className="h-7 shrink-0" />
        <span className="eyebrow text-[10px] text-gold">Admin</span>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <button
              type="button"
              aria-label="Close dashboard menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70"
            />
            <motion.div
              className="absolute inset-y-0 left-0 flex w-[min(82vw,17rem)] flex-col bg-brand-deep p-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASE }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close dashboard menu"
                className="mb-4 ml-auto flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-gold"
              >
                <Close className="h-6 w-6" />
              </button>
              <SidebarBody onNavigate={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
