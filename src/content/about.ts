/**
 * Scene Two — Philosophy
 *
 * This scene answers: How does Khan Umar think?
 * Not: What does Khan Umar know?
 *
 * No buzzwords. No skill lists. No "passionate developer."
 * One heading. One honest paragraph. Three principles.
 */

/** The heading — unchanged, as requested. */
export const aboutHeadingLines: readonly string[] = [
  "More than writing code,",
  "I enjoy building experiences.",
] as const;

/** A single honest paragraph — sounds like a real person, not a brand. */
export const aboutParagraph =
  "I started building for the web because I wanted to create things people would actually enjoy using. That curiosity eventually led me to study Data Science, but somewhere along the way I found myself becoming just as interested in how software feels as how it works. Today I'm focused on frontend engineering\u2014building interfaces that are fast, thoughtful and intentional. I enjoy refining interactions, simplifying complexity and paying attention to details most people never consciously notice. I'm still early in my journey, but I care far more about building things properly than building them quickly. Every project is another opportunity to learn, improve and leave something better than I found it. I also spend an unreasonable amount of time refining small details, because those details are often what people remember." as const;

/**
 * Three editorial principles.
 * These reveal engineering philosophy. Not technologies.
 * Each: number | title | one concise explanation.
 */
export const aboutPrinciples: readonly {
  number: string;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    title: "Motion should have a reason.",
    description:
      "If an animation doesn\u2019t improve understanding or make an interaction feel more natural, it probably doesn\u2019t belong.",
  },
  {
    number: "02",
    title: "Complexity belongs behind the interface.",
    description:
      "Users shouldn\u2019t need to think about the work happening underneath. Good software quietly gets out of the way.",
  },
  {
    number: "03",
    title: "I\u2019m never really finished learning.",
    description:
      "Every project teaches me something new. The goal isn\u2019t perfection\u2014it\u2019s becoming better than I was on the last build.",
  },
] as const;
