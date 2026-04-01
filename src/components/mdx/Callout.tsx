import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<CalloutType, { icon: React.ElementType; className: string; label: string }> = {
  info: {
    icon: Info,
    className: "border-blue-500/30 bg-blue-500/5 text-blue-900 dark:text-blue-200",
    label: "Note",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-900 dark:text-yellow-200",
    label: "Warning",
  },
  tip: {
    icon: Lightbulb,
    className: "border-green-500/30 bg-green-500/5 text-green-900 dark:text-green-200",
    label: "Tip",
  },
  danger: {
    icon: AlertCircle,
    className: "border-red-500/30 bg-red-500/5 text-red-900 dark:text-red-200",
    label: "Danger",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon: Icon, className, label } = config[type];

  return (
    <div className={cn("my-4 flex gap-3 rounded-lg border p-4", className)}>
      <Icon className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
      <div className="min-w-0 text-sm">
        <p className="font-semibold mb-1">{title ?? label}</p>
        <div className="opacity-90">{children}</div>
      </div>
    </div>
  );
}
