import { NextResponse } from "next/server";

export function middleware(request) {
  const token =
    request.cookies.get("next-auth.session-token") || // For local development
    request.cookies.get("__Secure-next-auth.session-token"); // For secure production environments

  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");

  // 🔹 Redirect to "/" if trying to access "/dashboard" without authentication
  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// 🔹 Apply middleware only to the dashboard route
export const config = {
  matcher: ["/dashboard/:path*"], // Protects only the dashboard route
};
