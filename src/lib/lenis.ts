import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function initLenis() {
  if (typeof window === "undefined") return null;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    lerp: 0.08,
  });

  const raf = (time: number) => {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
  return lenisInstance;
}

export function destroyLenis() {
  lenisInstance?.destroy();
  lenisInstance = null;
}
