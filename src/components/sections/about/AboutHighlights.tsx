import { cn } from "@/lib/utils";
import { aboutPrinciples } from "@/content/about";

export function AboutHighlights() {
  return (
    <div className="flex flex-col gap-5">
      {aboutPrinciples.map((principle) => (
        <article
          key={principle.number}
          className={cn(
            "group flex items-start gap-4 border-l-2 border-border pl-5",
            "transition-colors duration-300",
            "hover:border-primary/40",
          )}
        >
          <span
            className={cn(
              "mt-0.5 shrink-0 font-mono text-xs font-medium tracking-wider",
              "text-muted-foreground/40 transition-colors duration-300",
              "group-hover:text-primary/60",
            )}
          >
            {principle.number}
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary/80">
              {principle.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {principle.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
