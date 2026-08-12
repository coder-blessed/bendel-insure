/**
 * Bendel Insurance FC — site content.
 *
 * Content updated for the 2026/27 NPFL season.
 *
 * Club facts, history, honours and management information are based on
 * the club information supplied by the editorial team.
 *
 * Match fixtures, news and season information should be connected to
 * an official club/NPFL feed or CMS when available.
 */

/**
 * Image helper.
 *
 * For production, replace placeholder images with assets from:
 * public/images/
 *
 * Example:
 * image: "/images/warri-wolves-matchday-1.jpg"
 */
const photo = (seed: string, width = 1200, height = 800) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

/**
 * Club identity
 */
export const club = {
  name: "Bendel Insurance FC",
  shortName: "Insurance",
  nickname: "The Benin Arsenal",
  formerName: "Vipers of Benin",
  founded: 1972,
  city: "Benin City",
  state: "Edo State",
  country: "Nigeria",
  stadium: "Samuel Ogbemudia Stadium",
  stadiumCapacity: 12000,
  league: "Nigeria Premier Football League",
  season: "2026/27",
  homeColours: "Yellow shirt and yellow shorts",
  awayColours: "Green shirt and green shorts",
  neutralColours: "White shirt and white shorts",
  goalkeeperColours: "Lemon and pink",
};

/**
 * Management
 */
export const management = {
  chairman: "Jarret Tenebe",
  generalManager: "Charles Ihimekpen",
  technicalManager: "Kennedy Boboye",
  chiefCoach: "Greg Ikhenoba",
  technicalAdviser: "Alabi Aisien",
  governingBody: "Edo State Sports Commission",
  sportsCommissionChairman: "Hon. Amadin Desmond Enabulele",
};

/**
 * Types
 */
export type Story = {
  slug: string;
  category: string;
  timestamp: string;
  image: string;
  title: string;
  excerpt?: string;
  content?: string;
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

/**
 * HERO CONTENT
 */
export const heroSlides = [
  {
    slug: "insurance-v-warri-wolves-matchday-1",
    image: "/images/warri-wolves-matchday-1.jpg",
    eyebrow: "NPFL 2026/27",
    title: "Insurance begin campaign against Warri Wolves",
    excerpt:
      "The Benin Arsenal will open their 2026/27 NPFL campaign at home against Warri Wolves on Sunday, August 30.",
    cta: "Read match preview",
    duration: "5m 20s",
    tone: 0,
  },
  {
    slug: "welcome-back-ben-in-arsenal",
    image: photo("welcome-back-ben-in-arsenal"),
    eyebrow: "Matchday",
    title: "Welcome back to the Ogbemudia",
    excerpt:
      "After serving their three-match behind-closed-doors punishment, Bendel Insurance expect their supporters back in the stands.",
    cta: "Matchday information",
    duration: "4m 38s",
    tone: 1,
  },
  {
    slug: "the-history-of-the-benin-arsenal",
    image: photo("the-history-of-the-benin-arsenal"),
    eyebrow: "Club History",
    title: "The story of the Benin Arsenal",
    excerpt:
      "From the Vipers of Benin to one of Nigeria's most historic football institutions.",
    cta: "Explore our history",
    duration: "8m 12s",
    tone: 2,
  },
];

/**
 * NEWS / BLOG STORIES
 */
export const newsStories: Story[] = [
  {
    slug: "npfl-2026-27-bendel-insurance-begin-campaign-against-warri-wolves",
    image: "/images/warri-wolves-matchday-1.jpg",
    category: "NPFL",
    timestamp: "5 days ago",
    title:
      "NPFL 2026/27: Bendel Insurance FC begin campaign against Warri Wolves in Benin",
    excerpt:
      "The Benin Arsenal will begin the 2026/27 Nigeria Premier Football League season at home against Warri Wolves on Sunday, August 30.",
    content: `
The 2026/27 Nigeria Premier Football League season is set to kick off on Friday, August 28, 2026.

The league management body announced the opening date during the NPFL Annual General Meeting and draws ceremony held in Ibadan, Oyo State, on Friday, August 7, 2026.

Bendel Insurance Football Club of Benin were drawn at home against Warri Wolves in their opening fixture.

The Niger Delta derby is scheduled for Sunday, August 30, 2026, at the Samuel Ogbemudia Stadium in Benin City.

The Benin Arsenal will then travel to Lafia for Match Day Two against Nasarawa United.

Their next three fixtures are against Kun Khalifat at home, Ranchers Bees away and Ikorodu City at home.

Bendel Insurance will also welcome their supporters back to the stadium after serving their three-match behind-closed-doors punishment.

The club finished fifth in the 2025/26 NPFL season and will be aiming to improve on that position during the new campaign.

Meanwhile, Executive Chairman of the Edo State Sports Commission, Hon. Amadin Desmond Enabulele, commended the NPFL management under the leadership of Hon. Otunba Gbenga Elegbeleye.

Enabulele praised the league management for establishing a stable football calendar and for the progress recorded in the Nigerian top flight over recent seasons.

He said the league's consistency and operational standards represented significant progress for Nigerian football.
`,
    tone: 0,
  },

  {
    slug: "bendel-insurance-club-profile",
    image: photo("bendel-insurance-club-profile"),
    category: "Club",
    timestamp: "2 days ago",
    title: "Bendel Insurance FC: The Benin Arsenal",
    excerpt:
      "Discover the history, identity, leadership and achievements of one of Nigeria's most historic football clubs.",
    content: `
Bendel Insurance Football Club is a football club based in Benin City, Edo State, Nigeria.

The club competes in the Nigeria Premier Football League and is owned by the Edo State Government.

Originally known as the Vipers of Benin, the club was established in 1972 and plays its home matches at the Samuel Ogbemudia Stadium, which has a capacity of approximately 12,000 spectators.

Bendel Insurance has a rich football history stretching across more than five decades.

The club won the 2023 Federation Cup after defeating Enugu Rangers 1–0 at the Stephen Keshi Stadium in Asaba on June 21, 2023.

Imade Osarenkhoe scored the only goal of the final.

The Benin Arsenal have also enjoyed considerable success on the continental stage, including WAFU/West African club honours during the 1990s and the CAF Cup triumph in 1994.

The club is currently chaired by Jarret Tenebe and is overseen by the Edo State Sports Commission.

Former captain and secretary Charles Ihimekpen serves as General Manager.

Kennedy Boboye is the Technical Manager while Greg Ikhenoba serves as Chief Coach.
`,
    tone: 1,
  },

  {
    slug: "bendel-insurance-history-golden-era-to-modern-resurgence",
    image: photo("bendel-insurance-history-golden-era"),
    category: "History",
    timestamp: "1 day ago",
    title: "From the Vipers to the Benin Arsenal: Bendel Insurance's remarkable history",
    excerpt:
      "A journey through the club's founding, golden era, continental success, difficult years and modern resurgence.",
    content: `
Bendel Insurance Football Club, affectionately known as the Benin Arsenal, is one of Nigeria's most historic football institutions.

The club, formerly known as the Vipers of Benin, was founded in 1972 by the military administrator of the old Bendel State, Dr. Samuel Osaigbovo Ogbemudia.

The club was established as the sporting arm of Bendel Insurance Limited and became one of the founding members of the Nigerian Premier League.

Pa Alabi Aisien was the club's pioneer coach.

The club's early years produced a remarkable period of success.

During the 1970s, Bendel Insurance established itself as a major force in Nigerian football, winning league and domestic cup honours.

In 1978, Insurance produced one of the most memorable Challenge Cup final performances in Nigerian football history, defeating Enugu Rangers 3–0.

The club also secured another league championship in 1979.

The 1990s produced another golden period.

Bendel Insurance became a dominant force in West African club football and won three consecutive West African Club Championship titles in 1993, 1994 and 1995.

In 1994, the Benin Arsenal also won the CAF Cup after defeating Angola's Primeiro de Maio.

The club later experienced a difficult period marked by administrative instability and financial challenges.

The 2007–08 season ended with the club suffering relegation from the top division.

Insurance subsequently spent an extended period in the Nigeria National League.

The modern revival began with renewed investment and restructuring by the Edo State Government.

The Samuel Ogbemudia Stadium was modernised and the club rebuilt its football structure.

In 2022, Bendel Insurance won the Nigeria National League title under Coach Monday Odigie and secured promotion back to the top flight.

Their return to the NPFL in 2023 was immediately followed by an extraordinary 21-game unbeaten run.

On June 21, 2023, the Benin Arsenal defeated Enugu Rangers 1–0 in Asaba to win the Federation Cup.

The victory ended a 28-year wait for a major trophy and earned the club qualification for continental competition.

The Benin Arsenal now enter the 2026/27 campaign looking to build another chapter in their long and proud history.
`,
    tone: 2,
  },
];

/**
 * FEATURE STORIES
 */
export const featureStories: Story[] = [
  {
    slug: "bendel-insurance-major-honours",
    image: photo("bendel-insurance-major-honours"),
    category: "Honours",
    timestamp: "Today",
    title: "Bendel Insurance: the major honours",
    excerpt:
      "A look at the league, Federation Cup, WAFU and continental trophies won by the Benin Arsenal.",
    content: `
Bendel Insurance have built one of the strongest trophy collections in Nigerian football.

Their major honours include:

CAF Cup
1994

West African Club Championship
1993, 1994, 1995

Nigerian Premier League
1973, 1979

Nigerian FA Cup / Federation Cup
1972, 1978, 1980, 2023

Nigeria National League
2022

The 2023 Federation Cup triumph remains one of the club's most important modern achievements.
`,
    tone: 0,
  },

  {
    slug: "life-at-samuel-ogbemudia-stadium",
    image: photo("life-at-samuel-ogbemudia-stadium"),
    category: "Features",
    timestamp: "Yesterday",
    title: "Home of the Benin Arsenal: Samuel Ogbemudia Stadium",
    excerpt:
      "The iconic Benin City stadium remains the home of Bendel Insurance Football Club.",
    tone: 1,
  },

  {
    slug: "2026-27-season-expectations",
    image: photo("2026-27-season-expectations"),
    category: "Season",
    timestamp: "Yesterday",
    title: "What to expect from Bendel Insurance in 2026/27",
    excerpt:
      "After finishing fifth last season, the Benin Arsenal enter the new campaign looking to climb higher.",
    tone: 3,
  },
];

/**
 * VIDEOS
 */
export const videos: VideoItem[] = [
  {
    slug: "insurance-warri-wolves-match-preview",
    image: "/images/warri-wolves-matchday-1.jpg",
    title: "Match Preview: Insurance v Warri Wolves",
    duration: "5m 20s",
    tone: 0,
  },
  {
    slug: "bendel-insurance-2023-federation-cup-final",
    image: photo("bendel-insurance-2023-federation-cup-final"),
    title: "2023 Federation Cup Final: Insurance 1–0 Rangers",
    duration: "12m 04s",
    tone: 2,
  },
  {
    slug: "inside-samuel-ogbemudia-stadium",
    image: photo("inside-samuel-ogbemudia-stadium"),
    title: "Inside Samuel Ogbemudia Stadium",
    duration: "6m 03s",
    tone: 1,
  },
  {
    slug: "history-of-bendel-insurance",
    image: photo("history-of-bendel-insurance"),
    title: "The History of the Benin Arsenal",
    duration: "18m 47s",
    tone: 3,
  },
  {
    slug: "2026-27-season-preview",
    image: photo("2026-27-season-preview"),
    title: "2026/27 Season Preview",
    duration: "11m 08s",
    tone: 4,
  },
];

/**
 * KIT PROMOTIONS
 */
export const kitPromos: Promo[] = [
  {
    slug: "home-kit",
    image: photo("bendel-insurance-home-kit"),
    kicker: "2026/27 home colours",
    title: "Yellow and proud",
    tone: 0,
  },
  {
    slug: "away-kit",
    image: photo("bendel-insurance-away-kit"),
    kicker: "2026/27 away colours",
    title: "The Benin Arsenal in green",
    tone: 3,
  },
];

/**
 * TICKET PROMOTIONS
 */
export const ticketPromos: Promo[] = [
  {
    slug: "warri-wolves-tickets",
    image: "/images/warri-wolves-matchday-1.jpg",
    kicker: "NPFL Matchday 1",
    title: "Insurance v Warri Wolves",
    tone: 1,
  },
  {
    slug: "stadium-tickets",
    image: photo("samuel-ogbemudia-matchday"),
    kicker: "Back at the Ogbemudia",
    title: "Come support the Benin Arsenal",
    tone: 4,
  },
];

/**
 * MEMBERSHIP PROMOTIONS
 */
export const membershipPromos: Promo[] = [
  {
    slug: "benin-arsenal-membership",
    image: photo("benin-arsenal-membership"),
    kicker: "Support the Arsenal",
    title: "Become part of the Benin Arsenal family",
    tone: 2,
  },
  {
    slug: "matchday-supporters",
    image: photo("bendel-insurance-supporters"),
    kicker: "Matchday",
    title: "Stand with Insurance",
    tone: 0,
  },
];

/**
 * FIXTURES
 */
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

/**
 * 2026/27 FIRST TEAM OPENING FIXTURES
 */
export type TeamMatches = {
  last: Fixture;
  next: Fixture;
  upcoming: Fixture;
};

export const matches: Record<TeamKey, TeamMatches> = {
  first: {
    last: {
      competition: "NPFL 2025/26",
      date: "2026",
      venue: "Nigeria",
      home: {
        name: "Bendel Insurance",
        tone: 0,
      },
      away: {
        name: "—",
        tone: 3,
      },
      status: "Season completed",
    },

    next: {
      competition: "NPFL 2026/27",
      date: "Sun 30 Aug 2026",
      venue: "Samuel Ogbemudia Stadium, Benin City",
      home: {
        name: "Bendel Insurance",
        tone: 0,
      },
      away: {
        name: "Warri Wolves",
        tone: 1,
      },
      kickoff: "TBA",
    },

    upcoming: {
      competition: "NPFL 2026/27",
      date: "Match Day 2",
      venue: "Lafia",
      home: {
        name: "Nasarawa United",
        tone: 4,
      },
      away: {
        name: "Bendel Insurance",
        tone: 0,
      },
      kickoff: "TBA",
    },
  },

  feeder: {
    last: {
      competition: "Nigeria National League",
      date: "2026",
      venue: "Benin City",
      home: {
        name: "Insurance Feeders",
        tone: 0,
      },
      away: {
        name: "—",
        tone: 2,
      },
      status: "TBA",
    },

    next: {
      competition: "Nigeria National League",
      date: "TBA",
      venue: "TBA",
      home: {
        name: "Insurance Feeders",
        tone: 0,
      },
      away: {
        name: "TBA",
        tone: 4,
      },
      kickoff: "TBA",
    },

    upcoming: {
      competition: "Nigeria National League",
      date: "TBA",
      venue: "TBA",
      home: {
        name: "TBA",
        tone: 2,
      },
      away: {
        name: "Insurance Feeders",
        tone: 0,
      },
      kickoff: "TBA",
    },
  },

  u17: {
    last: {
      competition: "Academy",
      date: "2026",
      venue: "Benin City",
      home: {
        name: "Insurance U17",
        tone: 0,
      },
      away: {
        name: "—",
        tone: 1,
      },
      status: "TBA",
    },

    next: {
      competition: "Academy",
      date: "TBA",
      venue: "Bendel Insurance Academy",
      home: {
        name: "Insurance U17",
        tone: 0,
      },
      away: {
        name: "TBA",
        tone: 3,
      },
      kickoff: "TBA",
    },

    upcoming: {
      competition: "Academy",
      date: "TBA",
      venue: "TBA",
      home: {
        name: "TBA",
        tone: 2,
      },
      away: {
        name: "Insurance U17",
        tone: 0,
      },
      kickoff: "TBA",
    },
  },
};

/**
 * OPENING FIVE 2026/27 NPFL FIXTURES
 */
export const seasonFixtures: Fixture[] = [
  {
    competition: "NPFL 2026/27",
    date: "Sun 30 Aug 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    home: {
      name: "Bendel Insurance",
      tone: 0,
    },
    away: {
      name: "Warri Wolves",
      tone: 1,
    },
    kickoff: "TBA",
  },

  {
    competition: "NPFL 2026/27",
    date: "TBA",
    venue: "Lafia",
    home: {
      name: "Nasarawa United",
      tone: 4,
    },
    away: {
      name: "Bendel Insurance",
      tone: 0,
    },
    kickoff: "TBA",
  },

  {
    competition: "NPFL 2026/27",
    date: "TBA",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    home: {
      name: "Bendel Insurance",
      tone: 0,
    },
    away: {
      name: "Kun Khalifat",
      tone: 2,
    },
    kickoff: "TBA",
  },

  {
    competition: "NPFL 2026/27",
    date: "TBA",
    venue: "TBA",
    home: {
      name: "Ranchers Bees",
      tone: 4,
    },
    away: {
      name: "Bendel Insurance",
      tone: 0,
    },
    kickoff: "TBA",
  },

  {
    competition: "NPFL 2026/27",
    date: "TBA",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    home: {
      name: "Bendel Insurance",
      tone: 0,
    },
    away: {
      name: "Ikorodu City",
      tone: 5,
    },
    kickoff: "TBA",
  },
];

/**
 * 2025/26 FINAL POSITION
 */
export const leagueTable: TableRow[] = [
  {
    position: 1,
    team: "TBA",
    played: 0,
    goalDifference: 0,
    points: 0,
  },
];

export type TableRow = {
  position: number;
  team: string;
  played: number;
  goalDifference: number;
  points: number;
};

/**
 * 2025/26 SEASON NOTE
 */
export const previousSeason = {
  season: "2025/26",
  bendelInsurancePosition: 5,
  summary:
    "Bendel Insurance finished fifth in the 2025/26 NPFL season and will be looking to improve on that position in 2026/27.",
};

/**
 * SQUAD
 *
 * Replace with confirmed 2026/27 squad information when officially released.
 */
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

/**
 * HONOURS
 */
export const honours = [
  {
    value: 1972,
    label: "Founded in Benin City",
    raw: true,
  },
  {
    value: 2,
    label: "Nigerian Premier League titles",
    detail: "1973, 1979",
  },
  {
    value: 4,
    label: "FA Cup / Federation Cup titles",
    detail: "1972, 1978, 1980, 2023",
  },
  {
    value: 3,
    label: "West African Club Championship titles",
    detail: "1993, 1994, 1995",
  },
  {
    value: 1,
    label: "CAF Cup",
    detail: "1994",
  },
  {
    value: 1,
    label: "Nigeria National League title",
    detail: "2022",
  },
];

/**
 * DETAILED TROPHY CABINET
 */
export const trophyCabinet = [
  {
    competition: "CAF Cup",
    titles: 1,
    winningYears: ["1994"],
  },
  {
    competition: "West African Club Championship (UFOA/WAFU)",
    titles: 3,
    winningYears: ["1993", "1994", "1995"],
  },
  {
    competition: "Nigerian Premier League",
    titles: 2,
    winningYears: ["1973", "1979"],
  },
  {
    competition: "Nigerian FA Cup / Federation Cup",
    titles: 4,
    winningYears: ["1972", "1978", "1980", "2023"],
  },
  {
    competition: "Nigeria National League",
    titles: 1,
    winningYears: ["2022"],
  },
];

/**
 * MATCHDAY TICKER
 */
export const tickerItems = [
  "NPFL 2026/27 begins August 28",
  "Insurance v Warri Wolves — Sunday, August 30",
  "The Benin Arsenal return to the Ogbemudia",
  "Insurance finished fifth in the 2025/26 NPFL season",
  "2023 Federation Cup champions",
];

/**
 * PARTNERS
 */
export const partners = {
  principal: [
    "EDO STATE",
    "AITEO",
    "ZENITH",
    "OGBEMUDIA",
  ],

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

/**
 * PRIMARY NAVIGATION
 */
export const primaryNav = [
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Matches",
    href: "/matches",
  },
  {
    label: "Teams",
    href: "/teams",
  },
  {
    label: "Insurance TV",
    href: "/tv",
  },
  {
    label: "Tickets",
    href: "/tickets",
  },
  {
    label: "Store",
    href: "/store",
  },
  {
    label: "Club",
    href: "/club",
  },
];

/**
 * UTILITY NAVIGATION
 */
export const utilityNav = [
  {
    label: "Fixtures",
    href: "/matches/fixtures",
  },
  {
    label: "Table",
    href: "/matches/table",
  },
  {
    label: "Academy",
    href: "/teams/academy",
  },
  {
    label: "History",
    href: "/club/history",
  },
  {
    label: "Help",
    href: "/help",
  },
];

/**
 * FOOTER
 */
export const footerColumns = [
  {
    title: "Club",
    links: [
      {
        label: "Club info",
        href: "/club",
      },
      {
        label: "History",
        href: "/club/history",
      },
      {
        label: "The Ogbemudia",
        href: "/club/stadium",
      },
      {
        label: "Academy",
        href: "/teams/academy",
      },
      {
        label: "Jobs & careers",
        href: "/club/careers",
      },
    ],
  },

  {
    title: "Matches",
    links: [
      {
        label: "Fixtures",
        href: "/matches/fixtures",
      },
      {
        label: "Results",
        href: "/matches/results",
      },
      {
        label: "NPFL table",
        href: "/matches/table",
      },
      {
        label: "Match centre",
        href: "/matches/centre",
      },
    ],
  },

  {
    title: "Fans",
    links: [
      {
        label: "Membership",
        href: "/membership",
      },
      {
        label: "Tickets",
        href: "/tickets",
      },
      {
        label: "Stadium",
        href: "/club/stadium",
      },
      {
        label: "Supporters clubs",
        href: "/fans/clubs",
      },
      {
        label: "Club store",
        href: "/store",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        label: "Terms of use",
        href: "/legal/terms",
      },
      {
        label: "Privacy policy",
        href: "/legal/privacy",
      },
      {
        label: "Cookie policy",
        href: "/legal/cookies",
      },
      {
        label: "Accessibility",
        href: "/legal/accessibility",
      },
    ],
  },
];

/**
 * SOCIAL MEDIA
 */
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
  {
    label: "X",
    href: "https://x.com",
    icon: "x" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: "instagram" as const,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com",
    icon: "tiktok" as const,
  },
];