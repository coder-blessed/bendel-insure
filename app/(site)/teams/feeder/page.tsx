import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Shield } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, matches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Feeder Team | Bendel Insurance FC",
  description:
    "Discover the Bendel Insurance Feeders squad competing in the Nigeria National League (NNL) and nurturing the next generation of football stars.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const feederSquad = [
  { name: "Godstime Osaro", position: "Goalkeeper", number: 1, age: 20 },
  { name: "Blessing Igbineweka", position: "Defender", number: 3, age: 19 },
  { name: "Osasere Egharevba", position: "Defender", number: 5, age: 21 },
  { name: "Bright Omoregie", position: "Defender", number: 6, age: 20 },
  { name: "Emanuel Agbonlahor", position: "Midfielder", number: 8, age: 19 },
  { name: "Junior Iyamu", position: "Midfielder", number: 10, age: 20 },
  { name: "Friday Okundaye", position: "Winger", number: 7, age: 19 },
  { name: "Victor Omoruyi", position: "Forward", number: 9, age: 21 },
  { name: "Prosper Osagie", position: "Forward", number: 11, age: 20 },
];

export default function FeederTeamPage() {
  const feederMatches = matches.feeder;

  return (
    <main className="bg-smoke text-ink">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/stadium/stadium-main-bowl.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/90 to-black/75" />

        <div className={`${SHELL} relative z-10`}>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/teams" className="hover:text-gold">Teams</Link>
            <span>/</span>
            <span className="text-gold font-semibold">Feeder Team</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Nigeria National League
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Bendel Insurance Feeders
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              The official reserve and transition squad of Bendel Insurance FC, bridging the youth academy and the NPFL senior team through intense competitive football.
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="eyebrow text-xs font-bold text-brand uppercase">Development Pathway</span>
              <h2 className="headline mt-2 text-3xl uppercase text-ink sm:text-4xl">
                Preparing Tomorrow&apos;s First-Team Stars
              </h2>
              <p className="text-base text-steel leading-relaxed">
                The Bendel Insurance Feeder Team provides young prospects with high-stakes competitive action in the Nigeria National League and state FA Cup competitions.
              </p>
              <p className="text-base text-steel leading-relaxed">
                Under the strategic oversight of the Edo State Sports Commission and General Manager Charles Ihimekpen, the Feeders program has produced multiple first-team regulars and national youth internationals.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-ink/10 pt-6">
                <div>
                  <p className="headline text-2xl text-brand font-bold">NNL</p>
                  <p className="text-xs text-steel">Competition Tier</p>
                </div>
                <div>
                  <p className="headline text-2xl text-brand font-bold">U-21</p>
                  <p className="text-xs text-steel">Average Age Profile</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-md">
                <h3 className="headline text-lg uppercase text-brand-dark mb-4">
                  Feeder Team Roster
                </h3>
                <div className="divide-y divide-ink/5">
                  {feederSquad.map((player) => (
                    <div key={player.number} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <span className="headline text-sm font-bold text-gold tabular-nums">
                          #{player.number}
                        </span>
                        <div>
                          <p className="font-semibold text-ink text-sm">{player.name}</p>
                          <p className="text-xs text-steel">{player.position}</p>
                        </div>
                      </div>
                      <span className="text-xs text-steel">{player.age} yrs</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
