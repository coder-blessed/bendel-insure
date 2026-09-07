"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type LoginState = { error?: string } | undefined;

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("bendel_admin_token");

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const supabase = await createSupabaseServerClient();
      await supabase.auth.signOut();
    }
  } catch (err) {
    console.warn("Supabase signout skipped:", err);
  }

  redirect("/admin/login");
}
