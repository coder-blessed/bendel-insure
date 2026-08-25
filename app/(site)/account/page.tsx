import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield, Ticket, User } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { club } from "@/lib/content";

export const metadata: Metadata = {
  title: "My Account | Bendel Insurance FC",
  description:
    "Manage your Bendel Insurance FC fan account, ticket wallet, digital membership card and profile preferences.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default function AccountPage() {
  return (
    <main className="bg-smoke text-ink">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/stadium/stadium-night.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/90 to-black/75" />

        <div className={`${SHELL} relative z-10`}>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-gold font-semibold">Account</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-pill border border-gold/40 bg-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-wider text-gold uppercase">
              Fan Portal
            </span>
            <h1 className="headline mt-4 text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              My Fan Account
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              Access your digital membership pass, matchday tickets, order history, and account settings.
            </p>
          </div>
        </div>
      </section>

      {/* Account Dashboard Content */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Member Card Box */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-card bg-gradient-to-br from-brand-dark via-brand-deep to-black p-8 text-white shadow-xl border-2 border-gold/30">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-[10px] font-bold uppercase text-gold">
                    Official Supporter Pass
                  </span>
                  <span className="headline text-xs text-white/60 uppercase">
                    2026/27
                  </span>
                </div>

                <div className="my-8">
                  <p className="text-xs text-white/60 uppercase">Member Name</p>
                  <h3 className="headline text-2xl uppercase text-white mt-1">
                    Benin Arsenal Supporter
                  </h3>
                  <p className="mt-2 text-xs font-mono text-gold">
                    ID: BI-2026-884920
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                  <div>
                    <span className="text-white/60">Status:</span>{" "}
                    <span className="text-green-400 font-semibold">Active Member</span>
                  </div>
                  <div>
                    <span className="text-white/60">Tier:</span>{" "}
                    <span className="text-gold font-semibold">Gold Supporter</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 space-y-3">
                <Link
                  href="/tickets"
                  className="flex items-center justify-between rounded-card border border-ink/10 bg-white p-4 transition-colors hover:border-brand"
                >
                  <div className="flex items-center gap-3">
                    <Ticket className="h-5 w-5 text-brand" />
                    <span className="font-semibold text-sm text-ink">My Match Tickets (0)</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-steel" />
                </Link>
                <Link
                  href="/membership"
                  className="flex items-center justify-between rounded-card border border-ink/10 bg-white p-4 transition-colors hover:border-brand"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand" />
                    <span className="font-semibold text-sm text-ink">Renew Membership</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-steel" />
                </Link>
                <Link
                  href="/store"
                  className="flex items-center justify-between rounded-card border border-ink/10 bg-white p-4 transition-colors hover:border-brand"
                >
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-brand" />
                    <span className="font-semibold text-sm text-ink">Official Store Orders</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-steel" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Account Profile Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="rounded-card border border-ink/10 bg-white p-8 shadow-sm">
                <h3 className="headline text-xl uppercase text-brand-dark mb-6">
                  Account Preferences
                </h3>

                <form className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-steel uppercase mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Arsenal"
                        className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-steel uppercase mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Supporter"
                        className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="supporter@bendelinsurancefc.com"
                      className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+234 800 000 0000"
                      className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Favorite Bendel Insurance Player
                    </label>
                    <select className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none">
                      <option>Amas Obasogie (#1)</option>
                      <option>Divine Nwachukwu (#8)</option>
                      <option>Imade Osarenkhoe</option>
                      <option>Osaretin Igbinoba (#10)</option>
                      <option>Ndifreke Effiong (#4)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="eyebrow rounded-pill bg-brand px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                    >
                      Save Preferences
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
