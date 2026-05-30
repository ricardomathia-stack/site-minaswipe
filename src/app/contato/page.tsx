import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/Icons";
import { COMPANY, whatsappUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com um consultor da Minas Wipe. Atendimento técnico para empresas e operações que exigem padrão profissional de higiene.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Vamos conversar sobre <span className="bg-gradient-to-br from-navy-800 to-accent-700 bg-clip-text text-transparent">sua operação</span></>}
        description="Fale com um consultor da Minas Wipe pelo canal que preferir. Atendimento técnico para empresas e operações que exigem padrão profissional."
      />

      <section className="relative py-12 md:py-16">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
                  Canais diretos
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-500">
                  Prefere falar direto? Use o canal abaixo. O atendimento é técnico e consultivo.
                </p>
              </Reveal>

              <ul className="mt-8 grid gap-4">
                <ContactItem
                  icon={<IconWhatsApp className="h-5 w-5" />}
                  label="WhatsApp"
                  value={COMPANY.phoneDisplay}
                  href={whatsappUrl("contato-card")}
                />
                <ContactItem
                  icon={<IconPhone className="h-5 w-5" />}
                  label="Telefone"
                  value={COMPANY.phoneDisplay}
                  href={`tel:+${COMPANY.whatsappNumber}`}
                />
                <ContactItem
                  icon={<IconMail className="h-5 w-5" />}
                  label="E-mail"
                  value={COMPANY.email}
                  href={`mailto:${COMPANY.email}`}
                />
                <ContactItem
                  icon={<IconMapPin className="h-5 w-5" />}
                  label="Endereço"
                  value={`${COMPANY.city} / ${COMPANY.state}`}
                />
                <ContactItem
                  icon={<IconClock className="h-5 w-5" />}
                  label="Horário de atendimento"
                  value={COMPANY.hours}
                />
              </ul>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm source="form-contato-page" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
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
    <span className="flex items-start gap-3">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
          {label}
        </span>
        <span className="mt-0.5 block text-base font-medium text-navy-800">{value}</span>
      </span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="block rounded-2xl border border-ink-200 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card"
        >
          {inner}
        </a>
      ) : (
        <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-soft">
          {inner}
        </div>
      )}
    </li>
  );
}
