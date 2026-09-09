# Bendel Insurance FC

The public supporter site and admin CMS for Bendel Insurance FC. This Next.js app talks to the separate Express API in `../bendel-backend` for authentication, profiles, orders, tickets, and admin operations.

## Getting Started

## Setup

1. Copy `.env.example` to `.env.local` and set the Supabase values. Set `NEXT_PUBLIC_API_BASE_URL` if the backend is not running on `http://localhost:4000/api`.
2. In `../bendel-backend`, copy `.env.example` to `.env`, configure `DATABASE_URL` and `JWT_SECRET`, and run its migrations.
3. Start the backend, then start this app:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
Supabase migrations are in `supabase/migrations`. Run them in order in the Supabase SQL editor before using the admin posts and settings screens.

