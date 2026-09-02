"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Shield, User } from "@/components/icons";
import { useAuth } from "@/context/auth-context";
import { API_BASE_URL } from "@/lib/api";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { user, refreshUser, openAuthModal } = useAuth();

  const [loading, setLoading] = useState(Boolean(token));
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendEmail, setResendEmail] = useState("");
  const [resendStatus, setResendStatus] = useState<string | null>(null);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (!token) return;

    async function verify() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/auth/verify-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const json = await res.json();
        if (!res.ok) {
          throw new Error(json?.message || "Email verification link has expired or is invalid.");
        }

        setSuccess(true);
        await refreshUser();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Verification failed.");
      } finally {
        setLoading(false);
      }
    }

    verify();
  }, [token, refreshUser]);

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setResendStatus(null);

    const emailToUse = resendEmail || user?.email;
    if (!emailToUse) {
      setResendStatus("Please enter your email address.");
      return;
    }

    setResending(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/resend-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailToUse }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.message || "Failed to resend verification email.");
      }

      setResendStatus(
        "A fresh verification link has been sent from admin@bendelinsurancefootball.com.",
      );
    } catch (err) {
      setResendStatus(err instanceof Error ? err.message : "Unable to send verification email.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className={`${SHELL} py-20 md:py-32`}>
      <div className="mx-auto max-w-xl">
        <div className="rounded-card border-2 border-gold/30 bg-brand-deep p-8 text-white shadow-2xl md:p-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/40">
            <Shield className="h-8 w-8" />
          </div>

          <h1 className="headline mt-6 text-3xl uppercase tracking-wider text-white sm:text-4xl">
            Email Verification
          </h1>
          <p className="mt-2 text-xs text-gold uppercase tracking-widest font-bold">
            Official Supporter Portal &bull; Bendel Insurance FC
          </p>

          {loading && (
            <div className="my-10 space-y-4">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
              <p className="text-sm text-white/80">
                Verifying your email address with the club records…
              </p>
            </div>
          )}

          {!loading && success && (
            <div className="my-8 space-y-6">
              <div className="rounded-card border border-green-500/40 bg-green-950/70 p-6 text-green-200">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-brand-deep font-bold text-xl mb-3">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white uppercase">
                  Email Verified Successfully!
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Thank you for confirming your email address. Your Bendel Insurance FC supporter account is now fully verified and activated.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/account"
                  className="eyebrow rounded-pill bg-gold px-6 py-3.5 text-xs font-bold text-brand-deep transition-colors hover:bg-white"
                >
                  My Fan Account
                </Link>
                <Link
                  href="/tickets"
                  className="eyebrow rounded-pill border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white transition-colors hover:bg-white/20"
                >
                  Buy Match Tickets
                </Link>
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="my-8 space-y-6">
              <div className="rounded-card border border-red-500/40 bg-red-950/70 p-6 text-red-200">
                <h3 className="text-lg font-bold text-white uppercase">
                  Verification Failed
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {error}
                </p>
              </div>

              <div className="rounded-card border border-white/10 bg-black/40 p-6 text-left">
                <h4 className="headline text-sm uppercase text-gold mb-3">
                  Request New Verification Link
                </h4>
                <form onSubmit={handleResend} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={resendEmail || user?.email || ""}
                    onChange={(e) => setResendEmail(e.target.value)}
                    className="w-full rounded-control border border-white/20 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={resending}
                    className="eyebrow w-full rounded-pill bg-gold py-3 text-center text-xs font-bold text-brand-deep hover:bg-white disabled:opacity-60"
                  >
                    {resending ? "Sending…" : "Resend Verification Link"}
                  </button>
                  {resendStatus && (
                    <p className="text-xs text-gold/90 text-center">{resendStatus}</p>
                  )}
                </form>
              </div>
            </div>
          )}

          {!loading && !token && !success && !error && (
            <div className="my-8 space-y-6 text-left">
              <p className="text-sm text-white/80 text-center">
                Need to verify your Bendel Insurance FC supporter account? Enter your email below and we'll send a verification link from <span className="text-gold font-semibold">admin@bendelinsurancefootball.com</span>.
              </p>

              <form onSubmit={handleResend} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="supporter@example.com"
                    value={resendEmail || user?.email || ""}
                    onChange={(e) => setResendEmail(e.target.value)}
                    className="w-full rounded-control border border-white/20 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={resending}
                  className="eyebrow w-full rounded-pill bg-gold py-3.5 text-center text-xs font-bold text-brand-deep hover:bg-white disabled:opacity-60"
                >
                  {resending ? "Sending…" : "Send Verification Link"}
                </button>
                {resendStatus && (
                  <p className="text-xs text-gold/90 text-center">{resendStatus}</p>
                )}
              </form>
            </div>
          )}

          <div className="mt-8 border-t border-white/10 pt-6">
            <Link href="/" className="text-xs text-white/60 hover:text-gold">
              &larr; Return to Bendel Insurance FC Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Suspense
        fallback={
          <div className={`${SHELL} py-32 text-center text-white/70`}>
            Loading verification details…
          </div>
        }
      >
        <VerifyEmailContent />
      </Suspense>
    </main>
  );
}
