import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SEGMENTS } from "@/lib/segments";
import { SegmentCard } from "@/components/SegmentCard";
import { InnerCTA } from "@/components/InnerCTA";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Segmentos atendidos",
  description:
    "Soluções de higiene profissional para frigoríficos, indústrias de alimentos, hospitais, hotéis, restaurantes, cozinhas industriais, panificadoras e lavanderias.",
  alternates: { canonical: "/segmentos" },
};

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

export default function SegmentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos atendidos"
        title={<>Soluções sob medida para <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">cada tipo de operação</span></>}
        description="Soluções certas para operações que não podem falhar. Atendimento técnico para diversos segmentos."
      />

      <section className="relative py-12 md:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SEGMENTS.map((s, i) => {
              const cfg = layout[i] ?? { tone: "light" as const };
              return (
                <Reveal key={s.slug} delay={(i % 4) * 60} className={cfg.span}>
                  <SegmentCard segment={s} tone={cfg.tone} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <InnerCTA
        title="Não encontrou o seu segmento aqui?"
        subtitle="A Minas Wipe atende empresas e operações que exigem padrão profissional. Fale com a gente."
        source="segmentos-hub-cta"
      />

      <ContactTeaser />
    </>
  );
}
