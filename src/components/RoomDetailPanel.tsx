"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Room } from "@/content/mock/rooms";

export default function RoomDetailPanel({ room }: { room: Room }) {
  return (
    <div className="space-y-12">
      <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 shadow-[var(--shadow-1)]">
          <Image
            src={room.gallery[0]}
            alt={`${room.name} primary view`}
            width={1200}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-6 shadow-[var(--shadow-1)]">
          <div className="space-y-3">
            <h1 className="font-display text-4xl text-fg">{room.name}</h1>
            <p className="text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.52)]">
              {room.size} · {room.occupancy} · {room.bed}
            </p>
          </div>
          <p className="text-[rgba(16,20,24,0.68)]">{room.description}</p>
          <div className="space-y-2 text-sm text-[rgba(16,20,24,0.62)]">
            <div>Rate: {room.rate}</div>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="amenities" className="rounded-[var(--radius-lg)] border border-[rgba(16,20,24,0.12)] bg-white/80 px-4">
          <AccordionTrigger className="text-base">Signature Amenities</AccordionTrigger>
          <AccordionContent>
            <ul className="grid gap-2 text-sm text-[rgba(16,20,24,0.68)]">
              {room.amenities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="gallery" className="rounded-[var(--radius-lg)] border border-[rgba(16,20,24,0.12)] bg-white/80 px-4">
          <AccordionTrigger className="text-base">Gallery</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4 md:grid-cols-3">
              {room.gallery.map((image) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-[var(--radius-md)] border border-[rgba(16,20,24,0.08)]"
                >
                  <Image
                    src={image}
                    alt={`${room.name} detail`}
                    width={480}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
