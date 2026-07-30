import Link from "next/link";
import { Lock, Play } from "@/components/icons";
import { Media } from "@/components/media";
import { Rail } from "@/components/rail";
import { videos } from "@/lib/content";

export function VideoRail() {
  return (
    <Rail label="Insurance TV videos" dark>
      {videos.map((video) => (
        <Link
          key={video.slug}
          href={`/tv/${video.slug}`}
          className="group w-[17rem] shrink-0 snap-start sm:w-[21rem]"
        >
          <div className="relative aspect-video overflow-hidden rounded-media">
            <Media
              src={video.image}
              tone={video.tone}
              monogram={false}
              sizes="(max-width: 640px) 272px, 336px"
              className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
            />

            {/* Compact play affordance instead of a large centred circle, so
                the thumbnail itself stays the focus. */}
            <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-gold group-hover:text-brand-deep">
              <Play className="h-4 w-4" />
            </span>

            <span className="eyebrow absolute right-3 bottom-4 text-[10px] text-white tabular-nums">
              {video.duration}
            </span>

            {video.locked ? (
              <span className="eyebrow absolute top-3 left-3 flex items-center gap-1.5 rounded-pill bg-gold px-2.5 py-1 text-[9px] text-brand-deep">
                <Lock className="h-3 w-3" />
                Members
              </span>
            ) : null}
          </div>

          <h3 className="headline mt-3 line-clamp-2 text-base text-white uppercase transition-colors group-hover:text-gold">
            {video.title}
          </h3>
          <p className="eyebrow mt-1.5 text-[10px] text-white/45">
            {video.locked ? "Members only" : "Watch now"}
          </p>
        </Link>
      ))}
    </Rail>
  );
}
