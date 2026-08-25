import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Play } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { videos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insurance TV | Bendel Insurance FC",
  description:
    "Watch official match highlights, full match replays, player interviews, training clips and behind-the-scenes footage on Insurance TV.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default function InsuranceTVPage() {
  const featured = videos[0];
  const remaining = videos.slice(1);

  return (
    <main className="bg-ink text-white">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: "url('/images/stadium/stadium-night.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-black/80" />

        <div className={`${SHELL} relative z-10`}>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-gold font-semibold">Insurance TV</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Official Media Channel
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Insurance TV
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Matchday highlights, exclusive player access, tactical breakdowns, and historical documentaries from Benin City.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      {featured && (
        <section className={`${SHELL} py-12 md:py-16`}>
          <SectionHeader
            title="Featured Broadcast"
            subtitle="Latest official upload from the Benin Arsenal media team"
            dark
          />

          <Reveal>
            <div className="mt-8 overflow-hidden rounded-card border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm lg:p-8">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="relative aspect-video w-full overflow-hidden rounded-control bg-black lg:col-span-8">
                  <Media
                    src={featured.image}
                    tone={featured.tone}
                    monogram={false}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Link
                      href={`/tv/${featured.slug}`}
                      aria-label={`Play ${featured.title}`}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-brand-deep shadow-2xl transition-transform hover:scale-110"
                    >
                      <Play className="ml-1 h-8 w-8 fill-current" />
                    </Link>
                  </div>
                  <span className="eyebrow absolute bottom-4 right-4 rounded-pill bg-black/80 px-3 py-1 text-xs font-mono text-white">
                    {featured.duration}
                  </span>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <span className="eyebrow inline-block rounded-pill bg-gold/20 px-3 py-1 text-[10px] font-bold text-gold uppercase">
                    Featured
                  </span>
                  <h2 className="headline text-2xl uppercase text-white sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Exclusive match coverage and insights straight from Samuel Ogbemudia Stadium.
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/tv/${featured.slug}`}
                      className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
                    >
                      <span>Watch Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Video Rail / Grid */}
      <section className={`${SHELL} pb-20 md:pb-28`}>
        <SectionHeader
          title="All Videos"
          subtitle="Explore our library of highlights, docuseries and interviews"
          dark
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remaining.map((vid, idx) => (
            <Reveal key={vid.slug} delay={idx * 0.05}>
              <Link
                href={`/tv/${vid.slug}`}
                className="group flex flex-col overflow-hidden rounded-card border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <Media
                    src={vid.image}
                    tone={vid.tone}
                    monogram={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/90 text-brand-deep shadow-lg">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </div>
                  </div>
                  <span className="eyebrow absolute bottom-3 right-3 rounded-pill bg-black/80 px-2.5 py-0.5 text-[10px] font-mono text-white">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="headline text-lg uppercase text-white group-hover:text-gold transition-colors">
                    {vid.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
