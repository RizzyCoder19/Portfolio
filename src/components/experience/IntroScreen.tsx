"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import {
  introBeamBrightenDelayFromStart,
  introBeamFadeDelay,
  introBeamGrowDelay,
  introBeamGrowDuration,
  introDoneDelay,
  introFinalPause,
  introHoldDelay,
  introLine1FadeDelay,
  introLine2FadeDelay,
  introStatement,
  introTextFadeDelay,
} from "@/content/experience";

const introLines = introStatement.split("\n");
const line1 = introLines[0] ?? "";
const line2 = introLines[1] ?? "";

type Phase =
  | "black"
  | "beam-grow"
  | "beam-rest"
  | "line1"
  | "beam-brighten"
  | "line2"
  | "hold"
  | "beam-fade"
  | "text-fade"
  | "pause"
  | "done";

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

    const growTimer = setTimeout(() => setPhase("beam-grow"), introBeamGrowDelay);
    const restTimer = setTimeout(
      () => setPhase("beam-rest"),
      introBeamGrowDelay + introBeamGrowDuration,
    );
    const line1Timer = setTimeout(() => setPhase("line1"), introLine1FadeDelay);
    const brightenTimer = setTimeout(
      () => setPhase("beam-brighten"),
      introBeamBrightenDelayFromStart,
    );
    const line2Timer = setTimeout(() => setPhase("line2"), introLine2FadeDelay);
    const holdTimer = setTimeout(() => setPhase("hold"), introHoldDelay);
    const beamFadeTimer = setTimeout(() => setPhase("beam-fade"), introBeamFadeDelay);
    const textFadeTimer = setTimeout(() => setPhase("text-fade"), introTextFadeDelay);
    const pauseTimer = setTimeout(
      () => setPhase("pause"),
      introDoneDelay - introFinalPause,
    );
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, introDoneDelay);

    return () => {
      clearTimeout(growTimer);
      clearTimeout(restTimer);
      clearTimeout(line1Timer);
      clearTimeout(brightenTimer);
      clearTimeout(line2Timer);
      clearTimeout(holdTimer);
      clearTimeout(beamFadeTimer);
      clearTimeout(textFadeTimer);
      clearTimeout(pauseTimer);
      clearTimeout(doneTimer);
    };
  }, [shouldReduceMotion, onComplete]);

  if (phase === "done") {
    return null;
  }

  const beamGrown = phase !== "black";
  const beamVisible =
    phase !== "beam-fade" && phase !== "text-fade" && phase !== "pause";
  const beamBright =
    phase === "beam-brighten" || phase === "line2" || phase === "hold";
  const line1Visible =
    phase === "line1" ||
    phase === "beam-brighten" ||
    phase === "line2" ||
    phase === "hold";
  const line2Visible = phase === "line2" || phase === "hold";
  const textHidden = phase === "text-fade" || phase === "pause";

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: beamGrown && beamVisible ? 1 : 0,
          transition: "opacity 400ms ease-out",
        }}
      >
        <div
          className="h-px w-[60vw] max-w-md"
          style={{
            transformOrigin: "center center",
            transform: beamGrown ? "scaleX(1)" : "scaleX(0)",
            background: beamBright
              ? "rgba(255,255,255,0.25)"
              : "rgba(255,255,255,0.12)",
            transitionProperty: "transform, background-color, opacity",
            transitionDuration: "700ms, 300ms, 400ms",
            transitionTimingFunction:
              "cubic-bezier(0.22, 1, 0.36, 1), ease-out, ease-out",
            filter: "blur(0.5px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <span
          className="text-sm font-light tracking-[0.2em] text-white/80 uppercase sm:text-base"
          style={{
            opacity: textHidden
              ? 0
              : line1Visible || line2Visible
                ? 6
                : 0,
            transition: "opacity 500ms ease-out",
          }}
        >
          {line1}
        </span>
        <span
          className="text-sm font-light tracking-[0.2em] text-white/80 uppercase sm:text-base"
          style={{
            opacity: textHidden
              ? 0
              : line2Visible
                ? 1
                : 0,
            transition: "opacity 500ms ease-out",
          }}
        >
          {line2}
        </span>
      </div>
    </div>
  );
}
