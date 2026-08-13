"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type SettingsActionState = { error?: string; success?: string } | undefined;

export async function saveHeroSlideAction(
  _prev: SettingsActionState,
  formData: FormData,
): Promise<SettingsActionState> {
  const id = formData.get("id") as string;
  const title = (formData.get("title") as string).trim();
  const eyebrow = (formData.get("eyebrow") as string).trim() || "Featured";
  const excerpt = (formData.get("excerpt") as string).trim();
  const image = (formData.get("image") as string).trim();
  const cta = (formData.get("cta") as string).trim() || "Read more";
  const duration = (formData.get("duration") as string).trim();
  const sortOrder = Number(formData.get("sort_order") || 1);
  const isActive = formData.get("is_active") === "true";

  if (!title || !image) {
    return { error: "Title and Image URL are required." };
  }

  const slug =
    (formData.get("slug") as string)?.trim() ||
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  const row = {
    slug,
    eyebrow,
    title,
    excerpt,
    image,
    cta,
    duration,
    sort_order: sortOrder,
    is_active: isActive,
  };

  const supabase = await createSupabaseServerClient();

  let error;
  if (id && !id.startsWith("default-")) {
    const res = await supabase.from("hero_slides").update(row).eq("id", id);
    error = res.error;
  } else {
    const res = await supabase.from("hero_slides").insert(row);
    error = res.error;
  }

  if (error) {
    console.error("saveHeroSlideAction error:", error.message);
    return { error: `Failed to save slide: ${error.message}` };
  }

  revalidatePath("/");
  revalidatePath("/admin/settings");
  return { success: "Hero slide saved successfully!" };
}

export async function deleteHeroSlideAction(id: string) {
  if (id.startsWith("default-")) return;

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("hero_slides").delete().eq("id", id);

  if (error) {
    console.error("deleteHeroSlideAction error:", error.message);
    return;
  }

  revalidatePath("/");
  revalidatePath("/admin/settings");
}

export async function updateSiteSettingsAction(
  _prev: SettingsActionState,
  formData: FormData,
): Promise<SettingsActionState> {
  const homeKitImage = (formData.get("homeKitImage") as string).trim();
  const awayKitImage = (formData.get("awayKitImage") as string).trim();
  const stadiumTourImage = (formData.get("stadiumTourImage") as string).trim();
  const membershipImage = (formData.get("membershipImage") as string).trim();

  const value = {
    homeKitImage,
    awayKitImage,
    stadiumTourImage,
    membershipImage,
  };

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("site_settings")
    .upsert({ key: "site_images", value, updated_at: new Date().toISOString() });

  if (error) {
    console.error("updateSiteSettingsAction error:", error.message);
    return { error: "Failed to update site settings." };
  }

  revalidatePath("/");
  revalidatePath("/admin/settings");
  return { success: "Homepage images updated successfully!" };
}
