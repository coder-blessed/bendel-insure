import type { Metadata } from "next";
import Link from "next/link";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accessibility Statement | Bendel Insurance FC",
  description:
    "Bendel Insurance FC accessibility statement: digital accessibility standards and matchday accessibility at Samuel Ogbemudia Stadium.",
};

const SHELL = "mx-auto w-full max-w-[1000px] px-4 md:px-8";

export default function AccessibilityPage() {
  return (
    <main className="bg-smoke text-ink py-16 md:py-24">
      <div className={SHELL}>
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-steel">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span>/</span>
          <span className="text-brand font-semibold">Accessibility</span>
        </nav>

        <div className="rounded-card border border-ink/10 bg-white p-8 md:p-12 shadow-sm">
          <h1 className="headline text-3xl uppercase text-brand-dark sm:text-4xl">
            Accessibility Statement
          </h1>
          <p className="mt-2 text-xs text-steel">
            Last Updated: August 2026 • Bendel Insurance Football Club
          </p>

          <div className="mt-8 space-y-6 text-sm text-steel leading-relaxed">
            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">1. Our Commitment</h2>
              <p>
                Bendel Insurance Football Club is dedicated to ensuring that football is welcoming, inclusive, and accessible to everyone — both across our digital web platforms and in person at Samuel Ogbemudia Stadium.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">2. Digital Accessibility</h2>
              <p>
                We strive to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our digital interfaces support keyboard navigation, high-contrast color ratios, semantic HTML markup, screen-reader optimizations, and reduced motion settings.
              </p>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">3. Matchday Accessibility at Samuel Ogbemudia Stadium</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Wheelchair Access:</strong> Dedicated ramp access and step-free viewing platforms in both the Covered Main Stand and VIP areas.
                </li>
                <li>
                  <strong>Accessible Restrooms:</strong> Fully equipped accessible sanitary facilities located close to dedicated viewing bays.
                </li>
                <li>
                  <strong>Accessible Parking:</strong> Designated parking bays for blue badge and mobility-impaired supporters with drop-off zones at Gate 1 and Gate 2.
                </li>
                <li>
                  <strong>Matchday Stewards:</strong> Specially trained disability assistance stewards on duty at all home matches.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="headline text-lg uppercase text-ink mb-2">4. Feedback & Contact</h2>
              <p>
                If you encounter any accessibility barrier or require special matchday assistance, please reach out to our accessibility coordinator at accessibility@bendelinsurancefc.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
