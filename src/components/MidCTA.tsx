import { IconArrowRight, IconWhatsApp } from "./Icons";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function MidCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-700/20 bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 px-8 py-14 shadow-lift md:px-14 md:py-20">
            {/* Decorative grid */}
            <svg
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 800 400"
              aria-hidden
            >
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
            <div
              aria-hidden
              className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-eco-500/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-400/30 blur-3xl"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-eco-400" />
                  Atendimento técnico via WhatsApp
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                  Sua empresa precisa de uma{" "}
                  <span className="bg-gradient-to-br from-eco-300 to-white bg-clip-text text-transparent">
                    solução de higiene mais eficiente?
                  </span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                  Fale com um consultor da Minas Wipe e descubra quais soluções
                  fazem mais sentido para sua operação.
                </p>
                <p className="mt-3 text-sm text-white/60">
                  Atendimento para empresas, indústrias, operações comerciais e
                  negócios que exigem limpeza profissional.
                </p>
              </div>
              <div className="lg:col-span-4">
                <a
                  href={whatsappUrl("mid-cta")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-brand-900 shadow-lift transition-all hover:bg-eco-500 hover:text-white"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Solicitar atendimento pelo WhatsApp
                  <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
