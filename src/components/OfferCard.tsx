import Image from "next/image";
import Link from "next/link";
import type { Offer } from "@/content/mock/offers";

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="grid gap-4 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-6 shadow-[var(--shadow-1)] backdrop-blur">
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[rgba(16,20,24,0.06)]">
        <Image
          src={offer.image}
          alt={offer.name}
          width={820}
          height={540}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-2xl text-fg">{offer.name}</h3>
        <p className="text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.52)]">
          {offer.validThrough}
        </p>
        <p className="text-[rgba(16,20,24,0.68)]">{offer.summary}</p>
      </div>
      <ul className="grid gap-2 text-sm text-[rgba(16,20,24,0.68)]">
        {offer.inclusions.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <Link
        href={`/offers/${offer.slug}`}
        className="self-start rounded-full border border-[rgba(16,20,24,0.18)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-fg transition hover:bg-[rgba(16,20,24,0.08)]"
      >
        View Offer
      </Link>
    </article>
  );
}
