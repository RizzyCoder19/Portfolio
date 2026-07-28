"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { heroSignature, heroHeadline } from "@/content/hero";

/* ─── Entrance variants ───────────────────────────────────────────────────── */

/**
 * Name rule draw: the horizontal dashes draw from center outward.
 * The center (name position) appears at the same time.
 * Together they form: `─── Khan Umar ───`
 */
const ruleLeft: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ruleRight: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 },
  },
};

const nameFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.15 },
  },
};

/**
 * Headline entrance: clip-path from center (signal axis).
 * Reveals outward like light spreading.
 */
const lineRevealFromCenter: Variants = {
  hidden: {
    clipPath: "inset(0 50% 0 50%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/** Kerning settle: headline appears slightly wider, then tightens into final tracking. */
const kerningSettle: Variants = {
  hidden: { letterSpacing: "-0.045em" },
  visible: {
    letterSpacing: "-0.065em",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
};

/** Horizontal rule growth: draws from the beam axis rightward. */
const ruleGrowth: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
    },
  },
};

/** No-motion fallback — instant reveal without any transform. */
const instant: Variants = {
  hidden: { opacity: 1, scaleX: 1, letterSpacing: "-0.065em" },
  visible: { opacity: 1, scaleX: 1, letterSpacing: "-0.065em" },
};

/* ─── Stagger container ───────────────────────────────────────────────────── */

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

/* ─── Component ───────────────────────────────────────────────────────────── */

interface HeroContentProps {
  entered: boolean;
}

export function HeroContent({ entered }: HeroContentProps) {
  const reducedMotion = useReducedMotion();

  const headlineVariant = reducedMotion ? instant : lineRevealFromCenter;
  const kerningVariant = reducedMotion ? instant : kerningSettle;
  const ruleVariant = reducedMotion ? instant : ruleGrowth;
  const nameVariant = reducedMotion ? instant : nameFade;
  const dashVariant = reducedMotion ? instant : ruleLeft;

  return (
    <motion.div
      className="flex flex-col gap-0"
      variants={staggerContainer}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
    >
      {/* ── Signature rule: ─── Khan Umar ─── ── */}
      <motion.div
        className="mb-6 flex items-center gap-3"
        variants={instant}
        initial="hidden"
        animate={entered ? "visible" : "hidden"}
      >
        {/* Left dash — grows from center leftward */}
        <motion.span
          className="h-px origin-right"
          style={{ width: "2rem", background: "var(--color-border)" }}
          variants={dashVariant}
        />
        {/* Name */}
        <motion.span
          className={cn(
            "text-kicker font-medium tracking-[--text-kicker--letter-spacing]",
            "text-muted-foreground whitespace-nowrap uppercase",
          )}
          variants={nameVariant}
        >
          {heroSignature}
        </motion.span>
        {/* Right dash — grows from center rightward */}
        <motion.span
          className="h-px origin-left"
          style={{ width: "2rem", background: "var(--color-border)" }}
          variants={ruleRight}
        />
      </motion.div>

      {/* ── Headline — the hero ── */}
      <motion.h1
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className={cn(
          "text-display font-semibold leading-[--text-display--line-height]",
          "text-foreground",
        )}
      >
        {heroHeadline.map((line, i) => (
          <motion.span
            key={i}
            className="block overflow-hidden py-0.5"
            variants={headlineVariant}
          >
            <motion.span
              className={cn("block", i === 1 && "font-medium text-foreground/90")}
              variants={kerningVariant}
              style={{ letterSpacing: "-0.065em" }}
            >
              {line}
            </motion.span>
          </motion.span>
        ))}
      </motion.h1>

      {/* ── Horizontal rule — grows from beam axis rightward ── */}
      <motion.div
        className="mt-6 h-px origin-left"
        style={{
          width: "40%",
          minWidth: "6rem",
          maxWidth: "12rem",
          background: "color-mix(in oklch, var(--color-foreground) 20%, transparent)",
        }}
        variants={ruleVariant}
      />
    </motion.div>
  );
}
