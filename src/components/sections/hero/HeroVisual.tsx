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
 * - Full-height left column with sophisticated layered lighting
 * - Multi-stage gradient system: cool top → warm bottom (editorial depth)
 * - Layered light interactions: cool rim light + warm ambient + focal warmth
 * - Faint vertical glow at the right edge (the "beam") — signal anchor
 * - Grain texture for tactile quality
 * - Subtle depth animation on entrance
 *
 * Children override the default. Layout remains beautiful regardless.
 */
export function HeroVisual({ entered, children }: HeroVisualProps) {
  return (
    <motion.div
      className="hero-grain relative h-full w-full overflow-hidden"
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
          {/* ── Foundation: Core material surface gradient ── */}
          {/* Base tone progressively shifts from cool (primary tint) to warm (sunken tint) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, " +
                "color-mix(in oklch, var(--primary) 7%, var(--surface)) 0%, " +
                "color-mix(in oklch, var(--primary) 4%, var(--surface-sunken)) 38%, " +
                "color-mix(in oklch, var(--scene-warmth) 6%, var(--surface-sunken)) 100%)",
            }}
          />

          {/* Soft signal glow — echoes intro beam without drawing a line */}
          <div
            className="signal-glow pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 72% 42%, " +
                "color-mix(in oklch, var(--signal-beam) 10%, transparent) 0%, " +
                "transparent 62%)",
            }}
          />

          {/* ── Layer 1: Cool rim light from top-left (day key light) ── */}
          {/* Subtle cool-toned glow suggesting upper ambient light source */}
          <div
            className="hero-light-rim absolute -top-[20%] -left-[15%] h-[60%] w-[60%] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, " +
                "color-mix(in oklch, var(--primary) 11%, transparent) 0%, " +
                "transparent 65%)",
              opacity: 0.82,
            }}
          />

          {/* ── Layer 2: Warm ambient light from bottom (fill light) ── */}
          {/* Creates warmth and approachability, balances cool key light */}
          <div
            className="hero-light-ambient absolute bottom-0 left-1/2 h-[55%] w-[85%] -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center bottom, " +
                "color-mix(in oklch, var(--scene-warmth) 18%, transparent) 0%, " +
                "transparent 72%)",
            }}
          />

          {/* ── Layer 3: Central warmth focus (back light, focal depth) ── */}
          {/* Concentrated slightly higher to create layered luminosity */}
          <div
            className="hero-light-focal absolute left-1/2 top-[35%] h-[40%] w-[70%] -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, " +
                "color-mix(in oklch, var(--scene-warmth) 8%, transparent) 0%, " +
                "transparent 75%)",
            }}
          />

          {/* ── Layer 4: Inner shadow — recessed depth (material concavity) ── */}
          {/* Soft inset shadow gives the surface a recessed, framed quality */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow:
                "inset 0 0 80px oklch(0 0 0 / 0.08), " +
                "inset 0 2px 8px oklch(0 0 0 / 0.04)",
            }}
          />

          {/* ── Layer 5: Beam glow — vertical signal anchor at right edge ── */}
          {/* Faint but persistent accent color that echoes the signal beam language */}
          <div
            className="beam-glow pointer-events-none absolute right-0 top-0 h-full w-px"
            style={{
              background:
                "linear-gradient(to bottom, " +
                "transparent 8%, " +
                "color-mix(in oklch, var(--signal-beam) 35%, transparent) 50%, " +
                "transparent 92%)",
            }}
          />

          {/* ── Layer 6: Right edge gradient fade ── */}
          {/* Smooth blend into the column gap, preventing hard edge */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16"
            style={{
              background:
                "linear-gradient(to right, " +
                "transparent 0%, " +
                "color-mix(in oklch, var(--background) 40%, transparent) 70%, " +
                "var(--background) 100%)",
            }}
          />

          {/* ── Layer 7: Top edge subtle fade ── */}
          <div
            className="pointer-events-none absolute top-0 inset-x-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, " +
                "color-mix(in oklch, var(--background) 20%, transparent), " +
                "transparent)",
              opacity: 0.5,
            }}
          />

          {/* Horizon echo — continuity with intro beam axis */}
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] h-px w-[min(72%,18rem)] -translate-x-1/2 opacity-40 lg:opacity-55"
            style={{
              background:
                "linear-gradient(to right, transparent, " +
                "color-mix(in oklch, var(--signal-beam) 22%, transparent) 35%, " +
                "color-mix(in oklch, var(--signal-beam) 22%, transparent) 65%, transparent)",
            }}
          />

          {/* Edge vignette — keeps the anchor feeling dimensional, not flat */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 85% 90% at 35% 45%, transparent 42%, " +
                "color-mix(in oklch, var(--background) 12%, transparent) 100%)",
            }}
          />
        </>
      )}
    </motion.div>
  );
}

