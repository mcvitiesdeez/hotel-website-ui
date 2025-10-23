type EventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(event: string, payload?: EventPayload) {
  if (typeof window === "undefined") return;
  if (!window.gtag) {
    return;
  }
  window.gtag("event", event, payload ?? {});
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
