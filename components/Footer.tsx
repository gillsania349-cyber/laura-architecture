import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-foreground/10">
      <div className="page-shell flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:gap-16 md:py-16">
        <div>
          <p className="font-display text-2xl tracking-tight">Laura Roberton</p>
          <p className="mt-3 max-w-xs text-lg leading-relaxed text-muted">
            Botanical relief sculpture — architecture, landscape and nature.
            Melbourne.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link w-fit text-lg ${link.italic ? "nav-link-italic" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-lg">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            Enquiries
          </p>
          <a
            href="mailto:Robertonlaura@gmail.com"
            className="mt-2 inline-block border-b border-foreground/20 pb-0.5 transition-colors hover:border-foreground"
          >
            Robertonlaura@gmail.com
          </a>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted">
            Instagram
          </p>
          <a
            href="https://www.instagram.com/lauraroberton"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block border-b border-foreground/20 pb-0.5 transition-colors hover:border-foreground"
          >
            @lauraroberton
          </a>

          <a href="" className="facebook ">
            Laurakatemod
          </a>
          <p className="mt-8 text-sm text-muted">© 2026 Laura Roberton</p>
        </div>
      </div>
    </footer>
  );
}
