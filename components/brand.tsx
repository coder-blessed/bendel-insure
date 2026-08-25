import Image from "next/image";
import crestImage from "@/public/Bendel_Insurance_F.C._logo.png";

/**
 * The official club crest. Defaults to `alt=""` because it is almost always
 * paired with the club name in text, and announcing both is redundant.
 */
export function Crest({
  className = "h-9 w-auto",
  alt = "",
  priority = false,
}: {
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={crestImage}
      alt={alt}
      priority={priority}
      className={`w-auto object-contain ${className}`}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Crest className="h-10 shrink-0" priority />
      <span className="hidden leading-[0.9] sm:block">
        <span className="headline block text-[15px] tracking-tight uppercase">
          Bendel Insurance
        </span>
        <span className="eyebrow block text-[9px] text-gold">
          The Benin Arsenal
        </span>
      </span>
    </span>
  );
}

import { TEAM_LOGOS } from "@/lib/content";

/** Our own sides get the real crest; opponents fall back to initial badges. */
function isOurTeam(name: string) {
  return (
    name.toLowerCase().includes("insurance") ||
    name.toLowerCase().includes("bendel")
  );
}

/** Team badge used in fixture strips, match cards and the league table. */
export function TeamBadge({
  name,
  tone = 0,
  className = "h-14 w-14",
  logo,
}: {
  name: string;
  tone?: number;
  className?: string;
  logo?: string;
}) {
  if (isOurTeam(name)) {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <Crest className="h-full" />
      </span>
    );
  }

  const teamLogo = logo || TEAM_LOGOS[name];

  if (teamLogo) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-white/10 p-0.5 shadow-sm transition-transform duration-300 hover:scale-105 ${className}`}
        aria-hidden="true"
      >
        <img
          src={teamLogo}
          alt={`${name} crest`}
          className="h-full w-full object-contain filter drop-shadow"
          loading="lazy"
        />
      </span>
    );
  }

  const palettes = [
    ["#046a32", "#f7c621"],
    ["#0a5140", "#4fc79b"],
    ["#3c5c08", "#f7e021"],
    ["#26302a", "#d8dedb"],
    ["#0d3b52", "#3f9fb8"],
    ["#6b4a06", "#f7c621"],
  ];
  const [bg, fg] = palettes[tone % palettes.length];
  const initials = name
    .split(" ")
    .filter((word) => /[a-z]/i.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className={`headline inline-flex items-center justify-center rounded-full border-2 text-sm ${className}`}
      style={{ background: bg, borderColor: fg, color: fg }}
      aria-hidden="true"
    >
      {initials || "?"}
    </span>
  );
}
