import { IconArrowRight, IconCheck, IconWhatsApp } from "./Icons";
import { COMPANY, whatsappUrl } from "@/lib/constants";
import { Reveal } from "./Reveal";

const highlights = [
  "Equipe técnica qualificada",
  "Atendimento consultivo de ponta a ponta",
  "Soluções alinhadas a cada segmento",
  "Compromisso com sustentabilidade",
];

export function About() {
  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <AboutVisual />
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Quem somos
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                Conheça a Minas Wipe
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                A Minas Wipe nasceu com base na sólida experiência de seus
                fundadores, que acumulam mais de {COMPANY.yearsOfExperience} anos de
                atuação no mercado de higiene profissional. Com uma equipe técnica
                qualificada, a empresa oferece soluções de limpeza, higienização
                e sanitização com foco em eficiência, segurança, sustentabilidade
                e excelência operacional.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-[0.95rem] text-ink-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco-100 text-eco-700">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 ring-soft">
                <p className="text-[0.95rem] leading-relaxed text-ink-700">
                  <strong className="font-semibold text-brand-900">
                    Atendimento consultivo
                  </strong>{" "}
                  para entender o seu negócio antes de indicar a solução.
                </p>
                <a
                  href={whatsappUrl("about-section")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  Conversar com um consultor
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutVisual() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-ink-200 bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 shadow-lift">
        {/* Pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 400 480"
          aria-hidden
        >
          <defs>
            <pattern id="diag" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="22" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>

        {/* Big number */}
        <div className="relative flex h-full flex-col justify-end p-8 text-white">
          <div className="mb-8">
            <p className="text-[7rem] font-bold leading-none tracking-tight md:text-[8.5rem]">
              40<span className="text-eco-400">+</span>
            </p>
            <p className="mt-2 text-lg font-medium text-white/80">
              anos de experiência em higiene profissional
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-white/15 pt-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">
                Sede
              </p>
              <p className="mt-1 text-base font-semibold">Belo Horizonte / MG</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">
                Atuação
              </p>
              <p className="mt-1 text-base font-semibold">Empresas em todo o Brasil</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass absolute -right-3 top-8 max-w-[15rem] rounded-2xl border border-white p-4 shadow-card ring-soft">
        <p className="text-xs font-medium uppercase tracking-wider text-brand-700">
          B2B
        </p>
        <p className="mt-1 text-sm font-semibold text-ink-900">
          Empresas que não podem falhar em padrões de higiene
        </p>
      </div>
    </div>
  );
}
