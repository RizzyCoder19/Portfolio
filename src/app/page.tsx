import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Experiments } from "@/components/sections/experiments";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main-content" className="min-h-svh" tabIndex={-1}>
      <Hero />
      <About />
      <Work />
      <Experiments />
      <Contact />
    </main>
  );
}
