"use client";

import { useState, type FormEvent } from "react";

const TIMES = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

const field =
  "w-full border-0 border-b border-rule bg-transparent py-3 text-lg text-ink placeholder:text-muted/60 transition-colors duration-200 focus:border-accent focus:outline-none [color-scheme:dark]";
const label = "text-sm text-muted";

type Status = "idle" | "sending" | "done";

export default function Reserve() {
  const [status, setStatus] = useState<Status>("idle");
  const [summary, setSummary] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const date = new Date(`${data.get("date")}T12:00`).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    setSummary(`${data.get("guests")} · ${date} at ${data.get("time")}`);
    setStatus("sending");
    // ponytail: demo only — swap this timeout for a POST to email / n8n / a booking API
    setTimeout(() => setStatus("done"), 700);
  }

  if (status === "done") {
    return (
      <div role="status" className="fade border-t border-rule pt-8">
        <p className="font-display text-3xl">Your table is held.</p>
        <p className="mt-3 text-lg text-muted">{summary}</p>
        <p className="mt-6 max-w-md text-muted">
          A confirmation is on its way to your inbox. Running late? Call us and we&rsquo;ll keep the
          candle lit for fifteen minutes.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-accent underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2">
      <label className="grid gap-1 sm:col-span-2">
        <span className={label}>Name</span>
        <input name="name" required autoComplete="name" placeholder="Maya Okonkwo" className={field} />
      </label>
      <label className="grid gap-1 sm:col-span-2">
        <span className={label}>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={field} />
      </label>
      <label className="grid gap-1">
        <span className={label}>Date</span>
        <input name="date" type="date" required
          // set on focus, not render, so the static HTML never bakes in a stale "today"
          onFocus={(e) => (e.currentTarget.min = new Date().toLocaleDateString("en-CA"))}
          className={field}
        />
      </label>
      <label className="grid gap-1">
        <span className={label}>Time</span>
        <select name="time" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose a time
          </option>
          {TIMES.map((t) => (
            <option key={t} className="bg-paper-2">
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 sm:col-span-2">
        <span className={label}>Guests</span>
        <select name="guests" required defaultValue="2 guests" className={field}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} className="bg-paper-2">
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
        <span className="mt-1 text-sm text-muted">Seven or more? Call us — we&rsquo;ll set up the long table.</span>
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-ink px-8 py-4 font-medium whitespace-nowrap text-paper transition-[background-color,transform] duration-200 hover:bg-accent active:translate-y-px disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Holding your table…" : "Reserve a table"}
        </button>
      </div>
    </form>
  );
}
