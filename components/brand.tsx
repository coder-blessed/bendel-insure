export function Crest({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      className={className}
      role="img"
      aria-label="Bendel Insurance FC crest"
    >
      <title>Bendel Insurance FC crest</title>
      <path
        d="M32 1 61 9v30c0 15-12 26-29 32C15 65 3 54 3 39V9L32 1Z"
        fill="#046a32"
        stroke="#f7c621"
        strokeWidth="2.5"
      />
      <path d="M32 8 55 14v25c0 12-9 21-23 26V8Z" fill="#04582a" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fill="#f7c621"
        fontSize="21"
        fontWeight="800"
        fontFamily="var(--font-display), sans-serif"
      >
        BI
      </text>
      <text
        x="32"
        y="55"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.6"
        fontFamily="var(--font-display), sans-serif"
      >
        1972
      </text>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Crest className="h-9 w-9 shrink-0" />
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

/** Small circular team badge used in fixture strips and the league table. */
export function TeamBadge({
  name,
  tone = 0,
  className = "h-14 w-14",
}: {
  name: string;
  tone?: number;
  className?: string;
}) {
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
      {initials}
    </span>
  );
}
