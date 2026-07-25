import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";

import { experimentsContent } from "@/content/experiments";

export function ExperimentsHeader() {
  return (
    <div className="flex flex-col gap-4">
      <Badge variant="outline">{experimentsContent.eyebrow}</Badge>
      <Heading as="h2" size="title">
        {experimentsContent.heading}
      </Heading>
      <p className="max-w-prose text-base leading-7 text-muted-foreground sm:text-lg">
        {experimentsContent.description}
      </p>
    </div>
  );
}
