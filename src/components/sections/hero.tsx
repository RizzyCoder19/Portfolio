"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useScrollTo } from "@/utils/scroll";

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <Section
      id="hero"
      container="narrow"
      spacing="none"
      className="flex min-h-svh items-center justify-center text-center"
      aria-label="Introduction"
    >
      <div className="flex flex-col items-center gap-6 py-section">
        <p className="text-kicker leading-[--text-kicker--line-height] font-bold tracking-[--text-kicker--letter-spacing] uppercase text-muted-foreground">
          Portfolio
        </p>
        <h1 className="text-display leading-[--text-display--line-height] font-semibold tracking-[--text-display--letter-spacing] text-balance text-foreground">
          Crafting digital
          <br />
          experiences
        </h1>
        <p className="max-w-2xl text-heading leading-[1.08] font-normal tracking-[-0.035em] text-balance text-muted-foreground">
          Full Name — Creative Technologist &amp; Design Engineer
        </p>
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo("#work", { offset: 0 })}
          >
            View my work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("#contact", { offset: 0 })}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </Section>
  );
}
