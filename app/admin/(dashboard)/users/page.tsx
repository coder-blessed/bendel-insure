"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Close,
  Search,
  Shield,
  User,
  Users,
} from "@/components/icons";
import { apiRequest } from "@/lib/api";

type UserRecord = {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  role: "admin" | "member";
  isActive: boolean;
  isEmailVerified: boolean;
  createdAt: string;
  displayName?: string | null;
  favoritePlayer?: string | null;
  city?: string | null;
  address?: string | null;
  avatarUrl?: string | null;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  function loadUsers() {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (roleFilter !== "all") params.set("role", roleFilter);
    if (searchQuery.trim()) params.set("search", searchQuery.trim());

    apiRequest<UserRecord[]>(`/admin/users?${params.toString()}`)
      .then((res) => {
        setUsers(res || []);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unable to load users.");
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadUsers();
  }, [roleFilter]);

  async function handleRoleChange(userId: string, newRole: "admin" | "member") {
    setUpdatingId(userId);
    setNotice(null);

    try {
      const updated = await apiRequest<UserRecord>(`/admin/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({ role: newRole }),
      });

      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: updated.role } : u))
      );
      setNotice(`User role updated to '${newRole}'.`);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update role.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function handleToggleActive(userId: string, currentActive: boolean) {
    setUpdatingId(userId);
    setNotice(null);

    try {
      const updated = await apiRequest<UserRecord>(`/admin/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({ isActive: !currentActive }),
      });

      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, isActive: updated.isActive } : u))
      );
      setNotice(`User status set to '${!currentActive ? "Active" : "Suspended"}'.`);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update active state.");
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <h1 className="headline text-2xl text-ink uppercase sm:text-3xl">
            Fan Club & User Directory
          </h1>
          <p className="mt-1 text-sm text-steel">
            Manage registered members, email verifications, fan profiles, and administrator roles.
          </p>
        </div>

        <button
          type="button"
          onClick={loadUsers}
          disabled={loading}
          className="eyebrow inline-flex items-center gap-2 rounded-pill border border-gray-300 bg-white px-4 py-2.5 text-[10px] text-ink transition-colors hover:bg-gray-50"
        >
          {loading ? "Refreshing…" : "Refresh Directory"}
        </button>
      </div>

      {notice && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-medium text-emerald-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-600" />
            <span>{notice}</span>
          </div>
          <button onClick={() => setNotice(null)} className="text-emerald-600 hover:text-emerald-900">
            <Close className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loadUsers();
          }}
          className="relative min-w-[260px] flex-1 sm:max-w-xs"
        >
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search name, email, city…"
            className="w-full rounded-control border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2 text-xs text-ink placeholder:text-gray-400 focus:border-brand focus:bg-white focus:outline-none"
          />
        </form>

        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setRoleFilter("all")}
            className={`rounded-control px-3.5 py-2 text-xs font-medium transition-colors ${
              roleFilter === "all" ? "bg-brand text-white" : "bg-gray-100 text-steel hover:text-ink"
            }`}
          >
            All Accounts ({users.length})
          </button>
          <button
            type="button"
            onClick={() => setRoleFilter("admin")}
            className={`rounded-control px-3.5 py-2 text-xs font-medium transition-colors ${
              roleFilter === "admin" ? "bg-brand text-white" : "bg-gray-100 text-steel hover:text-ink"
            }`}
          >
            Admins
          </button>
          <button
            type="button"
            onClick={() => setRoleFilter("member")}
            className={`rounded-control px-3.5 py-2 text-xs font-medium transition-colors ${
              roleFilter === "member" ? "bg-brand text-white" : "bg-gray-100 text-steel hover:text-ink"
            }`}
          >
            Members
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50/50 text-[11px] text-steel uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3.5">Member / Email</th>
                <th className="px-5 py-3.5">Fan Profile</th>
                <th className="px-5 py-3.5">Verification</th>
                <th className="px-5 py-3.5">System Role</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-sm text-steel">
                    {loading ? "Loading fan directory…" : "No users match your criteria."}
                  </td>
                </tr>
              )}

              {users.map((u) => (
                <tr key={u.id} className="transition-colors hover:bg-gray-50/75">
                  {/* Name & Email */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep text-xs font-bold text-gold">
                        {(u.firstName?.[0] || u.email[0]).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-ink">
                          {u.firstName || u.lastName
                            ? `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim()
                            : u.displayName || "Fan Member"}
                        </p>
                        <p className="text-xs text-steel">{u.email}</p>
                        {u.phone && <p className="text-[11px] text-steel">{u.phone}</p>}
                      </div>
                    </div>
                  </td>

                  {/* Profile Details */}
                  <td className="px-5 py-4 text-xs">
                    <p className="font-medium text-ink">
                      City: <span className="text-steel font-normal">{u.city || "Benin City"}</span>
                    </p>
                    {u.favoritePlayer && (
                      <p className="text-steel">
                        Fav Player: <span className="text-brand font-medium">{u.favoritePlayer}</span>
                      </p>
                    )}
                  </td>

                  {/* Verification */}
                  <td className="px-5 py-4">
                    {u.isEmailVerified ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                        <Check className="h-3 w-3 text-emerald-600" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                        Unverified
                      </span>
                    )}
                  </td>

                  {/* Role Selector */}
                  <td className="px-5 py-4">
                    <select
                      value={u.role}
                      disabled={updatingId === u.id}
                      onChange={(e) => handleRoleChange(u.id, e.target.value as "admin" | "member")}
                      className={`rounded-full px-3 py-1 text-xs font-semibold focus:outline-none capitalize border-0 cursor-pointer ${
                        u.role === "admin"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <option value="member">Member</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </td>

                  {/* Active Toggle */}
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      disabled={updatingId === u.id}
                      onClick={() => handleToggleActive(u.id, u.isActive)}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                        u.isActive
                          ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                      }`}
                    >
                      {u.isActive ? "Active" : "Suspended"}
                    </button>
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4 text-right text-xs text-steel font-mono">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
