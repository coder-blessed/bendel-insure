import "server-only";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { heroSlides as defaultHeroSlides } from "@/lib/content";
import type { HeroSlide, SiteSettings } from "./site-content";

// biome-ignore lint/suspicious/noExplicitAny: Supabase row mapper
function rowToSlide(row: any): HeroSlide {
  return {
    id: row.id,
    slug: row.slug,
    eyebrow: row.eyebrow ?? "Featured",
    title: row.title,
    excerpt: row.excerpt ?? "",
    image: row.image,
    cta: row.cta ?? "Read more",
    duration: row.duration ?? "",
    tone: row.tone ?? 0,
    sortOrder: row.sort_order ?? 0,
    isActive: row.is_active ?? true,
  };
}

/**
 * Fetches active hero slides ordered by sort_order.
 * Falls back gracefully to default slides from lib/content.ts if database is empty or errors.
 */
export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("hero_slides")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return defaultHeroSlides.map((slide, idx) => ({
        id: `default-${idx}`,
        slug: slide.slug,
        eyebrow: slide.eyebrow,
        title: slide.title,
        excerpt: slide.excerpt,
        image: slide.image,
        cta: slide.cta,
        duration: slide.duration,
        tone: slide.tone,
        sortOrder: idx + 1,
        isActive: true,
      }));
    }

    return data.map(rowToSlide);
  } catch {
    return defaultHeroSlides.map((slide, idx) => ({
      id: `default-${idx}`,
      slug: slide.slug,
      eyebrow: slide.eyebrow,
      title: slide.title,
      excerpt: slide.excerpt,
      image: slide.image,
      cta: slide.cta,
      duration: slide.duration,
      tone: slide.tone,
      sortOrder: idx + 1,
      isActive: true,
    }));
  }
}

/**
 * Fetches all hero slides (including inactive) for Admin management.
 */
export async function getAllHeroSlides(): Promise<HeroSlide[]> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("hero_slides")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data) return [];
    return data.map(rowToSlide);
  } catch {
    return [];
  }
}

/**
 * Fetches general site settings key-value pairs from Supabase.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .eq("key", "site_images")
      .single();

    if (error || !data) return {};
    return data.value as SiteSettings;
  } catch {
    return {};
  }
}
