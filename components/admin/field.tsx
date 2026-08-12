import type { ReactNode } from "react";

/**
 * Shared control styling. Focus rings are deliberately absent — the global
 * `:focus-visible` rule in `globals.css` already handles them site-wide.
 */
export const FIELD_CONTROL =
  "w-full rounded-control border border-ink/12 bg-white px-4 py-3 text-sm text-ink transition-colors placeholder:text-steel/60 hover:border-ink/25";

export function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow block text-[10px] text-ink">
        {label}
      </label>
      {hint ? <p className="mt-1.5 text-xs text-steel">{hint}</p> : null}
      <div className="mt-2">{children}</div>
    </div>
  );
}
