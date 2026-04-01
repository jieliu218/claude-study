import { SidebarNav } from "@/components/layout/SidebarNav";
import { getDictionary, locales, type Locale } from "@/lib/i18n";

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : "en") as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-1 max-w-6xl mx-auto w-full px-4">
      <aside className="hidden md:block w-60 shrink-0 border-r sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
        <SidebarNav lang={locale} dict={dict} />
      </aside>
      <main className="flex-1 min-w-0 px-6 py-8 max-w-3xl">
        {children}
      </main>
    </div>
  );
}
