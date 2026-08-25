import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Crest } from "@/components/brand";
import { ArrowRight, Trophy, Users, Shield } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, management } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the Club | Bendel Insurance FC",
  description:
    "Learn about Bendel Insurance Football Club, the Benin Arsenal. Explore club leadership, identity, mission, management team, stadium and heritage.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const executiveTeam = [
  {
    role: "Chairman",
    name: management.chairman,
    bio: "Visionary sports administrator and leader driving the strategic modernization and international repositioning of Bendel Insurance FC.",
    image: "/images/chairman.jpg",
  },
  {
    role: "General Manager",
    name: management.generalManager,
    bio: "Former captain and 1994 CAF Cup champion who oversees daily football operations, administration, and team logistics.",
  },
  {
    role: "Technical Manager",
    name: management.technicalManager,
    bio: "Experienced NPFL championship-winning tactician leading the technical roadmap and squad development strategy.",
  },
  {
    role: "Chief Coach",
    name: management.chiefCoach,
    bio: "Seasoned first team coach focusing on tactical discipline, player fitness, and matchday game plans.",
  },
  {
    role: "Sports Commission Chairman",
    name: management.sportsCommissionChairman,
    bio: "Executive Chairman of the Edo State Sports Commission, providing institutional governance and state support.",
  },
  {
    role: "Technical Adviser",
    name: management.technicalAdviser,
    bio: "Legendary pioneer coach of the 1970s golden era serving as the club's venerable football sage and adviser.",
  },
];

const clubValues = [
  {
    title: "Excellence & Ambition",
    desc: "Striving for the highest sporting standards across all national and continental competitions.",
  },
  {
    title: "Edo Heritage & Pride",
    desc: "Proudly representing the rich culture, resilience, and sporting legacy of the ancient kingdom of Benin and Edo State.",
  },
  {
    title: "Youth Development",
    desc: "Investing in grassroots talent through the Feeder Team and Academy to groom the next generation of football stars.",
  },
  {
    title: "Community & Fans",
    desc: "Building an inclusive family of passionate supporters at home in Nigeria and across the global diaspora.",
  },
];

export default function ClubOverviewPage() {
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
            <span className="text-gold font-semibold">Club</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Club Identity & Leadership
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              The Benin Arsenal
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Founded in 1972, Bendel Insurance Football Club is one of Nigeria&apos;s most revered football institutions, rooted in the heritage of Benin City and driven by a vision of modern excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Identity & Facts */}
      <section className={`${SHELL} py-14 md:py-20`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex flex-col items-center rounded-card border border-ink/10 bg-white p-8 text-center shadow-lg">
                <Crest className="h-28" />
                <h2 className="headline mt-6 text-2xl uppercase text-brand-dark">
                  {club.name}
                </h2>
                <p className="eyebrow text-xs text-gold font-bold">
                  {club.nickname}
                </p>
                <div className="mt-6 w-full space-y-3 border-t border-ink/10 pt-6 text-left text-sm">
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-steel">Founded:</span>
                    <span className="font-semibold text-ink">{club.founded} (as Vipers of Benin)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-steel">Home Ground:</span>
                    <Link href="/club/stadium" className="font-semibold text-brand hover:underline">
                      {club.stadium}
                    </Link>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-steel">League:</span>
                    <span className="font-semibold text-ink">{club.league}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-steel">Home Colours:</span>
                    <span className="font-semibold text-ink">{club.homeColours}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-steel">Away Colours:</span>
                    <span className="font-semibold text-ink">{club.awayColours}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-steel">Governing Body:</span>
                    <span className="font-semibold text-ink">{management.governingBody}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.05}>
              <span className="eyebrow text-xs font-bold text-brand uppercase">
                About the Institution
              </span>
              <h2 className="headline mt-2 text-3xl uppercase text-ink sm:text-4xl">
                A Legacy of Football Glory
              </h2>
              <p className="text-base text-steel leading-relaxed">
                Bendel Insurance Football Club was created in 1972 by military administrator Dr. Samuel Osaigbovo Ogbemudia as the sporting arm of Bendel Insurance Limited. The team quickly earned the moniker "The Benin Arsenal" for their fearless, attacking style of play and sharp tactical execution.
              </p>
              <p className="text-base text-steel leading-relaxed">
                Over more than five decades, the club has collected 11 major honours, including the Nigerian Premier League title, multiple FA / Federation Cups, consecutive West African Club Championships (WAFU), and the historic 1994 CAF Cup continental triumph.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <Link
                  href="/history"
                  className="group flex items-center justify-between rounded-card border border-ink/10 bg-white p-5 shadow-sm transition-all hover:border-brand hover:shadow-md"
                >
                  <div>
                    <h3 className="headline text-base uppercase text-ink group-hover:text-brand">
                      Full Club History
                    </h3>
                    <p className="text-xs text-steel">From 1972 to the modern era</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/history/trophies"
                  className="group flex items-center justify-between rounded-card border border-ink/10 bg-white p-5 shadow-sm transition-all hover:border-brand hover:shadow-md"
                >
                  <div>
                    <h3 className="headline text-base uppercase text-ink group-hover:text-brand">
                      Trophy Room
                    </h3>
                    <p className="text-xs text-steel">Explore our 11 major titles</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            title="Club Leadership & Management"
            subtitle="The executive and technical team steering Bendel Insurance FC forward"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executiveTeam.map((exec, idx) => (
              <Reveal key={exec.name} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-smoke p-6">
                  <div>
                    {exec.image ? (
                      <div className="mb-4 relative h-36 w-full overflow-hidden rounded-control bg-ink/10">
                        <Image
                          src={exec.image}
                          alt={exec.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-deep text-gold">
                        <Users className="h-6 w-6" />
                      </div>
                    )}
                    <span className="eyebrow text-[10px] font-bold text-brand uppercase">
                      {exec.role}
                    </span>
                    <h3 className="headline mt-1 text-xl uppercase text-ink">
                      {exec.name}
                    </h3>
                    <p className="mt-2 text-xs text-steel leading-relaxed">
                      {exec.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Home Ground Banner */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <div className="relative overflow-hidden rounded-card bg-brand-deep text-white shadow-2xl">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/images/stadium/stadium-entrance.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <span className="eyebrow rounded-pill bg-gold px-3.5 py-1 text-[10px] font-bold text-brand-deep uppercase">
              Our Fortress
            </span>
            <h2 className="headline mt-4 text-3xl uppercase text-white sm:text-4xl">
              Samuel Ogbemudia Stadium
            </h2>
            <p className="mt-3 text-sm text-white/80 leading-relaxed sm:text-base">
              A 12,000 all-seater Olympic standard sporting arena with a FIFA-grade hybrid pitch, 8-lane Tartan athletics track, and world-class facilities in Benin City.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/club/stadium"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
              >
                <span>Explore Stadium & Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tickets"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Buy Tickets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-smoke pb-16 md:pb-24">
        <div className={SHELL}>
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide the Benin Arsenal on and off the pitch"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clubValues.map((val, i) => (
              <Reveal key={val.title} delay={i * 0.05}>
                <div className="rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-brand">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="headline mt-4 text-base uppercase text-ink">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-xs text-steel leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
