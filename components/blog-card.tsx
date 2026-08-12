import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Media } from "@/components/media";
import { type BlogPost, formatPostDate } from "@/lib/blog";

/**
 * Modelled on `StoryCard` so the blog reads as part of the same site, but kept
 * separate: posts carry a byline and read time that `Story` has no slot for,
 * and the news cards hardcode their own `/news/` hrefs.
 */
export function BlogCard({
  post,
  variant = "compact",
}: {
  post: BlogPost;
  variant?: "lead" | "compact";
}) {
  const isLead = variant === "lead";

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col">
      <div
        className={`relative overflow-hidden rounded-media ${
          isLead ? "aspect-[16/10]" : "aspect-[16/9]"
        }`}
      >
        <Media
          src={post.image}
          tone={post.tone}
          monogram={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap items-center gap-x-2.5">
          <span className="eyebrow text-[9px] text-brand">{post.category}</span>
          <span className="eyebrow text-[9px] text-steel">
            {formatPostDate(post.publishedAt)}
          </span>
        </div>

        <h3
          className={`headline mt-2 text-ink uppercase transition-colors group-hover:text-brand ${
            isLead ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {post.title}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-steel">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-2.5">
          <span className="eyebrow text-[9px] text-ink">{post.author}</span>
          <span aria-hidden="true" className="text-steel/50">
            &middot;
          </span>
          <span className="eyebrow text-[9px] text-steel tabular-nums">
            {post.readMinutes} min read
          </span>
        </div>

        {/* Only the lead carries a CTA: repeating it on every card adds noise
            without adding a second way to reach the post. */}
        {isLead ? (
          <span className="eyebrow mt-4 inline-flex items-center gap-2 text-[10px] text-brand">
            Read more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </Link>
  );
}

/**
 * Uniform three-column grid. Unlike `StoryGrid` this guards the empty case:
 * an unpublished blog is a normal state, not a crash.
 */
export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-card border border-ink/10 bg-smoke px-6 py-16 text-center">
        <p className="headline text-xl text-ink uppercase">Nothing here yet</p>
        <p className="mt-2 text-sm text-steel">
          The first post will appear as soon as it is published.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
