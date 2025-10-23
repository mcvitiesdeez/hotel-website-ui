# AGENTS.md — Hotel UI Prototype (Static, Motion-Forward)

> **Mission:** Build a premium, **UI-only** hotel website with editorial aesthetics, silky animations, and a redirect to a third-party booking engine. No server state, no DB. Just vibes, accessibility, and performance.
> **Tone:** Minimalist luxury. Micro-delight, zero jank.

### Voice & Copy Guardrails

- Quiet, confident language with sensory detail; avoid exclamation marks and hype adjectives.
- Hero headlines ≤ 5 words, section intros ≤ 24 words to keep copy crisp.
- Maintain consistent editorial pacing: short declarative lead, optional supporting sentence, CTA last.
- Prepare a mini moodboard: 3 inspirational references (editorial luxury hospitality) and 2 anti-inspirations (overly busy resort sites) to align stakeholders early.

---

## 0) Scope & Non-Goals

**In scope**

- Static pages with SSG (or export) and client-side animations.
- Rooms, Offers, Experiences, Events, Gallery, About, Contact, FAQ, Location.
- **Booking CTA** → redirect to external engine with query params.
- Creative storytelling (scroll scenes), micro-interactions, smooth scrolling.

**Out of scope**

- Real availability, auth, payments, cart, server data, or PCI scope.

---

## 1) Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript (SSG/ISR only)
- **Styling:** Tailwind CSS + **shadcn/ui** (Radix primitives)
- **Animations:** **motion** (formerly Framer Motion) + **GSAP** (ScrollTrigger) + **Lottie** (animated icons/ornaments) + **Lenis** (smooth scrolling)
- **Media:** `next/image` (AVIF/WebP), responsive sizes
- **Icons:** `lucide-react`
- **Analytics:** GA4 or Plausible (click events only)
- **Lint/Format:** ESLint + Prettier
- **Package manager:** pnpm

> Performance Budgets: **LCP ≤ 2.5s**, **CLS ≤ 0.05**, **INP ≤ 200ms**, JS < 180KB gz on Home.

---

## 2) Commands (Bootstrap)

```bash
pnpm create next-app@latest hotel-ui --ts --eslint --tailwind
cd hotel-ui
pnpm add motion gsap lottie-react @studio-freight/lenis lucide-react
pnpm add class-variance-authority tailwind-merge
pnpm dlx shadcn-ui@latest init
pnpm dlx shadcn-ui@latest add button card dialog drawer accordion badge input select navigation-menu calendar sheet hover-card
```

---

## 3) Project Structure

```
app/
  (public)/page.tsx                  # Home
  stay/page.tsx                      # Rooms grid
  stay/[slug]/page.tsx               # Room detail
  offers/page.tsx
  offers/[slug]/page.tsx
  experiences/page.tsx
  experiences/[slug]/page.tsx
  events/page.tsx
  events/enquiry/page.tsx
  gallery/page.tsx
  about/page.tsx
  location/page.tsx
  faq/page.tsx
  contact/page.tsx
  layout.tsx
components/
  nav/
  footer/
  ui/                                # shadcn wrappers/variants
  QuickBook.tsx
  RoomCard.tsx
  RoomDetailPanel.tsx
  OfferCard.tsx
  LeadForm.tsx
  StickyCTA.tsx
  AnimatedHero.tsx
  ScrollScene.tsx
  SmoothScroller.tsx
lib/
  booking.ts
  motion.ts
  gsap.ts
  lenis.ts
  analytics.ts
  seo.ts
content/
  mock/rooms.ts
  mock/offers.ts
  mock/experiences.ts
public/
  lottie/
  images/
```

---

## 4) Design System

- **Typography:** Display serif (e.g. "Canela", fallback `"Times New Roman", serif`) paired with contemporary sans (e.g. "Neue Haas Grotesk", fallback `"Inter", "Helvetica Neue", sans-serif`). Adjust optical sizing: hero display at 56–64px, body 18–20px, captions 16px.
- **Tokens (Tailwind theme extend):** `brand`, `fg`, `muted`, `surface`, `success`, `error`.
- **Palette:** `brand` #C9B497, `fg` #101418, `surface` #F6F4F1, `muted` #E8E3DB, `success` #1E2C28, `error` #9F4F4A. Hover states deepen saturation by ~6%; active states darken by ~10% and tighten box-shadow.
- **Radiuses:** sm=6, md=10, lg=16, xl=24.
- **Elevation:** shadows 0/1/2 subtle; avoid heavy blur.
- **Spacing:** base 4/8/12/16/24/32/48.
- **Layouts:** Max container width 1080px on desktop, 12-column grid with 24px gutters ≥1024px, 16px gutters tablet, 12px mobile. Preserve generous negative space top/bottom (96px hero, 72px sections).

**Do**

- Use shadcn/ui primitives for accessible controls.
- Reserve aspect ratios on imagery to avoid CLS.

**Don’t**

- Animate layout-affecting properties (top/left/width) on scroll.

### Component Styling Notes

- Header/Nav: translucent surface with 12px blur, 1px rgba(255,255,255,0.14) border, link hover underlines easing over 140ms.
- QuickBook CTA: pill-shaped (`xl` radius), slight vertical gradient (`brand` → `brand` darkened 6%), inset highlight top edge for depth.
- Card surfaces (Rooms, Offers, Experiences): padding 32px desktop / 24px tablet, image ratio 4:3 with 12px inner radius, subtle shadow tier 1 on hover.
- Forms (LeadForm, Contact): stacked labels, 2px focus ring in `brand`, idle inputs on muted surface with fg text at 0.84 opacity.
- StickyCTA & PolicyBanner: align to grid edges, include reduced-motion fallback (fade-only).

### Imagery & Art Direction

- Photography brief: soft morning light, minimal props, focus on materials (linen, marble, wood), negative space emphasized.
- Apply 20% desaturation and mild grain overlay to keep gallery cohesive; ensure alt text matches subject and mood.
- Editorial crops: hero 3:2 landscape, secondary tiles 4:5 portrait for vertical storytelling.

---

## 5) Animations & Motion

### Motion (Framer Motion successor)

Centralize variants in `lib/motion.ts`:

```ts
export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};
export const stagger = (stagger = 0.06) => ({
  animate: { transition: { staggerChildren: stagger } },
});
```

---

### GSAP (ScrollTrigger)

Lazy import + SSR guard:

```ts
export async function loadGSAP() {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}
```

---

### Lottie

```tsx
import Lottie from "lottie-react";
import stars from "@/public/lottie/stars.json";
export function HeroOrnament() {
  return (
    <Lottie
      animationData={stars}
      loop
      autoplay
      className="w-40 h-40 opacity-80"
    />
  );
}
```

---

### Lenis

```tsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
export function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return null;
}
```

---

### Motion Matrix

- Hero entrances ≤ 320ms, easing `[0.22, 1, 0.36, 1]`; stagger children at 80ms intervals.
- Micro-interactions (buttons, nav links) ≤ 140ms with opacity + scale ≤ 1.02; rely on transform/opacity only.
- Scroll scenes capped at two per page; pinning limited to 60% viewport height to preserve smooth scroll.
- `prefers-reduced-motion`: disable Lenis, skip GSAP scenes, deliver static fades with opacity-only transitions.

### Interaction States & Feedback

- Lenis disabled automatically when modals, sheets, or forms capture focus; re-enable on close for continuity.
- Primary CTA (“Book Now”): hover luminance bump + 1px underline grow; active state darkens fill 10% and drops shadow tier 2.
- Secondary CTA: outlined style, hover background `muted` with 0.08 opacity overlay.
- Focus rings: 2px `brand` ring with 2px offset shadow for all interactive elements, including custom Radix components.
- Loading skeletons: use `muted` surface with animated shimmer reduced to 20% opacity amplitude to avoid visual noise.

---

## 6) Accessibility

- Keyboard navigable DatePicker and menus (Radix).
- Visible focus, 4.5:1 contrast minimum.
- `prefers-reduced-motion: reduce` variants for all major animations.
- Alt text on images; captions for any autoplaying video.

---

## 7) Booking Engine Integration

Centralized builder in `lib/booking.ts`:

```ts
export function buildBookingUrl({
  checkIn,
  checkOut,
  adults = 2,
  children = 0,
  promo,
}: {
  checkIn: string;
  checkOut: string;
  adults?: number;
  children?: number;
  promo?: string;
}) {
  const base = "https://booking.vendor.com/property/XYZ";
  const q = new URLSearchParams({
    arrival: checkIn,
    departure: checkOut,
    adults: String(adults),
    children: String(children),
    ...(promo ? { promo } : {}),
  });
  return `${base}?${q.toString()}`;
}
```

---

## 8) Components Checklist

- [ ] Header/Nav
- [ ] Footer
- [ ] QuickBook
- [ ] RoomsGrid
- [ ] RoomDetailPanel
- [ ] OffersGrid
- [ ] Experiences
- [ ] Events
- [ ] Gallery
- [ ] FAQ
- [ ] Contact
- [ ] PolicyBanner
- [ ] ScrollScene
- [ ] HeroOrnament
- [ ] SmoothScroller

---

## 9) Performance

- LCP ≤ 2.5s, CLS ≤ 0.05, INP ≤ 200ms.
- Lazy-load GSAP & Lottie.
- Only hydrate interactive sections.
- Optimize hero & gallery images.
- Limit GSAP scenes to 1–2 per page.

---

## 10) Visual Guidelines

- Generous whitespace (calm luxury).
- Subtle shadows, minimal borders.
- Accent colors sparingly.
- Smooth scroll inertia + fade reveals.
- Motion ≤ 160ms micro, 250–300ms hero.

---

## 11) Definition of Done

- A11y checks (keyboard, focus order).
- CLS < 0.05.
- Lighthouse mobile ≥ 90.
- Motion reduced works correctly.
- Booking CTA builds correct redirect.

---

## 12) Final Word

This is a **UI-only** luxury hotel site: keep it elegant, fast, and accessible. Add delight where it counts, and let the “Book Now” sing.
