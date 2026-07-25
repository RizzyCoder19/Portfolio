import type { Project } from "@/components/sections/work/ProjectCard";

export const projects: readonly Project[] = [
  {
    title: "Coming Soon",
    description:
      "A project I'm actively building. Details will be shared here once it reaches a solid milestone.",
    tech: [],
    status: "progress",
    statusLabel: "In Progress",
    githubUrl: "#",
  },
  {
    title: "Coming Soon",
    description:
      "Another project in the works. I believe in shipping things that are ready, not rushing incomplete work.",
    tech: [],
    status: "progress",
    statusLabel: "In Progress",
    githubUrl: "#",
  },
  {
    title: "Coming Soon",
    description:
      "Planned and scoped. This space will be updated as I build and refine more public work.",
    tech: [],
    status: "progress",
    statusLabel: "In Progress",
    githubUrl: "#",
  },
  {
    title: "Coming Soon",
    description:
      "Still exploring ideas. Great software starts with a clear vision\u2014I\u2019m taking the time to get it right.",
    tech: [],
    status: "progress",
    statusLabel: "In Progress",
    githubUrl: "#",
  },
] as const;
