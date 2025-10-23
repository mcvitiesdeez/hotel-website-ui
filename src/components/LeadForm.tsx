"use client";

import { useState } from "react";

export default function LeadForm({ context }: { context: "events" | "contact" }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-6 text-sm text-[rgba(16,20,24,0.68)] shadow-[var(--shadow-1)]">
        Merci. Our {context === "events" ? "events curator" : "guest services team"} will reply within 24 hours.
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-1">
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Name
        </label>
        <input
          required
          className="rounded-[var(--radius-md)] border border-[rgba(16,20,24,0.14)] bg-white px-4 py-3 text-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Email
        </label>
        <input
          type="email"
          required
          className="rounded-[var(--radius-md)] border border-[rgba(16,20,24,0.14)] bg-white px-4 py-3 text-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
          Message
        </label>
        <textarea
          rows={4}
          className="rounded-[var(--radius-md)] border border-[rgba(16,20,24,0.14)] bg-white px-4 py-3 text-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </div>
      {context === "events" && (
        <div className="grid gap-1">
          <label className="text-xs uppercase tracking-[0.28em] text-[rgba(16,20,24,0.56)]">
            Preferred date
          </label>
          <input
            type="date"
            className="rounded-[var(--radius-md)] border border-[rgba(16,20,24,0.14)] bg-white px-4 py-3 text-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          />
        </div>
      )}
      <button
        type="submit"
        className="rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
      >
        Submit
      </button>
    </form>
  );
}
