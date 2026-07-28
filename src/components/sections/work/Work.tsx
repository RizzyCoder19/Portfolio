"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import {
  workTitle,
  workSubtitle,
  workChapters,
  workEngineeringDecisions,
  workOutcome,
  workLinks,
  type WorkChapter,
  type WorkVisualMode,
} from "@/content/work";

/* ─── Variants ────────────────────────────────────────────────────────── */

const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const titleReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const subtitleReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

const chapterReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

const instant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

/* ─── Case-study visual system ───────────────────────────────────────── */

type PortfolioVisualProps = {
  label: string;
  mode: WorkVisualMode;
  treatment: string;
};

function PortfolioVisual({ label, mode, treatment }: PortfolioVisualProps) {
  return (
    <div className="relative size-full overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 ${treatment}`} />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "2.5rem 2.5rem",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div
        className="absolute top-0 left-[16%] h-full w-px"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-signal-beam), transparent)",
          opacity: 0.22,
        }}
      />

      <div className="absolute inset-[10%] rounded-xl border border-border/35 bg-background/82 p-3 shadow-elevation-2 backdrop-blur-sm sm:inset-[12%] sm:p-5">
        <div className="flex items-center gap-1.5 border-b border-border/30 pb-3">
          <span className="size-1.5 rounded-full bg-danger/60" aria-hidden="true" />
          <span className="size-1.5 rounded-full bg-warning/60" aria-hidden="true" />
          <span className="size-1.5 rounded-full bg-success/60" aria-hidden="true" />
          <span className="ml-2 truncate text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground/55 uppercase sm:text-xs">
            Portfolio case study / {label}
          </span>
        </div>
        <VisualState mode={mode} />
      </div>
    </div>
  );
}

function VisualState({ mode }: Pick<PortfolioVisualProps, "mode">) {
  if (mode === "tokens") {
    return (
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.72fr_1.28fr] gap-3 pt-4 sm:gap-5 sm:pt-6">
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-foreground/14" />
          <div className="h-2 w-1/2 rounded-full bg-foreground/8" />
          <div className="mt-5 grid grid-cols-2 gap-2">
            <span className="aspect-square rounded-md bg-primary/70" />
            <span className="aspect-square rounded-md bg-foreground/80" />
            <span className="aspect-square rounded-md bg-muted" />
            <span className="aspect-square rounded-md border border-border bg-surface" />
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-border/35 bg-surface/60 p-3">
          <div className="space-y-2">
            <div className="h-2.5 w-full rounded-full bg-foreground/14" />
            <div className="h-2.5 w-4/5 rounded-full bg-foreground/10" />
            <div className="h-2.5 w-3/5 rounded-full bg-foreground/8" />
          </div>
          <div className="flex gap-1.5">
            {["xs", "sm", "md", "lg"].map((size) => (
              <span
                key={size}
                className="rounded border border-border/35 px-1.5 py-0.5 text-[0.5rem] text-muted-foreground/60"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (mode === "motion") {
    return (
      <div className="flex h-[calc(100%-2.5rem)] flex-col justify-center gap-4 pt-4 sm:gap-6 sm:pt-6">
        {["Entry", "Reveal", "Scroll"].map((track, index) => (
          <div
            key={track}
            className="grid grid-cols-[2.8rem_1fr] items-center gap-3 sm:grid-cols-[4rem_1fr]"
          >
            <span className="text-[0.55rem] font-medium tracking-[0.12em] text-muted-foreground/55 uppercase">
              {track}
            </span>
            <div className="relative h-px bg-border/60">
              <span
                className="absolute -top-1.5 size-3 rounded-full border border-background bg-primary shadow-sm"
                style={{ left: `${18 + index * 26}%` }}
              />
              <span
                className="absolute -top-0.5 h-0.5 rounded-full bg-primary/45"
                style={{ left: "0", width: `${36 + index * 16}%` }}
              />
            </div>
          </div>
        ))}
        <div className="ml-[2.8rem] rounded-md border border-primary/15 bg-primary/[0.06] px-3 py-2 text-[0.55rem] font-medium tracking-[0.13em] text-primary/75 uppercase sm:ml-16">
          Transform + opacity only
        </div>
      </div>
    );
  }

  if (mode === "accessibility") {
    return (
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[1fr_0.7fr] gap-4 pt-4 sm:gap-6 sm:pt-6">
        <div className="space-y-2.5">
          {["Keyboard path", "Visible focus", "Reduced motion"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-md border border-border/30 bg-surface/60 px-2.5 py-2"
            >
              <span className="flex size-3.5 items-center justify-center rounded-full bg-success/15 text-[0.55rem] text-success">
                ✓
              </span>
              <span className="text-[0.6rem] text-muted-foreground sm:text-xs">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center rounded-lg border-2 border-focus-ring/55 bg-surface/60">
          <span className="rounded-md bg-secondary px-3 py-2 text-[0.55rem] font-medium text-secondary-foreground sm:text-xs">
            Focus state
          </span>
        </div>
      </div>
    );
  }

  if (mode === "architecture") {
    return (
      <div className="flex h-[calc(100%-2.5rem)] items-center justify-center pt-4 sm:pt-6">
        <div className="grid w-full max-w-sm grid-cols-3 gap-2 text-center text-[0.55rem] font-medium text-muted-foreground sm:gap-3 sm:text-xs">
          <div className="col-span-3 rounded-md border border-primary/20 bg-primary/[0.06] px-2 py-2 text-primary/80">
            Static route
          </div>
          <div className="h-px bg-border/60" />
          <div className="h-px bg-border/60" />
          <div className="h-px bg-border/60" />
          <div className="rounded-md border border-border/35 bg-surface/70 px-1 py-2">
            UI primitives
          </div>
          <div className="rounded-md border border-border/35 bg-surface/70 px-1 py-2">
            Motion layer
          </div>
          <div className="rounded-md border border-border/35 bg-surface/70 px-1 py-2">
            Content model
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-[calc(100%-2.5rem)] grid-cols-[1.2fr_0.8fr] gap-4 pt-4 sm:gap-6 sm:pt-6">
      <div className="flex flex-col justify-center">
        <div className="h-3 w-11/12 rounded-full bg-foreground/16" />
        <div className="mt-2 h-3 w-3/4 rounded-full bg-foreground/10" />
        <div className="mt-5 h-16 rounded-lg border border-primary/15 bg-primary/[0.05]" />
      </div>
      <div className="space-y-2 rounded-lg border border-border/35 bg-surface/60 p-3">
        <div className="h-2 w-full rounded-full bg-foreground/12" />
        <div className="h-2 w-4/5 rounded-full bg-foreground/8" />
        <div className="h-2 w-2/3 rounded-full bg-foreground/8" />
        <div className="mt-4 h-7 rounded-md bg-primary/15" />
      </div>
    </div>
  );
}

function ChapterVisual({ chapter }: { chapter: WorkChapter }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-lg border border-border/40 sm:h-64 lg:h-80">
      <PortfolioVisual
        label={chapter.visualLabel}
        mode={chapter.visualMode}
        treatment={chapter.visualTreatment}
      />
    </div>
  );
}

const visualFrameRanges = [
  [0, 0.08, 0.28],
  [0.14, 0.3, 0.46],
  [0.32, 0.5, 0.66],
  [0.52, 0.7, 0.84],
  [0.72, 0.9, 1],
] as const;

function ScrollingVisualFrame({
  chapter,
  index,
  progress,
}: {
  chapter: WorkChapter;
  index: number;
  progress: MotionValue<number>;
}) {
  const [start, center, end] = visualFrameRanges[index] ?? visualFrameRanges[0];
  const opacity = useTransform(
    progress,
    [start, center, end],
    index === 0 ? [1, 1, 0] : index === workChapters.length - 1 ? [0, 1, 1] : [0, 1, 0],
  );
  const scale = useTransform(progress, [start, center, end], [0.985, 1, 1.01]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, scale, transformOrigin: "center" }}
    >
      <PortfolioVisual
        label={chapter.visualLabel}
        mode={chapter.visualMode}
        treatment={chapter.visualTreatment}
      />
    </motion.div>
  );
}

function CaseStudyVisual({
  progress,
  reducedMotion,
}: {
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const firstChapter = workChapters[0];

  if (!firstChapter) {
    return null;
  }

  if (reducedMotion) {
    return (
      <PortfolioVisual
        label="Portfolio case study"
        mode={firstChapter.visualMode}
        treatment={firstChapter.visualTreatment}
      />
    );
  }

  return (
    <div className="relative size-full" aria-hidden="true">
      {workChapters.map((chapter, index) => (
        <ScrollingVisualFrame
          key={chapter.id}
          chapter={chapter}
          index={index}
          progress={progress}
        />
      ))}
    </div>
  );
}

/* ─── Section progress bar ──────────────────────────────────────────── */

function SectionProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-40 h-0.5 origin-left"
      style={{ scaleX, background: "var(--color-signal-beam)" }}
    />
  );
}

/* ─── Main component ────────────────────────────────────────────────── */

export function Work() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress: caseStudyProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const tr = reducedMotion ? instant : titleReveal;
  const sr = reducedMotion ? instant : subtitleReveal;
  const cr = reducedMotion ? instant : chapterReveal;

  return (
    <motion.section
      ref={containerRef}
      id="work"
      className="relative py-section"
      aria-label="Featured work"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.05, once: true }}
    >
      <SectionProgress />

      <div className="mx-auto max-w-7xl px-page">
        {/* ── Header ── */}
        <div className="mb-16 lg:mb-24">
          <motion.div variants={tr}>
            <span className="mb-4 block text-kicker font-medium tracking-[--text-kicker--letter-spacing] text-muted-foreground/50 uppercase">
              Featured project
            </span>
            <Heading as="h2" size="display" className="text-balance">
              {workTitle}
            </Heading>
          </motion.div>
          <motion.p
            variants={sr}
            className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            {workSubtitle}
          </motion.p>
        </div>

        {/* ── Hero visual ── */}
        <motion.div
          variants={sr}
          className="relative mb-20 overflow-hidden rounded-2xl border border-border/30 lg:mb-28"
          style={{ aspectRatio: "16/9", background: "var(--color-surface-sunken)" }}
        >
          <CaseStudyVisual
            progress={caseStudyProgress}
            reducedMotion={Boolean(reducedMotion)}
          />
          <div
            className="absolute right-0 bottom-0 left-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-signal-beam-subtle), transparent)",
            }}
          />
        </motion.div>

        {/* ── Chapters ── */}
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-20 lg:gap-28">
            {workChapters.map((chapter, i) => (
              <motion.article
                key={chapter.id}
                custom={i}
                variants={cr}
                className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10"
              >
                <div className="lg:col-span-3">
                  <ChapterVisual chapter={chapter} />
                </div>
                <div className="flex flex-col justify-center lg:col-span-2">
                  <span className="mb-2 text-kicker font-normal tracking-[--text-kicker--letter-spacing] text-muted-foreground/30 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-heading leading-[--text-heading--line-height] font-semibold tracking-[--text-heading--letter-spacing] text-foreground">
                    {chapter.heading}
                  </h3>
                  <p className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
                    {chapter.content}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── Engineering decisions ── */}
          <motion.div
            variants={cr}
            custom={workChapters.length}
            className="mt-20 border-t border-border/30 pt-12 lg:mt-24 lg:pt-16"
          >
            <h3 className="mb-8 text-heading font-semibold text-foreground">
              Engineering decisions
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workEngineeringDecisions.map((decision) => (
                <div
                  key={decision.title}
                  className="rounded-lg border border-border/20 p-4 transition-colors duration-200 hover:border-foreground/15"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {decision.title}
                  </span>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {decision.rationale}
                  </p>
                  <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground/60">
                    {decision.implementation}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Outcome ── */}
          <motion.div
            variants={cr}
            custom={workChapters.length + 1}
            className="mt-16 border-t border-border/30 pt-12 lg:mt-20 lg:pt-16"
          >
            <h3 className="mb-4 text-heading font-semibold text-foreground">Outcome</h3>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {workOutcome}
            </p>
          </motion.div>

          {/* ── Links ── */}
          <motion.div
            variants={cr}
            custom={workChapters.length + 2}
            className="mt-10 flex flex-wrap gap-4"
          >
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

          {/* ── Currently building ── */}
          <motion.div
            variants={cr}
            custom={workChapters.length + 3}
            className="mt-16 rounded-xl border border-border/30 bg-surface/50 p-6 sm:p-8"
          >
            <span className="text-kicker font-medium tracking-[--text-kicker--letter-spacing] text-muted-foreground/50 uppercase">
              Currently building
            </span>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              An early exploration of real-time data visualisation with D3. It will be
              added when it becomes a useful case study.
            </p>
          </motion.div>

          {/* ── Bottom signal divider ── */}
          <motion.div
            variants={cr}
            custom={workChapters.length + 4}
            className="mt-16 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-signal-beam-subtle), transparent)",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
