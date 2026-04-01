"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Terminal, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarNav } from "./SidebarNav";
import type { Locale, Dictionary } from "@/lib/i18n";

interface TopBarProps {
  lang: Locale;
  dict: Dictionary;
}

function LangSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLang(next: Locale) {
    const withoutLang = pathname.replace(/^\/(en|zh)/, "") || "/";
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
    localStorage.setItem("preferred-lang", next);
    router.push(`/${next}${withoutLang}`);
  }

  return (
    <button
      onClick={() => switchLang(lang === "en" ? "zh" : "en")}
      className="inline-flex items-center h-8 px-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors border border-border"
      aria-label="Switch language"
    >
      {lang === "en" ? "中文" : "English"}
    </button>
  );
}

export function TopBar({ lang, dict }: TopBarProps) {
  const t = dict.topBar;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="px-4 py-3 border-b">
              <SheetTitle className="flex items-center gap-2 text-left">
                <Terminal className="h-5 w-5 text-primary" />
                {t.title}
              </SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto h-full pb-8">
              <SidebarNav lang={lang} dict={dict} />
            </div>
          </SheetContent>
        </Sheet>

        <Link href={`/${lang}`} className="flex items-center gap-2 font-semibold">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="hidden sm:inline">{t.title}</span>
        </Link>

        <div className="flex-1" />

        <nav className="flex items-center gap-2">
          <a
            href="https://docs.anthropic.com/en/docs/claude-code/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center h-8 px-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            {t.officialDocs}
          </a>
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center h-8 px-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            {t.github}
          </a>
          <LangSwitcher lang={lang} />
        </nav>
      </div>
    </header>
  );
}
