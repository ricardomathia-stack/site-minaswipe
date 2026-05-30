"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { IconArrowRight, IconChevronDown, IconClose, IconMenu, IconWhatsApp } from "./Icons";
import { NAV_LINKS, whatsappUrl } from "@/lib/constants";

type Item = (typeof NAV_LINKS)[number];
type ItemWithChildren = Extract<Item, { children: readonly { label: string; href: string }[] }>;

function hasChildren(item: Item): item is ItemWithChildren {
  return "children" in item;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu / dropdowns on route change — pathname is external state (URL).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Click outside closes dropdown
  useEffect(() => {
    if (!openDropdown) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-dropdown]")) setOpenDropdown(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openDropdown]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const headerCls = scrolled
    ? "glass border-ink-200/70 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
    : "bg-transparent border-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${headerCls}`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="-m-2 rounded-lg p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
          aria-label="Minas Wipe — ir para o início"
        >
          <Logo height={36} priority />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            if (hasChildren(item)) {
              const open = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  data-dropdown
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(open ? null : item.label)}
                    aria-expanded={open}
                    aria-haspopup="menu"
                    className={`inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-accent-700"
                        : "text-ink-700 hover:bg-ink-100 hover:text-accent-700"
                    }`}
                  >
                    {item.label}
                    <IconChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    role="menu"
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    <div className="w-72 overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-lift">
                      <Link
                        href={item.href}
                        role="menuitem"
                        className="mb-1 flex items-center justify-between rounded-lg bg-ink-50 px-3 py-2.5 text-sm font-semibold text-navy-800 hover:bg-accent-50 hover:text-accent-700"
                      >
                        Ver todos
                        <IconArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <ul className="py-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              role="menuitem"
                              className="block rounded-md px-3 py-2 text-sm text-ink-700 hover:bg-accent-50 hover:text-accent-700"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-accent-700"
                    : "text-ink-700 hover:bg-ink-100 hover:text-accent-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("header")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-700 hover:shadow-card md:inline-flex"
          >
            <IconWhatsApp className="h-4 w-4" />
            Falar com um consultor
            <IconArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="-m-2 inline-flex items-center justify-center rounded-md p-2.5 text-ink-700 hover:bg-ink-100 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"} max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-ink-200 bg-white/97 backdrop-blur`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {NAV_LINKS.map((item) => {
            if (hasChildren(item)) {
              return (
                <details key={item.label} className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-ink-100 [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <IconChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="ml-2 mt-1 border-l border-ink-200 pl-3">
                    <li>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-accent-700 hover:bg-accent-50"
                      >
                        Ver todos →
                      </Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-ink-700 hover:bg-ink-100"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-ink-100"
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={whatsappUrl("header-mobile")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-5 py-3 text-sm font-semibold text-white shadow-soft"
          >
            <IconWhatsApp className="h-4 w-4" />
            Falar com um consultor
          </a>
        </nav>
      </div>
    </header>
  );
}
