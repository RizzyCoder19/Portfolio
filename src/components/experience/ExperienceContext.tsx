"use client";

import { createContext, useContext } from "react";

export interface ExperienceContextValue {
  /** True once the intro screen has fully completed its exit. */
  introComplete: boolean;
}

export const ExperienceContext = createContext<ExperienceContextValue>({
  introComplete: false,
});

export function useExperience(): ExperienceContextValue {
  return useContext(ExperienceContext);
}
