import Image from "next/image";
import AnimatedHero from "@/components/AnimatedHero";
import StickyCTA from "@/components/StickyCTA";
import HorizontalRooms from "@/components/HorizontalRooms";
import { offers } from "@/content/mock/offers";
import { experiences } from "@/content/mock/experiences";
import { buildPageMetadata } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = buildPageMetadata({
  title: "Minimalist Luxury Hotel on the Côte d’Azur",
  description:
    "Discover Maison Meridian, a design-first hotel with panoramic suites, curated experiences, and seamless booking.",
  path: "/",
});

const featuredExperiences = experiences.slice(0, 2);
const aboutHighlights = [
  {
    title: "Architecture",
    copy: "A terraced structure by Atelier Récit with warm limestone, sculptural lighting, and floor-to-ceiling glazing to catch every horizon line.",
  },
  {
    title: "Wellness",
    copy: "Treatment suites inspired by Japanese onsen traditions, hydrotherapy pools, and rituals designed with organic botanicals from the coast.",
  },
  {
    title: "Culinary",
    copy: "Seasonal menus led by Chef Camille Durand, pairing market-to-table cuisine with our sommelier’s coastal cellar selections.",
  },
];

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in begins at 3pm so we can prepare each suite; check-out is at 11am, with complimentary luggage hold for later departures.",
  },
  {
    question: "Is breakfast included with every stay?",
    answer:
      "A slow breakfast featuring coastal produce and house-pressed juices is included for all guests in La Table Meridian or in-suite on request.",
  },
  {
    question: "Can I access the spa without a treatment booking?",
    answer:
      "All overnight guests receive spa lounge and hydrotherapy access. Treatments are recommended to book 48 hours in advance to secure preferred times.",
  },
  {
    question: "Do you offer parking or transfers?",
    answer:
      "Valet parking is available on property and round-trip transfers can be arranged to Nice Côte d’Azur Airport or local stations through our concierge team.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "For flexible rates, cancellations up to 72 hours before arrival incur no fee. Late cancellations or no-shows are charged one night’s stay including taxes.",
  },
];

export default function HomePage() {
  return (
    <div className="relative space-y-16 pb-24 pt-16 md:space-y-20">
      <AnimatedHero />

      <HorizontalRooms />

      <section className="mx-auto max-w-[1100px] space-y-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.48)]">
            Maison Experiences
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3vw,3rem)] leading-tight text-fg">
            Crafted moments to savor the Riviera.
          </h2>
        </div>

        <div className="space-y-12">
          {featuredExperiences.map((experience) => (
            <div
              key={experience.slug}
              className="grid items-center gap-6 md:grid-cols-[0.85fr_1fr]"
            >
              <div className="relative h-[18rem] overflow-hidden rounded-[var(--radius-xl)]">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.5)]">
                  {experience.duration}
                </span>
                <h3 className="font-display text-[clamp(2rem,2.5vw,2.4rem)] text-fg">
                  {experience.name}
                </h3>
                <p className="text-sm text-[rgba(16,20,24,0.62)]">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.48)]">
            Maison Meridian
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3vw,3rem)] leading-tight text-fg">
            A haven of quiet confidence overlooking the Côte d’Azur.
          </h2>
          <p className="text-[rgba(16,20,24,0.62)]">
            Maison Meridian celebrates slow living, design-forward spaces, and
            attentive service rooted in Riviera hospitality. Commissioned
            artworks, bespoke furnishings, and linen palettes selected for tonal
            harmony bring a residential warmth to each suite. Every corridor
            leads to a view, every material chosen for its tactile calm.
          </p>
        </div>
        <div className="rounded-[var(--radius-xl)]">
          <Image
            src="/images/experience-gallery.svg"
            alt="Maison Meridian interior mood"
            width={640}
            height={820}
            className="w-full rounded-[var(--radius-lg)] object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] space-y-10">
        <div className="grid gap-6 md:grid-cols-3">
          {aboutHighlights.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="font-display text-[1.6rem] text-fg">
                {item.title}
              </h3>
              <p className="text-sm text-[rgba(16,20,24,0.62)]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] space-y-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.48)]">
            Seasonal Offers
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3vw,3rem)] leading-tight text-fg">
            Tailor your stay with curated indulgences.
          </h2>
        </div>
        <div className="space-y-10">
          {offers.slice(0, 3).map((offer) => (
            <div key={offer.slug} className="space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-[2rem] text-fg">
                  {offer.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.5)]">
                  {offer.validThrough}
                </span>
              </div>
              <p className="text-sm text-[rgba(16,20,24,0.62)]">
                {offer.summary}
              </p>
              <ul className="text-sm text-[rgba(16,20,24,0.62)]">
                {offer.inclusions.map((item) => (
                  <li key={item} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] space-y-8">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.48)]">
            Frequently Asked
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3vw,3rem)] leading-tight text-fg">
            Answers for an effortless stay.
          </h2>
          <p className="max-w-[540px] text-sm text-[rgba(16,20,24,0.62)]">
            Our concierge team collected the essentials to help you plan each moment with calm confidence.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="rounded-[var(--radius-lg)] border border-[rgba(16,20,24,0.08)] bg-[rgba(248,246,242,0.65)] px-4 py-2 backdrop-blur-sm"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="font-medium text-base text-fg md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[rgba(16,20,24,0.62)]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <StickyCTA />
    </div>
  );
}
