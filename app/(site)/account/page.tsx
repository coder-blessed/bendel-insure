"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Ticket, User } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { apiRequest, getStoredAuthToken } from "@/lib/api";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

type ProfilePayload = {
  id?: string;
  userId?: string;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  displayName?: string | null;
  favoritePlayer?: string | null;
  avatarUrl?: string | null;
  city?: string | null;
  address?: string | null;
};

export default function AccountPage() {
  const [profile, setProfile] = useState<ProfilePayload>({});
  const [status, setStatus] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getStoredAuthToken();
    if (!token) {
      setStatus("Sign in to save your fan profile and ticket preferences.");
      setLoading(false);
      return;
    }

    apiRequest<ProfilePayload>("/profile")
      .then((data) => {
        setProfile({
          ...data,
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          phone: data.phone ?? "",
          displayName: data.displayName ?? "",
          favoritePlayer: data.favoritePlayer ?? "",
          city: data.city ?? "",
          address: data.address ?? "",
        });
      })
      .catch((error) => {
        setStatus(error instanceof Error ? error.message : "Unable to load profile.");
      })
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const token = getStoredAuthToken();
    if (!token) {
      setStatus("Sign in before saving your fan account details.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        firstName: profile.firstName ?? "",
        lastName: profile.lastName ?? "",
        phone: profile.phone ?? "",
        displayName: profile.displayName ?? "",
        favoritePlayer: profile.favoritePlayer ?? "",
        city: profile.city ?? "",
        address: profile.address ?? "",
      };

      await apiRequest<ProfilePayload>("/profile", {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      setStatus("Profile saved successfully.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to save profile.");
    } finally {
      setSaving(false);
    }
  }

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

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-steel uppercase mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={profile.firstName ?? ""}
                        onChange={(event) => setProfile((current) => ({ ...current, firstName: event.target.value }))}
                        className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-steel uppercase mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={profile.lastName ?? ""}
                        onChange={(event) => setProfile((current) => ({ ...current, lastName: event.target.value }))}
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
                      value={profile.email ?? ""}
                      onChange={(event) => setProfile((current) => ({ ...current, email: event.target.value }))}
                      className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profile.phone ?? ""}
                      onChange={(event) => setProfile((current) => ({ ...current, phone: event.target.value }))}
                      className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Favorite Bendel Insurance Player
                    </label>
                    <input
                      type="text"
                      value={profile.favoritePlayer ?? ""}
                      onChange={(event) => setProfile((current) => ({ ...current, favoritePlayer: event.target.value }))}
                      placeholder="Amas Obasogie (#1)"
                      className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={profile.city ?? ""}
                      onChange={(event) => setProfile((current) => ({ ...current, city: event.target.value }))}
                      className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel uppercase mb-1">
                      Home Address
                    </label>
                    <textarea
                      value={profile.address ?? ""}
                      onChange={(event) => setProfile((current) => ({ ...current, address: event.target.value }))}
                      rows={3}
                      className="w-full rounded-control border border-ink/15 bg-smoke px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={saving || loading}
                      className="eyebrow rounded-pill bg-brand px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {saving ? "Saving…" : "Save Preferences"}
                    </button>
                  </div>

                  {status ? (
                    <p className="text-sm text-steel">{status}</p>
                  ) : null}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
