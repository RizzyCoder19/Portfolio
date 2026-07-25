import { Reveal } from "@/components/animations/reveal";
import { Section } from "@/components/ui/section";
import { ContactHeader } from "./ContactHeader";
import { ContactLinks } from "./ContactLinks";
import { ContactAvailability } from "./ContactAvailability";
import { ContactClosing } from "./ContactClosing";

export function Contact() {
  return (
    <Section
      id="contact"
      container="default"
      spacing="default"
      aria-label="Contact"
    >
      <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 max-w-5xl">
        <Reveal>
          <ContactHeader />
        </Reveal>
        <div className="flex flex-col gap-10">
          <Reveal>
            <ContactLinks />
          </Reveal>
          <Reveal>
            <ContactAvailability />
          </Reveal>
          <Reveal>
            <ContactClosing />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
