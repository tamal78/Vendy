import { NextResponse } from "next/server";

export function middleware(request) {
  const token =
    request.cookies.get("next-auth.session-token") || // For local development
    request.cookies.get("__Secure-next-auth.session-token"); // For secure production environments

  const isDashboardPage = request.nextUrl.pathname.startsWith("/vendors");

  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/vendors/:path*"],
};
