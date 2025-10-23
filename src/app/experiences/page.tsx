import ScrollScene from "@/components/ScrollScene";
import { experiences } from "@/content/mock/experiences";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Experiences",
  description:
    "Maison Meridian experiences—from market rambles to sunset sails—curated to deepen your Riviera stay.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <div className="space-y-12 px-5 py-16">
      <header className="mx-auto max-w-[880px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Experiences
        </span>
        <h1 className="font-display text-4xl text-fg">
          Slow stories shaped by sea and light.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          Follow our curator, chef, and maritime historian through intimate
          excursions designed to reveal the Côte d’Azur beyond the postcard.
        </p>
      </header>

      <div className="mx-auto grid max-w-[1100px] gap-8">
        {experiences.map((experience) => (
          <ScrollScene
            key={experience.slug}
            title={experience.name}
            description={experience.description}
            image={{ src: experience.image, alt: experience.name }}
          />
        ))}
      </div>
    </div>
  );
}
