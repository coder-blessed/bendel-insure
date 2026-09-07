import { type NextRequest, NextResponse } from "next/server";
import { createSupabaseProxyClient } from "@/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pass-through: not an admin route
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  // Check custom backend admin token cookie
  const adminTokenCookie = request.cookies.get("bendel_admin_token")?.value;

  // Refresh Supabase session (if configured)
  let supabaseUser = null;
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const supabase = createSupabaseProxyClient(request, response);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      supabaseUser = user;
    }
  } catch (err) {
    console.warn("Supabase proxy check skipped/failed:", err);
  }

  const isAuthenticated = Boolean(supabaseUser || adminTokenCookie);
  const isLoginPage = pathname === "/admin/login";

  // Unauthenticated → redirect to login
  if (!isAuthenticated && !isLoginPage) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Already authenticated → redirect away from login to overview
  if (isAuthenticated && isLoginPage) {
    const dashboardUrl = new URL("/admin", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static  (static assets)
     * - _next/image   (image optimisation)
     * - favicon.ico
     * - public assets (*.png, *.svg, etc.)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
