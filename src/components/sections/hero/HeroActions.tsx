"use client";

import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/utils/scroll";

export function HeroActions() {
  const scrollTo = useScrollTo();

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Button
        variant="primary"
        size="lg"
        onClick={() => scrollTo("#work", { offset: 0 })}
      >
        View Work
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={() => scrollTo("#contact", { offset: 0 })}
      >
        Get in Touch
      </Button>
    </div>
  );
}

