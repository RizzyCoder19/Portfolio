"use client";

import { useReducedMotion as useMotionReducedMotion } from "motion/react";

export function useReducedMotionPreference() {
  return useMotionReducedMotion() ?? false;
}
