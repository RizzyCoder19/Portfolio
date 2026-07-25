import { ProjectCard, type Project } from "./ProjectCard";

const placeholderProjects: Project[] = [
  {
    title: "AI Resume Analyzer",
    description:
      "Built with Python and NLP to automatically score and rank resumes against job descriptions.",
    tech: ["Python", "SQL", "React", "TypeScript"],
    status: "featured",
    statusLabel: "Featured",
    githubUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, minimal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "completed",
    statusLabel: "Completed",
    githubUrl: "#",
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Interactive dashboard for visualizing patient data and healthcare analytics.",
    tech: ["React", "Node.js", "TypeScript", "SQL"],
    status: "completed",
    statusLabel: "Completed",
    githubUrl: "#",
  },
  {
    title: "Realtime Chat",
    description:
      "Full-stack realtime messaging application with WebSocket support.",
    tech: ["Node.js", "React", "Git", "Python"],
    status: "progress",
    statusLabel: "In Progress",
    githubUrl: "#",
    caseStudyUrl: "#",
  },
];

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {placeholderProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
