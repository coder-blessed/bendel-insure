import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { ArrowLeft } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { formatPostDate } from "@/lib/blog";
import {
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
} from "@/lib/blog-server";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

/**
 * `params` is the one place it stays synchronous — everywhere else in Next 16
 * it is a Promise that has to be awaited.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  /* Drafts are addressable by slug in the mock data, so the status check has
     to happen here too or an unpublished post would be readable by URL. */
  if (!post || post.status !== "published") {
    notFound();
  }

  const related = await getRelatedPosts(post);

  return (
    <>
      <article>
        <div className={`${SHELL} pt-24 pb-10 lg:pt-32`}>
          <Link
            href="/blog"
            className="eyebrow group inline-flex items-center gap-2 text-[10px] text-steel transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            All posts
          </Link>

          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="eyebrow text-[10px] text-brand">
                {post.category}
              </span>
              <span aria-hidden="true" className="text-steel/50">
                &middot;
              </span>
              <span className="eyebrow text-[10px] text-steel">
                {formatPostDate(post.publishedAt)}
              </span>
              <span aria-hidden="true" className="text-steel/50">
                &middot;
              </span>
              <span className="eyebrow text-[10px] text-steel tabular-nums">
                {post.readMinutes} min read
              </span>
            </div>

            <h1 className="headline mt-4 text-3xl text-ink uppercase sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-steel">
              {post.excerpt}
            </p>

            <p className="eyebrow mt-6 text-[10px] text-ink">
              By {post.author}
            </p>
          </div>
        </div>

        <div className={SHELL}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-media">
            <Media
              src={post.image}
              tone={post.tone}
              monogram={false}
              eager
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </div>
        </div>

        {/* Measure is capped for readability rather than filling the shell. */}
        <div className={`${SHELL} py-12 md:py-16`}>
          <Markdown content={post.body} className="max-w-[68ch]" />
        </div>
      </article>

      {related.length > 0 ? (
        <section className="bg-smoke">
          <div className={`${SHELL} py-14 md:py-20`}>
            <SectionHeader
              title="Keep reading"
              actionLabel="All posts"
              actionHref="/blog"
            />
            <Reveal delay={0.05}>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
                {related.map((item) => (
                  <BlogCard key={item.id} post={item} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}
