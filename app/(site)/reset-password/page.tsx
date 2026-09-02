"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Shield } from "@/components/icons";
import { useAuth } from "@/context/auth-context";
import { API_BASE_URL } from "@/lib/api";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { openAuthModal } = useAuth();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError("Reset token is missing. Please use the link sent to your email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.message || "Unable to reset password.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Password reset failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${SHELL} py-20 md:py-32`}>
      <div className="mx-auto max-w-xl">
        <div className="rounded-card border-2 border-gold/30 bg-brand-deep p-8 text-white shadow-2xl md:p-12">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/40">
              <Shield className="h-8 w-8" />
            </div>

            <h1 className="headline mt-6 text-3xl uppercase tracking-wider text-white sm:text-4xl">
              Set New Password
            </h1>
            <p className="mt-2 text-xs text-gold uppercase tracking-widest font-bold">
              Bendel Insurance FC &bull; Supporter Account Recovery
            </p>
          </div>

          {success ? (
            <div className="mt-8 space-y-6 text-center">
              <div className="rounded-card border border-green-500/40 bg-green-950/70 p-6 text-green-200">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-brand-deep font-bold text-xl mb-3">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white uppercase">
                  Password Reset Successful!
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Your new password has been saved. You can now sign in with your updated credentials.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openAuthModal("signin")}
                className="eyebrow rounded-pill bg-gold px-8 py-3.5 text-xs font-bold text-brand-deep transition-colors hover:bg-white cursor-pointer"
              >
                Sign In Now
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {!token && (
                <div className="rounded-control border border-yellow-500/40 bg-yellow-950/60 p-4 text-xs text-yellow-200">
                  No reset token detected in URL. Please click the exact link from the email sent to you by admin@bendelinsurancefootball.com.
                </div>
              )}

              {error && (
                <div className="rounded-control border border-red-500/40 bg-red-950/70 p-3 text-xs text-red-200">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  New Password (min 6 characters)
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full rounded-control border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full rounded-control border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !token}
                className="eyebrow w-full rounded-pill bg-gold py-3.5 text-center text-xs font-bold text-brand-deep transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Updating Password…" : "Update Password"}
              </button>

              <div className="text-center pt-2">
                <Link href="/" className="text-xs text-white/60 hover:text-gold">
                  &larr; Return to Homepage
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Suspense
        fallback={
          <div className={`${SHELL} py-32 text-center text-white/70`}>
            Loading password reset…
          </div>
        }
      >
        <ResetPasswordContent />
      </Suspense>
    </main>
  );
}
