import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Trophy } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, squad, teamIdentities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Teams | Bendel Insurance FC",
  description:
    "Explore the teams representing Bendel Insurance FC: First Team in the NPFL, Feeder Team in the NNL, and the Academy U17 squad.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const teamsOverview = [
  {
    name: "First Team",
    league: "Nigeria Premier Football League (NPFL)",
    slug: "/teams/first",
    description:
      "The senior men's squad competing at the pinnacle of Nigerian football. 4x Federation Cup champions and 1994 CAF Cup winners.",
    homeGround: "Samuel Ogbemudia Stadium, Benin City",
    headCoach: "Greg Ikhenoba",
    manager: "Kennedy Boboye",
    badgeColor: "bg-brand text-white",
  },
  {
    name: "Feeder Team",
    league: "Nigeria National League (NNL)",
    slug: "/teams/feeder",
    description:
      "The official reserve and transition squad, developing young prospects and providing high-level competitive match experience.",
    homeGround: "Samuel Ogbemudia Stadium, Benin City",
    headCoach: "Edo State Development Coaches",
    manager: "Charles Ihimekpen",
    badgeColor: "bg-gold text-brand-deep",
  },
  {
    name: "Academy U17",
    league: "Youth Pro League & Cup Competitions",
    slug: "/teams/u17",
    description:
      "The bedrock of grassroots youth development, discovering and nurturing the finest football talents across Edo State and Nigeria.",
    homeGround: "Bendel Insurance Training Complex",
    headCoach: "Youth Academy Technical Team",
    manager: "Youth Development Board",
    badgeColor: "bg-ink text-white",
  },
];

export default function TeamsHubPage() {
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
            <span className="text-gold font-semibold">Teams</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              The Benin Arsenal Squads
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Teams
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              From our NPFL senior stars to our rising academy talents, discover the players wearing the green and gold with pride.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Squad Structure"
          subtitle="Three tiers of competitive excellence and talent development"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {teamsOverview.map((team, idx) => (
            <Reveal key={team.name} delay={idx * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
                <div>
                  <span className={`eyebrow inline-block rounded-pill px-3 py-1 text-[10px] font-bold uppercase ${team.badgeColor}`}>
                    {team.name}
                  </span>
                  <h2 className="headline mt-4 text-2xl uppercase text-ink">
                    {team.name}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-brand">
                    {team.league}
                  </p>
                  <p className="mt-3 text-sm text-steel leading-relaxed">
                    {team.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-ink/5 pt-4 text-xs text-ink/75">
                    <div>
                      <span className="font-semibold text-steel">Home Ground:</span>{" "}
                      <span>{team.homeGround}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-steel">Technical Staff:</span>{" "}
                      <span>{team.headCoach}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-ink/10 pt-5">
                  <Link
                    href={team.slug}
                    className="eyebrow inline-flex w-full items-center justify-between rounded-pill bg-smoke px-5 py-3 text-xs font-bold text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    <span>View {team.name} Squad</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Senior Squad Spotlight */}
      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            title="First Team Roster"
            subtitle="The players contending in the 2026/27 NPFL season"
            actionLabel="Full Squad List"
            actionHref="/teams/first"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {squad.slice(0, 8).map((player, idx) => (
              <Reveal key={player.number} delay={idx * 0.04}>
                <Link
                  href={`/teams/first/${player.name.toLowerCase().replaceAll(" ", "-")}`}
                  className="group flex flex-col overflow-hidden rounded-card border border-ink/10 bg-smoke transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
                    <Media
                      src={player.image}
                      tone={player.tone}
                      monogram={false}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="headline absolute top-3 right-3 text-4xl text-white/20">
                      {player.number}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span className="eyebrow inline-block rounded-pill bg-gold px-2.5 py-0.5 text-[9px] font-bold text-brand-deep">
                        {player.position}
                      </span>
                      <h3 className="headline mt-1 text-lg uppercase text-white">
                        {player.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
