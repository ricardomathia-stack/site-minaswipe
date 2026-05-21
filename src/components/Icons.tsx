import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
} as const;

export const IconDroplet = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3.5s6 6.6 6 11a6 6 0 1 1-12 0c0-4.4 6-11 6-11Z" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconLeaf = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20s.6-7.5 6-12 11-5 11-5-.4 6.5-5 11-12 6-12 6Z" />
    <path d="M4 20 14 10" />
  </svg>
);

export const IconCog = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
);

export const IconSparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 3 1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3Z" />
    <path d="M19 14v3M17.5 15.5h3" />
  </svg>
);

export const IconBeaker = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 3v6L4 19a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 19l-5-10V3" />
    <path d="M9 3h6" />
    <path d="M7 15h10" />
  </svg>
);

export const IconWand = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17 11l-1.5-1.5M17 7l-1.5 1.5M13 7l1.5 1.5M13 11l1.5-1.5" />
    <path d="m3 21 9-9" />
    <path d="m12.5 11.5 1 1" />
  </svg>
);

export const IconWashingMachine = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <circle cx="12" cy="14" r="4" />
    <circle cx="12" cy="14" r="1.2" />
    <path d="M7 6h.01M11 6h2" />
  </svg>
);

export const IconHeadset = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 14v-2a8 8 0 1 1 16 0v2" />
    <path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2ZM20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
    <path d="M20 16v1a4 4 0 0 1-4 4h-2" />
  </svg>
);

export const IconBolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m4 12 5 5L20 6" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconChevronDown = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconWhatsApp = (p: IconProps) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M20.5 3.5A10.5 10.5 0 0 0 3.6 16.2L2 22l5.9-1.5A10.5 10.5 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3.5.9.9-3.4-.2-.3A8 8 0 1 1 12 20Zm4.6-5.8c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.1 7.1 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 1.6.7 2.2.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.5-.3Z" />
  </svg>
);

export const IconMail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconMapPin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

// Segments
export const IconMeat = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14.5 3a5.5 5.5 0 0 1 5.5 5.5c0 2.6-2 4-3.5 5L14.5 16l-2 2a4 4 0 1 1-5.6-5.6l2-2 2.6-2c1-1.5 2.4-3.5 5-3.5Z" />
    <circle cx="9" cy="15" r="0.6" />
  </svg>
);

export const IconFactory = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21V10l5 3V10l5 3V8l8 4v9H3Z" />
    <path d="M7 17h2M12 17h2M17 17h2" />
  </svg>
);

export const IconHospital = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 21V8l8-5 8 5v13" />
    <path d="M10 21v-4h4v4" />
    <path d="M12 9v4M10 11h4" />
  </svg>
);

export const IconHotel = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21V5l9-2 9 2v16" />
    <path d="M9 8h.01M14 8h.01M9 12h.01M14 12h.01M9 16h.01M14 16h.01" />
    <path d="M3 21h18" />
  </svg>
);

export const IconUtensils = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 3v9a2 2 0 0 0 2 2v7M5 3v5a2 2 0 0 0 2 2M9 3v5" />
    <path d="M17 21v-7a3 3 0 0 1 3-3V3h-1a3 3 0 0 0-3 3v5a3 3 0 0 0 1 2v8" />
  </svg>
);

export const IconChef = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 13a4 4 0 1 1 1.5-7.7A4 4 0 0 1 15 5a4 4 0 0 1 3 8" />
    <path d="M6 13v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
    <path d="M9 18h6" />
  </svg>
);

export const IconBread = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3Z" />
    <path d="M9 12v3M12 12v3M15 12v3" />
  </svg>
);

export const IconShirt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 3 4 6l2 4h2v10h8V10h2l2-4-4-3-2 2a2 2 0 0 1-4 0L8 3Z" />
  </svg>
);
