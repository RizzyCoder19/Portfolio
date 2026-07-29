export const introStatement =
  "Good software explains itself.\nI'm here to build it." as const;

// — Intro cinematic sequence (~5.2s total) —

/** Duration of initial black screen (ms). */
export const introBlackDuration = 300 as const;

/** Duration for the horizontal beam to grow from center (ms). */
export const introBeamGrowDuration = 700 as const;

/** Pause after beam is fully grown before line 1 appears (ms). */
export const introBeamRestDuration = 300 as const;

/** Duration for line 1 to fade in (ms). */
export const introLine1FadeDuration = 500 as const;

/** Gap after line 1 fully visible before beam brightens (ms). */
export const introBeamBrightenDelay = 200 as const;

/** Duration for the beam to subtly brighten (ms). */
export const introBeamBrightenDuration = 300 as const;

/** Duration for line 2 to fade in (ms). */
export const introLine2FadeDuration = 500 as const;

/** Duration the complete composition is held for reading (ms). */
export const introHoldDuration = 1400 as const;

/** Duration for the beam to fade out (ms). */
export const introBeamFadeDuration = 400 as const;

/** Duration for the text to fade out after beam is gone (ms). */
export const introTextFadeDuration = 400 as const;

/** Final pause before portfolio reveals (ms). */
export const introFinalPause = 250 as const;

// — Computed delay offsets (from start) —

export const introBeamGrowDelay = introBlackDuration; // 300
export const introLine1FadeDelay =
  introBlackDuration + introBeamGrowDuration + introBeamRestDuration; // 1300
export const introBeamBrightenDelayFromStart =
  introLine1FadeDelay + introLine1FadeDuration + introBeamBrightenDelay; // 2000
export const introLine2FadeDelay =
  introBeamBrightenDelayFromStart + introBeamBrightenDuration; // 2300
export const introHoldDelay =
  introLine2FadeDelay + introLine2FadeDuration; // 2800
export const introBeamFadeDelay =
  introHoldDelay + introHoldDuration; // 4200
export const introTextFadeDelay =
  introBeamFadeDelay + introBeamFadeDuration; // 4600
export const introDoneDelay =
  introTextFadeDelay + introTextFadeDuration + introFinalPause; // 5250
