import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SOLUTIONS } from "@/lib/solutions";
import { SolutionCard } from "@/components/SolutionCard";
import { InnerCTA } from "@/components/InnerCTA";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Soluções completas em higiene, limpeza e sanitização profissional. Produtos, equipamentos, neutralização de odores, lavanderias e consultoria técnica.",
  alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title={<>Soluções completas para limpeza e <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">higienização profissional</span></>}
        description="Higiene, produtividade e segurança no mesmo processo — com produtos e serviços pensados para operações que exigem padrão profissional."
      />

      <section className="relative py-12 md:py-16">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <SolutionCard solution={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        title="Não sabe qual solução faz mais sentido pra sua operação?"
        subtitle="Nossa equipe técnica entende seu segmento, volume e rotina antes de indicar a solução."
        source="solucoes-hub-cta"
      />

      <ContactTeaser />
    </>
  );
}
