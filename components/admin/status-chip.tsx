import type { PostStatus } from "@/lib/blog";

export function StatusChip({ status }: { status: PostStatus }) {
  const published = status === "published";

  return (
    <span
      className={`eyebrow inline-flex shrink-0 items-center gap-1.5 rounded-pill px-2.5 py-1 text-[9px] ${
        published ? "bg-brand/12 text-brand-dark" : "bg-gold/25 text-ink"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          published ? "bg-brand" : "bg-gold"
        }`}
      />
      {published ? "Published" : "Draft"}
    </span>
  );
}
