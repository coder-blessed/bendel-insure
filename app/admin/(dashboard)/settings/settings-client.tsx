"use client";

import { useActionState, useState, useTransition } from "react";
import { FIELD_CONTROL, Field } from "@/components/admin/field";
import { Check, Pencil, Plus, Trash } from "@/components/icons";
import type { HeroSlide, SiteSettings } from "@/lib/site-content";
import {
  type SettingsActionState,
  deleteHeroSlideAction,
  saveHeroSlideAction,
  updateSiteSettingsAction,
} from "./actions";

export function SettingsClient({
  initialSlides,
  initialSettings,
}: {
  initialSlides: HeroSlide[];
  initialSettings: SiteSettings;
}) {
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [slideState, slideFormAction, slidePending] = useActionState<
    SettingsActionState,
    FormData
  >(saveHeroSlideAction, undefined);

  const [siteState, siteFormAction, sitePending] = useActionState<
    SettingsActionState,
    FormData
  >(updateSiteSettingsAction, undefined);

  function handleStartNew() {
    setEditingSlide({
      id: "",
      slug: "",
      eyebrow: "Matchday",
      title: "",
      excerpt: "",
      image: "",
      cta: "Watch now",
      duration: "5m 00s",
      tone: 0,
      sortOrder: initialSlides.length + 1,
      isActive: true,
    });
    setIsNew(true);
  }

  function handleDeleteSlide(id: string) {
    if (confirm("Are you sure you want to delete this hero slide?")) {
      startTransition(async () => {
        await deleteHeroSlideAction(id);
      });
    }
  }

  return (
    <div className="max-w-5xl space-y-12">
      <div>
        <h1 className="headline text-2xl text-ink uppercase sm:text-3xl">
          Homepage Content & Images
        </h1>
        <p className="mt-2 text-sm text-steel">
          Customise the hero carousel, promo banners, and media images shown on
          the live website.
        </p>
      </div>

      {/* SECTION 1: HERO SLIDES MANAGEMENT */}
      <section className="rounded-card bg-white p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/8 pb-5">
          <div>
            <h2 className="headline text-xl text-ink uppercase">
              Homepage Hero Slides
            </h2>
            <p className="mt-1 text-xs text-steel">
              Add, edit, or toggle the slides featured in the main homepage hero
              slider.
            </p>
          </div>

          <button
            type="button"
            onClick={handleStartNew}
            className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-4 py-2.5 text-[10px] text-white transition-colors hover:bg-brand-dark"
          >
            <Plus className="h-4 w-4" />
            Add Slide
          </button>
        </div>

        {/* SLIDES LIST */}
        <div className="mt-6 divide-y divide-ink/8">
          {initialSlides.length === 0 ? (
            <p className="py-8 text-center text-sm text-steel">
              No custom slides created yet. Using system default hero slides.
            </p>
          ) : (
            initialSlides.map((slide) => (
              <div
                key={slide.id}
                className="flex flex-wrap items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-4">
                  {slide.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-14 w-20 rounded-md object-cover ring-1 ring-ink/10"
                    />
                  ) : (
                    <div className="h-14 w-20 rounded-md bg-smoke" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="eyebrow text-[9px] text-brand">
                        {slide.eyebrow}
                      </span>
                      <span
                        className={`eyebrow rounded-pill px-2 py-0.5 text-[8px] ${
                          slide.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {slide.isActive ? "Active" : "Hidden"}
                      </span>
                    </div>
                    <h3 className="headline mt-1 text-base text-ink uppercase">
                      {slide.title}
                    </h3>
                    <p className="line-clamp-1 text-xs text-steel">
                      {slide.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingSlide(slide);
                      setIsNew(false);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 bg-white text-steel transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteSlide(slide.id)}
                    disabled={isPending}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 bg-white text-steel transition-colors hover:border-red-300 hover:text-red-600 disabled:opacity-50"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* EDIT / CREATE SLIDE FORM */}
        {editingSlide && (
          <div className="mt-8 rounded-card border border-brand/20 bg-smoke/40 p-6">
            <h3 className="headline text-lg text-ink uppercase mb-4">
              {isNew ? "Create New Hero Slide" : `Edit Slide: ${editingSlide.title}`}
            </h3>

            {slideState?.error && (
              <p role="alert" className="mb-4 rounded-control bg-red-50 p-3 text-xs text-red-700">
                {slideState.error}
              </p>
            )}

            {slideState?.success && (
              <p role="status" className="mb-4 rounded-control bg-green-50 p-3 text-xs text-green-700">
                {slideState.success}
              </p>
            )}

            <form action={slideFormAction} className="space-y-4">
              <input type="hidden" name="id" value={editingSlide.id} />
              <input type="hidden" name="slug" value={editingSlide.slug} />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Eyebrow Badge" htmlFor="slide-eyebrow">
                  <input
                    id="slide-eyebrow"
                    name="eyebrow"
                    type="text"
                    defaultValue={editingSlide.eyebrow}
                    placeholder="e.g. Matchday, All The Goals, Academy"
                    className={FIELD_CONTROL}
                    required
                  />
                </Field>

                <Field label="Slide Title" htmlFor="slide-title">
                  <input
                    id="slide-title"
                    name="title"
                    type="text"
                    defaultValue={editingSlide.title}
                    placeholder="Headline text"
                    className={FIELD_CONTROL}
                    required
                  />
                </Field>
              </div>

              <Field label="Excerpt / Description" htmlFor="slide-excerpt">
                <textarea
                  id="slide-excerpt"
                  name="excerpt"
                  rows={3}
                  defaultValue={editingSlide.excerpt}
                  placeholder="Short summary displayed under the title"
                  className={FIELD_CONTROL}
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Image URL" htmlFor="slide-image">
                  <input
                    id="slide-image"
                    name="image"
                    type="url"
                    defaultValue={editingSlide.image}
                    placeholder="https://images.unsplash.com/..."
                    className={FIELD_CONTROL}
                    required
                  />
                </Field>

                <Field label="CTA Button Text" htmlFor="slide-cta">
                  <input
                    id="slide-cta"
                    name="cta"
                    type="text"
                    defaultValue={editingSlide.cta}
                    placeholder="e.g. Watch now, Match preview"
                    className={FIELD_CONTROL}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Duration / Time" htmlFor="slide-duration">
                  <input
                    id="slide-duration"
                    name="duration"
                    type="text"
                    defaultValue={editingSlide.duration}
                    placeholder="e.g. 4m 30s"
                    className={FIELD_CONTROL}
                  />
                </Field>

                <Field label="Sort Order" htmlFor="slide-sort">
                  <input
                    id="slide-sort"
                    name="sort_order"
                    type="number"
                    defaultValue={editingSlide.sortOrder}
                    className={FIELD_CONTROL}
                  />
                </Field>

                <Field label="Status" htmlFor="slide-active">
                  <select
                    id="slide-active"
                    name="is_active"
                    defaultValue={editingSlide.isActive ? "true" : "false"}
                    className={FIELD_CONTROL}
                  >
                    <option value="true">Active (Visible)</option>
                    <option value="false">Hidden</option>
                  </select>
                </Field>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={slidePending}
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[10px] text-white hover:bg-brand-dark disabled:opacity-50"
                >
                  <Check className="h-4 w-4" />
                  {slidePending ? "Saving..." : "Save Slide"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditingSlide(null)}
                  className="eyebrow rounded-pill border border-ink/15 bg-white px-5 py-3 text-[10px] text-ink hover:border-ink/30"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* SECTION 2: HOMEPAGE PROMO IMAGES */}
      <section className="rounded-card bg-white p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
        <div className="border-b border-ink/8 pb-5">
          <h2 className="headline text-xl text-ink uppercase">
            Homepage Banner & Promo Images
          </h2>
          <p className="mt-1 text-xs text-steel">
            Override default photography used in the Store Kit Promos, Stadium
            Tours, and Membership sections.
          </p>
        </div>

        {siteState?.error && (
          <p role="alert" className="mt-4 rounded-control bg-red-50 p-3 text-xs text-red-700">
            {siteState.error}
          </p>
        )}

        {siteState?.success && (
          <p role="status" className="mt-4 rounded-control bg-green-50 p-3 text-xs text-green-700">
            {siteState.success}
          </p>
        )}

        <form action={siteFormAction} className="mt-6 space-y-5">
          <Field label="2026/27 Home Kit Image URL" htmlFor="homeKitImage">
            <input
              id="homeKitImage"
              name="homeKitImage"
              type="url"
              defaultValue={initialSettings.homeKitImage ?? ""}
              placeholder="https://example.com/home-kit.jpg"
              className={FIELD_CONTROL}
            />
          </Field>

          <Field label="2026/27 Away Kit Image URL" htmlFor="awayKitImage">
            <input
              id="awayKitImage"
              name="awayKitImage"
              type="url"
              defaultValue={initialSettings.awayKitImage ?? ""}
              placeholder="https://example.com/away-kit.jpg"
              className={FIELD_CONTROL}
            />
          </Field>

          <Field label="Stadium Tours Banner Image URL" htmlFor="stadiumTourImage">
            <input
              id="stadiumTourImage"
              name="stadiumTourImage"
              type="url"
              defaultValue={initialSettings.stadiumTourImage ?? ""}
              placeholder="https://example.com/ogbemudia-tour.jpg"
              className={FIELD_CONTROL}
            />
          </Field>

          <Field label="Membership Promo Image URL" htmlFor="membershipImage">
            <input
              id="membershipImage"
              name="membershipImage"
              type="url"
              defaultValue={initialSettings.membershipImage ?? ""}
              placeholder="https://example.com/membership.jpg"
              className={FIELD_CONTROL}
            />
          </Field>

          <div className="pt-3">
            <button
              type="submit"
              disabled={sitePending}
              className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 text-[10px] text-white hover:bg-brand-dark disabled:opacity-50"
            >
              <Check className="h-4 w-4" />
              {sitePending ? "Saving Images..." : "Save Homepage Images"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
