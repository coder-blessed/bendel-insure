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
