"use client";

import { Reveal } from "@/components/animations/reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/content/work";

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[...projects].map((project, index) => (
        <Reveal key={`${project.title}-${index}`} delay={0.06 * index}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
