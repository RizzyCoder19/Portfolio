/**
 * Hero scene content & copy definitions.
 *
 * Identity: 50% Dark Romance × 20% Editorial × 15% Apple Restraint × 10% Technical Precision × 5% Cyberpunk
 * Primary Principle: "The Hero should feel like stepping into a private, dark-romance architectural exhibition."
 */

/** The name signature — embedded in the editorial masthead header. */
export const heroSignature = "Khan Umar" as const;

/** The accurate role title — answers "Who is this person?" within 1 second. */
export const heroRole = "Frontend & Design Engineer" as const;

/**
 * The statement headline — split across two editorial lines.
 * The first line is the action, the second line is the promise.
 */
export const heroHeadline = ["Building software", "that feels inevitable."] as const;

/**
 * Concise editorial subtitle providing contextual depth without fluff.
 */
export const heroSubtitle =
  "Crafting fast, thoughtful web applications and spatial interfaces with Apple-level restraint and Vercel technical precision." as const;

/**
 * Action triggers — specific, monoline triggers.
 */
export const heroCtaLabels: readonly [string, string] = [
  "See what I've built",
  "Start a conversation",
] as const;
