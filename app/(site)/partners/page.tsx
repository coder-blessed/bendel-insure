import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield } from "@/components/icons";
import { Partners } from "@/components/partners";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Official Partners & Sponsors | Bendel Insurance FC",
  description:
    "Explore the official partners, principal sponsors and global brands powering Bendel Insurance Football Club.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default function PartnersPage() {
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
            <span className="text-gold font-semibold">Partners</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Corporate & Commercial Alliances
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Partners
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              We are proud to partner with visionary institutions and iconic global brands committed to sporting excellence and community development in Edo State.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Principal & Global Partners"
          subtitle="The corporate powerhouses standing behind the Benin Arsenal"
        />

        <div className="mt-10 rounded-card border border-ink/10 bg-white p-8 shadow-sm md:p-12">
          <Partners />
        </div>
      </section>

      {/* Partnership Opportunities CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <div className="rounded-card bg-brand-dark p-8 text-white sm:p-12">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold font-bold uppercase text-xs">
                Commercial Opportunities
              </span>
              <h2 className="headline mt-2 text-3xl uppercase text-white sm:text-4xl">
                Partner with Bendel Insurance FC
              </h2>
              <p className="mt-4 text-sm text-white/80 leading-relaxed sm:text-base">
                Align your brand with one of Nigeria&apos;s most historic football institutions. Discover stadium branding, shirt sponsorships, digital broadcast integrations, and community grassroots programs.
              </p>
              <div className="mt-8">
                <Link
                  href="/help"
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
                >
                  <span>Inquire About Sponsorships</span>
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
