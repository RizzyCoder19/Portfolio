"use client";

import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/utils/scroll";
import { heroCtaLabels } from "@/content/hero";

export function HeroActions() {
  const scrollTo = useScrollTo();

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Button
        variant="primary"
        size="lg"
        onClick={() => scrollTo("#work", { offset: 0 })}
      >
        {heroCtaLabels[0]}
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={() => scrollTo("#contact", { offset: 0 })}
      >
        {heroCtaLabels[1]}
      </Button>
    </div>
  );
}
