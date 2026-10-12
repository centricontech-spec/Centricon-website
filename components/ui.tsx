import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Tag({ children, marker = false }: { children: ReactNode; marker?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-line px-3 py-1.5 font-brand text-label uppercase text-ink">
      {marker && <span aria-hidden className="size-1.5 bg-amber" />}
      {children}
    </span>
  );
}

export function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "amber" | "ink" | "outline";
  dot?: boolean;
};

const variants = {
  amber: "bg-amber text-on-amber hover:brightness-110",
  ink: "bg-ink text-ground hover:opacity-90",
  outline: "border border-line-strong text-ink hover:border-ink",
};

export function ButtonLink({ variant = "amber", dot = false, className = "", children, ...props }: ButtonProps) {
  return (
    <Link
      {...props}
      className={`inline-flex h-12 items-center gap-2.5 rounded-full px-7 text-base font-medium transition duration-200 ease-brand md:h-[52px] ${variants[variant]} ${className}`}
    >
      {dot && <span aria-hidden className="size-2 rounded-full bg-amber" />}
      {children}
    </Link>
  );
}

export function TextLink({ className = "", children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-2 border-b border-current pb-1 font-medium ${className}`}
    >
      {children}
      <Arrow className="size-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />
    </Link>
  );
}

/** Tag + headline that opens every section. */
export function SectionIntro({
  tag,
  title,
  lead,
  className = "",
}: {
  tag: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal max-w-4xl ${className}`}>
      <Tag>{tag}</Tag>
      <h2 className="mt-6 text-balance font-display text-display-m">{title}</h2>
      {lead && <p className="mt-6 max-w-2xl text-lead text-ink-muted">{lead}</p>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-4 md:px-10 ${className}`}>{children}</div>;
}
