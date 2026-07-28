"use client";

import { Section } from "@/components/ui/section";
import { AboutContent } from "./about/AboutContent";
import { AboutPortrait } from "./about/AboutPortrait";

export function About() {
  return (
    <Section
      id="about"
      container={false}
      spacing="none"
      className="relative min-h-svh overflow-hidden"
      aria-label="Philosophy"
    >
      <div className="relative mx-auto grid min-h-svh w-full max-w-7xl grid-cols-1 gap-0 px-page py-section lg:grid-cols-12">
        <div className="col-span-1 flex flex-col justify-center lg:col-span-7">
          <AboutContent />
        </div>
        <div className="col-span-1 lg:col-span-5">
<AboutPortrait />
        </div>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />
    </Section>
  );
}
