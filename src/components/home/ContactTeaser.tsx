import Link from "next/link";
import { IconArrowRight, IconMail, IconMapPin, IconPhone, IconWhatsApp } from "../Icons";
import { COMPANY, whatsappUrl } from "@/lib/constants";
import { Reveal } from "../Reveal";

export function ContactTeaser() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                Contato
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                Vamos conversar sobre{" "}
                <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">
                  sua operação
                </span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Fale com um consultor da Minas Wipe pelo canal que preferir.
                Atendimento técnico para empresas e operações que exigem padrão
                profissional.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-accent-700"
                >
                  Ir para o formulário
                  <IconArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={whatsappUrl("contact-teaser")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-navy-800 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  WhatsApp direto
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="grid gap-3 rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
                <ContactRow icon={<IconWhatsApp className="h-4 w-4" />} label="WhatsApp" value={COMPANY.phoneDisplay} href={whatsappUrl("teaser-card")} />
                <ContactRow icon={<IconPhone className="h-4 w-4" />} label="Telefone" value={COMPANY.phoneDisplay} href={`tel:+${COMPANY.whatsappNumber}`} />
                <ContactRow icon={<IconMail className="h-4 w-4" />} label="E-mail" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
                <ContactRow icon={<IconMapPin className="h-4 w-4" />} label="Endereço" value={`${COMPANY.city} / ${COMPANY.state}`} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <span className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
          {label}
        </span>
        <span className="block text-sm font-medium text-navy-800">{value}</span>
      </span>
    </span>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="rounded-xl border border-transparent p-3 transition-all hover:border-ink-200 hover:bg-ink-50"
    >
      {inner}
    </a>
  ) : (
    <div className="rounded-xl p-3">{inner}</div>
  );
}
