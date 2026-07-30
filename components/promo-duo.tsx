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
          className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-media ring-1 ring-ink/8 transition-all duration-300 sm:aspect-[16/9]"
        >
          <Media
            src={promo.image}
            tone={promo.tone}
            monogram={false}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
          />

          <div className="relative w-full p-4 sm:p-6 lg:p-8">
            <span className="eyebrow inline-block rounded-pill bg-gold/15 px-2.5 py-1 text-[9px] text-gold backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[10px]">
              {promo.kicker}
            </span>
            <h3 className="headline mt-2 max-w-md text-base text-white uppercase sm:mt-3 sm:text-2xl lg:text-3xl">
              {promo.title}
            </h3>
            <span className="eyebrow mt-3 inline-flex items-center gap-2 rounded-pill border border-white/30 bg-white/10 px-3.5 py-2 text-[9px] text-white backdrop-blur-sm transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-brand-deep sm:mt-5 sm:px-4 sm:py-2.5 sm:text-[10px]">
              Shop now
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
