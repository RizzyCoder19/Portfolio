"use client";

import { useContext } from "react";

import { LenisContext } from "@/components/layout/smooth-scroll-provider";

export function useLenis() {
  return useContext(LenisContext);
}
