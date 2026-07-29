/**
 * Scene Two — Philosophy & About Content
 */

export const aboutHeadingLines: readonly string[] = [
  "Curious about how code",
  "becomes a great experience.",
] as const;

export const aboutParagraph =
  "My background is in Data Science, but while working with datasets and scripts, I realized I was most excited about building the actual interface—the part people see, touch, and interact with. I loved the immediate feedback of frontend work: writing code and instantly seeing how it changes what a user experiences. I'm still early in my journey, so I treat every project as a hands-on classroom. Right now, I'm focusing on React, Next.js, and TypeScript, trying to understand how to write clean, reusable components instead of just making things work. I pay close attention to small details like keyboard navigation, contrast, and smooth transitions because I think those details show whether a builder truly cared about the person using their app." as const;

export const aboutPrinciples: readonly {
  number: string;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    title: "Animations should guide, not distract.",
    description:
      "I try to keep motion subtle. If an animation doesn't help explain a state change or feel natural, I leave it out.",
  },
  {
    number: "02",
    title: "Good interfaces feel effortless.",
    description:
      "Users shouldn't have to figure out how to navigate. I aim to keep layouts intuitive so the tech stays out of the way.",
  },
  {
    number: "03",
    title: "Always be learning.",
    description:
      "I don't know everything, but I enjoy digging into documentation, trying out new web APIs, and building projects to sharpen my skills.",
  },
] as const;
