"use client";

import { useState, useRef, type MouseEvent } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { heroCtaLabels } from "@/content/hero";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/utils/scroll";

/* ─── Entrance Stagger Variants ────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const ctaRevealVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const instantVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Cinematic Spring Config ────────────────────────────────────────────── */

const luxurySpring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
  mass: 0.8,
};

const magneticSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 24,
  mass: 0.5,
};

const cinematicEase = [0.16, 1, 0.3, 1] as const;

interface HeroActionsProps {
  entered: boolean;
}

export function HeroActions({ entered }: HeroActionsProps) {
  const scrollTo = useScrollTo();
  const reducedMotion = useReducedMotion();
  const revealVariant = reducedMotion ? instantVariants : ctaRevealVariants;

  return (
    <motion.div
      className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
    >
      {/* ── Primary Luxury CTA (with Magnetic & Specular Sweep) ── */}
      <motion.div variants={revealVariant}>
        <PrimaryCta
          label={heroCtaLabels[0]}
          onClick={() => scrollTo("#work", { offset: 0 })}
          reducedMotion={!!reducedMotion}
        />
      </motion.div>

      {/* ── Secondary Luxury CTA ── */}
      <motion.div variants={revealVariant}>
        <SecondaryCta
          label={heroCtaLabels[1]}
          onClick={() => scrollTo("#contact", { offset: 0 })}
          reducedMotion={!!reducedMotion}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Primary CTA Component
 * - Hairline border with polished specular light sweep
 * - Magnetic 2-4px cursor attraction (within ~80px)
 * - Underline grows from cursor entry position
 * - Text remains stable while container moves
 * - Arrow slides 6px right on hover
 * ─────────────────────────────────────────────────────────────────────────── */

interface CtaProps {
  label: string;
  onClick: () => void;
  reducedMotion: boolean;
}

function PrimaryCta({ label, onClick, reducedMotion }: CtaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [originX, setOriginX] = useState("50%");
  const [magneticPos, setMagneticPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [sweepKey, setSweepKey] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);

  /* Proximity Magnetic Attractor (~80px detection radius) */
  const handleProximityMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    const maxProximity = 80;
    if (distance < maxProximity) {
      /* Subtle 2–4px max pull */
      const pull = 0.045;
      const magX = Math.max(-4, Math.min(4, deltaX * pull));
      const magY = Math.max(-4, Math.min(4, deltaY * pull));
      setMagneticPos({ x: magX, y: magY });
    } else {
      setMagneticPos({ x: 0, y: 0 });
    }
  };

  const handleProximityMouseLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPercent = Math.min(
      100,
      Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)
    );
    setOriginX(`${xPercent.toFixed(1)}%`);
    setSweepKey((prev) => prev + 1);
    setIsHovered(true);
  };

  return (
    <div
      className="relative p-5 -m-5 inline-block"
      onMouseMove={handleProximityMouseMove}
      onMouseLeave={handleProximityMouseLeave}
    >
      <motion.button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        animate={
          reducedMotion
            ? undefined
            : {
                x: magneticPos.x,
                y: magneticPos.y + (isHovered ? -2 : 0),
                scale: isHovered ? 1.01 : 1,
              }
        }
        whileTap={reducedMotion ? undefined : { scale: 0.98, y: 0 }}
        transition={magneticSpring}
        className={cn(
          "group relative inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-medium",
          "text-foreground bg-foreground/[0.025] hover:bg-foreground/[0.045]",
          "border border-foreground/15 hover:border-foreground/30",
          "transition-colors duration-300",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "overflow-hidden cursor-pointer selection:bg-transparent",
        )}
        aria-label={`${label} — navigate to work section`}
      >
        {/* ── Polished Specular Light Sweep (500–700ms directional highlight) ── */}
        {!reducedMotion && isHovered && (
          <motion.span
            key={sweepKey}
            className="pointer-events-none absolute inset-0 rounded-full z-10"
            aria-hidden="true"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: ["-100%", "160%"], opacity: [0, 0.08, 0.08, 0] }}
            transition={{
              duration: 0.65,
              ease: cinematicEase,
            }}
            style={{
              background:
                "linear-gradient(115deg, transparent 20%, color-mix(in oklch, var(--color-foreground) 16%, transparent) 50%, transparent 80%)",
            }}
          />
        )}

        {/* ── Label Container (Text remains stable visually via counter-translation) ── */}
        <motion.span
          className="relative z-10 py-0.5 inline-block"
          animate={
            reducedMotion
              ? undefined
              : { x: -magneticPos.x * 0.7, y: -magneticPos.y * 0.7 }
          }
          transition={magneticSpring}
        >
          {label}

          {/* Dynamic Underline — Grows from cursor entry position */}
          <motion.span
            className="absolute -bottom-px left-0 h-px w-full bg-foreground/70 pointer-events-none"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            style={{ transformOrigin: `${originX} 100%` }}
            transition={
              reducedMotion
                ? { duration: 0.15 }
                : { duration: 0.28, ease: cinematicEase }
            }
          />
        </motion.span>

        {/* ── Arrow icon — Slides 6px right on hover ── */}
        <motion.span
          className="relative z-10 text-muted-foreground/70 group-hover:text-foreground inline-block"
          aria-hidden="true"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: (isHovered ? 6 : 0) - magneticPos.x * 0.7,
                  y: -magneticPos.y * 0.7,
                }
          }
          transition={
            reducedMotion
              ? { duration: 0.15 }
              : { duration: 0.22, ease: cinematicEase }
          }
        >
          →
        </motion.span>
      </motion.button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Secondary CTA Component
 * - Minimal, zero filled background
 * - Underline draws left to right on hover
 * - Arrow fades & slides in from left
 * - Text tracking increases subtly on hover
 * ─────────────────────────────────────────────────────────────────────────── */

function SecondaryCta({ label, onClick, reducedMotion }: CtaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={reducedMotion ? undefined : { y: -1 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98, y: 0 }}
      transition={luxurySpring}
      className={cn(
        "group relative inline-flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium",
        "text-muted-foreground hover:text-foreground bg-transparent border-none",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "cursor-pointer selection:bg-transparent",
      )}
      aria-label={`${label} — navigate to contact section`}
    >
      {/* ── Label with subtle tracking expansion ── */}
      <motion.span
        className="relative z-10 py-0.5"
        animate={
          reducedMotion
            ? undefined
            : { letterSpacing: isHovered ? "0.02em" : "0.00em" }
        }
        transition={{ duration: 0.22, ease: cinematicEase }}
      >
        {label}

        {/* Underline — draws left to right */}
        <motion.span
          className="absolute -bottom-px left-0 h-px w-full bg-foreground/60 origin-left pointer-events-none"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={
            reducedMotion
              ? { duration: 0.15 }
              : { duration: 0.26, ease: cinematicEase }
          }
        />
      </motion.span>

      {/* ── Arrow icon — Fades & slides in ── */}
      <motion.span
        className="relative z-10 text-muted-foreground/80 group-hover:text-foreground inline-block"
        aria-hidden="true"
        initial={{ opacity: 0, x: -6 }}
        animate={
          reducedMotion
            ? { opacity: isHovered ? 1 : 0 }
            : { opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -6 }
        }
        transition={{ duration: 0.22, ease: cinematicEase }}
      >
        →
      </motion.span>
    </motion.button>
  );
}
