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
          <div className="relative aspect-video overflow-hidden">
            <Media
              tone={video.tone}
              className="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            />

            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/70 bg-black/30 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:text-gold">
                <Play className="h-5 w-5" />
              </span>
            </span>

            <span className="eyebrow absolute bottom-2 right-2 bg-black/75 px-2 py-1 text-[10px] text-white tabular-nums">
              {video.duration}
            </span>

            {video.locked ? (
              <span className="eyebrow absolute top-2 left-2 flex items-center gap-1.5 bg-gold px-2 py-1 text-[9px] text-brand-deep">
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
