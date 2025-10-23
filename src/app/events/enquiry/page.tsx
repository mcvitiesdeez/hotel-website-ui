import LeadForm from "@/components/LeadForm";
import { enquiryCopy } from "@/content/mock/events";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Event Enquiry",
  description:
    "Share your vision for a Maison Meridian event and our curator will craft a tailored proposal.",
  path: "/events/enquiry",
});

export default function EventsEnquiryPage() {
  return (
    <div className="space-y-10 px-5 py-16">
      <header className="mx-auto max-w-[720px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Events Enquiry
        </span>
        <h1 className="font-display text-4xl text-fg">Design your gathering.</h1>
        <p className="text-[rgba(16,20,24,0.68)]">{enquiryCopy.intro}</p>
      </header>

      <div className="mx-auto max-w-[680px] rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 p-8 shadow-[var(--shadow-1)]">
        <LeadForm context="events" />
      </div>
    </div>
  );
}
