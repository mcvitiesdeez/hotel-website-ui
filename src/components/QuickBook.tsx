"use client";

import { useMemo, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { buildBookingUrl } from "@/lib/booking";
import { trackEvent } from "@/lib/analytics";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type QuickBookProps = {
  variant?: "default" | "compact";
};

const guestOptions = [1, 2, 3, 4];

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const startOfDay = (date: Date) => {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
};

const addDays = (date: Date, days: number) =>
  new Date(date.getTime() + days * DAY_IN_MS);

const toISODate = (date: Date) => {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
};

const DEFAULT_FROM = startOfDay(new Date());
const DEFAULT_TO = addDays(DEFAULT_FROM, 2);

const formatRangeLabel = (range: DateRange | undefined) => {
  if (range?.from && range?.to) {
    return `${range.from.toLocaleDateString()} – ${range.to.toLocaleDateString()}`;
  }
  if (range?.from) {
    return `${range.from.toLocaleDateString()} – …`;
  }
  return "Select dates";
};

export default function QuickBook({ variant = "default" }: QuickBookProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: DEFAULT_FROM,
    to: DEFAULT_TO,
  });
  const [adults, setAdults] = useState(2);

  const isCompact = variant === "compact";

  const checkInDate = dateRange?.from ?? DEFAULT_FROM;
  const checkOutDate =
    dateRange?.to ?? (dateRange?.from ? addDays(dateRange.from, 1) : DEFAULT_TO);

  const checkIn = toISODate(checkInDate);
  const checkOut = toISODate(checkOutDate);

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
          ? "flex w-full flex-wrap items-center gap-3 rounded-full border border-[rgba(16,20,24,0.14)] bg-white/60 px-3 py-2 shadow-[var(--shadow-0)] backdrop-blur sm:flex-nowrap sm:gap-4"
          : "grid w-full grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-5 shadow-[var(--shadow-1)] backdrop-blur"
      }`}
      onSubmit={(event) => {
        event.preventDefault();
        trackEvent("booking_cta", { location: variant });
        window.location.href = bookingUrl;
      }}
    >
      <fieldset
        className={`${isCompact ? "hidden" : "grid min-w-[220px] gap-1"}`}
      >
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Stay Dates
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex w-full items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-[rgba(16,20,24,0.12)] bg-white px-4 py-3 text-left text-sm font-normal text-fg hover:bg-[rgba(16,20,24,0.04)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
              type="button"
            >
              <span>{formatRangeLabel(dateRange)}</span>
              <ChevronDownIcon className="size-4 text-[rgba(16,20,24,0.52)]" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.12)] bg-white/95 p-0 shadow-[var(--shadow-1)] backdrop-blur" align="start">
            <Calendar
              mode="range"
              captionLayout="dropdown"
              numberOfMonths={2}
              defaultMonth={dateRange?.from ?? DEFAULT_FROM}
              selected={dateRange}
              onSelect={(range) => setDateRange(range ?? undefined)}
              disabled={(date) => date < startOfDay(new Date())}
            />
          </PopoverContent>
        </Popover>
      </fieldset>

      <fieldset className={`${isCompact ? "hidden" : "grid min-w-[160px] gap-1"}`}>
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Guests
        </label>
        <Select
          value={String(adults)}
          onValueChange={(value) => setAdults(Number(value))}
        >
          <SelectTrigger className="h-auto w-full rounded-[var(--radius-sm)] border border-[rgba(16,20,24,0.12)] bg-white px-4 py-3 text-left text-sm text-fg focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]">
            <SelectValue placeholder="Guests" />
          </SelectTrigger>
          <SelectContent className="rounded-[var(--radius-md)] border border-[rgba(16,20,24,0.14)] bg-white shadow-[var(--shadow-1)]">
            {guestOptions.map((count) => (
              <SelectItem key={count} value={String(count)}>
                {count} {count === 1 ? "Guest" : "Guests"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </fieldset>

      <button
        type="submit"
        className={`${
          isCompact
            ? "w-full rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] sm:w-auto"
            : "w-full rounded-full bg-[var(--brand)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] md:justify-self-end"
        }`}
      >
        Book Now
      </button>
    </form>
  );
}
