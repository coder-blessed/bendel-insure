import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Media } from "@/components/media";
import type { Story } from "@/lib/content";

export function StoryCard({
  story,
  variant = "compact",
}: {
  story: Story;
  variant?: "lead" | "compact";
}) {
  const isLead = variant === "lead";

  return (
    <Link
      href={`/news/${story.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card bg-white ring-1 ring-ink/8 transition-all duration-300 hover:ring-brand/25"
    >
      <div
        className={`relative overflow-hidden ${
          isLead ? "aspect-[16/10]" : "aspect-[16/9]"
        }`}
      >
        <Media
          tone={story.tone}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="eyebrow absolute top-3 left-3 rounded-pill bg-brand px-3 py-1.5 text-[10px] text-white">
          {story.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <span className="eyebrow text-[10px] text-steel">
          {story.timestamp}
        </span>
        <h3
          className={`headline uppercase decoration-gold decoration-[3px] underline-offset-4 transition-colors group-hover:text-brand ${
            isLead ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {story.title}
        </h3>
        {story.excerpt ? (
          <p className="text-sm leading-relaxed text-steel">{story.excerpt}</p>
        ) : null}
        <span className="eyebrow mt-auto inline-flex items-center gap-2 pt-2 text-[10px] text-brand">
          Read more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/** manutd-style editorial block: one lead story beside a stack of two. */
export function StoryGrid({ stories }: { stories: Story[] }) {
  const [lead, ...rest] = stories;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <StoryCard story={lead} variant="lead" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        {rest.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}
