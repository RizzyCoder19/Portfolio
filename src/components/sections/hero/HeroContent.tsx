import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { heroEyebrow, heroName, heroStatement, heroDescription } from "@/content/hero";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Eyebrow */}
      <p
        className={cn(
          "text-kicker leading-[--text-kicker--line-height]",
          "font-bold tracking-[--text-kicker--letter-spacing]",
          "text-muted-foreground uppercase",
        )}
      >
        {heroEyebrow}
      </p>

      {/* Name */}
      <Heading as="h1" size="display" className="text-center text-balance">
        {heroName}
      </Heading>

      {/* Primary statement */}
      <p
        className={cn(
          "text-title leading-[--text-title--line-height]",
          "font-semibold tracking-[--text-title--letter-spacing]",
          "text-center text-balance text-foreground",
          "max-w-3xl",
        )}
      >
        {heroStatement}
      </p>

      {/* Supporting paragraph */}
      <p
        className={cn(
          "text-heading leading-[1.08] font-normal tracking-[-0.035em]",
          "text-center text-balance text-muted-foreground",
          "max-w-2xl",
        )}
      >
        {heroDescription}
      </p>
    </div>
  );
}
