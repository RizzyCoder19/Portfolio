import { cn } from "@/lib/utils";

const highlights = [
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

export function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {highlights.map((item) => (
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
