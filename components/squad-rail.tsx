import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Media } from "@/components/media";
import { Rail } from "@/components/rail";
import { squad } from "@/lib/content";

export function SquadRail() {
  return (
    <Rail label="First team squad">
      {squad.map((player) => (
        <Link
          key={player.number}
          href={`/teams/first/${player.name.toLowerCase().replaceAll(" ", "-")}`}
          className="group w-[13rem] shrink-0 snap-start sm:w-[15rem]"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-ink">
            <Media
              tone={player.tone}
              monogram={false}
              className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
            />

            <span
              aria-hidden="true"
              className="headline absolute top-2 right-3 text-6xl text-white/25 tabular-nums transition-colors duration-300 group-hover:text-gold/70"
            >
              {player.number}
            </span>

            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className="eyebrow block text-[9px] text-gold">
                {player.position}
              </span>
              <span className="headline mt-1 block text-lg text-white uppercase">
                {player.name}
              </span>
              <span className="eyebrow mt-2 flex items-center gap-1.5 text-[9px] text-white/0 transition-colors duration-300 group-hover:text-white/80">
                Profile
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </Rail>
  );
}
