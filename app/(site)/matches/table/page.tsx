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

// 20 NPFL Clubs Table (2026/27 Season)
const npflTableData = [
  { pos: 1, team: "Barau FC", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, gd: 2, pts: 3, form: ["W", "—", "—", "—", "—"] },
  { pos: 2, team: "Ikorodu City FC", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, gd: 2, pts: 3, form: ["W", "—", "—", "—", "—"] },
  { pos: 3, team: "Doma United FC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3, form: ["W", "—", "—", "—", "—"] },
  { pos: 4, team: "Rivers United FC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3, form: ["W", "—", "—", "—", "—"] },
  { pos: 5, team: "Niger Tornadoes FC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 1, gd: 1, pts: 3, form: ["W", "—", "—", "—", "—"] },
  { pos: 6, team: "Shooting Stars 3SC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 1, gd: 1, pts: 3, form: ["W", "—", "—", "—", "—"] },
  { pos: 7, team: "Kano Pillars FC", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, gd: 0, pts: 1, form: ["D", "—", "—", "—", "—"] },
  { pos: 8, team: "Kwara United FC", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, gd: 0, pts: 1, form: ["D", "—", "—", "—", "—"] },
  { pos: 9, team: "Katsina United FC", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, gd: 0, pts: 1, form: ["D", "—", "—", "—", "—"] },
  { pos: 10, team: "Enugu Rangers FC", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, gd: 0, pts: 1, form: ["D", "—", "—", "—", "—"] },
  { pos: 11, team: "Abia Warriors FC", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, form: ["—", "—", "—", "—", "—"] },
  { pos: 12, team: "Bendel Insurance FC", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, form: ["—", "—", "—", "—", "—"] },
  { pos: 13, team: "Kun Khalifat FC", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, form: ["—", "—", "—", "—", "—"] },
  { pos: 14, team: "Warri Wolves FC", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, form: ["—", "—", "—", "—", "—"] },
  { pos: 15, team: "Enyimba FC", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 2, gd: -1, pts: 0, form: ["L", "—", "—", "—", "—"] },
  { pos: 16, team: "Inter Lagos FC", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 2, gd: -1, pts: 0, form: ["L", "—", "—", "—", "—"] },
  { pos: 17, team: "Nasarawa United FC", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, gd: -2, pts: 0, form: ["L", "—", "—", "—", "—"] },
  { pos: 18, team: "Ranchers Bees", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, gd: -2, pts: 0, form: ["L", "—", "—", "—", "—"] },
  { pos: 19, team: "Plateau United FC", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0, form: ["L", "—", "—", "—", "—"] },
  { pos: 20, team: "Sporting Lagos FC", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0, form: ["L", "—", "—", "—", "—"] },
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
