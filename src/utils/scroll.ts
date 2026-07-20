import { useCallback } from "react";

import type Lenis from "lenis";

import { useLenis } from "@/hooks/use-lenis";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

export function useScrollTo() {
  const lenis = useLenis();
  const reducedMotion = useReducedMotionPreference();

  return useCallback(
    (target: string | number | HTMLElement, opts?: { offset?: number }) => {
      const offset = opts?.offset ?? 0;

      const top =
        typeof target === "number"
          ? target
          : typeof target === "string"
            ? resolveTargetTop(target, offset)
            : target.getBoundingClientRect().top + window.scrollY - offset;

      if (typeof top !== "number" || Number.isNaN(top)) return;

      if (reducedMotion) {
        window.scrollTo({ top, behavior: "auto" });
        return;
      }

      // Lenis-aware scroll.
      if (lenis) {
        // Lenis accepts either number or object; we pass number.
        (lenis as Lenis).scrollTo(top, { immediate: false });
        return;
      }

      window.scrollTo({ top, behavior: "smooth" });
    },
    [lenis, reducedMotion],
  );
}

function resolveTargetTop(selector: string, offset: number) {
  const el = document.querySelector(selector);
  if (!el) return undefined;

  return el.getBoundingClientRect().top + window.scrollY - offset;
}
