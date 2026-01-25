"use client";

import { useLanguage } from "../context/LanguageContext";
import EvolutionaryComponent from "./EvolutionaryComponent";

export default function SolutionSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      title: "Our Solution",
      lead:
        "Anti-ripening peptides that protect fruit quality during long-distance export.",
      paragraphs: [
        "Our solution uses anti-ripening peptides that provide antioxidant, anti-ethylene, and anti-dehydration protection. This technology maintains the quality and nutritional integrity of the fruit for extended periods, ensuring greener pedicels, firmer avocados, and redder cherries.",
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

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">

        <div className="w-full text-left mb-12">
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-[#244629]">
            {t.lead}
          </p>


          <div className="mt-6 space-y-5 text-[15px] md:text-lg leading-relaxed text-[#244629]/80">
            {t.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-5">
            <div className="flex flex-wrap gap-2">
              {t.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="
                    rounded-full
                    px-3 py-1.5
                    text-[16px] 
                    font-bold
                    text-[#244629]
                    bg-[#244629]/10
                  "
                >
                  {h.label}
                </span>
              ))}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}