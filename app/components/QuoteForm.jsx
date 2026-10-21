"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdznrnv";

// A plain POST form to Formspree (works without JavaScript), progressively
// enhanced to submit in place and confirm without leaving the page.
export default function QuoteForm({ children, note }) {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={onSubmit} style={{ display: "grid", gap: 16, position: "relative" }}>
      <input type="hidden" name="_subject" value="ALFA Quote: new inquiry" />
      <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      {children}
      <button
        data-magnet
        type="submit"
        className="pill pill-solid"
        disabled={status === "sending"}
        style={{ justifySelf: "center", alignSelf: "center", appearance: "none", padding: "19px 30px", marginTop: 10 }}
      >
        {status === "sending" ? "sending…" : status === "sent" ? "sent ●" : "send inquiry ●"}
      </button>
      <span className="form-note" role="status">
        {status === "sent"
          ? "Thanks — your inquiry is in. Expect a reply the same day."
          : status === "error"
            ? "Something went wrong. Email hello@alookfromabove.co instead."
            : note}
      </span>
    </form>
  );
}
