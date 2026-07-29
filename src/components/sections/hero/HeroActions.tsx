"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { heroCtaLabels } from "@/content/hero";
import { useScrollTo } from "@/utils/scroll";
import { Button } from "@/components/ui/button";

/* ─── Entrance variants ───────────────────────────────────────────────────── */

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const ctaPrimaryReveal: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
  },
};

const ctaSecondaryReveal: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.18 },
  },
};

const instant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

/* ─── Component ───────────────────────────────────────────────────────────── */

interface HeroActionsProps {
  entered: boolean;
}

export function HeroActions({ entered }: HeroActionsProps) {
  const scrollTo = useScrollTo();
  const reducedMotion = useReducedMotion();
  const primaryVariant = reducedMotion ? instant : ctaPrimaryReveal;
  const secondaryVariant = reducedMotion ? instant : ctaSecondaryReveal;

  return (
    <motion.div
      className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8 lg:mt-12"
      variants={container}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
    >
      {/* ── Primary CTA — See the Case Study ── */}
      <motion.div variants={primaryVariant} className="w-full sm:w-auto">
        <Button
          variant="primary"
          size="lg"
          className="hero-cta-primary group w-full min-h-11 rounded-lg px-6 font-semibold shadow-elevation-2 sm:w-auto"
          onClick={() => scrollTo("#work", { offset: 0 })}
          aria-label={`${heroCtaLabels[0]} — navigate to work`}
        >
          {heroCtaLabels[0]}
          <span className="text-primary-foreground/85 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Button>
      </motion.div>

      {/* ── Secondary CTA — Start a conversation ── */}
      <motion.div variants={secondaryVariant} className="w-full sm:w-auto">
        <Button
          variant="ghost"
          size="default"
          className="hero-cta-secondary w-full min-h-11 justify-start px-2 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground sm:w-auto sm:min-h-10 sm:px-1"
          onClick={() => scrollTo("#contact", { offset: 0 })}
          aria-label={`${heroCtaLabels[1]} — navigate to contact`}
        >
          {heroCtaLabels[1]}
        </Button>
      </motion.div>
    </motion.div>
  );
}

