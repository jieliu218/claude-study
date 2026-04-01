"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "@/lib/nav";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="px-3 py-4 space-y-6">
      {navSections.map((section) => (
        <div key={section.title}>
          <p className="px-2 mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-2 py-1.5 text-sm rounded-md transition-colors",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.title}
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs py-0 h-5">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
