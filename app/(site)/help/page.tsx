import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Shield } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "Help & Fan Support | Bendel Insurance FC",
  description:
    "Get help with matchday ticketing, stadium access, club membership, merchandise orders and official contact information.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

const faqs = [
  {
    q: "How do I purchase matchday tickets for games at Samuel Ogbemudia Stadium?",
    a: "You can purchase tickets online directly through our official Tickets page, via our mobile app, or physically on matchdays at the designated stadium ticket booths (Gates 1, 2, and 4) at least 2 hours before kickoff.",
  },
  {
    q: "What items are prohibited inside Samuel Ogbemudia Stadium?",
    a: "For the safety of all supporters, weapons, fireworks/flares, glass bottles, metal cans, illegal substances, and commercial recording equipment without media accreditation are strictly prohibited.",
  },
  {
    q: "How do I join an official Bendel Insurance Supporters Club?",
    a: "Visit our Supporters Clubs directory to locate your nearest branch in Edo State, other Nigerian cities, or diaspora chapters in the UK and USA. You can also sign up for official membership online.",
  },
  {
    q: "What are the benefits of becoming an official Club Member?",
    a: "Official members enjoy priority access to NPFL and FA Cup match tickets, a 15–20% discount on official merchandise, a digital membership card, exclusive Insurance TV video content, and invitations to open training sessions.",
  },
  {
    q: "Can I take a guided tour of Samuel Ogbemudia Stadium?",
    a: "Yes! Stadium tours are organized on non-matchdays and include visits to the home dressing rooms, players' tunnel, pitchside dugouts, press conference room, and the trophy gallery.",
  },
  {
    q: "Where is the club secretariat and administrative office located?",
    a: "The club secretariat is located within the Samuel Ogbemudia Stadium Complex, Stadium Road, Ogbe Quarter, Benin City, Edo State, Nigeria.",
  },
];

export default function HelpPage() {
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
            <span className="text-gold font-semibold">Help & Support</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Fan Services & Assistance
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Help & Support
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Find answers to frequently asked questions about matchday tickets, stadium access, memberships, and official club inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about the Benin Arsenal"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq, idx) => (
            <Reveal key={faq.q} delay={idx * 0.05}>
              <div className="h-full rounded-card border border-ink/10 bg-white p-6 shadow-sm">
                <h3 className="headline text-lg uppercase text-brand-dark">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm text-steel leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact & Office Details */}
      <section className="bg-white py-16 md:py-24">
        <div className={SHELL}>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow text-xs font-bold text-brand uppercase">
                Direct Inquiries
              </span>
              <h2 className="headline text-3xl uppercase text-ink sm:text-4xl">
                Contact the Secretariat
              </h2>
              <p className="text-base text-steel leading-relaxed">
                Whether you have an inquiry regarding ticketing, corporate partnerships, academy trials, or media accreditation, our administrative team is here to assist.
              </p>

              <div className="space-y-3 pt-4 text-sm text-ink/80">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span>
                    <strong>Club Secretariat:</strong> Samuel Ogbemudia Stadium Complex, Stadium Road, Ogbe, Benin City, Edo State, Nigeria.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-brand">✉</span>
                  <span><strong>Email:</strong> info@bendelinsurancefc.com / media@bendelinsurancefc.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-brand">☎</span>
                  <span><strong>Operating Hours:</strong> Monday – Friday (08:00 – 17:00 WAT)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-card border border-ink/10 bg-smoke p-8">
                <h3 className="headline text-xl uppercase text-brand-dark mb-4">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-control border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-control border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ticketing, Membership, Media"
                      className="w-full rounded-control border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full rounded-control border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="eyebrow w-full rounded-pill bg-brand py-3 text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
