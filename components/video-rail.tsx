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
          <div className="relative aspect-video overflow-hidden rounded-media ring-1 ring-white/10 transition-all duration-300 group-hover:ring-gold/40">
            <Media
              tone={video.tone}
              className="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            />

            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-brand-deep">
                <Play className="h-5 w-5" />
              </span>
            </span>

            <span className="eyebrow absolute right-3 bottom-3 rounded-pill bg-black/70 px-2.5 py-1 text-[10px] text-white tabular-nums backdrop-blur-sm">
              {video.duration}
            </span>

            {video.locked ? (
              <span className="eyebrow absolute top-3 left-3 flex items-center gap-1.5 rounded-pill bg-gold px-2.5 py-1 text-[9px] text-brand-deep">
                <Lock className="h-3 w-3" />
                Members
              </span>
            ) : null}
          </div>

          <h3 className="headline mt-3 text-base text-white uppercase transition-colors group-hover:text-gold">
            {video.title}
          </h3>
          <p className="eyebrow mt-1.5 text-[10px] text-white/50">
            {video.locked ? "Log in to watch" : "Watch now"}
          </p>
        </Link>
      ))}
    </Rail>
  );
}
