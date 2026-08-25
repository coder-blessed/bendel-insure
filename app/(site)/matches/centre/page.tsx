import type { Metadata } from "next";
import Link from "next/link";
import { TeamBadge } from "@/components/brand";
import { ArrowRight, Calendar, Clock, MapPin, Ticket, Shield } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, seasonFixtures, TEAM_LOGOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Match Centre | Bendel Insurance FC",
  description:
    "Live Match Centre: lineups, real-time match timeline, stats, head-to-head records and tactical analysis for Bendel Insurance FC.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default function MatchCentrePage() {
  const nextMatch = seasonFixtures[0];

  return (
    <main className="bg-smoke text-ink">
      {/* Hero Match Spotlight */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/stadium/stadium-night.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/90 to-black/80" />

        <div className={`${SHELL} relative z-10`}>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/fixtures" className="hover:text-gold">Matches</Link>
            <span>/</span>
            <span className="text-gold font-semibold">Match Centre</span>
          </nav>

          {/* Match Card */}
          <div className="overflow-hidden rounded-card border-2 border-gold/40 bg-white/5 p-6 backdrop-blur-md shadow-2xl md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <span className="eyebrow rounded-pill bg-gold/20 px-3.5 py-1 text-xs font-bold text-gold uppercase">
                {nextMatch.competition} • Matchday 1
              </span>
              <div className="flex items-center gap-2 text-xs text-white/75">
                <Calendar className="h-4 w-4 text-gold" />
                <span>{nextMatch.date}</span>
                <span>•</span>
                <Clock className="h-4 w-4 text-gold" />
                <span>{nextMatch.kickoff}</span>
              </div>
            </div>

            {/* Teams Duel */}
            <div className="my-8 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {/* Home */}
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <TeamBadge
                  name={nextMatch.home.name}
                  logo={nextMatch.home.logo}
                  className="h-20 w-20 shrink-0"
                />
                <div>
                  <span className="eyebrow text-[10px] font-bold text-gold uppercase">
                    Home
                  </span>
                  <h1 className="headline mt-1 text-3xl uppercase text-white sm:text-4xl">
                    {nextMatch.home.name}
                  </h1>
                  <p className="text-xs text-white/60">The Benin Arsenal</p>
                </div>
              </div>

              {/* VS */}
              <div className="flex flex-col items-center justify-center">
                <span className="headline text-4xl text-gold font-bold">VS</span>
                <span className="eyebrow mt-2 rounded-pill bg-white/10 px-4 py-1 text-[10px] uppercase text-white/80">
                  Upcoming
                </span>
              </div>

              {/* Away */}
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row-reverse sm:text-right">
                <TeamBadge
                  name={nextMatch.away.name}
                  logo={nextMatch.away.logo}
                  className="h-20 w-20 shrink-0"
                />
                <div>
                  <span className="eyebrow text-[10px] font-bold text-white/60 uppercase">
                    Away
                  </span>
                  <h2 className="headline mt-1 text-3xl uppercase text-white sm:text-4xl">
                    {nextMatch.away.name}
                  </h2>
                  <p className="text-xs text-white/60">Warri Wolves FC</p>
                </div>
              </div>
            </div>

            {/* Venue & Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <MapPin className="h-4 w-4 text-gold shrink-0" />
                <span>{nextMatch.venue}</span>
              </div>
              <Link
                href="/tickets"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
              >
                <Ticket className="h-4 w-4" />
                <span>Buy Matchday Tickets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Match Details & Head to Head */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Match Preview & Analysis */}
          <div className="lg:col-span-8 space-y-8">
            <Reveal>
              <div className="rounded-card border border-ink/10 bg-white p-8 shadow-sm">
                <h3 className="headline text-2xl uppercase text-brand-dark">
                  Match Preview: Niger Delta Derby
                </h3>
                <div className="mt-4 space-y-4 text-sm text-steel leading-relaxed">
                  <p>
                    The 2026/27 Nigeria Premier Football League season kicks off with a marquee Niger Delta showdown at the Samuel Ogbemudia Stadium in Benin City.
                  </p>
                  <p>
                    Bendel Insurance will also welcome their supporters back to the stadium after serving their three-match behind-closed-doors sanction. With Chairman Emperor Jarrett Tenebe and Technical Manager Kennedy Boboye at the helm, the Benin Arsenal are primed for a dominant start.
                  </p>
                  <p>
                    Warri Wolves travel to Benin looking to cause an upset, but the Ogbemudia has historically been a fortress for Bendel Insurance.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6 sm:grid-cols-3">
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Competition</span>
                    <p className="font-semibold text-ink text-sm">NPFL Matchday 1</p>
                  </div>
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Referee</span>
                    <p className="font-semibold text-ink text-sm">TBA (NPFL Panel)</p>
                  </div>
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Broadcast</span>
                    <p className="font-semibold text-brand text-sm">{nextMatch.broadcast}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tactical Lineup Preview */}
            <Reveal delay={0.05}>
              <div className="rounded-card border border-ink/10 bg-white p-8 shadow-sm">
                <h3 className="headline text-xl uppercase text-brand-dark mb-4">
                  Expected Formation & Tactical Setup
                </h3>
                <div className="rounded-control bg-brand-deep p-6 text-white text-center">
                  <span className="eyebrow text-gold font-bold uppercase text-xs">
                    Bendel Insurance (4-3-3 Attacking)
                  </span>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-xs font-semibold">
                    <div className="bg-white/10 p-3 rounded">
                      <p className="text-gold font-bold">Attack</p>
                      <p className="mt-1">Efe Oghenekaro • Peter Uwaifo • Kelvin Itoya</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded">
                      <p className="text-gold font-bold">Midfield</p>
                      <p className="mt-1">Osaretin Igbinoba • Chinedu Okoye • Sadiq Yakubu</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded">
                      <p className="text-gold font-bold">Defense & GK</p>
                      <p className="mt-1">Ndifreke Effiong • Tosin Adegbite • Amas Obasogie</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Head to Head & Match Stats */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <h3 className="headline text-lg uppercase text-brand-dark mb-4">
                  Head-to-Head Record
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-ink/5">
                    <span className="text-steel">Total Meetings:</span>
                    <span className="font-bold text-ink">14</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-ink/5">
                    <span className="text-steel">Insurance Wins:</span>
                    <span className="font-bold text-brand">7</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-ink/5">
                    <span className="text-steel">Draws:</span>
                    <span className="font-bold text-steel">4</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-ink/5">
                    <span className="text-steel">Warri Wolves Wins:</span>
                    <span className="font-bold text-ink">3</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-steel">Ogbemudia Win Rate:</span>
                    <span className="font-bold text-gold">78%</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Stadium Info Card */}
            <Reveal delay={0.15}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <h3 className="headline text-lg uppercase text-brand-dark mb-2">
                  Match Venue
                </h3>
                <p className="text-xs text-steel leading-relaxed">
                  Samuel Ogbemudia Stadium, Benin City. 12,000 capacity all-seater covered stadium with FIFA-grade natural grass pitch.
                </p>
                <div className="mt-4 pt-4 border-t border-ink/10">
                  <Link
                    href="/club/stadium"
                    className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                  >
                    <span>View Stadium Guide & Directions</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
