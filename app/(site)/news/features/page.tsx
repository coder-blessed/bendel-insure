import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { StoryCard, StoryGrid } from "@/components/story-card";
import { featureStories, newsStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features & Opinion | Bendel Insurance FC",
  description:
    "In-depth articles, historical retrospectives, tactical analysis and feature stories from Bendel Insurance FC.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default function FeaturesPage() {
  const combinedFeatures = [...featureStories, ...newsStories.filter((s) => s.category === "History" || s.category === "Club")];

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
            <Link href="/news" className="hover:text-gold">News</Link>
            <span>/</span>
            <span className="text-gold font-semibold">Features</span>
          </nav>

          <Link
            href="/news"
            className="eyebrow mb-6 inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All News & Updates</span>
          </Link>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Editorial & Analysis
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Features & Opinion
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Essential deep-dive reading, tactical essays, historical journeys, and insights from Benin City.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Featured Stories"
          subtitle="Long-form reading from the Benin Arsenal editorial team"
        />

        <div className="mt-10">
          <Reveal>
            <StoryGrid stories={combinedFeatures} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
