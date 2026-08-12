"use client";

import Link from "next/link";
import { useState } from "react";
import { FIELD_CONTROL, Field } from "@/components/admin/field";
import { ArrowLeft, Check, ChevronDown, Eye } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { type BlogPost, postCategories, slugify } from "@/lib/blog";

const STATUSES = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
];

const BODY_PLACEHOLDER = `Open with the line that makes someone keep reading.

## A heading

Then the paragraph under it. **Bold**, *italic*, \`code\` and [links](https://example.com) all work.

- A bullet
- Another bullet

> A pull quote, for when someone says it better than you can.`;

/**
 * Shared by the new and edit routes — the two differ only in whether a post
 * was passed in. Nothing here saves: this pass is about settling the layout
 * before choosing a store.
 */
export function PostEditor({ post }: { post?: BlogPost }) {
  const isEdit = Boolean(post);

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [body, setBody] = useState(post?.body ?? "");

  /* Once the slug has been typed into by hand, the title stops driving it —
     silently rewriting a deliberate URL would be worse than a stale one. */
  const [slugTouched, setSlugTouched] = useState(isEdit);

  const onTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Link
            href="/admin/posts"
            className="eyebrow group inline-flex items-center gap-2 text-[10px] text-steel transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            All posts
          </Link>
          <h1 className="headline mt-3 text-2xl text-ink uppercase sm:text-3xl">
            {isEdit ? "Edit post" : "New post"}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {isEdit && post ? (
            <Link
              href={`/blog/${post.slug}`}
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-ink/15 bg-white px-4 py-3 text-[10px] text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              <Eye className="h-4 w-4" />
              View
            </Link>
          ) : null}
          <button
            type="submit"
            className="eyebrow rounded-pill border border-ink/15 bg-white px-5 py-3 text-[10px] text-ink transition-colors hover:border-ink/30"
          >
            Save draft
          </button>
          <button
            type="submit"
            className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition-colors hover:bg-brand-dark"
          >
            <Check className="h-4 w-4" />
            {isEdit ? "Update" : "Publish"}
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Main column: the writing surface and what it will look like. */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="rounded-card bg-white p-5 md:p-6">
            <Field label="Title" htmlFor="post-title">
              <input
                id="post-title"
                name="title"
                type="text"
                value={title}
                onChange={(event) => onTitleChange(event.target.value)}
                placeholder="What the post is called"
                className={`${FIELD_CONTROL} headline text-lg uppercase`}
              />
            </Field>

            <div className="mt-5">
              <Field
                label="Body"
                htmlFor="post-body"
                hint="Markdown: ## headings, - lists, > quotes, **bold**, [links](url)."
              >
                <textarea
                  id="post-body"
                  name="body"
                  rows={18}
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  placeholder={BODY_PLACEHOLDER}
                  className={`${FIELD_CONTROL} resize-y font-mono text-[13px] leading-relaxed`}
                />
              </Field>
            </div>
          </div>

          <div className="rounded-card bg-white p-5 md:p-6">
            <div className="flex items-center gap-2.5 border-b border-ink/8 pb-4">
              <Eye className="h-4 w-4 text-brand" />
              <h2 className="eyebrow text-[10px] text-ink">Live preview</h2>
            </div>
            {body.trim() ? (
              <Markdown content={body} className="mt-5 max-w-[68ch]" />
            ) : (
              <p className="mt-5 text-sm text-steel">
                Start typing and the rendered post appears here.
              </p>
            )}
          </div>
        </div>

        {/* Sidebar: everything about the post that is not the post. */}
        <div className="flex flex-col gap-5 rounded-card bg-white p-5 md:p-6">
          <fieldset>
            <legend className="eyebrow text-[10px] text-ink">Status</legend>
            <div className="mt-2 flex gap-2">
              {STATUSES.map((option) => (
                <label
                  key={option.value}
                  className="flex-1 cursor-pointer rounded-control border border-ink/12 px-3 py-2.5 text-center text-sm font-semibold text-steel transition-colors hover:border-ink/25 has-checked:border-brand has-checked:bg-brand/8 has-checked:text-brand-dark"
                >
                  <input
                    type="radio"
                    name="status"
                    value={option.value}
                    defaultChecked={(post?.status ?? "draft") === option.value}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <Field
            label="Slug"
            htmlFor="post-slug"
            hint={`/blog/${slug || "your-post"}`}
          >
            <input
              id="post-slug"
              name="slug"
              type="text"
              value={slug}
              onChange={(event) => {
                setSlugTouched(true);
                setSlug(event.target.value);
              }}
              placeholder="auto-generated-from-title"
              className={`${FIELD_CONTROL} font-mono text-[13px]`}
            />
          </Field>

          <Field
            label="Excerpt"
            htmlFor="post-excerpt"
            hint="Shown on cards and used as the meta description."
          >
            <textarea
              id="post-excerpt"
              name="excerpt"
              rows={4}
              defaultValue={post?.excerpt}
              placeholder="Two sentences on why this is worth reading."
              className={`${FIELD_CONTROL} resize-y leading-relaxed`}
            />
          </Field>

          <Field label="Category" htmlFor="post-category">
            <div className="relative">
              <select
                id="post-category"
                name="category"
                defaultValue={post?.category ?? postCategories[0]}
                className={`${FIELD_CONTROL} appearance-none pr-11`}
              >
                {postCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-steel" />
            </div>
          </Field>

          <Field label="Author" htmlFor="post-author">
            <input
              id="post-author"
              name="author"
              type="text"
              defaultValue={post?.author}
              placeholder="Who wrote it"
              className={FIELD_CONTROL}
            />
          </Field>

          <Field
            label="Cover image"
            htmlFor="post-image"
            hint="Falls back to a branded gradient when empty."
          >
            <input
              id="post-image"
              name="image"
              type="url"
              defaultValue={post?.image}
              placeholder="https://"
              className={`${FIELD_CONTROL} font-mono text-[13px]`}
            />
          </Field>
        </div>
      </div>
    </form>
  );
}
