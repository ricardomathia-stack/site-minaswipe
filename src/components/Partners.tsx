import { Reveal } from "./Reveal";

// Placeholders elegantes. Substitua por <Image src="/partners/x.svg" ... /> ou <img/> quando os logos chegarem.
const partners = [
  { id: "p1", label: "Marca Parceira A" },
  { id: "p2", label: "Marca Parceira B" },
  { id: "p3", label: "Marca Parceira C" },
  { id: "p4", label: "Marca Parceira D" },
  { id: "p5", label: "Marca Parceira E" },
  { id: "p6", label: "Marca Parceira F" },
];

export function Partners() {
  return (
    <section id="parceiros" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Parceiros
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Distribuidora autorizada de{" "}
              <span className="bg-gradient-to-br from-brand-700 to-eco-600 bg-clip-text text-transparent">
                marcas líderes
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              A Minas Wipe trabalha com parceiros reconhecidos no mercado
              nacional e internacional para oferecer soluções confiáveis,
              eficientes e adequadas à sua operação.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p.id}
                className="flex aspect-[5/2] items-center justify-center rounded-2xl border border-ink-200 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
              >
                <PlaceholderLogo label={p.label} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-ink-400">
            Logos dos parceiros oficiais serão exibidos aqui. Substituição pronta no código.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PlaceholderLogo({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 opacity-70" aria-label={label}>
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink-400" aria-hidden>
        <defs>
          <linearGradient id={`ph-${label.replace(/\s+/g, "")}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill={`url(#ph-${label.replace(/\s+/g, "")})`} />
        <path d="M8 14l3-3 2 2 3-3" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-500">
        {label}
      </span>
    </div>
  );
}
