import { IconChevronDown } from "./Icons";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "A Minas Wipe atende quais tipos de empresas?",
    a: "Atendemos empresas, indústrias e operações comerciais que exigem padrão profissional de higiene — incluindo frigoríficos, indústrias de alimentos, hospitais, clínicas, hotéis, motéis, restaurantes, delivery, cozinhas industriais, panificadoras e lavanderias.",
  },
  {
    q: "Vocês fazem indicação técnica dos produtos?",
    a: "Sim. Nossa equipe técnica entende a rotina, o segmento, o volume e os desafios da sua operação antes de indicar produtos, equipamentos e processos. O atendimento é consultivo do começo ao fim.",
  },
  {
    q: "O atendimento é apenas para Belo Horizonte?",
    a: "Nossa sede fica em Belo Horizonte / MG, mas atendemos empresas em outras regiões. Fale com um consultor pelo WhatsApp para confirmarmos a viabilidade do atendimento na sua localidade.",
  },
  {
    q: "Vocês trabalham com lavanderias profissionais?",
    a: "Sim. Temos linha completa para lavanderias profissionais, hospitalares e hoteleiras, com soluções voltadas a custo por quilo, qualidade do tecido e padrão de higienização.",
  },
  {
    q: "É possível solicitar uma visita ou diagnóstico?",
    a: "Sim. Você pode solicitar uma visita ou um diagnóstico inicial pelo nosso formulário de contato ou diretamente pelo WhatsApp. Avaliamos a operação antes de propor a solução.",
  },
  {
    q: "Como funciona o atendimento pelo WhatsApp?",
    a: "Basta clicar em qualquer botão de WhatsApp do site. Você é direcionado direto a um consultor, que entende sua demanda e conduz o atendimento técnico de ponta a ponta.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-surface py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Dúvidas frequentes
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                Perguntas que costumam aparecer
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Não encontrou o que procurava? Fale com um consultor — respondemos
                qualquer dúvida sobre sua operação.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="divide-y divide-ink-200 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-base font-semibold text-ink-900 transition-colors hover:bg-ink-50 sm:text-lg">
                      {f.q}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all group-open:rotate-180 group-open:border-brand-300 group-open:bg-brand-50 group-open:text-brand-700">
                        <IconChevronDown className="h-4 w-4" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-[0.98rem] leading-relaxed text-ink-500">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
