"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

interface HeroVisualProps {
  entered: boolean;
  children?: ReactNode;
}

/**
 * HeroVisual — Spatial anchor for the Asymmetric Stack composition.
 *
 * This is NOT a media container. It is a structural object that organizes
 * the hero composition through its presence alone. Even when empty, it
 * occupies the left 40% of the viewport as a defined, bounded column.
 *
 * Design:
 * - Full-height left column with subtle material depth
 * - Light gradient: cooler at top → warmer at bottom
 * - Faint vertical glow at the right edge (the "beam")
 * - Grain texture for tactile quality
 *
 * Children override the default. Layout remains beautiful regardless.
 */
export function HeroVisual({ entered, children }: HeroVisualProps) {
  return (
    <motion.div
      className="anchor-grain relative h-full w-full overflow-hidden"
      aria-hidden="true"
      initial={{ opacity: 0, filter: "brightness(0.3)" }}
      animate={
        entered
          ? { opacity: 1, filter: "brightness(1)" }
          : { opacity: 0, filter: "brightness(0.3)" }
      }
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children ?? (
        <>
          {/* Core material surface */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklch, var(--primary) 4%, var(--surface)) 0%, color-mix(in oklch, var(--primary) 8%, var(--surface-sunken)) 100%)",
            }}
          />

          {/* Inner shadow — recessed depth */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: "inset 0 0 60px oklch(0 0 0 / 0.06)",
            }}
          />

          {/* Warm light source at bottom */}
          <div
            className="absolute bottom-0 left-1/2 h-[50%] w-[80%] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center bottom, color-mix(in oklch, var(--scene-warmth) 12%, transparent) 0%, transparent 70%)",
            }}
          />

          {/* Beam glow — faint vertical glow at right edge */}
          <div
            className="beam-glow pointer-events-none absolute right-0 top-0 h-full w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent 10%, color-mix(in oklch, var(--signal-beam) 30%, transparent) 50%, transparent 90%)",
            }}
          />
        </>
      )}

      {/* Right edge fade — blends into column gap */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-12"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklch, var(--background) 60%, transparent))",
        }}
      />
    </motion.div>
  );
}

