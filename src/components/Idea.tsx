"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

/* ---------- helpers ---------- */
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
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
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(from + (end - from) * eased);

      setValue(next);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, start, duration]);

  return value;
}

function getAnimatedMeta(raw: string) {
  const v = raw.trim();

  if (v.toLowerCase().includes("top")) {
    const n = Number(v.replace(/[^\d.]/g, "")) || 0;
    return {
      end: n,
      render: (x: number) => `Top ${x} mundial`,
      renderEn: (x: number) => `Top ${x} worldwide`,
      type: "top" as const,
    };
  }

  if (v.toUpperCase().includes("USD")) {
    const n = Number(v.replace(/[^\d.]/g, "")) || 0;
    const hasB = v.toUpperCase().includes("B");
    const hasM = v.toUpperCase().includes("M");

    return {
      end: n,
      render: (x: number) =>
        hasB
          ? `USD ${x}B+`
          : hasM
            ? `USD ${x.toLocaleString("es-CL")}M+`
            : `USD ${x}+`,
      renderEn: (x: number) =>
        hasB
          ? `USD ${x}B+`
          : hasM
            ? `USD ${x.toLocaleString("en-US")}M+`
            : `USD ${x}+`,
      type: "usd" as const,
    };
  }

  if (v.includes("%")) {
    const n = Number(v.replace(",", ".").replace(/[^\d.]/g, "")) || 0;
    const end = Math.round(n * 10);
    return {
      end,
      render: (x: number) => `${(x / 10).toFixed(1).replace(".", ",")}%`,
      renderEn: (x: number) => `${(x / 10).toFixed(1)}%`,
      type: "percent" as const,
    };
  }

  const n = Number(v.replace(/[^\d.]/g, "")) || 0;
  return {
    end: n,
    render: (x: number) => `${x}+`,
    renderEn: (x: number) => `${x}+`,
    type: "plain" as const,
  };
}

/* ---------- component ---------- */
export default function Idea() {
  const { language } = useLanguage();

  const content = useMemo(
    () =>
      ({
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
            // "Fifty days to reach India and forty days to arrive at supermarkets in China are just two examples of barriers that have yet to be overcome for avocados and cherries, respectively.",
          ],
        },
        es: {
          title: "El Desafío de la Agro-exportación Chilena",
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
            // "Cincuenta días para llegar a India y cuarenta días para alcanzar supermercados en China son solo dos ejemplos de barreras que aún no han sido superadas para las paltas y las cerezas, respectivamente.",
          ],
        },
      }) as const,
    []
  );

  const t = content[language];

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [p, setP] = useState(0);

  // ✅ altura “final” dinámica (en svh) para que quepa TODO el contenido en móvil
  const [endH, setEndH] = useState(100);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const compute = () => {
      const vh = window.innerHeight || 1;
      const px = el.getBoundingClientRect().height;

      // margen extra para que nunca quede “justo” (stats + paddings + safe areas)
      const extraPx = 32;

      const neededSvh = ((px + extraPx) / vh) * 100;

      // mínimo 100svh como antes, pero si necesita más, lo aumentamos
      const nextEnd = Math.max(100, Math.ceil(neededSvh));
      setEndH(nextEnd);
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(el);

    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [language]);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        const start = vh * 0.9;
        const end = vh * 0.15;

        const raw = (start - rect.top) / (start - end);
        setP(clamp(raw, 0, 1));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 👉 mantenemos la “misma” animación (delta 30svh), pero ahora el final puede ser > 100
  const delta = 30;
  const baseTop = 30;

  const startH = Math.max(70, endH - delta); // antes 70, ahora se ajusta si endH crece
  const top = baseTop - baseTop * p; // 30svh -> 0
  const h = startH + (endH - startH) * p; // startH -> endH
  const w = 92 + 8 * p; // 92vw -> 100vw
  const radius = Math.round(28 * (1 - p)); // 28px -> 0
  const statsInView = p > 0.25;

  return (
    <section id="idea" className="relative z-10">
      {/* Trigger: lo hacemos proporcional al endH para que el scroll “alcance” */}
      <div
        ref={triggerRef}
        className="relative"
        style={{
          height: `${Math.max(170, endH + 70)}svh`,
        }}
      >
        <div
          className="sticky flex justify-center"
          style={{
            top: `${top}svh`,
            height: `${h}svh`,
          }}
        >
          <div
            style={{
              width: `${w}vw`,
              height: "100%",
              borderRadius: `${radius}px`,
              overflow: "hidden",
              background: "#F9F3E7",
              willChange: "width, height, border-radius",
            }}
          >
            <div className="h-full w-full text-[#244629]">
              {/* ✅ ESTE wrapper se mide para calcular endH */}
              <div ref={contentRef} className="max-w-6xl mx-auto px-6 py-10 md:py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 items-start">
                  {/* LEFT */}
                  <div className="md:col-span-5 md:sticky md:top-16">
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#244629]">
                      {t.title}
                    </h1>
                    <div className="my-10 h-px w-full bg-[#244629]/20 reopen" />

                    <p className="text-base md:text-lg leading-relaxed text-[#244629]/80 max-w-xl">
                      {t.lead}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="md:col-span-7">
                    <div className="space-y-6 text-[15px] md:text-lg text-[#244629] leading-relaxed">
                      {t.paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </div>

                    <p className="text-sm md:text-base text-[#244629] leading-relaxed font-medium mt-5">
                      {language === "es"
                        ? "El problema no es la calidad: es el tiempo. La vida útil define qué mercados son alcanzables."
                        : "The issue isn’t quality: it’s time. Shelf life determines which markets are reachable."}
                    </p>
                  </div>
                </div>

                {/* ✅ BULLETS GRANDES CENTRADAS */}
                <div className="mt-16 flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full text-center">
                    {t.bullets.map((b, i) => {
                      const meta = getAnimatedMeta(b.value);
                      const duration = meta.type === "percent" ? 1400 : 1200;
                      const animated = useCountUp(meta.end, statsInView, duration);

                      const rendered =
                        language === "es"
                          ? meta.render(animated)
                          : meta.renderEn(animated);

                      return (
                        <div
                          key={i}
                          className="rounded-3xl px-6 py-8 transition-all duration-700 ease-out"
                          style={{
                            transform: statsInView ? "translateY(0)" : "translateY(14px)",
                            opacity: statsInView ? 1 : 0,
                            transitionDelay: `${i * 160}ms`,
                          }}
                        >
                          <div className="text-sm uppercase tracking-wide text-[#244629]/70 mb-2">
                            {b.label}
                          </div>

                          <div className="text-4xl md:text-5xl font-extrabold text-[#244629] tabular-nums">
                            {rendered}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* fin bullets */}
              </div>
              {/* fin contentRef */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
