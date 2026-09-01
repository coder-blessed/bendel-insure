import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { storeProducts } from "@/lib/checkout";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Official Club Store | Bendel Insurance FC",
  description:
    "Shop official 2026/27 Bendel Insurance FC home, away and third kits, training wear, caps, scarves and merchandise.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";


export default function StorePage() {
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
            <span className="text-gold font-semibold">Store</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Official Merchandise
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              The Club Store
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Wear the yellow and green with pride. Official 2026/27 NPFL match kits, training gear, and authentic supporter merchandise.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="2026/27 Collection"
          subtitle="Authentic merchandise delivered across Nigeria and worldwide"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {storeProducts.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.05}>
              <div className="group flex h-full flex-col justify-between overflow-hidden rounded-card border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
                    <Media
                      src={product.image}
                      tone={0}
                      monogram={false}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="eyebrow absolute top-3 left-3 rounded-pill bg-gold px-2.5 py-0.5 text-[9px] font-bold text-brand-deep shadow">
                      {product.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="eyebrow text-[10px] font-bold text-steel uppercase">
                      {product.category}
                    </span>
                    <h3 className="headline mt-1 text-lg uppercase text-ink">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-steel leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <p className="headline mt-4 text-xl font-bold text-brand-dark">
                      ₦{product.price.toLocaleString("en-NG")}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/checkout?type=merch&id=${product.id}&name=${encodeURIComponent(product.name)}`}
                    className="eyebrow block w-full rounded-pill bg-brand py-3 text-center text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Delivery & Authentication Banner */}
      <section className="bg-white py-14">
        <div className={SHELL}>
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div className="p-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-brand">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="headline mt-3 text-base uppercase text-ink">100% Official Authentic</h4>
              <p className="mt-1 text-xs text-steel">Direct from Bendel Insurance FC club house</p>
            </div>
            <div className="p-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-brand">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="headline mt-3 text-base uppercase text-ink">Nationwide & Global Delivery</h4>
              <p className="mt-1 text-xs text-steel">Speedy dispatch across Nigeria and international diaspora</p>
            </div>
            <div className="p-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-brand">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="headline mt-3 text-base uppercase text-ink">Matchday Pickup Available</h4>
              <p className="mt-1 text-xs text-steel">Collect at Samuel Ogbemudia Stadium Store on matchday</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
