import Link from "next/link";
import { SOLUTIONS } from "@/lib/solutions";
import { SolutionCard } from "../SolutionCard";
import { Reveal } from "../Reveal";
import { IconArrowRight } from "../Icons";

export function SolutionsTeaser() {
  return (
    <section id="solucoes-teaser" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
              Soluções
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Soluções completas para limpeza e{" "}
              <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">
                higienização profissional
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Higiene, produtividade e segurança no mesmo processo — com produtos
              e serviços pensados para operações que exigem padrão profissional.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <SolutionCard solution={s} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/solucoes"
              className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-700"
            >
              Ver todas as soluções
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
