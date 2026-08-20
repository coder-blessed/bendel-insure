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

import { title } from "process";

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
    slug: "tenebe-vows-to-reposition-bendel-insurance-for-global-success",
    image: "/images/chairman.jpg",
    category: "Club",
    timestamp: "Today",
    title:
      "2026/27: Bendel Insurance FC boss Tenebe vows to reposition club for global success",
    excerpt:
      "Bendel Insurance FC chairman Emperor Jarrett Tenebe has pledged to reposition the Benin Arsenal for international success through strategic partnerships, player branding, global marketing and talent exposure.",
    content: `
As part of preparations for the 2026/2027 Nigeria Professional Football League season, the Chairman of Bendel Insurance Football Club, Emperor Jarrett Tenebe, has vowed to explore all necessary avenues and pull resources together to help reposition the Edo State-owned football club to an international standard.

The Benin Arsenal chairman gave the assurance when he held a strategic meeting in London with Dr Drew Uyi, a FIFA-licensed football agent and international brand strategist.

The meeting focused on innovative strategies to reposition the historic Benin-based club for greater success on and off the pitch.

Tenebe, who doubles as chairman of the All Progressives Congress in Edo State, and Uyi, founder and CEO of DD Eleven Group, met to explore possible ways of strengthening Bendel Insurance's global profile through modern player branding, international marketing, talent exposure and commercialization.

The discussions also centred on initiatives aimed at improving the international marketability of the club's players while reinforcing Bendel Insurance's reputation as one of Nigeria's premier football clubs.

One of the key proposals was the introduction of a structured player-branding programme designed to equip players with professional images, stronger digital profiles and increased media visibility to attract international opportunities, sponsorships and scouting.

Tenebe reaffirmed his commitment to building a stronger and more competitive Bendel Insurance, stressing the need for innovation, professionalism and strategic partnerships in driving the club's growth.

Drew Uyi noted that such partnerships would be important to ensuring that the club develops both competitively and commercially.

Uyi expressed his readiness to support the club's vision by leveraging his international football network and expertise in player branding and global sports marketing.

He noted that modern football requires more than talent, stressing that strategic branding is increasingly important in enhancing players' value and creating opportunities on the global stage.

The London meeting marks the beginning of a proposed collaboration aimed at elevating Bendel Insurance's international profile, empowering its players and laying the foundation for a successful 2026/2027 season.

With preparations already underway, Bendel Insurance FC boss said the management of the club remained committed to innovation, excellence and sustainable growth.
`,
    tone: 1,
  },
  {
    slug: "npfl-2026-27-bendel-insurance-begin-campaign-against-warri-wolves",
    image: "/images/warri-wolves-matchday-1.jpg",
    category: "NPFL",
    timestamp: "4th august, 2026",
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
    timestamp: "7th august, 2026",
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
  id?: string;
  matchday?: number;
  competition: string;
  competitionCode?: "NPFL" | "CUP" | "WAFU" | "CAF" | "FRIENDLY";
  date: string;
  month?: string;
  venue: string;
  isHome?: boolean;
  home: { name: string; tone: number; shortName?: string };
  away: { name: string; tone: number; shortName?: string };
  score?: string;
  status?: string;
  kickoff?: string;
  broadcast?: string;
  ticketAvailable?: boolean;
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
 * COMPLETE 2026/27 SEASON FIXTURES (NPFL & FEDERATION CUP)
 */
export const seasonFixtures: Fixture[] = [
  // AUGUST 2026
  {
    id: "md-1",
    matchday: 1,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 30 Aug 2026",
    month: "Aug 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Warri Wolves", tone: 1, shortName: "WAR" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // SEPTEMBER 2026
  {
    id: "md-2",
    matchday: 2,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 06 Sep 2026",
    month: "Sep 2026",
    venue: "Lafia Township Stadium, Lafia",
    isHome: false,
    home: { name: "Nasarawa United", tone: 4, shortName: "NAS" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-3",
    matchday: 3,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 13 Sep 2026",
    month: "Sep 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Kun Khalifat", tone: 2, shortName: "KUN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-4",
    matchday: 4,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 20 Sep 2026",
    month: "Sep 2026",
    venue: "Ahmadu Bello Stadium, Kaduna",
    isHome: false,
    home: { name: "Ranchers Bees", tone: 4, shortName: "RAN" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-5",
    matchday: 5,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 27 Sep 2026",
    month: "Sep 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Ikorodu City", tone: 5, shortName: "IKO" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // OCTOBER 2026
  {
    id: "md-6",
    matchday: 6,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 04 Oct 2026",
    month: "Oct 2026",
    venue: "Adokiye Amiesimaka Stadium, Port Harcourt",
    isHome: false,
    home: { name: "Rivers United", tone: 3, shortName: "RIV" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-7",
    matchday: 7,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 11 Oct 2026",
    month: "Oct 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Enyimba International", tone: 1, shortName: "ENY" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / SuperSport",
    ticketAvailable: true,
  },
  
  {
    id: "md-8",
    matchday: 8,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 18 Oct 2026",
    month: "Oct 2026",
    venue: "Nnamdi Azikiwe Stadium, Enugu",
    isHome: false,
    home: { name: "Enugu Rangers", tone: 1, shortName: "RAN" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-9",
    matchday: 9,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 25 Oct 2026",
    month: "Oct 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Remo Stars", tone: 2, shortName: "REM" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // NOVEMBER 2026
  {
    id: "md-10",
    matchday: 10,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 01 Nov 2026",
    month: "Nov 2026",
    venue: "Lekan Salami Stadium, Ibadan",
    isHome: false,
    home: { name: "Shooting Stars 3SC", tone: 3, shortName: "3SC" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-11",
    matchday: 11,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 08 Nov 2026",
    month: "Nov 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Kano Pillars", tone: 4, shortName: "PIL" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-12",
    matchday: 12,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 15 Nov 2026",
    month: "Nov 2026",
    venue: "New Jos Stadium, Jos",
    isHome: false,
    home: { name: "Plateau United", tone: 5, shortName: "PLA" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  
  {
    id: "md-13",
    matchday: 13,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 22 Nov 2026",
    month: "Nov 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Sunshine Stars", tone: 1, shortName: "SUN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-14",
    matchday: 14,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 29 Nov 2026",
    month: "Nov 2026",
    venue: "Dan Anyiam Stadium, Owerri",
    isHome: false,
    home: { name: "Heartland FC", tone: 2, shortName: "HEA" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },

  // DECEMBER 2026
  {
    id: "md-15",
    matchday: 15,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 06 Dec 2026",
    month: "Dec 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Kwara United", tone: 3, shortName: "KWA" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-16",
    matchday: 16,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 13 Dec 2026",
    month: "Dec 2026",
    venue: "Muhammadu Dikko Stadium, Katsina",
    isHome: false,
    home: { name: "Katsina United", tone: 4, shortName: "KAT" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  
  {
    id: "md-17",
    matchday: 17,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 20 Dec 2026",
    month: "Dec 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Abia Warriors", tone: 2, shortName: "ABI" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // JANUARY 2027
  {
    id: "md-18",
    matchday: 18,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 03 Jan 2027",
    month: "Jan 2027",
    venue: "Samson Siasia Stadium, Yenagoa",
    isHome: false,
    home: { name: "Bayelsa United", tone: 5, shortName: "BAY" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-19",
    matchday: 19,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 10 Jan 2027",
    month: "Jan 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Akwa United", tone: 1, shortName: "AKW" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-20",
    matchday: 20,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 24 Jan 2027",
    month: "Jan 2027",
    venue: "Warri Township Stadium, Warri",
    isHome: false,
    home: { name: "Warri Wolves", tone: 1, shortName: "WAR" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-21",
    matchday: 21,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 31 Jan 2027",
    month: "Jan 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Nasarawa United", tone: 4, shortName: "NAS" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // FEBRUARY 2027
  {
    id: "md-22",
    matchday: 22,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 07 Feb 2027",
    month: "Feb 2027",
    venue: "Dan Anyiam Stadium, Owerri",
    isHome: false,
    home: { name: "Kun Khalifat", tone: 2, shortName: "KUN" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-23",
    matchday: 23,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 14 Feb 2027",
    month: "Feb 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Ranchers Bees", tone: 4, shortName: "RAN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  {
    id: "md-24",
    matchday: 24,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 21 Feb 2027",
    month: "Feb 2027",
    venue: "Mobolaji Johnson Arena, Onikan, Lagos",
    isHome: false,
    home: { name: "Ikorodu City", tone: 5, shortName: "IKO" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-25",
    matchday: 25,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 28 Feb 2027",
    month: "Feb 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Rivers United", tone: 3, shortName: "RIV" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // MARCH 2027
  {
    id: "md-26",
    matchday: 26,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 07 Mar 2027",
    month: "Mar 2027",
    venue: "Enyimba International Stadium, Aba",
    isHome: false,
    home: { name: "Enyimba International", tone: 1, shortName: "ENY" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-27",
    matchday: 27,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 14 Mar 2027",
    month: "Mar 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Enugu Rangers", tone: 1, shortName: "RAN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / SuperSport",
    ticketAvailable: true,
  },
  {
    id: "md-28",
    matchday: 28,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 21 Mar 2027",
    month: "Mar 2027",
    venue: "Remo Stars Stadium, Ikenne",
    isHome: false,
    home: { name: "Remo Stars", tone: 2, shortName: "REM" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "cup-sf",
    matchday: undefined,
    competition: "Federation Cup 2026/27 (Semi-Final)",
    competitionCode: "CUP",
    date: "Wed 24 Mar 2027",
    month: "Mar 2027",
    venue: "Stephen Keshi Stadium, Asaba (Neutral)",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Enugu Rangers", tone: 1, shortName: "RAN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NTA Live",
    ticketAvailable: true,
  },
  {
    id: "md-29",
    matchday: 29,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 28 Mar 2027",
    month: "Mar 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Shooting Stars 3SC", tone: 3, shortName: "3SC" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // APRIL 2027
  {
    id: "md-30",
    matchday: 30,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 04 Apr 2027",
    month: "Apr 2027",
    venue: "Sani Abacha Stadium, Kano",
    isHome: false,
    home: { name: "Kano Pillars", tone: 4, shortName: "PIL" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-31",
    matchday: 31,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 11 Apr 2027",
    month: "Apr 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Plateau United", tone: 5, shortName: "PLA" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-32",
    matchday: 32,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 18 Apr 2027",
    month: "Apr 2027",
    venue: "Akure Township Stadium, Akure",
    isHome: false,
    home: { name: "Sunshine Stars", tone: 1, shortName: "SUN" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-33",
    matchday: 33,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 25 Apr 2027",
    month: "Apr 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Heartland FC", tone: 2, shortName: "HEA" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },

  // MAY 2027
  {
    id: "md-34",
    matchday: 34,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 02 May 2027",
    month: "May 2027",
    venue: "Kwara State Stadium, Ilorin",
    isHome: false,
    home: { name: "Kwara United", tone: 3, shortName: "KWA" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-35",
    matchday: 35,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 09 May 2027",
    month: "May 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Katsina United", tone: 4, shortName: "KAT" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-36",
    matchday: 36,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 16 May 2027",
    month: "May 2027",
    venue: "Umuahia Township Stadium, Umuahia",
    isHome: false,
    home: { name: "Abia Warriors", tone: 2, shortName: "ABI" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-37",
    matchday: 37,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 23 May 2027",
    month: "May 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Bayelsa United", tone: 5, shortName: "BAY" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-38",
    matchday: 38,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
[
  {
    id: "md-1",
    matchday: 1,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 30 Aug 2026",
    month: "Aug 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Warri Wolves", tone: 4, shortName: "WAR" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-2",
    matchday: 2,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 06 Sep 2026",
    month: "Sep 2026",
    venue: "Lafia Township Stadium, Lafia",
    isHome: false,
    home: { name: "Nasarawa United", tone: 6, shortName: "NAS" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-3",
    matchday: 3,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 13 Sep 2026",
    month: "Sep 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Kun Khalifat", tone: 7, shortName: "KUN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-4",
    matchday: 4,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 20 Sep 2026",
    month: "Sep 2026",
    venue: "Kaduna Township Stadium, Kaduna",
    isHome: false,
    home: { name: "Ranchers Bees", tone: 8, shortName: "RAN" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-5",
    matchday: 5,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Wed 23 Sep 2026",
    month: "Sep 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Ikorodu City", tone: 9, shortName: "IKO" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-6",
    matchday: 6,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 27 Sep 2026",
    month: "Sep 2026",
    venue: "Enyimba International Stadium, Aba",
    isHome: false,
    home: { name: "Abia Warriors", tone: 2, shortName: "ABI" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-7",
    matchday: 7,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 04 Oct 2026",
    month: "Oct 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Barau", tone: 10, shortName: "BAR" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-8",
    matchday: 8,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 11 Oct 2026",
    month: "Oct 2026",
    venue: "Mobolaji Johnson Arena, Lagos",
    isHome: false,
    home: { name: "Sporting Lagos", tone: 11, shortName: "SPO" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-9",
    matchday: 9,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 18 Oct 2026",
    month: "Oct 2026",
    venue: "Nnamdi Azikiwe Stadium, Enugu",
    isHome: false,
    home: { name: "Rangers International", tone: 12, shortName: "RAG" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-10",
    matchday: 10,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 25 Oct 2026",
    month: "Oct 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Rivers United", tone: 3, shortName: "RIV" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-11",
    matchday: 11,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 01 Nov 2026",
    month: "Nov 2026",
    venue: "Kwara State Stadium, Ilorin",
    isHome: false,
    home: { name: "Kwara United", tone: 13, shortName: "KWA" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-12",
    matchday: 12,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 08 Nov 2026",
    month: "Nov 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Niger Tornadoes", tone: 14, shortName: "NIG" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-13",
    matchday: 13,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 15 Nov 2026",
    month: "Nov 2026",
    venue: "Lekan Salami Stadium, Ibadan",
    isHome: false,
    home: { name: "Shooting Stars", tone: 15, shortName: "SHO" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-14",
    matchday: 14,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 22 Nov 2026",
    month: "Nov 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Doma United", tone: 16, shortName: "DOM" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-15",
    matchday: 15,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 29 Nov 2026",
    month: "Nov 2026",
    venue: "Mobolaji Johnson Arena, Lagos",
    isHome: false,
    home: { name: "Inter Lagos", tone: 17, shortName: "INT" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-16",
    matchday: 16,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 06 Dec 2026",
    month: "Dec 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Enyimba International", tone: 18, shortName: "ENY" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-17",
    matchday: 17,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 13 Dec 2026",
    month: "Dec 2026",
    venue: "Sani Abacha Stadium, Kano",
    isHome: false,
    home: { name: "Kano Pillars", tone: 19, shortName: "KAN" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-18",
    matchday: 18,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 20 Dec 2026",
    month: "Dec 2026",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Plateau United", tone: 20, shortName: "PLA" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-19",
    matchday: 19,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Wed 30 Dec 2026",
    month: "Dec 2026",
    venue: "Muhammadu Dikko Stadium, Katsina",
    isHome: false,
    home: { name: "Katsina United", tone: 21, shortName: "KAT" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-20",
    matchday: 20,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 10 Jan 2027",
    month: "Jan 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Katsina United", tone: 21, shortName: "KAT" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-21",
    matchday: 21,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 17 Jan 2027",
    month: "Jan 2027",
    venue: "Southern Delta University Stadium, Ozoro",
    isHome: false,
    home: { name: "Warri Wolves", tone: 4, shortName: "WAR" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-22",
    matchday: 22,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Wed 20 Jan 2027",
    month: "Jan 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Nasarawa United", tone: 6, shortName: "NAS" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-23",
    matchday: 23,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sat 24 Jan 2027",
    month: "Jan 2027",
    venue: "Dan Anyiam Stadium, Owerri",
    isHome: false,
    home: { name: "Kun Khalifat", tone: 7, shortName: "KUN" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-24",
    matchday: 24,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 31 Jan 2027",
    month: "Jan 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Ranchers Bees", tone: 8, shortName: "RAN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-25",
    matchday: 25,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Wed 10 Feb 2027",
    month: "Feb 2027",
    venue: "Mobolaji Johnson Arena, Lagos",
    isHome: false,
    home: { name: "Ikorodu City", tone: 9, shortName: "IKO" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-26",
    matchday: 26,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 14 Feb 2027",
    month: "Feb 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Abia Warriors", tone: 2, shortName: "ABI" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-27",
    matchday: 27,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 21 Feb 2027",
    month: "Feb 2027",
    venue: "Sani Abacha Stadium, Kano",
    isHome: false,
    home: { name: "Barau", tone: 10, shortName: "BAR" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-28",
    matchday: 28,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 28 Feb 2027",
    month: "Feb 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Sporting Lagos", tone: 11, shortName: "SPO" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-29",
    matchday: 29,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 07 Mar 2027",
    month: "Mar 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Rangers International", tone: 12, shortName: "RAG" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-30",
    matchday: 30,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 14 Mar 2027",
    month: "Mar 2027",
    venue: "Adokiye Amiesimaka Stadium, Port Harcourt",
    isHome: false,
    home: { name: "Rivers United", tone: 3, shortName: "RIV" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-31",
    matchday: 31,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 21 Mar 2027",
    month: "Mar 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Kwara United", tone: 13, shortName: "KWA" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-32",
    matchday: 32,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 28 Mar 2027",
    month: "Mar 2027",
    venue: "Bako Kontagora Stadium, Minna",
    isHome: false,
    home: { name: "Niger Tornadoes", tone: 14, shortName: "NIG" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-33",
    matchday: 33,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 04 Apr 2027",
    month: "Apr 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Shooting Stars", tone: 15, shortName: "SHO" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-34",
    matchday: 34,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sat 10 Apr 2027",
    month: "Apr 2027",
    venue: "Pantami Stadium, Gombe",
    isHome: false,
    home: { name: "Doma United", tone: 16, shortName: "DOM" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-35",
    matchday: 35,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 18 Apr 2027",
    month: "Apr 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Inter Lagos", tone: 17, shortName: "INT" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-36",
    matchday: 36,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 09 May 2027",
    month: "May 2027",
    venue: "Enyimba International Stadium, Aba",
    isHome: false,
    home: { name: "Enyimba International", tone: 18, shortName: "ENY" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
  },
  {
    id: "md-37",
    matchday: 37,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 16 May 2027",
    month: "May 2027",
    venue: "Samuel Ogbemudia Stadium, Benin City",
    isHome: true,
    home: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    away: { name: "Kano Pillars", tone: 19, shortName: "KAN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "Insurance TV / NPFL Live",
    ticketAvailable: true,
  },
  {
    id: "md-38",
    matchday: 38,
    competition: "NPFL 2026/27",
    competitionCode: "NPFL",
    date: "Sun 30 May 2027",
    month: "May 2027",
    venue: "Jos International Stadium, Jos",
    isHome: false,
    home: { name: "Plateau United", tone: 20, shortName: "PLA" },
    away: { name: "Bendel Insurance", tone: 0, shortName: "BEN" },
    kickoff: "16:00 WAT",
    status: "Upcoming",
    broadcast: "NPFL Live",
    ticketAvailable: false,
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
 * DETAILED TROPHY CABINET & HONOURS
 */
export type TrophyCabinetItem = {
  id: string;
  competition: string;
  category: "Continental" | "Regional" | "League" | "National Cup" | "Division" | "State";
  titles: number;
  winningYears: string[];
  description: string;
  heroStory: string;
  keyFinal?: {
    year: string;
    opponent: string;
    score: string;
    venue: string;
    summary: string;
  };
  honourLevel: string;
};

export const trophyCabinet: TrophyCabinetItem[] = [
  {
    id: "caf-cup",
    competition: "CAF Cup",
    category: "Continental",
    titles: 1,
    winningYears: ["1994"],
    description: "The peak of African continental glory. Bendel Insurance conquered the continent in 1994, lifting the prestigious CAF Cup in front of a thunderous Benin crowd.",
    heroStory: "Trailing 1–0 after the first leg against Primeiro de Maio of Angola in Luanda, Bendel Insurance produced a legendary comeback at the Samuel Ogbemudia Stadium in Benin City, storming to a 3–0 win (3–1 aggregate) to be crowned African champions.",
    keyFinal: {
      year: "1994",
      opponent: "Primeiro de Maio (Angola)",
      score: "3–1 agg (0–1 away, 3–0 home)",
      venue: "Samuel Ogbemudia Stadium, Benin City",
      summary: "A thrilling second-leg turnaround delivered the ultimate continental trophy to Edo State.",
    },
    honourLevel: "Continental Silverware",
  },
  {
    id: "wafu-cup",
    competition: "West African Club Championship (UFOA / WAFU Cup)",
    category: "Regional",
    titles: 3,
    winningYears: ["1993", "1994", "1995"],
    description: "An unprecedented three-year dominance across West Africa. Bendel Insurance achieved a historic hat-trick of UFOA titles.",
    heroStory: "Between 1993 and 1995, the Benin Arsenal swept aside the top clubs from Ghana, Côte d'Ivoire, Senegal, and Togo to establish unrivaled supremacy in West African football.",
    keyFinal: {
      year: "1995",
      opponent: "West African Champions",
      score: "3-in-a-Row Champions",
      venue: "West Africa",
      summary: "Became the first club in West African history to win three consecutive UFOA club titles.",
    },
    honourLevel: "Regional 3-Peat Dynasty",
  },
  {
    id: "npfl-league",
    competition: "Nigerian Premier Football League (NPFL)",
    category: "League",
    titles: 2,
    winningYears: ["1973", "1979"],
    description: "Top-tier Nigerian champions. Won the national league crown in 1973 just one year after foundation, followed by another triumphant title in 1979.",
    heroStory: "Under Pa Alabi Aisien's tactical brilliance and Dr. Samuel Ogbemudia's visionary support, Bendel Insurance became the standard-bearers of attacking football in Nigeria.",
    keyFinal: {
      year: "1979",
      opponent: "Nigerian First Division",
      score: "League Champions",
      venue: "National League",
      summary: "Topped the league table with a ruthless offensive record and iron-clad defense.",
    },
    honourLevel: "National Top Flight",
  },
  {
    id: "federation-cup",
    competition: "Nigerian FA Cup / Challenge Cup / Federation Cup",
    category: "National Cup",
    titles: 4,
    winningYears: ["1972", "1978", "1980", "2023"],
    description: "Nigeria's oldest and most prestigious cup competition. Won in the inaugural founding year (1972), followed by the legendary 1978 3–0 demolition and the historic 2023 victory in Asaba.",
    heroStory: "In 1978, Bendel Insurance thrashed Enugu Rangers 3–0 at the National Stadium in Lagos in one of Nigerian football's greatest finals. On June 21, 2023, after a 28-year wait, Imade Osarenkhoe scored to defeat Rangers 1–0 at Stephen Keshi Stadium in Asaba and claim the trophy once more.",
    keyFinal: {
      year: "2023",
      opponent: "Enugu Rangers",
      score: "1–0",
      venue: "Stephen Keshi Stadium, Asaba",
      summary: "Imade Osarenkhoe's first-half goal ended a 28-year major silverware drought.",
    },
    honourLevel: "National Cup Champions",
  },
  {
    id: "nnl-super-8",
    competition: "Nigeria National League (NNL) Super 8",
    category: "Division",
    titles: 1,
    winningYears: ["2022"],
    description: "The championship that launched the modern renaissance. Unbeaten NNL Super 8 champions in 2022 under Coach Monday Odigie.",
    heroStory: "Bendel Insurance dominated the 2021/22 Nigeria National League season, winning the Super 8 tournament in Asaba to secure promotion back to the NPFL where they immediately went 21 games unbeaten.",
    keyFinal: {
      year: "2022",
      opponent: "NNL Super 8 Playoff",
      score: "Super 8 Champions",
      venue: "Asaba / Edo",
      summary: "Clinched top honors and sealed an emotional return to top-flight football.",
    },
    honourLevel: "National Division Title",
  },
  {
    id: "edo-fa-cup",
    competition: "Edo State FA Cup",
    category: "State",
    titles: 10,
    winningYears: ["2018", "2019", "2021", "2022", "2023", "2024"],
    description: "The undisputed kings of Edo State football. Dominant record holders of the Edo State FA Cup with multiple consecutive titles.",
    heroStory: "Bendel Insurance have consistently dominated state competitions, representing Benin City with distinction on the road to the national Federation Cup.",
    keyFinal: {
      year: "2024",
      opponent: "Edo State Challengers",
      score: "Champions",
      venue: "Samuel Ogbemudia Stadium, Benin City",
      summary: "Successfully defended the Edo State FA Cup crown.",
    },
    honourLevel: "State Championship Record",
  },
];

/**
 * HISTORICAL MILESTONES & ERAS
 */
export type HistoryMilestone = {
  year: string;
  era: string;
  title: string;
  summary: string;
  details: string[];
  keyFigures: string[];
  badgeText?: string;
};

export const historyMilestones: HistoryMilestone[] = [
  {
    year: "1972",
    era: "The Genesis",
    title: "Founding of the Vipers & Maiden FA Cup",
    summary:
      "Established by military administrator Dr. Samuel Osaigbovo Ogbemudia as the sporting arm of Bendel Insurance Limited, the club was originally named the Vipers of Benin. Pa Alabi Aisien led them to win the Challenge Cup in their first year of existence.",
    details: [
      "Founded by Dr. Samuel Ogbemudia to inspire youth and foster sports excellence in the Midwest.",
      "Pioneer tactician Pa Alabi Aisien appointed as the club's inaugural head coach.",
      "Won the 1972 Challenge Cup in their debut season, defeating Mighty Jets in the final.",
      "Became founding members of the Nigerian Premier Football League.",
    ],
    keyFigures: ["Dr. Samuel Osaigbovo Ogbemudia", "Pa Alabi Aisien"],
    badgeText: "Club Founded",
  },
  {
    year: "1973–1980",
    era: "The First Golden Era",
    title: "League Supremacy & The 1978 Lagos Masterclass",
    summary:
      "A golden decade of dominance. Insurance won the National League in 1973 and 1979, and dismantled Enugu Rangers 3–0 in the 1978 FA Cup final in Lagos.",
    details: [
      "1973: Won the Nigerian Premier League title in only their second year of existence.",
      "1978: Produced one of Nigerian football's most celebrated cup final performances, crushing Enugu Rangers 3–0 at the National Stadium, Lagos.",
      "1979: Crowned champions of Nigeria for the second time with free-scoring attacking football.",
      "1980: Added their third Challenge Cup trophy to establish absolute national superiority.",
    ],
    keyFigures: ["Pa Alabi Aisien", "Felix Agbonifo", "Francis Monidafe", "George Omokaro"],
    badgeText: "2 Leagues · 3 Cups",
  },
  {
    year: "1993–1995",
    era: "Continental & West African Kings",
    title: "CAF Cup Triumph & WAFU 3-in-a-Row Dynasty",
    summary:
      "The 1990s marked the club's highest peak on the international stage, winning the 1994 CAF Cup and three consecutive West African Club Championships.",
    details: [
      "1993: Lifted the West African Club Championship (UFOA Cup) against the best clubs in the sub-region.",
      "1994: Reached the CAF Cup final, overturning a 1–0 first leg deficit to beat Primeiro de Maio 3–0 at the Samuel Ogbemudia Stadium.",
      "1994 & 1995: Defended the UFOA title back-to-back, completing an unprecedented 3-peat.",
      "Cemented Benin City as a recognized fortress in African club football.",
    ],
    keyFigures: ["Charles Ihimekpen", "Alabi Aisien", "Roland Ewere"],
    badgeText: "CAF Cup Champions",
  },
  {
    year: "2008–2021",
    era: "Trials & Rebuilding",
    title: "Perseverance in the NNL & The Support of Benin",
    summary:
      "Following relegation in 2008, the club faced difficult years in the second tier. Passionate Benin City supporters and structural reforms laid the groundwork for a resurgence.",
    details: [
      "2008: Suffered relegation after financial and administrative challenges.",
      "The loyal supporters never deserted the club, maintaining massive home crowds in Benin City.",
      "The Edo State Government under Governor Godwin Obaseki initiated deep sports infrastructure reform.",
      "The Samuel Ogbemudia Stadium underwent multi-billion naira modernization into a world-class facility.",
    ],
    keyFigures: ["Charles Ihimekpen", "Edo State Supporters Club"],
    badgeText: "Resilience",
  },
  {
    year: "2022–2023",
    era: "The Modern Renaissance",
    title: "NNL Championship, 21-Game Unbeaten Run & 2023 Federation Cup",
    summary:
      "Under Coach Monday Odigie, Bendel Insurance won the 2022 NNL Super 8, set a record 21-game unbeaten NPFL run in 2023, and lifted the Federation Cup in Asaba ending a 28-year wait.",
    details: [
      "2022: Crowned NNL Super 8 Champions with an unbeaten tournament campaign.",
      "2023: Stunned the NPFL upon return by going 21 matches unbeaten across the regular season.",
      "June 21, 2023: Imade Osarenkhoe's goal secured a 1–0 victory over Enugu Rangers in Asaba to win the Federation Cup.",
      "Qualified for the CAF Confederation Cup, returning the Benin Arsenal to the continental stage.",
    ],
    keyFigures: ["Monday Odigie", "Imade Osarenkhoe", "Amas Obasogie", "Hon. Amadin Desmond Enabulele"],
    badgeText: "Federation Cup 2023",
  },
  {
    year: "2026/27",
    era: "The Present Day",
    title: "The Benin Arsenal: Ambition at the Ogbemudia",
    summary:
      "Chaired by Jarret Tenebe with Technical Manager Kennedy Boboye, the club enters the 2026/27 campaign aiming to build on a fifth-place finish and challenge for major honours.",
    details: [
      "Head coach Greg Ikhenoba and Technical Manager Kennedy Boboye lead the first team squad.",
      "Edo State Sports Commission ensures elite facilities and robust youth academy structure.",
      "Samuel Ogbemudia Stadium ready to welcome back thousands of passionate supporters.",
      "Aiming for NPFL title contention and Federation Cup defense.",
    ],
    keyFigures: ["Jarret Tenebe", "Kennedy Boboye", "Greg Ikhenoba", "Hon. Amadin Desmond Enabulele"],
    badgeText: "2026/27 Campaign",
  },
];

/**
 * CLUB LEGENDS & ICONS
 */
export type ClubLegend = {
  name: string;
  role: string;
  period: string;
  achievements: string;
  summary: string;
};

export const clubLegends: ClubLegend[] = [
  {
    name: "Pa Alabi Aisien",
    role: "Pioneer Head Coach & Tactical Mastermind",
    period: "1972–1982",
    achievements: "1972 Challenge Cup, 1973 League, 1978 FA Cup, 1979 League, 1980 FA Cup",
    summary:
      "The legendary founding tactician who defined the flowing, fearless football philosophy of the Benin Arsenal and won 5 major national trophies.",
  },
  {
    name: "Dr. Samuel Osaigbovo Ogbemudia",
    role: "Club Founder & Visionary Statesman",
    period: "1972",
    achievements: "Founded Bendel Insurance FC & built the iconic stadium named in his honour",
    summary:
      "Military Governor of Mid-Western State whose passionate love for sports birthed one of Nigeria's greatest football institutions.",
  },
  {
    name: "Felix Agbonifo",
    role: "Captain & Defensive Stalwart",
    period: "1970s",
    achievements: "Led Insurance to the 1978 3–0 FA Cup triumph over Enugu Rangers",
    summary:
      "The inspirational captain who led the team during their first golden era, anchoring a legendary defensive unit.",
  },
  {
    name: "Charles Ihimekpen",
    role: "Former Captain & Current General Manager",
    period: "1990s–Present",
    achievements: "1994 CAF Cup Champion, 3x WAFU Champion, 2023 Federation Cup GM",
    summary:
      "A stalwart of the 1994 continental campaign who later transitioned to club administration, guiding the team back to national silverware in 2023.",
  },
  {
    name: "Monday Odigie",
    role: "Championship Coach",
    period: "2022–2024",
    achievements: "2022 NNL Super 8, 21-Game NPFL Unbeaten Run, 2023 Federation Cup",
    summary:
      "The tactician who masterminded the modern renaissance, transforming the Benin Arsenal into a defensive fortress and national cup champions.",
  },
  {
    name: "Imade Osarenkhoe",
    role: "Star Striker & 2023 Cup Final Hero",
    period: "2022–2024",
    achievements: "Match-winning goal in 2023 Federation Cup Final",
    summary:
      "The clinical center-forward whose heroic goal against Enugu Rangers in Asaba sealed the club's first major national trophy in 28 years.",
  },
];

/**
 * MATCHDAY TICKER
 */
export const tickerItems = [
  "NPFL 2026/27 begins August 28",
  "Insurance v Warri Wolves — Sunday, August 30 at Samuel Ogbemudia Stadium",
  "The Benin Arsenal return to the Ogbemudia",
  "Explore the Trophy Room — 11 Major Honours Won",
  "2023 Federation Cup champions",
  "1994 CAF Cup & 3x West African Champions",
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
    label: "Fixtures",
    href: "/fixtures",
  },
  {
    label: "History",
    href: "/history",
  },
  {
    label: "Trophy Room",
    href: "/history/trophies",
  },
  {
    label: "Blog",
    href: "/blog",
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
    href: "/fixtures",
  },
  {
    label: "History",
    href: "/history",
  },
  {
    label: "Trophy Room",
    href: "/history/trophies",
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
    label: "Help",
    href: "/help",
  },
];

/**
 * FOOTER
 */
export const footerColumns = [
  {
    title: "Club & Heritage",
    links: [
      {
        label: "Club overview",
        href: "/club",
      },
      {
        label: "Club history",
        href: "/history",
      },
      {
        label: "Trophy room",
        href: "/history/trophies",
      },
      {
        label: "The Ogbemudia Stadium",
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
    title: "Matches & Season",
    links: [
      {
        label: "Season fixtures",
        href: "/fixtures",
      },
      {
        label: "Results",
        href: "/matches/results",
      },
      {
        label: "NPFL league table",
        href: "/matches/table",
      },
      {
        label: "Match centre",
        href: "/matches/centre",
      },
    ],
  },

  {
    title: "Fans & Matchday",
    links: [
      {
        label: "Membership",
        href: "/membership",
      },
      {
        label: "Buy tickets",
        href: "/tickets",
      },
      {
        label: "Stadium guide",
        href: "/club/stadium",
      },
      {
        label: "Supporters clubs",
        href: "/fans/clubs",
      },
      {
        label: "Official store",
        href: "/store",
      },
    ],
  },

  {
    title: "Legal & Info",
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
