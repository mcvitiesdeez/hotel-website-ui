import type { MotionProps } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const routeFadeSlide = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: EASE },
  },
};

export const stagger = (gap = 0.06) => ({
  animate: { transition: { staggerChildren: gap } },
});

export const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

export const revealUp = {
  hidden: { y: 32, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

export const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.6, 0.02, -0.05, 0.95] },
  },
  viewport: { once: true, margin: "-15%" },
};

export const scaleCard = {
  initial: { opacity: 0.9, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
  viewport: { once: true, margin: "-15%" },
};
