"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/content/mock/rooms";

export default function HorizontalRooms() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const contentEl = contentRef.current;
    if (!wrapperEl || !contentEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    wrapperEl.style.overflow = "hidden";

    const lenis = new Lenis({
      wrapper: wrapperEl,
      content: contentEl,
      orientation: "horizontal",
      gestureOrientation: "both",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      lerp: 0.12,
      allowNestedScroll: true,
      eventsTarget: wrapperEl,
    });

    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      wrapperEl.style.removeProperty("overflow");
    };
  }, []);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const contentEl = contentRef.current;
    if (!wrapperEl || !contentEl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.setAttribute("data-visible", "true");
          } else if (!prefersReducedMotion) {
            target.setAttribute("data-visible", "false");
          }
        });
      },
      {
        root: wrapperEl,
        threshold: [0.2, 0.4, 0.6],
      },
    );

    const cards = Array.from(
      contentEl.querySelectorAll<HTMLElement>("[data-room-card]"),
    );
    cards.forEach((card) => {
      card.setAttribute("data-visible", prefersReducedMotion ? "true" : "false");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto space-y-10 px-5 sm:px-0">
      <div className="flex flex-col gap-3 sm:px-6">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.48)]">
          Suites Collection
        </span>
        <h2 className="font-display text-[clamp(2.5rem,3vw,3.25rem)] leading-tight text-fg">
          Glide sideways through our signature residences.
        </h2>
        <p className="max-w-2xl text-sm text-[rgba(16,20,24,0.62)]">
          Scroll horizontally to explore six suites—each rendered in soft focus
          to match the Maison Meridian palette.
        </p>
      </div>

      <div
        ref={wrapperRef}
        className="relative h-[20rem] overflow-x-auto sm:h-[22rem]"
      >
        <div
          ref={contentRef}
          className="flex min-w-max gap-12 px-3 pr-[20vw] sm:px-6"
        >
          {rooms.map((room) => (
            <article
              key={room.slug}
              data-room-card
              data-visible={false}
              className="flex w-[360px] shrink-0 flex-col gap-4 translate-x-6 opacity-0 transition-all duration-500 ease-out data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100"
            >
              <div className="relative h-48 overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src={room.gallery[0]}
                  alt={room.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-[2rem] text-fg">
                  {room.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.22em] text-[rgba(16,20,24,0.52)]">
                  {room.size} · {room.occupancy} · {room.rate}
                </p>
                <p className="text-sm text-[rgba(16,20,24,0.62)]">
                  {room.headline}
                </p>
              </div>
              <div>
                <Link
                  href={`/stay/${room.slug}`}
                  className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.62)] underline decoration-[rgba(16,20,24,0.3)] underline-offset-8 hover:text-fg"
                >
                  View suite details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
