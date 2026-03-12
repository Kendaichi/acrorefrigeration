import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { canAccess, type UserProfile } from "@/lib/rbac";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const pathname = request.nextUrl.pathname;
  const isLoginPath = pathname === "/admin/login";

  const redirect = (dest: string) => {
    const url = request.nextUrl.clone();
    url.pathname = dest;
    const res = NextResponse.redirect(url);
    res.headers.set("x-pathname", dest);
    return res;
  };

  // Not logged in → redirect to login
  if (!user && !isLoginPath) return redirect("/admin/login");

  // Logged in + on login page → redirect to admin home
  if (user && isLoginPath) return redirect("/admin/home");

  // Logged in — check role-based access
  if (user && !isLoginPath) {
    const { data: profile } = await supabase
      .from("user_profiles")
      .select("user_id, role, permissions")
      .eq("user_id", user.id)
      .single();

    const userProfile = profile as UserProfile | null;

    // No profile yet → treat as admin (first-time setup)
    if (!userProfile) {
      supabaseResponse.headers.set("x-pathname", pathname);
      return supabaseResponse;
    }

    if (!canAccess(userProfile, pathname)) {
      return redirect("/admin/profile");
    }
  }

  supabaseResponse.headers.set("x-pathname", pathname);
  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*"],
};
