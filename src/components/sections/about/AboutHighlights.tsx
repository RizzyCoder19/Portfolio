import { cn } from "@/lib/utils";
import { highlights } from "@/content/about";

export function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[...highlights].map((item) => (
        <article
          key={item.title}
          className={cn(
            "rounded-xl border border-border bg-surface p-6",
            "transition-colors duration-200",
            "hover:border-foreground/15 hover:bg-surface-raised",
          )}
        >
          <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
