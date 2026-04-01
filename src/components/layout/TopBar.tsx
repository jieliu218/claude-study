"use client";

import Link from "next/link";
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

export function TopBar() {
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
                Claude Code Study
              </SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto h-full pb-8">
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="hidden sm:inline">Claude Code Study</span>
        </Link>

        <div className="flex-1" />

        <nav className="flex items-center gap-1">
          <a
            href="https://docs.anthropic.com/en/docs/claude-code/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-8 px-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            Official Docs
          </a>
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-8 px-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
