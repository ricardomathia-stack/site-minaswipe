import {
  IconArrowRight,
  IconCog,
  IconDroplet,
  IconHeadset,
  IconSparkle,
  IconWand,
  IconWashingMachine,
} from "./Icons";
import { Reveal } from "./Reveal";

const solutions = [
  {
    icon: IconDroplet,
    title: "Produtos de limpeza profissional",
    text: "Linha completa de detergentes, desengordurantes e químicos profissionais para limpeza pesada e rotineira.",
  },
  {
    icon: IconSparkle,
    title: "Higienização e sanitização",
    text: "Protocolos e produtos para eliminar microrganismos em superfícies, ambientes e áreas críticas.",
  },
  {
    icon: IconCog,
    title: "Equipamentos e acessórios",
    text: "Máquinas, dispensadores, panos técnicos e ferramentas que aumentam a eficiência da operação.",
  },
  {
    icon: IconWand,
    title: "Neutralização de odores",
    text: "Tratamento técnico de odores em ambientes industriais, comerciais e operacionais.",
  },
  {
    icon: IconWashingMachine,
    title: "Soluções para lavanderias",
    text: "Linha completa para lavanderias profissionais, hospitalares e hoteleiras com alta performance.",
  },
  {
    icon: IconHeadset,
    title: "Consultoria técnica para empresas",
    text: "Diagnóstico, indicação técnica e acompanhamento para padronizar e elevar a qualidade da limpeza.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Soluções
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Soluções completas para limpeza e{" "}
              <span className="bg-gradient-to-br from-brand-700 to-eco-600 bg-clip-text text-transparent">
                higienização profissional
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Higiene, produtividade e segurança no mesmo processo — com produtos
              e serviços pensados para operações que exigem padrão profissional.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-700 transition-all group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-eco-500 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="relative mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-500">
                  {s.text}
                </p>
                <a
                  href="#contato"
                  className="relative mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  Saiba mais
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
