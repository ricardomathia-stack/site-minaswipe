import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VideoEmbed } from "@/components/VideoEmbed";
import { InnerCTA } from "@/components/InnerCTA";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/Icons";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a Minas Wipe — mais de 40 anos de experiência em higiene profissional, equipe técnica qualificada e atendimento consultivo para empresas.",
  alternates: { canonical: "/quem-somos" },
};

const values = [
  { title: "Excelência técnica", text: "Indicação especializada baseada em mais de 40 anos de mercado." },
  { title: "Atendimento consultivo", text: "Entendemos a operação antes de propor a solução." },
  { title: "Sustentabilidade", text: "Linhas profissionais que reduzem impacto sem perder eficácia." },
  { title: "Padronização", text: "Mesmo padrão em todas as áreas, turnos e equipes." },
];

const milestones = [
  { year: "Anos 80", title: "Início dos fundadores", text: "Atuação no mercado de higiene profissional em Minas Gerais." },
  { year: "Décadas", title: "Construção da experiência", text: "Mais de 40 anos acumulados em higienização, sanitização e consultoria técnica." },
  { year: "Hoje", title: "Minas Wipe", text: "Distribuidora autorizada de marcas líderes, com atendimento consultivo para diversos segmentos." },
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title={<>Conheça a <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">Minas Wipe</span></>}
        description={`Soluções profissionais em higiene, limpeza e sanitização para empresas. Mais de ${COMPANY.yearsOfExperience} anos de experiência, equipe técnica qualificada e atendimento consultivo do começo ao fim.`}
      />

      {/* Video */}
      <section className="relative py-12 md:py-16">
        <div className="container-x">
          <Reveal>
            <VideoEmbed />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl">
                Mais de 40 anos de experiência aplicados à sua operação
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-500">
                <p>
                  A Minas Wipe nasceu com base na sólida experiência de seus fundadores,
                  que acumulam mais de 40 anos de atuação no mercado de higiene profissional.
                </p>
                <p>
                  Com uma equipe técnica qualificada, a empresa oferece soluções de
                  limpeza, higienização e sanitização com foco em eficiência, segurança,
                  sustentabilidade e excelência operacional.
                </p>
                <p>
                  Operamos com atendimento consultivo: cada recomendação parte do entendimento
                  real do seu negócio — segmento, volume, rotina, equipe e desafios sanitários.
                  Esse é o nosso compromisso com empresas que não podem falhar em padrões de higiene.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-surface py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl">
              Nossa trajetória
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 100}>
                <article className="h-full rounded-2xl border border-ink-200 bg-white p-7 shadow-soft">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                    {m.year}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy-800">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                    {m.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                Nossos valores
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl">
                O que nos guia
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-navy-800 to-accent-700 text-white">
                    <IconCheck className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-800">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {v.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        title="Quer conhecer melhor como podemos atender sua operação?"
        subtitle="Fale com um consultor e descubra o que faz mais sentido para seu negócio."
        source="quem-somos-cta"
      />

      <ContactTeaser />
    </>
  );
}
