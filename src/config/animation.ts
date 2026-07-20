export const animationConfig = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    base: 0.35,
    slow: 0.55,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1],
    enter: [0.16, 1, 0.3, 1],
    exit: [0.7, 0, 0.84, 0],
  },
  stagger: 0.08,
} as const;
