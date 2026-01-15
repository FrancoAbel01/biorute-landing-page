"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
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
    },
    en: {
      badge: "Innovation for agro-exports",
      line1: "Longer shelf life.",
      line2: "More markets.",
      line3: "More value.",
      desc:
        "Post-harvest protection technology designed to preserve fruit quality, freshness, and competitiveness across long-distance export routes.",
    },
  } as const;

  const t = content[language];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt="Hero background"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center animate-fadeInUp">
       

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
          <span className="block">{t.line1}</span>
          <span className="block">{t.line2}</span>
          <span className="block">{t.line3}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          {t.desc}
        </p>
      </div>

      {/* CSS-only animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
      `}</style>
    </section>
  );
}
