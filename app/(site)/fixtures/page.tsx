import type { Metadata } from "next";
import Link from "next/link";

import { FixturesClient } from "@/components/fixtures-client";
import {
  Calendar,
  ChevronRight,
  HomeIcon,
  MapPin,
  Shield,
  Sparkles,
  Trophy,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, seasonFixtures } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export const metadata: Metadata = {
  title: "Fixtures & Results 2026/27 | Bendel Insurance FC",
  description:
    "Follow Bendel Insurance FC throughout the 2026/27 Nigeria Premier Football League season. View fixtures, match dates, kick-off times, venues, opponents, broadcasts and ticket information.",
};

export default function FixturesPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-brand-deep pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(110% 80% at 80% 0%, rgba(247,198,33,0.18) 0%, transparent 60%)",
              "radial-gradient(90% 70% at 15% 100%, rgba(6,138,63,0.3) 0%, transparent 70%)",
              "linear-gradient(180deg, transparent 40%, rgba(2,47,23,0.95) 100%)",
            ].join(", "),
          }}
        />

        {/* Pitch stripe effect */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 8.333%, transparent 8.333% 16.666%)",
          }}
        />

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-gold/10"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 top-32 h-72 w-72 rounded-full border border-white/5"
        />

        <div className={`${SHELL} relative`}>
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-2 text-xs"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-gold"
            >
              <HomeIcon className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>

            <ChevronRight className="h-3 w-3 text-white/30" />

            <span className="font-semibold text-gold">Fixtures</span>
          </nav>

          {/* Season badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow rounded-pill bg-gold px-3.5 py-1.5 text-[10px] font-bold text-brand-deep">
              {club.season} Campaign
            </span>

            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] font-semibold text-white/80">
              38 NPFL Matchdays
            </span>

            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] font-semibold text-gold">
              Federation Cup
            </span>
          </div>

          {/* Hero content */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow mb-3 text-[11px] font-bold tracking-[0.2em] text-gold">
                THE BENIN ARSENAL
              </p>

              <h1 className="headline text-4xl uppercase text-white sm:text-5xl lg:text-7xl">
                Season{" "}
                <span className="text-gold">
                  Fixtures
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Follow every match of Bendel Insurance FC throughout the{" "}
                {club.season} campaign. Explore the complete NPFL schedule,
                match dates, kick-off times, venues, broadcast information and
                ticket availability.
              </p>
            </div>

            {/* Hero actions */}
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/history"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-white/10 px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/20 hover:text-gold"
              >
                <Shield className="h-4 w-4" />
                <span>Club History</span>
              </Link>

              <Link
                href="/history/trophies"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-5 py-3 text-[11px] font-bold text-brand-deep transition-all duration-300 hover:bg-white"
              >
                <Trophy className="h-4 w-4" />
                <span>Trophy Room</span>
              </Link>

              <Link
                href="/"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-5 py-3 text-[11px] font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Home Page</span>
              </Link>
            </div>
          </div>

          {/* Hero statistics */}
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-card border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <span className="block text-2xl font-bold text-gold">38</span>
              <span className="eyebrow text-[9px] text-white/60">
                NPFL Matches
              </span>
            </div>

            <div className="rounded-card border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <span className="block text-2xl font-bold text-white">
                {seasonFixtures.filter((fixture) => fixture.isHome).length}
              </span>
              <span className="eyebrow text-[9px] text-white/60">
                Home Matches
              </span>
            </div>

            <div className="rounded-card border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <span className="block text-2xl font-bold text-white">
                {seasonFixtures.filter((fixture) => !fixture.isHome).length}
              </span>
              <span className="eyebrow text-[9px] text-white/60">
                Away Matches
              </span>
            </div>

            <div className="rounded-card border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <span className="block text-2xl font-bold text-gold">
                {new Set(seasonFixtures.map((fixture) => fixture.month)).size}
              </span>
              <span className="eyebrow text-[9px] text-white/60">
                Months
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FIXTURES CLIENT
      ========================================================== */}
      <FixturesClient fixtures={seasonFixtures} />

      {/* =========================================================
          MATCHDAY GUIDE
      ========================================================== */}
      <section className="border-t border-ink/10 bg-smoke py-14 md:py-20">
        <div className={SHELL}>
          <SectionHeader
            title="Matchday at the Ogbemudia"
            subtitle="Everything you need to know before visiting the Samuel Ogbemudia Stadium"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {/* Gates */}
            <Reveal delay={0.05}>
              <div className="h-full rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" />
                </div>

                <h3 className="headline text-lg uppercase text-ink">
                  Stadium Gates
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Turnstiles open approximately two hours before kick-off.
                  Supporters are encouraged to arrive early to enjoy the
                  matchday atmosphere and move through security checks smoothly.
                </p>
              </div>
            </Reveal>

            {/* Colours */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-brand-dark">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="headline text-lg uppercase text-ink">
                  Colours & Attire
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Wear the iconic Bendel Insurance yellow with pride at the
                  Ogbemudia. Replica jerseys and official merchandise can be
                  promoted through the club store and matchday sales points.
                </p>
              </div>
            </Reveal>

            {/* Broadcast */}
            <Reveal delay={0.15}>
              <div className="h-full rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-deep text-gold">
                  <Calendar className="h-5 w-5" />
                </div>

                <h3 className="headline text-lg uppercase text-ink">
                  Broadcast & Streaming
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Selected matches may receive live or delayed broadcast
                  coverage. Broadcast information is displayed alongside each
                  fixture whenever it is available.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER NAVIGATION STRIP
      ========================================================== */}
      <section className="border-t border-ink/10 bg-white py-12">
        <div
          className={`${SHELL} flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left`}
        >
          <div>
            <span className="eyebrow text-[10px] text-steel">
              Quick Jump
            </span>

            <h3 className="headline text-xl uppercase text-ink">
              Explore More of Bendel Insurance FC
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/history"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-ink/20 bg-smoke px-5 py-2.5 text-[10px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Shield className="h-3.5 w-3.5" />
              <span>Club History</span>
            </Link>

            <Link
              href="/history/trophies"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-gold/60 bg-gold/10 px-5 py-2.5 text-[10px] font-bold text-brand-dark transition-colors hover:bg-gold hover:text-brand-deep"
            >
              <Trophy className="h-3.5 w-3.5" />
              <span>Trophy Room</span>
            </Link>

            <Link
              href="/"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-ink/20 bg-smoke px-5 py-2.5 text-[10px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <HomeIcon className="h-3.5 w-3.5" />
              <span>Home Page</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}