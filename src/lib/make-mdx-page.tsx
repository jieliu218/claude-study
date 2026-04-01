import { locales, type Locale } from "@/lib/i18n";

type MdxModule = { default: React.ComponentType };

export function makeMdxPage(
  loadEn: () => Promise<MdxModule>,
  loadZh: () => Promise<MdxModule>
) {
  async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = (locales.includes(lang as Locale) ? lang : "en") as Locale;
    const mod = await (locale === "zh" ? loadZh() : loadEn());
    const Content = mod.default;
    return <Content />;
  }

  Page.generateStaticParams = () =>
    locales.map((lang) => ({ lang }));

  return Page;
}
