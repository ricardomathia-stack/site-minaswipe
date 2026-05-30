import Link from "next/link";
import { SEGMENTS } from "@/lib/segments";
import { SegmentCard } from "../SegmentCard";
import { Reveal } from "../Reveal";
import { IconArrowRight } from "../Icons";

const layout: Array<{ tone: "navy" | "blue" | "light"; span?: string }> = [
  { tone: "navy", span: "md:col-span-2 lg:col-span-2 lg:row-span-2" },
  { tone: "blue" },
  { tone: "light" },
  { tone: "navy", span: "md:col-span-2 lg:col-span-2" },
  { tone: "light" },
  { tone: "blue" },
  { tone: "light" },
  { tone: "navy" },
];

export function SegmentsTeaser() {
  return (
    <section
      id="segmentos-teaser"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
              Segmentos atendidos
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Soluções sob medida para{" "}
              <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">
                cada tipo de operação
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Soluções certas para operações que não podem falhar.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SEGMENTS.map((s, i) => {
            const cfg = layout[i] ?? { tone: "light" as const };
            return (
              <Reveal key={s.slug} delay={(i % 4) * 60} className={cfg.span}>
                <SegmentCard segment={s} tone={cfg.tone} />
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/segmentos"
              className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-700"
            >
              Ver todos os segmentos
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
