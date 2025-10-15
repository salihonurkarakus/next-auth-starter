import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const p = req.nextUrl.pathname;

  const needsAuth = p.startsWith("/dashboard") || p.startsWith("/admin");

  if (needsAuth && !token) {
    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", p);
    return NextResponse.redirect(url);
  }
  if (p.startsWith("/admin") && token && (token as any).role !== "admin") {
    return NextResponse.redirect(new URL("/403", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*", "/admin/:path*"] };
