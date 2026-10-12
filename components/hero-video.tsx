"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  desktop: { mp4: string; webm?: string; poster: string };
  mobile: { mp4: string; poster: string };
};

/**
 * Full-bleed background loop.
 * The poster paints first (it is the LCP image); the video fades in once it can play.
 * Phones get the vertical cut. Reduced motion or data-saver keeps the poster only.
 */
export function HeroVideo({ desktop, mobile }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [variant, setVariant] = useState<"desktop" | "mobile" | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduce || conn?.saveData) return;
    setVariant(window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop");
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, [variant]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-ground-deep">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobile.poster} />
        <Image src={desktop.poster} alt="" fill priority sizes="100vw" className="object-cover" />
      </picture>
      {variant && (
        <video
          ref={ref}
          key={variant}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster={variant === "mobile" ? mobile.poster : desktop.poster}
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-brand ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        >
          {variant === "desktop" && desktop.webm && <source src={desktop.webm} type="video/webm" />}
          <source src={variant === "mobile" ? mobile.mp4 : desktop.mp4} type="video/mp4" />
        </video>
      )}
      {/* Top fade keeps the white nav readable over the grey softbox area of the footage. */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ground-deep/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ground/90 to-transparent" />
    </div>
  );
}
