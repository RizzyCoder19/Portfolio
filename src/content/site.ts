export const siteMetadata = {
  locale: "en_US",
  skipLinkLabel: "Skip to content",
  mainContentId: "main-content",
  projectPreviewLabel: "Project Preview",
  caseStudyLabel: "Case Study",
  githubLabel: "GitHub",
} as const;

export const sectionLabels: Record<string, string> = {
  hero: "Introduction",
  about: "About me",
  work: "Work",
  experiments: "Experiments",
  contact: "Contact",
} as const;

export const sectionHeadings: Record<
  string,
  { eyebrow: string; title: string; description: string }
> = {
  experiments: {
    eyebrow: "Experiments",
    title: "Experiments Section",
    description: "Placeholder content for the experiments section.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Section",
    description: "Placeholder content for the contact section.",
  },
} as const;
