import { IconWhatsApp } from "./Icons";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl("float-button")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um consultor pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-eco-500 text-white shadow-lift transition-all hover:scale-105 hover:bg-eco-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-500 sm:bottom-7 sm:right-7"
    >
      <span className="pulse-ring inline-flex h-14 w-14 items-center justify-center rounded-full">
        <IconWhatsApp className="relative h-7 w-7" />
      </span>
    </a>
  );
}
