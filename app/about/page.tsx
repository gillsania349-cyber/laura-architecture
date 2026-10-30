import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="page-shell pb-24 pt-16 md:pt-24">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div>
          <h1 className="font-display text-4xl tracking-tight md:text-5xl">
            About
          </h1>
          <div className="mt-8 space-y-6 text-xl leading-relaxed text-foreground/85 md:text-[1.35rem]">
            <p>
              Laura is an art practitioner and Master of Architecture graduate
              from RMIT University and recent recipient of the 5 Sisters artist
              Residency at Edenhope.
            </p>
            <p>
              Laura’s practice explores the intersection of architecture,
              landscape and nature through botanical relief sculptures,
              watercolour and carving. Drawing from her background in Fine Art
              and Architecture, her work captures delicate gestures found in the
              natural world and transforms them into layered sculptural forms.
            </p>
            <p>
              Laura has completed a six-month internship at BLINDSIDE gallery
              and has worked as an invigilator across multiple galleries in
              Melbourne.
            </p>
          </div>
        </div>

        <figure className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:min-h-[480px] md:self-stretch">
          <Image
            src="/images/about_me_clear.jpg"
            alt="Laura Roberton presenting botanical sculpture work"
            fill
            className="object-cover object-[center_35%]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </figure>
      </div>

      <section id="press" className="mt-24 scroll-mt-24 md:mt-32">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">
          In the press
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
          Edenhope &amp; District Echo
        </h2>
        <p className="mt-3 max-w-2xl text-xl leading-relaxed text-muted md:text-[1.25rem]">
          Featured 10 June 2026 — emerging artist Laura Roberton awarded the
          2026 5 Sisters Residency at the Edenhope Artist Residency.
        </p>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12">
          <figure className="relative aspect-[4/3] overflow-hidden bg-[#ebe6df] md:aspect-[3/4]">
            <Image
              src="/images/about_me_clear.jpg"
              alt="Laura Roberton presenting her work"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-10 text-sm text-paper">
              Laura Roberton
            </figcaption>
          </figure>

          <figure className="overflow-hidden border border-foreground/10 bg-paper shadow-[0_20px_50px_-28px_rgba(28,27,25,0.35)]">
            <Image
              src="/images/press-edenhope-echo.png"
              alt="Full Edenhope & District Echo page featuring Laura Roberton’s 5 Sisters Residency"
              width={592}
              height={865}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </figure>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Our team
        </h2>
        <p className="mt-4 max-w-xl text-xl leading-relaxed text-muted md:text-[1.25rem]">
          Making together — botanical casts, clay, and community in the studio.
        </p>

        <figure className="relative mt-10 aspect-[16/10] w-full overflow-hidden md:aspect-[21/10]">
          <Image
            src="/images/our-team.png"
            alt="Our team — workshop participants making botanical relief sculptures with Laura"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1180px"
            priority
          />
        </figure>
      </section>

      <section className="mt-20 md:mt-28">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Workshops
        </h2>
        <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-5">
          <li>
            <figure className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <Image
                src="/images/A7308597.jpg"
                alt="Laura leading a botanical relief sculpture workshop"
                fill
                className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
          </li>
          <li>
            <figure className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <Image
                src="/images/7R_06642.jpg"
                alt="Laura with a participant during a clay casting workshop"
                fill
                className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
          </li>
        </ul>
      </section>
    </main>
  );
}
