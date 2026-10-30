"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? `\n${email}` : ""}`,
    );

    window.location.href = `mailto:Robertonlaura@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-8" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-[0.18em] text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full border-0 border-b border-foreground/25 bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-foreground/25 focus:border-foreground"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-[0.18em] text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border-0 border-b border-foreground/25 bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-foreground/25 focus:border-foreground"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-[0.18em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border-0 border-b border-foreground/25 bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-foreground/25 focus:border-foreground"
          placeholder="Commissions, press, workshops…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          className="border border-foreground px-8 py-3 text-lg tracking-wide transition-colors duration-300 hover:bg-foreground hover:text-paper"
        >
          Send message
        </button>
        {sent && (
          <p className="text-base italic text-muted">
            Opening your email app…
          </p>
        )}
      </div>
    </form>
  );
}
