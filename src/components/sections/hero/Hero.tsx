"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { useExperience } from "@/components/experience/ExperienceContext";
import { HeroVisual } from "./HeroVisual";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroBackground } from "./HeroBackground";
import { ScrollIndicator } from "./ScrollIndicator";

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
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const enteredRef = useRef(false);

  useEffect(() => {
    if (!introComplete || enteredRef.current) return;
    const id = setTimeout(() => {
      setEntered(true);
      enteredRef.current = true;
    }, 0);
    return () => clearTimeout(id);
  }, [introComplete]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setMotionAllowed(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!entered) return;

    const onScroll = () => {
      if (window.scrollY > 24) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [entered]);

  /* ── Scroll-linked transformations ── */
  const { scrollY } = useScroll();

  /* Content drifts upward */
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);

  /* HeroVisual compression — MotionValue<number> 0→1 */
  const compressionProgress = useTransform(scrollY, [64, 600], [0, 1]);

  /* Convert compressionProgress to a clip-path string MotionValue */
  const clipPathValue = useTransform(compressionProgress, (v) => `inset(${v * 100}% 0 0 0)`);

  const dissolveOpacity = useTransform(scrollY, [0, 280, 520], [0.55, 0.75, 1]);

  const enableScrollMotion = !reducedMotion && motionAllowed;
  const contentStyle = enableScrollMotion ? { y: contentY } : {};
  const visualStyle = enableScrollMotion ? { clipPath: clipPathValue } : {};
  const dissolveStyle =
    enableScrollMotion && !reducedMotion ? { opacity: dissolveOpacity } : undefined;

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col-reverse overflow-hidden bg-background lg:flex-row"
      aria-label="Introduction"
    >
      {/* ── Ambient field — continues intro cinematic atmosphere ── */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.42] lg:opacity-35">
        <HeroBackground entered={entered} />
      </div>

      {/* ── Left column: HeroVisual (spatial anchor) ── */}
      <motion.div
        className="relative z-[1] w-full flex-shrink-0 overflow-hidden px-page pb-4 pt-6 sm:aspect-auto sm:h-[22rem] sm:px-page sm:pb-8 sm:pt-0 lg:aspect-auto lg:h-full lg:w-[40vw] lg:px-0 lg:pb-0 lg:pt-0"
        aria-hidden="true"
        style={visualStyle}
      >
        <div className="relative h-full min-h-[min(72vw,18rem)] overflow-hidden rounded-xl border border-border/35 shadow-elevation-1 sm:min-h-0 sm:rounded-2xl lg:min-h-full lg:rounded-none lg:border-0 lg:shadow-none">
          <HeroVisual entered={entered} />
        </div>
      </motion.div>

      {/* ── Right column: Content stack ── */}
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col justify-center px-page pb-20 pt-8 sm:min-h-svh sm:pb-24 sm:pt-10 lg:min-h-svh lg:py-0 lg:pl-[clamp(1.5rem,3vw,2.5rem)] lg:pr-page">
        <motion.div className="flex max-w-3xl flex-col" style={contentStyle}>
          <HeroContent entered={entered} />
          <HeroActions entered={entered} />
        </motion.div>

        {/* ── Scroll hint — signal line + label ── */}
        <motion.div
          className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center lg:bottom-10"
          animate={{ opacity: entered && showScrollHint ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <ScrollIndicator entered={entered && showScrollHint} />
        </motion.div>
      </div>

      {/* ── The invisible beam glow — between columns ── */}
      <div
        className="beam-glow pointer-events-none absolute left-[40vw] top-0 z-[1] hidden h-full w-px -translate-x-1/2 lg:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent 12%, color-mix(in oklch, var(--signal-beam) 32%, transparent) 48%, transparent 88%)",
        }}
      />

      {/* ── Dissolve gradient at bottom (to About) — cinematic fade ── */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 sm:h-56 lg:h-64"
        aria-hidden="true"
        style={dissolveStyle}
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, " +
              "color-mix(in oklch, var(--background) 92%, var(--primary) 8%) 28%, " +
              "color-mix(in oklch, var(--background) 70%, transparent) 62%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
