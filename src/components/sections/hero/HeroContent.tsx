"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import {
  heroSignature,
  heroRole,
  heroHeadline,
  heroSubtitle,
} from "@/content/hero";

/* ─── Entrance Motion Variants ────────────────────────────────────────────── */

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineRevealFromCenter: Variants = {
  hidden: {
    clipPath: "inset(0 50% 0 50%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const kerningSettle: Variants = {
  hidden: { letterSpacing: "-0.045em" },
  visible: {
    letterSpacing: "var(--text-display--letter-spacing)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
};

const ruleGrowth: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
};

const instant: Variants = {
  hidden: { opacity: 1, scaleX: 1, y: 0 },
  visible: { opacity: 1, scaleX: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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
  const fadeVariant = reducedMotion ? instant : fadeIn;
  const ruleVariant = reducedMotion ? instant : ruleGrowth;

  return (
    <motion.div
      className="flex flex-col gap-0 max-w-2xl"
      variants={staggerContainer}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
    >
      {/* ── Editorial Masthead Header: Name + Role Kicker ── */}
      <motion.div
        className="mb-4 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3"
        variants={fadeVariant}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="h-px w-6 bg-border origin-left"
            aria-hidden="true"
          />
          <span
            className={cn(
              "text-kicker font-mono font-medium tracking-[--text-kicker--letter-spacing]",
              "text-muted-foreground uppercase",
            )}
          >
            {heroSignature}
          </span>
        </div>
        <span
          className="hidden sm:inline text-muted-foreground/30 text-xs"
          aria-hidden="true"
        >
          {"//"}
        </span>
        <span
          className={cn(
            "text-kicker font-mono font-semibold tracking-[0.14em]",
            "text-primary/90 uppercase",
          )}
        >
          {heroRole}
        </span>
      </motion.div>

      {/* ── Statement Headline — The Focal Hero ── */}
      <motion.h1
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className={cn(
          "text-display font-semibold leading-[--text-display--line-height]",
          "text-foreground tracking-[--text-display--letter-spacing]",
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
            >
              {line}
            </motion.span>
          </motion.span>
        ))}
      </motion.h1>

      {/* ── Editorial Subtitle Paragraph ── */}
      <motion.p
        variants={fadeVariant}
        className={cn(
          "mt-5 text-subtitle font-normal leading-[--text-subtitle--line-height]",
          "text-muted-foreground max-w-xl text-pretty",
        )}
      >
        {heroSubtitle}
      </motion.p>

      {/* ── Horizontal Rule — Draws rightward from axis ── */}
      <motion.div
        className="mt-7 h-px origin-left"
        style={{
          width: "35%",
          minWidth: "5rem",
          maxWidth: "10rem",
          background: "color-mix(in oklch, var(--color-foreground) 18%, transparent)",
        }}
        variants={ruleVariant}
      />
    </motion.div>
  );
}
