import Link from "next/link";
import { eventPackages } from "@/content/mock/events";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Events & Gatherings",
  description:
    "Host serene celebrations at Maison Meridian with cliffside terraces, galleries, and ballroom vistas.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="space-y-12 px-5 py-16">
      <header className="mx-auto max-w-[900px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Events
        </span>
        <h1 className="font-display text-4xl text-fg">
          Gatherings framed by sea and light.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          From cliffside ceremonies to gallery unveilings, our team orchestrates
          immersive events with minimalist finesse.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
        {eventPackages.map((pkg) => (
          <div
            key={pkg.name}
            className="space-y-4 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 p-6 shadow-[var(--shadow-1)]"
          >
            <h2 className="font-display text-2xl text-fg">{pkg.name}</h2>
            <p className="text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.52)]">
              {pkg.capacity}
            </p>
            <ul className="grid gap-2 text-sm text-[rgba(16,20,24,0.68)]">
              {pkg.inclusions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.52)]">
              {pkg.rate}
            </p>
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-[700px] space-y-4 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 px-6 py-10 text-center shadow-[var(--shadow-1)]">
        <p className="text-sm text-[rgba(16,20,24,0.68)]">
          Speak with our events curator for bespoke proposals, floral styling,
          and immersive itineraries.
        </p>
        <Link
          href="/events/enquiry"
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[var(--brand-dark)]"
        >
          Start Enquiry
        </Link>
      </div>
    </div>
  );
}
