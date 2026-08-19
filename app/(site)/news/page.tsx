import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { StoryCard, StoryGrid } from "@/components/story-card";
import { club, newsStories } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest Bendel Insurance FC news, matchday updates and club stories from Benin City.",
};

export default function NewsPage() {
  const [lead, ...rest] = newsStories;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-deep pt-24 pb-14 lg:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(110% 80% at 15% 0%, rgba(247,198,33,0.14) 0%, transparent 58%)",
              "linear-gradient(180deg, transparent 40%, rgba(2,47,23,0.85) 100%)",
            ].join(", "),
          }}
        />

        <div className={`${SHELL} relative`}>
          <span className="eyebrow rounded-pill bg-gold px-3 py-1.5 text-[10px] text-brand-deep">
            Newsroom
          </span>
          <h1 className="headline mt-5 max-w-3xl text-4xl text-white uppercase sm:text-5xl lg:text-6xl">
            The latest from {club.shortName}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Matchday updates, interviews, club stories and the moments shaping the
            Benin Arsenal this season.
          </p>
        </div>
      </section>

      {lead ? (
        <section className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader
            title="Latest story"
            subtitle={`${lead.category} · ${lead.timestamp}`}
          />
          <Reveal delay={0.05}>
            <div className="lg:max-w-4xl">
              <StoryCard story={lead} variant="lead" />
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="bg-smoke">
        <div className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader title="More news" subtitle="The rest of the club's story" />
          <Reveal delay={0.05}>
            <StoryGrid stories={lead ? rest : newsStories} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
