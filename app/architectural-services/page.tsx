import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural services",
  description:
    "Site measuring, architectural drafting, Revit 3D modelling and finishes documentation — clear drawings that help builders understand and price your project.",
};

type Service = {
  title: string;
  summary: string;
  points: string[];
  image: { src: string; width: number; height: number; alt: string };
  caption: string;
};

const services: Service[] = [
  {
    title: "Site visits and measuring",
    summary:
      "I visit the property to see what's already there and record it accurately.",
    points: [
      "Checking the existing conditions on site",
      "Measuring walls, rooms, windows, doors and other key features",
      "Recording every dimension so the drawings start from real numbers",
    ],
    image: {
      src: "/images/services/measure.jpg",
      width: 2400,
      height: 1355,
      alt: "Site plan showing property boundaries, neighbouring dwellings and trees",
    },
    caption:
      "Site plan drawn from survey measurements — David Liddiard & Associates",
  },
  {
    title: "Architectural drafting",
    summary:
      "I turn measurements, sketches or existing files into clear technical drawings.",
    points: [
      "Floor plans and elevations",
      "Reflected ceiling plans (RCPs) — a view of the ceiling showing lights and fittings",
      "Basic drawing sets ready to share",
      "Updating or amending drawings you already have",
      "Drawing from your own measurements and sketches",
    ],
    image: {
      src: "/images/services/drafting.jpg",
      width: 2400,
      height: 1183,
      alt: "East and west elevations of a two-storey house drawn in Revit",
    },
    caption: "Existing-conditions elevations drawn in Revit",
  },
  {
    title: "3D modelling",
    summary:
      "I build 3D models so you can see the space before work begins.",
    points: [
      "Modelling walls and architectural elements in Revit",
      "Creating simple 3D models from 2D plans",
      "Showing tiled walls and surface finishes in 3D",
    ],
    image: {
      src: "/images/services/model.jpg",
      width: 2362,
      height: 743,
      alt: "White 3D context model of a wellness centre with a perforated facade",
    },
    caption:
      "Context model of a wellness centre beside Dosan Park, Seoul — design by Kristen Whittle",
  },
  {
    title: "Materials and finishes",
    summary:
      "I document what goes where, so builders know exactly what's needed.",
    points: [
      "Adding materials and finishes to drawings or 3D models",
      "Tile layouts, including how many tiles are needed",
      "Material information that helps builders price the work accurately",
    ],
    image: {
      src: "/images/services/materials.jpg",
      width: 2400,
      height: 1027,
      alt: "Proposed ground floor plan with a materials, finishes and colours schedule",
    },
    caption:
      "Proposed ground floor plan with materials & finishes schedule — Camberwell",
  },
  {
    title: "Drawing review and coordination",
    summary:
      "I organise your project drawings and get them ready for a builder.",
    points: [
      "Reviewing existing drawings and project files",
      "Organising and updating documentation so it's consistent",
      "Preparing a drawing set for builders to review and quote on",
    ],
    image: {
      src: "/images/services/review.jpg",
      width: 2400,
      height: 1705,
      alt: "Town planning drawing sheet with elevations and a demolition plan",
    },
    caption:
      "Coordinated town planning sheet — existing conditions & demolition plan",
  },
];

const atAGlance = [
  "Site measuring",
  "Architectural drafting",
  "Floor plans & elevations",
  "Reflected ceiling plans",
  "Revit 3D modelling",
  "Updating existing drawings",
  "Materials & finishes",
  "Tile layouts & quantities",
  "Drawing sets for builder pricing",
];

const tools = ["Revit", "SketchUp", "Rhino", "Enscape", "Photoshop"];

export default function ArchitecturalServicesPage() {
  return (
    <main className="pb-24">
      {/* Intro */}
      <section className="page-shell grid items-end gap-10 pt-16 md:grid-cols-12 md:gap-12 md:pt-24">
        <header className="md:col-span-7">
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted">
            <span aria-hidden className="h-2 w-2 rounded-full bg-[#7d8c6a]" />
            Available for work
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
            Architectural services
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-foreground/85 md:text-[1.35rem]">
            From measuring a site to preparing a full drawing set, I help
            homeowners, designers and builders get accurate, easy-to-read
            drawings — so everyone understands the work and it can be priced
            with confidence.
          </p>
        </header>

        <dl className="grid grid-cols-1 gap-6 border-t border-foreground/15 pt-6 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted">
              Qualified
            </dt>
            <dd className="mt-1.5 text-lg">
              Master of Architecture, RMIT University
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted">
              Experience
            </dt>
            <dd className="mt-1.5 text-lg">
              Studio Kristen Whittle · David Liddiard &amp; Associates
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted">
              Tools
            </dt>
            <dd className="mt-1.5 text-lg">{tools.join(" · ")}</dd>
          </div>
        </dl>
      </section>

      {/* Hero render */}
      <figure className="page-shell mt-14 md:mt-20">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe6df] md:aspect-[21/9]">
          <Image
            src="/images/services/hero.jpg"
            alt="Photorealistic render of a slender tower placed into a street photo in Fishermans Bend, Melbourne"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="(max-width: 1280px) 100vw, 1180px"
          />
        </div>
        <figcaption className="mt-3 text-sm italic text-muted">
          Fishermans Bend tower — Enscape render placed into a site photo by
          Laura. Design by Kristen Whittle.
        </figcaption>
      </figure>

      {/* At a glance */}
      <section aria-labelledby="glance" className="page-shell mt-16 md:mt-20">
        <h2
          id="glance"
          className="text-sm uppercase tracking-[0.2em] text-muted"
        >
          At a glance
        </h2>
        <ul className="mt-5 flex list-none flex-wrap gap-2.5 p-0">
          {atAGlance.map((item) => (
            <li
              key={item}
              className="border border-foreground/15 bg-paper px-4 py-2 text-base text-foreground/85"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section aria-labelledby="services" className="page-shell mt-24 md:mt-32">
        <h2
          id="services"
          className="font-display text-3xl tracking-tight md:text-5xl"
        >
          How I can help
        </h2>

        <ol className="mt-14 flex list-none flex-col gap-20 p-0 md:mt-20 md:gap-28">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={service.title}
                className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                <figure
                  className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}
                >
                  <div className="overflow-hidden border border-foreground/10 bg-white p-3 shadow-[0_24px_60px_-34px_rgba(28,27,25,0.4)] md:p-5">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      width={service.image.width}
                      height={service.image.height}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm italic text-muted">
                    {service.caption}
                  </figcaption>
                </figure>

                <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                  <p className="font-display text-5xl leading-none text-foreground/20 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-2xl tracking-tight md:text-[2rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/85 md:text-[1.2rem]">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-lg leading-relaxed text-muted">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.75em] h-px w-3 shrink-0 bg-foreground/40"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* CTA */}
      <section className="mt-28 border-t border-foreground/10 bg-[#f3f0ea]/50 md:mt-36">
        <div className="page-shell flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-muted md:text-[1.25rem]">
              Tell me a little about the property and what you need, and
              I&rsquo;ll get back to you to talk it through.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-block border border-foreground bg-foreground px-8 py-3 text-lg tracking-wide text-paper transition-colors duration-300 hover:bg-transparent hover:text-foreground"
            >
              Get in touch
            </Link>
            <Link
              href="/architectural-design"
              className="nav-link nav-link-italic text-lg"
            >
              See architectural work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
