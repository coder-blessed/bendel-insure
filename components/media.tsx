import Image from "next/image";

const TONES = [
  { a: "#012512", b: "#046a32", c: "#f7c621" },
  { a: "#02170f", b: "#0a5140", c: "#4fc79b" },
  { a: "#0d1a04", b: "#3c5c08", c: "#f7e021" },
  { a: "#0a0a0b", b: "#26302a", c: "#8fa39a" },
  { a: "#04121f", b: "#0d3b52", c: "#3f9fb8" },
  { a: "#1b1204", b: "#6b4a06", c: "#f7c621" },
];

/**
 * Fills its nearest positioned ancestor, so wrap it in a `relative` element
 * that owns the aspect ratio.
 *
 * Renders real photography when `src` is set, and falls back to a branded
 * gradient when it is not, so sections still look intentional while assets
 * are missing. Images are decorative by default: every call site sits next to
 * a visible headline, so a description here would just be announced twice.
 */
export function Media({
  src,
  alt = "",
  tone = 0,
  className = "",
  monogram = true,
  priority = false,
  eager = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: {
  src?: string;
  alt?: string;
  tone?: number;
  className?: string;
  monogram?: boolean;
  priority?: boolean;
  /**
   * Loads immediately without the preload hint. Next 16 deprecated `priority`
   * in favour of `preload`, and recommends plain eager loading for anything
   * that is not unambiguously the LCP element.
   */
  eager?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={eager ? "eager" : undefined}
        className={`object-cover ${className}`}
      />
    );
  }

  const t = TONES[tone % TONES.length];

  return (
    <div
      aria-hidden="true"
      className={`grain absolute inset-0 overflow-hidden ${className}`}
      style={{
        backgroundImage: [
          `radial-gradient(120% 90% at 18% 8%, ${t.c}4d 0%, transparent 58%)`,
          `radial-gradient(90% 85% at 88% 92%, ${t.b}cc 0%, transparent 62%)`,
          `linear-gradient(145deg, ${t.a} 0%, ${t.b} 62%, ${t.c} 130%)`,
        ].join(", "),
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 22px)",
        }}
      />
      {monogram ? (
        <span className="headline absolute -right-3 -bottom-6 text-[7rem] leading-none text-white/10 sm:text-[9rem]">
          BIFC
        </span>
      ) : null}
    </div>
  );
}
