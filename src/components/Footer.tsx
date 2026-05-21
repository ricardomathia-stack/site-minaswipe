import { Logo } from "./Logo";
import {
  IconArrowRight,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "./Icons";
import { COMPANY, NAV_LINKS, whatsappUrl } from "@/lib/constants";

const solutionsLinks = [
  "Produtos de limpeza profissional",
  "Higienização e sanitização",
  "Equipamentos e acessórios",
  "Neutralização de odores",
  "Soluções para lavanderias",
  "Consultoria técnica",
];

const segmentsLinks = [
  "Frigoríficos",
  "Indústrias de alimentos",
  "Hospitais e clínicas",
  "Hotéis e motéis",
  "Restaurantes e delivery",
  "Cozinhas industriais",
  "Panificadoras",
  "Lavanderias",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-900 text-white">
      <div
        aria-hidden
        className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-eco-500/20 blur-3xl"
      />
      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              Soluções profissionais em higiene, limpeza e sanitização para
              empresas. Consultoria técnica, produtos de alta performance e
              soluções sob medida para diversos segmentos.
            </p>
            <a
              href={whatsappUrl("footer-cta")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-eco-500 px-5 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-eco-600"
            >
              <IconWhatsApp className="h-4 w-4" />
              Falar com um consultor
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
                  Links rápidos
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-[0.95rem] text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
                  Soluções
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {solutionsLinks.map((s) => (
                    <li key={s}>
                      <a
                        href="#solucoes"
                        className="text-[0.95rem] text-white/70 transition-colors hover:text-white"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
                  Segmentos
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {segmentsLinks.map((s) => (
                    <li key={s}>
                      <a
                        href="#segmentos"
                        className="text-[0.95rem] text-white/70 transition-colors hover:text-white"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-white/10 pt-8 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-4">
          <FooterContact
            icon={<IconWhatsApp className="h-4 w-4" />}
            label="WhatsApp"
            value={COMPANY.phoneDisplay}
            href={whatsappUrl("footer-contact")}
          />
          <FooterContact
            icon={<IconPhone className="h-4 w-4" />}
            label="Telefone"
            value={COMPANY.phoneDisplay}
            href={`tel:+${COMPANY.whatsappNumber}`}
          />
          <FooterContact
            icon={<IconMail className="h-4 w-4" />}
            label="E-mail"
            value={COMPANY.email}
            href={`mailto:${COMPANY.email}`}
          />
          <FooterContact
            icon={<IconMapPin className="h-4 w-4" />}
            label={`${COMPANY.city} / ${COMPANY.state}`}
            value={COMPANY.hours}
          />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {year} {COMPANY.legalName}. Todos os direitos reservados.</p>
          <p className="inline-flex items-center gap-1.5">
            <IconClock className="h-3.5 w-3.5" />
            {COMPANY.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterContact({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
        {icon}
        {label}
      </span>
      <span className="mt-1 block text-sm font-medium text-white">{value}</span>
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/25 hover:bg-white/10"
    >
      {inner}
    </a>
  ) : (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      {inner}
    </div>
  );
}
