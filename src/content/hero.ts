/**
 * Hero scene copy — The Signal, Direction C: Asymmetric Stack.
 *
 * The name appears as part of a structural rule (─── Khan Umar ───),
 * not as a floating headline. The statement is the hero.
 * CTAs are specific actions, not generic labels.
 */

/** The name — embedded in a structural rule, not floating. */
export const heroSignature = "Khan Umar" as const;

/**
 * The headline — the single most important line on the page.
 * Split across two lines. The first line is the action, the second is the promise.
 * Together they answer "what do you do?" and "why does it matter?"
 */
export const heroHeadline = ["Building software", "that feels inevitable."] as const;


/** Personal mission line — direct, human, and product-focused. */
export const heroMissionLine =
  "I design and engineer interfaces that users enjoy using." as const;

/** CTA labels — specific, action-oriented. */
export const heroCtaLabels: readonly [string, string] = [
  "See the Case Study",
  "Start a conversation",
] as const;

