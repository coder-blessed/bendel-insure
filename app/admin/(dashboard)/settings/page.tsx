import type { Metadata } from "next";
import { getAllHeroSlides, getSiteSettings } from "@/lib/site-content-server";
import { SettingsClient } from "./settings-client";

export const metadata: Metadata = {
  title: "Settings & Content",
};

export default async function SettingsPage() {
  const slides = await getAllHeroSlides();
  const settings = await getSiteSettings();

  return <SettingsClient initialSlides={slides} initialSettings={settings} />;
}
