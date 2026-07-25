import { Button } from "@/components/ui/button";
import { TechChip } from "@/components/ui/tech-chip";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "featured" | "completed" | "progress";
  statusLabel: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  image?: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group rounded-xl border border-border bg-surface text-foreground",
        "shadow-elevation-1 transition-shadow duration-200",
        "hover:shadow-elevation-2",
      )}
    >
      <div className="flex aspect-[16/10] items-center justify-center rounded-t-xl border-b border-border bg-surface-sunken">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.5,
          }}
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <StatusBadge
            label={project.statusLabel}
            variant={project.status}
            className="shrink-0"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechChip key={tech} label={tech} variant="default" size="sm" />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.caseStudyUrl ? (
            <Button variant="outline" size="sm" asChild>
              <a href={project.caseStudyUrl}>Case Study</a>
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl}>GitHub</a>
            </Button>
) : null}
        </div>
      </div>
    </article>
  );
}
