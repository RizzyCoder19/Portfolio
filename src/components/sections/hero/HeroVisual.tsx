"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

interface HeroVisualProps {
  entered: boolean;
  children?: ReactNode;
}

/**
 * HeroVisual — Monolithic Craft Anchor.
 *
 * Derives its visual impact entirely from composition, lighting, obsidian materials,
 * and restraint — without any decorative text labels or artificial badges.
 *
 * Architectural Features:
 * - Obsidian Dark Romance surface depth
 * - Recessed inner ambient lighting (cool obsidian top → warm bordeaux glow at base)
 * - Fine tactile grain overlay
 * - Hairline signal seam accent along the right axis
 */
export function HeroVisual({ entered, children }: HeroVisualProps) {
  return (
    <motion.div
      className="hero-grain relative h-full w-full overflow-hidden flex items-center justify-center p-4 sm:p-8"
      aria-hidden="true"
      initial={{ opacity: 0, filter: "brightness(0.3)" }}
      animate={
        entered
          ? { opacity: 1, filter: "brightness(1)" }
          : { opacity: 0, filter: "brightness(0.3)" }
      }
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children ?? (
        <div className="relative aspect-[4/5] w-full max-w-[360px] rounded-2xl border border-border/40 overflow-hidden shadow-elevation-3 transition-transform duration-700 hover:scale-[1.01]">
          {/* Core obsidian material surface */}
          <div
            className="absolute inset-0 bg-surface-sunken"
            style={{
              background:
                "linear-gradient(170deg, oklch(0.15 0.015 285) 0%, oklch(0.11 0.012 285) 60%, oklch(0.13 0.02 25) 100%)",
            }}
          />

          {/* Inner shadow — architectural depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 70px oklch(0 0 0 / 0.5)",
            }}
          />

          {/* Dark romance ambient warm light projection at base */}
          <div
            className="absolute -bottom-10 left-1/2 h-[60%] w-[110%] -translate-x-1/2 rounded-full pointer-events-none opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at center bottom, color-mix(in oklch, var(--scene-warmth) 18%, transparent) 0%, transparent 75%)",
            }}
          />

          {/* Subtle central signal beam highlight reflection */}
          <div
            className="absolute top-0 left-1/2 h-[70%] w-px -translate-x-1/2 pointer-events-none opacity-30"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-signal-beam) 40%, transparent 90%)",
            }}
          />

          {/* Razor-thin highlight line along upper edge */}
          <div
            className="absolute inset-x-0 top-0 h-px pointer-events-none opacity-40"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.8 0.02 285 / 0.25) 40%, oklch(0.8 0.02 285 / 0.25) 60%, transparent)",
            }}
          />
        </div>
      )}

      {/* Right edge seam gradient fade into spatial gap */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklch, var(--background) 70%, transparent))",
        }}
      />
    </motion.div>
  );
}
