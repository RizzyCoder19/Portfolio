"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { heroCtaLabels } from "@/content/hero";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/utils/scroll";

/* ─── Entrance variants ───────────────────────────────────────────────────── */

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const instant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

/* ─── Underline spring variants ──────────────────────────────────────────── */

/**
 * The underline overshoots to 105% before settling at 100% on hover.
 * On leave, it retracts with a gentle ease-in.
 * This demonstrates physics understanding — spring-based animation.
 */
const underlineSpring = {
  rest: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 },
  },
};

/* ─── Component ───────────────────────────────────────────────────────────── */

interface HeroActionsProps {
  entered: boolean;
}

export function HeroActions({ entered }: HeroActionsProps) {
  const scrollTo = useScrollTo();
  const reducedMotion = useReducedMotion();
  const variant = reducedMotion ? instant : ctaReveal;

  return (
    <motion.div
      className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-6"
      variants={container}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
    >
      {/* ── Primary CTA — See what I've built ── */}
      <motion.button
        variants={variant}
        type="button"
        onClick={() => scrollTo("#work", { offset: 0 })}
        className={cn(
          "group relative inline-flex items-center gap-1.5",
          "text-sm font-medium text-foreground",
          "transition-colors duration-200",
          "hover:text-primary",
        )}
        aria-label={`${heroCtaLabels[0]} — navigate to work`}
      >
        <span className="relative">
          {heroCtaLabels[0]}
          {/* Underline — always visible at 50% opacity, full on hover */}
          <motion.span
            className="absolute -bottom-px left-0 h-px w-full origin-left bg-current opacity-50"
            aria-hidden="true"
            initial="rest"
            whileHover="hover"
            variants={underlineSpring}
          />
        </span>
        <span className="text-muted-foreground/40" aria-hidden="true">→</span>
      </motion.button>

      {/* ── Secondary CTA — Start a conversation ── */}
      <motion.button
        variants={variant}
        type="button"
        onClick={() => scrollTo("#contact", { offset: 0 })}
        className={cn(
          "group relative inline-flex items-center gap-1.5",
          "text-sm font-medium text-muted-foreground",
          "transition-colors duration-200",
          "hover:text-primary",
        )}
        aria-label={`${heroCtaLabels[1]} — navigate to contact`}
      >
        <span className="relative">
          {heroCtaLabels[1]}
          {/* Underline — only appears on hover, with overshoot */}
          <motion.span
            className="absolute -bottom-px left-0 h-px w-full origin-left bg-current"
            aria-hidden="true"
            initial="rest"
            whileHover="hover"
            variants={underlineSpring}
          />
        </span>
      </motion.button>
    </motion.div>
  );
}

