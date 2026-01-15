import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

/* =========================
   Helpers (same component)
========================= */

function useInView(threshold = 0.35) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // solo una vez
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(end: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const from = 0;

    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);

      // easing suave (easeOutCubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(from + (end - from) * eased);

      setValue(next);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, start, duration]);

  return value;
}

// Convierte strings a número "animable" y define cómo renderizar después
function getAnimatedMeta(raw: string) {
  const v = raw.trim();

  // Top 5 worldwide
  if (v.toLowerCase().includes("top")) {
    const n = Number(v.replace(/[^\d.]/g, "")) || 0;
    return {
      end: n,
      render: (x: number) => `Top ${x} mundial`,
      renderEn: (x: number) => `Top ${x} worldwide`,
      type: "top" as const,
    };
  }

  // USD 7B+ / USD 7.000M+ / USD 7B+
  if (v.toUpperCase().includes("USD")) {
    const n = Number(v.replace(/[^\d.]/g, "")) || 0;
    // Si viene "7B+" lo tratamos como 7 (y mantenemos sufijo)
    const hasB = v.toUpperCase().includes("B");
    const hasM = v.toUpperCase().includes("M");

    return {
      end: n,
      render: (x: number) =>
        hasB ? `USD ${x}B+` : hasM ? `USD ${x.toLocaleString("es-CL")}M+` : `USD ${x}+`,
      renderEn: (x: number) =>
        hasB ? `USD ${x}B+` : hasM ? `USD ${x.toLocaleString("en-US")}M+` : `USD ${x}+`,
      type: "usd" as const,
    };
  }

  // 1.5% / 1,5%
  if (v.includes("%")) {
    const n = Number(v.replace(",", ".").replace(/[^\d.]/g, "")) || 0;
    // animamos en décimas para que 1.5 sea más suave
    const end = Math.round(n * 10);
    return {
      end,
      render: (x: number) => `${(x / 10).toFixed(1).replace(".", ",")}%`,
      renderEn: (x: number) => `${(x / 10).toFixed(1)}%`,
      type: "percent" as const,
    };
  }

  // fallback
  const n = Number(v.replace(/[^\d.]/g, "")) || 0;
  return {
    end: n,
    render: (x: number) => `${x}+`,
    renderEn: (x: number) => `${x}+`,
    type: "plain" as const,
  };
}

/* =========================
   Component
========================= */

export default function Idea() {
  const { language } = useLanguage();

  const content = {
    en: {
    
      title: "The Chilean Agro-Export Challenge",
      lead:
        "Chile is a global leader in fresh fruit exports, yet long-distance logistics still limit access to the most profitable markets.",
      bullets: [
        { label: "Fresh fruit export rank", value: "Top 5 worldwide" },
        { label: "Industry value", value: "USD 7B+" },
        { label: "Share of GDP", value: "1.5%" },
      ],
      paragraphs: [
        "Our fruit stands out globally for its quality, flavor, and food safety. However, Chile’s geographical location creates a major challenge: the most profitable markets are far away, while nearby markets are highly saturated by other exporters.",
        "Dehydration, decay, and over-ripening are the main issues affecting fruit during long-distance transport. Although exporters have spent more than 15 years improving processes, fungicide dosages, and packaging, there is still significant uncaptured value due to the product’s short shelf life.",
        "Fifty days to reach India and forty days to arrive at supermarkets in China are just two examples of barriers that have yet to be overcome for avocados and cherries, respectively.",
      ],
    },
    es: {
      
      title: "El Desafío de la Agroexportación Chilena",
      lead:
        "Chile es líder global en exportación de fruta fresca, pero la logística de larga distancia aún limita el acceso a los mercados más rentables.",
      bullets: [
        { label: "Ranking exportación", value: "Top 5 mundial" },
        { label: "Valor industria", value: "USD 7.000M+" },
        { label: "Participación PIB", value: "1,5%" },
      ],
      paragraphs: [
        "Nuestra fruta destaca a nivel global por su calidad, sabor y seguridad alimentaria. Sin embargo, la ubicación geográfica de Chile representa una desventaja: los mercados más rentables se encuentran a gran distancia, mientras que los mercados cercanos están saturados por otros exportadores.",
        "La deshidratación, la descomposición y la sobremaduración son los principales problemas que se producen durante el transporte de larga distancia. Si bien los exportadores han trabajado durante más de 15 años en mejorar procesos, dosis de fungicidas y envases, aún existe un valor significativo no capturado debido a la corta vida útil del producto.",
        "Cincuenta días para llegar a India y cuarenta días para alcanzar supermercados en China son solo dos ejemplos de barreras que aún no han sido superadas para las paltas y las cerezas, respectivamente.",
      ],
    },
  } as const;

  const t = content[language];

  // ✅ Observer para stats
  const { ref: statsRef, inView: statsInView } = useInView(0.4);

  return (
    <section
      id="idea"
      className="relative pt-4 pb-0 bg-[#F9F3E7] overflow-hidden text-[#244629]"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="md:col-span-5 md:sticky md:top-24">
            {/* Eyebrow */}
            

            {/* Title */}
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-[#244629]">
              {t.title}
            </h2>

            {/* Lead */}
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#244629]/80 max-w-xl">
              {t.lead}
            </p>

            {/* Stats (animadas) */}
            <div
              ref={statsRef}
              className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {t.bullets.map((b, i) => {
                const meta = getAnimatedMeta(b.value);

                // Para percent usamos duración un pelín más larga
                const duration = meta.type === "percent" ? 1400 : 1200;

                const animated = useCountUp(meta.end, statsInView, duration);

                // render según idioma
                const rendered =
                  language === "es" ? meta.render(animated) : meta.renderEn(animated);

                return (
                  <div
                    key={i}
                    className="
                      rounded-2xl px-4 py-4
                       backdrop-blur-sm
                      
                      transition-all duration-700 ease-out
                      hover:-translate-y-[2px] 
                    "
                    style={{
                      transform: statsInView ? "translateY(0)" : "translateY(10px)",
                      opacity: statsInView ? 1 : 0,
                      transitionDelay: `${i * 140}ms`,
                    }}
                  >
                    <div className="text-xs text-[#244629]/70">{b.label}</div>

                    <div className="mt-1 text-sm font-semibold text-[#244629] tabular-nums">
                      {rendered}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-xs text-[#244629]/60">
              * Source: ODEPA / Central Bank
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-7">
            <div className="rounded-3xl p-6 md:p-10">
              <div className="space-y-6 text-[15px] md:text-lg text-[#244629] leading-relaxed">
                {t.paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>

              {/* Divider */}
              <div className="my-10 h-px w-full bg-[#244629]/20" />

              {/* Highlight */}
              <p className="text-sm md:text-base text-[#244629] leading-relaxed font-medium">
                {language === "es"
                  ? "El problema no es la calidad: es el tiempo. La vida útil define qué mercados son alcanzables."
                  : "The issue isn’t quality: it’s time. Shelf life determines which markets are reachable."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
