"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import {
  workTitle,
  workSubtitle,
  workChapters,
  workMeaningfulOutcomes,
  workBehindOneDecision,
  workLinks,
  type WorkVisualMode,
} from "@/content/work";

/* ─── Entrance Variants ────────────────────────────────────────────────── */

const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const titleReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stageReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const instant: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Specimen Visual System ───────────────────────────────────────────── */

function VisualSpecimen({ label, mode }: { label: string; mode: WorkVisualMode }) {
  return (
    <div className="relative size-full overflow-hidden rounded-xl border border-border/40 bg-surface-sunken p-4 sm:p-6 shadow-elevation-2">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
        }}
      />

      {/* Top Specimen Masthead */}
      <div className="flex items-center gap-2 border-b border-border/30 pb-3 relative z-10">
        <span className="size-2 rounded-full bg-primary/60" aria-hidden="true" />
        <span className="truncate font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-muted-foreground/70 uppercase">
          {label}
        </span>
      </div>

      {/* Mode-specific Visual Content */}
      <div className="relative z-10 pt-4 h-[calc(100%-2rem)]">
        {mode === "problem" && (
          <div className="flex flex-col justify-center h-full gap-3">
            <div className="h-2 w-3/4 rounded-full bg-foreground/15" />
            <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
            <div className="mt-2 rounded-lg border border-primary/20 bg-primary/[0.05] p-3 text-[0.75rem] font-mono text-primary/80">
              {"// Target: Standout engineering authority without template noise"}
            </div>
          </div>
        )}

        {mode === "complexity" && (
          <div className="grid grid-cols-2 gap-3 h-full items-center">
            <div className="rounded-md border border-border/40 bg-surface/60 p-2.5 text-center">
              <span className="block font-mono text-xs text-primary font-semibold">60 FPS</span>
              <span className="text-[0.65rem] text-muted-foreground">Compositor Budget</span>
            </div>
            <div className="rounded-md border border-border/40 bg-surface/60 p-2.5 text-center">
              <span className="block font-mono text-xs text-foreground font-semibold">0 ms</span>
              <span className="text-[0.65rem] text-muted-foreground">Main Thread Shift</span>
            </div>
          </div>
        )}

        {mode === "design" && (
          <div className="space-y-3 h-full flex flex-col justify-center">
            <div className="flex items-center justify-between text-[0.6875rem] font-mono text-muted-foreground">
              <span>OKLCH Canvas</span>
              <span>oklch(0.12 0.012 285)</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-6 rounded bg-primary/80" />
              <div className="h-6 rounded bg-surface-raised border border-border/40" />
              <div className="h-6 rounded bg-secondary" />
              <div className="h-6 rounded bg-accent" />
            </div>
          </div>
        )}

        {mode === "engineering" && (
          <div className="flex flex-col justify-center h-full gap-2 text-[0.6875rem] font-mono">
            <div className="rounded border border-primary/20 bg-primary/[0.06] p-2 text-primary/90">
              Next.js 15 App Router (Static Generation)
            </div>
            <div className="h-px bg-border/40" />
            <div className="rounded border border-border/40 bg-surface/60 p-2 text-muted-foreground">
              GPU Compositor Animations (transform & opacity)
            </div>
          </div>
        )}

        {mode === "outcomes" && (
          <div className="flex items-center justify-between h-full px-4 rounded-lg border border-success/20 bg-success/[0.04]">
            <div>
              <span className="block font-mono text-xs font-semibold text-success">Lighthouse 98+</span>
              <span className="text-[0.65rem] text-muted-foreground">Performance Baseline</span>
            </div>
            <span className="text-sm text-success">✓ Passed</span>
          </div>
        )}

        {mode === "retrospective" && (
          <div className="flex flex-col justify-center h-full gap-2 text-[0.6875rem] font-mono text-muted-foreground">
            <div className="flex items-center justify-between border-b border-border/20 pb-1">
              <span>Container Queries</span>
              <span className="text-primary/70">Planned</span>
            </div>
            <div className="flex items-center justify-between">
              <span>CI Visual Regression</span>
              <span className="text-primary/70">Roadmap</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Work Section Component ───────────────────────────────────────── */

export function Work() {
  const reducedMotion = useReducedMotion();

  const tr = reducedMotion ? instant : titleReveal;
  const sr = reducedMotion ? instant : stageReveal;

  return (
    <motion.section
      id="work"
      className="relative py-section bg-background"
      aria-label="Featured case study"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.04, once: true }}
    >
      <div className="mx-auto max-w-6xl px-page">
        {/* ── Section Header ── */}
        <div className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
          <motion.div variants={tr}>
            <span className="mb-3 inline-block text-kicker font-mono font-medium tracking-[--text-kicker--letter-spacing] text-primary uppercase">
              Featured Case Study
            </span>
            <Heading as="h2" size="display" className="text-pretty">
              {workTitle}
            </Heading>
          </motion.div>
          <motion.p
            variants={sr}
            className="mt-5 text-subtitle font-normal leading-[--text-subtitle--line-height] text-muted-foreground text-pretty"
          >
            {workSubtitle}
          </motion.p>
        </div>

        {/* ── STAGE 1: Full-Width Grand Hero Specimen Exhibition ── */}
        <motion.div
          variants={sr}
          className="relative mb-24 overflow-hidden rounded-2xl border border-border/40 shadow-elevation-3"
          style={{ aspectRatio: "16/9", background: "var(--color-surface-sunken)" }}
        >
          <VisualSpecimen label="Architectural Overview / System State" mode="problem" />
        </motion.div>

        {/* ── STAGE 2: Chapter 01 — Problem (Centered Intimate Narrative) ── */}
        {workChapters[0] && (
          <motion.article
            variants={sr}
            className="mb-28 max-w-2xl mx-auto text-center"
          >
            <span className="mb-2 block font-mono text-kicker tracking-[0.18em] text-muted-foreground/60 uppercase">
              {workChapters[0].number} {"//"} {workChapters[0].question}
            </span>
            <h3 className="mb-4 text-title font-semibold tracking-tight text-foreground">
              {workChapters[0].heading}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
              {workChapters[0].content}
            </p>
          </motion.article>
        )}

        {/* ── STAGE 3: Chapter 02 — Complexity (Asymmetric 40/60 Split) ── */}
        {workChapters[1] && (
          <motion.article
            variants={sr}
            className="mb-28 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center"
          >
            <div className="lg:col-span-5 h-64 sm:h-72">
              <VisualSpecimen
                label={workChapters[1].visualLabel}
                mode={workChapters[1].visualMode}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
              <span className="mb-2 font-mono text-kicker tracking-[0.18em] text-muted-foreground/60 uppercase">
                {workChapters[1].number} {"//"} {workChapters[1].question}
              </span>
              <h3 className="mb-4 text-heading font-semibold tracking-tight text-foreground">
                {workChapters[1].heading}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
                {workChapters[1].content}
              </p>
            </div>
          </motion.article>
        )}

        {/* ── STAGE 4: Chapter 03 & 04 — Dual Specimen Gallery ── */}
        <div className="mb-28 grid grid-cols-1 gap-8 md:grid-cols-2">
          {workChapters.slice(2, 4).map((chapter) => (
            <motion.article
              key={chapter.id}
              variants={sr}
              className="flex flex-col rounded-2xl border border-border/30 bg-surface/30 p-6 sm:p-8"
            >
              <div className="h-48 mb-6">
                <VisualSpecimen label={chapter.visualLabel} mode={chapter.visualMode} />
              </div>
              <span className="mb-1 font-mono text-kicker tracking-[0.16em] text-muted-foreground/60 uppercase">
                {chapter.number} {"//"} {chapter.question}
              </span>
              <h3 className="mb-3 text-heading font-semibold tracking-tight text-foreground">
                {chapter.heading}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
                {chapter.content}
              </p>
            </motion.article>
          ))}
        </div>

        {/* ── STAGE 5: Special Feature — "Behind One Decision" ── */}
        <motion.section
          variants={sr}
          className="mb-28 rounded-2xl border border-primary/25 bg-surface-sunken/80 p-8 sm:p-12 relative overflow-hidden shadow-elevation-2"
        >
          <div className="absolute top-0 right-0 p-4 font-mono text-[0.625rem] text-primary/60 uppercase tracking-widest">
            {"Editorial Feature // Technical Trade-Off"}
          </div>
          <h3 className="mb-3 text-title font-semibold tracking-tight text-foreground max-w-2xl">
            {workBehindOneDecision.title}
          </h3>
          <p className="mb-6 font-mono text-xs text-primary/90">
            {workBehindOneDecision.subtitle}
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
            {workBehindOneDecision.content}
          </p>
        </motion.section>

        {/* ── STAGE 6: Chapter 05 — Outcomes Monolith ── */}
        {workChapters[4] && (
          <motion.div variants={sr} className="mb-28">
            <div className="mb-8 text-center max-w-xl mx-auto">
              <span className="mb-1 block font-mono text-kicker tracking-[0.18em] text-muted-foreground/60 uppercase">
                {workChapters[4].number} {"//"} {workChapters[4].question}
              </span>
              <h3 className="text-title font-semibold tracking-tight text-foreground">
                {workChapters[4].heading}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workMeaningfulOutcomes.map((outcome) => (
                <div
                  key={outcome.category}
                  className="rounded-xl border border-border/30 bg-surface/40 p-5 transition-colors duration-200 hover:border-primary/30"
                >
                  <span className="font-mono text-xs text-primary uppercase tracking-wider block mb-1">
                    {outcome.category}
                  </span>
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    {outcome.metric}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {outcome.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── STAGE 7: Chapter 06 — Retrospective ("Looking Back") ── */}
        {workChapters[5] && (
          <motion.article
            variants={sr}
            className="mb-20 rounded-2xl border border-border/40 bg-surface/30 p-8 sm:p-10"
          >
            <span className="mb-2 block font-mono text-kicker tracking-[0.18em] text-primary uppercase">
              {workChapters[5].number} {"//"} {workChapters[5].question}
            </span>
            <h3 className="mb-4 text-heading font-semibold tracking-tight text-foreground">
              {workChapters[5].heading}
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
              {workChapters[5].content}
            </p>
          </motion.article>
        )}

        {/* ── Action Links & Source ── */}
        <motion.div variants={sr} className="flex flex-wrap items-center justify-center gap-4">
          {workLinks.map((link) => (
            <Button
              key={link.label}
              variant={link.primary ? "primary" : "outline"}
              size="lg"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <span className="ml-1.5 text-xs opacity-60" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Button>
          ))}
        </motion.div>

        {/* ── Signal Axis Bottom Divider ── */}
        <div
          className="mt-20 h-px w-full"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, transparent, color-mix(in oklch, var(--signal-beam) 30%, transparent), transparent)",
          }}
        />
      </div>
    </motion.section>
  );
}
