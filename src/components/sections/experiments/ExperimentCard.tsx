import { cn } from "@/lib/utils";

type ExperimentCardProps = {
  title: string;
  description: string;
};

export function ExperimentCard({ title, description }: ExperimentCardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        "transition-colors duration-200",
        "hover:border-foreground/15 hover:bg-surface-raised",
      )}
    >
      <h3 className="mb-3 font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
