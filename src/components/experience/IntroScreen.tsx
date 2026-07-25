"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import {
  introBeamDelay,
  introBeamFadeDuration,
  introLine1Delay,
  introLine2Delay,
  introPause,
  introReadDuration,
  introStatement,
  introTextFadeDuration,
} from "@/content/experience";

const introLines = introStatement.split("\n");
const line1 = introLines[0] ?? "";
const line2 = introLines[1] ?? "";

type Phase =
  | "black"
  | "beam"
  | "line1"
  | "line2"
  | "read"
  | "fade-text"
  | "fade-beam"
  | "pause"
  | "done";

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(shouldReduceMotion ? "done" : "black");
  const [textPhase, setTextPhase] = useState<
    "hidden" | "line1" | "line2" | "fade-text"
  >(shouldReduceMotion ? "fade-text" : "hidden");

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const beamTimer = setTimeout(() => setPhase("beam"), introBeamDelay);

    // Text sequencing: first line, second line, then fade
    const line1Timer = setTimeout(() => setTextPhase("line1"), introLine1Delay);
    const line2Timer = setTimeout(() => setTextPhase("line2"), introLine2Delay);
    const fadeTextTimer = setTimeout(
      () => setTextPhase("fade-text"),
      introLine2Delay + introReadDuration,
    );

    // Beam fade follows text fade
    const fadeBeamTimer = setTimeout(
      () => setPhase("fade-beam"),
      introLine2Delay + introReadDuration + introTextFadeDuration,
    );

    const pauseTimer = setTimeout(
      () => setPhase("pause"),
      introLine2Delay + introReadDuration + introTextFadeDuration + introBeamFadeDuration,
    );

    const doneTimer = setTimeout(
      () => {
        setPhase("done");
        onComplete();
      },
      introLine2Delay +
        introReadDuration +
        introTextFadeDuration +
        introBeamFadeDuration +
        introPause,
    );

    return () => {
      clearTimeout(beamTimer);
      clearTimeout(line1Timer);
      clearTimeout(line2Timer);
      clearTimeout(fadeTextTimer);
      clearTimeout(fadeBeamTimer);
      clearTimeout(pauseTimer);
      clearTimeout(doneTimer);
    };
  }, [shouldReduceMotion, onComplete]);

  if (phase === "done") return null;

  const beamVisible =
    phase !== "black" && phase !== "fade-beam" && phase !== "pause";

  const line1Visible = textPhase === "line1" || textPhase === "line2";
  const line2Visible = textPhase === "line2";
  const textFading = textPhase === "fade-text";

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      aria-hidden="true"
    >
      {/* Beam */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: beamVisible ? 1 : 0,
          transition: `opacity ${introBeamFadeDuration}ms ease-out`,
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

      {/* Statement - two independent lines */}
      <div className="relative z-10 flex flex-col items-center gap-1 sm:gap-2">
        <span
          className="text-sm font-light tracking-[0.2em] text-white/70 uppercase sm:text-base"
          style={{
            opacity: textFading ? 0 : line1Visible ? 1 : 0,
            transition: `opacity ${introTextFadeDuration}ms ease-out`,
          }}
        >
          {line1}
        </span>
        <span
          className="text-sm font-light tracking-[0.2em] text-white/70 uppercase sm:text-base"
          style={{
            opacity: textFading ? 0 : line2Visible ? 1 : 0,
            transition: `opacity ${introTextFadeDuration}ms ease-out`,
          }}
        >
          {line2}
        </span>
      </div>
    </div>
  );
}
