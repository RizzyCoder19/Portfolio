"use client";

import Lenis from "lenis";
import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";

import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";

type LenisContextValue = Lenis | null;

export const LenisContext = createContext<LenisContextValue>(null);

export function SmoothScrollProvider({ children }: PropsWithChildren) {
  const [lenis, setLenis] = useState<LenisContextValue>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    registerGsapPlugins();

    const instance = new Lenis({
      autoRaf: false,
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
    });

    const update = (time: number) => {
      instance.raf(time * 1000);
    };

    instance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    return () => {
      instance.off("scroll", ScrollTrigger.update);
      instance.destroy();
      gsap.ticker.remove(update);
      setLenis(null);
    };
  }, []);

  const value = useMemo(() => lenis, [lenis]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
