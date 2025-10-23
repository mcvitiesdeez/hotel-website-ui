"use client";

import { useEffect } from "react";
import { initLenis, destroyLenis } from "@/lib/lenis";

export default function SmoothScroller() {
  useEffect(() => {
    const lenis = initLenis();

    return () => {
      if (lenis) {
        destroyLenis();
      }
    };
  }, []);

  return null;
}
