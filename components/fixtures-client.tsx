"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { TeamBadge } from "@/components/brand";
import {
  ArrowRight,
  Calendar,
  Clock,
  Filter,
  HomeIcon,
  Info,
  MapPin,
  Search,
  Shield,
  Sparkles,
  Trophy,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import type { Fixture } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";
const EASE = [0.16, 1, 0.3, 1] as const;

type CompFilter = "ALL" | "NPFL" | "CUP";
type VenueFilter = "ALL" | "HOME" | "AWAY";

export function FixturesClient({ fixtures }: { fixtures: Fixture[] }) {
  const [compFilter, setCompFilter] = useState<CompFilter>("ALL");
  const [venueFilter, setVenueFilter] = useState<VenueFilter>("ALL");
  const [monthFilter, setMonthFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  // Extract distinct months
  const months = useMemo(() => {
    const set = new Set<string>();
    for (const f of fixtures) {
      if (f.month) set.add(f.month);
    }
    return Array.from(set);
  }, [fixtures]);

  // Filtered list
  const filteredFixtures = useMemo(() => {
    return fixtures.filter((item) => {
      // Competition filter
      if (compFilter === "NPFL" && item.competitionCode !== "NPFL") return false;
      if (compFilter === "CUP" && item.competitionCode !== "CUP") return false;

      // Venue filter
      if (venueFilter === "HOME" && !item.isHome) return false;
      if (venueFilter === "AWAY" && item.isHome) return false;

      // Month filter
      if (monthFilter !== "ALL" && item.month !== monthFilter) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const homeMatch = item.home.name.toLowerCase().includes(query);
        const awayMatch = item.away.name.toLowerCase().includes(query);
        const venueMatch = item.venue.toLowerCase().includes(query);
        const compMatch = item.competition.toLowerCase().includes(query);
        if (!homeMatch && !awayMatch && !venueMatch && !compMatch) return false;
      }

      return true;
    });
  }, [fixtures, compFilter, venueFilter, monthFilter, searchQuery]);

  const homeCount = fixtures.filter((f) => f.isHome).length;
  const awayCount = fixtures.filter((f) => !f.isHome).length;
  const npflCount = fixtures.filter((f) => f.competitionCode === "NPFL").length;
  const cupCount = fixtures.filter((f) => f.competitionCode === "CUP").length;

  return (
    <div className="py-8 md:py-12">
      {/* Spotlight Matchday 1 Card */}
      <section className={`${SHELL} -mt-12 relative z-10 mb-12`}>
        <Reveal>
          <div className="overflow-hidden rounded-card border-2 border-gold/40 bg-gradient-to-br from-brand-deep via-brand-dark to-black p-6 text-white shadow-2xl md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
                </span>
                <span className="eyebrow text-xs text-gold font-bold">
                  Next Official Fixture · Matchday 1
                </span>
              </div>
              <span className="eyebrow rounded-pill bg-gold/15 border border-gold/40 px-3 py-1 text-[10px] text-gold font-bold">
                NPFL 2026/27 Season Opener
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {/* Home Team */}
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4">
                <TeamBadge name="Bendel Insurance" tone={0} className="h-20 w-20 shrink-0" />
                <div>
                  <span className="eyebrow text-[10px] text-gold">Home Club</span>
                  <h2 className="headline text-2xl uppercase sm:text-3xl">Bendel Insurance</h2>
                  <p className="text-xs text-white/60">The Benin Arsenal</p>
                </div>
              </div>

              {/* VS & Time */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="headline text-3xl text-gold/80 sm:text-4xl">VS</span>
                <div className="mt-2 rounded-control bg-white/10 px-4 py-2 text-center backdrop-blur-sm border border-white/10">
                  <span className="headline block text-lg text-white font-mono">16:00 WAT</span>
                  <span className="eyebrow block text-[9px] text-white/70">Sun 30 Aug 2026</span>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center text-center sm:flex-row-reverse sm:text-right gap-4">
                <TeamBadge name="Warri Wolves" tone={1} className="h-20 w-20 shrink-0" />
                <div>
                  <span className="eyebrow text-[10px] text-steel">Away Club</span>
                  <h2 className="headline text-2xl uppercase sm:text-3xl">Warri Wolves</h2>
                  <p className="text-xs text-white/60">Niger Delta Derby</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>Samuel Ogbemudia Stadium, Benin City</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>Broadcast: Insurance TV / NPFL Live</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tickets"
                  className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-5 py-2.5 text-xs text-brand-deep font-bold transition-all duration-300 hover:bg-white"
                >
                  <span>Get Matchday Tickets</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Fixtures Controls & Filter Bar */}
      <section className={SHELL}>
        <div className="rounded-card border border-ink/10 bg-smoke p-5 md:p-6 mb-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-steel" />
              <input
                type="text"
                placeholder="Search opponent (e.g. Warri Wolves, Rangers, Enyimba)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-pill border border-ink/15 bg-white pl-10 pr-4 py-2.5 text-xs text-ink placeholder:text-steel focus:border-brand focus:outline-none"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-steel hover:text-ink"
                >
                  Clear
                </button>
              ) : null}
            </div>

            {/* Competition Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setCompFilter("ALL")}
                className={`eyebrow rounded-pill px-4 py-2 text-[11px] font-bold transition-colors ${
                  compFilter === "ALL"
                    ? "bg-brand text-white shadow"
                    : "bg-white text-ink/70 border border-ink/15 hover:border-brand/40 hover:text-brand"
                }`}
              >
                All Competitions ({fixtures.length})
              </button>
              <button
                type="button"
                onClick={() => setCompFilter("NPFL")}
                className={`eyebrow rounded-pill px-4 py-2 text-[11px] font-bold transition-colors ${
                  compFilter === "NPFL"
                    ? "bg-brand text-white shadow"
                    : "bg-white text-ink/70 border border-ink/15 hover:border-brand/40 hover:text-brand"
                }`}
              >
                NPFL League ({npflCount})
              </button>
              <button
                type="button"
                onClick={() => setCompFilter("CUP")}
                className={`eyebrow rounded-pill px-4 py-2 text-[11px] font-bold transition-colors ${
                  compFilter === "CUP"
                    ? "bg-brand text-white shadow"
                    : "bg-white text-ink/70 border border-ink/15 hover:border-brand/40 hover:text-brand"
                }`}
              >
                Federation Cup ({cupCount})
              </button>
            </div>
          </div>

          {/* Sub Filters: Venue, Month, View */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 pt-4">
            {/* Venue Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-[10px] text-steel">Venue:</span>
              {(["ALL", "HOME", "AWAY"] as VenueFilter[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVenueFilter(v)}
                  className={`eyebrow rounded-pill px-3 py-1 text-[10px] transition-colors ${
                    venueFilter === v
                      ? "bg-brand-deep text-gold font-bold"
                      : "bg-white text-ink/70 border border-ink/10 hover:text-ink"
                  }`}
                >
                  {v === "ALL" ? "All Venues" : v === "HOME" ? `Home (${homeCount})` : `Away (${awayCount})`}
                </button>
              ))}
            </div>

            {/* Month Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-[10px] text-steel">Month:</span>
              <select
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
                className="rounded-pill border border-ink/15 bg-white px-3 py-1 text-xs text-ink focus:border-brand focus:outline-none"
              >
                <option value="ALL">All Months ({fixtures.length})</option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-white rounded-pill p-1 border border-ink/10">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`eyebrow rounded-pill px-3 py-1 text-[10px] transition-colors ${
                  viewMode === "list" ? "bg-brand text-white font-bold" : "text-steel hover:text-ink"
                }`}
              >
                List View
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`eyebrow rounded-pill px-3 py-1 text-[10px] transition-colors ${
                  viewMode === "grid" ? "bg-brand text-white font-bold" : "text-steel hover:text-ink"
                }`}
              >
                Grid View
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs text-steel">
            Showing <strong className="text-ink">{filteredFixtures.length}</strong> of{" "}
            <strong>{fixtures.length}</strong> total season fixtures
          </p>
          {filteredFixtures.length !== fixtures.length ? (
            <button
              type="button"
              onClick={() => {
                setCompFilter("ALL");
                setVenueFilter("ALL");
                setMonthFilter("ALL");
                setSearchQuery("");
              }}
              className="text-xs text-brand hover:underline font-semibold"
            >
              Reset all filters
            </button>
          ) : null}
        </div>

        {/* Empty State */}
        {filteredFixtures.length === 0 ? (
          <div className="rounded-card border border-dashed border-ink/20 bg-smoke p-12 text-center">
            <Info className="mx-auto h-8 w-8 text-steel mb-2" />
            <h3 className="headline text-xl text-ink uppercase">No fixtures found</h3>
            <p className="mt-1 text-sm text-steel">
              No matches match your current filter selection. Try adjusting your search query or filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setCompFilter("ALL");
                setVenueFilter("ALL");
                setMonthFilter("ALL");
                setSearchQuery("");
              }}
              className="eyebrow mt-4 inline-flex items-center rounded-pill bg-brand px-5 py-2.5 text-xs text-white"
            >
              Show all fixtures
            </button>
          </div>
        ) : null}

        {/* List View Mode */}
        {viewMode === "list" && filteredFixtures.length > 0 ? (
          <div className="space-y-4">
            {filteredFixtures.map((fixture) => (
              <div
                key={fixture.id || fixture.date + fixture.home.name}
                className="group flex flex-col justify-between rounded-card border border-ink/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-md lg:flex-row lg:items-center gap-5"
              >
                {/* Match Info & Date */}
                <div className="flex items-start gap-4 lg:w-64">
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-control bg-smoke text-center border border-ink/10">
                    <span className="headline text-sm text-brand font-bold">
                      {fixture.matchday ? `MD ${fixture.matchday}` : "CUP"}
                    </span>
                    <span className="text-[9px] text-steel font-mono">{fixture.month?.split(" ")[0]}</span>
                  </div>
                  <div>
                    <span className="eyebrow block text-[10px] text-brand font-bold">
                      {fixture.competition}
                    </span>
                    <p className="text-sm font-semibold text-ink">{fixture.date}</p>
                    <p className="text-xs text-steel flex items-center gap-1 mt-0.5">
                      <Clock className="h-3 w-3" />
                      <span>{fixture.kickoff}</span>
                    </p>
                  </div>
                </div>

                {/* Teams Clashes */}
                <div className="flex flex-1 items-center justify-between gap-4 max-w-xl">
                  {/* Home Team */}
                  <div className="flex flex-1 items-center gap-3">
                    <TeamBadge name={fixture.home.name} tone={fixture.home.tone} className="h-10 w-10 shrink-0" />
                    <span className={`text-sm leading-tight ${fixture.home.name.includes("Insurance") ? "font-bold text-brand-dark" : "font-medium text-ink"}`}>
                      {fixture.home.name}
                    </span>
                  </div>

                  {/* VS / Score */}
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="headline rounded-control bg-smoke px-3 py-1 text-sm font-bold text-ink border border-ink/10">
                      {fixture.score ? fixture.score : "VS"}
                    </span>
                    {fixture.isHome ? (
                      <span className="eyebrow mt-1 text-[8px] text-brand font-bold uppercase">
                        Home Match
                      </span>
                    ) : (
                      <span className="eyebrow mt-1 text-[8px] text-steel uppercase">
                        Away Match
                      </span>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-1 items-center justify-end gap-3 text-right">
                    <span className={`text-sm leading-tight ${fixture.away.name.includes("Insurance") ? "font-bold text-brand-dark" : "font-medium text-ink"}`}>
                      {fixture.away.name}
                    </span>
                    <TeamBadge name={fixture.away.name} tone={fixture.away.tone} className="h-10 w-10 shrink-0" />
                  </div>
                </div>

                {/* Venue & Action Button */}
                <div className="flex flex-col items-start lg:items-end justify-between gap-2 border-t border-ink/8 pt-3 lg:border-t-0 lg:pt-0 lg:w-56">
                  <div className="text-left lg:text-right text-xs text-steel flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                    <span className="truncate">{fixture.venue.split(",")[0]}</span>
                  </div>
                  {fixture.ticketAvailable ? (
                    <Link
                      href="/tickets"
                      className="eyebrow inline-flex items-center gap-1.5 rounded-pill bg-gold px-4 py-2 text-[10px] text-brand-deep font-bold transition-colors hover:bg-brand-deep hover:text-gold"
                    >
                      <span>Buy Tickets</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <Link
                      href="/matches/centre"
                      className="eyebrow inline-flex items-center gap-1.5 rounded-pill border border-ink/15 bg-white px-3.5 py-1.5 text-[10px] text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      <span>Match Centre</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Grid View Mode */}
        {viewMode === "grid" && filteredFixtures.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFixtures.map((fixture) => (
              <div
                key={fixture.id || fixture.date + fixture.home.name}
                className="group flex flex-col justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-ink/8 pb-3">
                    <span className="eyebrow rounded-pill bg-smoke px-2.5 py-0.5 text-[9px] text-brand font-bold">
                      {fixture.matchday ? `Matchday ${fixture.matchday}` : fixture.competition}
                    </span>
                    <span className="text-xs font-semibold text-steel">
                      {fixture.date}
                    </span>
                  </div>

                  {/* Teams vs */}
                  <div className="mt-6 flex items-center justify-between gap-2">
                    <div className="flex flex-1 flex-col items-center text-center gap-2">
                      <TeamBadge name={fixture.home.name} tone={fixture.home.tone} className="h-12 w-12" />
                      <span className={`text-xs leading-tight ${fixture.home.name.includes("Insurance") ? "font-bold text-brand-dark" : "font-semibold text-ink"}`}>
                        {fixture.home.name}
                      </span>
                    </div>

                    <div className="flex shrink-0 flex-col items-center">
                      <span className="headline rounded-control bg-smoke px-2.5 py-1 text-xs font-bold text-ink">
                        {fixture.score ? fixture.score : "VS"}
                      </span>
                      <span className="text-[10px] text-steel font-mono mt-1">
                        {fixture.kickoff}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col items-center text-center gap-2">
                      <TeamBadge name={fixture.away.name} tone={fixture.away.tone} className="h-12 w-12" />
                      <span className={`text-xs leading-tight ${fixture.away.name.includes("Insurance") ? "font-bold text-brand-dark" : "font-semibold text-ink"}`}>
                        {fixture.away.name}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 text-center border-t border-ink/8 pt-3">
                    <p className="text-xs font-semibold text-brand">
                      {fixture.competition}
                    </p>
                    <p className="mt-0.5 text-xs text-steel flex items-center justify-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{fixture.venue}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3">
                  {fixture.ticketAvailable ? (
                    <Link
                      href="/tickets"
                      className="eyebrow block w-full rounded-pill bg-gold py-2.5 text-center text-[10px] text-brand-deep font-bold transition-colors hover:bg-brand-deep hover:text-gold"
                    >
                      Buy Tickets
                    </Link>
                  ) : (
                    <Link
                      href="/matches/centre"
                      className="eyebrow block w-full rounded-pill border border-ink/15 bg-smoke py-2 text-center text-[10px] text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      Match Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}
