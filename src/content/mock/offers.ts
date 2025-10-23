export type Offer = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  inclusions: string[];
  validThrough: string;
};

export const offers: Offer[] = [
  {
    slug: "luminous-wellness",
    name: "Luminous Wellness",
    summary: "Spa ritual and dawn yoga for two",
    description:
      "Begin with a bespoke body polish, continue with a mineral onsen soak, and welcome sunrise with a cliff-top yoga session led by our resident guide.",
    image: "/images/offer-wellness.svg",
    inclusions: [
      "90-minute Maison spa ritual",
      "Daily coastal breakfast",
      "Guided sunrise yoga",
      "Aromatherapy turndown gift",
    ],
    validThrough: "Valid through 30 September",
  },
  {
    slug: "third-night",
    name: "Stay Three, Our Treat",
    summary: "Third night complimentary in suites",
    description:
      "A curated itinerary across three evenings: chef’s table welcome, yacht aperitivo, and a candlelit terrace dinner designed by our culinary team.",
    image: "/images/offer-thirdnight.svg",
    inclusions: [
      "Complimentary third night",
      "Chef’s table dinner for two",
      "Sunset yacht aperitivo",
    ],
    validThrough: "Valid through 15 November",
  },
  {
    slug: "suite-escape",
    name: "Suite Escape",
    summary: "Private transfers and Maison cocktails",
    description:
      "Arrive in style with a private driver, settle into hand-mixed welcome cocktails, and enjoy late checkout for a slower farewell.",
    image: "/images/offer-suiteescape.svg",
    inclusions: [
      "Roundtrip private transfers",
      "In-suite mixology welcome",
      "Daily breakfast on the terrace",
      "Late checkout (2pm)",
    ],
    validThrough: "Valid year-round",
  },
];

export function getOfferBySlug(slug: string) {
  return offers.find((offer) => offer.slug === slug);
}
