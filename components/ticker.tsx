import { tickerItems } from "@/lib/content";

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="flex items-stretch overflow-hidden border-y border-white/10 bg-ink text-white">
      <span className="eyebrow z-10 flex shrink-0 items-center gap-2 bg-brand px-4 py-2.5 text-[10px] text-white">
        <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
        Latest
      </span>
      <div className="relative flex-1 overflow-hidden py-2.5">
        <div className="animate-marquee flex w-max gap-10 pl-10 will-change-transform">
          {items.map((item, itemIndex) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: marquee duplicates the list verbatim
              key={`${item}-${itemIndex}`}
              className="eyebrow flex shrink-0 items-center gap-10 text-[10px] whitespace-nowrap text-white/75"
            >
              {item}
              <span aria-hidden="true" className="text-gold">
                &bull;
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
