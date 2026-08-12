import type { ReactNode } from "react";

/**
 * Minimal markdown renderer for blog post bodies.
 *
 * Builds React elements directly and never touches `dangerouslySetInnerHTML`,
 * so post content — which becomes author-supplied once the editor is wired to
 * a store — cannot inject markup.
 *
 * Supported: `##` and `###` headings, blank-line separated paragraphs, `-`
 * and `1.` lists, `>` quotes, `---` rules, and inline `**bold**`, `*italic*`,
 * `` `code` `` and `[links](url)`. Deliberately unsupported: code fences,
 * tables, images, nested lists and raw HTML. Reach for a real parser rather
 * than growing this one if the club needs them.
 */

type ListItem = { id: string; text: string };

type Block =
  | { id: string; kind: "heading2"; text: string }
  | { id: string; kind: "heading3"; text: string }
  | { id: string; kind: "quote"; text: string }
  | { id: string; kind: "paragraph"; text: string }
  | { id: string; kind: "list"; ordered: boolean; items: ListItem[] }
  | { id: string; kind: "rule" };

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/;

const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;

/**
 * Splits a line into inline tokens, each carrying its own id. The ids are
 * assigned outside JSX so React keys never come from a map index.
 */
function tokenize(text: string): { id: string; value: string }[] {
  return text
    .split(INLINE)
    .filter((part) => part !== "")
    .map((value, index) => ({ id: `t${index}`, value }));
}

function renderInline(text: string): ReactNode[] {
  return tokenize(text).map(({ id, value }) => {
    if (value.startsWith("**") && value.endsWith("**")) {
      return (
        <strong key={id} className="font-semibold text-ink">
          {value.slice(2, -2)}
        </strong>
      );
    }

    if (value.startsWith("`") && value.endsWith("`")) {
      return (
        <code
          key={id}
          className="rounded-control bg-smoke px-1.5 py-0.5 font-mono text-[0.9em] text-ink"
        >
          {value.slice(1, -1)}
        </code>
      );
    }

    const link = value.match(LINK);
    if (link) {
      return (
        <a
          key={id}
          href={link[2]}
          className="text-brand underline decoration-brand/40 underline-offset-2 transition-colors hover:decoration-brand"
        >
          {link[1]}
        </a>
      );
    }

    if (value.startsWith("*") && value.endsWith("*")) {
      return (
        <em key={id} className="italic">
          {value.slice(1, -1)}
        </em>
      );
    }

    return value;
  });
}

function parse(content: string): Block[] {
  return content
    .trim()
    .split(/\n{2,}/)
    .map((raw, index) => {
      const block = raw.trim();
      const id = `b${index}`;
      const lines = block.split("\n").map((line) => line.trim());

      if (/^-{3,}$/.test(block)) {
        return { id, kind: "rule" } satisfies Block;
      }

      if (block.startsWith("### ")) {
        return { id, kind: "heading3", text: block.slice(4) } satisfies Block;
      }

      if (block.startsWith("## ")) {
        return { id, kind: "heading2", text: block.slice(3) } satisfies Block;
      }

      if (lines.every((line) => line.startsWith("> "))) {
        return {
          id,
          kind: "quote",
          text: lines.map((line) => line.slice(2)).join(" "),
        } satisfies Block;
      }

      if (lines.every((line) => line.startsWith("- "))) {
        return {
          id,
          kind: "list",
          ordered: false,
          items: lines.map((line, item) => ({
            id: `${id}-l${item}`,
            text: line.slice(2),
          })),
        } satisfies Block;
      }

      if (lines.every((line) => /^\d+\.\s/.test(line))) {
        return {
          id,
          kind: "list",
          ordered: true,
          items: lines.map((line, item) => ({
            id: `${id}-l${item}`,
            text: line.replace(/^\d+\.\s+/, ""),
          })),
        } satisfies Block;
      }

      return { id, kind: "paragraph", text: lines.join(" ") } satisfies Block;
    });
}

function BlockNode({ block }: { block: Block }) {
  if (block.kind === "rule") {
    return <hr className="mt-10 h-px border-0 bg-ink/10 first:mt-0" />;
  }

  if (block.kind === "heading2") {
    return (
      <h2 className="headline mt-10 text-2xl text-ink uppercase first:mt-0 sm:text-3xl">
        {renderInline(block.text)}
      </h2>
    );
  }

  if (block.kind === "heading3") {
    return (
      <h3 className="headline mt-8 text-lg text-ink uppercase first:mt-0 sm:text-xl">
        {renderInline(block.text)}
      </h3>
    );
  }

  if (block.kind === "quote") {
    return (
      <blockquote className="mt-7 border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink italic first:mt-0">
        {renderInline(block.text)}
      </blockquote>
    );
  }

  if (block.kind === "list") {
    const ListTag = block.ordered ? "ol" : "ul";

    return (
      <ListTag className="mt-5 space-y-2.5 first:mt-0">
        {block.items.map((item, index) => (
          <li
            key={item.id}
            className="flex gap-3 text-base leading-relaxed text-steel"
          >
            {block.ordered ? (
              <span
                aria-hidden="true"
                className="eyebrow mt-0.5 shrink-0 text-[11px] text-brand tabular-nums"
              >
                {index + 1}
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
              />
            )}
            <span>{renderInline(item.text)}</span>
          </li>
        ))}
      </ListTag>
    );
  }

  return (
    <p className="mt-5 text-base leading-relaxed text-steel first:mt-0">
      {renderInline(block.text)}
    </p>
  );
}

export function Markdown({
  content,
  className = "",
}: {
  content: string;
  className?: string;
}) {
  const blocks = parse(content);

  return (
    <div className={className}>
      {blocks.map((block) => (
        <BlockNode key={block.id} block={block} />
      ))}
    </div>
  );
}
