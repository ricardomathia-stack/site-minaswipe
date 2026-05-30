import Link from "next/link";
import { IconArrowRight, IconCheck, IconWhatsApp } from "../Icons";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "../Reveal";
import { VideoEmbed } from "../VideoEmbed";

export function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div aria-hidden className="gradient-mesh-navy absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-0 h-[640px] bg-gradient-to-b from-navy-50/60 via-white to-transparent"
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-accent-700 ring-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-eco-500" />
                Soluções B2B em higiene profissional
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-navy-800 sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] xl:leading-[1.05]">
                Soluções profissionais em{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-br from-navy-800 via-accent-700 to-accent-600 bg-clip-text text-transparent">
                    higiene, limpeza e sanitização
                  </span>
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-accent-700 hover:shadow-lift"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Falar com um consultor
                </a>
                <Link
                  href="/solucoes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-navy-800 shadow-soft transition-all hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700"
                >
                  Conhecer soluções
                  <IconArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
                {[
                  "40+ anos de experiência",
                  "Atendimento consultivo",
                  "Distribuidora autorizada",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-eco-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <VideoEmbed />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
