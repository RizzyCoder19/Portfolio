export interface Highlight {
  title: string;
  description: string;
}

export const highlights: readonly Highlight[] = [
  {
    title: "Building",
    description:
      "Responsive web applications with modern frontend technologies.",
  },
  {
    title: "AI",
    description:
      "Using AI as a development accelerator, not a replacement for engineering.",
  },
  {
    title: "Learning",
    description:
      "Continuously improving in Python, SQL, Data Structures and software architecture.",
  },
  {
    title: "Mindset",
    description:
      "Curious, disciplined and always focused on building better products.",
  },
] as const;
