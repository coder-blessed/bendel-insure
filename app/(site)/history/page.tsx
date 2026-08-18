import type { Metadata } from "next";
import Link from "next/link";
import { Crest, Wordmark } from "@/components/brand";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  HomeIcon,
  Medal,
  Shield,
  Sparkles,
  Trophy,
} from "@/components/icons";
import { Reveal, RuleReveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import {
  club,
  clubLegends,
  historyMilestones,
  trophyCabinet,
} from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export const metadata: Metadata = {
  title: "Club History & Heritage | Bendel Insurance FC",
  description:
    "The legendary journey of Bendel Insurance Football Club: from the Vipers of Benin in 1972, golden league titles, CAF Cup triumph in 1994, to the 2023 Federation Cup victory.",
};

export default function HistoryPage() {
  const totalTrophies = trophyCabinet.reduce((acc, t) => acc + t.titles, 0);

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-brand-deep pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(120% 90% at 20% 0%, rgba(247,198,33,0.18) 0%, transparent 60%)",
              "radial-gradient(90% 70% at 85% 100%, rgba(6,138,63,0.25) 0%, transparent 70%)",
              "linear-gradient(180deg, transparent 40%, rgba(2,47,23,0.95) 100%)",
            ].join(", "),
          }}
        />

        {/* Mown turf overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 8.333%, transparent 8.333% 16.666%)",
          }}
        />

        <div className={`${SHELL} relative`}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-white/60 transition-colors hover:text-gold"
            >
              <HomeIcon className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-gold font-medium">Club History</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow rounded-pill bg-gold px-3.5 py-1.5 text-[10px] text-brand-deep font-bold">
              Heritage & Glory
            </span>
            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] text-white/80">
              Founded {club.founded}
            </span>
            <span className="eyebrow rounded-pill border border-white/20 px-3.5 py-1.5 text-[10px] text-gold">
              {club.nickname}
            </span>
          </div>

          <h1 className="headline mt-5 max-w-4xl text-4xl text-white uppercase sm:text-5xl lg:text-7xl">
            The Story of the <span className="text-gold">Benin Arsenal</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
            From the pioneering spirit of the Vipers of Benin in 1972 to continental
            glory in 1994 and the modern Federation Cup triumph in 2023. Over five
            decades of passion, pride, and silverware in Benin City.
          </p>

          {/* Quick Nav Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/history/trophies"
              className="eyebrow group inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-[11px] text-brand-deep font-bold transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-gold/20"
            >
              <Trophy className="h-4 w-4" />
              <span>Enter Trophy Room ({totalTrophies} Honours)</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/fixtures"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/5 px-5 py-3 text-[11px] text-white transition-colors hover:border-gold hover:bg-white/10 hover:text-gold"
            >
              <Calendar className="h-4 w-4" />
              <span>Season Fixtures</span>
            </Link>
            <Link
              href="/"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/5 px-5 py-3 text-[11px] text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Trophy Room Showcase Card */}
      <section className={`${SHELL} -mt-8 relative z-10`}>
        <Reveal>
          <div className="overflow-hidden rounded-card border-2 border-gold/30 bg-gradient-to-br from-brand-deep via-brand-dark to-black p-6 text-white shadow-2xl md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="h-4 w-4" />
                  <span className="eyebrow text-[10px]">Official Silverware Collection</span>
                </div>
                <h2 className="headline mt-2 text-2xl uppercase sm:text-3xl lg:text-4xl">
                  Visit the Benin Arsenal Trophy Room
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                  Explore every major title won by Bendel Insurance FC, including the 1994
                  CAF Cup, 3 consecutive West African Club Championships, 2 National
                  League titles, and 4 Federation Cups.
                </p>

                {/* Trophy counters preview */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-control border border-white/10 bg-white/5 p-3 text-center">
                    <span className="headline block text-2xl text-gold">1</span>
                    <span className="eyebrow block text-[9px] text-white/60">CAF Cup</span>
                  </div>
                  <div className="rounded-control border border-white/10 bg-white/5 p-3 text-center">
                    <span className="headline block text-2xl text-gold">3</span>
                    <span className="eyebrow block text-[9px] text-white/60">WAFU Titles</span>
                  </div>
                  <div className="rounded-control border border-white/10 bg-white/5 p-3 text-center">
                    <span className="headline block text-2xl text-gold">2</span>
                    <span className="eyebrow block text-[9px] text-white/60">NPFL Titles</span>
                  </div>
                  <div className="rounded-control border border-white/10 bg-white/5 p-3 text-center">
                    <span className="headline block text-2xl text-gold">4</span>
                    <span className="eyebrow block text-[9px] text-white/60">FA / Fed Cups</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/history/trophies"
                  className="eyebrow group inline-flex w-full items-center justify-center gap-2.5 rounded-pill bg-gold px-6 py-4 text-center text-xs text-brand-deep font-bold transition-all duration-300 hover:bg-white sm:w-auto"
                >
                  <Trophy className="h-4 w-4" />
                  <span>Open Trophy Room</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#timeline"
                  className="eyebrow inline-flex w-full items-center justify-center rounded-pill border border-white/20 px-5 py-3 text-center text-[10px] text-white/70 transition-colors hover:border-gold/60 hover:text-white sm:w-auto"
                >
                  Explore Timeline Below ↓
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Chapter Overview & Quick Anchors */}
      <section className={`${SHELL} py-14 md:py-20`}>
        <SectionHeader
          title="Eras of Greatness"
          subtitle="Five decades of historic triumphs, character, and revival"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {historyMilestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 0.06}>
              <div className="group relative flex h-full flex-col justify-between rounded-card border border-ink/10 bg-smoke p-6 transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="headline text-2xl text-brand font-bold">
                      {milestone.year}
                    </span>
                    {milestone.badgeText ? (
                      <span className="eyebrow rounded-pill bg-brand/10 px-2.5 py-1 text-[9px] text-brand font-semibold">
                        {milestone.badgeText}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="headline mt-3 text-lg text-ink uppercase group-hover:text-brand-dark transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-steel uppercase">
                    {milestone.era}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">
                    {milestone.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-ink/8 pt-4">
                  <span className="eyebrow block text-[9px] text-steel">Key Figures</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {milestone.keyFigures.map((person) => (
                      <span
                        key={person}
                        className="rounded-control bg-white px-2 py-0.5 text-xs text-ink/80 border border-ink/10"
                      >
                        {person}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detailed Chronological History Narrative */}
      <section id="timeline" className="relative overflow-hidden bg-brand-deep text-white py-16 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(90% 70% at 10% 20%, rgba(247,198,33,0.1) 0%, transparent 60%)",
              "linear-gradient(180deg, transparent 40%, rgba(2,47,23,0.9) 100%)",
            ].join(", "),
          }}
        />

        <div className={`${SHELL} relative`}>
          <SectionHeader
            title="Chronicles of the Benin Arsenal"
            subtitle="The definitive timeline of Bendel Insurance Football Club"
            dark
          />

          <div className="relative mt-12 space-y-12 border-l-2 border-gold/30 pl-6 sm:pl-10 md:space-y-16">
            {historyMilestones.map((milestone, idx) => (
              <Reveal key={milestone.year} delay={idx * 0.05}>
                <div className="relative group">
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-brand-deep text-gold shadow"
                  >
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>

                  <div className="rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/8 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="headline text-2xl text-gold sm:text-3xl">
                          {milestone.year}
                        </span>
                        <span className="eyebrow rounded-pill bg-white/10 px-3 py-1 text-[10px] text-white/80">
                          {milestone.era}
                        </span>
                      </div>
                      {milestone.badgeText ? (
                        <span className="eyebrow rounded-pill border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] text-gold">
                          {milestone.badgeText}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="headline mt-4 text-xl text-white uppercase sm:text-2xl">
                      {milestone.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      {milestone.summary}
                    </p>

                    <div className="mt-5 space-y-2">
                      {milestone.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2.5 text-xs text-white/70 sm:text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="eyebrow text-[9px] text-gold/80">Key Architects:</span>
                        {milestone.keyFigures.map((fig) => (
                          <span
                            key={fig}
                            className="rounded-pill bg-white/10 px-2.5 py-0.5 text-xs text-white/90"
                          >
                            {fig}
                          </span>
                        ))}
                      </div>

                      {idx === 0 || idx === 1 || idx === 2 || idx === 4 ? (
                        <Link
                          href="/history/trophies"
                          className="eyebrow inline-flex items-center gap-1.5 text-[10px] text-gold transition-colors hover:text-white"
                        >
                          <span>View Silverware in Trophy Room</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Club Identity, Crest & Colours */}
      <section className="bg-smoke py-16 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            title="Colours & Heritage"
            subtitle="The symbolic identity behind the Benin Arsenal"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="headline mt-4 text-xl text-ink uppercase">
                  From Vipers to Arsenal
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  Founded originally as the <strong>Vipers of Benin</strong> in 1972,
                  the club quickly captured the national imagination. Their fast,
                  sharp, attacking style led supporters and journalists to christen
                  them <strong>The Benin Arsenal</strong> — a name that has come to
                  symbolize relentless football prowess and tactical bravery.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-brand-dark">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="headline mt-4 text-xl text-ink uppercase">
                  Yellow, Green & White
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  Our iconic <strong>Yellow shirt and shorts</strong> represent the
                  golden spirit, warmth, and vibrancy of Edo State at the Samuel
                  Ogbemudia Stadium. The <strong>Green away kit</strong> pays homage
                  to the rich fertility and national pride of Nigeria, while the
                  <strong> White neutral kit</strong> stands for unity and heritage.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-deep text-gold">
                  <Crest className="h-7 w-auto" />
                </div>
                <h3 className="headline mt-4 text-xl text-ink uppercase">
                  Samuel Ogbemudia Stadium
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  Our historic cathedral in Benin City with a 12,000 capacity.
                  Modernized into an Olympic-standard sports arena, the Ogbemudia
                  remains an intimidating fortress where African champions have been
                  crowned and legendary cup nights are forged.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hall of Fame / Club Legends */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <RuleReveal className="mb-4 max-w-24" />
            <h2 className="headline text-3xl text-ink uppercase sm:text-4xl">
              Hall of Fame & Club Legends
            </h2>
            <p className="mt-2 text-sm text-steel sm:text-base">
              The managers, captains, and heroes who wrote Bendel Insurance into Nigerian football folklore
            </p>
          </div>
          <Link
            href="/history/trophies"
            className="eyebrow group inline-flex items-center gap-2 rounded-pill border border-ink/15 bg-white px-4 py-2.5 text-[11px] text-ink transition-colors hover:border-brand/40 hover:text-brand"
          >
            <span>See Trophies Won</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clubLegends.map((legend, index) => (
            <Reveal key={legend.name} delay={index * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="eyebrow rounded-pill bg-brand/10 px-2.5 py-1 text-[9px] text-brand-dark font-bold">
                      {legend.period}
                    </span>
                    <Medal className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="headline mt-4 text-xl text-ink uppercase">
                    {legend.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-brand">
                    {legend.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">
                    {legend.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-ink/8 pt-4">
                  <span className="eyebrow block text-[9px] text-steel">Major Silverware / Milestone</span>
                  <p className="mt-1 text-xs text-brand-dark font-medium">
                    {legend.achievements}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trophy Cabinet Teaser & Direct Navigation */}
      <section className="relative overflow-hidden bg-brand-dark text-white py-16 md:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(100% 80% at 50% 0%, rgba(247,198,33,0.15) 0%, transparent 60%)",
              "linear-gradient(180deg, transparent 40%, rgba(2,47,23,0.95) 100%)",
            ].join(", "),
          }}
        />

        <div className={`${SHELL} relative text-center`}>
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold mb-4">
              <Trophy className="h-8 w-8" />
            </div>
            <h2 className="headline text-3xl uppercase sm:text-4xl lg:text-5xl">
              Step Inside the <span className="text-gold">Trophy Room</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Delve into every trophy, final match, historic opponent, and golden
              moment that defined Bendel Insurance FC as a powerhouse of African football.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/history/trophies"
                className="eyebrow group inline-flex items-center gap-2.5 rounded-pill bg-gold px-8 py-4 text-xs text-brand-deep font-bold transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gold/30"
              >
                <Trophy className="h-4 w-4" />
                <span>Enter Trophy Room</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/fixtures"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-6 py-4 text-xs text-white transition-colors hover:border-gold hover:text-gold"
              >
                <Calendar className="h-4 w-4" />
                <span>View 2026/27 Fixtures</span>
              </Link>
              <Link
                href="/"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-6 py-4 text-xs text-white/70 transition-colors hover:border-white/50 hover:text-white"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Return to Home</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
