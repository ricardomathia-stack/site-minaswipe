export const COMPANY = {
  name: "Minas Wipe",
  legalName: "Minas Wipe Soluções em Higiene Profissional",
  tagline: "Soluções em higiene e limpeza profissional",
  description:
    "Consultoria especializada, produtos de alta performance e soluções sob medida para tornar sua operação mais limpa, segura, eficiente e sustentável.",
  yearsOfExperience: "40+",
  url: "https://www.minaswipe.com.br",
  city: "Belo Horizonte",
  state: "MG",
  country: "BR",
  email: "contato@minaswipe.com.br",
  phoneDisplay: "(31) 99999-9999",
  // E.164 sem sinais — usado em wa.me e tel:
  whatsappNumber: "5531999999999",
  hours: "Segunda a sexta, das 8h às 18h",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Segmentos Atendidos", href: "#segmentos" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
] as const;

/**
 * Monta a URL do WhatsApp com mensagem pré-preenchida.
 * O `source` é embutido na mensagem (e não como UTM no wa.me, que o WhatsApp ignora),
 * permitindo identificar de onde veio o lead direto na conversa.
 */
export function whatsappUrl(source: string, message?: string): string {
  const defaultMessage = `Olá! Vim pelo site (${source}) e gostaria de falar com um consultor da Minas Wipe sobre soluções de higiene profissional.`;
  const text = message ?? defaultMessage;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function telUrl(): string {
  return `tel:+${COMPANY.whatsappNumber}`;
}
