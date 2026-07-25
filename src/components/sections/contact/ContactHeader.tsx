import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";

import { contactContent } from "@/content/contact";

export function ContactHeader() {
  return (
    <div className="flex flex-col gap-4">
      <Badge variant="outline">{contactContent.eyebrow}</Badge>
      <Heading as="h2" size="title">
        {contactContent.heading}
      </Heading>
      <p className="max-w-prose text-base leading-7 text-muted-foreground sm:text-lg">
        {contactContent.description}
      </p>
    </div>
  );
}
