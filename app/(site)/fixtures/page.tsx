import type { Metadata } from "next";
import Link from "next/link";
import { FixturesClient } from "@/components/fixtures-client";
import {
  ArrowLeft,
  ArrowRight,
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
  title: "Season Fixtures 2026/27 | Bendel Insurance FC",
  description:
    "Complete 2026/27 season fixture list for Bendel Insurance FC across the Nigeria Premier Football League (NPFL) and Federation Cup. Dates, kick-off times, venues, and ticket information.",
};

export default function FixturesPage() {
  const homeCount = seasonFixtures.filter((f) => f.isHome).length;
  const awayCount = seasonFixtures.filter((f) => !f.isHome).length;

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-brand-deep pt-24 pb-16 lg:pt-32 lg:pb-24">
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
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-white/60 transition-colors hover:text-gold"
            >
              <HomeIcon className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-gold font-semibold">Fixtures</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow rounded-pill bg-gold px-3.5 py-1.5 text-[10px] text-brand-deep font-bold">
              {club.season} Campaign
            </span>
            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] text-white/80">
              38 NPFL Matchdays
            </span>
            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] text-gold">
              Federation Cup
            </span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="headline text-4xl text-white uppercase sm:text-5xl lg:text-7xl">
                Season <span className="text-gold">Fixtures</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Follow every match of the Benin Arsenal for the {club.season} season.
                Full fixture schedule for the Nigeria Premier Football League and
                Federation Cup defense, with match times, venues, and ticket links.
              </p>
            </div>

            {/* Quick Navigation Action Buttons */}
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/history"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-white/10 px-5 py-3 text-[11px] text-white font-semibold transition-colors hover:bg-white/20 hover:text-gold"
              >
                <Shield className="h-4 w-4" />
                <span>Club History</span>
              </Link>
              <Link
                href="/history/trophies"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-5 py-3 text-[11px] text-brand-deep font-bold transition-all duration-300 hover:bg-white"
              >
                <Trophy className="h-4 w-4" />
                <span>Trophy Room</span>
              </Link>
              <Link
                href="/"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-5 py-3 text-[11px] text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Home Page</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fixtures Table & Filters Component */}
      <FixturesClient fixtures={seasonFixtures} />

      {/* Matchday Information & Stadium Guide */}
      <section className="bg-smoke py-14 md:py-20 border-t border-ink/10">
        <div className={SHELL}>
          <SectionHeader
            title="Matchday at the Ogbemudia"
            subtitle="Everything you need to know before visiting the Samuel Ogbemudia Stadium"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand mb-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="headline text-lg text-ink uppercase">Stadium Gates</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Turnstiles open 2 hours prior to kick-off. Supporters are advised
                  to arrive early to enjoy matchday entertainment and bypass security
                  checks smoothly.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-brand-dark mb-4">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="headline text-lg text-ink uppercase">Colours & Attire</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Wear your Yellow home jersey proudly at the Ogbemudia! Authentic replica kits and merchandise are on sale every home match and at the Official Club Store in Ogbe Stadium..
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-deep text-gold mb-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="headline text-lg text-ink uppercase">Broadcast & Streaming</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  There will be selected live match coverage and delayed broadcasts on the official NPFL YouTube channel, free and in HD. We will announce when our matches are broadcast.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Navigation Footer Strip */}
      <section className="border-t border-ink/10 bg-white py-12">
        <div className={`${SHELL} flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left`}>
          <div>
            <span className="eyebrow text-[10px] text-steel">Quick Jump</span>
            <h3 className="headline text-xl text-ink uppercase">
              Explore More of Bendel Insurance FC
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/history"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-ink/20 bg-smoke px-5 py-2.5 text-[10px] text-ink font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              <Shield className="h-3.5 w-3.5" />
              <span>Club History</span>
            </Link>
            <Link
              href="/history/trophies"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-gold/60 bg-gold/10 px-5 py-2.5 text-[10px] text-brand-dark font-bold transition-colors hover:bg-gold hover:text-brand-deep"
            >
              <Trophy className="h-3.5 w-3.5" />
              <span>Trophy Room</span>
            </Link>
            <Link
              href="/"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-ink/20 bg-smoke px-5 py-2.5 text-[10px] text-ink font-semibold transition-colors hover:border-brand hover:text-brand"
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
