"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { TeamBadge } from "@/components/brand";
import { ArrowRight } from "@/components/icons";
import {
  type Fixture,
  leagueTable,
  matches,
  type TeamKey,
  teamTabs,
} from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function TeamColumn({ team }: { team: Fixture["home"] }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-3 text-center">
      <TeamBadge name={team.name} tone={team.tone} />
      <span className="text-sm leading-tight font-semibold text-ink">
        {team.name}
      </span>
    </div>
  );
}

function FixtureCard({ fixture, label }: { fixture: Fixture; label: string }) {
  const isResult = Boolean(fixture.score);

  return (
    <div>
      <h3 className="headline mb-3 text-lg text-ink uppercase">{label}</h3>

      <div className="flex flex-col rounded-card bg-smoke p-5 md:p-6">
        <p className="mb-5 text-center text-sm font-semibold text-ink">
          {fixture.date}
        </p>

        <div className="flex items-start justify-between gap-2">
          <TeamColumn team={fixture.home} />

          <div className="flex shrink-0 flex-col items-center gap-1.5 pt-3">
            <span
              className={`headline rounded-control px-4 py-2 text-2xl tabular-nums sm:text-3xl ${
                isResult ? "bg-ink text-white" : "bg-white text-ink"
              }`}
            >
              {isResult ? fixture.score : fixture.kickoff}
            </span>
            {isResult ? (
              <span className="eyebrow text-[10px] text-steel">
                {fixture.status}
              </span>
            ) : (
              <span className="sr-only">Kick-off</span>
            )}
          </div>

          <TeamColumn team={fixture.away} />
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm font-semibold text-ink">
            {fixture.competition}
          </p>
          <p className="mt-1 text-xs text-steel">{fixture.venue}</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={isResult ? "/matches/results" : "/matches/centre"}
            className="eyebrow flex items-center justify-center rounded-pill bg-brand px-3 py-3 text-center text-[10px] text-white transition-colors hover:bg-brand-dark"
          >
            {isResult ? "Match report" : "Match centre"}
          </Link>
          <Link
            href={isResult ? "/tv/highlights" : "/tickets"}
            className="eyebrow flex items-center justify-center rounded-pill border border-ink/15 bg-white px-3 py-3 text-center text-[10px] text-ink transition-colors hover:border-brand/40 hover:text-brand"
          >
            {isResult ? "Highlights" : "Buy tickets"}
          </Link>
        </div>
      </div>
    </div>
  );
}

function LeagueTable() {
  return (
    <div className="rounded-card bg-smoke p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="headline text-lg text-ink uppercase">NPFL table</h3>
        <Link
          href="/matches/table"
          className="eyebrow group inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1.5 text-[10px] text-steel transition-colors hover:text-brand"
        >
          Full table
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <table className="w-full text-left">
        <caption className="sr-only">
          Nigeria Premier Football League standings, top six
        </caption>
        <thead>
          <tr className="eyebrow text-[9px] text-steel">
            <th scope="col" className="pb-3 font-medium">
              Pos
            </th>
            <th scope="col" className="pb-3 font-medium">
              Club
            </th>
            <th scope="col" className="pb-3 text-right font-medium">
              Pl
            </th>
            <th scope="col" className="pb-3 text-right font-medium">
              GD
            </th>
            <th scope="col" className="pb-3 text-right font-medium">
              Pts
            </th>
          </tr>
        </thead>
        <tbody>
          {leagueTable.map((row) => {
            const isClub = row.team === "Bendel Insurance";
            return (
              <tr
                key={row.team}
                className={`border-t border-ink/8 text-sm ${
                  isClub
                    ? "bg-brand/8 text-brand-dark [&>td:first-child]:rounded-l-control [&>td:last-child]:rounded-r-control"
                    : "text-ink/75"
                }`}
              >
                <td className="py-3 pl-3 tabular-nums">{row.position}</td>
                <td className={`py-3 ${isClub ? "font-bold" : "font-medium"}`}>
                  {row.team}
                </td>
                <td className="py-3 text-right tabular-nums">{row.played}</td>
                <td className="py-3 text-right tabular-nums">
                  {row.goalDifference > 0
                    ? `+${row.goalDifference}`
                    : row.goalDifference}
                </td>
                <td className="headline py-3 pr-3 text-right text-base tabular-nums">
                  {row.points}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function Matches() {
  const [team, setTeam] = useState<TeamKey>("first");
  const fixtures = matches[team];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Select a team"
        className="mb-8 inline-flex flex-wrap gap-1 rounded-pill bg-smoke p-1.5"
      >
        {teamTabs.map((tab) => {
          const selected = tab.key === team;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setTeam(tab.key)}
              className={`relative rounded-pill px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                selected ? "text-white" : "text-steel hover:text-ink"
              }`}
            >
              {selected ? (
                <motion.span
                  layoutId="team-tab-pill"
                  className="absolute inset-0 rounded-pill bg-ink"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              ) : null}
              <span className="relative">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={team}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FixtureCard fixture={fixtures.last} label="Last match" />
            <FixtureCard fixture={fixtures.next} label="Next match" />
            <FixtureCard fixture={fixtures.upcoming} label="Upcoming match" />
          </div>

          <div className="mt-8">
            <LeagueTable />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
