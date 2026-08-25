import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield, Users } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Official Club Membership | Bendel Insurance FC",
  description:
    "Become an official Bendel Insurance FC member. Unlock priority matchday tickets, merchandise discounts, exclusive content and digital member passes.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const tiers = [
  {
    name: "Junior Arsenal",
    price: "₦5,000",
    period: "per year",
    eligibility: "Under 16 Supporters",
    desc: "For young passionate fans embarking on their journey with the Benin Arsenal.",
    perks: [
      "Official Junior Arsenal welcome pack",
      "Digital Junior Member Card",
      "Free entry to U17 & Feeder matches",
      "10% discount at the official club store",
      "Entry into matchday mascot ballots",
    ],
    popular: false,
  },
  {
    name: "Official Supporter",
    price: "₦12,000",
    period: "per year",
    eligibility: "Adult Supporters",
    desc: "The essential membership for dedicated fans attending matches at the Ogbemudia.",
    perks: [
      "Priority window for NPFL & Cup tickets",
      "Digital Membership Card with QR code",
      "15% discount at the official club store",
      "Full access to Insurance TV premium archive",
      "Exclusive voting rights in Player of the Month",
    ],
    popular: true,
  },
  {
    name: "Gold Member",
    price: "₦25,000",
    period: "per year",
    eligibility: "Dedicated Fans",
    desc: "Enhanced privileges including invitation to open training sessions and exclusive merchandise.",
    perks: [
      "All Supporter Tier benefits",
      "Guaranteed ticket allocation for derby matches",
      "Invitation to 2x open first team training sessions",
      "Official 2026/27 members scarf and lapel pin",
      "20% discount on all club merchandise",
    ],
    popular: false,
  },
  {
    name: "Patron VIP",
    price: "₦100,000",
    period: "per year",
    eligibility: "Corporate & Elite Patrons",
    desc: "The pinnacle of Benin Arsenal affiliation with executive hospitality and leadership dinners.",
    perks: [
      "All Gold Member benefits",
      "VIP State Box invitation for 2 NPFL matches",
      "Invitation to Annual Gala Dinner with Chairman & GM",
      "Personalized commemorative autographed jersey",
      "VIP stadium parking pass",
    ],
    popular: false,
  },
];

export default function MembershipPage() {
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
            <span className="text-gold font-semibold">Membership</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Stand with the Benin Arsenal
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Official Membership
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Join the official Bendel Insurance FC family. Unlock priority tickets, exclusive discounts, behind-the-scenes access, and digital membership passes.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Choose Your Membership Tier"
          subtitle="Annual packages tailored for every generation of Benin Arsenal supporter"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, idx) => (
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
                      Recommended
                    </span>
                  )}
                  <span className="eyebrow text-[10px] font-bold text-brand uppercase">
                    {tier.eligibility}
                  </span>
                  <h3 className="headline mt-1 text-xl uppercase text-ink">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-xs text-steel leading-relaxed">{tier.desc}</p>

                  <div className="mt-6 border-b border-ink/10 pb-6">
                    <span className="headline text-3xl font-bold text-brand-dark">
                      {tier.price}
                    </span>
                    <span className="text-xs text-steel ml-1.5">{tier.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-xs text-ink/80">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                        <span>{perk}</span>
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
                        : "bg-brand text-white hover:bg-brand-dark"
                    }`}
                  >
                    Join {tier.name}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
