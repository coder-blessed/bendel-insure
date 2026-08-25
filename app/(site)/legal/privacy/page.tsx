import type { Metadata } from "next";
import Link from "next/link";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Bendel Insurance FC",
  description:
    "Official Privacy Policy of Bendel Insurance FC. Learn how we collect, protect and process your personal information.",
};

const SHELL = "mx-auto w-full max-w-[1000px] px-4 md:px-8";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-smoke text-ink py-16 md:py-24">
      <div className={SHELL}>
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-steel">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <span className="text-brand font-semibold">Privacy Policy</span>
        </nav>

        <div className="rounded-card border border-ink/10 bg-white p-8 md:p-12 shadow-sm">
          <h1 className="headline text-3xl uppercase text-brand-dark sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-steel">
            Effective: August 2026 • Bendel Insurance Football Club
          </p>

          <div className="mt-8 space-y-6 text-sm text-steel leading-relaxed">
            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">1. Overview & Commitment</h2>
              <p>
                Bendel Insurance Football Club values the privacy of its supporters, members, and site visitors. This Privacy Policy details how we handle information gathered across our website, mobile application, ticketing portal, and official digital platforms in compliance with the Nigeria Data Protection Act (NDPA).
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">2. Information We Collect</h2>
              <p>
                We may collect personal details such as your name, email address, phone number, shipping address, and ticket purchase history when you register for club membership, purchase match tickets, or order items from the official club store.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">3. How We Use Your Data</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Processing matchday ticket issuances and season pass entry.</li>
                <li>Delivering official merchandise and order fulfillment.</li>
                <li>Sending match previews, breaking news, and club announcements.</li>
                <li>Enhancing stadium security, fan safety, and turnstile verification.</li>
              </ul>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">4. Data Protection & Security</h2>
              <p>
                We employ industry-standard encryption, secure server architecture, and access control policies to safeguard your personal data from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">5. Contact Us</h2>
              <p>
                For data protection inquiries or to request deletion of your information, please contact our data governance team at privacy@bendelinsurancefc.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
