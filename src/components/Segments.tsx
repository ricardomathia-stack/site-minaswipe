import type { ComponentType, SVGProps } from "react";
import {
  IconArrowRight,
  IconBread,
  IconChef,
  IconFactory,
  IconHospital,
  IconHotel,
  IconMeat,
  IconShirt,
  IconUtensils,
} from "./Icons";
import { Reveal } from "./Reveal";

type Segment = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  pain: string;
  benefit: string;
  span?: string;
  tone?: "blue" | "navy" | "eco" | "light";
};

const segments: Segment[] = [
  {
    icon: IconMeat,
    name: "Frigoríficos",
    pain: "Riscos sanitários e fiscalização rigorosa.",
    benefit:
      "Mantenha padrões rigorosos de higiene com soluções profissionais para ambientes regulados.",
    span: "md:col-span-2 lg:col-span-2 lg:row-span-2",
    tone: "navy",
  },
  {
    icon: IconFactory,
    name: "Indústrias de alimentos",
    pain: "Controle sanitário em larga escala.",
    benefit:
      "Processos padronizados e produtos adequados para BPF, APPCC e auditorias.",
    tone: "blue",
  },
  {
    icon: IconHospital,
    name: "Hospitais e clínicas",
    pain: "Segurança de pacientes e equipes.",
    benefit:
      "Eleve a segurança com produtos e processos adequados para ambientes de saúde.",
    tone: "light",
  },
  {
    icon: IconHotel,
    name: "Hotéis e motéis",
    pain: "Experiência do hóspede em jogo.",
    benefit:
      "Ambientes limpos, perfumados e bem cuidados para melhorar a experiência dos hóspedes.",
    span: "md:col-span-2 lg:col-span-2",
    tone: "eco",
  },
  {
    icon: IconUtensils,
    name: "Restaurantes e delivery",
    pain: "Cozinha, salão e operação em paralelo.",
    benefit:
      "Otimize a limpeza com produtos eficientes e seguros para todas as áreas.",
    tone: "light",
  },
  {
    icon: IconChef,
    name: "Cozinhas industriais",
    pain: "Volume alto, pouco tempo, alta exigência.",
    benefit:
      "Limpeza pesada com performance, segurança e padronização profissional.",
    tone: "blue",
  },
  {
    icon: IconBread,
    name: "Panificadoras",
    pain: "Resíduos, gorduras e farinha no dia a dia.",
    benefit:
      "Soluções específicas para limpeza de fornos, masseiras e áreas de produção.",
    tone: "light",
  },
  {
    icon: IconShirt,
    name: "Lavanderias",
    pain: "Eficiência, custo por quilo e qualidade do tecido.",
    benefit:
      "Linha completa para lavanderias profissionais, hospitalares e hoteleiras.",
    tone: "navy",
  },
];

const toneMap = {
  blue: {
    bg: "bg-gradient-to-br from-brand-600 to-brand-500 text-white",
    icon: "bg-white/15 text-white",
    sub: "text-white/75",
    title: "text-white",
    cta: "text-white",
  },
  navy: {
    bg: "bg-gradient-to-br from-brand-900 to-brand-700 text-white",
    icon: "bg-white/15 text-white",
    sub: "text-white/70",
    title: "text-white",
    cta: "text-white",
  },
  eco: {
    bg: "bg-gradient-to-br from-eco-600 to-eco-500 text-white",
    icon: "bg-white/15 text-white",
    sub: "text-white/80",
    title: "text-white",
    cta: "text-white",
  },
  light: {
    bg: "bg-white border border-ink-200",
    icon: "bg-brand-50 text-brand-700 border border-brand-100",
    sub: "text-ink-500",
    title: "text-ink-900",
    cta: "text-brand-700",
  },
} as const;

export function Segments() {
  return (
    <section
      id="segmentos"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Segmentos atendidos
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Soluções sob medida para{" "}
              <span className="bg-gradient-to-br from-brand-700 to-eco-600 bg-clip-text text-transparent">
                cada tipo de operação
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Soluções certas para operações que não podem falhar.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {segments.map((s, i) => {
            const tone = toneMap[s.tone ?? "light"];
            return (
              <Reveal key={s.name} delay={(i % 4) * 60} className={s.span}>
                <article
                  className={`group flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${tone.bg}`}
                >
                  <div>
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tone.icon}`}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className={`mt-5 text-lg font-semibold ${tone.title}`}>
                      {s.name}
                    </h3>
                    <p className={`mt-1.5 text-xs font-medium uppercase tracking-wider ${tone.sub}`}>
                      {s.pain}
                    </p>
                    <p className={`mt-3 text-[0.95rem] leading-relaxed ${tone.sub}`}>
                      {s.benefit}
                    </p>
                  </div>
                  <a
                    href="#contato"
                    className={`mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold ${tone.cta} transition-transform group-hover:translate-x-0.5`}
                  >
                    Ver solução
                    <IconArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
