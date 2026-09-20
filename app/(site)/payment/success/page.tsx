"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") ?? searchParams.get("transaction_ref") ?? "";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-card border border-green-300 bg-green-50 p-8 shadow-sm">
        <p className="eyebrow text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
          Payment complete
        </p>
        <h1 className="headline mt-4 text-3xl uppercase text-ink">
          Your order is confirmed
        </h1>
        <p className="mt-4 text-sm text-steel">
          Your payment has been received successfully. Your ticket or order receipt will be sent to your email inbox shortly.
        </p>

        {reference ? (
          <p className="mt-4 text-sm text-steel">
            Reference: <span className="font-semibold text-ink">{reference}</span>
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/account"
            className="rounded-pill bg-brand px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-dark"
          >
            View account
          </Link>
          <Link
            href="/tickets"
            className="rounded-pill border border-brand/30 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-brand transition-colors hover:bg-smoke"
          >
            Browse more tickets
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-3xl px-6 py-16"><div className="rounded-card border border-ink/10 bg-white p-8 text-sm text-steel shadow-sm">Loading payment details…</div></main>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
