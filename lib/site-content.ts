/**
 * Pure types for hero slides and site settings.
 */

export type HeroSlide = {
  id: string;
  slug: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  image: string;
  cta: string;
  duration: string;
  tone: number;
  sortOrder: number;
  isActive: boolean;
};

export type SiteSettings = {
  homeKitImage?: string;
  awayKitImage?: string;
  stadiumTourImage?: string;
  membershipImage?: string;
};
