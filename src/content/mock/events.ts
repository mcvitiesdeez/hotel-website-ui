export type EventPackage = {
  name: string;
  capacity: string;
  inclusions: string[];
  rate: string;
};

export const eventPackages: EventPackage[] = [
  {
    name: "Seaside Salon",
    capacity: "Up to 40 guests",
    inclusions: [
      "Cliffside terrace with modular seating",
      "Seasonal canapés & sommelier pairing",
      "Dedicated event concierge",
    ],
    rate: "From €4,800",
  },
  {
    name: "Atelier Gallery",
    capacity: "Up to 80 guests",
    inclusions: [
      "Projection-ready art gallery",
      "Ambient lighting design",
      "Curated soundscape by Maison DJ",
    ],
    rate: "From €6,200",
  },
  {
    name: "Meridian Ballroom",
    capacity: "Up to 150 guests",
    inclusions: [
      "Floor-to-ceiling glass with sea views",
      "Custom floral styling",
      "Five-course tasting menu",
    ],
    rate: "From €9,500",
  },
];

export const enquiryCopy = {
  intro:
    "Complete the form and our events curator will design a bespoke programme within 48 hours.",
};
