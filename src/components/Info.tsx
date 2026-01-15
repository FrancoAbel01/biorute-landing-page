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
        { src: infoEn1, alt: "Ethylock / CherryStop – Cherry (EN)" },
        { src: infoEn2, alt: "Ethylock / CherryStop – Avocado (EN)" },
      ],
    },
    es: {
      eyebrow: "Productos",
      title: "Ethylock (Palta) | CherryStop (Cereza)",
      description:
        "Es una solución líquida que se aplica directamente en los tanques de lavado de las plantas de proceso. Crea una capa protectora extra desde la cual los péptidos se difunden.",
      images: [
        { src: infoEs1, alt: "Ethylock / CherryStop – Cereza (ES)" },
        { src: infoEs2, alt: "Ethylock / CherryStop – Palta (ES)" },
      ],
    },
  } as const;

  const t = content[language];

  const toSrc = (img: unknown) =>
    (img as { src: string })?.src ?? (img as string);

  return (
    <section
      id="info"
      className="relative pt-0 pb-8 bg-[#F9F3E7] overflow-hidden text-[#244629]"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight animate-fadeInUp [animation-delay:60ms]">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-[#244629]/80 animate-fadeInUp [animation-delay:120ms]">
            {t.description}
          </p>
        </div>

        {/* IMAGES GRID */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
          {t.images.map((img, idx) => (
            <figure
              key={img.alt}
              className="
                group
                relative
                animate-fadeInUp
              "
              style={{ animationDelay: `${180 + idx * 80}ms` }}
            >
              <div
                className="
                  relative
                  w-full
                  h-[320px]
                  md:h-[420px]
                  rounded-3xl
                  overflow-hidden
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.03]
                "
              >
                {/* sombra suave integrada al fondo */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    shadow-[0_18px_45px_rgba(36,70,41,0.28)]
                    opacity-40
                    group-hover:opacity-60
                    transition-opacity
                    duration-300
                    pointer-events-none
                  "
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={toSrc(img.src)}
                  alt={img.alt}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-contain
                    p-6
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:scale-[1.05]
                  "
                  loading="lazy"
                />
              </div>

              <figcaption className="mt-4 text-sm text-center text-[#244629]">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Animación */}
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
          animation: fadeInUp 650ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
      `}</style>
    </section>
  );
}
