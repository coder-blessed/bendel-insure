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
    <Link href={`/news/${story.slug}`} className="group flex flex-col">
      <div
        className={`relative overflow-hidden rounded-media ${
          isLead ? "aspect-[16/10]" : "aspect-[16/9]"
        }`}
      >
        <Media
          src={story.image}
          tone={story.tone}
          monogram={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap items-center gap-x-2.5">
          <span className="eyebrow text-[9px] text-brand">
            {story.category}
          </span>
          <span className="eyebrow text-[9px] text-steel">
            {story.timestamp}
          </span>
        </div>

        <h3
          className={`headline mt-2 text-ink uppercase transition-colors group-hover:text-brand ${
            isLead ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {story.title}
        </h3>

        {story.excerpt ? (
          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-steel">
            {story.excerpt}
          </p>
        ) : null}

        {/* Only the lead carries a CTA: repeating it on every card adds noise
            without adding a second way to reach the story. */}
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

/** Dominant story with the headline set over the image. */
function StoryLead({ story }: { story: Story }) {
  return (
    <Link
      href={`/news/${story.slug}`}
      className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-card sm:min-h-[30rem]"
    >
      <Media
        src={story.image}
        tone={story.tone}
        monogram={false}
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent"
      />

      {/* Text stays deliberately light on small screens so the image is not
          crowded out: the excerpt only appears once there is room for it. */}
      <div className="relative p-5 sm:p-6 lg:p-8">
        <div className="mb-3 flex items-center gap-3 lg:mb-4">
          <span className="eyebrow rounded-pill bg-brand px-3 py-1.5 text-[10px] text-white">
            {story.category}
          </span>
          <span className="eyebrow text-[10px] text-white/70">
            {story.timestamp}
          </span>
        </div>
        <h3 className="headline max-w-xl text-xl text-white uppercase sm:text-3xl lg:text-4xl">
          {story.title}
        </h3>
        {story.excerpt ? (
          <p className="mt-3 hidden max-w-lg text-sm leading-relaxed text-white/75 sm:line-clamp-2 sm:block">
            {story.excerpt}
          </p>
        ) : null}
        <span className="eyebrow mt-4 inline-flex items-center gap-2 text-[10px] text-gold lg:mt-5">
          Read more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/** Compact thumbnail row for the secondary headline column. */
function StoryRow({ story }: { story: Story }) {
  return (
    <Link
      href={`/news/${story.slug}`}
      className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
    >
      <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-control sm:w-32">
        <Media
          src={story.image}
          tone={story.tone}
          monogram={false}
          sizes="128px"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2.5">
          <span className="eyebrow text-[9px] text-brand">
            {story.category}
          </span>
          <span className="eyebrow text-[9px] text-steel">
            {story.timestamp}
          </span>
        </div>
        <h3 className="headline mt-1.5 text-base uppercase transition-colors group-hover:text-brand sm:text-lg">
          {story.title}
        </h3>
      </div>
    </Link>
  );
}

/**
 * Front-page news block: one dominant story carrying the section, with the
 * remaining headlines stacked beside it so the hierarchy is unambiguous.
 */
export function StoryShowcase({ stories }: { stories: Story[] }) {
  const [lead, ...rest] = stories;

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <StoryLead story={lead} />
      </div>
      <div className="divide-y divide-ink/10 lg:col-span-5">
        {rest.map((story) => (
          <StoryRow key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}

/** Equal-weight card grid, used for the features and opinion block. */
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
