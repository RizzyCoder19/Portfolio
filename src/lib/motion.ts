import type { Transition, Variants } from "motion/react";

import { animationConfig } from "@/config/animation";

export const transitions = {
  standard: {
    duration: animationConfig.duration.base,
    ease: animationConfig.ease.standard,
  },
  enter: {
    duration: animationConfig.duration.slow,
    ease: animationConfig.ease.enter,
  },
  exit: {
    duration: animationConfig.duration.fast,
    ease: animationConfig.ease.exit,
  },
  reveal: {
    duration: animationConfig.duration.reveal,
    ease: animationConfig.ease.easeOutCubic,
  },
} satisfies Record<string, Transition>;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.enter,
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.enter },
};

export function createRevealVariants({
  distance = 40,
  blur = false,
}: { distance?: number; blur?: boolean } = {}): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
      ...(blur ? { filter: "blur(10px)" } : {}),
    },
    visible: {
      opacity: 1,
      y: 0,
      ...(blur ? { filter: "blur(0px)" } : {}),
      transition: transitions.reveal,
    },
  };
}

export function createStagger(delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren: animationConfig.stagger,
      },
    },
  };
}
