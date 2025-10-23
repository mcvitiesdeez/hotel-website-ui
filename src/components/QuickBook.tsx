"use client";

import { useMemo, useState } from "react";
import { buildBookingUrl } from "@/lib/booking";
import { trackEvent } from "@/lib/analytics";

type QuickBookProps = {
  variant?: "default" | "compact";
};

const today = new Date();
const isoDate = (date: Date) => date.toISOString().slice(0, 10);

export default function QuickBook({ variant = "default" }: QuickBookProps) {
  const [checkIn, setCheckIn] = useState(isoDate(today));
  const [checkOut, setCheckOut] = useState(
    isoDate(new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)),
  );
  const [adults, setAdults] = useState(2);

  const isCompact = variant === "compact";
  const bookingUrl = useMemo(
    () =>
      buildBookingUrl({
        checkIn,
        checkOut,
        adults,
      }),
    [adults, checkIn, checkOut],
  );

  return (
    <form
      className={`${
        isCompact
          ? "flex items-center gap-2 rounded-full border border-[rgba(16,20,24,0.14)] bg-white/60 px-3 py-2 shadow-[var(--shadow-0)] backdrop-blur"
          : "grid gap-4 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-5 shadow-[var(--shadow-1)] backdrop-blur"
      }`}
      onSubmit={(event) => {
        event.preventDefault();
        trackEvent("booking_cta", { location: variant });
        window.location.href = bookingUrl;
      }}
    >
      <fieldset
        className={`${
          isCompact
            ? "hidden"
            : "grid gap-1"
        }`}
      >
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Check in
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="rounded-[var(--radius-sm)] border border-[rgba(16,20,24,0.12)] bg-white px-4 py-3 text-sm text-fg focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </fieldset>

      <fieldset
        className={`${
          isCompact
            ? "hidden"
            : "grid gap-1"
        }`}
      >
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Check out
        </label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="rounded-[var(--radius-sm)] border border-[rgba(16,20,24,0.12)] bg-white px-4 py-3 text-sm text-fg focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </fieldset>

      <fieldset
        className={`${
          isCompact ? "hidden" : "grid gap-1"
        }`}
      >
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Guests
        </label>
        <select
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="rounded-[var(--radius-sm)] border border-[rgba(16,20,24,0.12)] bg-white px-4 py-3 text-sm text-fg focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        >
          {[1, 2, 3, 4].map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </fieldset>

      <button
        type="submit"
        className={`${
          isCompact
            ? "rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            : "self-end rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        }`}
      >
        Book Now
      </button>
    </form>
  );
}
