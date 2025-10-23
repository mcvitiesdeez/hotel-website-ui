import RoomCard from "@/components/RoomCard";
import { rooms } from "@/content/mock/rooms";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Suites & Rooms",
  description:
    "Explore Maison Meridian suites—panoramic terraces, botanical courtyards, and ateliers for extended stays.",
  path: "/stay",
});

export default function StayPage() {
  return (
    <div className="space-y-12 px-5 py-16">
      <header className="mx-auto max-w-[960px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Stay
        </span>
        <h1 className="font-display text-4xl text-fg">
          Suites bathed in Riviera light.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          Each residence is composed for restorative calm—generous terraces,
          stone soaking tubs, and bespoke amenities curated by our concierge.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.slug} room={room} />
        ))}
      </section>
    </div>
  );
}
