import { contactContent } from "@/content/contact";

export function ContactClosing() {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm leading-relaxed text-muted-foreground">
        {contactContent.closing.line1}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {contactContent.closing.line2}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {contactContent.closing.line3}
      </p>
    </div>
  );
}
