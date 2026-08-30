import type { Metadata } from "next";
import Link from "next/link";
import { TeamBadge } from "@/components/brand";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club, TEAM_LOGOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "NPFL Standings & League Table | Bendel Insurance FC",
  description:
    "Official Nigeria Premier Football League (NPFL) 2026/27 standings table, goal difference, form guide and points.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

// 20 NPFL Clubs Table
const npflTableData = [
  { pos: 1, team: "Enugu Rangers", p: 38, w: 19, d: 11, l: 8, gf: 47, ga: 27, gd: 20, pts: 68, form: ["W", "W", "W", "W", "D"] },
  { pos: 2, team: "Rivers United", p: 38, w: 19, d: 10, l: 9, gf: 44, ga: 31, gd: 13, pts: 67, form: ["W", "L", "W", "W", "W"] },
  { pos: 3, team: "Shooting Stars 3SC", p: 38, w: 18, d: 6, l: 14, gf: 41, ga: 40, gd: 1, pts: 60, form: ["W", "W", "W", "L", "W"] },
  { pos: 4, team: "Ikorodu City", p: 38, w: 16, d: 10, l: 12, gf: 43, ga: 39, gd: 4, pts: 58, form: ["W", "L", "W", "L", "L"] },
  { pos: 5, team: "Bendel Insurance", p: 38, w: 14, d: 14, l: 10, gf: 44, ga: 38, gd: 6, pts: 56, form: ["W", "W", "W", "L", "D"] },
  { pos: 6, team: "Nasarawa United", p: 38, w: 16, d: 8, l: 14, gf: 37, ga: 34, gd: 3, pts: 56, form: ["L", "W", "L", "W", "L"] },
  { pos: 7, team: "Abia Warriors", p: 38, w: 16, d: 7, l: 15, gf: 31, ga: 34, gd: -3, pts: 55, form: ["L", "W", "L", "L", "L"] },
  { pos: 8, team: "Barau FC", p: 38, w: 13, d: 13, l: 12, gf: 34, ga: 30, gd: 4, pts: 52, form: ["W", "L", "W", "L", "W"] },
  { pos: 9, team: "Katsina United", p: 38, w: 14, d: 10, l: 14, gf: 36, ga: 39, gd: -3, pts: 52, form: ["L", "W", "L", "W", "L"] },
  { pos: 10, team: "Plateau United", p: 38, w: 15, d: 5, l: 18, gf: 39, ga: 40, gd: -1, pts: 50, form: ["L", "L", "L", "W", "L"] },
  { pos: 11, team: "Enyimba International", p: 38, w: 13, d: 10, l: 15, gf: 44, ga: 42, gd: 2, pts: 49, form: ["W", "L", "W", "L", "W"] },
  { pos: 12, team: "Kun Khalifat FC", p: 38, w: 13, d: 10, l: 15, gf: 42, ga: 40, gd: 2, pts: 49, form: ["W", "W", "W", "W", "L"] },
  { pos: 13, team: "Warri Wolves", p: 38, w: 13, d: 10, l: 15, gf: 36, ga: 41, gd: -5, pts: 49, form: ["L", "L", "W", "L", "W"] },
  { pos: 14, team: "Niger Tornadoes", p: 38, w: 13, d: 9, l: 16, gf: 37, ga: 36, gd: 1, pts: 48, form: ["L", "W", "D", "L", "W"] },
  { pos: 15, team: "Kano Pillars", p: 38, w: 15, d: 6, l: 17, gf: 34, ga: 39, gd: -5, pts: 48, form: ["L", "W", "L", "W", "L"] },
  { pos: 16, team: "Kwara United", p: 38, w: 13, d: 11, l: 14, gf: 32, ga: 36, gd: -4, pts: 47, form: ["W", "W", "L", "D", "L"] },
  { pos: 17, team: "Remo Stars", p: 38, w: 14, d: 5, l: 19, gf: 42, ga: 47, gd: -5, pts: 47, form: ["L", "W", "L", "W", "L"] },
  { pos: 18, team: "El-Kanemi Warriors", p: 38, w: 13, d: 8, l: 17, gf: 27, ga: 46, gd: -19, pts: 47, form: ["W", "L", "L", "L", "D"] },
  { pos: 19, team: "Bayelsa United", p: 38, w: 11, d: 10, l: 17, gf: 37, ga: 42, gd: -5, pts: 43, form: ["L", "L", "L", "L", "W"] },
  { pos: 20, team: "Wikki Tourists", p: 38, w: 9, d: 13, l: 16, gf: 36, ga: 48, gd: -12, pts: 40, form: ["W", "L", "L", "L", "L"] },
];




export default function LeagueTablePage() {
  return (
    <main className="bg-smoke text-ink">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/stadium/stadium-main-bowl.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/90 to-black/75" />

        <div className={`${SHELL} relative z-10`}>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/fixtures" className="hover:text-gold">Matches</Link>
            <span>/</span>
            <span className="text-gold font-semibold">NPFL Table</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              2026/27 NPFL Season
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              League Standings
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Official standings and live position tracker for the Nigeria Premier Football League 2026/27 campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <Reveal>
          <div className="overflow-hidden rounded-card border border-ink/10 bg-white shadow-lg">
            <div className="border-b border-ink/10 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="headline text-2xl uppercase text-ink">
                    Nigeria Premier Football League
                  </h2>
                  <p className="text-xs text-steel">Season 2026/27 • Matchday 1 Kickoff August 28–30</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-green-600" />
                    <span>CAF Champions League (1-2)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-blue-600" />
                    <span>CAF Confederation Cup (3)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-600" />
                    <span>Relegation Zone (17-20)</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-ink/10 bg-smoke text-[11px] font-bold uppercase text-steel">
                    <th scope="col" className="py-4 pl-6 w-14">Pos</th>
                    <th scope="col" className="py-4 px-4 min-w-[220px]">Club</th>
                    <th scope="col" className="py-4 px-3 text-center">Pl</th>
                    <th scope="col" className="py-4 px-3 text-center">W</th>
                    <th scope="col" className="py-4 px-3 text-center">D</th>
                    <th scope="col" className="py-4 px-3 text-center">L</th>
                    <th scope="col" className="py-4 px-3 text-center">GF</th>
                    <th scope="col" className="py-4 px-3 text-center">GA</th>
                    <th scope="col" className="py-4 px-3 text-center">GD</th>
                    <th scope="col" className="py-4 pr-6 text-right font-bold text-ink">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5 text-sm">
                  {npflTableData.map((row) => {
                    const isInsurance = row.team.toLowerCase().includes("insurance");
                    const isChamp = row.pos <= 2;
                    const isConfed = row.pos === 3;
                    const isRelegation = row.pos >= 17;

                    return (
                      <tr
                        key={row.team}
                        className={`transition-colors ${
                          isInsurance
                            ? "bg-brand/10 font-bold text-brand-dark hover:bg-brand/15"
                            : "hover:bg-smoke/60"
                        }`}
                      >
                        <td className="py-3.5 pl-6">
                          <span
                            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                              isChamp
                                ? "bg-green-600 text-white"
                                : isConfed
                                ? "bg-blue-600 text-white"
                                : isRelegation
                                ? "bg-red-600 text-white"
                                : "text-steel"
                            }`}
                          >
                            {row.pos}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <TeamBadge
                              name={row.team}
                              logo={TEAM_LOGOS[row.team]}
                              className="h-8 w-8 shrink-0"
                            />
                            <span className={isInsurance ? "font-bold text-brand-dark" : "font-medium text-ink"}>
                              {row.team}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-center tabular-nums text-steel">{row.p}</td>
                        <td className="py-3.5 px-3 text-center tabular-nums text-steel">{row.w}</td>
                        <td className="py-3.5 px-3 text-center tabular-nums text-steel">{row.d}</td>
                        <td className="py-3.5 px-3 text-center tabular-nums text-steel">{row.l}</td>
                        <td className="py-3.5 px-3 text-center tabular-nums text-steel">{row.gf}</td>
                        <td className="py-3.5 px-3 text-center tabular-nums text-steel">{row.ga}</td>
                        <td className="py-3.5 px-3 text-center tabular-nums font-semibold">{row.gd}</td>
                        <td className="py-3.5 pr-6 text-right headline text-base tabular-nums font-bold text-ink">
                          {row.pts}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
