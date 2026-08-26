import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Partners } from "@/components/partners";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Official Club Sponsors & Partners | Bendel Insurance FC",
  description:
    "Official sponsors of Bendel Insurance FC: Edo State Government and Olivia Table Water.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default function PartnersPage() {
  return (
    <main className="bg-smoke text-ink">
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
            <span className="text-gold font-semibold">Sponsors</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Official Partners & Sponsors
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Club Sponsors
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Proudly sponsored by the Edo State Government and Olivia Table Water.
            </p>
          </div>
        </div>
      </section>

      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Official Club Sponsors"
          subtitle="The official sponsors powering the Benin Arsenal"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {partners.principal.map((sponsor, idx) => (
            <Reveal key={sponsor.name} delay={idx * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-card border border-ink/10 bg-white p-8 shadow-sm transition-all hover:border-brand hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-between border-b border-ink/10 pb-6">
                    <div className="relative h-20 w-56">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="eyebrow rounded-pill bg-brand/10 px-3 py-1 text-[10px] font-bold text-brand uppercase">
                      Official Sponsor
                    </span>
                  </div>

                  <div className="mt-6">
                    <span className="eyebrow text-xs font-bold text-gold uppercase">
                      {sponsor.role}
                    </span>
                    <h3 className="headline mt-1 text-2xl uppercase text-ink">
                      {sponsor.name}
                    </h3>
                    <p className="mt-3 text-sm text-steel leading-relaxed">
                      {sponsor.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <div className="rounded-card bg-brand-dark p-8 text-white sm:p-12">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold font-bold uppercase text-xs">
                Commercial Inquiries
              </span>
              <h2 className="headline mt-2 text-3xl uppercase text-white sm:text-4xl">
                Partner with Bendel Insurance FC
              </h2>
              <p className="mt-4 text-sm text-white/80 leading-relaxed sm:text-base">
                Discover matchday branding, digital media partnerships, and community grassroots programs at Samuel Ogbemudia Stadium.
              </p>
              <div className="mt-8">
                <Link
                  href="/help"
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
                >
                  <span>Contact Sponsorship Secretariat</span>
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
