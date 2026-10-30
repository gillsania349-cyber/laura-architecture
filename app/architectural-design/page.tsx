import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Architectural design",
};

const projects = [
  {
    src: "/images/etsy/03-edenhope.jpg",
    title: "Edenhope residency",
    place: "5 Sisters artist residency — Lake Wallace",
  },
  {
    src: "/images/etsy/06-highview-park.jpg",
    title: "Highview park walk",
    place: "Botanical cast — landscape study",
  },
  {
    src: "/images/etsy/02-found-in-the-garden.jpg",
    title: "Found in the Garden",
    place: "Architecture, landscape and nature",
  },
  {
    src: "/images/etsy/07-internal-external.jpg",
    title: "Internal/External.2",
    place: "Sculptural form — threshold of space",
  },
] as const;

export default function ArchitecturalDesignPage() {
  return (
    <main className="page-shell pb-24 pt-16 md:pt-24">
      <header className="max-w-xl">
        <h1 className="font-display text-4xl italic tracking-tight md:text-5xl">
          Architectural design
        </h1>
        <p className="mt-5 text-xl leading-relaxed text-muted md:text-[1.3rem]">
          Where studio sculpture meets space — selected works at the edge of
          architecture, landscape and nature.
        </p>
      </header>

      <div className="mt-14 flex flex-col gap-16 md:mt-20 md:gap-24">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="group grid items-end gap-6 md:grid-cols-12 md:gap-10"
          >
            <div
              className={`relative aspect-[16/10] overflow-hidden md:col-span-8 ${
                i % 2 === 1 ? "md:col-start-5" : ""
              }`}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <div
              className={`md:col-span-4 ${
                i % 2 === 1 ? "md:col-start-1 md:row-start-1 md:text-right" : ""
              }`}
            >
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                {project.title}
              </h2>
              <p className="mt-2 text-lg italic text-muted">{project.place}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
