"use client";

import { motion } from "motion/react";

interface HeroBackgroundProps {
  entered: boolean;
}

/**
 * Ambient background for the Hero section.
 *
 * Three soft radial gradient blobs drift independently using CSS keyframe
 * animations (transform-only → GPU composited, zero layout/paint cost).
 * A grain layer adds tactile texture via the `hero-grain` class (defined
 * in motion.css) that applies an SVG feTurbulence filter via ::after.
 *
 * No WebGL. No particles. No JavaScript animation loop.
 */
export function HeroBackground({ entered }: HeroBackgroundProps) {
  return (
    <motion.div
      className="hero-grain absolute inset-0 overflow-hidden"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: entered ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/*
       * Blob A — upper-left, primary hue.
       * Uses CSS custom property so it adapts between light and dark themes.
       */}
      <div
        className="hero-blob-a absolute -left-[10%] -top-[15%] h-[75vh] w-[75vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklch, var(--primary) 14%, transparent), transparent 68%)",
        }}
      />

      {/* Blob B — lower-right, slightly cooler hue for colour variation */}
      <div
        className="hero-blob-b absolute -bottom-[15%] -right-[5%] h-[60vh] w-[60vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklch, var(--primary) 8%, transparent), transparent 68%)",
        }}
      />

      {/* Blob C — centre, very faint, adds warmth and depth to the midfield */}
      <div
        className="hero-blob-c absolute left-1/2 top-1/2 h-[40vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklch, var(--primary) 5%, transparent), transparent 68%)",
        }}
      />

      {/* Radial vignette — edges recede to background colour, creates focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,var(--background)_100%)]" />

      {/*
       * Horizon line — a very faint horizontal stroke that echoes the
       * beam from the intro screen, reinforcing visual continuity.
       */}
      <div
        className="absolute left-1/2 top-[48%] h-px w-[min(60vw,520px)] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklch, var(--primary) 12%, transparent) 30%, color-mix(in oklch, var(--primary) 12%, transparent) 70%, transparent)",
        }}
      />
    </motion.div>
  );
}
