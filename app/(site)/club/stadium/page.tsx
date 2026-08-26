import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Info,
  MapPin,
  Ticket,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, seasonFixtures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Samuel Ogbemudia Stadium | Home of Bendel Insurance FC",
  description:
    "Official guide to Samuel Ogbemudia Stadium in Benin City, Edo State. Matchday ticketing rates: Popular ₦500, VIP Extension ₦2,000, VVIP ₦5,000, Season Ticket ₦150,000.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const stadiumStats = [
  { label: "Capacity", value: "12,000", sub: "All-seater stadium" },
  { label: "Athletics Track", value: "8-Lane", sub: "Tartan athletics track" },
  { label: "Location", value: "Benin City", sub: "Stadium Road, Ogbe Quarter" },
  { label: "Home Team", value: "Bendel Insurance", sub: "The Benin Arsenal" },
];

const ticketRates = [
  {
    name: "Popular",
    price: "₦500",
    desc: "General admission seating across the open stands.",
    gate: "Gates 4, 5 & 6",
  },
  {
    name: "VIP Extension",
    price: "₦2,000",
    desc: "Covered grandstand seating with prime elevated match perspective.",
    gate: "Gates 2 & 3",
  },
  {
    name: "VVIP",
    price: "₦5,000",
    desc: "State Box prime seating in the central executive tier.",
    gate: "Gate 1 (VVIP Entrance)",
  },
  {
    name: "Season Ticket",
    price: "₦150,000",
    desc: "Full season pass for all Bendel Insurance NPFL home games.",
    gate: "Dedicated Season Access",
  },
];

const galleryImages = [
  {
    title: "Main Bowl & Stadium Arena",
    caption:
      "The 12,000-capacity arena with natural pitch and 8-lane Tartan track.",
    image: "/images/stadium/stadium-main-bowl.jpg",
    tag: "Main Bowl",
  },
  {
    title: "Grand Entrance & Main Facade",
    caption:
      "Modern architectural entrance facade on Stadium Road, Benin City.",
    image: "/images/stadium/stadium-entrance.jpg",
    tag: "Exterior",
  },
  {
    title: "Matchday Evening Atmosphere",
    caption:
      "Electrifying matchday atmosphere in Benin City supporting the Benin Arsenal.",
    image: "/images/stadium/stadium-night.jpg",
    tag: "Matchday",
  },
];

const stadiumFeatures = [
  {
    title: "12,000 All-Seater Bowl",
    description:
      "Modern covered spectator stands providing clear sightlines from every angle of the stadium.",
    icon: "🏟️",
  },
  {
    title: "8-Lane Tartan Athletics Track",
    description:
      "Full-standard synthetic rubberized running track surrounding the main pitch.",
    icon: "🏃",
  },
  {
    title: "Matchday Gates & Turnstiles",
    description:
      "Organized turnstiles and gate access points for fast and secure fan entry.",
    icon: "🎟️",
  },
];

const historicalMilestones = [
  {
    year: "1972",
    title: "Commissioned under Dr. Samuel Ogbemudia",
    description:
      "Built under Military Governor Brigadier General Samuel Ogbemudia as the home of sports in Edo State.",
  },
  {
    year: "1978",
    title: "FA Cup Glory & Championship Era",
    description:
      "Home fortress during Bendel Insurance's famous 3–0 FA Cup triumph and national league title runs.",
  },
  {
    year: "1994",
    title: "Continental CAF Cup Championship",
    description:
      "Bendel Insurance overturned a first-leg deficit to win 3–0 in Benin and lift the continental CAF Cup.",
  },
  {
    year: "2020",
    title: "Modern Overhaul",
    description:
      "Edo State Government completed an extensive modernization of the stadium ahead of the National Sports Festival.",
  },
];

export default function StadiumPage() {
  const homeFixtures = seasonFixtures
    .filter((f) => f.isHome)
    .slice(0, 3);

  return (
    <main className="bg-smoke text-ink">
      {/* ========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: "url('/images/stadium/stadium-main-bowl.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/85 to-black/70" />

        <div className={`${SHELL} relative z-10`}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span>/</span>
            <Link href="/club" className="transition-colors hover:text-gold">
              Club
            </Link>
            <span>/</span>
            <span className="text-gold font-semibold">Samuel Ogbemudia Stadium</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Home of the Benin Arsenal
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Samuel Ogbemudia Stadium
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              The iconic home of Bendel Insurance Football Club in the heart of Benin City, Edo State.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tickets"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3.5 text-xs font-bold text-brand-deep transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                <Ticket className="h-4 w-4" />
                <span>Buy Matchday Tickets</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#pricing"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-gold"
              >
                <span>View Ticket Prices</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          KEY STATS STRIP (Cleaned: Playing Surface, Lights, Inaugurated removed)
      ========================================================= */}
      <section className="relative z-20 -mt-10 mb-14">
        <div className={SHELL}>
          <Reveal>
            <div className="grid grid-cols-2 gap-4 rounded-card border border-ink/10 bg-white p-6 shadow-xl sm:grid-cols-4">
              {stadiumStats.map((stat) => (
                <div key={stat.label} className="border-r border-ink/5 pr-4 last:border-none">
                  <span className="eyebrow text-[10px] font-bold text-steel uppercase">
                    {stat.label}
                  </span>
                  <p className="headline mt-1 text-2xl text-brand-dark uppercase">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-ink/60">{stat.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          TICKET PRICES SECTION
      ========================================================= */}
      <section id="pricing" className={`${SHELL} py-12 md:py-16`}>
        <SectionHeader
          title="Stadium Ticket Pricing"
          subtitle="Official admission rates for matches at Samuel Ogbemudia Stadium"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ticketRates.map((tier, idx) => (
            <Reveal key={tier.name} delay={idx * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all hover:border-brand hover:shadow-md">
                <div>
                  <h3 className="headline text-lg uppercase text-ink">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-xs text-steel">{tier.desc}</p>
                  <div className="mt-4 border-b border-ink/10 pb-4">
                    <span className="headline text-3xl font-bold text-brand-dark">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-brand">
                    {tier.gate}
                  </p>
                </div>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  <Link
                    href="/tickets"
                    className="eyebrow block w-full rounded-pill bg-brand py-2.5 text-center text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    Get Ticket
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================================================
          IMAGE GALLERY
      ========================================================= */}
      <section className={`${SHELL} py-12 md:py-16`}>
        <SectionHeader
          title="Stadium Gallery"
          subtitle="Views of the Samuel Ogbemudia Stadium"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {galleryImages.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="group relative overflow-hidden rounded-card border border-ink/10 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="eyebrow absolute top-4 left-4 rounded-pill bg-gold px-3 py-1 text-[10px] font-bold text-brand-deep shadow">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="headline text-lg uppercase text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-steel leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================================================
          STADIUM HISTORY & HERITAGE
      ========================================================= */}
      <section className="bg-brand-deep py-16 text-white md:py-24">
        <div className={SHELL}>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow text-xs font-bold text-gold uppercase">
                  Heritage & History
                </span>
                <h2 className="headline mt-3 text-3xl uppercase tracking-tight text-white sm:text-4xl">
                  The Historic Home of Edo Football
                </h2>
                <div className="mt-6 space-y-4 text-white/80 leading-relaxed text-sm sm:text-base">
                  <p>
                    Named in honour of Brigadier General Dr. Samuel Osaigbovo Ogbemudia — the former Military Governor of Mid-Western and Bendel States — the stadium has stood for decades as the home of sports in Edo State.
                  </p>
                  <p>
                    Originally known as <strong>Ogbe Stadium</strong>, this venue witnessed the legendary rise of Bendel Insurance FC, hosting iconic FA Cup and league championship triumphs.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-6 border-t border-white/10 pt-6">
                  <div>
                    <p className="headline text-2xl text-gold">12,000</p>
                    <p className="text-xs text-white/60">Seating Capacity</p>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div>
                    <p className="headline text-2xl text-gold">Benin City</p>
                    <p className="text-xs text-white/60">Location</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <h3 className="eyebrow mb-2 text-xs text-gold uppercase">
                    Key Historical Milestones
                  </h3>
                  {historicalMilestones.map((m) => (
                    <div
                      key={m.year}
                      className="rounded-card border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-gold/50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="headline rounded bg-gold px-2.5 py-1 text-sm font-bold text-brand-deep">
                          {m.year}
                        </span>
                        <h4 className="headline text-base uppercase text-white">
                          {m.title}
                        </h4>
                      </div>
                      <p className="mt-2 text-xs text-white/75 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STADIUM FEATURES
      ========================================================= */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Stadium Features"
          subtitle="Key elements of the Samuel Ogbemudia Stadium"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stadiumFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-md">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="headline mt-4 text-lg uppercase text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================================================
          MATCHDAY FAN GUIDE
      ========================================================= */}
      <section id="guide" className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            title="Matchday Guide"
            subtitle="Essential information for visiting the stadium on matchday"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Stand Allocation */}
            <div className="rounded-card border border-ink/10 bg-smoke p-6">
              <h3 className="headline text-lg uppercase text-brand-dark">
                Stands & Gates
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold">●</span>
                  <span><strong>VVIP (₦5,000):</strong> Gate 1 (VVIP Entrance).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand">●</span>
                  <span><strong>VIP Extension (₦2,000):</strong> Gates 2 & 3 (Covered Stand).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-steel">●</span>
                  <span><strong>Popular (₦500):</strong> Gates 4, 5 & 6 (Open Stands).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-700">●</span>
                  <span><strong>Season Ticket (₦150,000):</strong> Dedicated Pass Entry.</span>
                </li>
              </ul>
            </div>

            {/* Matchday Schedule */}
            <div className="rounded-card border border-ink/10 bg-smoke p-6">
              <h3 className="headline text-lg uppercase text-brand-dark">
                Timings & Access
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand" />
                  <span><strong>Gates Open:</strong> 2 hours before scheduled kickoff.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand" />
                  <span><strong>Turnstiles Close:</strong> 15 minutes after kickoff.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Ticket className="h-4 w-4 text-brand" />
                  <span><strong>Tickets:</strong> Physical tickets or digital barcode.</span>
                </li>
              </ul>
            </div>

            {/* Location & Directions */}
            <div className="rounded-card border border-ink/10 bg-smoke p-6">
              <h3 className="headline text-lg uppercase text-brand-dark">
                Location
              </h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                <strong>Address:</strong> Stadium Road, Ogbe Quarter, Benin City, Edo State, Nigeria.
              </p>
              <p className="mt-3 text-sm text-steel leading-relaxed">
                Located near King's Square (Ring Road) via Stadium Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          UPCOMING MATCHES AT THE OGBEMUDIA
      ========================================================= */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Upcoming at the Ogbemudia"
          subtitle="Cheer on the Benin Arsenal at home this season"
          actionLabel="All fixtures"
          actionHref="/fixtures"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {homeFixtures.map((fixture) => (
            <div
              key={fixture.id}
              className="flex flex-col justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand hover:shadow-lg"
            >
              <div>
                <span className="eyebrow rounded-pill bg-gold/15 px-3 py-1 text-[9px] font-bold text-brand-deep">
                  {fixture.competition}
                </span>
                <p className="mt-3 text-xs font-semibold text-steel">
                  {fixture.date} • {fixture.kickoff}
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="headline text-base text-brand-dark uppercase">
                    {fixture.home.name}
                  </span>
                  <span className="eyebrow text-xs text-steel font-bold">VS</span>
                  <span className="headline text-base text-ink uppercase">
                    {fixture.away.name}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-ink/10 pt-4">
                <Link
                  href="/tickets"
                  className="eyebrow inline-flex w-full items-center justify-center gap-2 rounded-pill bg-brand py-2.5 text-center text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  <Ticket className="h-3.5 w-3.5" />
                  <span>Buy Tickets</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
