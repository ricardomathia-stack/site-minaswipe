import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
};

/**
 * Logo oficial da Minas Wipe.
 * Arquivo em /public/logo.avif (360x62 nativo).
 * Para trocar a logo, substitua o arquivo mantendo o mesmo path,
 * ou atualize `src` aqui se o nome do arquivo mudar.
 */
export function Logo({ className, height = 36, priority = false }: LogoProps) {
  const w = Math.round((360 / 62) * height);
  return (
    <Image
      src="/logo.avif"
      alt="Minas Wipe"
      width={w}
      height={height}
      priority={priority}
      className={`h-auto w-auto select-none ${className ?? ""}`}
      style={{ height: `${height}px`, width: "auto", maxWidth: "100%" }}
    />
  );
}
