"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function HeroTextOverlay() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);

   
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

         
        const raw = (-rect.top) / (vh * 0.6);
        setP(clamp(raw, 0, 1));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const content = {
    es: {
      line1: "Más vida útil.",
      line2: "Más mercados.",
      line3: "Más valor.",
      desc:
        "Tecnología de protección postcosecha diseñada para mantener la calidad, frescura y competitividad de la fruta en rutas de exportación de larga distancia.",
    },
    en: {
      line1: "Longer shelf life.",
      line2: "More markets.",
      line3: "More value.",
      desc:
        "Post-harvest protection technology designed to preserve fruit quality, freshness, and competitiveness across long-distance export routes.",
    },
  } as const;

  const t = content[language];

 
  const translateY = Math.round(-80 * p); // se va hacia arriba
  const opacity = 1 - p;                 // se desvanece
  const scale = 1 - 0.05 * p;            // leve compresión

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center px-6 text-center"
    >
      <div
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,
          willChange: "transform, opacity",
        }}
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#F9F3E7] md:text-6xl">
          <span className="block">{t.line1}</span>
          <span className="block">{t.line2}</span>
          <span className="block">{t.line3}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          {t.desc}
        </p>
      </div>
    </div>
  );
}
