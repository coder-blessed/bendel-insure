"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useCallback, useState } from "react";
import { FIELD_CONTROL, Field } from "@/components/admin/field";
import { ArrowLeft, Check, ChevronDown, Eye } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { type BlogPost, postCategories, slugify } from "@/lib/blog";
import {
  type PostActionState,
  savePostAction,
  updatePostAction,
} from "@/app/admin/(dashboard)/posts/actions";

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
 * Shared by the new and edit routes. When a post is provided it binds
 * updatePostAction to that post's id; otherwise it uses savePostAction.
 */
export function PostEditor({ post }: { post?: BlogPost }) {
  const isEdit = Boolean(post);

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [body, setBody] = useState(post?.body ?? "");

  /* Once the slug has been typed into by hand, the title stops driving it. */
  const [slugTouched, setSlugTouched] = useState(isEdit);

  const onTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  // Bind update to the specific post id
  const boundUpdateAction = useCallback(
    (prev: PostActionState, formData: FormData) =>
      updatePostAction(post!.id, prev, formData),
    [post],
  );

  const action = isEdit ? boundUpdateAction : savePostAction;
  const [state, formAction, pending] = useActionState<PostActionState, FormData>(
    action,
    undefined,
  );

  return (
    <form action={formAction}>
      {/* Hidden fields carry the controlled values into the FormData */}
      <input type="hidden" name="title" value={title} />
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="body" value={body} />

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

          {/* Save as draft */}
          <button
            type="submit"
            name="status"
            value="draft"
            disabled={pending}
            className="eyebrow rounded-pill border border-ink/15 bg-white px-5 py-3 text-[10px] text-ink transition-colors hover:border-ink/30 disabled:opacity-50"
          >
            Save draft
          </button>

          {/* Publish */}
          <button
            type="submit"
            name="status"
            value="published"
            disabled={pending}
            className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition-colors hover:bg-brand-dark disabled:opacity-50"
          >
            {pending ? (
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              <Check className="h-4 w-4" />
            )}
            {isEdit ? "Update" : "Publish"}
          </button>
        </div>
      </div>

      {state?.error && (
        <p
          role="alert"
          className="mt-4 rounded-control bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {state.error}
        </p>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Main column */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="rounded-card bg-white p-5 md:p-6">
            <Field label="Title" htmlFor="post-title">
              <input
                id="post-title"
                type="text"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
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
                  rows={18}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
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

        {/* Sidebar */}
        <div className="flex flex-col gap-5 rounded-card bg-white p-5 md:p-6">
          <Field
            label="Slug"
            htmlFor="post-slug-display"
            hint={`/blog/${slug || "your-post"}`}
          >
            <input
              id="post-slug-display"
              type="text"
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
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
