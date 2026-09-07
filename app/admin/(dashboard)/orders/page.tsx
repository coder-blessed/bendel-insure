"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Close,
  Filter,
  Search,
  ShoppingBag,
  Ticket,
} from "@/components/icons";
import { apiRequest } from "@/lib/api";

type OrderItem = {
  id: string;
  userId?: string | null;
  type: "ticket" | "merch";
  itemId: string;
  itemName: string;
  itemCategory: string;
  customerName: string;
  customerEmail: string;
  phone: string;
  deliveryMethod: "pickup" | "delivery";
  address?: string | null;
  amount: string;
  deliveryFee: string;
  paymentReference?: string | null;
  squadTransactionId?: string | null;
  status: "pending" | "paid" | "processing" | "completed" | "cancelled";
  metadata?: any;
  createdAt: string;
  updatedAt: string;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Selected order for details modal
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  function loadOrders() {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (selectedType !== "all") params.set("type", selectedType);
    if (selectedStatus !== "all") params.set("status", selectedStatus);
    if (searchQuery.trim()) params.set("search", searchQuery.trim());

    const url = `/admin/orders?${params.toString()}`;

    apiRequest<OrderItem[]>(url)
      .then((res) => {
        setOrders(res || []);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unable to load orders.");
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadOrders();
  }, [selectedType, selectedStatus]);

  async function handleStatusChange(orderId: string, newStatus: OrderItem["status"]) {
    setUpdatingId(orderId);
    setActionNotice(null);

    try {
      const updated = await apiRequest<OrderItem>(`/admin/orders/${orderId}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });

      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: updated.status } : o))
      );
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder((prev) => (prev ? { ...prev, status: updated.status } : null));
      }
      setActionNotice(`Order #${orderId.slice(0, 8)} updated to '${newStatus}'.`);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update order status.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function handleResendEmail(orderId: string) {
    setUpdatingId(orderId);
    setActionNotice(null);

    try {
      await apiRequest(`/admin/orders/${orderId}/resend-email`, {
        method: "POST",
      });
      setActionNotice(`Email notification dispatched successfully for order #${orderId.slice(0, 8)}.`);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to resend email.");
    } finally {
      setUpdatingId(null);
    }
  }

  const formatNaira = (val: string | number) => {
    const num = typeof val === "string" ? parseFloat(val) : val;
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(num || 0);
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <h1 className="headline text-2xl text-ink uppercase sm:text-3xl">
            Orders & Purchases
          </h1>
          <p className="mt-1 text-sm text-steel">
            Manage matchday ticket bookings, jersey orders, delivery logistics, and status.
          </p>
        </div>

        <button
          type="button"
          onClick={loadOrders}
          disabled={loading}
          className="eyebrow inline-flex items-center gap-2 rounded-pill border border-gray-300 bg-white px-4 py-2.5 text-[10px] text-ink transition-colors hover:bg-gray-50"
        >
          {loading ? "Refreshing…" : "Refresh Orders"}
        </button>
      </div>

      {actionNotice && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-medium text-emerald-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-600" />
            <span>{actionNotice}</span>
          </div>
          <button onClick={() => setActionNotice(null)} className="text-emerald-600 hover:text-emerald-900">
            <Close className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Filters & Search Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loadOrders();
          }}
          className="relative min-w-[260px] flex-1 sm:max-w-xs"
        >
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search customer, item, ref…"
            className="w-full rounded-control border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2 text-xs text-ink placeholder:text-gray-400 focus:border-brand focus:bg-white focus:outline-none"
          />
        </form>

        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          {/* Type Filter */}
          <div className="flex rounded-control border border-gray-200 p-1 bg-gray-50/50">
            <button
              type="button"
              onClick={() => setSelectedType("all")}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                selectedType === "all" ? "bg-white text-ink shadow-sm" : "text-steel hover:text-ink"
              }`}
            >
              All Types
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("ticket")}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                selectedType === "ticket" ? "bg-white text-ink shadow-sm" : "text-steel hover:text-ink"
              }`}
            >
              Tickets
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("merch")}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                selectedType === "merch" ? "bg-white text-ink shadow-sm" : "text-steel hover:text-ink"
              }`}
            >
              Merchandise
            </button>
          </div>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-control border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-ink font-medium focus:border-brand focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50/50 text-[11px] text-steel uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3.5">Order / Item</th>
                <th className="px-5 py-3.5">Customer</th>
                <th className="px-5 py-3.5">Logistics</th>
                <th className="px-5 py-3.5">Amount</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-sm text-steel">
                    {loading ? "Loading orders from backend…" : "No matching orders found."}
                  </td>
                </tr>
              )}

              {orders.map((order) => (
                <tr key={order.id} className="transition-colors hover:bg-gray-50/75">
                  {/* Order & Item */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                          order.type === "ticket"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.type}
                      </span>
                      <span className="font-semibold text-ink line-clamp-1">{order.itemName}</span>
                    </div>
                    <p className="mt-1 text-xs text-steel font-mono">
                      #{order.id.slice(0, 8)} • {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </td>

                  {/* Customer */}
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{order.customerName}</p>
                    <p className="text-xs text-steel">{order.customerEmail}</p>
                    <p className="text-xs text-steel">{order.phone}</p>
                  </td>

                  {/* Logistics */}
                  <td className="px-5 py-4 text-xs">
                    <span className="font-medium capitalize text-ink">
                      {order.deliveryMethod === "pickup" ? "Stadium Pickup" : "Door Delivery"}
                    </span>
                    {order.address && (
                      <p className="mt-0.5 text-steel line-clamp-1 max-w-xs">{order.address}</p>
                    )}
                  </td>

                  {/* Amount */}
                  <td className="px-5 py-4">
                    <p className="font-semibold text-ink">{formatNaira(order.amount)}</p>
                    {parseFloat(order.deliveryFee) > 0 && (
                      <span className="text-[11px] text-steel">
                        + {formatNaira(order.deliveryFee)} delivery
                      </span>
                    )}
                  </td>

                  {/* Status Dropdown */}
                  <td className="px-5 py-4">
                    <select
                      value={order.status}
                      disabled={updatingId === order.id}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value as OrderItem["status"])
                      }
                      className={`rounded-full px-3 py-1 text-xs font-semibold focus:outline-none capitalize border-0 cursor-pointer ${getStatusColor(
                        order.status
                      )}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-right space-x-2">
                    <button
                      type="button"
                      onClick={() => setSelectedOrder(order)}
                      className="rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-ink transition-colors hover:bg-gray-50"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      disabled={updatingId === order.id}
                      onClick={() => handleResendEmail(order.id)}
                      className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-steel transition-colors hover:bg-gray-200 hover:text-ink disabled:opacity-50"
                      title="Resend confirmation email to customer"
                    >
                      Resend Mail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="headline text-lg text-ink uppercase">Order Details</h3>
                <p className="text-xs text-steel font-mono">ID: {selectedOrder.id}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-full p-2 text-steel hover:bg-gray-100 hover:text-ink"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl bg-gray-50 p-3.5 space-y-1">
                <span className="eyebrow text-[9px] text-steel">Customer</span>
                <p className="font-semibold text-sm text-ink">{selectedOrder.customerName}</p>
                <p className="text-steel">{selectedOrder.customerEmail}</p>
                <p className="text-steel">{selectedOrder.phone}</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3.5 space-y-1">
                <span className="eyebrow text-[9px] text-steel">Item & Type</span>
                <p className="font-semibold text-sm text-ink">{selectedOrder.itemName}</p>
                <p className="capitalize text-steel">Type: {selectedOrder.type}</p>
                <p className="text-steel">Category: {selectedOrder.itemCategory}</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3.5 space-y-1">
                <span className="eyebrow text-[9px] text-steel">Logistics</span>
                <p className="font-semibold text-ink capitalize">
                  {selectedOrder.deliveryMethod === "pickup" ? "Stadium Pickup" : "Door Delivery"}
                </p>
                <p className="text-steel">{selectedOrder.address || "Samuel Ogbemudia Stadium Club Store"}</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3.5 space-y-1">
                <span className="eyebrow text-[9px] text-steel">Payment & Status</span>
                <p className="font-semibold text-sm text-ink">{formatNaira(selectedOrder.amount)}</p>
                <p className="text-steel font-mono">Ref: {selectedOrder.paymentReference || "N/A"}</p>
                <span
                  className={`inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize ${getStatusColor(
                    selectedOrder.status
                  )}`}
                >
                  {selectedOrder.status}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <button
                type="button"
                onClick={() => handleResendEmail(selectedOrder.id)}
                className="eyebrow inline-flex items-center gap-2 rounded-control bg-gray-100 px-4 py-2.5 text-[10px] text-ink transition-colors hover:bg-gray-200"
              >
                Resend Notification Email
              </button>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="eyebrow rounded-control bg-brand px-5 py-2.5 text-[10px] text-white hover:bg-brand-dark"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
