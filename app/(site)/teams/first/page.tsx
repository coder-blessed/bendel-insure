import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, squad } from "@/lib/content";

export const metadata: Metadata = {
  title: "First Team Squad | Bendel Insurance FC",
  description:
    "Meet the 2026/27 Bendel Insurance FC First Team squad competing in the Nigeria Premier Football League.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const positions = ["Goalkeeper", "Defender", "Midfielder", "Winger", "Forward"] as const;

export default function FirstTeamSquadPage() {
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
            <Link href="/teams" className="hover:text-gold">Teams</Link>
            <span>/</span>
            <span className="text-gold font-semibold">First Team</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              NPFL 2026/27 Campaign
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              First Team Squad
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              The official senior roster of the Benin Arsenal defending our colours at Samuel Ogbemudia Stadium and across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Squad Sections by Position */}
      <div className={`${SHELL} py-16 md:py-24 space-y-16`}>
        {positions.map((pos) => {
          const players = squad.filter(
            (p) => p.position.toLowerCase() === pos.toLowerCase()
          );
          if (players.length === 0) return null;

          return (
            <section key={pos}>
              <SectionHeader
                title={`${pos}s`}
                subtitle={`First team ${pos.toLowerCase()} roster`}
              />

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {players.map((player, idx) => (
                  <Reveal key={player.number} delay={idx * 0.05}>
                    <Link
                      href={`/teams/first/${player.name.toLowerCase().replaceAll(" ", "-")}`}
                      className="group flex flex-col overflow-hidden rounded-card border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
                        <Media
                          src={player.image}
                          tone={player.tone}
                          monogram={false}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <span className="headline absolute top-3 right-3 text-5xl text-white/20 tabular-nums">
                          {player.number}
                        </span>
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <span className="eyebrow inline-block rounded-pill bg-gold px-3 py-1 text-[9px] font-bold text-brand-deep uppercase">
                            #{player.number} • {player.position}
                          </span>
                          <h3 className="headline mt-2 text-xl uppercase text-white">
                            {player.name}
                          </h3>
                          <span className="eyebrow mt-3 flex items-center gap-1.5 text-[10px] text-white/70 transition-colors group-hover:text-gold">
                            View Player Profile
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
