import { Section } from "@/components/ui/section";
import { ExperimentGrid } from "./ExperimentGrid";
import { ExperimentsHeader } from "./ExperimentsHeader";

export function Experiments() {
  return (
    <Section
      id="experiments"
      container="default"
      spacing="default"
      aria-label="Experiments"
    >
      <div className="flex flex-col gap-12">
        <ExperimentsHeader />
        <ExperimentGrid />
      </div>
    </Section>
  );
}
