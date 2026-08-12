/**
 * Bendel Insurance FC — site content.
 *
 * Club facts (founded 1972, originally Vipers of Benin, "The Benin Arsenal",
 * green & yellow, Samuel Ogbemudia Stadium, 1979 league title, 1978 & 1980 FA Cup,
 * 2023 Federation Cup) are real. Fixtures, results, squad and league table are
 * placeholder sample data — wire them to a feed or CMS before going live.
 */

/**
 * DEV ONLY placeholder photography. Deterministic per seed so images stay
 * stable across reloads instead of flickering between renders.
 *
 * To go live: drop real assets in `public/images/` and replace each `image`
 * value below with its local path (e.g. `/images/remo-stars-preview.jpg`),
 * then delete this helper and the `images.remotePatterns` entries in
 * `next.config.ts`.
 */
const photo = (seed: string, width = 1200, height = 800) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const club = {
  name: "Bendel Insurance FC",
  shortName: "Insurance",
  nickname: "The Benin Arsenal",
  founded: 1972,
  city: "Benin City",
  state: "Edo State",
  stadium: "Samuel Ogbemudia Stadium",
  league: "Nigeria Premier Football League",
};

export type Story = {
  slug: string;
  category: string;
  timestamp: string;
  image: string;
  title: string;
  excerpt?: string;
  tone: number;
};

export type VideoItem = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  locked?: boolean;
  tone: number;
};

export type Promo = {
  slug: string;
  kicker: string;
  image: string;
  title: string;
  tone: number;
};

export const heroSlides = [
  {
    slug: "all-the-goals-federation-cup",
    image: photo("all-the-goals-federation-cup"),
    eyebrow: "All The Goals",
    title: "Every goal on the road to Asaba",
    excerpt:
      "Relive all eleven goals from the Federation Cup run that ended with the trophy coming home to Benin City.",
    cta: "Watch now",
    duration: "12m 04s",
    tone: 0,
  },
  {
    slug: "back-home-at-the-ogbemudia",
    image: photo("back-home-at-the-ogbemudia"),
    eyebrow: "Matchday",
    title: "Back home at the Ogbemudia",
    excerpt:
      "The Benin Arsenal return to their own turf on Sunday. Everything you need before kick-off.",
    cta: "Match preview",
    duration: "4m 38s",
    tone: 1,
  },
  {
    slug: "six-academy-graduates",
    image: photo("six-academy-graduates"),
    eyebrow: "Academy",
    title: "Six graduates, one first-team squad",
    excerpt:
      "Inside the Edo pipeline that has pushed half a dozen teenagers into senior training this season.",
    cta: "Read the feature",
    duration: "7m 12s",
    tone: 2,
  },
];

export const newsStories: Story[] = [
  {
    slug: "how-to-watch-insurance-v-remo-stars",
    image: photo("how-to-watch-insurance-v-remo-stars"),
    category: "Match Preview",
    timestamp: "3 hours ago",
    title: "How to watch Insurance v Remo Stars",
    excerpt:
      "Kick-off time, broadcast details and ticket information for Sunday's NPFL clash at the Samuel Ogbemudia Stadium.",
    tone: 0,
  },
  {
    slug: "loan-news-osagie-joins-warri-wolves",
    image: photo("loan-news-osagie-joins-warri-wolves"),
    category: "News",
    timestamp: "a day ago",
    title: "Loan news: Osagie joins Warri Wolves",
    tone: 3,
  },
  {
    slug: "season-tickets-members-first",
    image: photo("season-tickets-members-first"),
    category: "Tickets",
    timestamp: "2 days ago",
    title: "Season tickets on sale for members first",
    tone: 5,
  },
  {
    slug: "igbinoba-signs-new-deal",
    image: photo("igbinoba-signs-new-deal"),
    category: "Transfers",
    timestamp: "3 days ago",
    title: "Igbinoba signs new three-year deal",
    tone: 1,
  },
  {
    slug: "academy-trials-how-to-register",
    image: photo("academy-trials-how-to-register"),
    category: "Academy",
    timestamp: "4 days ago",
    title: "Academy trials: how to register in Edo State",
    tone: 2,
  },
];

export const featureStories: Story[] = [
  {
    slug: "1979-the-year-benin-ruled",
    image: photo("1979-the-year-benin-ruled"),
    category: "Features",
    timestamp: "5 hours ago",
    title: "1979: the year Benin ruled Nigerian football",
    excerpt:
      "Kadiri Ikhana and the side that took the league title to Edo. The players and staff tell it in their own words.",
    tone: 2,
  },
  {
    slug: "writers-picks-npfl-run-in",
    image: photo("writers-picks-npfl-run-in"),
    category: "Opinion",
    timestamp: "2 days ago",
    title: "Writers' picks: the fixtures that decide our season",
    tone: 4,
  },
  {
    slug: "vipers-to-arsenal-the-crest",
    image: photo("vipers-to-arsenal-the-crest"),
    category: "Features",
    timestamp: "4 days ago",
    title: "From Vipers to Arsenal: the story of the crest",
    tone: 1,
  },
];

export const videos: VideoItem[] = [
  {
    slug: "highlights-insurance-2-rangers-0",
    image: photo("highlights-insurance-2-rangers-0"),
    title: "Highlights: Insurance 2 Rangers 0",
    duration: "3m 51s",
    tone: 0,
  },
  {
    slug: "access-all-areas-asaba",
    image: photo("access-all-areas-asaba"),
    title: "Access All Areas: cup final in Asaba",
    duration: "23m 38s",
    locked: true,
    tone: 2,
  },
  {
    slug: "inside-training-ogbemudia",
    image: photo("inside-training-ogbemudia"),
    title: "Inside training at the Ogbemudia",
    duration: "6m 03s",
    tone: 1,
  },
  {
    slug: "top-10-goals-2025",
    image: photo("top-10-goals-2025"),
    title: "Top 10 goals of 2025",
    duration: "8m 47s",
    tone: 3,
  },
  {
    slug: "press-conference-matchday-14",
    image: photo("press-conference-matchday-14"),
    title: "Press conference: matchday 14",
    duration: "11m 08s",
    locked: true,
    tone: 4,
  },
  {
    slug: "academy-derby-full-match",
    image: photo("academy-derby-full-match"),
    title: "Academy derby: full match replay",
    duration: "1h 46m",
    locked: true,
    tone: 5,
  },
];

export const kitPromos: Promo[] = [
  {
    slug: "home-kit",
    image: photo("home-kit"),
    kicker: "2026/27 home kit",
    title: "Green and gold, out now",
    tone: 0,
  },
  {
    slug: "away-kit",
    image: photo("away-kit"),
    kicker: "New away shirt",
    title: "Away days in white",
    tone: 3,
  },
];

export const ticketPromos: Promo[] = [
  {
    slug: "home-tickets",
    image: photo("home-tickets"),
    kicker: "Be here in 2026/27",
    title: "Football at the Ogbemudia",
    tone: 1,
  },
  {
    slug: "stadium-tours",
    image: photo("stadium-tours"),
    kicker: "Walk the tunnel",
    title: "Stadium tours from ₦3,500",
    tone: 4,
  },
];

export const membershipPromos: Promo[] = [
  {
    slug: "membership-premium",
    image: photo("membership-premium"),
    kicker: "Membership Premium",
    title: "For the ultimate Arsenal",
    tone: 2,
  },
  {
    slug: "membership-official",
    image: photo("membership-official"),
    kicker: "Membership Official",
    title: "For our loyal supporters",
    tone: 0,
  },
];

export type Fixture = {
  competition: string;
  date: string;
  venue: string;
  home: { name: string; tone: number };
  away: { name: string; tone: number };
  score?: string;
  status?: string;
  kickoff?: string;
};

export type TeamKey = "first" | "feeder" | "u17";

export const teamTabs: { key: TeamKey; label: string }[] = [
  { key: "first", label: "First Team" },
  { key: "feeder", label: "Feeder Team" },
  { key: "u17", label: "Academy U17" },
];

export type TeamMatches = {
  last: Fixture;
  next: Fixture;
  upcoming: Fixture;
};

export const matches: Record<TeamKey, TeamMatches> = {
  first: {
    last: {
      competition: "NPFL",
      date: "Sun 26 Jul 2026",
      venue: "Samuel Ogbemudia Stadium, Benin City",
      home: { name: "Bendel Insurance", tone: 0 },
      away: { name: "Enugu Rangers", tone: 3 },
      score: "2 - 0",
      status: "FT",
    },
    next: {
      competition: "NPFL",
      date: "Sun 02 Aug 2026",
      venue: "Samuel Ogbemudia Stadium, Benin City",
      home: { name: "Bendel Insurance", tone: 0 },
      away: { name: "Remo Stars", tone: 5 },
      kickoff: "16:00",
    },
    upcoming: {
      competition: "NPFL",
      date: "Sat 08 Aug 2026",
      venue: "Adokiye Amiesimaka Stadium, Port Harcourt",
      home: { name: "Rivers United", tone: 4 },
      away: { name: "Bendel Insurance", tone: 0 },
      kickoff: "16:00",
    },
  },
  feeder: {
    last: {
      competition: "Nationwide League One",
      date: "Sat 25 Jul 2026",
      venue: "Ogbe Stadium, Benin City",
      home: { name: "Insurance Feeders", tone: 0 },
      away: { name: "Auchi Rovers", tone: 2 },
      score: "1 - 1",
      status: "FT",
    },
    next: {
      competition: "Nationwide League One",
      date: "Sat 01 Aug 2026",
      venue: "Otukpo Township Stadium",
      home: { name: "Lobi Feeders", tone: 4 },
      away: { name: "Insurance Feeders", tone: 0 },
      kickoff: "15:30",
    },
    upcoming: {
      competition: "Nationwide League One",
      date: "Sat 08 Aug 2026",
      venue: "Ogbe Stadium, Benin City",
      home: { name: "Insurance Feeders", tone: 0 },
      away: { name: "Ekpoma City", tone: 5 },
      kickoff: "15:30",
    },
  },
  u17: {
    last: {
      competition: "Edo Youth Cup",
      date: "Fri 24 Jul 2026",
      venue: "Bendel Insurance Academy",
      home: { name: "Insurance U17", tone: 0 },
      away: { name: "Warri Wolves U17", tone: 1 },
      score: "3 - 1",
      status: "FT",
    },
    next: {
      competition: "Edo Youth Cup",
      date: "Fri 31 Jul 2026",
      venue: "Bendel Insurance Academy",
      home: { name: "Insurance U17", tone: 0 },
      away: { name: "Sunshine U17", tone: 3 },
      kickoff: "10:00",
    },
    upcoming: {
      competition: "Edo Youth Cup",
      date: "Fri 07 Aug 2026",
      venue: "Asaba Township Stadium",
      home: { name: "Delta Force U17", tone: 2 },
      away: { name: "Insurance U17", tone: 0 },
      kickoff: "10:00",
    },
  },
};

export type TableRow = {
  position: number;
  team: string;
  played: number;
  goalDifference: number;
  points: number;
};

export const leagueTable: TableRow[] = [
  {
    position: 1,
    team: "Remo Stars",
    played: 24,
    goalDifference: 19,
    points: 46,
  },
  {
    position: 2,
    team: "Rivers United",
    played: 24,
    goalDifference: 14,
    points: 43,
  },
  {
    position: 3,
    team: "Bendel Insurance",
    played: 24,
    goalDifference: 12,
    points: 42,
  },
  { position: 4, team: "Enyimba", played: 24, goalDifference: 8, points: 39 },
  {
    position: 5,
    team: "Enugu Rangers",
    played: 24,
    goalDifference: 5,
    points: 37,
  },
  {
    position: 6,
    team: "Kano Pillars",
    played: 24,
    goalDifference: 2,
    points: 34,
  },
];

export type Player = {
  number: number;
  name: string;
  position: string;
  image: string;
  tone: number;
};

export const squad: Player[] = [
  {
    number: 1,
    name: "Amas Obasogie",
    position: "Goalkeeper",
    tone: 1,
    image: photo("amas-obasogie", 900, 1200),
  },
  {
    number: 4,
    name: "Ndifreke Effiong",
    position: "Defender",
    tone: 0,
    image: photo("ndifreke-effiong", 900, 1200),
  },
  {
    number: 6,
    name: "Tosin Adegbite",
    position: "Defender",
    tone: 2,
    image: photo("tosin-adegbite", 900, 1200),
  },
  {
    number: 8,
    name: "Chinedu Okoye",
    position: "Midfielder",
    tone: 3,
    image: photo("chinedu-okoye", 900, 1200),
  },
  {
    number: 10,
    name: "Osaretin Igbinoba",
    position: "Midfielder",
    tone: 0,
    image: photo("osaretin-igbinoba", 900, 1200),
  },
  {
    number: 11,
    name: "Kelvin Itoya",
    position: "Winger",
    tone: 4,
    image: photo("kelvin-itoya", 900, 1200),
  },
  {
    number: 14,
    name: "Sadiq Yakubu",
    position: "Winger",
    tone: 5,
    image: photo("sadiq-yakubu", 900, 1200),
  },
  {
    number: 19,
    name: "Efe Oghenekaro",
    position: "Forward",
    tone: 0,
    image: photo("efe-oghenekaro", 900, 1200),
  },
  {
    number: 23,
    name: "Peter Uwaifo",
    position: "Forward",
    tone: 2,
    image: photo("peter-uwaifo", 900, 1200),
  },
];

export const honours = [
  { value: 1972, label: "Founded in Benin City", raw: true },
  { value: 1, label: "Nigerian league title", detail: "1979" },
  { value: 3, label: "Domestic cups", detail: "1978, 1980, 2023" },
  { value: 54, label: "Years of the Benin Arsenal" },
];

export const tickerItems = [
  "FT: Insurance 2 - 0 Rangers",
  "Next: Insurance v Remo Stars, Sunday 16:00",
  "Season tickets on sale now",
  "2026/27 home kit available in the club store",
  "Academy trials open across Edo State",
];

export const partners = {
  principal: ["EDO STATE", "AITEO", "ZENITH", "OGBEMUDIA"],
  global: [
    "Air Peace",
    "Bet9ja",
    "Coca-Cola",
    "Dangote",
    "Ecobank",
    "Fidelity",
    "GTCO",
    "Indomie",
    "MTN",
    "NNPC",
    "Peak Milk",
    "Sterling",
  ],
};

export const primaryNav = [
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Matches", href: "/matches" },
  { label: "Teams", href: "/teams" },
  { label: "Insurance TV", href: "/tv" },
  { label: "Tickets", href: "/tickets" },
  { label: "Store", href: "/store" },
  { label: "Club", href: "/club" },
];

export const utilityNav = [
  { label: "Fixtures", href: "/matches/fixtures" },
  { label: "Table", href: "/matches/table" },
  { label: "Academy", href: "/teams/academy" },
  { label: "Help", href: "/help" },
];

export const footerColumns = [
  {
    title: "Club",
    links: [
      { label: "Club info", href: "/club" },
      { label: "History", href: "/club/history" },
      { label: "The Ogbemudia", href: "/club/stadium" },
      { label: "Academy", href: "/teams/academy" },
      { label: "Jobs & careers", href: "/club/careers" },
    ],
  },
  {
    title: "Matches",
    links: [
      { label: "Fixtures", href: "/matches/fixtures" },
      { label: "Results", href: "/matches/results" },
      { label: "NPFL table", href: "/matches/table" },
      { label: "Match centre", href: "/matches/centre" },
    ],
  },
  {
    title: "Fans",
    links: [
      { label: "Membership", href: "/membership" },
      { label: "Season tickets", href: "/tickets/season" },
      { label: "Stadium tours", href: "/tickets/tours" },
      { label: "Supporters clubs", href: "/fans/clubs" },
      { label: "Club store", href: "/store" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of use", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Cookie policy", href: "/legal/cookies" },
      { label: "Accessibility", href: "/legal/accessibility" },
    ],
  },
];

export const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: "youtube" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: "facebook" as const,
  },
  { label: "X", href: "https://x.com", icon: "x" as const },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: "instagram" as const,
  },
  { label: "TikTok", href: "https://www.tiktok.com", icon: "tiktok" as const },
];
