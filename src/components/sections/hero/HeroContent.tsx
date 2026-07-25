"use client";

import { Reveal, Stagger } from "@/components/animations/reveal";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

export function HeroContent() {
  return (
    <Stagger>
      <div className="flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <Reveal delay={0}>
          <p
            className={cn(
              "text-kicker leading-[--text-kicker--line-height]",
              "font-bold tracking-[--text-kicker--letter-spacing]",
              "text-muted-foreground uppercase",
            )}
          >
            Data Science &bull; Software Engineering
          </p>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.08}>
          <Heading
            as="h1"
            size="display"
            className="text-balance text-center"
          >
            Khan Umar
          </Heading>
        </Reveal>

        {/* Primary statement */}
        <Reveal delay={0.16}>
          <p
            className={cn(
              "text-title leading-[--text-title--line-height]",
              "font-semibold tracking-[--text-title--letter-spacing]",
              "text-balance text-center text-foreground",
              "max-w-3xl",
            )}
          >
            Building thoughtful software and digital experiences.
          </p>
        </Reveal>

        {/* Supporting paragraph */}
        <Reveal delay={0.24}>
          <p
            className={cn(
              "text-heading leading-[1.08] font-normal tracking-[-0.035em]",
              "text-balance text-center text-muted-foreground",
              "max-w-2xl",
            )}
          >
            I&apos;m a B.Sc. Data Science undergraduate passionate about software
            engineering, AI, and designing products that feel fast, intuitive, and
            purposeful.
          </p>
        </Reveal>
      </div>
    </Stagger>
  );
}
