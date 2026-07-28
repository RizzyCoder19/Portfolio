"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { useExperience } from "@/components/experience/ExperienceContext";
import { HeroVisual } from "./HeroVisual";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";

/**
 * Hero — Scene 1: The Asymmetric Stack.
 *
 * Composition:
 * - Left 40%: HeroVisual (spatial anchor)
 * - Right 60%: Content stack (signature → headline → rule → CTAs)
 * - The gap between columns IS the invisible signal beam
 *
 * Scroll behavior:
 * - HeroVisual compresses from the top (curtain lowering)
 * - Content drifts upward (parallax)
 * - Dissolve gradient at bottom blends into About
 *
 * No portrait dependency. HeroVisual accepts any children.
 */
export function Hero() {
  const { introComplete } = useExperience();
  const reducedMotion = useReducedMotion();

  /* Entrance state */
  const [entered, setEntered] = useState(false);
  const enteredRef = useRef(false);

  useEffect(() => {
    if (!introComplete || enteredRef.current) return;
    const id = setTimeout(() => {
      setEntered(true);
      enteredRef.current = true;
    }, 0);
    return () => clearTimeout(id);
  }, [introComplete]);

  /* ── Scroll-linked transformations ── */
  const { scrollY } = useScroll();

  /* Content drifts upward */
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);

  /* HeroVisual compression — MotionValue<number> 0→1 */
  const compressionProgress = useTransform(scrollY, [64, 600], [0, 1]);

  /* Convert compressionProgress to a clip-path string MotionValue */
  const clipPathValue = useTransform(compressionProgress, (v) => `inset(${v * 100}% 0 0 0)`);

  const contentStyle = reducedMotion ? {} : { y: contentY };
  const visualStyle = reducedMotion ? {} : { clipPath: clipPathValue };

  return (
    <section
      id="hero"
      className="relative flex min-h-svh overflow-hidden"
      aria-label="Introduction"
    >
      {/* ── Left column: HeroVisual (spatial anchor) ── */}
      <motion.div
        className="relative w-[40vw] min-w-[320px] flex-shrink-0 overflow-hidden"
        aria-hidden="true"
        style={visualStyle}
      >
        <HeroVisual entered={entered} />
      </motion.div>

      {/* ── Right column: Content stack ── */}
      <div className="relative flex min-h-svh flex-1 flex-col justify-center px-page">
        <motion.div className="flex flex-col gap-0" style={contentStyle}>
          <HeroContent entered={entered} />
          <HeroActions entered={entered} />
        </motion.div>

        {/* ── Minimal scroll hint ── */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: entered ? 0.35 : 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="text-kicker tracking-[0.16em] text-muted-foreground/30 uppercase">
            scroll
          </span>
        </motion.div>
      </div>

      {/* ── The invisible beam glow — between columns ── */}
      <div
        className="beam-glow pointer-events-none absolute left-[40vw] top-0 h-full w-px -translate-x-1/2"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent 15%, color-mix(in oklch, var(--signal-beam) 25%, transparent) 50%, transparent 85%)",
        }}
      />

      {/* ── Dissolve gradient at bottom ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

