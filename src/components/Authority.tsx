import { IconHeadset, IconBeaker, IconBolt, IconLeaf } from "./Icons";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: IconHeadset,
    title: "Consultoria especializada",
    text: "Entendemos sua operação antes de indicar a solução. Recomendação técnica feita por especialistas em higiene profissional.",
  },
  {
    icon: IconBeaker,
    title: "Produtos profissionais",
    text: "Linha completa de marcas líderes de mercado, com performance comprovada para uso intensivo e regulado.",
  },
  {
    icon: IconBolt,
    title: "Eficiência operacional",
    text: "Padronização de processos, redução de desperdícios e ganho real de produtividade na rotina da limpeza.",
  },
  {
    icon: IconLeaf,
    title: "Sustentabilidade",
    text: "Soluções que reduzem o impacto ambiental sem abrir mão da eficácia técnica e do padrão profissional.",
  },
];

export function Authority() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Inteligência em higiene
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                Mais do que produtos:{" "}
                <span className="bg-gradient-to-br from-brand-700 to-eco-600 bg-clip-text text-transparent">
                  inteligência em higiene profissional
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                A Minas Wipe une experiência técnica, parceiros líderes de
                mercado e atendimento consultivo para entregar soluções de
                limpeza e higienização adequadas à realidade de cada operação.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <blockquote className="mt-8 border-l-2 border-eco-500 pl-5 text-base font-medium text-ink-700 md:text-lg">
                &ldquo;Limpeza profissional não é custo. É controle, segurança e
                eficiência.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                    <div
                      aria-hidden
                      className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-eco-500 text-white shadow-soft">
                      <p.icon className="h-6 w-6" />
                    </span>
                    <h3 className="relative mt-5 text-lg font-semibold text-ink-900">
                      {p.title}
                    </h3>
                    <p className="relative mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                      {p.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
