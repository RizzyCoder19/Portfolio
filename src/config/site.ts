const fallbackSiteUrl = "https://portfolio.example";

function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!value) {
    return fallbackSiteUrl;
  }

  try {
    return new URL(value).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteConfig = {
  name: "Portfolio",
  shortName: "Portfolio",
  description:
    "A personal portfolio for selected work, experiments, and thoughtful digital experiences.",
  url: getSiteUrl(),
  locale: "en_US",
  keywords: [
    "portfolio",
    "creative technology",
    "frontend engineering",
    "design engineering",
  ],
  social: {
    github: "",
    linkedin: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
