import type { Metadata } from "next";
import { BlogCard, BlogGrid } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { getPublishedPosts } from "@/lib/blog-server";
import { club } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Longer reads from Bendel Insurance FC: analysis, academy features, club history and matchday guides from Benin City.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  const [lead, ...rest] = posts;

  return (
    <>
      {/* The site header is fixed, so the first band owns the clearance. The
          utility bar only appears at lg, hence the two values. */}
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
            The blog
          </span>
          <h1 className="headline mt-5 max-w-3xl text-4xl text-white uppercase sm:text-5xl lg:text-6xl">
            Words from the Benin Arsenal
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Analysis, academy features and club history, written by the people
            who follow {club.shortName} closest.
          </p>
        </div>
      </section>

      {lead ? (
        <section className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader
            title="Latest post"
            subtitle={`${lead.category} · ${lead.readMinutes} min read`}
          />
          <Reveal delay={0.05}>
            <div className="lg:max-w-4xl">
              <BlogCard post={lead} variant="lead" />
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="bg-smoke">
        <div className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader
            title="More reading"
            subtitle="Everything else from the desk"
          />
          <Reveal delay={0.05}>
            <BlogGrid posts={lead ? rest : posts} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
