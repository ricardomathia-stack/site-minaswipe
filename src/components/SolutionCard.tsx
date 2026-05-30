import Link from "next/link";
import type { Solution } from "@/lib/solutions";
import { IconArrowRight } from "./Icons";
import { SolutionIconRender } from "./iconResolvers";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link
      href={`/solucoes/${solution.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-card"
    >
      <span
        aria-hidden
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-50 opacity-0 transition-opacity group-hover:opacity-100"
      />
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent-100 bg-accent-50 text-accent-700 transition-all group-hover:bg-navy-800 group-hover:text-white group-hover:border-navy-800">
        <SolutionIconRender name={solution.icon} className="h-6 w-6" />
      </span>
      <h3 className="relative mt-5 font-display text-lg font-semibold text-navy-800">
        {solution.title}
      </h3>
      <p className="relative mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-500">
        {solution.summary}
      </p>
      <span className="relative mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-700 transition-transform group-hover:translate-x-0.5">
        Ver solução
        <IconArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
