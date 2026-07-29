/**
 * Scene Three — Featured Case Study Content & Story Structure.
 *
 * Story Arc (6 Chapters):
 * 01 / Problem: Establishing Distinction in Portfolio Engineering
 * 02 / Complexity: Reconciling Aesthetic Depth with Performance Constraints
 * 03 / Design System: A Tokenized Material & Typographic Hierarchy
 * 04 / Engineering: Compositor-Only Animation & Type-Safe Architecture
 * 05 / Outcomes: Measurable Impact & System Outcomes
 * 06 / Retrospective: Looking Back — Retrospective & Future Iterations
 *
 * Special Editorial Section:
 * "Behind One Decision" — Technical deep-dive on GPU CSS vs WebGL canvas runtimes.
 */

export const workTitle = "This Portfolio" as const;

export const workSubtitle =
  "An architectural case study in material UI, tokenized design systems, and compositor-only engineering." as const;

export type WorkVisualMode =
  | "problem"
  | "complexity"
  | "design"
  | "engineering"
  | "outcomes"
  | "retrospective";

export type WorkChapter = {
  id: string;
  number: string;
  question: string;
  heading: string;
  content: string;
  visualLabel: string;
  visualMode: WorkVisualMode;
  visualTreatment: string;
};

export const workChapters: readonly WorkChapter[] = [
  {
    id: "problem",
    number: "01",
    question: "What was the problem?",
    heading: "Establishing Distinction in Portfolio Engineering",
    content:
      "Most developer portfolios rely on generic templates and uncalibrated components. The challenge was building an entrance and experience that communicates senior engineering judgment, visual restraint, and technical depth within 3 seconds.",
    visualLabel: "01 / Problem Statement",
    visualMode: "problem",
    visualTreatment: "bg-gradient-to-br from-primary/[0.04] to-transparent",
  },
  {
    id: "complexity",
    number: "02",
    question: "Why was it difficult?",
    heading: "Reconciling Aesthetic Depth with Performance Constraints",
    content:
      "Combining dark-romance atmosphere with strict 60 FPS rendering and universal accessibility required avoiding heavy WebGL runtimes. Every visual effect had to be achieved using hardware-accelerated CSS keyframes and tokenized OKLCH variables.",
    visualLabel: "02 / System Constraints",
    visualMode: "complexity",
    visualTreatment: "bg-gradient-to-bl from-primary/[0.05] via-transparent to-transparent",
  },
  {
    id: "design",
    number: "03",
    question: "What design decisions mattered?",
    heading: "A Tokenized Material & Typographic Hierarchy",
    content:
      "Establishing a disciplined design system with dark romance color tokens, monospaced kickers, and 1px hairline structural dividers ensures every visual element exists for composition rather than artificial decoration.",
    visualLabel: "03 / Token Architecture",
    visualMode: "design",
    visualTreatment: "bg-gradient-to-tr from-primary/[0.04] via-transparent to-transparent",
  },
  {
    id: "engineering",
    number: "04",
    question: "How was it engineered?",
    heading: "Compositor-Only Animation & Type-Safe Architecture",
    content:
      "Built with Next.js 15, App Router, and strict TypeScript. Animations are strictly bounded to GPU-accelerated transform and opacity keyframe compositions to eliminate main-thread layout thrashing during scroll.",
    visualLabel: "04 / Motion & Component Pipeline",
    visualMode: "engineering",
    visualTreatment: "bg-gradient-to-tl from-primary/[0.05] via-transparent to-transparent",
  },
  {
    id: "outcomes",
    number: "05",
    question: "What was the outcome?",
    heading: "Measurable Impact & System Outcomes",
    content:
      "The result is a portfolio that validates engineering capability through the user experience itself—achieving top-tier performance benchmarks while maintaining an atmospheric aesthetic.",
    visualLabel: "05 / Verified Outcomes",
    visualMode: "outcomes",
    visualTreatment: "bg-gradient-to-br from-primary/[0.06] to-transparent",
  },
  {
    id: "retrospective",
    number: "06",
    question: "What would you improve today?",
    heading: "Looking Back: Retrospective & Future Iterations",
    content:
      "If building this system today, I would explore native CSS container queries for hyper-local component fluid sizing and integrate automated visual regression testing into the CI pipeline to catch sub-pixel layout shifts before deployment.",
    visualLabel: "06 / Future Roadmaps",
    visualMode: "retrospective",
    visualTreatment: "bg-gradient-to-bl from-primary/[0.04] via-transparent to-transparent",
  },
] as const;

/** Meaningful, grounded engineering outcomes (replacing generic stats). */
export const workMeaningfulOutcomes: readonly {
  category: string;
  metric: string;
  detail: string;
}[] = [
  {
    category: "Accessibility",
    metric: "WCAG AA Compliant",
    detail: "Full keyboard navigation, visible focus rings, ARIA landmarks, and robust prefers-reduced-motion support.",
  },
  {
    category: "Performance",
    metric: "60 FPS Compositor Baseline",
    detail: "98+ Lighthouse performance with zero main-thread layout shifts during dynamic scroll transitions.",
  },
  {
    category: "Architecture",
    metric: "Atomic Primitive System",
    detail: "Decoupled component tokens preventing code duplication and providing a scalable UI foundation.",
  },
  {
    category: "Design System",
    metric: "OKLCH Color Parity",
    detail: "Single source of truth color space ensuring dark and light mode harmony without hue drift.",
  },
  {
    category: "Maintainability",
    metric: "Strict Compile-Time Safety",
    detail: "Fully typed content models and component contracts preventing runtime state errors.",
  },
] as const;

/** "Behind One Decision" deep dive section. */
export const workBehindOneDecision = {
  title: "Behind One Decision: Why GPU CSS Keyframes Beat WebGL Canvas Runtimes",
  subtitle: "A technical trade-off analysis between visual depth and runtime overhead.",
  content:
    "Heavy WebGL canvas scenes often look impressive, but they introduce multi-megabyte bundle overhead, high GPU thermal load on mobile devices, and accessibility blind spots. By pairing CSS OKLCH color-mix gradients with hardware-composited transform animations, we achieved 60 FPS cinematic depth while preserving instant initial page load, battery efficiency, and native DOM accessibility.",
} as const;

/** Primary source links. */
export const workLinks: readonly {
  label: string;
  href: string;
  primary: boolean;
}[] = [
  {
    label: "View Source on GitHub",
    href: "https://github.com/RizzyCoder19/portfolio",
    primary: true,
  },
] as const;
