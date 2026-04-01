import Link from "next/link";
import {
  Terminal,
  Zap,
  BookOpen,
  Settings,
  GitBranch,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Terminal,
    title: "Commands",
    description: "All CLI commands, flags, and slash commands — with examples.",
    href: "/commands",
    badge: undefined,
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "User-level and project-level settings, environment variables.",
    href: "/configuration",
    badge: undefined,
  },
  {
    icon: BookOpen,
    title: "Memory (CLAUDE.md)",
    description: "How Claude Code reads and writes persistent memory across sessions.",
    href: "/memory",
    badge: undefined,
  },
  {
    icon: Zap,
    title: "Hooks",
    description: "Pre/post lifecycle hooks — automate formatting, linting, and more.",
    href: "/hooks",
    badge: undefined,
  },
  {
    icon: Puzzle,
    title: "MCP Servers",
    description: "Extend Claude Code with Model Context Protocol tool servers.",
    href: "/mcp",
    badge: "New",
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Workflows",
    description: "Orchestrating subagents, parallel tasks, and complex pipelines.",
    href: "/workflows",
    badge: undefined,
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/40 to-background">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Badge variant="secondary" className="mb-4">
            Study Guide
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Master Claude Code
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive reference for Anthropic&apos;s agentic coding CLI —
            commands, configuration, hooks, MCP, and multi-agent workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/overview"
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/80"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/commands"
              className="inline-flex items-center h-9 px-4 rounded-lg border border-border bg-background text-sm font-medium transition-colors hover:bg-muted"
            >
              Command Reference
            </Link>
          </div>

          {/* Quick install */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-lg border bg-muted px-5 py-3 font-mono text-sm">
            <span className="text-muted-foreground select-none">$</span>
            <span>npm install -g @anthropic-ai/claude-code</span>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">What&apos;s inside</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, href, badge }) => (
            <Link key={href} href={href} className="group">
              <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">{title}</CardTitle>
                    </div>
                    {badge && (
                      <Badge variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick ref strip */}
      <section className="border-t bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-lg font-semibold mb-4">Essential commands</h2>
          <div className="grid gap-2 sm:grid-cols-2 font-mono text-sm">
            {[
              ["claude", "Start interactive session"],
              ["claude -p 'prompt'", "Run one-shot (headless)"],
              ["claude --continue", "Resume last conversation"],
              ["/help", "Show available slash commands"],
              ["/memory", "View / edit CLAUDE.md files"],
              ["/mcp", "Manage MCP server connections"],
            ].map(([cmd, desc]) => (
              <div key={cmd} className="flex items-start gap-3 rounded-md border bg-background px-3 py-2">
                <code className="text-primary shrink-0">{cmd}</code>
                <span className="text-muted-foreground text-xs mt-0.5">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
