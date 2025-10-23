"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import QuickBook from "@/components/QuickBook";

const links = [
  { label: "Stay", href: "/stay" },
  { label: "Offers", href: "/offers" },
  { label: "Experiences", href: "/experiences" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

export default function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(16,20,24,0.08)] bg-[rgba(246,244,241,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 py-4 sm:px-6 md:px-5 md:py-5">
        <Link
          href="/"
          className="font-display text-lg uppercase tracking-[0.3em] text-fg sm:text-xl"
        >
          Maison Meridian
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm uppercase tracking-[0.28em] text-[rgba(16,20,24,0.62)] transition-colors hover:text-fg"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-fg"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <QuickBook variant="compact" />
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(16,20,24,0.18)] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden"
          >
            <button
              type="button"
              aria-label="Close navigation overlay"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-[rgba(16,20,24,0.55)] backdrop-blur-sm"
            />
            <motion.nav
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-xs flex-col gap-6 border-l border-[rgba(255,255,255,0.2)] bg-[rgba(246,244,241,0.95)] px-6 py-8 shadow-[var(--shadow-2)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base uppercase tracking-[0.28em] text-fg">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(16,20,24,0.18)]"
                  aria-label="Close navigation"
                >
                  <X size={18} />
                </button>
              </div>

              <QuickBook variant="compact" />

              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[var(--radius-lg)] bg-white/70 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[rgba(16,20,24,0.72)] transition hover:bg-white hover:text-fg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto text-xs uppercase tracking-[0.3em] text-[rgba(16,20,24,0.46)]">
                Maison Meridian · Côte d’Azur
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
