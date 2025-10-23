import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOfferBySlug, offers } from "@/content/mock/offers";
import { buildPageMetadata } from "@/lib/seo";
import { buildBookingUrl } from "@/lib/booking";

type OfferPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: OfferPageProps) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) {
    return buildPageMetadata({
      title: "Offer Not Found",
      description: "We could not find this Maison Meridian offer.",
      path: `/offers/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${offer.name} · Offer`,
    description: offer.summary,
    path: `/offers/${offer.slug}`,
    ogImage: offer.image,
  });
}

export default async function OfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) {
    notFound();
  }

  const today = new Date();
  const iso = (date: Date) => date.toISOString().slice(0, 10);
  const bookingUrl = buildBookingUrl({
    checkIn: iso(today),
    checkOut: iso(new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)),
  });

  return (
    <div className="space-y-10 px-5 py-16">
      <div className="mx-auto max-w-[1100px] space-y-10">
        <div className="rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 shadow-[var(--shadow-1)]">
          <Image
            src={offer.image}
            alt={offer.name}
            width={1200}
            height={720}
            className="h-auto w-full rounded-t-[var(--radius-xl)] object-cover"
          />
          <div className="space-y-4 px-8 py-10">
            <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
              {offer.validThrough}
            </span>
            <h1 className="font-display text-4xl text-fg">{offer.name}</h1>
            <p className="text-[rgba(16,20,24,0.68)]">{offer.description}</p>
            <ul className="grid gap-2 text-sm text-[rgba(16,20,24,0.68)]">
              {offer.inclusions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.52)]">
            Reserve this experience
          </span>
          <Link
            href={bookingUrl}
            className="rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[var(--brand-dark)]"
          >
            Book with Offer
          </Link>
        </div>
      </div>
    </div>
  );
}
