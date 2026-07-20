import { useCallback } from "react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

export function useAnimationGuard() {
  const reducedMotion = useReducedMotionPreference();

  return useCallback(
    <T>(value: T): T | undefined => {
      if (reducedMotion) return undefined;
      return value;
    },
    [reducedMotion],
  );
}

export function withReducedMotionFallback<T>(
  reducedMotion: boolean,
  value: T,
  fallback: T,
) {
  return reducedMotion ? fallback : value;
}
