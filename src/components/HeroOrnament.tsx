"use client";

import dynamic from "next/dynamic";
import type { CSSProperties } from "react";
import stars from "@/../public/lottie/stars.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type HeroOrnamentProps = {
  className?: string;
  style?: CSSProperties;
};

export default function HeroOrnament({ className, style }: HeroOrnamentProps) {
  return (
    <Lottie
      animationData={stars}
      loop
      autoplay
      style={style}
      className={className ?? "h-32 w-32 opacity-80"}
    />
  );
}
