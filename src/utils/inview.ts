export function isElementInViewport(
  el: Element,
  options?: {
    rootMargin?: string;
  },
) {
  const rect = el.getBoundingClientRect();

  const rootMargin = options?.rootMargin ?? "0px";
  const margin = parseRootMargin(rootMargin);

  return (
    rect.top >= 0 - margin.top &&
    rect.left >= 0 - margin.left &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + margin.bottom &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + margin.right
  );
}

function parseRootMargin(rootMargin: string) {
  // Minimal parser for the common "top right bottom left" space-separated format.
  // If it can't parse, default to zeros.
  const parts = rootMargin.split(/\s+/).filter(Boolean);

  const toNum = (v: string | undefined) => {
    if (!v) return 0;
    const n = Number(v.replace("px", ""));
    return Number.isFinite(n) ? n : 0;
  };

  if (parts.length === 1) {
    const v = toNum(parts[0]);
    return { top: v, right: v, bottom: v, left: v };
  }

  if (parts.length === 2) {
    const vY = toNum(parts[0]);
    const vX = toNum(parts[1]);
    return { top: vY, right: vX, bottom: vY, left: vX };
  }

  if (parts.length === 4) {
    return {
      top: toNum(parts[0]),
      right: toNum(parts[1]),
      bottom: toNum(parts[2]),
      left: toNum(parts[3]),
    };
  }

  return { top: 0, right: 0, bottom: 0, left: 0 };
}
