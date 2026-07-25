import { Reveal } from "@/components/animations/reveal";
import { Stagger } from "@/components/animations/reveal";
import { ExperimentCard } from "./ExperimentCard";

import { experimentsContent } from "@/content/experiments";

export function ExperimentGrid() {
  return (
    <Stagger>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {experimentsContent.cards.map((card) => (
          <Reveal key={card.title}>
            <ExperimentCard title={card.title} description={card.description} />
          </Reveal>
        ))}
      </div>
    </Stagger>
  );
}
