"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Heading } from "@/components/ui/heading";
import {
  aboutHeadingLines,
  aboutParagraph,
  aboutPrinciples,
} from "@/content/about";
import { cn } from "@/lib/utils";

/* ─── Entrance choreography ──────────────────────────────────────────────── */

const sceneContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

/** The heading settles with a subtle blur-to-clear reveal. */
const headingReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/** The paragraph follows — lighter, faster. */
const paragraphFade: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Principles arrive one by one. */
const principleStagger: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.12,
    },
  }),
};

const instant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

/* ─── Component ───────────────────────────────────────────────────────────── */

export function AboutContent() {
  const reducedMotion = useReducedMotion();

  const hv = reducedMotion ? instant : headingReveal;
  const pv = reducedMotion ? instant : paragraphFade;
  const prv = reducedMotion ? instant : principleStagger;

  return (
    <motion.div
      className="flex flex-col"
      variants={sceneContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.15, once: true }}
    >
      {/* ── Heading — the question this scene answers ── */}
      <motion.div variants={hv}>
        <Heading as="h2" size="title" className="mb-8">
          {aboutHeadingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < aboutHeadingLines.length - 1 && <br />}
            </span>
          ))}
        </Heading>
      </motion.div>

      {/* ── Paragraph — honest, personal, one take ── */}
      <motion.p
        variants={pv}
        className="max-w-[38rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
      >
        {aboutParagraph}
      </motion.p>

      {/* ── Three editorial principles ── */}
      <motion.div
        variants={pv}
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10"
      >
        {aboutPrinciples.map((principle, i) => (
          <motion.article
            key={principle.number}
            custom={i}
            variants={prv}
            className="flex flex-col gap-2"
          >
            {/* Number — small, structural */}
            <span
              className={cn(
                "text-kicker font-normal tracking-[--text-kicker--letter-spacing]",
                "text-muted-foreground/40",
                "select-none",
              )}
            >
              {principle.number}
            </span>
            {/* Title */}
            <h3 className="text-sm font-semibold text-foreground sm:text-base">
              {principle.title}
            </h3>
            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {principle.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
