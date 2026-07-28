"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Portrait — supporting evidence, not the subject.
 *
 * This is NOT a profile picture.
 * It's an editorial visual that anchors the right side of the spread.
 * If removed, the layout should still feel complete.
 *
 * Positioned as a half-visible element that peeks from the right edge,
 * bleeding off-screen to suggest there's more beyond the frame.
 */
export function AboutPortrait() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative hidden h-full w-full lg:block"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
      whileInView={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0 }
      }
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.6,
      }}
    >
      <div className="absolute inset-y-0 -right-12 w-[110%] overflow-hidden">
        <Image
          src="/images/portrait.png"
          alt=""
          fill
          priority={false}
          className={cn(
            "object-cover object-left",
            "opacity-80",
          )}
          sizes="40vw"
        />
        {/* Right edge fade — portrait bleeds into white space */}
        <div
          className="absolute inset-y-0 right-0 w-1/3"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--background))",
          }}
        />
        {/* Bottom fade — portrait sinks into the scene */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/4"
          style={{
            background:
              "linear-gradient(to top, var(--background), transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}
