import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";

export function WorkHeader() {
  return (
    <div className="flex flex-col gap-4">
      <Badge variant="outline">Work</Badge>

      <Heading as="h2" size="title">
        Selected projects
        <br />
        I&apos;ve built recently.
      </Heading>

      <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        A curated selection of projects that explore the intersection of
        software engineering, design, and thoughtful problem-solving.
      </p>
    </div>
  );
}
