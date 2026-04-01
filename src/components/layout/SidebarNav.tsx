"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Locale, Dictionary } from "@/lib/i18n";

interface SidebarNavProps {
  lang: Locale;
  dict: Dictionary;
}

type NavItemKey = keyof Dictionary["nav"]["items"];
type SectionKey = keyof Dictionary["nav"]["sections"];

interface NavItem {
  key: NavItemKey;
  href: string;
  badge?: string;
}

const navStructure: Array<{ sectionKey: SectionKey; items: NavItem[] }> = [
  {
    sectionKey: "gettingStarted",
    items: [
      { key: "overview", href: "/overview" },
      { key: "installation", href: "/installation" },
      { key: "quickStart", href: "/quick-start" },
    ],
  },
  {
    sectionKey: "coreConcepts",
    items: [
      { key: "commands", href: "/commands" },
      { key: "configuration", href: "/configuration" },
      { key: "memory", href: "/memory" },
      { key: "hooks", href: "/hooks" },
    ],
  },
  {
    sectionKey: "advanced",
    items: [
      { key: "mcp", href: "/mcp", badge: "New" },
      { key: "workflows", href: "/workflows" },
      { key: "headless", href: "/headless" },
    ],
  },
  {
    sectionKey: "reference",
    items: [
      { key: "settings", href: "/settings" },
      { key: "troubleshooting", href: "/troubleshooting" },
    ],
  },
];

export function SidebarNav({ lang, dict }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="px-3 py-4 space-y-6">
      {navStructure.map((section) => (
        <div key={section.sectionKey}>
          <p className="px-2 mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {dict.nav.sections[section.sectionKey]}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const href = `/${lang}${item.href}`;
              return (
                <li key={item.href}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center justify-between px-2 py-1.5 text-sm rounded-md transition-colors",
                      pathname === href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {dict.nav.items[item.key]}
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs py-0 h-5">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
