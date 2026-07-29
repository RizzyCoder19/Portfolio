/**
 * Scene Three — Featured Case Study Content & Story Structure.
 */

export const workTitle = "This Portfolio" as const;

export const workSubtitle =
  "An honest walkthrough of how I built this site, why I chose certain technologies, and what I learned in the process." as const;

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
    question: "What was the goal?",
    heading: "Creating a personal space to share my learning",
    content:
      "I wanted a portfolio that showed my actual coding skills rather than just listing tech names on a resume. My goal was to build something simple, responsive, and clear that reflects how I approach web projects.",
    visualLabel: "01 / The Goal",
    visualMode: "problem",
    visualTreatment: "bg-gradient-to-br from-primary/[0.04] to-transparent",
  },
  {
    id: "complexity",
    number: "02",
    question: "What made it tricky?",
    heading: "Balancing visual design with clean code",
    content:
      "It's easy to add heavy animation libraries or flashy effects, but I wanted to keep the site responsive on mobile devices and accessible to everyone. Learning when to stop adding code was the hardest part.",
    visualLabel: "02 / Trade-offs",
    visualMode: "complexity",
    visualTreatment: "bg-gradient-to-bl from-primary/[0.05] via-transparent to-transparent",
  },
  {
    id: "design",
    number: "03",
    question: "What design rules helped?",
    heading: "Setting up a consistent color and typography scale",
    content:
      "I defined a small set of reusable CSS variables for spacing, font sizes, and colors before building components. Using OKLCH color space helped keep dark mode contrast comfortable to read.",
    visualLabel: "03 / Color & Type",
    visualMode: "design",
    visualTreatment: "bg-gradient-to-tr from-primary/[0.04] via-transparent to-transparent",
  },
  {
    id: "engineering",
    number: "04",
    question: "How is it put together?",
    heading: "Pre-rendered HTML with type-checked components",
    content:
      "Pre-rendering HTML at build time makes sure content loads instantly on first visit. Strict type checking catches props and state bugs before they reach users, while hardware-accelerated transitions give visual feedback without main-thread lag.",
    visualLabel: "04 / Build Benefits",
    visualMode: "engineering",
    visualTreatment: "bg-gradient-to-tl from-primary/[0.05] via-transparent to-transparent",
  },
  {
    id: "outcomes",
    number: "05",
    question: "How did it turn out?",
    heading: "A solid, working project I'm proud of",
    content:
      "Building this site helped me understand component structure, accessibility basics, and state management much better than reading tutorials alone.",
    visualLabel: "05 / Takeaways",
    visualMode: "outcomes",
    visualTreatment: "bg-gradient-to-br from-primary/[0.06] to-transparent",
  },
  {
    id: "retrospective",
    number: "06",
    question: "What would I improve next time?",
    heading: "Areas I want to refine as I learn more",
    content:
      "Looking back, I want to explore native CSS container queries for mobile layout tuning, add automated visual tests, and refactor a few components to reduce repetitive code.",
    visualLabel: "06 / Next Steps",
    visualMode: "retrospective",
    visualTreatment: "bg-gradient-to-bl from-primary/[0.04] via-transparent to-transparent",
  },
] as const;

export const workMeaningfulOutcomes: readonly {
  category: string;
  metric: string;
  detail: string;
}[] = [
  {
    category: "Accessibility",
    metric: "Keyboard & Screen Reader Support",
    detail: "Included visible focus indicators, semantic HTML tags, and options for reduced motion.",
  },
  {
    category: "Rendering",
    metric: "Static Page Output",
    detail: "Pages are pre-rendered into static HTML during build time for reliable loading.",
  },
  {
    category: "Component Design",
    metric: "Reusable UI Components",
    detail: "Separated buttons, headings, and cards into modular TypeScript files.",
  },
  {
    category: "Design System",
    metric: "Centralized CSS Tokens",
    detail: "Stored all spacing scales and theme colors in CSS custom properties.",
  },
  {
    category: "Code Quality",
    metric: "Strict Type Safety",
    detail: "Configured strict type checks across all components to catch bugs early.",
  },
] as const;

export const workBehindOneDecision = {
  title: "Behind One Choice: CSS Animations vs Canvas Runtimes",
  subtitle: "Choosing lightweight web standards over heavy 3D canvases.",
  content:
    "While exploring 3D canvas libraries, I noticed they significantly increased file bundle sizes and battery drain on mobile phones. For this portfolio, sticking to standard CSS keyframes and subtle opacity shifts provided the right visual feel without slowing down the page.",
} as const;

export const workLinks: readonly {
  label: string;
  href: string;
  primary: boolean;
}[] = [
  {
    label: "Explore Tabula (Flagship Project) →",
    href: "/work/tabula",
    primary: true,
  },
  {
    label: "View Source on GitHub",
    href: "https://github.com/RizzyCoder19/portfolio",
    primary: false,
  },
] as const;
