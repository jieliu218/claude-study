export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/overview" },
      { title: "Installation", href: "/installation" },
      { title: "Quick Start", href: "/quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Commands & Slash Commands", href: "/commands" },
      { title: "Configuration", href: "/configuration" },
      { title: "Memory (CLAUDE.md)", href: "/memory" },
      { title: "Hooks", href: "/hooks" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "MCP Servers", href: "/mcp", badge: "New" },
      { title: "Multi-Agent Workflows", href: "/workflows" },
      { title: "Headless & CI Mode", href: "/headless" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Settings Reference", href: "/settings" },
      { title: "Troubleshooting", href: "/troubleshooting" },
    ],
  },
];
