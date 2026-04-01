import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Already has a locale prefix
  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (hasLocale) return NextResponse.next();

  // Detect locale: cookie > Accept-Language header > default
  const cookieLang = req.cookies.get("NEXT_LOCALE")?.value;
  const acceptLang = req.headers.get("accept-language") ?? "";
  const detected =
    locales.find((l) => l === cookieLang) ??
    (acceptLang.toLowerCase().includes("zh") ? "zh" : defaultLocale);

  return NextResponse.redirect(
    new URL(`/${detected}${pathname}`, req.url)
  );
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|public|.*\\..*).*)"],
};
