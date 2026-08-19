import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryCard } from "@/components/story-card";
import { ArrowLeft } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { newsStories } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = newsStories.find((item) => item.slug === slug);

  if (!story) {
    return { title: "Story not found" };
  }

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: "article",
    },
  };
}

export default async function NewsStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = newsStories.find((item) => item.slug === slug);

  if (!story || !story.content) {
    notFound();
  }

  const related = newsStories.filter((item) => item.slug !== story.slug).slice(0, 3);

  return (
    <>
      <article>
        <div className={`${SHELL} pt-24 pb-10 lg:pt-32`}>
          <Link
            href="/news"
            className="eyebrow group inline-flex items-center gap-2 text-[10px] text-steel transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            All news
          </Link>

          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="eyebrow text-[10px] text-brand">{story.category}</span>
              <span aria-hidden="true" className="text-steel/50">
                &middot;
              </span>
              <span className="eyebrow text-[10px] text-steel">{story.timestamp}</span>
            </div>

            <h1 className="headline mt-4 text-3xl text-ink uppercase sm:text-5xl lg:text-6xl">
              {story.title}
            </h1>

            {story.excerpt ? (
              <p className="mt-5 text-lg leading-relaxed text-steel">{story.excerpt}</p>
            ) : null}
          </div>
        </div>

        <div className={SHELL}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-media">
            <Media
              src={story.image}
              tone={story.tone}
              monogram={false}
              eager
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </div>
        </div>

        <div className={`${SHELL} py-12 md:py-16`}>
          <Markdown content={story.content} className="max-w-[68ch]" />
        </div>
      </article>

      {related.length > 0 ? (
        <section className="bg-smoke">
          <div className={`${SHELL} py-14 md:py-20`}>
            <SectionHeader title="More news" actionLabel="All news" actionHref="/news" />
            <Reveal delay={0.05}>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
                {related.map((item) => (
                  <StoryCard key={item.slug} story={item} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}
