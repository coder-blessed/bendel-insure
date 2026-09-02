"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

export default function LoginPage() {
  const { user, openAuthModal } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/account");
    } else {
      openAuthModal("signin");
    }
  }, [user, openAuthModal, router]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-brand-deep text-white">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
        <p className="mt-4 text-sm text-white/80">Opening Supporter Sign In…</p>
      </div>
    </div>
  );
}
