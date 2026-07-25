"use client";

import { useCallback, useState, type ReactNode } from "react";

import { IntroScreen } from "./IntroScreen";

interface ExperienceProviderProps {
  children: ReactNode;
}

export function ExperienceProvider({ children }: ExperienceProviderProps) {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  // Show intro screen first
  if (!introComplete) {
    return (
      <>
        <IntroScreen onComplete={handleIntroComplete} />
        {/* Hidden until intro completes */}
        <div aria-hidden="true" style={{ display: "none" }}>
          {children}
        </div>
      </>
    );
  }

  // After intro: render children directly. Hero handles its own stagger
  // and other sections should not receive a global stagger from here.
  return <>{children}</>;
}
