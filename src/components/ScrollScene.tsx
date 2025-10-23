"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { loadGSAP } from "@/lib/gsap";

export default function ScrollScene({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: { src: string; alt: string };
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      return;
    }

    let cleanup: (() => void) | undefined;

    loadGSAP().then((gsapModule) => {
      if (!gsapModule || !sectionRef.current || !mediaRef.current) return;
      const { gsap, ScrollTrigger } = gsapModule;
      const context = gsap.context(() => {
        gsap.fromTo(
          mediaRef.current,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }, sectionRef);
      cleanup = () => {
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.refresh());
      };
    });

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid gap-8 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-6 shadow-[var(--shadow-1)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:p-8"
    >
      <div className="space-y-4">
        <span className="uppercase tracking-[0.28em] text-xs text-[rgba(16,20,24,0.52)]">
          Experience
        </span>
        <h2 className="font-display text-3xl leading-snug text-fg">{title}</h2>
        <p className="text-[rgba(16,20,24,0.68)]">{description}</p>
      </div>
      <div
        ref={mediaRef}
        className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[rgba(16,20,24,0.06)]"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={900}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
