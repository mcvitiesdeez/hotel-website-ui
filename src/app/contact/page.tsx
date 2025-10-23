import LeadForm from "@/components/LeadForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Maison Meridian",
  description:
    "Reach Maison Meridian guest services for reservations, concierge requests, and tailored itineraries.",
  path: "/contact",
});

const contactDetails = [
  {
    label: "Phone",
    value: "+33 (0)4 92 00 11 22",
  },
  {
    label: "Email",
    value: "reservations@maisonmeridian.com",
  },
  {
    label: "Hours",
    value: "Guest services available 24/7",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-12 px-5 py-16">
      <header className="mx-auto max-w-[780px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Contact
        </span>
        <h1 className="font-display text-4xl text-fg">
          We’re here to craft your Maison Meridian experience.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          Share your plans with our concierge team or reach out directly using
          the details below.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-[1fr_1fr]">
        <div className="space-y-5 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 p-8 shadow-[var(--shadow-1)]">
          <h2 className="font-display text-3xl text-fg">Guest services</h2>
          <p className="text-sm text-[rgba(16,20,24,0.68)]">
            Our concierge responds within 12 hours and can assist with suites,
            transfers, experiences, and bespoke itinerary planning.
          </p>
          <ul className="space-y-2 text-sm text-[rgba(16,20,24,0.68)]">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <span className="font-semibold text-[rgba(16,20,24,0.8)]">
                  {detail.label} ·{" "}
                </span>
                {detail.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 p-8 shadow-[var(--shadow-1)]">
          <LeadForm context="contact" />
        </div>
      </section>
    </div>
  );
}
