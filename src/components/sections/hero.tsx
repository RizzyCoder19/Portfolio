import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/sections/section-heading";

export function Hero() {
  return (
    <Section id="hero" container="default" spacing="default">
      <SectionHeading
        align="center"
        eyebrow="Hero"
        title="Hero Section"
        description="Placeholder content for the hero section."
      />
    </Section>
  );
}

