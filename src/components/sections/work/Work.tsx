import { Section } from "@/components/ui/section";
import { WorkHeader } from "./WorkHeader";
import { WorkGrid } from "./WorkGrid";

export function Work() {
  return (
    <Section id="work" container="default" spacing="default" aria-label="Work">
      <div className="flex flex-col gap-12 lg:gap-16">
        <WorkHeader />
        <WorkGrid />
      </div>
    </Section>
  );
}
