"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

 
import cereza from "../imagen/imagenCompleta.png";

import EfficacyTable from "./EfficacyTable";

 
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

 
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function ProductPresentation() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Ethylock (Avocado) | CherryStop (Cherry)",
      description:
        "It is a liquid solution applied directly into the wash tanks at processing plants. It creates an extra protective layer from which the peptides diffuse.",
    },
    es: {
      title: "Ethylock (Palta) | CherryStop (Cereza)",
      description:
        "Es una solución líquida que se aplica directamente en los tanques de lavado de las plantas de proceso. Crea una capa protectora extra desde la cual los péptidos se difunden.",
    },
  } as const;

  const t = content[language];

  const toSrc = (img: unknown) =>
    (img as { src: string })?.src ?? (img as string);

  const sectionRef = useRef<HTMLElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const stickyWrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const bottomPanelRef = useRef<HTMLDivElement | null>(null);

  
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const scene = sceneRef.current;
      const stickyWrap = stickyWrapRef.current;
      const img = imgRef.current;
      const panel = bottomPanelRef.current;
      if (!scene || !stickyWrap || !img || !panel) return;

      const vh = window.innerHeight || 1;

     
      const sr = stickyWrap.getBoundingClientRect();

      
      const pImg = clamp((vh - sr.top) / (vh + sr.height), 0, 1);

       
      const rel = (pImg - 0.5) * 2;

       
      const IMG_PARALLAX = 140; // <-- sube/baja si quieres más/menos (recomendado 120-180)
      const yImg = rel * (IMG_PARALLAX * 0.55); // 55% del recorrido (plano lento)
      const tilt = rel * -2.6; // más tilt (sutil pero visible)
      const scale = 1.1;

      img.style.transform = `translate3d(0, ${yImg}px, 0) scale(${scale}) rotateX(${tilt}deg)`;

      
      const pr = panel.getBoundingClientRect();

      
      const pPanel = clamp((vh - pr.top) / (vh * 0.9), 0, 1);
      const e = easeOutCubic(pPanel);

     
      const PANEL_LIFT = 140;  
      const yPanel = (1 - e) * PANEL_LIFT;

      panel.style.transform = `translate3d(0, ${yPanel}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="info"
      className="relative bg-[#F9F3E7] text-[#244629] overflow-hidden"
    >
       
      <div className="relative z-20 -mb-16 md:-mb-24">
        <div className="bg-[#F9F3E7] rounded-b-xl pt-20 pb-10">
          <div className="max-w-6xl mx-auto px-6 ">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              {t.title}
            </h2>

            <p className="mt-6 max-w-3xl  text-base md:text-lg leading-relaxed text-[#244629]/80">
              {t.description}
            </p>
          </div>
        </div>
      </div>

      
      <div ref={sceneRef} className="relative h-[860px] md:h-[1040px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={stickyWrapRef}
            className="sticky top-0 h-[660px] md:h-[820px] overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-b-xl overflow-hidden"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
            
              <img
                ref={imgRef}
                src={toSrc(cereza)}
                alt={language === "es" ? "Palta y Cereza" : "Avocado and Cherry"}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  willChange: "transform",
                  transform: "translate3d(0, 0px, 0) scale(1.1)",
                  transformOrigin: "center",
                }}
                loading="lazy"
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[#244629]/[0.02]" />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-b from-transparent to-[#F9F3E7]" />
      </div>

      
      <div className="relative z-20 -mt-52 md:-mt-64">
        <div
          ref={bottomPanelRef}
          className="
            will-change-transform
            bg-[#F9F3E7]
            rounded-t-3xl
            shadow-[0_-18px_45px_rgba(0,0,0,0.14)]
            border-t border-[#244629]/10
            pt-14 pb-24
          "
          style={{ transform: "translate3d(0, 0px, 0)" }}
        >
          <div className="flex justify-center px-6">
            <div className="w-full max-w-5xl">
              <EfficacyTable />
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}
