import type { Metadata } from "next";
import { AdminMobileNav, AdminSidebar } from "@/components/admin/admin-sidebar";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin",
  },
  /* The dashboard is unlinked from the public site; keep it out of indexes. */
  robots: { index: false, follow: false },
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-1 flex-col bg-smoke lg:flex-row">
      <AdminMobileNav />
      <AdminSidebar />
      <main className="min-w-0 flex-1 px-4 py-8 md:px-8 md:py-10">
        {children}
      </main>
    </div>
  );
}
