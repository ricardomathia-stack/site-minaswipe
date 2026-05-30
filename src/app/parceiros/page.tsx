import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InnerCTA } from "@/components/InnerCTA";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Parceiros",
  description:
    "A Minas Wipe é distribuidora autorizada de marcas líderes no mercado nacional e internacional de higiene profissional.",
  alternates: { canonical: "/parceiros" },
};

const partners = [
  { id: "p1", label: "Marca Parceira A" },
  { id: "p2", label: "Marca Parceira B" },
  { id: "p3", label: "Marca Parceira C" },
  { id: "p4", label: "Marca Parceira D" },
  { id: "p5", label: "Marca Parceira E" },
  { id: "p6", label: "Marca Parceira F" },
  { id: "p7", label: "Marca Parceira G" },
  { id: "p8", label: "Marca Parceira H" },
];

export default function ParceirosPage() {
  return (
    <>
      <PageHero
        eyebrow="Parceiros"
        title={<>Distribuidora autorizada de <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">marcas líderes</span></>}
        description="A Minas Wipe trabalha com parceiros reconhecidos no mercado nacional e internacional para oferecer soluções confiáveis, eficientes e adequadas à sua operação."
      />

      <section className="relative py-12 md:py-16">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {partners.map((p) => (
                <div
                  key={p.id}
                  className="flex aspect-[5/2] items-center justify-center rounded-2xl border border-ink-200 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card"
                >
                  <div className="flex items-center gap-2.5 opacity-70" aria-label={p.label}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink-400" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="5" fill="#cbd5e1" />
                      <path d="M8 14l3-3 2 2 3-3" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      {p.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-10 text-center text-sm text-ink-400">
              Logos dos parceiros oficiais serão exibidos aqui. Substituição pronta no código.
            </p>
          </Reveal>
        </div>
      </section>

      <InnerCTA
        title="Quer trabalhar com produtos de marcas líderes do mercado?"
        subtitle="Fale com um consultor da Minas Wipe e descubra as opções disponíveis para o seu segmento."
        source="parceiros-cta"
      />

      <ContactTeaser />
    </>
  );
}
