import type { Metadata } from "next";
import Image from "next/image";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Art",
};

export default function ArtPage() {
  return (
    <main className="page-shell pb-24 pt-16 md:pt-24">
      <header className="max-w-xl">
        <h1 className="font-display text-4xl tracking-tight md:text-5xl">Art</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted md:text-[1.3rem]">
          Selected works from the studio — botanical casts and sculptural forms.
          For publicity and enquiry only.
        </p>
      </header>

      <ul className="mt-14 grid list-none grid-cols-2 gap-x-4 gap-y-10 p-0 md:mt-20 md:grid-cols-4 md:gap-x-6 md:gap-y-14">
        {works.map((work) => (
          <li key={work.slug} className="group">
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-md bg-[#f0eeea]">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <figcaption className="mt-3">
                <p className="text-[0.95rem] leading-snug text-foreground md:text-base">
                  {work.title}
                </p>
                <p className="mt-0.5 text-sm text-muted">{work.material}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </main>
  );
}
