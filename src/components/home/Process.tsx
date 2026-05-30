import { Reveal } from "../Reveal";

const steps = [
  { n: "01", title: "Diagnóstico da operação", text: "Entendemos sua rotina, segmento, volume e desafios de higienização." },
  { n: "02", title: "Recomendação técnica", text: "Indicamos os produtos, equipamentos e processos mais adequados." },
  { n: "03", title: "Implementação da solução", text: "Apoiamos a aplicação das soluções no dia a dia da operação." },
  { n: "04", title: "Acompanhamento e melhoria", text: "Ajudamos sua empresa a manter eficiência, segurança e padronização." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
              Atendimento consultivo
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Como funciona nosso{" "}
              <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">
                atendimento consultivo
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-accent-200 via-eco-200 to-accent-200 md:block"
          />
          <ol className="grid gap-6 md:grid-cols-4 md:gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <li className="relative">
                  <div className="group relative flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent">
                        {s.n}
                      </span>
                      <span className="hidden h-2 w-2 rounded-full bg-eco-400 md:block" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy-800">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                      {s.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
