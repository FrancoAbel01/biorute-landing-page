"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext"; // ✅ ajusta la ruta según tu proyecto
import heroImg from "../imagen/fondo.png";

export default function Hero() {
  const { language } = useLanguage();

  const imgSrc =
    (heroImg as unknown as { src: string })?.src ?? (heroImg as unknown as string);

  const content = {
    es: {
      badge: "Innovación para agroexportación",
      line1: "Más vida útil.",
      line2: "Más mercados.",
      line3: "Más valor.",
      desc:
        "Tecnología de protección postcosecha diseñada para mantener la calidad, frescura y competitividad de la fruta en rutas de exportación de larga distancia.",
      alt: "Solución postcosecha",
    },
    en: {
      badge: "Innovation for agro-exports",
      line1: "Longer shelf life.",
      line2: "More markets.",
      line3: "More value.",
      desc:
        "Post-harvest protection technology designed to preserve fruit quality, freshness, and competitiveness across long-distance export routes.",
      alt: "Post-harvest solution",
    },
  } as const;

  const t = content[language];

  return (
    <section className="w-full bg-[#FDFDFB]">
      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left: Text (CENTERED) */}
        <div className="flex h-full flex-col justify-center text-center animate-fadeInUp">
          <p className="mb-4 text-sm font-medium tracking-wide text-[#000000]">
            {t.badge}
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="block text-[#000000]">{t.line1}</span>
            <span className="block text-[#023012ff]">{t.line2}</span>
            <span className="block text-[#3f0202ff]">{t.line3}</span>
          </h1>

          <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
            {t.desc}
          </p>
        </div>

        {/* Right: Image */}
        <div className="animate-fadeInUp [animation-delay:120ms]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={t.alt}
            className="w-full h-[320px] md:h-[520px] object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* ✅ CSS-only animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 600ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
      `}</style>
    </section>
  );
}
