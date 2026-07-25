import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";

export function AboutContent() {
  return (
    <div className="flex flex-col gap-8">
      <Badge variant="outline">About</Badge>

      <Heading as="h2" size="title">
        More than writing code,
        <br />
        I enjoy building experiences.
      </Heading>

      <div className="flex flex-col gap-5 max-w-prose text-muted-foreground">
        <p className="text-base leading-7 sm:text-lg">
          I&apos;m currently pursuing a Bachelor&apos;s degree in Data Science while
          exploring the intersection of software engineering, AI, and thoughtful
          product design.
        </p>
        <p className="text-base leading-7 sm:text-lg">
          I enjoy turning ideas into polished digital experiences that are fast,
          intuitive, and purposeful. Whether I&apos;m building responsive websites,
          experimenting with AI-assisted workflows, or refining user interfaces,
          I&apos;m always focused on creating software that people genuinely enjoy
          using.
        </p>
      </div>

      <p className="text-base leading-7 sm:text-lg text-foreground max-w-prose">
        I believe good software isn&apos;t just functional&mdash;it should feel
        effortless.
      </p>
    </div>
  );
}
