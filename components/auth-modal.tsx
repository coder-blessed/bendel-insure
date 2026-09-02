"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Close, Shield, User } from "@/components/icons";
import { useAuth } from "@/context/auth-context";

export function AuthModal() {
  const {
    authModalOpen,
    authModalMode,
    closeAuthModal,
    setAuthModalMode,
    login,
    signup,
    requestPasswordReset,
    rememberedEmail,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useDifferentEmail, setUseDifferentEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Initialize email with rememberedEmail when modal opens
  useEffect(() => {
    if (authModalOpen) {
      setError(null);
      setSuccessMessage(null);
      setPassword("");
      if (rememberedEmail) {
        setEmail(rememberedEmail);
        setUseDifferentEmail(false);
      } else {
        setEmail("");
        setUseDifferentEmail(true);
      }
    }
  }, [authModalOpen, rememberedEmail]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (authModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [authModalOpen]);

  if (!authModalOpen) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const targetEmail = useDifferentEmail ? email : rememberedEmail || email;
    if (!targetEmail || !password) {
      setError("Please provide both email and password.");
      return;
    }

    setLoading(true);
    try {
      await login(targetEmail, password);
      // login automatically closes modal on success
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const result = await signup(email, password);
      setSuccessMessage(
        result.message ||
          "Account created! We've sent a verification link to your email from admin@bendelinsurancefootball.com.",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create account.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const targetEmail = email || rememberedEmail;
    if (!targetEmail) {
      setError("Please provide your email address.");
      return;
    }

    setLoading(true);
    try {
      await requestPasswordReset(targetEmail);
      setSuccessMessage(
        "A password reset link has been sent to your email from admin@bendelinsurancefootball.com.",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send password reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAuthModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-card border-2 border-gold/40 bg-brand-deep p-6 text-white shadow-2xl sm:p-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeAuthModal}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <Close className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/40">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="headline mt-3 text-2xl uppercase tracking-wider text-white">
              {authModalMode === "signin" && "Supporter Sign In"}
              {authModalMode === "signup" && "Create Fan Account"}
              {authModalMode === "forgot" && "Reset Password"}
            </h2>
            <p className="mt-1 text-xs text-white/70">
              {authModalMode === "signin" && "Welcome back to Bendel Insurance FC"}
              {authModalMode === "signup" && "Join the Benin Arsenal supporter network"}
              {authModalMode === "forgot" && "We'll send a recovery link to your inbox"}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          {authModalMode !== "forgot" && (
            <div className="mt-6 flex rounded-pill bg-black/40 p-1 border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setAuthModalMode("signin");
                  setError(null);
                  setSuccessMessage(null);
                }}
                className={`eyebrow flex-1 rounded-pill py-2 text-center text-[10px] transition-all ${
                  authModalMode === "signin"
                    ? "bg-gold text-brand-deep font-bold shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthModalMode("signup");
                  setError(null);
                  setSuccessMessage(null);
                }}
                className={`eyebrow flex-1 rounded-pill py-2 text-center text-[10px] transition-all ${
                  authModalMode === "signup"
                    ? "bg-gold text-brand-deep font-bold shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Messages */}
          {error && (
            <div className="mt-4 rounded-control border border-red-500/30 bg-red-950/60 p-3 text-xs text-red-200">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mt-4 rounded-control border border-green-500/40 bg-green-950/70 p-3 text-xs text-green-200">
              <p className="font-semibold">{successMessage}</p>
              <p className="mt-1 text-[11px] text-green-300/80">
                Sender: admin@bendelinsurancefootball.com
              </p>
            </div>
          )}

          {/* SIGN IN FORM */}
          {authModalMode === "signin" && (
            <form onSubmit={handleSignIn} className="mt-5 space-y-4">
              {rememberedEmail && !useDifferentEmail ? (
                <div className="rounded-control border border-white/15 bg-black/30 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gold" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-white/50">
                          Signing in as
                        </p>
                        <p className="text-xs font-semibold text-white truncate max-w-[200px]">
                          {rememberedEmail}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setUseDifferentEmail(true);
                        setEmail("");
                      }}
                      className="text-[10px] text-gold underline hover:text-white"
                    >
                      Switch email
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="fan@example.com"
                    className="w-full rounded-control border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                  />
                  {rememberedEmail && useDifferentEmail && (
                    <button
                      type="button"
                      onClick={() => {
                        setUseDifferentEmail(false);
                        setEmail(rememberedEmail);
                      }}
                      className="mt-1 text-[10px] text-gold underline hover:text-white"
                    >
                      Use remembered email ({rememberedEmail})
                    </button>
                  )}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthModalMode("forgot");
                      setError(null);
                      setSuccessMessage(null);
                    }}
                    className="text-[10px] text-gold hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  autoFocus={Boolean(rememberedEmail && !useDifferentEmail)}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-control border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="eyebrow w-full rounded-pill bg-gold py-3 text-center text-xs font-bold text-brand-deep transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in…" : "Sign In"}
              </button>

              <div className="text-center pt-1">
                <p className="text-xs text-white/60">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthModalMode("signup");
                      setError(null);
                      setSuccessMessage(null);
                    }}
                    className="text-gold font-semibold hover:underline"
                  >
                    Sign Up with Email
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* SIGN UP FORM (Only email & password required) */}
          {authModalMode === "signup" && (
            <form onSubmit={handleSignUp} className="mt-5 space-y-4">
              <div className="rounded-control bg-gold/10 border border-gold/20 p-2.5 text-[11px] text-gold/90 text-center">
                Quick 1-step signup: enter your email and password below.
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="fan@example.com"
                  className="w-full rounded-control border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Create Password (min 6 characters)
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Choose a secure password"
                  className="w-full rounded-control border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="eyebrow w-full rounded-pill bg-gold py-3 text-center text-xs font-bold text-brand-deep transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account…" : "Create Supporter Account"}
              </button>

              <div className="text-center pt-1">
                <p className="text-xs text-white/60">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthModalMode("signin");
                      setError(null);
                      setSuccessMessage(null);
                    }}
                    className="text-gold font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* FORGOT PASSWORD FORM */}
          {authModalMode === "forgot" && (
            <form onSubmit={handleForgotPassword} className="mt-5 space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Account Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email || rememberedEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="fan@example.com"
                  className="w-full rounded-control border border-white/20 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="eyebrow w-full rounded-pill bg-gold py-3 text-center text-xs font-bold text-brand-deep transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending link…" : "Send Reset Link via Email"}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setAuthModalMode("signin");
                    setError(null);
                    setSuccessMessage(null);
                  }}
                  className="text-xs text-gold hover:underline"
                >
                  &larr; Back to Sign In
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
