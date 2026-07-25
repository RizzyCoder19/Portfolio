export interface Highlight {
  title: string;
  description: string;
}

export const highlights: readonly Highlight[] = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces with React, Next.js, and Tailwind. Focused on performance and thoughtful interaction design.",
  },
  {
    title: "Data",
    description:
      "Working through Python, SQL, and data structures to turn raw information into something useful.",
  },
  {
    title: "AI-assisted",
    description:
      "Using AI tools to accelerate development\u2014not as a crutch, but as a force multiplier for engineering decisions.",
  },
  {
    title: "Craft",
    description:
      "Curious about the details that separate functional software from software people actually want to use.",
  },
] as const;
