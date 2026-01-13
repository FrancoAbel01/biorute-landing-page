"use client";

import { useLanguage } from "../context/LanguageContext";

// 👉 cambia estas rutas por tus imágenes reales
import aboutEn from "../imagen/english_table.jpeg";
import aboutEs from "../imagen/español_tabla.jpeg";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      eyebrow: "Technology",
      title: "Our Solution",
      lead:
        "Anti-ripening peptides that protect fruit quality during long-distance export.",
      paragraphs: [
        `Our solution uses anti-ripening peptides that provide antioxidant, anti-ethylene, and anti-dehydration protection. This technology maintains the quality and nutritional integrity of the fruit for extended periods, ensuring greener pedicels, firmer avocados, and redder cherries.`,
        `As a result, exporters can access destinations that are currently considered unreachable (e.g., the avocado market), securing a comparative advantage that increases profit margins.`,
      ],
      highlights: [
        { label: "Antioxidant protection" },
        { label: "Anti-ethylene action" },
        { label: "Anti-dehydration barrier" },
      ],
      image: {
        src: aboutEn,
        alt: "Anti-ripening peptide technology – English",
      },
    },
    es: {
      eyebrow: "Tecnología",
      title: "Nuestra Solución",
      lead:
        "Péptidos antimaduración que protegen la calidad de la fruta en exportaciones de larga distancia.",
      paragraphs: [
        `Nuestra solución utiliza péptidos antimaduración que proporcionan protección antioxidante, anti-etileno y antideshidratante. Esta tecnología mantiene la calidad e integridad nutricional de la fruta por períodos prolongados, asegurando pedúnculos más verdes, paltas más firmes y cerezas más rojas.`,
        `En consecuencia, los exportadores pueden acceder a destinos que actualmente se consideran inalcanzables (ej.: el mercado de la palta), asegurando una ventaja comparativa que incrementa los márgenes de utilidad.`,
      ],
      highlights: [
        { label: "Protección antioxidante" },
        { label: "Acción anti-etileno" },
        { label: "Barrera antideshidratante" },
      ],
      image: {
        src: aboutEs,
        alt: "Tecnología de péptidos antimaduración – Español",
      },
    },
  } as const;

  const t = content[language];

  const imgSrc =
    (t.image.src as unknown as { src: string })?.src ?? (t.image.src as unknown as string);

  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#FDFDFB] overflow-hidden">
      {/* Subtle background accents */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose-200/35 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Left: Content */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-zinc-900 backdrop-blur animate-fadeInUp">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              {t.eyebrow}
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-[#1F3D2B] animate-fadeInUp [animation-delay:60ms]">
              {t.title}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-700 max-w-xl animate-fadeInUp [animation-delay:120ms]">
              {t.lead}
            </p>

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap gap-2 animate-fadeInUp [animation-delay:180ms]">
              {t.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-zinc-800 backdrop-blur"
                >
                  {h.label}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-[15px] md:text-lg text-zinc-700 leading-relaxed animate-fadeInUp [animation-delay:240ms]">
              {t.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: Image (FULLY VISIBLE) */}
          <div className="md:col-span-6 animate-fadeInUp [animation-delay:140ms]">
            {/* 
              ✅ Garantía de imagen completa:
              - object-contain (no recorta)
              - contenedor con altura definida
            */}
            <div className="w-full">
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[520px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={t.image.alt}
                  className="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-sm text-zinc-500 text-center">
                {language === "es"
                  ? "Comparación y resultados de la tecnología aplicada."
                  : "Technology comparison and results overview."}
              </p>
            </div>
          </div>
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
