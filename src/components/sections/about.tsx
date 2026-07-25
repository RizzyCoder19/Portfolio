"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/animations/reveal";
import { AboutContent } from "./about/AboutContent";
import { AboutHighlights } from "./about/AboutHighlights";

export function About() {
  return (
    <Section id="about" container="default" spacing="default" aria-label="About me">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <Reveal delay={0}>
          <AboutContent />
        </Reveal>
        <Reveal delay={0.15}>
          <AboutHighlights />
        </Reveal>
      </div>
    </Section>
  );
}
