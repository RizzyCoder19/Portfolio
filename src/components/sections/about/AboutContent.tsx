import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import {
  aboutEyebrow,
  aboutHeadingLines,
  aboutParagraphs,
  aboutEmphasis,
} from "@/content/about";

export function AboutContent() {
  return (
    <div className="flex flex-col gap-8">
      <Badge variant="outline">{aboutEyebrow}</Badge>

      <Heading as="h2" size="title">
        {aboutHeadingLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < aboutHeadingLines.length - 1 && <br />}
          </span>
        ))}
      </Heading>

      <div className="flex flex-col gap-5 max-w-prose text-muted-foreground">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-7 sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      <p className="text-base leading-7 sm:text-lg text-foreground max-w-prose">
        {aboutEmphasis}
      </p>
    </div>
  );
}
