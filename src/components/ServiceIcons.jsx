// Sophisticated, consistent line-based SVG icons for services.
// 48x48 viewBox, 1.6 stroke, uses currentColor + gradient accent.

const base = {
  width: 48,
  height: 48,
  viewBox: '0 0 48 48',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};

const Defs = ({ id }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop stopColor="#22D3EE" />
      <stop offset="1" stopColor="#3B82F6" />
    </linearGradient>
  </defs>
);

export const AIIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-ai" />
    <rect x="14" y="14" width="20" height="20" rx="4" stroke="url(#g-ai)" strokeWidth="1.6" />
    <circle cx="24" cy="24" r="3" fill="url(#g-ai)" />
    <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M37 11l-4 4M15 33l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
    <circle cx="24" cy="6" r="1.8" fill="currentColor" />
    <circle cx="24" cy="42" r="1.8" fill="currentColor" />
    <circle cx="6" cy="24" r="1.8" fill="currentColor" />
    <circle cx="42" cy="24" r="1.8" fill="currentColor" />
  </svg>
);

export const SoftwareIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-sw" />
    <rect x="5" y="9" width="38" height="26" rx="3" stroke="url(#g-sw)" strokeWidth="1.6" />
    <path d="M5 15h38" stroke="url(#g-sw)" strokeWidth="1.6" />
    <circle cx="9" cy="12" r="0.9" fill="currentColor" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    <circle cx="15" cy="12" r="0.9" fill="currentColor" />
    <path d="M16 23l-4 4 4 4M32 23l4 4-4 4M26 21l-4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 41h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const CloudIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-cl" />
    <path d="M14 30c-3.5 0-6-2.7-6-6 0-3.2 2.4-5.8 5.5-6 .8-4 4.4-7 8.8-7 5 0 9 4 9 9v.2c.3 0 .6-.1 1-.1 3.3 0 6 2.7 6 6s-2.7 6-6 6H14z" stroke="url(#g-cl)" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M18 36l2 4M24 36l-2 6M30 36l-2 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const DataIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-da" />
    <ellipse cx="24" cy="11" rx="14" ry="4" stroke="url(#g-da)" strokeWidth="1.6" />
    <path d="M10 11v10c0 2.2 6.3 4 14 4s14-1.8 14-4V11" stroke="url(#g-da)" strokeWidth="1.6" />
    <path d="M10 21v10c0 2.2 6.3 4 14 4s14-1.8 14-4V21" stroke="url(#g-da)" strokeWidth="1.6" />
    <path d="M10 31v6c0 2.2 6.3 4 14 4s14-1.8 14-4v-6" stroke="url(#g-da)" strokeWidth="1.6" />
    <circle cx="16" cy="20" r="1.2" fill="currentColor" />
    <circle cx="16" cy="30" r="1.2" fill="currentColor" />
    <circle cx="16" cy="38" r="1.2" fill="currentColor" />
  </svg>
);

export const DevOpsIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-dv" />
    <circle cx="24" cy="24" r="14" stroke="url(#g-dv)" strokeWidth="1.6" />
    <path d="M24 10a14 14 0 0114 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M24 38a14 14 0 01-14-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M37 22l2.5-2-2-2.5M11 26l-2.5 2 2 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="5" stroke="url(#g-dv)" strokeWidth="1.6" />
    <path d="M24 22v2l1.5 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const MobileIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-mb" />
    <rect x="14" y="6" width="20" height="36" rx="4" stroke="url(#g-mb)" strokeWidth="1.6" />
    <path d="M14 12h20M14 36h20" stroke="url(#g-mb)" strokeWidth="1.6" />
    <circle cx="24" cy="39" r="1.2" fill="currentColor" />
    <path d="M20 20h8M20 24h5M20 28h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const ConsultingIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-cs" />
    <path d="M24 6a10 10 0 00-6 18c1.5 1 2.5 2 3 4h6c.5-2 1.5-3 3-4a10 10 0 00-6-18z" stroke="url(#g-cs)" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M20 34h8M21 38h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M24 14v10M20 20l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SecurityIcon = ({ className = 'w-12 h-12' }) => (
  <svg {...base} className={className}>
    <Defs id="g-se" />
    <path d="M24 5l14 5v12c0 9-6 15-14 21-8-6-14-12-14-21V10l14-5z" stroke="url(#g-se)" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const icons = {
  ai: AIIcon,
  software: SoftwareIcon,
  cloud: CloudIcon,
  data: DataIcon,
  devops: DevOpsIcon,
  mobile: MobileIcon,
  consulting: ConsultingIcon,
  security: SecurityIcon,
};
