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
    <div className="relative min-h-svh bg-smoke lg:pl-60">
      <AdminMobileNav />
      <AdminSidebar />
      <main className="min-w-0 flex-1 px-4 py-8 pt-20 md:px-8 md:py-10 lg:pt-8">
        {children}
      </main>
    </div>
  );
}
