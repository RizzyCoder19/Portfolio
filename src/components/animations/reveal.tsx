"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

import { createRevealVariants, createStagger } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  blur?: boolean;
  distance?: number;
};

export function Reveal({
  delay = 0,
  blur = false,
  distance = 40,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={
        shouldReduceMotion
          ? undefined
          : createRevealVariants({ distance, blur })
      }
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
