"use client";

import { Section } from "@/components/ui/section";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <Section
      id="hero"
      container="narrow"
      spacing="none"
      className="flex min-h-svh items-center justify-center text-center"
      aria-label="Introduction"
    >
      <div className="flex flex-col items-center gap-10 py-section">
        <HeroContent />
        <HeroActions />
        <ScrollIndicator />
      </div>
    </Section>
  );
}

