"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

/* ─── Variants ────────────────────────────────────────────────────────────── */

const containerReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

/** The vertical line draws from top to bottom via scaleY. */
const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Label fades in once the line has mostly finished drawing. */
const labelFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
  },
};

const instant: Variants = {
  hidden: { opacity: 1, scaleY: 1 },
  visible: { opacity: 1, scaleY: 1 },
};

/* ─── Component ───────────────────────────────────────────────────────────── */

interface ScrollIndicatorProps {
  entered: boolean;
}

export function ScrollIndicator({ entered }: ScrollIndicatorProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      aria-hidden="true"
      variants={containerReveal}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
    >
      {/* The growing line — now with a subtle signal glow at the top */}
      <motion.span
        className="relative block h-14 w-px"
        style={{
          transformOrigin: "top center",
          background:
            "linear-gradient(to bottom, var(--signal-beam-subtle) 0%, var(--color-border) 40%, transparent 100%)",
        }}
        variants={reducedMotion ? instant : lineGrow}
      />

      {/* "scroll" label */}
      <motion.span
        className="text-kicker font-normal tracking-[--text-kicker--letter-spacing] text-muted-foreground/60 uppercase"
        variants={reducedMotion ? instant : labelFade}
      >
        scroll
      </motion.span>
    </motion.div>
  );
}

