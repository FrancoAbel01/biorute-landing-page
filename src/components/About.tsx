"use client";

import { useLanguage } from "../context/LanguageContext";

// 👉 cambia estas rutas por tus imágenes reales
import aboutEn from "../imagen/english_table.png";
import aboutEs from "../imagen/español_tabla.png";

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
      caption: "Technology comparison and results overview.",
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
      caption: "Comparación y resultados de la tecnología aplicada.",
    },
  } as const;

  const t = content[language];

  const imgSrc =
    (t.image.src as unknown as { src: string })?.src ??
    (t.image.src as unknown as string);

  return (
    <section id="about" className="relative py-16 bg-[#E7D3B7] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Left: Content */}
          <div className="md:col-span-6">
            {/* Eyebrow */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-black/20
                bg-white px-4 py-2
                text-xs font-semibold tracking-wide
                text-[#000000]
                shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                animate-fadeInUp
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#1F3D2B]" />
              {t.eyebrow}
            </div>

            {/* Title (verde oscuro permitido) */}
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-[#1F3D2B] animate-fadeInUp [animation-delay:60ms]">
              {t.title}
            </h2>

            {/* Lead (negro sólido) */}
            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#000000] max-w-xl animate-fadeInUp [animation-delay:120ms]">
              {t.lead}
            </p>

            {/* Highlights (pills con sombra) */}
            <div className="mt-7 flex flex-wrap gap-3 animate-fadeInUp [animation-delay:180ms]">
              {t.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="
                    rounded-full
                    border border-black/15
                    bg-white
                    px-4 py-2
                    text-sm text-[#000000]
                    shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                  "
                >
                  {h.label}
                </span>
              ))}
            </div>

            {/* Paragraphs (negro sólido) */}
            <div className="mt-8 space-y-6 text-[15px] md:text-lg text-[#000000] leading-relaxed animate-fadeInUp [animation-delay:240ms]">
              {t.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: Image (FULLY VISIBLE) */}
          <div className="md:col-span-6 animate-fadeInUp [animation-delay:140ms]">
            {/* ✅ Imagen completa garantizada */}
            <div
              className="
                w-full
                rounded-3xl
                bg-white
                border border-black/10
                shadow-[0_16px_48px_rgba(0,0,0,0.14)]
                p-4
              "
            >
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[520px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={t.image.alt}
                  className="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Caption (negro sólido pero suave) */}
              <p className="mt-3 text-sm text-center text-[#000000]/70">
                {t.caption}
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
