"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Close,
  Copy,
  Search,
  Ticket,
} from "@/components/icons";
import { apiRequest } from "@/lib/api";

type TicketRecord = {
  id: string;
  orderId: string;
  ticketCode: string;
  matchName: string;
  venue: string;
  eventDate?: string | null;
  sentAt?: string | null;
  createdAt: string;
  customerName?: string;
  customerEmail?: string;
  itemCategory?: string;
  orderStatus?: string;
};

export default function AdminTicketsPage() {
  const [tickets, setTickets] = useState<TicketRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Gate Scanner state
  const [codeToVerify, setCodeToVerify] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    isValid: boolean;
    status: string;
    message: string;
    ticket?: TicketRecord;
  } | null>(null);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  function loadTickets() {
    setLoading(true);

    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());

    apiRequest<TicketRecord[]>(`/admin/tickets?${params.toString()}`)
      .then((res) => {
        setTickets(res || []);
      })
      .catch((err) => {
        console.warn("Failed to load tickets:", err);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadTickets();
  }, []);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!codeToVerify.trim()) return;

    setVerifying(true);
    setVerificationResult(null);

    try {
      const res = await apiRequest<{
        isValid: boolean;
        status: string;
        message: string;
        ticket?: TicketRecord;
      }>("/admin/tickets/verify", {
        method: "POST",
        body: JSON.stringify({ ticketCode: codeToVerify.trim() }),
      });
      setVerificationResult(res);
    } catch (err) {
      setVerificationResult({
        isValid: false,
        status: "ERROR",
        message: err instanceof Error ? err.message : "Verification request failed.",
      });
    } finally {
      setVerifying(false);
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <h1 className="headline text-2xl text-ink uppercase sm:text-3xl">
            Matchday Tickets & Gate Entry
          </h1>
          <p className="mt-1 text-sm text-steel">
            Real-time ticket scanner, admittance control, and issued ticket audit ledger.
          </p>
        </div>

        <button
          type="button"
          onClick={loadTickets}
          disabled={loading}
          className="eyebrow inline-flex items-center gap-2 rounded-pill border border-gray-300 bg-white px-4 py-2.5 text-[10px] text-ink transition-colors hover:bg-gray-50"
        >
          {loading ? "Syncing…" : "Refresh Ledger"}
        </button>
      </div>

      {/* Gate Entry Scanner Box */}
      <div className="rounded-2xl border border-black/5 bg-brand-deep p-6 md:p-8 text-white shadow-xl">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gold/20 p-2.5 text-gold">
              <Ticket className="h-6 w-6" />
            </div>
            <div>
              <h2 className="headline text-xl uppercase tracking-tight text-white">
                Matchday Gate Scanner
              </h2>
              <p className="text-xs text-white/60">
                Scan or enter the fan's digital e-ticket code to verify admissibility.
              </p>
            </div>
          </div>

          <form onSubmit={handleVerify} className="mt-6 flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[280px]">
              <input
                type="text"
                value={codeToVerify}
                onChange={(e) => setCodeToVerify(e.target.value)}
                placeholder="Enter code (e.g. TKT-928192-4412)"
                className="w-full rounded-control border border-white/20 bg-white/10 px-4 py-3 text-sm font-mono text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={verifying || !codeToVerify.trim()}
              className="eyebrow rounded-control bg-gold px-6 py-3 text-xs font-semibold text-brand-deep transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {verifying ? "Checking…" : "Verify Ticket"}
            </button>
          </form>

          {verificationResult && (
            <div
              className={`mt-6 rounded-2xl p-5 border transition-all ${
                verificationResult.isValid
                  ? "bg-emerald-500/20 text-white border-emerald-500/40"
                  : "bg-rose-500/20 text-white border-rose-500/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full p-2 ${
                    verificationResult.isValid ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                  }`}
                >
                  {verificationResult.isValid ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Close className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="headline text-base uppercase font-semibold">
                    {verificationResult.isValid
                      ? "ENTRY GRANTED — VALID MATCH TICKET"
                      : "ENTRY DENIED — INVALID OR UNPAID TICKET"}
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">{verificationResult.message}</p>
                </div>
              </div>

              {verificationResult.ticket && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10 pt-4 text-xs">
                  <div>
                    <span className="text-white/50 block text-[10px]">Match</span>
                    <span className="font-semibold text-white">{verificationResult.ticket.matchName}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[10px]">Attendee</span>
                    <span className="font-semibold text-white">{verificationResult.ticket.customerName}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[10px]">Seat Tier</span>
                    <span className="font-semibold text-gold">{verificationResult.ticket.itemCategory || "General"}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[10px]">Venue</span>
                    <span className="font-semibold text-white">Samuel Ogbemudia Stadium</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tickets Ledger */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="headline text-lg text-ink uppercase">Issued Tickets Ledger</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              loadTickets();
            }}
            className="relative min-w-[260px]"
          >
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search code or fan name…"
              className="w-full rounded-control border border-gray-200 bg-white pl-10 pr-4 py-2 text-xs text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none shadow-sm"
            />
          </form>
        </div>

        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-100 bg-gray-50/50 text-[11px] text-steel uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Ticket Code</th>
                  <th className="px-5 py-3.5">Match & Venue</th>
                  <th className="px-5 py-3.5">Fan Attendee</th>
                  <th className="px-5 py-3.5">Seat Tier</th>
                  <th className="px-5 py-3.5">Order Status</th>
                  <th className="px-5 py-3.5 text-right">Quick Verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tickets.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-sm text-steel">
                      {loading ? "Loading ticket records…" : "No match tickets issued yet."}
                    </td>
                  </tr>
                )}

                {tickets.map((t) => (
                  <tr key={t.id} className="transition-colors hover:bg-gray-50/75">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-ink text-xs bg-gray-100 px-2 py-1 rounded">
                          {t.ticketCode}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(t.ticketCode)}
                          className="text-steel hover:text-ink transition-colors"
                          title="Copy ticket code"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                        {copiedCode === t.ticketCode && (
                          <span className="text-[10px] text-emerald-600 font-medium">Copied!</span>
                        )}
                      </div>
                      <span className="text-[10px] text-steel block mt-1">
                        Issued {new Date(t.createdAt).toLocaleDateString()}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-semibold text-ink line-clamp-1">{t.matchName}</p>
                      <p className="text-xs text-steel">{t.venue}</p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-medium text-ink">{t.customerName || "Fan"}</p>
                      <p className="text-xs text-steel">{t.customerEmail}</p>
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-semibold text-brand-deep">
                        {t.itemCategory || "Match Ticket"}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize ${
                          t.orderStatus === "paid" || t.orderStatus === "completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {t.orderStatus || "paid"}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => {
                          setCodeToVerify(t.ticketCode);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-ink transition-colors hover:bg-gray-50"
                      >
                        Check-in
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
