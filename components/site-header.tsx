"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-brand ${
        scrolled || open ? "border-b border-line bg-ground/95 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 md:h-[88px] md:px-10">
        <Link href="/" aria-label="Centricon home" onClick={() => setOpen(false)}>
          <Image
            src="/brand/centricon-lockup-horizontal-on-dark.svg"
            alt="Centricon"
            width={140}
            height={32}
            priority
            unoptimized
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-base font-medium text-ink/90 hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-2.5 rounded-full border border-line-strong px-5 font-medium hover:border-ink"
          >
            <span aria-hidden className="size-2 rounded-full bg-amber" />
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 items-center px-2 font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-5rem)] overflow-y-auto bg-ground px-4 pb-10 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-2 pt-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-display-m"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex h-12 w-fit items-center gap-2.5 rounded-full bg-amber px-7 font-medium text-on-amber"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
