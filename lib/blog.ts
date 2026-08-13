/**
 * Pure types and formatting helpers for blog posts.
 * Contains no server-only dependencies so it can be safely imported by
 * both Client Components and Server Components.
 */

export type PostStatus = "draft" | "published";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Markdown body */
  body: string;
  category: string;
  author: string;
  image: string;
  tone: number;
  status: PostStatus;
  /** ISO calendar date, `YYYY-MM-DD`. */
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
};

export const postCategories = [
  "Matchday",
  "Analysis",
  "Academy",
  "Club",
  "Opinion",
  "History",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatPostDate(iso: string): string {
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  const monthName = MONTHS[Number(month) - 1];
  if (!monthName) return iso;
  return `${Number(day)} ${monthName} ${year}`;
}

/** Title to URL slug, used by the editor to derive one as you type. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
