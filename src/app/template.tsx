"use client";

import { AnimatePresence, m } from "motion/react";
import { usePathname } from "next/navigation";
import { routeFadeSlide } from "@/lib/motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.main key={pathname} {...routeFadeSlide} className="min-h-dvh">
        {children}
      </m.main>
    </AnimatePresence>
  );
}
