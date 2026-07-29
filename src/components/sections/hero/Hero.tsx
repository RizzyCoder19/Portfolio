"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { useExperience } from "@/components/experience/ExperienceContext";
import { HeroVisual } from "./HeroVisual";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroBackground } from "./HeroBackground";

/**
 * Hero — Composition 3: The Cinematic Monoline Canvas.
 *
 * Primary Hero Principle:
 * "The Hero should feel like stepping into a private, dark-romance architectural exhibition —
 * where high-precision software is unveiled as a handcrafted luxury artifact rather than a digital commodity."
 *
 * Responsive Grid Architecture:
 * - Desktop (>= 1024px): Asymmetric 38vw left visual column / 62vw right content column.
 * - Mobile (< 1024px): Stacked editorial layout with unencumbered negative space.
 * - Central 1px signal axis seam running down the column boundary.
 */
export function Hero() {
  const { introComplete } = useExperience();
  const reducedMotion = useReducedMotion();

  /* Entrance orchestration */
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

  /* Scroll-linked transformation */
  const { scrollY } = useScroll();

  /* Content drifts upward gracefully */
  const contentY = useTransform(scrollY, [0, 600], [0, -36]);

  /* HeroVisual compression on scroll */
  const compressionProgress = useTransform(scrollY, [64, 600], [0, 1]);
  const clipPathValue = useTransform(
    compressionProgress,
    (v) => `inset(${v * 100}% 0 0 0)`
  );

  const contentStyle = reducedMotion ? {} : { y: contentY };
  const visualStyle = reducedMotion ? {} : { clipPath: clipPathValue };

  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full flex-col lg:flex-row overflow-hidden bg-background"
      aria-label="Introduction"
    >
      {/* Ambient background atmosphere */}
      <HeroBackground entered={entered} />

      {/* ── Left Column: Craft Monolith (Desktop >= 1024px) ── */}
      <motion.div
        className="relative hidden lg:flex lg:w-[var(--hero-visual-width)] lg:flex-shrink-0 items-center justify-center overflow-hidden z-10"
        aria-hidden="true"
        style={visualStyle}
      >
        <HeroVisual entered={entered} />
      </motion.div>

      {/* ── Right Column: Content Stack ── */}
      <div className="relative flex min-h-svh flex-1 flex-col justify-center px-page py-16 lg:py-0 z-10">
        <motion.div
          className="flex flex-col gap-0"
          style={contentStyle}
        >
          <HeroContent entered={entered} />
          <HeroActions entered={entered} />
        </motion.div>

        {/* Minimal Scroll Hint Indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: entered ? 0.35 : 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <span className="text-kicker font-mono tracking-[0.2em] text-muted-foreground/40 uppercase text-[10px]">
            scroll
          </span>
        </motion.div>
      </div>

      {/* ── 1px Signal Seam Axis Divider (Desktop) ── */}
      <div
        className="pointer-events-none absolute left-[var(--hero-visual-width)] top-0 hidden lg:block h-full w-px -translate-x-1/2 z-20"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent 10%, color-mix(in oklch, var(--signal-beam) 30%, transparent) 40%, color-mix(in oklch, var(--cyber-accent) 25%, transparent) 75%, transparent 95%)",
        }}
      />

      {/* Dissolve gradient at bottom blending into About section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent z-20"
        aria-hidden="true"
      />
    </section>
  );
}
