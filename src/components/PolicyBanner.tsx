"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "maison-policy-dismissed";

export default function PolicyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = window.setTimeout(() => setVisible(true), 800);
      return () => window.clearTimeout(timer);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-6">
      <div className="flex w-full max-w-3xl flex-col gap-4 rounded-[var(--radius-xl)] bg-[rgba(16,20,24,0.9)] px-6 py-4 text-sm text-[rgba(246,244,241,0.95)] backdrop-blur-xl shadow-[var(--shadow-1)] sm:flex-row sm:items-center sm:gap-6">
        <p className="text-balance">
          We use first-party cookies for smooth bookings and analytics.{" "}
          <button
            type="button"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            Privacy Notice
          </button>
        </p>
        <div className="flex shrink-0 justify-end sm:justify-start">
          <button
            type="button"
            className="w-full rounded-full border border-[rgba(246,244,241,0.28)] px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] hover:bg-[rgba(201,180,151,0.2)] transition-colors sm:w-auto"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, "1");
              setVisible(false);
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
