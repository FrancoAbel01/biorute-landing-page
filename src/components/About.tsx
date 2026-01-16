"use client";

import { useLanguage } from "../context/LanguageContext";
import EfficacyTable from "./EfficacyTable";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Solution",
      lead:
        "Anti-ripening peptides that protect fruit quality during long-distance export.",
      paragraphs: [
        "Our solution uses anti-ripening peptides that provide antioxidant, anti-ethylene, and anti-dehydration protection. This technology maintains the quality and nutritional integrity of the fruit for extended periods, ensuring greener pedicels, firmer avocados, and redder cherries.",
        // "As a result, exporters can access destinations that are currently considered unreachable (e.g., the avocado market), securing a comparative advantage that increases profit margins.",
      ],
      highlights: [
        { label: "Antioxidant protection" },
        { label: "Anti-ethylene action" },
        { label: "Anti-dehydration barrier" },
      ],
    },
    es: {
      title: "Nuestra Solución",
      lead:
        "Péptidos antimaduración que protegen la calidad de la fruta en exportaciones de larga distancia.",
      paragraphs: [
        "Nuestra solución utiliza péptidos antimaduración que proporcionan protección antioxidante, anti-etileno y antideshidratante. Esta tecnología mantiene la calidad e integridad nutricional de la fruta por períodos prolongados, asegurando pedúnculos más verdes, paltas más firmes y cerezas más rojas.",
        // "En consecuencia, los exportadores pueden acceder a destinos que actualmente se consideran inalcanzables (ej.: el mercado de la palta), asegurando una ventaja comparativa que incrementa los márgenes de utilidad.",
      ],
      highlights: [
        { label: "Protección antioxidante" },
        { label: "Acción anti-etileno" },
        { label: "Barrera antideshidratante" },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section
      id="about"
      className="relative pt-0 pb-10 bg-[#F9F3E7] overflow-hidden text-[#244629]"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {/* ✅ TODO EN UNA COLUMNA */}
        <div className="flex flex-col gap-10">
          {/* HEADER + TEXT */}
          <div>
            <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-[#244629] animate-fadeInUp [animation-delay:60ms]">
              {t.title}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#244629] max-w-3xl animate-fadeInUp [animation-delay:120ms]">
              {t.lead}
            </p>

            {/* ✅ Highlights SIN SCROLL: grid 2 cols en móvil, 3 cols en desktop */}
            <div className="mt-6 animate-fadeInUp [animation-delay:180ms]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {t.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="
                      w-full
                      text-center
                      rounded-full
                      px-3
                      py-2
                      text-[13px]
                      md:text-sm
                      font-bold
                      text-[#244629]
                      bg-white/25
                      border
                      border-[#244629]
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      ease-out
                      hover:bg-[#244629]/12
                      hover:text-[#1b3620]
                      hover:scale-[1.02]
                      hover:shadow-[0_8px_18px_rgba(36,70,41,0.18)]
                      cursor-default
                    "
                  >
                    {h.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Paragraphs */}
            <div className="mt-7 space-y-5 text-[15px] md:text-lg text-[#244629] leading-relaxed animate-fadeInUp [animation-delay:240ms]">
              {t.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
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
