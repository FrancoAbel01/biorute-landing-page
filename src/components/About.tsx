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
        "Our solution uses anti-ripening peptides that provide antioxidant, anti-ethylene, and anti-dehydration protection. This technology maintains the quality and nutritional integrity of the fruit for extended periods, ensuring greener pedicels, firmer avocados, and redder cherries.",
        "As a result, exporters can access destinations that are currently considered unreachable (e.g., the avocado market), securing a comparative advantage that increases profit margins.",
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
        "Nuestra solución utiliza péptidos antimaduración que proporcionan protección antioxidante, anti-etileno y antideshidratante. Esta tecnología mantiene la calidad e integridad nutricional de la fruta por períodos prolongados, asegurando pedúnculos más verdes, paltas más firmes y cerezas más rojas.",
        "En consecuencia, los exportadores pueden acceder a destinos que actualmente se consideran inalcanzables (ej.: el mercado de la palta), asegurando una ventaja comparativa que incrementa los márgenes de utilidad.",
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
    <section
      id="about"
      className="relative py-16 bg-[#F9F3E7] overflow-hidden text-[#244629]"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">

          {/* LEFT: CONTENT */}
          <div className="md:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#244629]/20 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#244629] shadow-[0_6px_18px_rgba(0,0,0,0.10)] animate-fadeInUp">
              <span className="h-2 w-2 rounded-full bg-[#244629]" />
              {t.eyebrow}
            </div>

            {/* Title */}
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-[#244629] animate-fadeInUp [animation-delay:60ms]">
              {t.title}
            </h2>

            {/* Lead */}
            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#244629]/80 max-w-xl animate-fadeInUp [animation-delay:120ms]">
              {t.lead}
            </p>

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap gap-3 animate-fadeInUp [animation-delay:180ms]">
              {t.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-[#244629]/20 bg-white px-4 py-2 text-sm text-[#244629] shadow-[0_6px_18px_rgba(0,0,0,0.10)]"
                >
                  {h.label}
                </span>
              ))}
            </div>

            {/* Paragraphs */}
            <div className="mt-8 space-y-6 text-[15px] md:text-lg text-[#244629]/90 leading-relaxed animate-fadeInUp [animation-delay:240ms]">
              {t.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="md:col-span-6 animate-fadeInUp [animation-delay:140ms]">
            <div className="w-full rounded-3xl bg-white border border-[#244629]/15 shadow-[0_16px_48px_rgba(0,0,0,0.12)] p-4">
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[520px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={t.image.alt}
                  className="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <p className="mt-3 text-sm text-center text-[#244629]/70">
                {t.caption}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Animación */}
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
