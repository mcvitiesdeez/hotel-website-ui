import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/content/mock/rooms";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="grid gap-6 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-6 shadow-[var(--shadow-1)] backdrop-blur md:grid-cols-[1fr_1.1fr]">
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[rgba(16,20,24,0.06)]">
        <Image
          src={room.gallery[0]}
          alt={room.name}
          width={760}
          height={520}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div className="space-y-3">
          <h3 className="font-display text-3xl text-fg">{room.name}</h3>
          <p className="text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.52)]">
            {room.size} · {room.occupancy}
          </p>
          <p className="text-[rgba(16,20,24,0.68)]">{room.headline}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-[rgba(16,20,24,0.62)]">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-[rgba(16,20,24,0.05)] px-4 py-2"
            >
              {amenity}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.52)]">
            {room.rate}
          </span>
          <Link
            href={`/stay/${room.slug}`}
            className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(16,20,24,0.18)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-fg transition hover:bg-[rgba(16,20,24,0.08)] sm:w-auto"
          >
            View Suite
          </Link>
        </div>
      </div>
    </article>
  );
}
