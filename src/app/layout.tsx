import type { Metadata, Viewport } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const SITE_URL = COMPANY.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Minas Wipe | Soluções em Higiene e Limpeza Profissional",
    template: "%s | Minas Wipe",
  },
  description:
    "Soluções profissionais em higiene, limpeza e sanitização para empresas. Atendimento consultivo, produtos de alta performance e soluções sob medida para diversos segmentos.",
  keywords: [
    "limpeza profissional",
    "higiene profissional",
    "produtos de limpeza profissional",
    "soluções de higienização",
    "sanitização para empresas",
    "distribuidora de produtos de limpeza",
    "limpeza industrial",
    "limpeza hospitalar",
    "produtos para lavanderia profissional",
    "soluções para cozinha industrial",
    "Minas Wipe",
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  category: "business",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: COMPANY.name,
    title: "Minas Wipe | Soluções em Higiene e Limpeza Profissional",
    description:
      "Soluções profissionais em higiene, limpeza e sanitização para empresas. Atendimento consultivo, produtos de alta performance e soluções sob medida.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Minas Wipe | Higiene e Limpeza Profissional",
    description:
      "Soluções profissionais em higiene, limpeza e sanitização para empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: true, address: false, email: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.legalName,
    alternateName: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.avif`,
    description:
      "Soluções profissionais em higiene, limpeza e sanitização para empresas.",
    telephone: `+${COMPANY.whatsappNumber}`,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      addressCountry: COMPANY.country,
    },
    sameAs: [],
  };

  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
