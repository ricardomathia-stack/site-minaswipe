"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { IconArrowRight, IconClose, IconMenu, IconWhatsApp } from "./Icons";
import { NAV_LINKS, whatsappUrl } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerCls = scrolled
    ? "glass border-ink-200/70 shadow-[0_8px_30px_-12px_rgba(10,37,64,0.12)]"
    : "bg-transparent border-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${headerCls}`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          href="#inicio"
          className="-m-2 rounded-lg p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          aria-label="Minas Wipe — ir para o início"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("header")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-700 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 md:inline-flex"
          >
            <IconWhatsApp className="h-4 w-4" />
            Falar com um consultor
            <IconArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-m-2 inline-flex items-center justify-center rounded-md p-2.5 text-ink-700 hover:bg-ink-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-ink-200 bg-white/95 backdrop-blur`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-ink-100 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl("header-mobile")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-soft"
          >
            <IconWhatsApp className="h-4 w-4" />
            Falar com um consultor
          </a>
        </nav>
      </div>
    </header>
  );
}
