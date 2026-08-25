"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { TeamBadge } from "@/components/brand";
import {
  ArrowRight,
  Calendar,
  Clock,
  Info,
  MapPin,
  Search,
  Ticket,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import type { Fixture } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

type CompFilter = "ALL" | "NPFL" | "CUP";
type VenueFilter = "ALL" | "HOME" | "AWAY";
type ViewMode = "list" | "grid";

export function FixturesClient({
  fixtures,
}: {
  fixtures: Fixture[];
}) {
  const [compFilter, setCompFilter] = useState<CompFilter>("ALL");
  const [venueFilter, setVenueFilter] =
    useState<VenueFilter>("ALL");
  const [monthFilter, setMonthFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  /*
   * ------------------------------------------------------------
   * Derived data
   * ------------------------------------------------------------
   */

  const sortedFixtures = useMemo(() => {
    return [...fixtures].sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      return aDate.getTime() - bDate.getTime();
    });
  }, [fixtures]);

  const spotlightFixture = useMemo(() => {
    return (
      sortedFixtures.find(
        (fixture) =>
          fixture.status?.toLowerCase() === "upcoming",
      ) ?? sortedFixtures[0]
    );
  }, [sortedFixtures]);

  const months = useMemo(() => {
    const values = new Set<string>();

    for (const fixture of sortedFixtures) {
      if (fixture.month) {
        values.add(fixture.month);
      }
    }

    return Array.from(values);
  }, [sortedFixtures]);

  const homeCount = useMemo(
    () => fixtures.filter((fixture) => fixture.isHome).length,
    [fixtures],
  );

  const awayCount = useMemo(
    () => fixtures.filter((fixture) => !fixture.isHome).length,
    [fixtures],
  );

  const npflCount = useMemo(
    () =>
      fixtures.filter(
        (fixture) => fixture.competitionCode === "NPFL",
      ).length,
    [fixtures],
  );

  const cupCount = useMemo(
    () =>
      fixtures.filter(
        (fixture) => fixture.competitionCode === "CUP",
      ).length,
    [fixtures],
  );

  /*
   * ------------------------------------------------------------
   * Filtering
   * ------------------------------------------------------------
   */

  const filteredFixtures = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return sortedFixtures.filter((fixture) => {
      if (
        compFilter === "NPFL" &&
        fixture.competitionCode !== "NPFL"
      ) {
        return false;
      }

      if (
        compFilter === "CUP" &&
        fixture.competitionCode !== "CUP"
      ) {
        return false;
      }

      if (venueFilter === "HOME" && !fixture.isHome) {
        return false;
      }

      if (venueFilter === "AWAY" && fixture.isHome) {
        return false;
      }

      if (
        monthFilter !== "ALL" &&
        fixture.month !== monthFilter
      ) {
        return false;
      }

      if (query) {
        const searchable = [
          fixture.home.name,
          fixture.away.name,
          fixture.home.shortName,
          fixture.away.shortName,
          fixture.venue,
          fixture.competition,
          fixture.competitionCode,
          fixture.broadcast ?? "",
          fixture.date,
        ]
          .join(" ")
          .toLowerCase();

        if (!searchable.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [
    sortedFixtures,
    compFilter,
    venueFilter,
    monthFilter,
    searchQuery,
  ]);

  /*
   * ------------------------------------------------------------
   * Reset
   * ------------------------------------------------------------
   */

  function resetFilters() {
    setCompFilter("ALL");
    setVenueFilter("ALL");
    setMonthFilter("ALL");
    setSearchQuery("");
  }

  /*
   * ------------------------------------------------------------
   * Spotlight
   * ------------------------------------------------------------
   */

  if (!spotlightFixture) {
    return (
      <section className="py-16">
        <div className={SHELL}>
          <div className="rounded-card border border-dashed border-ink/20 bg-smoke p-12 text-center">
            <Info className="mx-auto mb-3 h-8 w-8 text-steel" />

            <h2 className="headline text-2xl uppercase text-ink">
              No Fixtures Available
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm text-steel">
              The fixture schedule is currently empty. Please check
              back when the club publishes its next schedule.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="py-8 md:py-12">
      {/* ========================================================
          SPOTLIGHT FIXTURE
      ========================================================= */}
      <section className={`${SHELL} relative z-10 -mt-12 mb-12`}>
        <Reveal>
          <div className="overflow-hidden rounded-card border-2 border-gold/40 bg-gradient-to-br from-brand-deep via-brand-dark to-black text-white shadow-2xl">
            {/* Header */}
            <div className="border-b border-white/10 px-6 py-5 md:px-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
                  </span>

                  <span className="eyebrow text-xs font-bold text-gold">
                    Next Official Fixture
                  </span>
                </div>

                <span className="eyebrow rounded-pill border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold text-gold">
                  {spotlightFixture.competition}
                </span>
              </div>
            </div>

            {/* Teams */}
            <div className="px-6 py-7 md:px-8 md:py-9">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                {/* Home */}
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <TeamBadge
                    name={spotlightFixture.home.name}
                    tone={spotlightFixture.home.tone}
                    className="h-20 w-20 shrink-0"
                  />

                  <div>
                    <span className="eyebrow text-[10px] font-bold text-gold">
                      Home Club
                    </span>

                    <h2 className="headline mt-1 text-2xl uppercase sm:text-3xl">
                      {spotlightFixture.home.name}
                    </h2>

                    {spotlightFixture.home.shortName && (
                      <p className="text-xs text-white/50">
                        {spotlightFixture.home.shortName}
                      </p>
                    )}
                  </div>
                </div>

                {/* VS */}
                <div className="flex flex-col items-center justify-center">
                  <span className="headline text-3xl text-gold/80 sm:text-4xl">
                    VS
                  </span>

                  <div className="mt-3 rounded-control border border-white/10 bg-white/10 px-5 py-3 text-center backdrop-blur-sm">
                    <span className="headline block font-mono text-lg text-white">
                      {spotlightFixture.kickoff}
                    </span>

                    <span className="eyebrow mt-1 block text-[9px] text-white/70">
                      {spotlightFixture.date}
                    </span>
                  </div>
                </div>

                {/* Away */}
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row-reverse sm:text-right">
                  <TeamBadge
                    name={spotlightFixture.away.name}
                    tone={spotlightFixture.away.tone}
                    className="h-20 w-20 shrink-0"
                  />

                  <div>
                    <span className="eyebrow text-[10px] font-bold text-white/50">
                      Away Club
                    </span>

                    <h2 className="headline mt-1 text-2xl uppercase sm:text-3xl">
                      {spotlightFixture.away.name}
                    </h2>

                    {spotlightFixture.away.shortName && (
                      <p className="text-xs text-white/50">
                        {spotlightFixture.away.shortName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Match information */}
            <div className="border-t border-white/10 px-6 py-5 md:px-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-3 text-xs text-white/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 shrink-0 text-gold" />
                    <span>{spotlightFixture.venue}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 shrink-0 text-gold" />
                    <span>
                      {spotlightFixture.broadcast ||
                        "Broadcast information to be announced"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {spotlightFixture.ticketAvailable ? (
                    <Link
                      href="/tickets"
                      className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-5 py-2.5 text-xs font-bold text-brand-deep transition-all duration-300 hover:bg-white"
                    >
                      <Ticket className="h-3.5 w-3.5" />
                      <span>Get Matchday Tickets</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <Link
                      href="/matches/centre"
                      className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-brand-deep"
                    >
                      <span>Match Centre</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ========================================================
          CONTROLS
      ========================================================= */}
      <section className={SHELL}>
        <div className="mb-8 rounded-card border border-ink/10 bg-smoke p-5 md:p-6">
          {/* Top controls */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search opponent, stadium, competition..."
                aria-label="Search fixtures"
                className="w-full rounded-pill border border-ink/15 bg-white py-2.5 pl-10 pr-20 text-xs text-ink outline-none transition-colors placeholder:text-steel focus:border-brand"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-steel transition-colors hover:text-brand"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Competition */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                {
                  value: "ALL" as const,
                  label: `All (${fixtures.length})`,
                },
                {
                  value: "NPFL" as const,
                  label: `NPFL (${npflCount})`,
                },
                {
                  value: "CUP" as const,
                  label: `Cup (${cupCount})`,
                },
              ].map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() =>
                    setCompFilter(filter.value)
                  }
                  className={`eyebrow rounded-pill px-4 py-2 text-[10px] font-bold transition-all ${
                    compFilter === filter.value
                      ? "bg-brand text-white shadow-sm"
                      : "border border-ink/15 bg-white text-ink/65 hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary controls */}
          <div className="mt-5 flex flex-col gap-4 border-t border-ink/10 pt-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Venue */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-[10px] text-steel">
                Venue
              </span>

              {(
                ["ALL", "HOME", "AWAY"] as VenueFilter[]
              ).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setVenueFilter(value)
                  }
                  className={`eyebrow rounded-pill px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                    venueFilter === value
                      ? "bg-brand-deep text-gold"
                      : "border border-ink/10 bg-white text-ink/65 hover:text-brand"
                  }`}
                >
                  {value === "ALL"
                    ? "All"
                    : value === "HOME"
                      ? `Home (${homeCount})`
                      : `Away (${awayCount})`}
                </button>
              ))}
            </div>

            {/* Month */}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand" />

              <label
                htmlFor="fixture-month"
                className="eyebrow text-[10px] text-steel"
              >
                Month
              </label>

              <select
                id="fixture-month"
                value={monthFilter}
                onChange={(event) =>
                  setMonthFilter(event.target.value)
                }
                className="rounded-pill border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink outline-none focus:border-brand"
              >
                <option value="ALL">
                  All Months
                </option>

                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            {/* View */}
            <div className="flex items-center gap-1 rounded-pill border border-ink/10 bg-white p-1">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`eyebrow rounded-pill px-4 py-1.5 text-[10px] font-bold transition-colors ${
                  viewMode === "list"
                    ? "bg-brand text-white"
                    : "text-steel hover:text-ink"
                }`}
              >
                List
              </button>

              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`eyebrow rounded-pill px-4 py-1.5 text-[10px] font-bold transition-colors ${
                  viewMode === "grid"
                    ? "bg-brand text-white"
                    : "text-steel hover:text-ink"
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================
            RESULT SUMMARY
        ======================================================= */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel">
            Showing{" "}
            <strong className="text-ink">
              {filteredFixtures.length}
            </strong>{" "}
            of{" "}
            <strong className="text-ink">
              {fixtures.length}
            </strong>{" "}
            season fixtures
          </p>

          {filteredFixtures.length !== fixtures.length && (
            <button
              type="button"
              onClick={resetFilters}
              className="self-start text-xs font-semibold text-brand hover:underline sm:self-auto"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* ======================================================
            EMPTY STATE
        ======================================================= */}
        {filteredFixtures.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-card border border-dashed border-ink/20 bg-smoke p-12 text-center"
          >
            <Info className="mx-auto mb-3 h-9 w-9 text-steel" />

            <h3 className="headline text-xl uppercase text-ink">
              No Fixtures Found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-steel">
              No matches match your current search or filter
              selection. Try another opponent, month, venue or
              competition.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="eyebrow mt-5 inline-flex rounded-pill bg-brand px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Show All Fixtures
            </button>
          </motion.div>
        )}

        {/* ======================================================
            LIST VIEW
        ======================================================= */}
        {viewMode === "list" &&
          filteredFixtures.length > 0 && (
            <div className="space-y-4">
              {filteredFixtures.map((fixture, index) => (
                <motion.article
                  key={
                    fixture.id ??
                    `${fixture.date}-${fixture.home.name}-${fixture.away.name}`
                  }
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.025, 0.3),
                  }}
                  className="group overflow-hidden rounded-card border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:p-6">
                    {/* Date */}
                    <div className="flex shrink-0 items-center gap-4 lg:w-64">
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-control border border-ink/10 bg-smoke text-center">
                        <span className="headline text-sm font-bold text-brand">
                          {fixture.matchday
                            ? `MD ${fixture.matchday}`
                            : "CUP"}
                        </span>

                        <span className="font-mono text-[9px] text-steel">
                          {fixture.month?.split(" ")[0]}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <span className="eyebrow block text-[9px] font-bold text-brand">
                          {fixture.competition}
                        </span>

                        <p className="mt-0.5 text-sm font-semibold text-ink">
                          {fixture.date}
                        </p>

                        <p className="mt-0.5 flex items-center gap-1 text-xs text-steel">
                          <Clock className="h-3 w-3" />
                          {fixture.kickoff}
                        </p>
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="flex flex-1 items-center justify-between gap-4">
                      {/* Home */}
                      <div className="flex min-w-0 flex-1 items-center gap-3">
                        <TeamBadge
                          name={fixture.home.name}
                          tone={fixture.home.tone}
                          className="h-11 w-11 shrink-0"
                        />

                        <span
                          className={`text-sm leading-tight ${
                            fixture.home.name
                              .toLowerCase()
                              .includes("bendel insurance")
                              ? "font-bold text-brand-dark"
                              : "font-medium text-ink"
                          }`}
                        >
                          {fixture.home.name}
                        </span>
                      </div>

                      {/* VS */}
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="headline rounded-control border border-ink/10 bg-smoke px-3 py-1 text-sm font-bold text-ink">
                          {fixture.score ?? "VS"}
                        </span>

                        <span
                          className={`eyebrow mt-1 text-[8px] font-bold uppercase ${
                            fixture.isHome
                              ? "text-brand"
                              : "text-steel"
                          }`}
                        >
                          {fixture.isHome
                            ? "Home"
                            : "Away"}
                        </span>
                      </div>

                      {/* Away */}
                      <div className="flex min-w-0 flex-1 items-center justify-end gap-3 text-right">
                        <span
                          className={`text-sm leading-tight ${
                            fixture.away.name
                              .toLowerCase()
                              .includes("bendel insurance")
                              ? "font-bold text-brand-dark"
                              : "font-medium text-ink"
                          }`}
                        >
                          {fixture.away.name}
                        </span>

                        <TeamBadge
                          name={fixture.away.name}
                          tone={fixture.away.tone}
                          className="h-11 w-11 shrink-0"
                        />
                      </div>
                    </div>

                    {/* Venue + action */}
                    <div className="flex shrink-0 flex-col gap-2 border-t border-ink/10 pt-4 lg:w-60 lg:border-t-0 lg:pt-0 lg:text-right">
                      <div className="flex items-start gap-1.5 text-xs text-steel lg:justify-end">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />

                        <span>
                          {fixture.venue}
                        </span>
                      </div>

                      {fixture.ticketAvailable ? (
                        <Link
                          href="/tickets"
                          className="eyebrow inline-flex items-center justify-center gap-1.5 rounded-pill bg-gold px-4 py-2 text-[10px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-gold"
                        >
                          <Ticket className="h-3 w-3" />
                          <span>Buy Tickets</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ) : (
                        <Link
                          href="/matches/centre"
                          className="eyebrow inline-flex items-center justify-center gap-1.5 rounded-pill border border-ink/15 bg-white px-4 py-2 text-[10px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                        >
                          Match Centre
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

        {/* ======================================================
            GRID VIEW
        ======================================================= */}
        {viewMode === "grid" &&
          filteredFixtures.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFixtures.map((fixture, index) => (
                <motion.article
                  key={
                    fixture.id ??
                    `${fixture.date}-${fixture.home.name}-${fixture.away.name}`
                  }
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.025, 0.3),
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-5 py-4">
                    <span className="eyebrow rounded-pill bg-smoke px-3 py-1 text-[9px] font-bold text-brand">
                      {fixture.matchday
                        ? `Matchday ${fixture.matchday}`
                        : fixture.competition}
                    </span>

                    <span className="text-xs font-semibold text-steel">
                      {fixture.month}
                    </span>
                  </div>

                  {/* Match */}
                  <div className="flex-1 p-5">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-ink">
                        {fixture.date}
                      </p>

                      <p className="mt-1 flex items-center justify-center gap-1 text-xs text-steel">
                        <Clock className="h-3 w-3" />
                        {fixture.kickoff}
                      </p>
                    </div>

                    <div className="mt-7 flex items-center justify-between gap-2">
                      {/* Home */}
                      <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
                        <TeamBadge
                          name={fixture.home.name}
                          tone={fixture.home.tone}
                          className="h-14 w-14"
                        />

                        <span
                          className={`text-xs leading-tight ${
                            fixture.home.name
                              .toLowerCase()
                              .includes("bendel insurance")
                              ? "font-bold text-brand-dark"
                              : "font-semibold text-ink"
                          }`}
                        >
                          {fixture.home.name}
                        </span>
                      </div>

                      {/* Score */}
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="headline rounded-control border border-ink/10 bg-smoke px-3 py-1.5 text-sm font-bold text-ink">
                          {fixture.score ?? "VS"}
                        </span>

                        <span className="mt-1 text-[9px] font-bold uppercase text-steel">
                          {fixture.isHome
                            ? "Home"
                            : "Away"}
                        </span>
                      </div>

                      {/* Away */}
                      <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
                        <TeamBadge
                          name={fixture.away.name}
                          tone={fixture.away.tone}
                          className="h-14 w-14"
                        />

                        <span
                          className={`text-xs leading-tight ${
                            fixture.away.name
                              .toLowerCase()
                              .includes("bendel insurance")
                              ? "font-bold text-brand-dark"
                              : "font-semibold text-ink"
                          }`}
                        >
                          {fixture.away.name}
                        </span>
                      </div>
                    </div>

                    {/* Competition */}
                    <div className="mt-7 border-t border-ink/10 pt-4">
                      <p className="text-center text-xs font-bold text-brand">
                        {fixture.competition}
                      </p>

                      <div className="mt-2 flex items-start justify-center gap-1.5 text-center text-xs text-steel">
                        <MapPin className="mt-0.5 h-3 w-3 shrink-0" />

                        <span>
                          {fixture.venue}
                        </span>
                      </div>

                      {fixture.broadcast && (
                        <p className="mt-2 text-center text-[10px] text-steel">
                          Broadcast: {fixture.broadcast}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="border-t border-ink/10 p-5">
                    {fixture.ticketAvailable ? (
                      <Link
                        href="/tickets"
                        className="eyebrow flex w-full items-center justify-center gap-2 rounded-pill bg-gold py-2.5 text-[10px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-gold"
                      >
                        <Ticket className="h-3.5 w-3.5" />
                        Buy Matchday Tickets
                      </Link>
                    ) : (
                      <Link
                        href="/matches/centre"
                        className="eyebrow flex w-full items-center justify-center gap-2 rounded-pill border border-ink/15 bg-smoke py-2.5 text-[10px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                      >
                        Match Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
      </section>
    </div>
  );
}