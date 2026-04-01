export const dict = {
  topBar: {
    title: "Claude Code Study",
    officialDocs: "Official Docs",
    github: "GitHub",
  },
  nav: {
    sections: {
      gettingStarted: "Getting Started",
      coreConcepts: "Core Concepts",
      advanced: "Advanced",
      reference: "Reference",
    },
    items: {
      overview: "Overview",
      installation: "Installation",
      quickStart: "Quick Start",
      commands: "Commands & Slash Commands",
      configuration: "Configuration",
      memory: "Memory (CLAUDE.md)",
      hooks: "Hooks",
      mcp: "MCP Servers",
      workflows: "Multi-Agent Workflows",
      headless: "Headless & CI Mode",
      settings: "Settings Reference",
      troubleshooting: "Troubleshooting",
    },
  },
  home: {
    badge: "Study Guide",
    headline: "Master Claude Code",
    subtitle:
      "A comprehensive reference for Anthropic's agentic coding CLI — commands, configuration, hooks, MCP, and multi-agent workflows.",
    getStarted: "Get Started",
    commandReference: "Command Reference",
    whatsInside: "What's inside",
    essentialCommands: "Essential commands",
    installCommand: "npm install -g @anthropic-ai/claude-code",
    features: {
      commands: {
        title: "Commands",
        description: "All CLI commands, flags, and slash commands — with examples.",
      },
      configuration: {
        title: "Configuration",
        description: "User-level and project-level settings, environment variables.",
      },
      memory: {
        title: "Memory (CLAUDE.md)",
        description: "How Claude Code reads and writes persistent memory across sessions.",
      },
      hooks: {
        title: "Hooks",
        description: "Pre/post lifecycle hooks — automate formatting, linting, and more.",
      },
      mcp: {
        title: "MCP Servers",
        description: "Extend Claude Code with Model Context Protocol tool servers.",
      },
      workflows: {
        title: "Multi-Agent Workflows",
        description: "Orchestrating subagents, parallel tasks, and complex pipelines.",
      },
    },
    quickRef: [
      ["claude", "Start interactive session"],
      ["claude -p 'prompt'", "Run one-shot (headless)"],
      ["claude --continue", "Resume last conversation"],
      ["/help", "Show available slash commands"],
      ["/memory", "View / edit CLAUDE.md files"],
      ["/mcp", "Manage MCP server connections"],
    ] as [string, string][],
  },
} as const;

export type Dict = typeof dict;
