"use client";

import { motion } from "motion/react";
import HeroOrnament from "@/components/HeroOrnament";
import QuickBook from "@/components/QuickBook";

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 px-6 py-16 shadow-[var(--shadow-1)] backdrop-blur">
      <div className="absolute inset-x-0 -top-32 flex justify-center">
        <HeroOrnament className="h-48 w-48 opacity-70" />
      </div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="uppercase tracking-[0.4em] text-[rgba(16,20,24,0.48)]"
        >
          Maison Meridian
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display text-5xl leading-tight text-balance text-fg sm:text-6xl"
        >
          Minimalist luxury perched over the Côte d’Azur horizon.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-2xl text-lg text-[rgba(16,20,24,0.62)]"
        >
          Suites bathed in morning light, bespoke rituals drawn from the sea, and curated evenings by our in-house sommelier. Every detail is designed for quiet wonder.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="w-full max-w-xl"
        >
          <QuickBook />
        </motion.div>
      </div>
    </section>
  );
}
