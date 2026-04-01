import Link from "next/link";
import { Terminal, Zap, BookOpen, Settings, GitBranch, Puzzle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDictionary, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const featureIcons = [Terminal, Settings, BookOpen, Zap, Puzzle, GitBranch];
const featureKeys = ["commands", "configuration", "memory", "hooks", "mcp", "workflows"] as const;
const featureHrefs = ["/commands", "/configuration", "/memory", "/hooks", "/mcp", "/workflows"];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : "en") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.home;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/40 to-background">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Badge variant="secondary" className="mb-4">{t.badge}</Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-4">{t.headline}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{t.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/overview`}
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/80"
            >
              {t.getStarted} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/commands`}
              className="inline-flex items-center h-9 px-4 rounded-lg border border-border bg-background text-sm font-medium transition-colors hover:bg-muted"
            >
              {t.commandReference}
            </Link>
          </div>
          <div className="mt-10 inline-flex items-center gap-3 rounded-lg border bg-muted px-5 py-3 font-mono text-sm">
            <span className="text-muted-foreground select-none">$</span>
            <span>{t.installCommand}</span>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">{t.whatsInside}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i];
            const feature = t.features[key];
            return (
              <Link key={key} href={`/${locale}${featureHrefs[i]}`} className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-base">{feature.title}</CardTitle>
                      </div>
                      {key === "mcp" && (
                        <Badge variant="secondary" className="text-xs">New</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick ref */}
      <section className="border-t bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-lg font-semibold mb-4">{t.essentialCommands}</h2>
          <div className="grid gap-2 sm:grid-cols-2 font-mono text-sm">
            {t.quickRef.map(([cmd, desc]) => (
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
