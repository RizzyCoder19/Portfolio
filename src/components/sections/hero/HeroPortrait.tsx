"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroPortraitProps {
  entered: boolean;
}

export function HeroPortrait({ entered }: HeroPortraitProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={
        reducedMotion
          ? { opacity: 1 }
          : entered
            ? { opacity: 1, clipPath: "inset(0 0 0% 0)" }
            : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
      }
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }
      }
    >
      <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
        <Image
          src="/images/portrait.png"
          alt="Khan Umar portrait"
          width={800}
          height={1067}
          priority
          className={cn(
            "aspect-[3/4] w-full object-cover",
            "rounded-2xl",
            "bg-surface",
          )}
        />
        <div
          className="absolute inset-x-0 -bottom-6 h-16 bg-gradient-to-t from-background to-transparent lg:hidden"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
