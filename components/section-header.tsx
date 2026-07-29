import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Reveal, RuleReveal } from "@/components/reveal";

export function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionHref,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="mb-6 md:mb-8">
        <RuleReveal className="mb-5 max-w-24" />
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <h2
              className={`headline text-3xl uppercase sm:text-4xl lg:text-[2.75rem] ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {title}
            </h2>
            {subtitle ? (
              <p
                className={`mt-2 text-sm sm:text-base ${
                  dark ? "text-white/60" : "text-steel"
                }`}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
          {actionLabel && actionHref ? (
            <Link
              href={actionHref}
              className={`eyebrow group inline-flex items-center gap-2 rounded-pill border px-4 py-2.5 text-[11px] transition-all duration-300 ${
                dark
                  ? "border-white/20 bg-white/5 text-gold hover:border-gold/60 hover:bg-white/10"
                  : "border-ink/12 bg-white text-ink hover:border-brand/40 hover:text-brand"
              }`}
            >
              {actionLabel}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
