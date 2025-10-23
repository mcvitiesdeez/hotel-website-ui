import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Location",
  description:
    "Maison Meridian is situated along the Promenade des Vagues with sweeping views of the Mediterranean.",
  path: "/location",
});

const travelDetails = [
  {
    label: "Nice Côte d’Azur Airport",
    info: "25 minutes by private transfer or 35 minutes by coastal train.",
  },
  {
    label: "Monaco",
    info: "40 minutes by car or 25 minutes by helicopter charter.",
  },
  {
    label: "Local attractions",
    info: "Marché Provençal, Villa Ephrussi de Rothschild, Cap Ferrat cliff walk.",
  },
];

export default function LocationPage() {
  return (
    <div className="space-y-12 px-5 py-16">
      <header className="mx-auto max-w-[820px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Location
        </span>
        <h1 className="font-display text-4xl text-fg">
          On the quiet curve of the Promenade des Vagues.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          Nestled between the Mediterranean and pine-laced hills, Maison
          Meridian is a serene base for Riviera exploration.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 p-8 shadow-[var(--shadow-1)]">
          <h2 className="font-display text-3xl text-fg">Arrival details</h2>
          <address className="not-italic text-sm text-[rgba(16,20,24,0.68)]">
            Maison Meridian
            <br />
            18 Promenade des Vagues
            <br />
            Saint-Jean-Cap-Ferrat, France
          </address>
          <div className="space-y-3 text-sm text-[rgba(16,20,24,0.68)]">
            {travelDetails.map((item) => (
              <div key={item.label}>
                <span className="font-semibold text-[rgba(16,20,24,0.8)]">
                  {item.label} ·{" "}
                </span>
                {item.info}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-6 shadow-[var(--shadow-1)]">
          <div className="flex h-80 w-full flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[rgba(16,20,24,0.1)] bg-[rgba(16,20,24,0.04)] text-center text-sm text-[rgba(16,20,24,0.62)]">
            Map placeholder · embed custom map provider during integration.
          </div>
        </div>
      </section>
    </div>
  );
}
