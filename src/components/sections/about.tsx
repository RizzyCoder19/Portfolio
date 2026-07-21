import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/sections/section-heading";

export function About() {
  return (
    <Section id="about" container="default" spacing="default">
      <SectionHeading
        eyebrow="About"
        title="About Section"
        description="Placeholder content for the about section."
      />
    </Section>
  );
}
