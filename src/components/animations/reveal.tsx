"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

import { createStagger, revealVariants } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ delay = 0, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={shouldReduceMotion ? undefined : revealVariants}
      transition={{ delay }}
      {...props}
    />
  );
}

export function Stagger({ children, ...props }: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={shouldReduceMotion ? undefined : createStagger()}
      {...props}
    >
      {children}
    </motion.div>
  );
}
