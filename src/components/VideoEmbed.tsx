"use client";

import Image from "next/image";
import { useState } from "react";
import { VIDEO } from "@/lib/constants";

type VideoEmbedProps = {
  className?: string;
  title?: string;
  /** Auto-load iframe imediatamente (default false — facade que carrega só no click). */
  eager?: boolean;
};

/**
 * Facade YouTube — mostra thumbnail até o usuário clicar.
 * Economiza ~600KB de player JS no load inicial.
 */
export function VideoEmbed({
  className,
  title = VIDEO.title,
  eager = false,
}: VideoEmbedProps) {
  const [active, setActive] = useState(eager);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-navy-800 shadow-lift ${className ?? ""}`}
    >
      {active ? (
        <iframe
          src={VIDEO.embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          <Image
            src={VIDEO.thumbnailUrl}
            alt={title}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            unoptimized
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lift transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-9 w-9 text-navy-800 md:h-11 md:w-11"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-5 left-5 right-5 text-left">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Vídeo institucional
            </span>
            <span className="mt-1 block text-lg font-display font-semibold text-white md:text-xl">
              {title}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
