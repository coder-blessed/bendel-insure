import type { Metadata } from "next";
import Link from "next/link";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use | Bendel Insurance FC",
  description:
    "Official website terms of use and legal conditions for Bendel Insurance Football Club.",
};

const SHELL = "mx-auto w-full max-w-[1000px] px-4 md:px-8";

export default function TermsPage() {
  return (
    <main className="bg-smoke text-ink py-16 md:py-24">
      <div className={SHELL}>
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-steel">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <span className="text-brand font-semibold">Terms of Use</span>
        </nav>

        <div className="rounded-card border border-ink/10 bg-white p-8 md:p-12 shadow-sm">
          <h1 className="headline text-3xl uppercase text-brand-dark sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-2 text-xs text-steel">
            Last Updated: August 2026 • Bendel Insurance Football Club
          </p>

          <div className="mt-8 space-y-6 text-sm text-steel leading-relaxed">
            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the official website, mobile services, ticketing portal, or digital channels of Bendel Insurance Football Club (&quot;the Club&quot;), you agree to be bound by these Terms of Use and all applicable laws of the Federal Republic of Nigeria.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">2. Intellectual Property Rights</h2>
              <p>
                All trademarks, logos, club crests, photographic images, video footage, match data, written content, and site design are the exclusive property of Bendel Insurance FC, the Edo State Sports Commission, or authorized licensors. Unauthorized reproduction, rebroadcasting, or commercial use is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">3. Match Ticketing & Stadium Entry</h2>
              <p>
                Matchday tickets purchased through this website or authorized agents are subject to the Samuel Ogbemudia Stadium Ground Regulations and the Nigeria Premier Football League (NPFL) Fan Code of Conduct. The Club reserves the right to refuse entry or eject any individual violating safety protocols or engaging in disorderly conduct.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">4. Official Merchandise & Orders</h2>
              <p>
                All merchandise prices are listed in Nigerian Naira (₦) and include applicable taxes unless otherwise noted. Delivery timeframes and return policies are governed by our official merchandise fulfillment guidelines.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">5. Governing Law & Jurisdiction</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of Edo State and the Federal Republic of Nigeria.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
