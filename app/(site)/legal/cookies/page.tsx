import type { Metadata } from "next";
import Link from "next/link";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy | Bendel Insurance FC",
  description:
    "Learn about how Bendel Insurance FC uses cookies and browser tracking technologies on its website.",
};

const SHELL = "mx-auto w-full max-w-[1000px] px-4 md:px-8";

export default function CookiePolicyPage() {
  return (
    <main className="bg-smoke text-ink py-16 md:py-24">
      <div className={SHELL}>
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-steel">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <span className="text-brand font-semibold">Cookie Policy</span>
        </nav>

        <div className="rounded-card border border-ink/10 bg-white p-8 md:p-12 shadow-sm">
          <h1 className="headline text-3xl uppercase text-brand-dark sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-2 text-xs text-steel">
            Last Updated: August 2026 • Bendel Insurance Football Club
          </p>

          <div className="mt-8 space-y-6 text-sm text-steel leading-relaxed">
            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit websites. They help remember your preferences, keep you signed in, and enhance your browsing experience on our official platform.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for core site functionality, ticketing cart checkouts, and security authentication.
                </li>
                <li>
                  <strong>Performance & Analytics Cookies:</strong> Help us measure site visits, understand popular news articles, and improve page loading speeds.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your chosen settings such as language, theme, and favorite team filters.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">3. Managing Cookie Preferences</h2>
              <p>
                You can control and modify your cookie preferences through your web browser settings at any time. Disabling essential cookies may impact certain site features such as ticket purchases.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
