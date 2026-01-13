"use client";

import { useLanguage } from "../context/LanguageContext";

// Imágenes
import infoEn1 from "../imagen/english_cereza.jpeg";
import infoEn2 from "../imagen/english_aguacate.jpeg";
import infoEs1 from "../imagen/español_cereza.jpeg";
import infoEs2 from "../imagen/español_aguacate.jpeg";

export default function Info() {
  const { language } = useLanguage();

  const content = {
    en: {
      eyebrow: "Products",
      title: "Ethylock (Avocado) | CherryStop (Cherry)",
      description:
        "It is a liquid solution applied directly into the wash tanks at processing plants. It creates an extra protective layer from which the peptides diffuse.",
      images: [
        { src: infoEn1, alt: "Ethylock / CherryStop – Cherry (EN)", tag: "CherryStop" },
        { src: infoEn2, alt: "Ethylock / CherryStop – Avocado (EN)", tag: "Ethylock" },
      ],
    },
    es: {
      eyebrow: "Productos",
      title: "Ethylock (Palta) | CherryStop (Cereza)",
      description:
        "Es una solución líquida que se aplica directamente en los tanques de lavado de las plantas de proceso. Crea una capa protectora extra desde la cual los péptidos se difunden.",
      images: [
        { src: infoEs1, alt: "Ethylock / CherryStop – Cereza (ES)", tag: "CherryStop" },
        { src: infoEs2, alt: "Ethylock / CherryStop – Palta (ES)", tag: "Ethylock" },
      ],
    },
  } as const;

  const t = content[language];

  const toSrc = (img: unknown) =>
    (img as { src: string })?.src ?? (img as string);

  return (
    <section id="info" className="relative py-12 bg-[#FDFDFB] overflow-hidden">
      {/* Soft background accents */}
     

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-zinc-900 backdrop-blur animate-fadeInUp">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            {t.eyebrow}
          </div>

          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-[#1F3D2B] animate-fadeInUp [animation-delay:60ms]">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-zinc-700 animate-fadeInUp [animation-delay:120ms]">
            {t.description}
          </p>
        </div>

        {/* Images grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.images.map((img, idx) => (
            <figure
              key={img.alt}
              className="animate-fadeInUp"
              style={{ animationDelay: `${180 + idx * 80}ms` }}
            >
              {/* ✅ FULL IMAGE VISIBLE: object-contain + fixed-height wrapper */}
              <div className="relative w-full h-[320px] md:h-[420px] bg-white/70 border border-black/10 rounded-3xl overflow-hidden backdrop-blur">
                {/* label */}
                {/* <div className="absolute left-4 top-4 z-10 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-900">
                  {img.tag}
                </div> */}

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={toSrc(img.src)}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-contain p-4"
                  loading="lazy"
                />
              </div>

              <figcaption className="mt-3 text-sm text-zinc-600 text-center">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* ✅ CSS-only animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 650ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
      `}</style>
    </section>
  );
}
