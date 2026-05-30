import { IconArrowRight, IconWhatsApp } from "./Icons";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "./Reveal";

type Props = {
  title: string;
  subtitle?: string;
  source?: string;
};

/**
 * CTA compacto reutilizado em subpáginas.
 */
export function InnerCTA({ title, subtitle, source = "inner-cta" }: Props) {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-navy-700/20 gradient-cta px-8 py-12 shadow-lift md:px-14 md:py-16">
            <svg
              className="absolute inset-0 h-full w-full opacity-15"
              viewBox="0 0 800 400"
              aria-hidden
            >
              <defs>
                <pattern id="inner-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#inner-cta-grid)" />
            </svg>
            <div aria-hidden className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-eco-500/25 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-[2.25rem] lg:leading-[1.15]">
                  {title}
                </h2>
                {subtitle && (
                  <p className="mt-3 max-w-2xl text-base text-white/80 md:text-lg">
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="lg:col-span-4">
                <a
                  href={whatsappUrl(source)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-navy-800 shadow-lift transition-all hover:bg-eco-500 hover:text-white"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Falar com um consultor
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
