import type { ComponentType, SVGProps } from "react";
import type { SolutionIcon } from "@/lib/solutions";
import type { SegmentIcon } from "@/lib/segments";
import {
  IconBread,
  IconChef,
  IconCog,
  IconDroplet,
  IconFactory,
  IconHeadset,
  IconHospital,
  IconHotel,
  IconMeat,
  IconShirt,
  IconSparkle,
  IconUtensils,
  IconWand,
  IconWashingMachine,
} from "./Icons";

type IconComp = ComponentType<SVGProps<SVGSVGElement>>;

const solutionMap: Record<SolutionIcon, IconComp> = {
  droplet: IconDroplet,
  sparkle: IconSparkle,
  cog: IconCog,
  wand: IconWand,
  "washing-machine": IconWashingMachine,
  headset: IconHeadset,
};

const segmentMap: Record<SegmentIcon, IconComp> = {
  meat: IconMeat,
  factory: IconFactory,
  hospital: IconHospital,
  hotel: IconHotel,
  utensils: IconUtensils,
  chef: IconChef,
  bread: IconBread,
  shirt: IconShirt,
};

type RenderProps<T> = { name: T; className?: string };

/** Wrapper estável — evita lint `react-hooks/static-components` por lookup dinâmico no render. */
export function SolutionIconRender({ name, className }: RenderProps<SolutionIcon>) {
  const Comp = solutionMap[name];
  return <Comp className={className} />;
}

export function SegmentIconRender({ name, className }: RenderProps<SegmentIcon>) {
  const Comp = segmentMap[name];
  return <Comp className={className} />;
}
