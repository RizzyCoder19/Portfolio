export const introStatement =
  "Software isn't just built.\nIt is experienced." as const;

// — Intro timing (total ~4.4s) —

/** Delay before the vertical beam begins fading in (ms). */
export const introBeamDelay = 600 as const;

/** Delay before the first line begins fading in (ms). */
export const introLine1Delay = 1200 as const;

/** Delay before the second line begins fading in (ms). */  
export const introLine2Delay = 2200 as const;

/** Duration both lines remain visible for reading (ms). */
export const introReadDuration = 2200 as const;

/** Duration for the text fade-out (ms). */
export const introTextFadeDuration = 600 as const;

/** Duration for the beam fade-out (ms). */
export const introBeamFadeDuration = 600 as const;

/** Pause after everything has faded before revealing the portfolio (ms). */
export const introPause = 300 as const;
