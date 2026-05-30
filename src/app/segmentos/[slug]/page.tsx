import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SEGMENTS, getSegment } from "@/lib/segments";
import { getSolution } from "@/lib/solutions";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InnerCTA } from "@/components/InnerCTA";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconCheck, IconWhatsApp } from "@/components/Icons";
import { SegmentIconRender, SolutionIconRender } from "@/components/iconResolvers";
import { whatsappUrl } from "@/lib/constants";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SEGMENTS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) return {};
  return {
    title: segment.seo.title,
    description: segment.seo.description,
    alternates: { canonical: `/segmentos/${segment.slug}` },
  };
}

export default async function SegmentoDetailPage({ params }: Params) {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) notFound();

  const relevantSolutions = segment.relevantSolutions
    .map((s) => getSolution(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherSegments = SEGMENTS.filter((s) => s.slug !== segment.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`Segmento: ${segment.shortName}`}
        title={segment.name}
        description={segment.benefit}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl(`segmento-${segment.slug}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-accent-700"
          >
            <IconWhatsApp className="h-5 w-5" />
            Falar com um consultor
          </a>
          <Link
            href="/segmentos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-navy-800 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700"
          >
            Ver outros segmentos
          </Link>
        </div>
      </PageHero>

      <section className="relative pb-4">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Segmentos", href: "/segmentos" },
              { label: segment.shortName },
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
                  Como atendemos {segment.shortName.toLowerCase()}
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 text-lg leading-relaxed text-ink-500">{segment.overview}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-gradient-to-br from-navy-800 via-navy-700 to-accent-700 p-8 shadow-lift">
                  <svg className="absolute inset-0 h-full w-full opacity-15" viewBox="0 0 400 400" aria-hidden>
                    <defs>
                      <pattern id={`seg-${segment.slug}`} width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#seg-${segment.slug})`} />
                  </svg>
                  <div className="relative">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <SegmentIconRender name={segment.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">
                      {segment.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">{segment.pain}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative bg-surface py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                  Desafios reais
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                  Os principais gargalos do segmento
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3">
                {segment.challenges.map((c, i) => (
                  <Reveal key={c} delay={i * 60}>
                    <li className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </span>
                      <span className="text-[0.95rem] text-ink-700">{c}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="relative py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                  Como a Minas Wipe ajuda
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                  Stack técnico para {segment.shortName.toLowerCase()}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3">
                {segment.howWeHelp.map((h, i) => (
                  <Reveal key={h} delay={i * 60}>
                    <li className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-eco-100 text-eco-700">
                        <IconCheck className="h-4 w-4" />
                      </span>
                      <span className="text-[0.95rem] text-ink-700">{h}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant solutions */}
      {relevantSolutions.length > 0 && (
        <section className="relative bg-surface py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                Soluções aplicáveis
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relevantSolutions.map((s, i) => (
                <Reveal key={s.slug} delay={i * 60}>
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
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
                      Saiba mais
                      <IconArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other segments */}
      <section className="relative py-16 md:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                Outros segmentos atendidos
              </h2>
            </Reveal>
            <Reveal>
              <Link
                href="/segmentos"
                className="hidden text-sm font-semibold text-navy-800 hover:text-accent-700 sm:inline-flex sm:items-center sm:gap-1.5"
              >
                Ver todos
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherSegments.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/segmentos/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-card"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-navy-800 transition-colors group-hover:bg-accent-100 group-hover:text-accent-700">
                    <SegmentIconRender name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-800">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {s.benefit}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        title={`Pronto pra elevar o padrão de higiene da sua operação em ${segment.shortName.toLowerCase()}?`}
        subtitle="Fale com um consultor e entenda como podemos atender seu negócio."
        source={`segmento-${segment.slug}-cta`}
      />

      <ContactTeaser />
    </>
  );
}
