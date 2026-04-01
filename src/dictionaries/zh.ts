export const dict = {
  topBar: {
    title: "Claude Code 学习指南",
    officialDocs: "官方文档",
    github: "GitHub",
  },
  nav: {
    sections: {
      gettingStarted: "入门",
      coreConcepts: "核心概念",
      advanced: "进阶",
      reference: "参考",
    },
    items: {
      overview: "概览",
      installation: "安装",
      quickStart: "快速开始",
      commands: "命令与斜杠命令",
      configuration: "配置",
      memory: "记忆（CLAUDE.md）",
      hooks: "钩子",
      mcp: "MCP 服务器",
      workflows: "多智能体工作流",
      headless: "无头模式与 CI",
      settings: "配置项参考",
      troubleshooting: "故障排查",
    },
  },
  home: {
    badge: "学习指南",
    headline: "掌握 Claude Code",
    subtitle:
      "Anthropic 智能编程 CLI 的完整参考手册 —— 涵盖命令、配置、钩子、MCP 及多智能体工作流。",
    getStarted: "开始学习",
    commandReference: "命令参考",
    whatsInside: "内容概览",
    essentialCommands: "常用命令",
    installCommand: "npm install -g @anthropic-ai/claude-code",
    features: {
      commands: {
        title: "命令",
        description: "所有 CLI 命令、参数和斜杠命令，附带示例。",
      },
      configuration: {
        title: "配置",
        description: "用户级和项目级配置项、环境变量。",
      },
      memory: {
        title: "记忆（CLAUDE.md）",
        description: "Claude Code 如何跨会话读写持久化记忆。",
      },
      hooks: {
        title: "钩子",
        description: "前置/后置生命周期钩子 —— 自动格式化、代码检查等。",
      },
      mcp: {
        title: "MCP 服务器",
        description: "通过模型上下文协议扩展 Claude Code 的工具集。",
      },
      workflows: {
        title: "多智能体工作流",
        description: "编排子智能体、并行任务和复杂流水线。",
      },
    },
    quickRef: [
      ["claude", "启动交互式会话"],
      ["claude -p '提示词'", "无头模式单次执行"],
      ["claude --continue", "恢复上次对话"],
      ["/help", "查看可用斜杠命令"],
      ["/memory", "查看/编辑 CLAUDE.md 文件"],
      ["/mcp", "管理 MCP 服务器连接"],
    ] as [string, string][],
  },
} as const;

export type Dict = typeof dict;
