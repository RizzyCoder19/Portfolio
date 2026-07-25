import { ProjectCard } from "./ProjectCard";
import { projects } from "@/content/work";

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[...projects].map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} project={project} />
      ))}
    </div>
  );
}
