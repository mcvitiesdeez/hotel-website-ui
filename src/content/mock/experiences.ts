export type Experience = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  duration: string;
  image: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    slug: "market-ramble",
    name: "Market Ramble",
    summary: "Chef-led tour of the Marché Provençal",
    description:
      "Wind through Nice’s storied market with our executive chef, tasting sun-sweet produce and hand-selecting ingredients for your afternoon atelier.",
    duration: "3 hours",
    image: "/images/experience-market.svg",
    highlights: [
      "Private market access before opening",
      "Seasonal tasting flight",
      "Hands-on cooking atelier",
    ],
  },
  {
    slug: "sunset-sail",
    name: "Sunset Sail",
    summary: "Golden hour on a private catamaran",
    description:
      "Sail along the peninsula with curated vinyl, sommelier pours, and stories from our maritime historian as twilight settles over the sea.",
    duration: "2.5 hours",
    image: "/images/experience-sailing.svg",
    highlights: [
      "Sommelier-selected wine pairings",
      "Live acoustic accompaniment",
      "Secluded swim stop",
    ],
  },
  {
    slug: "gallery-after-hours",
    name: "Gallery After Hours",
    summary: "Curator-led exploration of Atelier Meridian",
    description:
      "Our in-house curator opens the Atelier exclusively for Maison guests, revealing contemporary commissions and sculptural light installations.",
    duration: "90 minutes",
    image: "/images/experience-gallery.svg",
    highlights: [
      "Private gallery access",
      "Artist meet-and-greet",
      "Champagne nightcap",
    ],
  },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
