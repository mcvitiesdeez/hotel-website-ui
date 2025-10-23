export type Room = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  size: string;
  occupancy: string;
  bed: string;
  rate: string;
  amenities: string[];
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: "skyline-suite",
    name: "Skyline Suite",
    headline: "Panoramic terrace with private soaking tub",
    description:
      "A sweeping top-floor residence with uninterrupted Riviera views, private terrace loungers, and a marble bath framed by floor-to-ceiling glass.",
    size: "82 m²",
    occupancy: "2 guests",
    bed: "King Maison Bed",
    rate: "From €640 / night",
    amenities: [
      "Panoramic terrace with daybed",
      "Immersive rainfall shower",
      "In-suite bar curated by sommelier",
      "Dedicated butler service",
    ],
    gallery: [
      "/images/room-skyline.svg",
      "/images/offer-suiteescape.svg",
      "/images/experience-sailing.svg",
    ],
  },
  {
    slug: "courtyard-loft",
    name: "Courtyard Loft",
    headline: "Indoor botanical courtyard & reading salon",
    description:
      "Hushed interiors centered around a sunlit courtyard filled with fragrant citrus, accompanied by a private library of art and design volumes.",
    size: "68 m²",
    occupancy: "3 guests",
    bed: "King Maison Bed + Chaise",
    rate: "From €520 / night",
    amenities: [
      "Indoor botanical courtyard",
      "Bespoke tea service",
      "Dual dressing wardrobes",
      "Acoustic soundscape system",
    ],
    gallery: [
      "/images/room-courtyard.svg",
      "/images/offer-wellness.svg",
      "/images/experience-gallery.svg",
    ],
  },
  {
    slug: "atelier-residence",
    name: "Atelier Residence",
    headline: "Artist loft with dedicated studio lightwell",
    description:
      "Expansive loft bathed in diffused skylight with modular living spaces, ideal for extended stays and creative residencies alike.",
    size: "94 m²",
    occupancy: "4 guests",
    bed: "Two Queen Maison Beds",
    rate: "From €690 / night",
    amenities: [
      "Convertible studio space",
      "Private pantry & wine fridge",
      "Lux linen program",
      "Evening turndown aromatherapy",
    ],
    gallery: [
      "/images/room-atelier.svg",
      "/images/offer-thirdnight.svg",
      "/images/experience-market.svg",
    ],
  },
  {
    slug: "tidal-pavilion",
    name: "Tidal Pavilion",
    headline: "Private plunge pool with horizon-line daybeds",
    description:
      "Open-air living framed by travertine screens, an infinity plunge pool, and coastal breezes drifting through finely woven drapery.",
    size: "76 m²",
    occupancy: "2 guests",
    bed: "King Maison Bed",
    rate: "From €610 / night",
    amenities: [
      "Seafront plunge pool",
      "Sunrise tasting breakfast",
      "Outdoor rain shower",
      "Curated vinyl collection",
    ],
    gallery: [
      "/images/room-tidal.svg",
      "/images/experience-sailing.svg",
      "/images/offer-suiteescape.svg",
    ],
  },
  {
    slug: "aurora-penthouse",
    name: "Aurora Penthouse",
    headline: "Glasshouse lounge and private observatory deck",
    description:
      "A dual-level penthouse with cinematic glazing, fire-side salon, and an observatory deck for moonlit gatherings under the Riviera sky.",
    size: "132 m²",
    occupancy: "4 guests",
    bed: "King Maison Bed + Lounge Daybed",
    rate: "From €980 / night",
    amenities: [
      "Rooftop observatory deck",
      "Fireplace salon",
      "Wine library by Maison cellar",
      "Dedicated host team",
    ],
    gallery: [
      "/images/room-aurora.svg",
      "/images/offer-thirdnight.svg",
      "/images/experience-gallery.svg",
    ],
  },
  {
    slug: "garden-maisonette",
    name: "Garden Maisonette",
    headline: "Split-level haven with fragrant botanical patio",
    description:
      "An intimate maisonette with a perfumed garden patio, sculptural soaking tub, and plush salon for lingering afternoons.",
    size: "72 m²",
    occupancy: "3 guests",
    bed: "Queen Maison Bed + Sofette",
    rate: "From €540 / night",
    amenities: [
      "Private jasmine garden",
      "Sculptural soaking tub",
      "Evening aperitivo cart",
      "Personal fragrance bar",
    ],
    gallery: [
      "/images/room-maisonette.svg",
      "/images/offer-wellness.svg",
      "/images/experience-market.svg",
    ],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
