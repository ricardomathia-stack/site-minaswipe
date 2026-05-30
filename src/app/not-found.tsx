import Link from "next/link";
import type { Metadata } from "next";
import { IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80vh] items-center overflow-hidden pt-24 pb-24">
      <div aria-hidden className="gradient-mesh-navy absolute inset-0" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
            Erro 404
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-navy-800 md:text-6xl">
            Página não encontrada
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            A página que você está procurando não existe ou foi movida. Volte ao início
            ou navegue pelas nossas soluções.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-accent-700"
            >
              Voltar ao início
              <IconArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/solucoes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-navy-800 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700"
            >
              Ver soluções
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
