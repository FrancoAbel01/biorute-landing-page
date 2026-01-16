"use client";

import { useLanguage } from "../context/LanguageContext";

// Imágenes
import cereza from "../imagen/cereza.png";
import palta from "../imagen/palta.png";

export default function Info() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Ethylock (Avocado) | CherryStop (Cherry)",
      description:
        "It is a liquid solution applied directly into the wash tanks at processing plants. It creates an extra protective layer from which the peptides diffuse.",
      images: [
        { src: palta, alt: "Ethylock", subtitle: "Avocado" },
        { src: cereza, alt: "CherryStop", subtitle: "Cherry" },
      ],
    },
    es: {
      title: "Ethylock (Palta) | CherryStop (Cereza)",
      description:
        "Es una solución líquida que se aplica directamente en los tanques de lavado de las plantas de proceso. Crea una capa protectora extra desde la cual los péptidos se difunden.",
      images: [
        { src: palta, alt: "Ethylock", subtitle: "Palta" },
        { src: cereza, alt: "CherryStop", subtitle: "Cereza" },
      ],
    },
  } as const;

  const t = content[language];

  const toSrc = (img: unknown) =>
    (img as { src: string })?.src ?? (img as string);

  return (
    <section id="info"  className="
        relative z-20
        bg-[#F9F3E7] text-[#244629]
        rounded-b-xl overflow-hidden
        pb-[5px] mb-[-10px]
      ">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* TEXTO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t.title}
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-[#244629]/80">
            {t.description}
          </p>
        </div>

        {/* BANNER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.images.map((img) => (
            <div
              key={img.alt}
              className="
                group
                relative
                w-full
                h-[260px]
                md:h-[340px]
                rounded-3xl
                overflow-hidden
                shadow-[0_18px_45px_rgba(36,70,41,0.18)]
              "
            >
              {/* Imagen */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={toSrc(img.src)}
                alt={`${img.alt} – ${img.subtitle}`}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-[1.04]
                "
                loading="lazy"
              />

              {/* Overlay para lectura */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

              {/* Textos encima */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
                  {language === "es" ? "Producto" : "Product"}
                </div>

                <div className="mt-3 text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {img.alt}
                </div>

                <div className="mt-1 text-sm md:text-base text-white/90">
                  {img.subtitle}
                </div>
              </div>

              {/* borde suave */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
