"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  calculateOrderTotal,
  deliveryFee,
  formatCurrency,
  getCheckoutItem,
  type CheckoutItem,
  type DeliveryMethod,
} from "@/lib/checkout";

export function CheckoutFlow({
  itemType,
  itemId,
  itemName,
}: {
  itemType: string;
  itemId: string;
  itemName: string;
}) {
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup");
  const [customerName, setCustomerName] = useState("Bendel Supporter");
  const [customerEmail, setCustomerEmail] = useState("supporter@bendelinsurancefc.com");
  const [phone, setPhone] = useState("+234 800 000 0000");
  const [address, setAddress] = useState("4 Stadium Road, Benin City, Edo State");
  const [submitted, setSubmitted] = useState(false);

  const item = useMemo(
    () => getCheckoutItem(itemType, itemId, itemName),
    [itemId, itemName, itemType],
  );

  if (!item) {
    return (
      <div className="rounded-card border border-red-200 bg-red-50 p-6 text-sm text-red-700">
        This purchase item could not be found. Please return to the store or ticket page and try again.
      </div>
    );
  }

  const total = calculateOrderTotal(item, deliveryMethod);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form onSubmit={handleSubmit} className="rounded-card border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <p className="eyebrow text-[10px] text-brand">Secure checkout</p>
          <h2 className="headline mt-2 text-2xl uppercase text-ink">Complete your order</h2>
          <p className="mt-2 text-sm text-steel">
            You must be signed in before purchase. This flow is ready to connect to Paystack when the backend is added.
          </p>
        </div>

        <div className="rounded-card border border-ink/10 bg-smoke p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-[10px] text-steel">Item</p>
              <h3 className="headline mt-1 text-lg text-ink">{item.name}</h3>
              <p className="mt-1 text-xs text-steel">{item.category}</p>
            </div>
            <div className="text-right">
              <p className="headline text-xl text-brand-dark">{formatCurrency(item.price)}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-steel">
            Full name
          </label>
          <input
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            className="w-full rounded-control border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Email
            </label>
            <input
              type="email"
              value={customerEmail}
              onChange={(event) => setCustomerEmail(event.target.value)}
              className="w-full rounded-control border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Phone number
            </label>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-control border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-steel">
            Delivery / collection
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setDeliveryMethod("pickup")}
              className={`rounded-card border p-4 text-left transition-all ${
                deliveryMethod === "pickup"
                  ? "border-brand bg-brand/5 shadow-sm"
                  : "border-ink/10 bg-white hover:border-brand/40"
              }`}
            >
              <span className="headline block text-sm uppercase text-ink">Pick up at Bendel Insurance</span>
              <span className="mt-2 block text-xs text-steel">Collect at the club office / stadium desk.</span>
            </button>
            <button
              type="button"
              onClick={() => setDeliveryMethod("delivery")}
              className={`rounded-card border p-4 text-left transition-all ${
                deliveryMethod === "delivery"
                  ? "border-brand bg-brand/5 shadow-sm"
                  : "border-ink/10 bg-white hover:border-brand/40"
              }`}
            >
              <span className="headline block text-sm uppercase text-ink">Home delivery</span>
              <span className="mt-2 block text-xs text-steel">Additional {formatCurrency(deliveryFee)} charge applies.</span>
            </button>
          </div>
        </div>

        {deliveryMethod === "delivery" ? (
          <div className="mt-6">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Delivery address
            </label>
            <textarea
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              rows={4}
              className="w-full rounded-control border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
            />
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-5">
          <Link href={item.type === "ticket" ? "/tickets" : "/store"} className="text-sm font-medium text-brand hover:text-brand-dark">
            Back to shopping
          </Link>
          <button
            type="submit"
            className="eyebrow rounded-pill bg-brand px-6 py-3 text-[10px] text-white transition-colors hover:bg-brand-dark"
          >
            Pay with Paystack
          </button>
        </div>

        {submitted ? (
          <div className="mt-6 rounded-card border border-green-200 bg-green-50 p-4 text-sm text-green-900">
            Secure checkout prepared for {customerEmail}. Your ticket or order will be verified and emailed once the Paystack backend is connected.
          </div>
        ) : null}
      </form>

      <aside className="rounded-card border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
        <p className="eyebrow text-[10px] text-brand">Order summary</p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between text-sm text-steel">
            <span>{item.name}</span>
            <span>{formatCurrency(item.price)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-steel">
            <span>Delivery method</span>
            <span>{deliveryMethod === "pickup" ? "Pick up" : "Home delivery"}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-steel">
            <span>Delivery fee</span>
            <span>{deliveryMethod === "delivery" ? formatCurrency(deliveryFee) : "₦0"}</span>
          </div>
        </div>

        <div className="mt-6 border-t border-ink/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="headline text-sm uppercase text-ink">Total</span>
            <span className="headline text-2xl text-brand-dark">{formatCurrency(total)}</span>
          </div>
          <p className="mt-3 text-xs text-steel">
            Tickets are sent to the email address supplied. Merchandise orders can be collected in person or delivered to a home address with the added delivery fee.
          </p>
        </div>
      </aside>
    </div>
  );
}
