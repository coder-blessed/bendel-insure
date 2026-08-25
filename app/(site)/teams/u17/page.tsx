import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Shield } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academy U17 Squad | Bendel Insurance FC",
  description:
    "The official Under-17 youth academy squad of Bendel Insurance Football Club, grooming future football stars in Edo State.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const u17Squad = [
  { name: "Marvelous Osayande", position: "Goalkeeper", number: 1, age: 16 },
  { name: "Samuel Enoma", position: "Defender", number: 2, age: 16 },
  { name: "Destiny Imasuen", position: "Defender", number: 4, age: 17 },
  { name: "Great Eboigbe", position: "Defender", number: 5, age: 16 },
  { name: "Peace Osawe", position: "Midfielder", number: 8, age: 16 },
  { name: "Collins Aisien", position: "Midfielder", number: 10, age: 17 },
  { name: "Confidence Ehigiator", position: "Winger", number: 7, age: 16 },
  { name: "Treasure Idehen", position: "Winger", number: 11, age: 15 },
  { name: "Precious Osaghae", position: "Forward", number: 9, age: 16 },
];

export default function Under17TeamPage() {
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
            <span className="text-gold font-semibold">Academy U17</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Grassroots Excellence
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Insurance U17 Academy
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Developing exceptional youth talent with world-class coaching, academic mentorship, and elite competitive match experience.
            </p>
          </div>
        </div>
      </section>

      {/* Roster & Program */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="eyebrow text-xs font-bold text-brand uppercase">Youth Academy</span>
              <h2 className="headline mt-2 text-3xl uppercase text-ink sm:text-4xl">
                The Nursery of Benin Football
              </h2>
              <p className="text-base text-steel leading-relaxed">
                The Bendel Insurance U17 Academy recruits the brightest young talents from grassroots football competitions, schools, and scouting networks across Edo State and beyond.
              </p>
              <p className="text-base text-steel leading-relaxed">
                Players receive comprehensive tactical, physical, and psychological training aligned with the historical attacking philosophy of the Benin Arsenal.
              </p>
              <div className="pt-4">
                <Link
                  href="/teams/academy"
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  <span>Explore Full Academy Program</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <div className="rounded-card border border-ink/10 bg-white p-6 shadow-md">
                <h3 className="headline text-lg uppercase text-brand-dark mb-4">
                  U17 Squad Roster
                </h3>
                <div className="divide-y divide-ink/5">
                  {u17Squad.map((player) => (
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
