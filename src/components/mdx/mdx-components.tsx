import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-mt-20 text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2 id={id} className="scroll-mt-20 text-2xl font-semibold tracking-tight mt-10 mb-3 border-b pb-2">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} className="scroll-mt-20 text-lg font-semibold mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-3 leading-7 text-foreground/80">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="my-3 ml-4 list-disc space-y-1 text-foreground/80">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-3 ml-4 list-decimal space-y-1 text-foreground/80">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    code: ({ children, className }) => {
      if (className) {
        return <CodeBlock className={className}>{children as string}</CodeBlock>;
      }
      return (
        <code className="relative rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
          {children}
        </code>
      );
    },
    pre: ({ children }) => <>{children}</>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-primary/40 pl-4 italic text-foreground/70">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 text-left font-semibold">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-foreground/80">{children}</td>
    ),
    hr: () => <hr className="my-8 border-border" />,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-4 hover:no-underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    Callout,
    ...components,
  };
}
