"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Close,
  FileText,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Ticket,
  Users,
} from "@/components/icons";
import { API_BASE_URL, apiRequest, getStoredAuthToken } from "@/lib/api";

type OverviewStats = {
  kpis: {
    totalRevenue: number;
    ticketRevenue: number;
    merchRevenue: number;
    totalOrders: number;
    pendingOrders: number;
    paidOrders: number;
    completedOrders: number;
    cancelledOrders: number;
    ticketOrdersCount: number;
    merchOrdersCount: number;
    totalTicketsIssued: number;
    totalUsers: number;
    totalMembers: number;
    verifiedMembers: number;
    adminCount: number;
  };
  recentOrders: Array<{
    id: string;
    type: "ticket" | "merch";
    itemName: string;
    customerName: string;
    customerEmail: string;
    amount: string;
    status: "pending" | "paid" | "processing" | "completed" | "cancelled";
    createdAt: string;
  }>;
  recentUsers: Array<{
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    role: string;
    isEmailVerified: boolean;
    createdAt: string;
  }>;
};

export default function AdminOverviewPage() {
  const [data, setData] = useState<OverviewStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Quick gate verification state
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyResult, setVerifyResult] = useState<{
    isValid: boolean;
    message: string;
    ticket?: {
      matchName?: string;
      customerName?: string;
      seatTier?: string;
      ticketCode?: string;
      orderStatus?: string;
    };
  } | null>(null);

  function loadStats() {
    setLoading(true);
    setError(null);

    apiRequest<OverviewStats>("/admin/stats")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.warn("Error fetching admin stats:", err);
        setError(err instanceof Error ? err.message : "Unable to load dashboard data.");
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadStats();
  }, []);

  async function handleQuickVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!verifyCode.trim()) return;

    setVerifyLoading(true);
    setVerifyResult(null);

    try {
      const res = await apiRequest<{
        isValid: boolean;
        message: string;
        ticket?: any;
      }>("/admin/tickets/verify", {
        method: "POST",
        body: JSON.stringify({ ticketCode: verifyCode.trim() }),
      });
      setVerifyResult(res);
    } catch (err) {
      setVerifyResult({
        isValid: false,
        message: err instanceof Error ? err.message : "Verification failed.",
      });
    } finally {
      setVerifyLoading(false);
    }
  }

  const formatNaira = (val: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
      case "completed":
        return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20";
      case "pending":
        return "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20";
      case "processing":
        return "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20";
      case "cancelled":
        return "bg-rose-50 text-rose-700 ring-1 ring-rose-600/20";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <h1 className="headline text-2xl text-ink uppercase sm:text-3xl">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-steel">
            Real-time operations, ticketing, merchandise orders, and fan club management.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={loadStats}
            disabled={loading}
            className="eyebrow inline-flex items-center gap-2 rounded-pill border border-gray-300 bg-white px-4 py-2.5 text-[10px] text-ink transition-colors hover:bg-gray-50 disabled:opacity-50"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                loading ? "animate-ping bg-gold" : "bg-emerald-500"
              }`}
            />
            {loading ? "Refreshing…" : "Sync Live Data"}
          </button>

          <Link
            href="/admin/posts/new"
            className="eyebrow inline-flex items-center gap-2 rounded-pill bg-brand px-4 py-2.5 text-[10px] text-white transition-colors hover:bg-brand-dark"
          >
            <Plus className="h-3.5 w-3.5" />
            New Post
          </Link>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <p className="font-semibold">Notice: Backend synchronization</p>
          <p className="mt-1 text-xs">{error}</p>
          <p className="mt-2 text-xs text-amber-700">
            Ensure <code className="rounded bg-amber-100 px-1">bendel-backend</code> is running on port 4000.
          </p>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Revenue */}
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-[10px] text-steel">Gross Revenue</span>
            <div className="rounded-full bg-gold/20 p-2 text-brand-deep">
              <ShoppingBag className="h-4 w-4" />
            </div>
          </div>
          <p className="headline mt-4 text-2xl text-ink">
            {formatNaira(data?.kpis.totalRevenue ?? 0)}
          </p>
          <div className="mt-3 flex items-center justify-between text-xs text-steel border-t border-gray-100 pt-3">
            <span>Tickets: {formatNaira(data?.kpis.ticketRevenue ?? 0)}</span>
            <span>Merch: {formatNaira(data?.kpis.merchRevenue ?? 0)}</span>
          </div>
        </div>

        {/* Total Orders */}
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-[10px] text-steel">Total Orders</span>
            <div className="rounded-full bg-brand/10 p-2 text-brand">
              <ShoppingBag className="h-4 w-4" />
            </div>
          </div>
          <p className="headline mt-4 text-2xl text-ink">
            {data?.kpis.totalOrders ?? 0}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs border-t border-gray-100 pt-3">
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 font-medium">
              {data?.kpis.paidOrders ?? 0} Paid
            </span>
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-700 font-medium">
              {data?.kpis.pendingOrders ?? 0} Pending
            </span>
          </div>
        </div>

        {/* Match Tickets */}
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-[10px] text-steel">Match Tickets Issued</span>
            <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">
              <Ticket className="h-4 w-4" />
            </div>
          </div>
          <p className="headline mt-4 text-2xl text-ink">
            {data?.kpis.totalTicketsIssued ?? 0}
          </p>
          <div className="mt-3 flex items-center justify-between text-xs text-steel border-t border-gray-100 pt-3">
            <span>Samuel Ogbemudia Stadium</span>
            <Link href="/admin/tickets" className="font-medium text-brand hover:underline">
              Verify gate →
            </Link>
          </div>
        </div>

        {/* Fan Club Members */}
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-[10px] text-steel">Registered Fans</span>
            <div className="rounded-full bg-purple-50 p-2 text-purple-600">
              <Users className="h-4 w-4" />
            </div>
          </div>
          <p className="headline mt-4 text-2xl text-ink">
            {data?.kpis.totalUsers ?? 0}
          </p>
          <div className="mt-3 flex items-center justify-between text-xs text-steel border-t border-gray-100 pt-3">
            <span>{data?.kpis.verifiedMembers ?? 0} Verified accounts</span>
            <Link href="/admin/users" className="font-medium text-brand hover:underline">
              Manage →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Split: Left (Recent Orders) & Right (Gate Tool & Members) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left 2 Cols: Recent Orders */}
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="headline text-lg text-ink uppercase">Recent Orders</h2>
              <p className="text-xs text-steel">Match tickets & jersey purchases</p>
            </div>
            <Link
              href="/admin/orders"
              className="eyebrow inline-flex items-center gap-1.5 text-[10px] text-brand hover:text-brand-dark"
            >
              View all orders <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-100 bg-gray-50/50 text-[11px] text-steel uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-3">Order Details</th>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Amount</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {(!data?.recentOrders || data.recentOrders.length === 0) && (
                    <tr>
                      <td colSpan={5} className="px-5 py-12 text-center text-sm text-steel">
                        {loading ? "Loading orders…" : "No orders found in database."}
                      </td>
                    </tr>
                  )}

                  {data?.recentOrders.map((order) => (
                    <tr key={order.id} className="transition-colors hover:bg-gray-50/75">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                              order.type === "ticket"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {order.type}
                          </span>
                          <span className="font-medium text-ink line-clamp-1">
                            {order.itemName}
                          </span>
                        </div>
                        <span className="text-[11px] text-steel font-mono mt-0.5 block">
                          #{order.id.slice(0, 8)} • {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-ink">{order.customerName}</p>
                        <p className="text-xs text-steel">{order.customerEmail}</p>
                      </td>
                      <td className="px-5 py-4 font-semibold text-ink">
                        {formatNaira(parseFloat(order.amount) || 0)}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <Link
                          href={`/admin/orders?id=${order.id}`}
                          className="rounded-lg border border-gray-200 px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:bg-gray-50"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Matchday Gate Verifier & Recent Members */}
        <div className="space-y-6">
          {/* Quick Gate Check Widget */}
          <div className="rounded-2xl border border-black/5 bg-brand-deep p-6 text-white shadow-sm">
            <div className="flex items-center gap-2.5">
              <Ticket className="h-5 w-5 text-gold" />
              <h2 className="headline text-base uppercase text-white">
                Gate Entry Verification
              </h2>
            </div>
            <p className="mt-1 text-xs text-white/60">
              Validate fan ticket code for admission at Samuel Ogbemudia Stadium.
            </p>

            <form onSubmit={handleQuickVerify} className="mt-4 flex gap-2">
              <input
                type="text"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                placeholder="e.g. TKT-782910-3341"
                className="w-full rounded-control border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                disabled={verifyLoading || !verifyCode.trim()}
                className="eyebrow shrink-0 rounded-control bg-gold px-4 py-2.5 text-[10px] font-semibold text-brand-deep transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {verifyLoading ? "Checking…" : "Verify"}
              </button>
            </form>

            {verifyResult && (
              <div
                className={`mt-4 rounded-xl p-3.5 text-xs ${
                  verifyResult.isValid
                    ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30"
                    : "bg-rose-500/20 text-rose-200 border border-rose-500/30"
                }`}
              >
                <div className="flex items-center gap-2 font-semibold">
                  {verifyResult.isValid ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Close className="h-4 w-4 text-rose-400" />
                  )}
                  <span>{verifyResult.isValid ? "TICKET VALID — ENTRY APPROVED" : "VALIDATION FAILED"}</span>
                </div>
                <p className="mt-1.5 text-[11px] opacity-90">{verifyResult.message}</p>
                {verifyResult.ticket && (
                  <div className="mt-2 text-[11px] border-t border-white/10 pt-2 space-y-0.5">
                    <p><span className="text-white/50">Match:</span> {verifyResult.ticket.matchName}</p>
                    <p><span className="text-white/50">Attendee:</span> {verifyResult.ticket.customerName}</p>
                    <p><span className="text-white/50">Tier:</span> {verifyResult.ticket.seatTier}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Recent Members */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h2 className="headline text-base text-ink uppercase">Recent Fans</h2>
                <p className="text-xs text-steel">Registered fan profiles</p>
              </div>
              <Link href="/admin/users" className="eyebrow text-[10px] text-brand hover:underline">
                All Users →
              </Link>
            </div>

            <div className="mt-4 divide-y divide-gray-100">
              {(!data?.recentUsers || data.recentUsers.length === 0) && (
                <p className="py-6 text-center text-xs text-steel">No registered fans yet.</p>
              )}

              {data?.recentUsers.map((u) => (
                <div key={u.id} className="flex items-center justify-between py-3">
                  <div className="min-w-0 pr-2">
                    <p className="font-medium text-sm text-ink truncate">
                      {u.firstName || u.lastName
                        ? `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim()
                        : u.email}
                    </p>
                    <p className="text-xs text-steel truncate">{u.email}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${
                        u.role === "admin"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {u.role}
                    </span>
                    {u.isEmailVerified && (
                      <span className="h-2 w-2 rounded-full bg-emerald-500" title="Verified email" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
