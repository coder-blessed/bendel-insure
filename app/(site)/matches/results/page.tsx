import type { Metadata } from "next";
import Link from "next/link";
import { TeamBadge } from "@/components/brand";
import { ArrowRight, Calendar, MapPin, Trophy } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, TEAM_LOGOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Match Results | Bendel Insurance FC",
  description:
    "Official match results archive, scorelines, goal scorers and match reports for Bendel Insurance FC.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const recentResults = [
  {
    id: "fed-cup-final-2023",
    competition: "Federation Cup Final",
    date: "Wed 21 Jun 2023",
    venue: "Stephen Keshi Stadium, Asaba",
    home: "Bendel Insurance",
    away: "Enugu Rangers",
    homeScore: 1,
    awayScore: 0,
    scorers: "Imade Osarenkhoe 45' (pen)",
    summary:
      "A historic evening in Asaba as Imade Osarenkhoe's first-half penalty secured the 2023 Federation Cup, ending a 28-year wait for national silverware.",
  },
  {
    id: "caf-confed-2023",
    competition: "CAF Confederation Cup",
    date: "Sat 19 Aug 2023",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    home: "Bendel Insurance",
    away: "ASO Chlef",
    homeScore: 1,
    awayScore: 0,
    scorers: "Imade Osarenkhoe 42'",
    summary:
      "The Benin Arsenal made a triumphant return to continental football, defeating Algerian powerhouse ASO Chlef in front of 12,000 roaring fans in Benin.",
  },
  {
    id: "nnl-super-8-2022",
    competition: "NNL Super 8 Final",
    date: "Sun 18 Sep 2022",
    venue: "Nnamdi Azikiwe Stadium, Enugu",
    home: "Bendel Insurance",
    away: "Bayelsa United",
    homeScore: 2,
    awayScore: 1,
    scorers: "Sarki Ismael 24', Divine Nwachukwu 68'",
    summary:
      "Bendel Insurance were crowned champions of the Nigeria National League, sealing promotion back to the top flight in thrilling fashion.",
  },
];

export default function MatchResultsPage() {
  return (
    <main className="bg-smoke text-ink">
      {/* Hero Banner */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/90 to-black/75" />

        <div className={`${SHELL} relative z-10`}>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/fixtures" className="hover:text-gold">Matches</Link>
            <span>/</span>
            <span className="text-gold font-semibold">Results</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Match Archive
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Match Results
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Official match results, scorelines, scorers and reports from iconic Benin Arsenal encounters.
            </p>
          </div>
        </div>
      </section>

      {/* Results List */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Recent Results & Classic Matches"
          subtitle="Scorelines and match reports from historic victories"
        />

        <div className="mt-10 space-y-6">
          {recentResults.map((result, idx) => (
            <Reveal key={result.id} delay={idx * 0.06}>
              <div className="overflow-hidden rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-md md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
                  <span className="eyebrow rounded-pill bg-gold/15 px-3 py-1 text-[10px] font-bold text-brand-deep uppercase">
                    {result.competition}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-steel font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{result.date}</span>
                    <span>•</span>
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{result.venue}</span>
                  </div>
                </div>

                <div className="my-6 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
                  {/* Home */}
                  <div className="flex items-center gap-4">
                    <TeamBadge
                      name={result.home}
                      logo={TEAM_LOGOS[result.home]}
                      className="h-14 w-14 shrink-0"
                    />
                    <div>
                      <h3 className="headline text-xl uppercase text-ink">
                        {result.home}
                      </h3>
                      {result.homeScore > result.awayScore && (
                        <span className="eyebrow text-[9px] font-bold text-brand uppercase">
                          Winner
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="headline rounded-control bg-ink px-6 py-2 text-3xl font-bold text-white tabular-nums">
                      {result.homeScore} – {result.awayScore}
                    </div>
                    <span className="eyebrow mt-1.5 text-[9px] font-bold text-steel uppercase">
                      Full Time
                    </span>
                  </div>

                  {/* Away */}
                  <div className="flex items-center justify-end gap-4 text-right">
                    <div>
                      <h3 className="headline text-xl uppercase text-ink">
                        {result.away}
                      </h3>
                      {result.awayScore > result.homeScore && (
                        <span className="eyebrow text-[9px] font-bold text-brand uppercase">
                          Winner
                        </span>
                      )}
                    </div>
                    <TeamBadge
                      name={result.away}
                      logo={TEAM_LOGOS[result.away]}
                      className="h-14 w-14 shrink-0"
                    />
                  </div>
                </div>

                {/* Scorers & Summary */}
                <div className="border-t border-ink/5 pt-4 text-xs text-steel">
                  <p>
                    <strong className="text-ink font-semibold">Scorers:</strong> {result.scorers}
                  </p>
                  <p className="mt-2 text-ink/75 leading-relaxed text-sm">
                    {result.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
