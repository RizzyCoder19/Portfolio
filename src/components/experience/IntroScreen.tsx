"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import {
  introBeamDelay,
  introTextDelay,
  introHoldDuration,
  introFadeDuration,
  introStatement,
} from "@/content/experience";

type Phase = "black" | "beam" | "text" | "hold" | "fade" | "done";

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(shouldReduceMotion ? "done" : "black");

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const beamTimer = setTimeout(() => setPhase("beam"), introBeamDelay);
    const textTimer = setTimeout(() => setPhase("text"), introTextDelay);
    const fadeTimer = setTimeout(
      () => setPhase("fade"),
      introTextDelay + introHoldDuration,
    );
    const doneTimer = setTimeout(
      () => {
        setPhase("done");
        onComplete();
      },
      introTextDelay + introHoldDuration + introFadeDuration,
    );

    return () => {
      clearTimeout(beamTimer);
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [shouldReduceMotion, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: phase === "black" ? 0 : 1,
          transition: "opacity " + introFadeDuration + "ms ease-out",
        }}
      >
        <div
          className="h-full w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
          }}
        />
      </div>
      <div
        className="relative z-10 px-6 text-center"
        style={{
          opacity: phase === "black" || phase === "beam" ? 0 : 1,
          transition: "opacity " + introFadeDuration + "ms ease-out",
          transform:
            phase === "fade" ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        <p className="text-sm font-light tracking-[0.2em] text-white/70 uppercase leading-relaxed sm:text-base">
          {introStatement.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p> 
      </div>
    </div>
  );
}
