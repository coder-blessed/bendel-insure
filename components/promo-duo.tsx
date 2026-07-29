import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Media } from "@/components/media";
import type { Promo } from "@/lib/content";

export function PromoDuo({
  promos,
  hrefBase,
}: {
  promos: Promo[];
  hrefBase: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {promos.map((promo) => (
        <Link
          key={promo.slug}
          href={`${hrefBase}/${promo.slug}`}
          className="group relative flex aspect-[16/10] items-end overflow-hidden sm:aspect-[16/9]"
        >
          <Media
            tone={promo.tone}
            monogram={false}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
          />

          <div className="relative w-full p-6 md:p-8">
            <span className="eyebrow block text-[10px] text-gold">
              {promo.kicker}
            </span>
            <h3 className="headline mt-2 max-w-md text-2xl text-white uppercase sm:text-3xl">
              {promo.title}
            </h3>
            <span className="eyebrow mt-4 inline-flex items-center gap-2 border-b-2 border-white/30 pb-1 text-[10px] text-white transition-colors group-hover:border-gold group-hover:text-gold">
              Shop now
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
