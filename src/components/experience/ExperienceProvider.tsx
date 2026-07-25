"use client";

import { useReducedMotion, motion } from "motion/react";
import { useCallback, useState, type ReactNode } from "react";

import { createStagger } from "@/lib/motion";
import { IntroScreen } from "./IntroScreen";

interface ExperienceProviderProps {
  children: ReactNode;
}

export function ExperienceProvider({ children }: ExperienceProviderProps) {
  const shouldReduceMotion = useReducedMotion();
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

  // After intro: stagger reveal of sections
  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={createStagger(0.12)}
    >
      {children}
    </motion.div>
  );
}
