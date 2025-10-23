import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/content/mock/faq";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Explore Maison Meridian FAQs covering arrivals, dining, wellness, and accessibility.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <div className="space-y-10 px-5 py-16">
      <header className="mx-auto max-w-[760px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          FAQ
        </span>
        <h1 className="font-display text-4xl text-fg">
          Plan confidently with these essentials.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          If your question is not listed, our guest services team is available 24/7 at reservations@maisonmeridian.com.
        </p>
      </header>

      <div className="mx-auto max-w-[760px] rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 p-6 shadow-[var(--shadow-1)]">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="rounded-[var(--radius-md)] border border-[rgba(16,20,24,0.12)] bg-white/90 px-4"
            >
              <AccordionTrigger className="text-base text-fg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[rgba(16,20,24,0.68)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
