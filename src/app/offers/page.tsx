import OfferCard from "@/components/OfferCard";
import { offers } from "@/content/mock/offers";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Offers",
  description:
    "Limited-time Maison Meridian offers—wellness rituals, extended stays, and curated suites.",
  path: "/offers",
});

export default function OffersPage() {
  return (
    <div className="space-y-12 px-5 py-16">
      <header className="mx-auto max-w-[880px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Offers
        </span>
        <h1 className="font-display text-4xl text-fg">
          Tailor a stay that feels entirely yours.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          From luminous wellness rituals to extended skyline escapes, each
          package layers in thoughtful touches to elevate your Riviera retreat.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
        {offers.map((offer) => (
          <OfferCard key={offer.slug} offer={offer} />
        ))}
      </section>
    </div>
  );
}
