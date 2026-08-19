-- Run this in Supabase Dashboard → SQL Editor
-- Creates the posts table and seeds it with the existing sample data

create table if not exists public.posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  title       text not null,
  excerpt     text not null default '',
  body        text not null default '',
  category    text not null default 'Club',
  author      text not null default '',
  image       text not null default '',
  tone        integer not null default 0,
  status      text not null default 'draft' check (status in ('draft', 'published')),
  published_at date not null default current_date,
  updated_at  timestamptz not null default now(),
  read_minutes integer not null default 3
);

-- RLS: only authenticated users can write; anyone can read published posts
alter table public.posts enable row level security;

create policy "Published posts are publicly readable"
  on public.posts for select
  using (status = 'published');

create policy "Authenticated users can read all posts"
  on public.posts for select
  to authenticated
  using (true);

create policy "Authenticated users can insert posts"
  on public.posts for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update posts"
  on public.posts for update
  to authenticated
  using (true);

create policy "Authenticated users can delete posts"
  on public.posts for delete
  to authenticated
  using (true);

-- Seed the sample posts
insert into public.posts (slug, title, excerpt, body, category, author, image, tone, status, published_at, read_minutes) values
(
  'tenebe-vows-to-reposition-bendel-insurance-for-global-success',
  '2026/27: Bendel Insurance FC boss Tenebe Vows to Reposition Club for Global Success',
  'Chairman Emperor Jarrett Tenebe meets with international brand strategist Dr Drew Uyi in London, unveiling a bold roadmap for player branding, global exposure and commercialization ahead of the 2026/27 NPFL season.',
  E'As part of preparations for the 2026/2027 Nigeria Professional Football League season, the Chairman of Bendel Insurance Football Club, Emperor Jarrett Tenebe has vowed to explore all necessary avenues and pull resources together to help reposition the Edo state owned football club to an international standard.\n\nThe Benin Arsenals chairman gave the assurance when he held a strategic meeting in London with Dr Drew Uyi, a FIFA-licensed football agent and international brand strategist.\n\n## Strategic London Summit\n\nThe meeting focused on innovative strategies to reposition the historic Benin-based club for greater success on and off the pitch.\n\nTenebe, who doubles as chairman of the All Progressives Congress in Edo State, and Uyi, founder and CEO of DD Eleven Group, met on how to explore possible ways of strengthening Bendel Insurance’s global profile through:\n\n- **Modern Player Branding:** Elevating individual player profiles to international commercial standards.\n- **International Marketing:** Expanding the club''s reach across global football networks.\n- **Talent Exposure & Scouting:** Creating structured pathways for European and international scout visibility.\n- **Commercialization:** Driving sustainable revenue streams and multinational sponsorships.\n\n## Elevating Marketability & Digital Footprint\n\nThe discussions also centred on initiatives aimed at improving the international marketability of the club’s players while reinforcing Bendel Insurance’s reputation as one of Nigeria’s premier football clubs.\n\nOne of the key proposals was the introduction of a structured **player-branding programme** designed to equip players with professional images, stronger digital profiles and increased media visibility to attract international opportunities, sponsorships, and scouting.\n\n> "Modern football requires more than talent alone. Strategic branding is increasingly important in enhancing players'' market value and creating opportunities on the global stage."\n> — **Dr Drew Uyi**, *FIFA-licensed agent and brand strategist*\n\n## Commitment to Innovation and Global Growth\n\nTenebe reaffirmed his commitment to building a stronger and more competitive Bendel Insurance, stressing the need for innovation, professionalism and strategic partnerships in driving the club’s growth.\n\nThe football enthusiast and devoted Arsenal supporter Drew Uyi noted that such partnerships would be important to ensuring that the club develops both competitively and commercially.\n\nUyi expressed his readiness to support the club’s vision by leveraging his international football network and expertise in player branding and global sports marketing.\n\n## A New Era for the Benin Arsenal\n\nThe London meeting marks the beginning of a proposed collaboration aimed at elevating Bendel Insurance’s international profile, empowering its players and laying the foundation for a successful 2026/2027 season.\n\nWith preparations already underway, the Bendel Insurance FC boss said that management of the club remained committed to innovation, excellence and sustainable growth.',
  'Club', 'Club Media',
  'https://picsum.photos/seed/tenebe-vows-to-reposition-bendel-insurance-for-global-success/1200/800',
  1, 'published', '2026-08-19', 5
),
(
  'bendel-insurance-begin-2026-27-campaign-against-warri-wolves',
  'Bendel Insurance FC Begin 2026/27 Campaign Against Warri Wolves In Benin',
  'The Benin Arsenal will begin their 2026/27 NPFL campaign at home against Warri Wolves on Sunday, August 30, as Bendel Insurance prepare to welcome supporters back to Samuel Ogbemudia Stadium.',
  E'Bendel Insurance Football Club will begin their 2026/27 Nigeria Premier Football League (NPFL) campaign at home against Warri Wolves on Sunday, August 30.\n\nThe opening-day fixture will see the Benin Arsenal return to Samuel Ogbemudia Stadium for what promises to be an exciting Niger Delta derby.\n\n## Insurance begin at home\n\nThe NPFL management has confirmed Friday, August 28 as the official kick-off date for the 2026/27 season.\n\nThe announcement was made during the NPFL Annual General Meeting and draws ceremony held in Ibadan, Oyo State, on Friday, August 7, 2026.\n\nBendel Insurance were drawn at home against Warri Wolves for Matchday 1, giving the Benin Arsenal an immediate opportunity to start the new campaign in front of their supporters.',
  'Matchday', 'Club Media',
  'https://picsum.photos/seed/bendel-insurance-begin-2026-27-campaign-against-warri-wolves/1200/800',
  0, 'published', '2026-08-07', 5
),
(
  'what-the-remo-stars-win-tells-us',
  'What the Remo Stars win tells us about our season',
  'Three points, a clean sheet and the first real sign that the shape the coaching staff have drilled since pre-season is starting to hold under pressure.',
  E'Sunday at the Ogbemudia was not the prettiest ninety minutes of the season. It may have been the most instructive.\n\n## The shape finally held\n\nFor the first time since March, the midfield three stayed compact through a full half without the ball.\n\n- **Zero** shots conceded from inside the box in the first half\n- **68%** of duels won in the middle third\n- **14** recoveries inside ten seconds of losing possession\n\n> We have talked all season about being hard to play through. On Sunday we were hard to play through.\n\n### Where it still breaks down\n\nThe second half told a different story. Once Remo pushed their full-backs high, the same midfield three found themselves defending a much wider pitch.\n\n---\n\nThe run-in gives us four home games in six.',
  'Analysis', 'Efosa Aigbe',
  'https://picsum.photos/seed/what-the-remo-stars-win-tells-us/1200/800',
  0, 'published', '2026-08-03', 6
),
(
  'inside-the-edo-academy-pipeline',
  'Inside the Edo pipeline that keeps producing',
  'Six graduates in one season is not luck. We spent a week at the academy to find out how a modestly funded setup keeps turning out first-team footballers.',
  E'The training pitch at the academy is not much to look at. The grass is patchy at one end, the floodlights only reach three quarters of the surface.\n\nIt has also produced six players who trained with the first team this season.\n\n## Volume, then patience\n\nThe academy''s head of coaching puts it simply: see everyone, then wait.\n\n1. Open trials run in four Edo locations rather than one\n2. Nobody is released before seventeen\n3. Every graduate spends a season with the feeder side first\n\n> You cannot promise a sixteen-year-old a debut. You can promise them they will be coached properly for three years.',
  'Academy', 'Nkechi Obaseki',
  'https://picsum.photos/seed/inside-the-edo-academy-pipeline/1200/800',
  2, 'published', '2026-07-28', 9
),
(
  '1979-in-their-own-words',
  '1979, in their own words',
  'Forty-seven years on, the surviving members of the title-winning squad remember the season that took the Nigerian league trophy to Benin City.',
  E'They still meet, some of them, on the last Saturday of the month.\n\n## Before the run\n\nNobody expected it. The squad had finished mid-table the season before.\n\n> We were not the best team in the country that year. We were the team that wanted it in April.\n\n### The turn\n\nThe change came in a run of five games across three weeks, all away from home, all won.\n\n- Kadiri Ikhana marshalling the middle\n- A defence that conceded twice in eleven games\n- A crowd that, by the final month, would not fit in the ground',
  'History', 'Osaze Idahosa',
  'https://picsum.photos/seed/1979-in-their-own-words/1200/800',
  1, 'published', '2026-07-19', 12
),
(
  'notes-on-the-run-in',
  'Notes on the run-in',
  'Ten games left, four points off the top, and a fixture list that is kinder than it looks.',
  E'Rough notes, not a finished piece.\n\n## The maths\n\nFour points off the top with ten to play is not a gap, it is a rounding error.\n\n### What has to go right\n\n1. The centre-back pairing stays fit\n2. We take something from Port Harcourt\n3. Somebody other than the forwards starts scoring',
  'Opinion', 'Efosa Aigbe',
  'https://picsum.photos/seed/notes-on-the-run-in/1200/800',
  3, 'draft', '2026-08-08', 4
);
