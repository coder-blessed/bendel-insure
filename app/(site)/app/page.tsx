import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield, Ticket } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Official Mobile App | Bendel Insurance FC",
  description:
    "Download the official Bendel Insurance FC mobile app for iOS and Android. Live match commentary, video highlights, e-tickets and push alerts.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const appFeatures = [
  {
    title: "Live Match Centre & Commentary",
    desc: "Real-time score updates, minute-by-minute text commentary, lineups, and live statistics for every NPFL fixture.",
  },
  {
    title: "Insurance TV On-The-Go",
    desc: "Stream full match replays, highlights, press conferences, and exclusive behind-the-scenes player documentaries.",
  },
  {
    title: "Digital Matchday E-Tickets",
    desc: "Purchase and store matchday tickets and season passes directly in your mobile wallet for contactless stadium turnstile entry.",
  },
  {
    title: "Instant Breaking News & Alerts",
    desc: "Get instant push notifications for breaking transfer news, starting lineups 1 hour before kickoff, and goal alerts.",
  },
];

export default function MobileAppPage() {
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
            <span className="text-gold font-semibold">Official App</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              iOS & Android
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              The Official Club App
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Stay connected with the Benin Arsenal 24/7. Live match feeds, mobile tickets, exclusive videos, and breaking news in the palm of your hand.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#download"
                className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3.5 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
              >
                <span>Download on App Store</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#download"
                className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="App Features & Capabilities"
          subtitle="Everything a Benin Arsenal fan needs on matchday and beyond"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {appFeatures.map((feat, idx) => (
            <Reveal key={feat.title} delay={idx * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="headline mt-4 text-base uppercase text-ink">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs text-steel leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <div className="rounded-card bg-brand-dark p-8 text-white sm:p-12">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold font-bold uppercase text-xs">
                Free Download
              </span>
              <h2 className="headline mt-2 text-3xl uppercase text-white sm:text-4xl">
                Get the App Today
              </h2>
              <p className="mt-4 text-sm text-white/80 leading-relaxed sm:text-base">
                Available for free on all modern Apple iPhone (iOS 15+) and Android smartphones. Never miss a goal or matchday update at Samuel Ogbemudia Stadium.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="eyebrow rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
                >
                  Download for iOS
                </button>
                <button
                  type="button"
                  className="eyebrow rounded-pill border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
