"use client";

import { m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { buildBookingUrl } from "@/lib/booking";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const today = new Date();
  const isoDate = (date: Date) => date.toISOString().slice(0, 10);
  const checkIn = isoDate(today);
  const checkOut = isoDate(new Date(today.getTime() + 24 * 60 * 60 * 1000));

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <m.a
      variants={variants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      transition={
        prefersReducedMotion
          ? { duration: 0.2 }
          : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
      }
      style={{
        backgroundColor: "#101418",
        color: "#F6F4F1",
        border: "1px solid rgba(246, 244, 241, 0.28)",
        pointerEvents: visible ? "auto" : "none",
      }}
      className="fixed bottom-5 left-4 right-4 z-[60] flex items-center justify-center gap-3 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] shadow-[var(--shadow-2)] transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] sm:left-auto sm:right-6 sm:max-w-xs sm:justify-between sm:px-6"
      href={buildBookingUrl({ checkIn, checkOut })}
    >
      Book Your Stay
    </m.a>
  );
}
