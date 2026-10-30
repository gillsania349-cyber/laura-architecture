"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/art", label: "Art" },
  {
    href: "/architectural-design",
    label: "Architectural design",
    italic: true,
  },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="page-shell pt-8 pb-2 md:pt-10">
      <div className="flex items-start justify-between gap-6">
        <Link
          href="/"
          className="logo-box px-3.5 py-2.5 text-[1.35rem] leading-none tracking-[0.02em] md:text-[1.5rem]"
          aria-label="Laura Roberton — home"
        >
          <span className="logo-underline block font-display">Laura</span>
          <span className="mt-0.5 block font-display">Roberton</span>
        </Link>

        <nav
          className="hidden items-center gap-10 pt-3 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={pathname === link.href}
              className={`nav-link text-[1.15rem] tracking-[0.01em] ${
                link.italic ? "nav-link-italic" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mt-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          className="mt-8 flex flex-col gap-5 border-t border-foreground/10 pt-6 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={pathname === link.href}
              className={`nav-link text-2xl ${link.italic ? "nav-link-italic" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
