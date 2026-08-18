"use client";

import { useActionState } from "react";
import { type LoginState, loginAction } from "./actions";
import { Crest } from "@/components/brand";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      id="login-submit"
      className="eyebrow mt-2 flex w-full items-center justify-center gap-2 rounded-control bg-gold px-5 py-3.5 text-[10px] text-brand-deep transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? (
        <>
          <span
            className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden
          />
          Signing in…
        </>
      ) : (
        "Sign in"
      )}
    </button>
  );
}

function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    loginAction,
    undefined,
  );

  return (
    <form action={action} className="flex flex-col gap-4" noValidate>
      {state?.error && (
        <p
          id="login-error"
          role="alert"
          className="rounded-control bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="login-email"
          className="eyebrow text-[9px] tracking-widest text-steel"
        >
          Email
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="admin@example.com"
          className="rounded-control border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="login-password"
          className="eyebrow text-[9px] tracking-widest text-steel"
        >
          Password
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="••••••••"
          className="rounded-control border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <SubmitButton pending={pending} />
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-brand-deep px-4">
      {/* Subtle grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Crest className="h-10" />
          </div>
          <div>
            <p className="headline text-lg text-white uppercase tracking-tight">
              Bendel Insurance
            </p>
            <p className="eyebrow mt-1 text-[9px] text-gold">
              Admin Dashboard
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-white/10">
          <h1 className="headline mb-6 text-xl text-ink uppercase">
            Sign in
          </h1>
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-[11px] text-white/30">
          Access restricted to authorised administrators only.
        </p>
      </div>
    </div>
  );
}
