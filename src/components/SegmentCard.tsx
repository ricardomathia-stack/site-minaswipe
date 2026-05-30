import Link from "next/link";
import type { Segment } from "@/lib/segments";
import { IconArrowRight } from "./Icons";
import { SegmentIconRender } from "./iconResolvers";

type Tone = "navy" | "blue" | "light";

const toneMap: Record<Tone, { bg: string; icon: string; title: string; sub: string; cta: string }> = {
  navy: {
    bg: "bg-gradient-to-br from-navy-800 to-navy-700 text-white border-transparent",
    icon: "bg-white/12 text-white",
    title: "text-white",
    sub: "text-white/75",
    cta: "text-white",
  },
  blue: {
    bg: "bg-gradient-to-br from-accent-700 to-accent-600 text-white border-transparent",
    icon: "bg-white/15 text-white",
    title: "text-white",
    sub: "text-white/80",
    cta: "text-white",
  },
  light: {
    bg: "bg-white border-ink-200",
    icon: "bg-ink-100 text-navy-800",
    title: "text-navy-800",
    sub: "text-ink-500",
    cta: "text-accent-700",
  },
};

type Props = {
  segment: Segment;
  tone?: Tone;
  span?: string;
};

export function SegmentCard({ segment, tone = "light", span }: Props) {
  const t = toneMap[tone];
  return (
    <Link
      href={`/segmentos/${segment.slug}`}
      className={`group flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${t.bg} ${span ?? ""}`}
    >
      <div>
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${t.icon}`}>
          <SegmentIconRender name={segment.icon} className="h-5 w-5" />
        </span>
        <h3 className={`mt-5 font-display text-lg font-semibold ${t.title}`}>
          {segment.name}
        </h3>
        <p className={`mt-1.5 text-xs font-medium uppercase tracking-wider ${t.sub}`}>
          {segment.pain}
        </p>
        <p className={`mt-3 text-[0.95rem] leading-relaxed ${t.sub}`}>
          {segment.benefit}
        </p>
      </div>
      <span className={`mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold ${t.cta} transition-transform group-hover:translate-x-0.5`}>
        Ver solução
        <IconArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
