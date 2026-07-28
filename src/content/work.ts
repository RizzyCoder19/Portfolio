/**
 * Scene Three - Work
 *
 * One featured case study: this portfolio itself.
 * A scroll-driven narrative with chapters.
 */

/** Title - dominant editorial statement. */
export const workTitle = "This Portfolio" as const;

/** Single sentence - what was built. */
export const workSubtitle =
  "A premium digital experience designed and engineered to demonstrate craft at every layer." as const;

export type WorkVisualMode =
  "brief" | "tokens" | "motion" | "accessibility" | "architecture";

export type WorkChapter = {
  id: string;
  heading: string;
  content: string;
  visualLabel: string;
  visualMode: WorkVisualMode;
  /** CSS class for the visual area background / treatment. */
  visualTreatment: string;
};

/** Case study chapters - a visual and concise supporting narrative. */
export const workChapters: readonly WorkChapter[] = [
  {
    id: "challenge",
    heading: "The challenge.",
    content:
      "The brief was to make craft tangible: fewer generic patterns, clearer hierarchy, and interactions with a reason to exist. The site has to demonstrate judgment, not merely describe it.",
    visualLabel: "The brief",
    visualMode: "brief",
    visualTreatment: "bg-gradient-to-br from-primary/[0.03] to-transparent",
  },
  {
    id: "design",
    heading: "The design system.",
    content:
      "Color, type, spacing, and elevation are tokens before they become components. That keeps light and dark mode coherent and gives every page a repeatable visual rhythm.",
    visualLabel: "Token system",
    visualMode: "tokens",
    visualTreatment:
      "bg-gradient-to-bl from-primary/[0.04] via-transparent to-transparent",
  },
  {
    id: "motion",
    heading: "The motion language.",
    content:
      "Motion explains hierarchy and state. The intro, reveals, and scroll behavior share a small easing vocabulary, use compositor-friendly properties, and disappear when reduced motion is requested.",
    visualLabel: "Motion system",
    visualMode: "motion",
    visualTreatment:
      "bg-gradient-to-tr from-primary/[0.03] via-transparent to-transparent",
  },
  {
    id: "accessibility",
    heading: "Accessibility as a constraint.",
    content:
      "Keyboard navigation, visible focus, contrast, semantic landmarks, and reduced motion are part of the baseline. They shape the interaction model instead of arriving as a final pass.",
    visualLabel: "Inclusive defaults",
    visualMode: "accessibility",
    visualTreatment:
      "bg-gradient-to-tl from-primary/[0.04] via-transparent to-transparent",
  },
  {
    id: "engineering",
    heading: "The architecture.",
    content:
      "The application starts with static rendering and strict types, then layers enhancement deliberately. Each dependency has a narrow responsibility; anything that does not improve the experience stays out.",
    visualLabel: "System architecture",
    visualMode: "architecture",
    visualTreatment: "bg-gradient-to-br from-primary/[0.05] to-transparent",
  },
] as const;

/** Engineering choices, with implementation details kept secondary. */
export const workEngineeringDecisions: readonly {
  title: string;
  rationale: string;
  implementation: string;
}[] = [
  {
    title: "Performance-first rendering",
    rationale:
      "Static output keeps the first visit fast and the content dependable before enhancement.",
    implementation: "Next.js 15 · App Router · TypeScript",
  },
  {
    title: "A deliberate motion architecture",
    rationale:
      "Animation has a defined purpose, stays on the compositor, and remains easy to tune as the experience grows.",
    implementation: "Motion · GSAP · Lenis",
  },
  {
    title: "Accessible by default",
    rationale:
      "Reduced motion, focus visibility, landmark structure, and keyboard paths are core interaction requirements.",
    implementation: "Semantic HTML · ARIA · prefers-reduced-motion",
  },
  {
    title: "Responsive system, not one-off screens",
    rationale:
      "A constrained scale lets layouts adapt without losing their intended hierarchy or rhythm.",
    implementation: "Tailwind CSS v4 · fluid tokens",
  },
  {
    title: "Tokens over drift",
    rationale:
      "Semantic color, type, spacing, and elevation decisions stay consistent as the portfolio expands.",
    implementation: "OKLCH CSS variables · shared UI primitives",
  },
];

/** Outcome statement. */
export const workOutcome =
  "A portfolio that makes the engineering visible through the experience itself - without asking the visitor to take the claim on faith." as const;

/** Primary source link. */
export const workLinks: readonly {
  label: string;
  href: string;
  primary: boolean;
}[] = [
  {
    label: "View on GitHub",
    href: "https://github.com/RizzyCoder19/portfolio",
    primary: true,
  },
] as const;
