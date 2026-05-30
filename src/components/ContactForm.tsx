"use client";

import { useState, type FormEvent } from "react";
import { IconArrowRight, IconWhatsApp } from "./Icons";
import { whatsappUrl } from "@/lib/constants";

const segments = [
  "Frigorífico",
  "Indústria de alimentos",
  "Hospital / clínica",
  "Hotel / motel",
  "Restaurante / delivery",
  "Cozinha industrial",
  "Panificadora",
  "Lavanderia",
  "Outro",
];

type FormState = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  segmento: string;
  mensagem: string;
};

const initial: FormState = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  segmento: "",
  mensagem: "",
};

export function ContactForm({ source = "form-contato" }: { source?: string }) {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const linhas = [
      `Olá! Vim pelo site (${source}) e gostaria de falar com um consultor da Minas Wipe.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*Empresa:* ${form.empresa}`,
      `*Telefone:* ${form.telefone}`,
      `*E-mail:* ${form.email}`,
      `*Segmento:* ${form.segmento || "Não informado"}`,
      ``,
      `*Mensagem:*`,
      form.mensagem || "—",
    ];
    const url = whatsappUrl(source, linhas.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-card md:p-10"
    >
      <div aria-hidden className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-accent-50 blur-2xl" />
      <div aria-hidden className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-eco-50 blur-3xl" />

      <div className="relative grid gap-5 sm:grid-cols-2">
        <Field label="Nome" id="nome" required autoComplete="name" value={form.nome} onChange={(v) => set("nome", v)} />
        <Field label="Empresa" id="empresa" required autoComplete="organization" value={form.empresa} onChange={(v) => set("empresa", v)} />
        <Field label="Telefone / WhatsApp" id="telefone" type="tel" required autoComplete="tel" value={form.telefone} onChange={(v) => set("telefone", v)} />
        <Field label="E-mail" id="email" type="email" required autoComplete="email" value={form.email} onChange={(v) => set("email", v)} />

        <div className="sm:col-span-2">
          <label htmlFor="segmento" className="mb-1.5 block text-sm font-medium text-ink-700">
            Segmento da empresa
          </label>
          <div className="relative">
            <select
              id="segmento"
              value={form.segmento}
              onChange={(e) => set("segmento", e.target.value)}
              className="w-full appearance-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-800 shadow-soft transition-all hover:border-accent-300 focus:border-accent-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500"
            >
              <option value="">Selecione o segmento...</option>
              {segments.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-ink-700">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={4}
            value={form.mensagem}
            onChange={(e) => set("mensagem", e.target.value)}
            className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-800 shadow-soft transition-all placeholder:text-ink-400 hover:border-accent-300 focus:border-accent-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500"
            placeholder="Conte um pouco sobre sua operação, desafios e o que precisa..."
          />
        </div>
      </div>

      <div className="relative mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">
          Ao enviar, abriremos o WhatsApp com sua solicitação pronta para envio.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-accent-700 hover:shadow-lift disabled:opacity-60"
        >
          <IconWhatsApp className="h-5 w-5" />
          Enviar solicitação
          <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required && <span className="ml-0.5 text-eco-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-800 shadow-soft transition-all placeholder:text-ink-400 hover:border-accent-300 focus:border-accent-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500"
      />
    </div>
  );
}
