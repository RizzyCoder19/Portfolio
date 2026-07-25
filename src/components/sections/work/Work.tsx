"use client";

import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/ui/section";
import { WorkHeader } from "./WorkHeader";
import { WorkGrid } from "./WorkGrid";

export function Work() {
  return (
    <Section id="work" container="default" spacing="default" aria-label="Work">
      <div className="flex flex-col gap-12 lg:gap-16">
        <Reveal delay={0}>
          <WorkHeader />
        </Reveal>
        <Reveal delay={0.12}>
          <WorkGrid />
        </Reveal>
      </div>
    </Section>
  );
}
