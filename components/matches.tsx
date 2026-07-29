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

function FixturePanel({ fixture, label }: { fixture: Fixture; label: string }) {
  const isResult = Boolean(fixture.score);

  return (
    <div className="flex flex-col border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm md:p-7">
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="eyebrow text-[10px] text-gold">{label}</span>
        <span className="eyebrow text-[10px] text-white/55">
          {fixture.date}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 flex-col items-center gap-3 text-center">
          <TeamBadge name={fixture.home.name} tone={fixture.home.tone} />
          <span className="headline text-sm text-white uppercase sm:text-base">
            {fixture.home.name}
          </span>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-1 px-2">
          <span className="headline text-3xl text-white tabular-nums sm:text-4xl">
            {isResult ? fixture.score : fixture.kickoff}
          </span>
          <span className="eyebrow text-[10px] text-gold">
            {isResult ? fixture.status : "Kick-off"}
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center gap-3 text-center">
          <TeamBadge name={fixture.away.name} tone={fixture.away.tone} />
          <span className="headline text-sm text-white uppercase sm:text-base">
            {fixture.away.name}
          </span>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4 text-center">
        <p className="eyebrow text-[10px] text-white/70">
          {fixture.competition}
        </p>
        <p className="mt-1.5 text-xs text-white/50">{fixture.venue}</p>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <Link
          href={isResult ? "/matches/results" : "/matches/centre"}
          className="eyebrow flex items-center justify-center gap-2 border border-white/25 px-4 py-3 text-[10px] text-white transition-colors hover:border-gold hover:text-gold"
        >
          {isResult ? "Match report" : "Match centre"}
        </Link>
        <Link
          href={isResult ? "/tv/highlights" : "/tickets"}
          className="eyebrow flex items-center justify-center gap-2 bg-gold px-4 py-3 text-[10px] text-brand-deep transition-colors hover:bg-white"
        >
          {isResult ? "Highlights" : "Buy tickets"}
        </Link>
      </div>
    </div>
  );
}

function LeagueTable() {
  return (
    <div className="border border-white/12 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="eyebrow text-[10px] text-gold">NPFL table</span>
        <Link
          href="/matches/table"
          className="eyebrow group inline-flex items-center gap-1.5 text-[10px] text-white/70 hover:text-white"
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
          <tr className="eyebrow text-[9px] text-white/45">
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
                className={`border-t border-white/8 text-sm ${
                  isClub ? "bg-brand/25 text-white" : "text-white/70"
                }`}
              >
                <td className="py-3 pl-2 tabular-nums">{row.position}</td>
                <td
                  className={`py-3 ${isClub ? "headline text-sm uppercase" : "font-medium"}`}
                >
                  {row.team}
                </td>
                <td className="py-3 text-right tabular-nums">{row.played}</td>
                <td className="py-3 text-right tabular-nums">
                  {row.goalDifference > 0
                    ? `+${row.goalDifference}`
                    : row.goalDifference}
                </td>
                <td className="headline py-3 pr-2 text-right text-base tabular-nums">
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
        className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-b border-white/12"
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
              className={`eyebrow relative pb-3 text-[11px] transition-colors ${
                selected ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
              {selected ? (
                <motion.span
                  layoutId="team-tab-underline"
                  className="absolute -bottom-px left-0 h-[3px] w-full bg-gold"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              ) : null}
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
          className="grid gap-5 lg:grid-cols-3"
        >
          <FixturePanel fixture={fixtures.last} label="Last match" />
          <FixturePanel fixture={fixtures.next} label="Next match" />
          <LeagueTable />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
