import Link from "next/link";
import { SEGMENTS } from "@/lib/segments";
import { SegmentIconRender } from "./iconResolvers";
import { Reveal } from "./Reveal";

export function PersonaSelector() {
  return (
    <section
      aria-labelledby="persona-title"
      className="relative border-y border-ink-200 bg-white"
    >
      <div className="container-x py-10 md:py-14">
        <Reveal>
          <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center md:justify-between">
            <p
              id="persona-title"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"
            >
              Encontre a solução ideal pelo seu segmento
            </p>
            <Link
              href="/segmentos"
              className="text-sm font-semibold text-navy-800 hover:text-accent-700"
            >
              Ver todos os segmentos →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {SEGMENTS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/segmentos/${s.slug}`}
                  className="group flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-3 py-4 text-center transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:bg-accent-50 hover:shadow-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-100 text-navy-800 transition-colors group-hover:bg-accent-100 group-hover:text-accent-700">
                    <SegmentIconRender name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium leading-tight text-ink-700 group-hover:text-accent-700">
                    {s.shortName}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
