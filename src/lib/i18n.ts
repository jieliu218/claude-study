export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export interface Dictionary {
  topBar: {
    title: string;
    officialDocs: string;
    github: string;
  };
  nav: {
    sections: {
      gettingStarted: string;
      coreConcepts: string;
      advanced: string;
      reference: string;
    };
    items: {
      overview: string;
      installation: string;
      quickStart: string;
      commands: string;
      configuration: string;
      memory: string;
      hooks: string;
      mcp: string;
      workflows: string;
      headless: string;
      settings: string;
      troubleshooting: string;
    };
  };
  home: {
    badge: string;
    headline: string;
    subtitle: string;
    getStarted: string;
    commandReference: string;
    whatsInside: string;
    essentialCommands: string;
    installCommand: string;
    features: {
      commands: { title: string; description: string };
      configuration: { title: string; description: string };
      memory: { title: string; description: string };
      hooks: { title: string; description: string };
      mcp: { title: string; description: string };
      workflows: { title: string; description: string };
    };
    quickRef: [string, string][];
  };
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (locale === "zh") {
    return (await import("@/dictionaries/zh")).dict;
  }
  return (await import("@/dictionaries/en")).dict;
}
