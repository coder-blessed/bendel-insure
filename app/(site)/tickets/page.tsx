import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Ticket } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, seasonFixtures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Matchday Tickets & Passes | Bendel Insurance FC",
  description:
    "Buy matchday tickets and season passes for Bendel Insurance FC at Samuel Ogbemudia Stadium. Official prices: Popular ₦500, VIP Extension ₦2,000, VVIP ₦5,000, Season Ticket ₦150,000.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const ticketTiers = [
  {
    name: "Popular",
    price: "₦500",
    period: "per match",
    desc: "General admission seating across the open stands.",
    gate: "Gates 4, 5 & 6",
    features: [
      "Matchday admission",
      "General open seating",
      "Access to stadium concessions",
    ],
    popular: false,
  },
  {
    name: "VIP Extension",
    price: "₦2,000",
    period: "per match",
    desc: "Covered grandstand seating with prime elevated match perspective.",
    gate: "Gates 2 & 3",
    features: [
      "Covered stand seating",
      "Elevated match viewing",
      "Dedicated entrance gate",
    ],
    popular: true,
  },
  {
    name: "VVIP",
    price: "₦5,000",
    period: "per match",
    desc: "State Box prime seating in the central executive tier.",
    gate: "Gate 1 (VVIP Entrance)",
    features: [
      "State Box prime seating",
      "Central covered view",
      "Executive gate entry",
    ],
    popular: false,
  },
  {
    name: "Season Ticket",
    price: "₦150,000",
    period: "full season",
    desc: "Full season pass for all Bendel Insurance NPFL home games at the Ogbemudia.",
    gate: "Dedicated Season Access",
    features: [
      "All NPFL home league matches",
      "Guaranteed reserved seating",
      "Official season ticket card",
    ],
    popular: false,
  },
];

export default function TicketsPage() {
  const homeMatches = seasonFixtures.filter((f) => f.isHome).slice(0, 6);

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
            <span className="text-gold font-semibold">Tickets</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Matchday & Season Passes
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Matchday Tickets
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Experience the thunderous roar of the Benin Arsenal live at Samuel Ogbemudia Stadium.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Ticket Categories & Pricing"
          subtitle="Official admission rates for Samuel Ogbemudia Stadium"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ticketTiers.map((tier, idx) => (
            <Reveal key={tier.name} delay={idx * 0.05}>
              <div
                className={`flex h-full flex-col justify-between rounded-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  tier.popular
                    ? "border-2 border-gold bg-white relative"
                    : "border border-ink/10 bg-white"
                }`}
              >
                <div>
                  {tier.popular && (
                    <span className="eyebrow absolute -top-3 right-6 rounded-pill bg-gold px-3 py-0.5 text-[9px] font-bold text-brand-deep uppercase">
                      Popular
                    </span>
                  )}
                  <h3 className="headline text-lg uppercase text-ink">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-xs text-steel">{tier.desc}</p>

                  <div className="mt-6 border-b border-ink/10 pb-6">
                    <span className="headline text-3xl font-bold text-brand-dark">
                      {tier.price}
                    </span>
                    <span className="text-xs text-steel ml-1.5">{tier.period}</span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-brand">
                    {tier.gate}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-ink/75">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-ink/10 pt-5">
                  <button
                    type="button"
                    className={`eyebrow w-full rounded-pill py-3 text-center text-xs font-bold transition-all ${
                      tier.popular
                        ? "bg-gold text-brand-deep hover:bg-brand-deep hover:text-white"
                        : "bg-smoke text-ink hover:bg-brand hover:text-white"
                    }`}
                  >
                    Select Ticket
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Upcoming Home Fixtures with Buy Action */}
      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            title="Next Home Matches"
            subtitle="Secure your tickets for upcoming clashes at Samuel Ogbemudia Stadium"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeMatches.map((fixture) => (
              <div
                key={fixture.id}
                className="flex flex-col justify-between rounded-card border border-ink/10 bg-smoke p-6 transition-all hover:border-brand/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow rounded-pill bg-brand/10 px-3 py-1 text-[9px] font-bold text-brand">
                      {fixture.competition}
                    </span>
                    <span className="text-xs font-semibold text-steel">
                      {fixture.kickoff}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {fixture.date}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-y border-ink/10 py-3">
                    <span className="headline text-base text-brand-dark uppercase">
                      {fixture.home.name}
                    </span>
                    <span className="eyebrow text-xs text-steel font-bold">VS</span>
                    <span className="headline text-base text-ink uppercase">
                      {fixture.away.name}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-steel">
                    <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>{fixture.venue}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="eyebrow inline-flex w-full items-center justify-center gap-2 rounded-pill bg-gold py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-gold"
                  >
                    <Ticket className="h-3.5 w-3.5" />
                    <span>Buy Match Tickets</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
