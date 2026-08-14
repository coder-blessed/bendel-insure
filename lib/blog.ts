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
export const posts: BlogPost[] = [

    {
  id: "p-007",
  slug: "bendel-insurance-begin-2026-27-campaign-against-warri-wolves",
  title: "Bendel Insurance FC Begin 2026/27 Campaign Against Warri Wolves In Benin",
  excerpt:
    "The Benin Arsenal will begin their 2026/27 NPFL campaign at home against Warri Wolves on Sunday, August 30, as Bendel Insurance prepare to welcome supporters back to Samuel Ogbemudia Stadium.",
  category: "Matchday",
  author: "Club Media",
  image: "/images/warri-wolves-matchday-1.jpg",
  tone: 0,
  status: "published",
  publishedAt: "2026-08-07",
  updatedAt: "2026-08-07",
  readMinutes: 5,
  body: `
Bendel Insurance Football Club will begin their 2026/27 Nigeria Premier Football League (NPFL) campaign at home against Warri Wolves on Sunday, August 30.

The opening-day fixture will see the Benin Arsenal return to Samuel Ogbemudia Stadium for what promises to be an exciting Niger Delta derby.

## Insurance begin at home

The NPFL management has confirmed Friday, August 28 as the official kick-off date for the 2026/27 season.

The announcement was made during the NPFL Annual General Meeting and draws ceremony held in Ibadan, Oyo State, on Friday, August 7, 2026.

Bendel Insurance were drawn at home against Warri Wolves for Matchday 1, giving the Benin Arsenal an immediate opportunity to start the new campaign in front of their supporters.

The fixture is scheduled for:

- **Match:** Bendel Insurance FC vs Warri Wolves
- **Competition:** Nigeria Premier Football League
- **Matchday:** 1
- **Date:** Sunday, August 30, 2026
- **Venue:** Samuel Ogbemudia Stadium, Benin City

## A Niger Delta derby to open the campaign

The meeting with Warri Wolves will give Insurance a challenging start to the new season.

After finishing fifth in the 2025/26 NPFL campaign, the Benin Arsenal will be looking to improve on that performance and compete strongly throughout the new season.

The opening fixture also carries additional significance for supporters, with Bendel Insurance having completed their three-match punishment that required the club to play behind closed doors.

Fans can therefore look forward to returning to Samuel Ogbemudia Stadium to support the team.

> The Benin Arsenal are ready to begin another NPFL campaign, and the first challenge comes against Warri Wolves in a Niger Delta derby.

## The first five fixtures

The draw has also revealed a demanding opening sequence for Bendel Insurance.

After the home fixture against Warri Wolves, the Benin Arsenal travel to Lafia for Matchday 2 against Nasarawa United.

The opening five fixtures are:

1. **Bendel Insurance vs Warri Wolves** — Home
2. **Nasarawa United vs Bendel Insurance** — Away
3. **Bendel Insurance vs Kun Khalifat** — Home
4. **Ranchers Bees vs Bendel Insurance** — Away
5. **Bendel Insurance vs Ikorodu City** — Home

The sequence gives Insurance three home fixtures from their first five matches and provides an early opportunity to build momentum.

## Enabulele commends NPFL management

Meanwhile, the Executive Chairman of the Edo State Sports Commission, Hon. Amadin Desmond Enabulele, has commended the leadership of the NPFL management under Hon. Otunba Gbenga Elegbeleye.

Enabulele praised the league management for what he described as visionary and pragmatic leadership, particularly the stability and consistency of the NPFL calendar.

He noted that the league has maintained a clear direction in recent seasons, with kick-offs and conclusions taking place according to schedule.

> "Our premier league has impressed tremendously in the operational standard and has been stable and consistent following the calendar for the past three seasons with a clear sense of direction."

## Looking ahead

Bendel Insurance finished fifth in the 2025/26 season and will be determined to surpass that position in the new campaign.

With the supporters returning to Samuel Ogbemudia Stadium and a home derby against Warri Wolves opening the season, the Benin Arsenal have an opportunity to make a strong statement from Matchday 1.

The 2026/27 campaign starts in Benin.
`,
},
  {
    id: "p-001",
    slug: "what-the-remo-stars-win-tells-us",
    title: "What the Remo Stars win tells us about our season",
    excerpt:
      "Three points, a clean sheet and the first real sign that the shape the coaching staff have drilled since pre-season is starting to hold under pressure.",
    category: "Analysis",
    author: "Efosa Aigbe",
    image: photo("what-the-remo-stars-win-tells-us"),
    tone: 0,
    status: "published",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    readMinutes: 6,
    body: `Sunday at the Ogbemudia was not the prettiest ninety minutes of the season. It may have been the most instructive.

## The shape finally held

For the first time since March, the midfield three stayed compact through a full half without the ball. That is not an accident. It is the product of six weeks of unglamorous work on the training ground, and it showed in one number above all others.

- **Zero** shots conceded from inside the box in the first half
- **68%** of duels won in the middle third
- **14** recoveries inside ten seconds of losing possession

> We have talked all season about being hard to play through. On Sunday we were hard to play through.

### Where it still breaks down

The second half told a different story. Once Remo pushed their full-backs high, the same midfield three found themselves defending a much wider pitch, and the recoveries dried up almost completely.

That is the trade-off with this system, and it is one the staff have accepted openly. You press high, you win the ball early, and you live with the space behind. Against a side with Remo's pace it nearly cost us.

---

The run-in gives us four home games in six. If the shape holds the way it held for forty-five minutes on Sunday, this is a team that can take something from all of them. If it does not, we will be having a very different conversation in September.`,
  },
  {
    id: "p-002",
    slug: "inside-the-edo-academy-pipeline",
    title: "Inside the Edo pipeline that keeps producing",
    excerpt:
      "Six graduates in one season is not luck. We spent a week at the academy to find out how a modestly funded setup keeps turning out first-team footballers.",
    category: "Academy",
    author: "Nkechi Obaseki",
    image: photo("inside-the-edo-academy-pipeline"),
    tone: 2,
    status: "published",
    publishedAt: "2026-07-28",
    updatedAt: "2026-07-30",
    readMinutes: 9,
    body: `The training pitch at the academy is not much to look at. The grass is patchy at one end, the floodlights only reach three quarters of the surface, and the nearest changing room is a walk away.

It has also produced six players who trained with the first team this season.

## Volume, then patience

The academy's head of coaching puts it simply: see everyone, then wait.

1. Open trials run in four Edo locations rather than one
2. Nobody is released before seventeen
3. Every graduate spends a season with the feeder side first

That third point is the one most clubs skip. It is also the one the staff here will not move on.

### The cost of patience

Waiting is expensive. Three of last year's intake were approached by academies with better facilities and quicker routes to a senior debut, and two of them left.

> You cannot promise a sixteen-year-old a debut. You can promise them they will be coached properly for three years. Some of them take it.

The ones who stay arrive in the first-team dressing room already knowing the shape, the standards and most of the staff. That is what six graduates in a season actually buys.`,
  },
  {
    id: "p-003",
    slug: "1979-in-their-own-words",
    title: "1979, in their own words",
    excerpt:
      "Forty-seven years on, the surviving members of the title-winning squad remember the season that took the Nigerian league trophy to Benin City.",
    category: "History",
    author: "Osaze Idahosa",
    image: photo("1979-in-their-own-words"),
    tone: 1,
    status: "published",
    publishedAt: "2026-07-19",
    updatedAt: "2026-07-19",
    readMinutes: 12,
    body: `They still meet, some of them, on the last Saturday of the month.

## Before the run

Nobody expected it. The squad had finished mid-table the season before and lost two of its most experienced defenders over the summer.

> We were not the best team in the country that year. We were the team that wanted it in April, and by then everyone else was tired.

### The turn

The change came in a run of five games across three weeks, all away from home, all won. By the time the side came back to Benin the city had decided the title was theirs.

- Kadiri Ikhana marshalling the middle
- A defence that conceded twice in eleven games
- A crowd that, by the final month, would not fit in the ground

---

The trophy has been back once since, in a different competition and a different century. Ask any of them whether they expect to see the league title again in their lifetime and you get the same answer: a shrug, then a smile, then *why not*.`,
  },
  {
    id: "p-004",
    slug: "the-crest-and-what-it-carries",
    title: "The crest, and everything it carries",
    excerpt:
      "From the Vipers of Benin to the Benin Arsenal. A short history of the badge, the two name changes, and the argument about the colours that never quite went away.",
    category: "Club",
    author: "Nkechi Obaseki",
    image: photo("the-crest-and-what-it-carries"),
    tone: 4,
    status: "published",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-12",
    readMinutes: 5,
    body: `Founded in 1972 as the *Vipers of Benin*, the club has worn four badges and answered to two nicknames.

## The first mark

The original crest was a simple roundel. No snake, despite the name — the viper arrived later, and left again within a decade.

### Green and gold

The colours have never seriously been in doubt, though the argument about *which* green recurs every few years with the reliability of a fixture list.

- 1972–1984: a darker, almost forest green
- 1984–2003: the brighter shade most supporters picture
- 2003–present: somewhere between the two, depending on the manufacturer

> Get the green wrong and you will hear about it. Get the gold wrong and there will be a march.

The current mark dates from the last redesign and keeps the elements that survived every previous one: the shield, the year, and the two colours nobody is allowed to touch.`,
  },
  {
    id: "p-005",
    slug: "notes-on-the-run-in",
    title: "Notes on the run-in",
    excerpt:
      "Ten games left, four points off the top, and a fixture list that is kinder than it looks. An early draft of where this season might actually land.",
    category: "Opinion",
    author: "Efosa Aigbe",
    image: photo("notes-on-the-run-in"),
    tone: 3,
    status: "draft",
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-08",
    readMinutes: 4,
    body: `Rough notes, not a finished piece. Publishing after the Rivers United game once we know more.

## The maths

Four points off the top with ten to play is not a gap, it is a rounding error. Two of the three sides above us still have to come to the Ogbemudia.

### What has to go right

1. The centre-back pairing stays fit
2. We take something from Port Harcourt
3. Somebody other than the forwards starts scoring

That third one is doing a lot of work. Our midfield has three goals between them all season, and every title run in this league has been carried at some point by a midfielder who suddenly could not stop scoring.

> Needs a stat here on midfield xG vs the top two — ask the analysis desk.`,
  },
  {
    id: "p-006",
    slug: "matchday-guide-rivers-united-away",
    title: "Matchday guide: Rivers United away",
    excerpt:
      "Travel, tickets, the away end at the Adokiye Amiesimaka, and everything else supporters making the trip to Port Harcourt need to know.",
    category: "Matchday",
    author: "Club Media",
    image: photo("matchday-guide-rivers-united-away"),
    tone: 5,
    status: "draft",
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-07",
    readMinutes: 3,
    body: `Everything you need for Saturday. Embargoed until the ticket allocation is confirmed.

## Tickets

Allocation is **1,800**, sold to members first from Monday morning. Any remaining tickets go on general sale Wednesday.

## Getting there

- Official coaches leave the Ogbemudia at 07:00
- Return departs forty-five minutes after the final whistle
- Coach travel is ₦6,500 return, tickets sold separately

### At the ground

The away end is behind the goal at the north end. Gates open two hours before kick-off.

> Confirm gate numbers with Rivers United before this goes live.`,
  },
];

/** Newest first. The public blog never shows drafts. */
export function getPublishedPosts(): BlogPost[] {
  return posts
    .filter((post) => post.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** Every post regardless of status, for the dashboard. Newest first. */
export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostById(id: string): BlogPost | undefined {
  return posts.find((post) => post.id === id);
}

/** Published posts sharing a category, excluding the one being read. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = getPublishedPosts().filter(
    (item) => item.id !== post.id && item.category === post.category,
  );
  const rest = getPublishedPosts().filter(
    (item) => item.id !== post.id && item.category !== post.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}


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
