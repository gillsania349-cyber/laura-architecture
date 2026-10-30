import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

const featured = [
  works.find((w) => w.slug === "found-in-the-garden")!,
  works.find((w) => w.slug === "highview-park-walk")!,
  works.find((w) => w.slug === "handmade-botanical-sculptural-form")!,
  works.find((w) => w.slug === "jamieson-botanical-cast")!,
  works.find((w) => w.slug === "in-the-garden")!,
  works.find((w) => w.slug === "organic-form")!,
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
              src="/images/etsy/02-found-in-the-garden.jpg"
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
        <div className="page-shell grid items-start gap-12 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-16 md:py-24">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              In the press
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
              5 Sisters Residency
            </h2>
            <p className="mt-2 text-lg italic text-muted">
              The Edenhope &amp; District Echo — 10 June 2026
            </p>
            <p className="mt-6 text-xl leading-relaxed text-foreground/85 md:text-[1.3rem]">
              Emerging artist Laura Roberton was awarded the 2026 5 Sisters
              Residency at Edenhope. The Echo featured her multidisciplinary
              practice — botanical relief sculpture, plaster casting,
              watercolour and experimental resin — exploring architecture,
              landscape and the natural world.
            </p>
            <Link href="/about#press" className="nav-link mt-8 inline-block text-lg">
              See full article on About
            </Link>
          </div>

          <figure className="relative overflow-hidden border border-foreground/10 bg-paper shadow-[0_20px_50px_-28px_rgba(28,27,25,0.35)]">
            <Image
              src="/images/press-edenhope-echo.png"
              alt="Edenhope & District Echo article featuring Laura Roberton and the 5 Sisters Residency"
              width={592}
              height={865}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </figure>
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
