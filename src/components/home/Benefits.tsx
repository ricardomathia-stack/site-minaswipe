import { IconCheck } from "../Icons";
import { Reveal } from "../Reveal";

const benefits = [
  { title: "Redução de desperdícios", text: "Diluição correta e processos padronizados reduzem o consumo de químico." },
  { title: "Mais segurança sanitária", text: "Protocolos alinhados às normas regulatórias de cada segmento." },
  { title: "Padronização de processos", text: "Mesmo padrão de limpeza em todas as áreas e turnos da operação." },
  { title: "Melhor custo-benefício", text: "Produtos profissionais com alta concentração e rendimento superior." },
  { title: "Atendimento técnico", text: "Equipe técnica acompanha a implementação e ajustes." },
  { title: "Alinhamento por segmento", text: "Recomendação baseada no perfil real do seu negócio." },
  { title: "Alta eficiência", text: "Performance comprovada em ambientes regulados e críticos." },
  { title: "Compromisso ambiental", text: "Linhas com menor impacto ambiental sem perder eficácia." },
];

export function Benefits() {
  return (
    <section className="relative bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
              Benefícios
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Por que empresas escolhem a{" "}
              <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">
                Minas Wipe?
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Mais eficiência na limpeza. Mais segurança para sua operação.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 70}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-200 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-navy-800 to-accent-700 text-white shadow-soft">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-800">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  {b.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
