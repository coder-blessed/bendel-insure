import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Official Club Store | Bendel Insurance FC",
  description:
    "Shop official 2026/27 Bendel Insurance FC home, away and third kits, training wear, caps, scarves and merchandise.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const storeProducts = [
  {
    id: "home-kit-2627",
    name: "2026/27 Official Home Jersey",
    category: "Match Kit",
    price: "₦25,000",
    tag: "Official Matchwear",
    image: "https://picsum.photos/seed/bendel-home-kit/800/1000",
    tone: 0,
    desc: "Iconic vibrant yellow shirt with green trim, breathable aerodynamic fabric, and high-definition crest.",
  },
  {
    id: "away-kit-2627",
    name: "2026/27 Official Away Jersey",
    category: "Match Kit",
    price: "₦25,000",
    tag: "Official Matchwear",
    image: "https://picsum.photos/seed/bendel-away-kit/800/1000",
    tone: 3,
    desc: "Classic green body with gold accents celebrating the heritage and forests of Edo State.",
  },
  {
    id: "third-kit-2627",
    name: "2026/27 Neutral Third Jersey",
    category: "Match Kit",
    price: "₦25,000",
    tag: "Special Edition",
    image: "https://picsum.photos/seed/bendel-third-kit/800/1000",
    tone: 1,
    desc: "Pristine white jersey with gold detailing and subtle Benin bronze geometric pattern weave.",
  },
  {
    id: "gk-kit-2627",
    name: "2026/27 Goalkeeper Kit",
    category: "Goalkeeper",
    price: "₦26,500",
    tag: "Goalkeeper",
    image: "https://picsum.photos/seed/bendel-gk-kit/800/1000",
    tone: 4,
    desc: "Vibrant lemon & pink pro goalkeeper jersey with padded forearm protection zones.",
  },
  {
    id: "training-jacket",
    name: "Benin Arsenal Training Jacket",
    category: "Apparel",
    price: "₦18,000",
    tag: "Training",
    image: "https://picsum.photos/seed/bendel-jacket/800/1000",
    tone: 2,
    desc: "Wind-resistant green zip-up training jacket with moisture-wicking fleece lining.",
  },
  {
    id: "supporter-hoodie",
    name: "Benin Arsenal Crest Hoodie",
    category: "Casual",
    price: "₦16,500",
    tag: "Fanwear",
    image: "https://picsum.photos/seed/bendel-hoodie/800/1000",
    tone: 0,
    desc: "Heavyweight premium cotton blend hoodie with embroidered 1972 heritage logo.",
  },
  {
    id: "matchday-scarf",
    name: "Official Jacquard Match Scarf",
    category: "Accessories",
    price: "₦5,000",
    tag: "Accessories",
    image: "https://picsum.photos/seed/bendel-scarf/800/1000",
    tone: 1,
    desc: "Double-sided knit scarf featuring 'The Benin Arsenal' and 1972 founded crest.",
  },
  {
    id: "club-cap",
    name: "Classic Curved Brim Snapback",
    category: "Headwear",
    price: "₦4,500",
    tag: "Headwear",
    image: "https://picsum.photos/seed/bendel-cap/800/1000",
    tone: 3,
    desc: "Deep green structured cotton snapback with 3D embroidered gold crest.",
  },
];

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
                      tone={product.tone}
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
                      {product.desc}
                    </p>
                    <p className="headline mt-4 text-xl font-bold text-brand-dark">
                      {product.price}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    className="eyebrow w-full rounded-pill bg-brand py-3 text-center text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    Add to Bag
                  </button>
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
