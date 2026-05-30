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
  whatsappNumber: "5531999999999",
  hours: "Segunda a sexta, das 8h às 18h",
} as const;

export const VIDEO = {
  youtubeId: "56cZn0fBI00",
  url: "https://youtu.be/56cZn0fBI00",
  embedUrl: "https://www.youtube-nocookie.com/embed/56cZn0fBI00?autoplay=1&rel=0&modestbranding=1",
  thumbnailUrl: "https://i.ytimg.com/vi/56cZn0fBI00/maxresdefault.jpg",
  thumbnailFallback: "https://i.ytimg.com/vi/56cZn0fBI00/hqdefault.jpg",
  title: "Conheça a Minas Wipe — Vídeo institucional",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  {
    label: "Soluções",
    href: "/solucoes",
    children: [
      { label: "Produtos de limpeza profissional", href: "/solucoes/produtos-de-limpeza-profissional" },
      { label: "Higienização e sanitização", href: "/solucoes/higienizacao-e-sanitizacao" },
      { label: "Equipamentos e acessórios", href: "/solucoes/equipamentos-e-acessorios" },
      { label: "Neutralização de odores", href: "/solucoes/neutralizacao-de-odores" },
      { label: "Soluções para lavanderias", href: "/solucoes/lavanderias" },
      { label: "Consultoria técnica", href: "/solucoes/consultoria-tecnica" },
    ],
  },
  {
    label: "Segmentos",
    href: "/segmentos",
    children: [
      { label: "Frigoríficos", href: "/segmentos/frigorificos" },
      { label: "Indústrias de alimentos", href: "/segmentos/industrias-de-alimentos" },
      { label: "Hospitais e clínicas", href: "/segmentos/hospitais-e-clinicas" },
      { label: "Hotéis e motéis", href: "/segmentos/hoteis-e-moteis" },
      { label: "Restaurantes e delivery", href: "/segmentos/restaurantes-e-delivery" },
      { label: "Cozinhas industriais", href: "/segmentos/cozinhas-industriais" },
      { label: "Panificadoras", href: "/segmentos/panificadoras" },
      { label: "Lavanderias", href: "/segmentos/lavanderias" },
    ],
  },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contato", href: "/contato" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

/**
 * WhatsApp URL com mensagem pré-preenchida. `source` é embutido na mensagem
 * (wa.me ignora UTM como tracking), permitindo identificar a origem do lead.
 */
export function whatsappUrl(source: string, message?: string): string {
  const defaultMessage = `Olá! Vim pelo site (${source}) e gostaria de falar com um consultor da Minas Wipe sobre soluções de higiene profissional.`;
  const text = message ?? defaultMessage;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function telUrl(): string {
  return `tel:+${COMPANY.whatsappNumber}`;
}
