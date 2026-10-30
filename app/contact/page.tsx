import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="page-shell flex flex-1 flex-col pb-24 pt-16 md:pt-24">
      <div className="grid gap-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20">
        <div>
          <h1 className="font-display text-4xl tracking-tight md:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted md:text-[1.35rem]">
            This site is for publicity and introduction — not for online sales.
            For commissions, press, or studio visits, write anytime.
          </p>

          <div className="mt-12 space-y-8 text-xl md:text-2xl">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted">
                Email
              </p>
              <a
                href="mailto:Robertonlaura@gmail.com"
                className="mt-2 inline-block border-b border-foreground/25 pb-0.5 transition-colors duration-300 hover:border-foreground"
              >
                Robertonlaura@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted">
                Studio
              </p>
              <p className="mt-2 italic text-foreground/80">
                By appointment
                <br />
                Melbourne
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            Send a message
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
