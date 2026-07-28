"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";

import { IntroScreen } from "./IntroScreen";
import { ExperienceContext } from "./ExperienceContext";

interface ExperienceProviderProps {
  children: ReactNode;
}

export function ExperienceProvider({ children }: ExperienceProviderProps) {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const contextValue = useMemo(() => ({ introComplete }), [introComplete]);

  return (
    <ExperienceContext.Provider value={contextValue}>
      {/* Intro screen — always mounted, parent fades it out via opacity.
          The IntroScreen no longer returns null when done; it keeps rendering
          so the opacity transition is smooth and visible. */}
      <div
        className="fixed inset-0 z-50"
        style={{
          opacity: introComplete ? 0 : 1,
          transition: "opacity 600ms ease-out",
          pointerEvents: introComplete ? "none" : "auto",
        }}
        aria-hidden={introComplete}
      >
        <IntroScreen onComplete={handleIntroComplete} />
      </div>

      {/*
       * Children are always in the DOM and visible (for font/asset preloading).
       * No display:none flicker. The intro overlay fades out on top of the hero,
       * which is already rendered behind it.
       */}
      <div>{children}</div>
    </ExperienceContext.Provider>
  );
}

