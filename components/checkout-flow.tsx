"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/auth-context";
import { apiRequest, getStoredAuthToken } from "@/lib/api";
import {
  calculateOrderTotal,
  deliveryFee,
  formatCurrency,
  getCheckoutItem,
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
  const { user, openAuthModal } = useAuth();
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup");
  const [customerName, setCustomerName] = useState("Bendel Supporter");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phone, setPhone] = useState("+234 800 000 0000");
  const [address, setAddress] = useState("4 Stadium Road, Benin City, Edo State");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync user info into form fields when user logs in
  useEffect(() => {
    if (user) {
      if (user.email) setCustomerEmail(user.email);
      if (user.firstName || user.lastName) {
        setCustomerName(`${user.firstName ?? ""} ${user.lastName ?? ""}`.trim());
      }
      if (user.phone) setPhone(user.phone);
    }
  }, [user]);

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!item) {
      setError("This item is unavailable to purchase right now.");
      return;
    }

    const token = getStoredAuthToken();
    if (!token) {
      setError("Please sign in or create an account with your email and password before completing your purchase.");
      openAuthModal("signin");
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("/orders", {
        method: "POST",
        body: JSON.stringify({
          type: item.type,
          itemId: item.id,
          itemName: item.name,
          itemCategory: item.category,
          customerName: customerName || "Bendel Supporter",
          customerEmail: customerEmail || user?.email,
          phone,
          deliveryMethod,
          address: deliveryMethod === "delivery" ? address : null,
          amount: total,
          deliveryFee: deliveryMethod === "delivery" ? deliveryFee : 0,
          paymentReference: `bendel-${item.type}-${Date.now()}`,
          metadata: {
            itemType: item.type,
            itemId: item.id,
            itemName: item.name,
          },
        }),
      });

      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "The checkout request could not be completed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form onSubmit={handleSubmit} className="rounded-card border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <p className="eyebrow text-[10px] text-brand font-bold uppercase tracking-wider">
            Official Checkout
          </p>
          <h2 className="headline mt-2 text-2xl uppercase text-ink">Complete your order</h2>
          <p className="mt-2 text-sm text-steel">
            Orders and tickets are linked to your supporter account and e-receipts are sent automatically via email.
          </p>
        </div>

        {!user && (
          <div className="mb-6 rounded-card border border-gold/40 bg-gold/10 p-4 text-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">
                Supporter Account
              </p>
              <p className="text-xs text-steel mt-0.5">
                Sign in with just your password (or create an account in 10 seconds) to receive your tickets or receipt.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => openAuthModal("signin")}
                className="eyebrow rounded-pill bg-brand px-4 py-2 text-[10px] font-bold text-white transition-colors hover:bg-brand-dark cursor-pointer"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => openAuthModal("signup")}
                className="eyebrow rounded-pill border border-brand/40 bg-white px-4 py-2 text-[10px] font-bold text-brand transition-colors hover:bg-smoke cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

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
            required
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            className="w-full rounded-control border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Email Address (For E-Ticket / Receipt)
            </label>
            <input
              type="email"
              required
              value={customerEmail || user?.email || ""}
              onChange={(event) => setCustomerEmail(event.target.value)}
              className="w-full rounded-control border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Phone number
            </label>
            <input
              required
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
              className={`rounded-card border p-4 text-left transition-all cursor-pointer ${
                deliveryMethod === "pickup"
                  ? "border-brand bg-brand/5 shadow-sm"
                  : "border-ink/10 bg-white hover:border-brand/40"
              }`}
            >
              <span className="headline block text-sm uppercase text-ink">
                {item.type === "ticket" ? "Electronic Ticket (Email)" : "Pick up at Club Desk"}
              </span>
              <span className="mt-2 block text-xs text-steel">
                {item.type === "ticket"
                  ? "Instant e-ticket code sent to your email."
                  : "Collect at the Samuel Ogbemudia Stadium secretariat."}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setDeliveryMethod("delivery")}
              className={`rounded-card border p-4 text-left transition-all cursor-pointer ${
                deliveryMethod === "delivery"
                  ? "border-brand bg-brand/5 shadow-sm"
                  : "border-ink/10 bg-white hover:border-brand/40"
              }`}
            >
              <span className="headline block text-sm uppercase text-ink">Home delivery</span>
              <span className="mt-2 block text-xs text-steel">
                Additional {formatCurrency(deliveryFee)} courier delivery fee.
              </span>
            </button>
          </div>
        </div>

        {deliveryMethod === "delivery" ? (
          <div className="mt-6">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Delivery address
            </label>
            <textarea
              required
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              rows={3}
              placeholder="Full street address in Benin City / Nigeria"
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
            disabled={isSubmitting}
            className="eyebrow rounded-pill bg-brand px-8 py-3.5 text-xs font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? "Processing…" : "Confirm Order"}
          </button>
        </div>

        {error ? (
          <div className="mt-6 rounded-card border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {submitted ? (
          <div className="mt-6 rounded-card border border-green-300 bg-green-50 p-5 text-sm text-green-900">
            <p className="font-bold text-green-950">
              ✓ Order Confirmed Successfully!
            </p>
            <p className="mt-1">
              Your {item.type === "ticket" ? "match ticket" : "order receipt"} has been registered for <strong>{customerEmail || user?.email}</strong>. A confirmation email has been dispatched to your inbox from <span className="font-semibold text-brand">admin@bendelinsurancefootball.com</span>.
            </p>
          </div>
        ) : null}
      </form>

      <aside className="rounded-card border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
        <p className="eyebrow text-[10px] text-brand font-bold uppercase tracking-wider">
          Order summary
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between text-sm text-steel">
            <span>{item.name}</span>
            <span className="font-medium text-ink">{formatCurrency(item.price)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-steel">
            <span>Delivery method</span>
            <span className="font-medium text-ink">{deliveryMethod === "pickup" ? "Pick up" : "Home delivery"}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-steel">
            <span>Delivery fee</span>
            <span className="font-medium text-ink">{deliveryMethod === "delivery" ? formatCurrency(deliveryFee) : "₦0"}</span>
          </div>
        </div>

        <div className="mt-6 border-t border-ink/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="headline text-sm uppercase text-ink">Total</span>
            <span className="headline text-2xl text-brand-dark">{formatCurrency(total)}</span>
          </div>
          <p className="mt-3 text-xs text-steel leading-relaxed">
            Match tickets are sent electronically to your verified email. Official store merchandise can be collected in person at Samuel Ogbemudia Stadium or shipped to your address.
          </p>
        </div>
      </aside>
    </div>
  );
}
