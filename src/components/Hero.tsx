import {
  IconArrowRight,
  IconCheck,
  IconWhatsApp,
} from "./Icons";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "./Reveal";

const stats = [
  { value: "40+", label: "anos de experiência" },
  { value: "100%", label: "atendimento consultivo" },
  { value: "8+", label: "segmentos atendidos" },
  { value: "★", label: "distribuidora autorizada" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Background decorations */}
      <div aria-hidden className="gradient-mesh absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-0 h-[640px] bg-gradient-to-b from-brand-50/60 via-white to-transparent"
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-eco-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-40 h-[360px] w-[360px] rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-brand-700 ring-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-eco-500" />
                Soluções B2B em higiene profissional
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl md:text-6xl xl:text-[4.25rem] xl:leading-[1.05]">
                Soluções profissionais em{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-br from-brand-700 via-brand-500 to-eco-500 bg-clip-text text-transparent">
                    higiene, limpeza e sanitização
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-1 h-[6px] rounded-full bg-gradient-to-r from-brand-500/30 via-eco-500/30 to-transparent"
                  />
                </span>{" "}
                para empresas
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 md:text-xl">
                Consultoria especializada, produtos de alta performance e
                soluções sob medida para tornar sua operação mais limpa, segura,
                eficiente e sustentável.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl("hero-primary")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-brand-700 hover:shadow-lift"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Falar com um consultor
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-ink-900 shadow-soft transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  Conhecer soluções
                  <IconArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
                {[
                  "Atendimento consultivo",
                  "Produtos de alta performance",
                  "Sustentabilidade",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-eco-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual composition */}
          <div className="relative lg:col-span-5">
            <Reveal>
              <HeroVisual />
            </Reveal>
          </div>
        </div>

        {/* Floating stats — bento */}
        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl border border-white p-5 ring-soft"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="bg-gradient-to-br from-brand-700 to-eco-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                    {s.value}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Main panel */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-ink-200 bg-white shadow-lift">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-eco-500"
        />
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full opacity-30 mix-blend-soft-light"
          aria-hidden
        >
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Drop illustration */}
        <svg
          viewBox="0 0 220 260"
          className="absolute inset-x-0 bottom-0 mx-auto h-[78%] w-auto drop-shadow-[0_24px_40px_rgba(0,0,0,0.25)]"
          aria-hidden
        >
          <defs>
            <linearGradient id="drop-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
            </linearGradient>
          </defs>
          <path
            d="M110 12c0 0 90 88 90 154a90 90 0 1 1-180 0c0-66 90-154 90-154Z"
            fill="url(#drop-grad)"
          />
          <path
            d="M58 168c14 16 28 24 42 24 22 0 30-20 50-20s28 20 50 20"
            fill="none"
            stroke="rgba(0,82,204,0.6)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="80" cy="118" r="6" fill="rgba(255,255,255,0.6)" />
          <circle cx="92" cy="108" r="3" fill="rgba(255,255,255,0.4)" />
        </svg>
      </div>

      {/* Floating cards */}
      <div className="glass absolute -left-4 top-10 rounded-2xl border border-white p-3.5 shadow-card ring-soft">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-eco-100 text-eco-600">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m4 12 5 5L20 6" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-medium text-ink-500">Sanitização</p>
            <p className="text-sm font-semibold text-ink-900">Padrão profissional</p>
          </div>
        </div>
      </div>

      <div className="glass absolute -right-2 bottom-12 rounded-2xl border border-white p-3.5 shadow-card ring-soft">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 20s.6-7.5 6-12 11-5 11-5-.4 6.5-5 11-12 6-12 6Z" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-medium text-ink-500">Sustentável</p>
            <p className="text-sm font-semibold text-ink-900">Menos desperdício</p>
          </div>
        </div>
      </div>
    </div>
  );
}
