import { contactContent } from "@/content/contact";

export function ContactAvailability() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {contactContent.availability.label}
      </p>
      <p className="text-sm leading-relaxed text-foreground">
        {contactContent.availability.description}
      </p>
    </div>
  );
}
