import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/**
 * ONE canonical host.
 *
 * The same app answers on growcord.in, growcord.com and their www variants. With no redirect and
 * no canonical tag Google saw two (or four) copies of every page and split the brand between them 
 * and growcord.com also carries the older WordPress site's history and a different address. Every
 * alias host now permanently (308) redirects to https://growcord.in with the path and query kept,
 * so links, ads and old bookmarks land on the one host that ranks.
 *
 * localhost, preview hosts and anything unrecognised pass through untouched  this can never loop.
 */
const CANONICAL = new URL(SITE.url);
const ALIASES = new Set(SITE.aliasHosts);
const GROWSHIP_HOSTS = new Set(["growship.in", "www.growship.in"]);
const PUBLIC_FILE = /\.[^/]+$/;

export function proxy(req) {
  const forwarded = req.headers.get("x-forwarded-host");
  const host = (forwarded || req.headers.get("host") || "").split(",")[0].trim().toLowerCase().replace(/:\d+$/, "");
  if (GROWSHIP_HOSTS.has(host) && !PUBLIC_FILE.test(req.nextUrl.pathname) && !req.nextUrl.pathname.startsWith("/api/")) {
    // A rewrite is evaluated by the proxy again. This marker is internal only;
    // it never appears in the browser URL and prevents an internal-route loop.
    if (req.nextUrl.searchParams.has("__growship_internal")) return NextResponse.next();
    // GrowShip is hosted in this Next app but has its own public domain. Keep
    // its external URLs clean while resolving them to the internal route tree.
    if (req.nextUrl.pathname === "/growship" || req.nextUrl.pathname.startsWith("/growship/")) {
      const cleanPath = req.nextUrl.pathname === "/growship" ? "/" : req.nextUrl.pathname.slice("/growship".length);
      return NextResponse.redirect(new URL(cleanPath + req.nextUrl.search, req.url), 308);
    }
    const targetPath = req.nextUrl.pathname === "/" ? "/growship" : `/growship${req.nextUrl.pathname}`;
    const target = new URL(targetPath + req.nextUrl.search, req.url);
    target.searchParams.set("__growship_internal", "1");
    return NextResponse.rewrite(target);
  }
  if (!ALIASES.has(host)) return NextResponse.next();

  const target = new URL(req.nextUrl.pathname + req.nextUrl.search, CANONICAL);
  return NextResponse.redirect(target, 308);
}

export const config = {
  matcher: ["/((?!_next/).*)"],
};
