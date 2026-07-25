import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { workEyebrow, workHeadingLines, workDescription } from "@/content/work";

export function WorkHeader() {
  return (
    <div className="flex flex-col gap-4">
      <Badge variant="outline">{workEyebrow}</Badge>

      <Heading as="h2" size="title">
        {workHeadingLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < workHeadingLines.length - 1 && <br />}
          </span>
        ))}
      </Heading>

      <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {workDescription}
      </p>
    </div>
  );
}
