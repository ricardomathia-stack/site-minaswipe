import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InnerCTA } from "@/components/InnerCTA";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconCheck, IconWhatsApp } from "@/components/Icons";
import { SolutionIconRender } from "@/components/iconResolvers";
import { whatsappUrl } from "@/lib/constants";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.seo.title,
    description: solution.seo.description,
    alternates: { canonical: `/solucoes/${solution.slug}` },
  };
}

export default async function SolucaoDetailPage({ params }: Params) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const related = SOLUTIONS.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Solução"
        title={solution.title}
        description={solution.summary}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl(`solucao-${solution.slug}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-accent-700"
          >
            <IconWhatsApp className="h-5 w-5" />
            Falar com um consultor
          </a>
          <Link
            href="/solucoes"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-navy-800 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700"
          >
            Ver todas as soluções
          </Link>
        </div>
      </PageHero>

      <section className="relative pb-4">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Soluções", href: "/solucoes" },
              { label: solution.shortTitle },
            ]}
          />
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-12 md:py-16">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                  Visão geral
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 text-lg leading-relaxed text-ink-500">
                  {solution.overview}
                </p>
              </Reveal>

              <Reveal delay={140}>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {solution.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[0.95rem] text-ink-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco-100 text-eco-700">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-gradient-to-br from-navy-800 via-navy-700 to-accent-700 p-8 shadow-lift">
                  <svg className="absolute inset-0 h-full w-full opacity-15" viewBox="0 0 400 400" aria-hidden>
                    <defs>
                      <pattern id={`p-${solution.slug}`} width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#p-${solution.slug})`} />
                  </svg>
                  <div className="relative">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <SolutionIconRender name={solution.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">
                      Solução técnica da Minas Wipe.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="relative bg-surface py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
              O que está incluído
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.whatIncluded.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-navy-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Best for */}
      <section className="relative py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                  Ideal para
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-500">
                  Operações onde essa solução faz mais sentido.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3">
                {solution.bestFor.map((b, i) => (
                  <Reveal key={b} delay={i * 60}>
                    <li className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                        <IconCheck className="h-4 w-4" />
                      </span>
                      <span className="text-[0.95rem] text-ink-700">{b}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative bg-surface py-16 md:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                Outras soluções
              </h2>
            </Reveal>
            <Reveal>
              <Link
                href="/solucoes"
                className="hidden text-sm font-semibold text-navy-800 hover:text-accent-700 sm:inline-flex sm:items-center sm:gap-1.5"
              >
                Ver todas
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/solucoes/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-card"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                    <SolutionIconRender name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-800">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {s.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        title={`Quer entender se ${solution.shortTitle.toLowerCase()} faz sentido pra sua operação?`}
        subtitle="Fale com um consultor — entendemos o seu segmento e indicamos a solução adequada."
        source={`solucao-${solution.slug}-cta`}
      />

      <ContactTeaser />
    </>
  );
}
