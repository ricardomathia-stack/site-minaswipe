type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

/**
 * Logotipo provisório da Minas Wipe.
 * Mark: gota estilizada com onda interna (limpeza + tecnologia).
 * Wordmark: "MINAS WIPE" em sans bold com kerning ajustado.
 * Substitua o `<svg>` da mark e/ou o wordmark quando os assets oficiais chegarem.
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  const inkClass = variant === "light" ? "text-white" : "text-brand-900";
  const subClass = variant === "light" ? "text-white/70" : "text-ink-500";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        aria-hidden
      >
        <defs>
          <linearGradient id="mw-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="60%" stopColor="#0052cc" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path
          d="M20 3.5c0 0 12 12 12 21.5a12 12 0 1 1-24 0c0-9.5 12-21.5 12-21.5Z"
          fill="url(#mw-grad)"
        />
        <path
          d="M11.5 24c1.5 1.6 3 2.4 4.5 2.4 2.2 0 3-2 5-2s2.8 2 5 2c1.5 0 2.8-.7 3.8-1.6"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.05rem] font-bold tracking-tight ${inkClass}`}
        >
          Minas Wipe
        </span>
        <span
          className={`mt-0.5 text-[0.66rem] font-medium uppercase tracking-[0.18em] ${subClass}`}
        >
          Higiene profissional
        </span>
      </span>
    </span>
  );
}
