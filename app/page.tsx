import Image from "next/image";
import Link from "next/link";
import { works, type Work } from "@/lib/works";

const roundBotanicalCast: Work = {
  slug: "round-botanical-cast",
  title: "Round botanical cast",
  material: "Botanical cast, silver frame",
  src: "/images/round-botanical-cast.jpg",
};

const featured = [
  works.find((w) => w.slug === "found-in-the-garden")!,
  works.find((w) => w.slug === "highview-park-walk")!,
  works.find((w) => w.slug === "handmade-botanical-sculptural-form")!,
  works.find((w) => w.slug === "jamieson-botanical-cast")!,
  works.find((w) => w.slug === "in-the-garden")!,
  roundBotanicalCast,
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="page-shell grid items-center gap-12 pb-20 pt-14 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16 md:pb-28 md:pt-20">
        <div className="animate-fade-rise order-2 md:order-1">
          <p className="text-sm uppercase tracking-[0.22em] text-muted">
            Sculpture · Architecture · Nature
          </p>
          <h1 className="mt-5 font-display text-[2.35rem] leading-[1.12] tracking-tight text-foreground md:text-[3.15rem]">
            Quiet forms from the{" "}
            <span className="italic">natural world</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-[1.25rem]">
            Laura Roberton works at the meeting point of architecture,
            landscape and nature — botanical relief casts, plaster, and
            sculptural form made by hand in Melbourne.
          </p>
          <p className="mt-6 flex max-w-md items-start gap-3 text-lg leading-snug text-foreground">
            <span
              aria-hidden
              className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#7d8c6a]"
            />
            <span>
              Available for{" "}
              <Link href="/contact" className="nav-link">
                artwork commissions
              </Link>{" "}
              and{" "}
              <Link href="/architectural-services" className="nav-link">
                architectural services
              </Link>
              .
            </span>
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/art"
              className="inline-block border border-foreground bg-foreground px-7 py-3 text-lg tracking-wide text-paper transition-colors duration-300 hover:bg-transparent hover:text-foreground"
            >
              View the work
            </Link>
            <Link href="/about" className="nav-link text-lg">
              About Laura
            </Link>
          </div>
        </div>

        <Link
          href="/art"
          className="group relative order-1 block animate-image-reveal delay-1 overflow-hidden md:order-2"
          aria-label="View art collection"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ebe6df] md:aspect-[5/6]">
            <Image
              src="/images/hero-botanical-relief.jpg"
              alt="Found in the Garden — botanical relief by Laura Roberton"
              fill
              priority
              className="object-cover object-center transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          <p className="mt-4 text-base italic text-muted">
            Found in the Garden
          </p>
        </Link>
      </section>

      {/* Intro strip */}
      <section className="border-y border-foreground/10 bg-[#f3f0ea]/30">
        <div className="page-shell py-12 md:py-14">
          <p className="mx-auto max-w-2xl text-center font-display text-2xl leading-snug tracking-tight text-foreground/90 md:text-3xl md:leading-snug">
            Delicate gestures from garden and landscape, pressed into layered
            sculptural surfaces — a quiet record of place, season, and material.
          </p>
        </div>
      </section>

      {/* Featured art */}
      <section className="page-shell py-16 md:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Selected art
            </h2>
            <p className="mt-3 max-w-md text-lg text-muted md:text-xl">
              Botanical casts and studio forms from the SculptureArchitect
              practice — for publicity and enquiry only.
            </p>
          </div>
          <Link href="/art" className="nav-link w-fit text-lg">
            See all works
          </Link>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {featured.map((work, i) => (
            <li
              key={work.slug}
              className={`group ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <Link href="/art">
                <figure>
                  <div
                    className={`relative overflow-hidden bg-[#ebe6df] ${
                      i === 0
                        ? "aspect-[16/11] lg:aspect-[4/5]"
                        : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-[1.15s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="text-lg leading-snug text-foreground">
                      {work.title}
                    </p>
                    <p className="mt-1 text-sm tracking-wide text-muted">
                      {work.material}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Practice */}
      <section className="border-t border-foreground/10 bg-[#f7f5f1]/60">
        <div className="page-shell grid items-center gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24">
          <figure className="relative aspect-[5/6] overflow-hidden md:order-1">
            <Image
              src="/images/etsy/06-highview-park.jpg"
              alt="Highview park walk botanical cast"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>

          <div className="md:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              The practice
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
              Architecture held in a cast of leaves
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-foreground/85 md:text-[1.3rem]">
              Drawing from Fine Art and a Master of Architecture from RMIT,
              Laura transforms walks, gardens and residencies into botanical
              relief sculptures, watercolour and carving — work that is precise,
              tactile, and quietly spatial.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/about" className="nav-link text-lg">
                About Laura
              </Link>
              <Link
                href="/architectural-design"
                className="nav-link nav-link-italic text-lg"
              >
                Architectural design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section id="press" className="scroll-mt-24 border-t border-foreground/10">
        <div className="page-shell py-16 md:py-24">
          {/* Masthead */}
          <div className="flex flex-col gap-2 border-b border-foreground/15 pb-5 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              In the press
            </p>
            <p className="text-sm italic text-muted">
              The Edenhope &amp; District Echo · Vol. 4, No. 148 · 10 June 2026
            </p>
          </div>

          <h2 className="mt-10 max-w-4xl font-display text-[2.1rem] leading-[1.1] tracking-tight md:text-[3.1rem]">
            Emerging artist Laura Roberton awarded the{" "}
            <span className="italic">5 Sisters Residency</span>
          </h2>

          <div className="mt-12 grid items-start gap-12 md:grid-cols-12 md:gap-10">
            <figure className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe6df]">
                <Image
                  src="/images/about_me_clear.jpg"
                  alt="Laura Roberton sharing her botanical casting process at the Edenhope Artist Residency"
                  fill
                  className="object-cover object-[48%_center]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <figcaption className="mt-3 text-sm italic text-muted">
                Laura Roberton at the Edenhope Artist Residency
              </figcaption>
            </figure>

            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed text-foreground md:text-[1.4rem] md:leading-[1.55]">
                Edenhope Artist Residency is pleased to welcome emerging artist
                Laura Roberton as the recipient of the 2026 5 Sisters
                Residency.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80 md:text-[1.2rem]">
                Laura&rsquo;s multidisciplinary practice explores the
                relationship between architecture, landscape and the natural
                world. Having recently completed studies in both Fine Art and
                Architecture, she creates works that combine botanical forms
                with geometric structures, drawing inspiration from the
                patterns, textures and rhythms found in nature.
              </p>

              <blockquote className="my-9 border-l border-foreground/30 pl-6 font-display text-[1.5rem] italic leading-snug text-foreground/90 md:text-[1.8rem]">
                &ldquo;Small gestures of nature — leaves, flowers and other
                organic materials — transformed into sculptural works that
                preserve fleeting moments from the landscape.&rdquo;
              </blockquote>

              <p className="text-lg leading-relaxed text-foreground/80 md:text-[1.2rem]">
                During her residency in Edenhope, Laura will continue developing
                a body of work that incorporates botanical relief sculptures,
                plaster casting, watercolour and experimental resin techniques.
              </p>

              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-foreground/10 pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                    Residency
                  </dt>
                  <dd className="mt-1.5 text-lg">5 Sisters, Edenhope</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                    Includes
                  </dt>
                  <dd className="mt-1.5 text-lg">Accommodation &amp; stipend</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                    Open day
                  </dt>
                  <dd className="mt-1.5 text-lg">21 June, 1–3pm at EAR</dd>
                </div>
              </dl>

              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/about#press"
                  className="relative block w-28 shrink-0 rotate-[-2deg] border border-foreground/10 bg-paper p-1.5 shadow-[0_14px_30px_-18px_rgba(28,27,25,0.45)] transition-transform duration-500 hover:rotate-0"
                  aria-label="View the original newspaper article"
                >
                  <Image
                    src="/images/press-echo-clipping.png"
                    alt=""
                    width={456}
                    height={404}
                    className="h-auto w-full grayscale-[30%]"
                    sizes="112px"
                  />
                </Link>
                <div>
                  <p className="text-sm text-muted">As printed, page 9</p>
                  <Link
                    href="/about#press"
                    className="nav-link mt-1 inline-block text-lg"
                  >
                    Read the full article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="page-shell py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 border-t border-foreground/15 pt-14 md:flex-row md:items-end">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Begin a conversation
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-muted md:text-[1.25rem]">
              Commissions, press, workshops, or studio visits — this site is for
              introduction, not online sales.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block border border-foreground px-8 py-3 text-lg tracking-wide transition-colors duration-300 hover:bg-foreground hover:text-paper"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
