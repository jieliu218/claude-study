import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { getDictionary, locales, type Locale } from "@/lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh";
  return {
    title: isZh ? "Claude Code 学习指南" : "Claude Code Study",
    description: isZh
      ? "Anthropic 智能编程 CLI 的完整参考手册"
      : "A comprehensive study guide for Claude Code — Anthropic's CLI for Claude.",
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : "en") as Locale;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TopBar lang={locale} dict={dict} />
        {children}
      </body>
    </html>
  );
}
