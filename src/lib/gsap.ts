export async function loadGSAP() {
  if (typeof window === "undefined") {
    return null;
  }

  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);

  gsap.registerPlugin(ScrollTrigger);

  return { gsap, ScrollTrigger };
}
