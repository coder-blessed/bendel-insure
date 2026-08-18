"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  HomeIcon,
  Medal,
  Shield,
  Sparkles,
  Trophy,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import type { TrophyCabinetItem } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";
const EASE = [0.16, 1, 0.3, 1] as const;

type FilterCategory = "ALL" | "Continental" | "Regional" | "League" | "National Cup" | "Division" | "State";

export function TrophyClient({ trophies }: { trophies: TrophyCabinetItem[] }) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("ALL");

  const categories: { key: FilterCategory; label: string; count: number }[] = [
    { key: "ALL", label: "All Honours", count: trophies.reduce((a, b) => a + b.titles, 0) },
    { key: "Continental", label: "CAF Cup", count: 1 },
    { key: "Regional", label: "WAFU (UFOA)", count: 3 },
    { key: "League", label: "Premier League", count: 2 },
    { key: "National Cup", label: "Federation Cup", count: 4 },
    { key: "Division", label: "NNL Super 8", count: 1 },
  ];

  const filteredTrophies =
    activeCategory === "ALL"
      ? trophies
      : trophies.filter((t) => t.category === activeCategory);

  return (
    <div>
      {/* Quick Stats Banner */}
      <section className={`${SHELL} -mt-8 relative z-10 mb-12`}>
        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <div className="rounded-card border border-gold/30 bg-brand-deep p-4 text-center text-white shadow-lg">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Trophy className="h-4 w-4" />
              </div>
              <span className="headline block text-3xl text-gold">1</span>
              <span className="eyebrow block mt-1 text-[9px] text-white/70">CAF Cup</span>
              <span className="text-[10px] text-gold/80 font-mono">1994</span>
            </div>

            <div className="rounded-card border border-gold/30 bg-brand-deep p-4 text-center text-white shadow-lg">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Medal className="h-4 w-4" />
              </div>
              <span className="headline block text-3xl text-gold">3</span>
              <span className="eyebrow block mt-1 text-[9px] text-white/70">WAFU Cups</span>
              <span className="text-[10px] text-gold/80 font-mono">1993, 1994, 1995</span>
            </div>

            <div className="rounded-card border border-gold/30 bg-brand-deep p-4 text-center text-white shadow-lg">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Shield className="h-4 w-4" />
              </div>
              <span className="headline block text-3xl text-gold">2</span>
              <span className="eyebrow block mt-1 text-[9px] text-white/70">NPFL Titles</span>
              <span className="text-[10px] text-gold/80 font-mono">1973, 1979</span>
            </div>

            <div className="rounded-card border border-gold/30 bg-brand-deep p-4 text-center text-white shadow-lg">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Trophy className="h-4 w-4" />
              </div>
              <span className="headline block text-3xl text-gold">4</span>
              <span className="eyebrow block mt-1 text-[9px] text-white/70">FA / Fed Cups</span>
              <span className="text-[10px] text-gold/80 font-mono">'72, '78, '80, '23</span>
            </div>

            <div className="rounded-card border border-gold/30 bg-brand-deep p-4 text-center text-white shadow-lg">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Medal className="h-4 w-4" />
              </div>
              <span className="headline block text-3xl text-gold">1</span>
              <span className="eyebrow block mt-1 text-[9px] text-white/70">NNL Title</span>
              <span className="text-[10px] text-gold/80 font-mono">2022</span>
            </div>

            <div className="rounded-card border border-gold/30 bg-brand-deep p-4 text-center text-white shadow-lg">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Shield className="h-4 w-4" />
              </div>
              <span className="headline block text-3xl text-gold">10+</span>
              <span className="eyebrow block mt-1 text-[9px] text-white/70">State FA Cups</span>
              <span className="text-[10px] text-gold/80 font-mono">Record</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Main Silverware Display Section */}
      <section className={`${SHELL} py-8 md:py-12`}>
        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`eyebrow relative rounded-pill px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-brand-deep text-gold shadow-md"
                    : "border border-ink/15 bg-white text-ink/70 hover:border-brand/40 hover:text-brand"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-[9px] font-mono ${
                    isSelected ? "bg-gold text-brand-deep" : "bg-smoke text-steel"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Silverware Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {filteredTrophies.map((trophy, idx) => (
              <div
                key={trophy.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-card border-2 border-gold/30 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-xl md:p-8"
              >
                {/* Gold gradient accent on top */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-gold via-brand to-gold"
                />

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/30 to-brand-deep/10 text-gold shadow-inner border border-gold/40">
                        <Trophy className="h-7 w-7 text-gold drop-shadow" />
                      </div>
                      <div>
                        <span className="eyebrow rounded-pill bg-brand/10 px-3 py-1 text-[10px] text-brand-dark font-bold">
                          {trophy.category} · {trophy.honourLevel}
                        </span>
                        <h2 className="headline mt-2 text-2xl text-ink uppercase sm:text-3xl">
                          {trophy.competition}
                        </h2>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col items-center rounded-card bg-brand-deep px-4 py-2 text-center text-white border border-gold/40">
                      <span className="headline text-2xl text-gold font-bold sm:text-3xl">
                        {trophy.titles}
                      </span>
                      <span className="eyebrow text-[9px] text-white/70">
                        {trophy.titles === 1 ? "Title" : "Titles"}
                      </span>
                    </div>
                  </div>

                  {/* Winning Years */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="eyebrow text-[10px] text-steel">Winning Years:</span>
                    {trophy.winningYears.map((year) => (
                      <span
                        key={year}
                        className="headline inline-flex items-center gap-1 rounded-pill bg-gold px-3.5 py-1 text-sm text-brand-deep font-bold shadow-sm"
                      >
                        <Sparkles className="h-3 w-3" />
                        <span>{year}</span>
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-ink/85">
                    {trophy.description}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    {trophy.heroStory}
                  </p>

                  {/* Key Final Highlight Box */}
                  {trophy.keyFinal ? (
                    <div className="mt-6 rounded-control border border-brand/20 bg-brand/5 p-4.5">
                      <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wide">
                        <Medal className="h-4 w-4 text-gold" />
                        <span>Iconic Final ({trophy.keyFinal.year})</span>
                      </div>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs">
                        <div>
                          <span className="text-steel">Opponent: </span>
                          <strong className="text-ink">{trophy.keyFinal.opponent}</strong>
                        </div>
                        <div>
                          <span className="text-steel">Scoreline: </span>
                          <strong className="text-brand-dark font-mono font-bold">
                            {trophy.keyFinal.score}
                          </strong>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-steel">Venue: </span>
                          <span className="text-ink">{trophy.keyFinal.venue}</span>
                        </div>
                      </div>
                      <p className="mt-2.5 text-xs text-ink/75 italic border-t border-brand/10 pt-2">
                        "{trophy.keyFinal.summary}"
                      </p>
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-4">
                  <span className="eyebrow text-[10px] text-brand font-bold">
                    Official Bendel Insurance FC Silverware
                  </span>
                  <span className="flex items-center gap-1 text-xs text-steel">
                    <Check className="h-4 w-4 text-brand" />
                    <span>Verified Honour</span>
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Decade Matrix Table */}
      <section className="bg-smoke py-14 md:py-20">
        <div className={SHELL}>
          <SectionHeader
            title="Decades of Triumphs"
            subtitle="How the silverware was brought home across five eras"
          />

          <div className="overflow-x-auto rounded-card border border-ink/10 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 bg-brand-deep text-white text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold">Decade</th>
                  <th className="p-4 font-bold">Major Trophies Won</th>
                  <th className="p-4 font-bold">Key Tournaments</th>
                  <th className="p-4 font-bold text-right">Titles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/8">
                <tr className="hover:bg-brand/5 transition-colors">
                  <td className="headline p-4 text-lg text-brand font-bold">1970s</td>
                  <td className="p-4 text-ink">
                    <strong>1972</strong> Challenge Cup, <strong>1973</strong> League, <strong>1978</strong> FA Cup (3–0 vs Rangers), <strong>1979</strong> League
                  </td>
                  <td className="p-4 text-steel">Nigerian League & Challenge Cup</td>
                  <td className="headline p-4 text-right text-lg text-brand font-bold">4</td>
                </tr>
                <tr className="hover:bg-brand/5 transition-colors">
                  <td className="headline p-4 text-lg text-brand font-bold">1980s</td>
                  <td className="p-4 text-ink">
                    <strong>1980</strong> Nigerian FA Cup Champions
                  </td>
                  <td className="p-4 text-steel">Challenge Cup</td>
                  <td className="headline p-4 text-right text-lg text-brand font-bold">1</td>
                </tr>
                <tr className="hover:bg-brand/5 transition-colors">
                  <td className="headline p-4 text-lg text-brand font-bold">1990s</td>
                  <td className="p-4 text-ink">
                    <strong>1993, 1994, 1995</strong> West African Club Championships (UFOA 3-Peat), <strong>1994</strong> CAF Cup Continental Glory
                  </td>
                  <td className="p-4 text-steel">CAF Cup & WAFU Championship</td>
                  <td className="headline p-4 text-right text-lg text-brand font-bold">4</td>
                </tr>
                <tr className="hover:bg-brand/5 transition-colors">
                  <td className="headline p-4 text-lg text-brand font-bold">2020s</td>
                  <td className="p-4 text-ink">
                    <strong>2022</strong> NNL Super 8 Championship, <strong>2023</strong> Federation Cup Champions (1–0 vs Enugu Rangers in Asaba)
                  </td>
                  <td className="p-4 text-steel">Federation Cup & NNL Super 8</td>
                  <td className="headline p-4 text-right text-lg text-brand font-bold">2</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-brand-deep text-white font-bold">
                  <td className="p-4 uppercase tracking-wider" colSpan={3}>
                    Total Major Silverware
                  </td>
                  <td className="headline p-4 text-right text-2xl text-gold">11</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
