import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Shield, Trophy } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, squad } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ player: string }>;
}): Promise<Metadata> {
  const { player: slug } = await params;
  const player = squad.find(
    (p) => p.name.toLowerCase().replaceAll(" ", "-") === slug
  );

  if (!player) {
    return { title: "Player Not Found | Bendel Insurance FC" };
  }

  return {
    title: `${player.name} #${player.number} | Bendel Insurance FC`,
    description: `Official profile and player statistics for ${player.name}, ${player.position} wearing jersey number ${player.number} for Bendel Insurance FC.`,
  };
}

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default async function PlayerProfilePage({
  params,
}: {
  params: Promise<{ player: string }>;
}) {
  const { player: slug } = await params;
  const player = squad.find(
    (p) => p.name.toLowerCase().replaceAll(" ", "-") === slug
  );

  if (!player) {
    notFound();
  }

  const relatedPlayers = squad
    .filter((p) => p.number !== player.number)
    .slice(0, 4);

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
            <Link href="/teams/first" className="hover:text-gold">First Team</Link>
            <span>/</span>
            <span className="text-gold font-semibold">{player.name}</span>
          </nav>

          <Link
            href="/teams/first"
            className="eyebrow mb-6 inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to First Team Squad</span>
          </Link>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
                #{player.number} • {player.position}
              </span>
              <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
                {player.name}
              </h1>
              <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed max-w-2xl">
                First-team {player.position.toLowerCase()} for the Benin Arsenal, defending the green and gold at Samuel Ogbemudia Stadium.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <span className="headline text-8xl md:text-9xl text-gold/30 font-bold tabular-nums">
                #{player.number}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Player Details */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Card Image */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden rounded-card border border-ink/10 bg-white p-4 shadow-xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-control bg-ink">
                  <Media
                    src={player.image}
                    tone={player.tone}
                    monogram={false}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="headline absolute top-4 right-4 text-6xl text-white/25 tabular-nums">
                    {player.number}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="eyebrow rounded-pill bg-gold px-3 py-1 text-[10px] font-bold text-brand-deep uppercase">
                      {player.position}
                    </span>
                    <h2 className="headline mt-2 text-2xl uppercase text-white">
                      {player.name}
                    </h2>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Player Bio & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.05}>
              <div className="rounded-card border border-ink/10 bg-white p-8 shadow-sm">
                <h3 className="headline text-xl uppercase text-brand-dark">
                  Player Overview
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-6 border-b border-ink/10 pb-6 sm:grid-cols-3">
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Squad Number</span>
                    <p className="headline text-2xl text-ink font-bold">#{player.number}</p>
                  </div>
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Position</span>
                    <p className="headline text-2xl text-brand font-bold">{player.position}</p>
                  </div>
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Club</span>
                    <p className="headline text-2xl text-ink font-bold">Bendel Insurance</p>
                  </div>
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Nationality</span>
                    <p className="headline text-2xl text-ink font-bold">Nigeria 🇳🇬</p>
                  </div>
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Home Venue</span>
                    <p className="headline text-xl text-ink font-bold">Ogbemudia</p>
                  </div>
                  <div>
                    <span className="eyebrow text-[10px] text-steel uppercase">Status</span>
                    <p className="headline text-xl text-green-600 font-bold">Active</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-steel leading-relaxed">
                  <p>
                    {player.name} is a key contributor to the Bendel Insurance FC squad for the 2026/27 Nigeria Premier Football League season under Technical Manager Kennedy Boboye and Chief Coach Greg Ikhenoba.
                  </p>
                  <p>
                    Known for relentless work rate, tactical discipline, and dedication to the Benin Arsenal shirt, {player.name} represents the pride of Edo State football at Samuel Ogbemudia Stadium.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Other Squad Members */}
            <div>
              <h3 className="headline text-lg uppercase text-ink mb-4">
                Other Squad Members
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedPlayers.map((p) => (
                  <Link
                    key={p.number}
                    href={`/teams/first/${p.name.toLowerCase().replaceAll(" ", "-")}`}
                    className="group flex items-center justify-between rounded-control border border-ink/10 bg-white p-4 transition-all hover:border-brand hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="headline text-lg text-brand font-bold tabular-nums">
                        #{p.number}
                      </span>
                      <div>
                        <p className="headline text-sm uppercase text-ink group-hover:text-brand">
                          {p.name}
                        </p>
                        <p className="text-xs text-steel">{p.position}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-steel transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
