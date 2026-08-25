import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield, Users } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Youth Academy | Bendel Insurance FC",
  description:
    "Discover the Bendel Insurance Youth Academy: grassroots football development, training philosophy, scouting trials, and modern facilities.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const academyPillars = [
  {
    title: "Tactical & Technical Mastery",
    desc: "Teaching fluid passing, quick positional rotations, and defensive solidity in line with the Benin Arsenal identity.",
  },
  {
    title: "Academic & Character Education",
    desc: "Ensuring all youth players balance rigorous football training with quality schooling and moral discipline.",
  },
  {
    title: "Elite Physical Conditioning",
    desc: "Access to modern gym facilities, sports nutritionists, and injury prevention physiotherapists at Samuel Ogbemudia Stadium.",
  },
  {
    title: "Direct Pro Pathway",
    desc: "Seamless progression pathway from U15/U17 academy squads to the Feeder Team (NNL) and First Team (NPFL).",
  },
];

export default function AcademyPage() {
  return (
    <main className="bg-smoke text-ink">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/stadium/stadium-facilities.jpg')",
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
            <span className="text-gold font-semibold">Academy</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Youth Development Program
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Benin Arsenal Academy
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Developing world-class football talent, building athletic resilience, and shaping the future stars of Nigerian and international football.
            </p>
          </div>
        </div>
      </section>

      {/* Academy Pillars */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Academy Methodology"
          subtitle="A holistic approach to athletic, tactical, and personal development"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academyPillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="headline mt-4 text-base uppercase text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-steel leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scouting & Trials CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <div className="rounded-card bg-brand-dark p-8 text-white sm:p-12">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold font-bold uppercase text-xs">
                Scouting & Grassroots Trials
              </span>
              <h2 className="headline mt-2 text-3xl uppercase text-white sm:text-4xl">
                Join the Benin Arsenal Academy
              </h2>
              <p className="mt-4 text-sm text-white/80 leading-relaxed sm:text-base">
                Open screening sessions and scouting combines are conducted annually under the supervision of the Edo State Sports Commission and club technical staff at Samuel Ogbemudia Stadium.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/help"
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
                >
                  <span>Inquire About Trials</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/teams/u17"
                  className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  <span>View U17 Squad</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
