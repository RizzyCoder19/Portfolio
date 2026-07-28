"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

interface HeroBeamProps {
  entered: boolean;
}

/**
 * HeroBeam — the structural signal beam beneath the hero headline.
 *
 * This is the horizontal light guide that evolved from the intro beam.
 * It's not decoration — it anchors the typography composition and marks
 * the Hero as "Scene 1" of the narrative.
 *
 * The beam grows from center (scaleX) with a subtle gradient falloff
 * at the edges, and pulses gently to feel alive.
 */
const beamReveal: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.6,
    },
  },
};

const instant: Variants = {
  hidden: { opacity: 1, scaleX: 1 },
  visible: { opacity: 1, scaleX: 1 },
};

export function HeroBeam({ entered }: HeroBeamProps) {
  const reducedMotion = useReducedMotion();
  const variant = reducedMotion ? instant : beamReveal;

  return (
    <motion.div
      className="signal-beam h-px w-full origin-center"
      variants={variant}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
      style={{
        background:
          "linear-gradient(to right, transparent 0%, var(--signal-beam) 20%, var(--signal-beam) 80%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

