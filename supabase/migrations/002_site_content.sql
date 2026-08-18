-- Run this in Supabase Dashboard → SQL Editor
-- Creates tables for managing homepage Hero slides and dynamic site settings / images

create table if not exists public.hero_slides (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  eyebrow     text not null default 'Featured',
  title       text not null,
  excerpt     text not null default '',
  image       text not null,
  cta         text not null default 'Read more',
  duration    text not null default '',
  tone        integer not null default 0,
  sort_order  integer not null default 0,
  is_active   boolean not null default true,
  created_at  timestamptz not null default now()
);

create table if not exists public.site_settings (
  key         text primary key,
  value       jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

-- Enable RLS
alter table public.hero_slides enable row level security;
alter table public.site_settings enable row level security;

-- Public read access
create policy "Active hero slides are publicly readable"
  on public.hero_slides for select
  using (is_active = true);

create policy "Site settings are publicly readable"
  on public.site_settings for select
  using (true);

-- Authenticated admin access (full CRUD)
create policy "Authenticated admins full access to hero_slides"
  on public.hero_slides for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated admins full access to site_settings"
  on public.site_settings for all
  to authenticated
  using (true)
  with check (true);

-- Seed default Hero Slides
insert into public.hero_slides (slug, eyebrow, title, excerpt, image, cta, duration, tone, sort_order) values
(
  'all-the-goals-federation-cup',
  'All The Goals',
  'Every goal on the road to Asaba',
  'Relive all eleven goals from the Federation Cup run that ended with the trophy coming home to Benin City.',
  'https://picsum.photos/seed/all-the-goals-federation-cup/1200/800',
  'Watch now',
  '12m 04s',
  0, 1
),
(
  'back-home-at-the-ogbemudia',
  'Matchday',
  'Back home at the Ogbemudia',
  'The Benin Arsenal return to their own turf on Sunday. Everything you need before kick-off.',
  'Match preview',
  '4m 38s',
  'https://picsum.photos/seed/back-home-at-the-ogbemudia/1200/800',
  1, 2
),
(
  'six-academy-graduates',
  'Academy',
  'Six graduates, one first-team squad',
  'Inside the Edo pipeline that has pushed half a dozen teenagers into senior training this season.',
  'Read the feature',
  '7m 12s',
  'https://picsum.photos/seed/six-academy-graduates/1200/800',
  2, 3
)
on conflict (slug) do nothing;
