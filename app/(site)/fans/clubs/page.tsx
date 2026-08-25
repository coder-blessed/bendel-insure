import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Shield } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Supporters Clubs & Fan Branches | Bendel Insurance FC",
  description:
    "Official directory of Bendel Insurance FC Supporters Clubs in Edo State, nationwide across Nigeria, and diaspora branches in the UK and USA.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const supportersBranches = [
  {
    city: "Benin City Central",
    state: "Edo State",
    leader: "Chief Osaro Guobadia",
    meetingVenue: "Samuel Ogbemudia Stadium Club House, Benin City",
    membersCount: "5,000+ Active Members",
    badge: "Headquarters Branch",
  },
  {
    city: "Warri & Delta Chapter",
    state: "Delta State",
    leader: "Comrade Ovie Agbaje",
    meetingVenue: "Effurun Civic Hall, Warri",
    membersCount: "1,200+ Members",
    badge: "Regional Chapter",
  },
  {
    city: "Lagos Branch",
    state: "Lagos State",
    leader: "Barrister Tony Ehigie",
    meetingVenue: "Surulere Sports Club, Lagos",
    membersCount: "2,500+ Members",
    badge: "Metro Chapter",
  },
  {
    city: "Abuja Federal Capital",
    state: "FCT Abuja",
    leader: "Engr. Kelvin Omorogbe",
    meetingVenue: "National Stadium Complex, Area 10, Abuja",
    membersCount: "1,800+ Members",
    badge: "FCT Branch",
  },
  {
    city: "United Kingdom Diaspora",
    state: "London, UK",
    leader: "Dr. Drew Uyi / Kingsley Osagie",
    meetingVenue: "London Community Hub & Virtual Forums",
    membersCount: "850+ Diaspora Members",
    badge: "International",
  },
  {
    city: "North America Diaspora",
    state: "Houston, Texas, USA",
    leader: "Ehis Ighodaro",
    meetingVenue: "Edo National Association Hall, Houston",
    membersCount: "600+ Diaspora Members",
    badge: "International",
  },
];

export default function SupportersClubsPage() {
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
            <span className="text-gold font-semibold">Supporters Clubs</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              The 12th Player
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Supporters Clubs
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              From King&apos;s Square in Benin to London and Houston, find your local official Bendel Insurance FC branch and stand with the Benin Arsenal.
            </p>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Official Branches"
          subtitle="Registered supporters branches affiliated with the club"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportersBranches.map((branch, idx) => (
            <Reveal key={branch.city} delay={idx * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-lg">
                <div>
                  <span className="eyebrow inline-block rounded-pill bg-gold/15 px-3 py-0.5 text-[9px] font-bold text-brand-deep uppercase">
                    {branch.badge}
                  </span>
                  <h3 className="headline mt-3 text-xl uppercase text-ink">
                    {branch.city}
                  </h3>
                  <p className="text-xs font-semibold text-brand">{branch.state}</p>

                  <div className="mt-5 space-y-2 border-t border-ink/5 pt-4 text-xs text-ink/75">
                    <div>
                      <span className="font-semibold text-steel">Branch Chairman:</span>{" "}
                      <span>{branch.leader}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-steel">Meeting Point:</span>{" "}
                      <span>{branch.meetingVenue}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-steel">Strength:</span>{" "}
                      <span>{branch.membersCount}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  <Link
                    href="/membership"
                    className="eyebrow inline-flex w-full items-center justify-center gap-1.5 rounded-pill bg-smoke py-2.5 text-xs font-bold text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    <span>Connect with Branch</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Start a Branch CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <div className="rounded-card bg-brand-dark p-8 text-white sm:p-12">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold font-bold uppercase text-xs">
                Official Affiliation
              </span>
              <h2 className="headline mt-2 text-3xl uppercase text-white sm:text-4xl">
                Start an Official Branch
              </h2>
              <p className="mt-4 text-sm text-white/80 leading-relaxed sm:text-base">
                Are you a group of passionate Bendel Insurance fans in Nigeria or abroad? You can register your chapter with the Edo State Sports Commission and club secretariat.
              </p>
              <div className="mt-8">
                <Link
                  href="/help"
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
                >
                  <span>Apply for Branch Registration</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
