import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/**
 * Hero consistente pras páginas internas — navy gradient + grain sutil + eyebrow.
 */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div aria-hidden className="gradient-mesh-navy absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-navy-50/60 via-white to-transparent"
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="container-x relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={60}>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy-800 sm:text-5xl md:text-[3.25rem] md:leading-[1.05] lg:text-[3.75rem]">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={140}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500 md:text-xl">
                {description}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={200}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
