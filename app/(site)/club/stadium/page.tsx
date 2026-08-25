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
    "Explore the iconic Samuel Ogbemudia Stadium in Benin City, Edo State. Discover stadium history, seating capacity, FIFA-standard pitch, Olympic facilities, matchday guides and gallery.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const stadiumStats = [
  { label: "Capacity", value: "12,000", sub: "All-seater covered stands" },
  { label: "Playing Surface", value: "FIFA Grade", sub: "Natural hybrid Bermuda turf" },
  { label: "Athletics Track", value: "8-Lane", sub: "World Athletics Tartan track" },
  { label: "Floodlights", value: "2,000+ Lux", sub: "Broadcast LED illumination" },
  { label: "Location", value: "Benin City", sub: "Ogbe, Stadium Road, Edo State" },
  { label: "Inaugurated", value: "1972", sub: "Renovated to Olympic grade" },
];

const galleryImages = [
  {
    title: "Main Bowl & Stadium Bowl",
    caption:
      "The 12,000-capacity covered arena with pristine natural turf and 8-lane Tartan track.",
    image: "/images/stadium/stadium-main-bowl.jpg",
    tag: "Main Bowl",
  },
  {
    title: "Grand Entrance & Main Facade",
    caption:
      "Modern architectural facade with smart glass canopy and automated electronic turnstiles.",
    image: "/images/stadium/stadium-entrance.jpg",
    tag: "Exterior",
  },
  {
    title: "Matchday Night Atmosphere",
    caption:
      "Electrifying evening matchday ambiance under high-powered LED floodlights.",
    image: "/images/stadium/stadium-night.jpg",
    tag: "Matchday",
  },
  {
    title: "Sports Complex & Aquatic Center",
    caption:
      "Olympic-standard 50m swimming pool and multipurpose indoor arena on the stadium grounds.",
    image: "/images/stadium/stadium-facilities.jpg",
    tag: "Facilities",
  },
];

const facilitiesList = [
  {
    title: "Natural Hybrid Grass Pitch",
    description:
      "State-of-the-art Bermuda grass surface equipped with underground sub-air drainage, automated subterranean matrix sprinklers, and rootzone temperature monitoring to withstand heavy rainfall.",
    icon: "🌱",
  },
  {
    title: "Olympic Tartan Athletics Track",
    description:
      "World Athletics-certified 8-lane synthetic rubberized running track designed for high-performance sprint and middle-distance athletic championships.",
    icon: "🏃",
  },
  {
    title: "Olympic Swimming & Aquatic Center",
    description:
      "50-meter 10-lane competition swimming pool, accompanied by a dedicated 10-meter diving well and grandstand for international aquatic events.",
    icon: "🏊",
  },
  {
    title: "Multipurpose Indoor Sports Arena",
    description:
      "Fully air-conditioned indoor hall accommodating basketball, volleyball, handball, badminton, gymnastics, boxing ring, wrestling mat, and weightlifting.",
    icon: "🏀",
  },
  {
    title: "Broadcast & VAR Control Suites",
    description:
      "Equipped with CAF/FIFA compliant Video Assistant Referee (VAR) workstations, ultra-high-definition commentary booths, and a 100-seat media workroom.",
    icon: "📺",
  },
  {
    title: "Smart Biometric Turnstiles & Security",
    description:
      "Contactless RFID ticketing barriers, biometric access control, full-perimeter high-resolution CCTV coverage, and segregated fan ingress corridors.",
    icon: "🛡️",
  },
];

const historicalMilestones = [
  {
    year: "1972",
    title: "Construction under Dr. Samuel Ogbemudia",
    description:
      "Commissioned by the visionary Military Governor of Mid-Western State, Brigadier General Samuel Ogbemudia, to serve as the epicentre of sports excellence in Midwestern Nigeria.",
  },
  {
    year: "1978",
    title: "The Golden Era & FA Cup Glory",
    description:
      "The home ground for Bendel Insurance's famous 3–0 FA Cup triumph over Enugu Rangers and the 1979 Nigerian league championship coronation.",
  },
  {
    year: "1994",
    title: "Continental CAF Cup Championship",
    description:
      "Bendel Insurance overturned a 1–0 first-leg deficit against Angola's Primeiro de Maio, roaring to a legendary 3–0 second-leg victory in Benin to lift the CAF Cup.",
  },
  {
    year: "2020",
    title: "Olympic-Standard Modernization",
    description:
      "Edo State Government completed a complete multi-billion naira transformation of the stadium into a world-class Olympic-grade sports complex ahead of the National Sports Festival (Edo 2020).",
  },
  {
    year: "2023",
    title: "Continental Return & Super Eagles Action",
    description:
      "Hosted Nigeria's Super Eagles in international qualifiers and saw Bendel Insurance defeat ASO Chlef and RS Berkane in the CAF Confederation Cup.",
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
              Fortress of the Benin Arsenal
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Samuel Ogbemudia Stadium
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              A fortress of football heritage and Olympic-grade modern sports excellence in the heart of Benin City, Edo State.
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
                href="#guide"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-gold"
              >
                <span>Matchday Fan Guide</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          KEY STATS STRIP
      ========================================================= */}
      <section className="relative z-20 -mt-10 mb-14">
        <div className={SHELL}>
          <Reveal>
            <div className="grid grid-cols-2 gap-4 rounded-card border border-ink/10 bg-white p-6 shadow-xl sm:grid-cols-3 lg:grid-cols-6">
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
          IMAGE GALLERY & VIRTUAL TOUR
      ========================================================= */}
      <section className={`${SHELL} py-12 md:py-16`}>
        <SectionHeader
          title="Stadium Gallery"
          subtitle="Experience the world-class arena from pitchside to the stands"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {galleryImages.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="group relative overflow-hidden rounded-card border border-ink/10 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="eyebrow absolute top-4 left-4 rounded-pill bg-gold px-3 py-1 text-[10px] font-bold text-brand-deep shadow">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="headline text-xl uppercase text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">
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
                  Heritage & Evolution
                </span>
                <h2 className="headline mt-3 text-3xl uppercase tracking-tight text-white sm:text-4xl">
                  The Story of a Cathedral of Sport
                </h2>
                <div className="mt-6 space-y-4 text-white/80 leading-relaxed text-sm sm:text-base">
                  <p>
                    Named in honour of Brigadier General Dr. Samuel Osaigbovo Ogbemudia — the illustrious Military Governor of the former Mid-Western and Bendel States — the stadium has stood for over half a century as the heart of sports in Edo State.
                  </p>
                  <p>
                    Originally opened as <strong>Ogbe Stadium</strong> in 1972, the venue witnessed the rise of Bendel Insurance FC into a continental giant. It was here that tactical pioneer Pa Alabi Aisien engineered historic Challenge Cup and league triumphs.
                  </p>
                  <p>
                    Recognizing the stadium's historic stature, the Edo State Government embarked on a comprehensive, world-class reconstruction project that modernized every square meter into an Olympic-standard sporting complex.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="headline text-2xl text-gold">1972</p>
                    <p className="text-xs text-white/60">Founded Year</p>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div>
                    <p className="headline text-2xl text-gold">2020</p>
                    <p className="text-xs text-white/60">Olympic Overhaul</p>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div>
                    <p className="headline text-2xl text-gold">100%</p>
                    <p className="text-xs text-white/60">Covered Seating</p>
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
                      <p className="mt-2.5 text-xs text-white/75 leading-relaxed">
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
          WORLD-CLASS FACILITIES & TECHNICAL SPECS
      ========================================================= */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="World-Class Facilities"
          subtitle="Built to international FIFA, CAF, and World Athletics standards"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilitiesList.map((f, i) => (
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
            subtitle="Everything you need for an unforgettable visit to the Ogbemudia"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Stand Allocation */}
            <div className="rounded-card border border-ink/10 bg-smoke p-6">
              <h3 className="headline text-lg uppercase text-brand-dark">
                Stadium Stands & Entry
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold">●</span>
                  <span><strong>VIP State Box:</strong> Gate 1 (Executive & VIP Hospitality passholders).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand">●</span>
                  <span><strong>Covered Main Stand:</strong> Gate 2 & 3 (Premium reserved seating).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-steel">●</span>
                  <span><strong>Popular Open Stands:</strong> Gates 4, 5 & 6 (General admission).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">●</span>
                  <span><strong>Visiting Supporters:</strong> Gate 7 (Segregated away fans sector).</span>
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
                  <span><strong>Ticket Scanners:</strong> E-tickets on mobile or printed barcode.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-brand" />
                  <span><strong>Assistance:</strong> Fan Support Booths located at Gate 1 & 4.</span>
                </li>
              </ul>
            </div>

            {/* Location & Directions */}
            <div className="rounded-card border border-ink/10 bg-smoke p-6">
              <h3 className="headline text-lg uppercase text-brand-dark">
                Location & Transport
              </h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                <strong>Address:</strong> Stadium Road, Ogbe Quarter, Benin City, Edo State, Nigeria.
              </p>
              <p className="mt-3 text-sm text-steel leading-relaxed">
                Easily accessible from King's Square (Ring Road) via Stadium Road. Located just 10 minutes drive from Benin City Airport. Secure matchday parking is available at designated civic car parks around Ogbe.
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
