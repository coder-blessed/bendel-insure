import type { Metadata } from "next";
import Link from "next/link";
import { TrophyClient } from "@/components/trophy-client";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  HomeIcon,
  Sparkles,
  Trophy,
} from "@/components/icons";
import { club, trophyCabinet } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export const metadata: Metadata = {
  title: "Trophy Room | Bendel Insurance FC Honours & Silverware",
  description:
    "Explore the official Trophy Room of Bendel Insurance Football Club. View all 11 major honours including the 1994 CAF Cup, 3x WAFU Championships, 2 NPFL titles, and 4 Federation Cups.",
};

export default function TrophyRoomPage() {
  const totalTrophies = trophyCabinet.reduce((acc, t) => acc + t.titles, 0);

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-brand-deep pt-24 pb-14 lg:pt-32 lg:pb-20">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(110% 80% at 50% 0%, rgba(247,198,33,0.22) 0%, transparent 62%)",
              "radial-gradient(90% 70% at 15% 100%, rgba(6,138,63,0.3) 0%, transparent 70%)",
              "linear-gradient(180deg, transparent 40%, rgba(2,47,23,0.95) 100%)",
            ].join(", "),
          }}
        />

        {/* Pitch stripes overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 8.333%, transparent 8.333% 16.666%)",
          }}
        />

        <div className={`${SHELL} relative`}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-white/60 transition-colors hover:text-gold"
            >
              <HomeIcon className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <Link
              href="/history"
              className="text-white/60 transition-colors hover:text-gold"
            >
              Club History
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-gold font-semibold">Trophy Room</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow rounded-pill bg-gold px-3.5 py-1.5 text-[10px] text-brand-deep font-bold">
              Official Silverware Cabinet
            </span>
            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] text-white/80">
              {totalTrophies} Major Honours Won
            </span>
            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] text-gold">
              {club.name}
            </span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="headline text-4xl text-white uppercase sm:text-5xl lg:text-7xl">
                The <span className="text-gold">Trophy Room</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Walk through the crowning moments of the Benin Arsenal. From our
                inaugural 1972 FA Cup to continental triumph in the 1994 CAF Cup,
                the legendary 3-in-a-row West African dynasty, and our emotional
                2023 Federation Cup victory.
              </p>
            </div>

            {/* Direct Navigation Links */}
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/history"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-white/10 px-5 py-3 text-[11px] text-white font-semibold transition-colors hover:bg-white/20 hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to History</span>
              </Link>
              <Link
                href="/"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-5 py-3 text-[11px] text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Home Page</span>
              </Link>
              <Link
                href="/fixtures"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-5 py-3 text-[11px] text-brand-deep font-bold transition-all duration-300 hover:bg-white"
              >
                <Calendar className="h-4 w-4" />
                <span>Season Fixtures</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Trophy Room Client Component */}
      <TrophyClient trophies={trophyCabinet} />

      {/* Bottom Navigation Bar */}
      <section className="border-t border-ink/10 bg-smoke py-12 md:py-16">
        <div className={`${SHELL} flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left`}>
          <div>
            <span className="eyebrow text-[10px] text-steel">Navigation Hub</span>
            <h3 className="headline mt-1 text-2xl text-ink uppercase">
              Where would you like to go next?
            </h3>
            <p className="mt-1 text-sm text-steel">
              Navigate seamlessly between history, trophies, fixtures, and the homepage.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/history"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-ink/20 bg-white px-5 py-3 text-[11px] text-ink font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>History Timeline</span>
            </Link>
            <Link
              href="/"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-ink/20 bg-white px-5 py-3 text-[11px] text-ink font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              <HomeIcon className="h-4 w-4" />
              <span>Home Page</span>
            </Link>
            <Link
              href="/fixtures"
              className="eyebrow group inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3 text-[11px] text-white font-bold transition-colors hover:bg-brand-dark"
            >
              <Calendar className="h-4 w-4" />
              <span>2026/27 Fixtures</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
