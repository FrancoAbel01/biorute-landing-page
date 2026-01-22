"use client";

import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight, Smartphone, Monitor } from "lucide-react";

type ColKey = "ethylock" | "waxes" | "fungicides" | "mcp";

type Row = {
  id: string;
  label: { es: string; en: string };
  values: Record<ColKey, boolean>;
};

const columns: {
  key: ColKey;
  label: { es: string; en: string };
  tone: "green" | "blue";
}[] = [
  { key: "ethylock", label: { es: "ETHYLOCK", en: "ETHYLOCK" }, tone: "green" },
  { key: "waxes", label: { es: "Ceras convencionales", en: "Conventional waxes" }, tone: "blue" },
  { key: "fungicides", label: { es: "Fungicidas", en: "Fungicides" }, tone: "blue" },
  { key: "mcp", label: { es: "1-MCP", en: "1-MCP" }, tone: "blue" },
];

 
const rows: Row[] = [
  {
    id: "ethylene",
    label: { es: "Previene la síntesis de etileno", en: "Prevents ethylene synthesis" },
    values: { ethylock: true, waxes: false, fungicides: false, mcp: true },
  },
  {
    id: "antimicrobial",
    label: { es: "Efecto antimicrobiano", en: "Antimicrobial effect" },
    values: { ethylock: true, waxes: false, fungicides: true, mcp: false },
  },
  {
    id: "respiration",
    label: { es: "Reduce respiración y deshidratación", en: "Reduces respiration and dehydration" },
    values: { ethylock: true, waxes: true, fungicides: false, mcp: true },
  },
  {
    id: "organoleptic",
    label: { es: "Preserva características organolépticas", en: "Preserves organoleptic characteristics" },
    values: { ethylock: true, waxes: false, fungicides: false, mcp: true },
  },
];

 
function IconCheck({ label }: { label: string }) {
  return (
    <span
      className="
        inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full
        bg-emerald-900/15 text-emerald-900 ring-1 ring-emerald-900/25
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
      "
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

function IconX({ label }: { label: string }) {
  return (
    <span
      className="
        inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full
        bg-rose-950/15 text-rose-950 ring-1 ring-rose-950/25
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
      "
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
      </svg>
    </span>
  );
}

 
export default function EfficacyTablePro() {
  const { language } = useLanguage();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const title =
    language === "es"
      ? "Comparación de eficacia: ETHYLOCK vs tratamientos postcosecha"
      : "Efficacy comparison: ETHYLOCK vs postharvest treatments";

  const subtitle =
    language === "es"
      ? "Tabla comparativa con un diseño más sobrio y profesional."
      : "A more serious, professional comparison table.";

  const leftHeader = language === "es" ? "Atributo / Calidad" : "Product / Quality attribute";

  const yesLabel = language === "es" ? "Sí" : "Yes";
  const noLabel = language === "es" ? "No" : "No";

 
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

   
  const updateScrollArrows = () => {
    if (tableContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tableContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

   
  const scrollLeft = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

   
  useEffect(() => {
    const tableContainer = tableContainerRef.current;
    if (tableContainer) {
      tableContainer.addEventListener('scroll', updateScrollArrows);
      window.addEventListener('resize', updateScrollArrows);
      
       
      updateScrollArrows();
      
      return () => {
        tableContainer.removeEventListener('scroll', updateScrollArrows);
        window.removeEventListener('resize', updateScrollArrows);
      };
    }
  }, []);

  return (
    <section className="w-full">
       
      <div className="mb-4 md:mb-5">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-1 text-sm md:text-base text-slate-600">{subtitle}</p>
      </div>

       
      {isMobile && (
        <div className="mb-3 flex items-center justify-between px-2 bg-slate-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <Smartphone className="h-4 w-4" />
            <span>{language === "es" ? "Desliza horizontalmente →" : "Swipe horizontally →"}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={scrollLeft}
              disabled={!showLeftArrow}
              className={`p-2 rounded-full transition-all ${showLeftArrow 
                ? 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm border border-slate-200' 
                : 'text-slate-400 cursor-not-allowed bg-slate-100'}`}
              aria-label={language === "es" ? "Desplazar izquierda" : "Scroll left"}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!showRightArrow}
              className={`p-2 rounded-full transition-all ${showRightArrow 
                ? 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm border border-slate-200' 
                : 'text-slate-400 cursor-not-allowed bg-slate-100'}`}
              aria-label={language === "es" ? "Desplazar derecha" : "Scroll right"}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      
      <div
        className="
          relative overflow-hidden rounded-3xl
          border border-slate-200/70
          bg-white/70 backdrop-blur
          shadow-[0_18px_55px_rgba(2,6,23,0.14)]
        "
      >
        
        <div className="h-1 w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 opacity-80" />

        
        <div 
          ref={tableContainerRef}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
          style={{ scrollBehavior: 'smooth' }}
        >
          <table className="min-w-[820px] md:min-w-full w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/80">
                
                <th
                  className={`
                    text-left px-5 py-4 text-sm font-semibold text-slate-900
                    border-b border-slate-200/70
                    bg-slate-50/95 backdrop-blur
                    ${!isMobile ? 'sticky left-0 z-30 shadow-[2px_0_8px_rgba(0,0,0,0.08)]' : ''}
                    min-w-[220px]
                  `}
                >
                  {leftHeader}
                </th>

                {columns.map((c) => {
                  const isHero = c.key === "ethylock";
                  return (
                    <th
                      key={c.key}
                      
                      className={`
                        px-5 py-4 text-sm font-semibold
                        border-b border-slate-200/70
                        ${isHero ? "bg-emerald-950/10" : "bg-indigo-950/5"}
                        ${!isMobile ? 'sticky top-0' : ''}
                        min-w-[140px]
                      `}
                    >
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className={isHero ? "text-emerald-950" : "text-indigo-950/90"}>
                          {c.label[language]}
                        </span>
                        {isHero && (
                          <span
                            className="
                              inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium
                              bg-emerald-950/10 text-emerald-950 ring-1 ring-emerald-950/20
                            "
                          >
                            {language === "es" ? "Recomendado" : "Recommended"}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.id}
                  className={`
                    ${idx % 2 === 0 ? "bg-white/70" : "bg-slate-50/40"}
                    hover:bg-slate-900/[0.03] transition-colors
                  `}
                >
                  
                  <td
                    className={`
                      px-5 py-4 text-sm md:text-[15px] text-slate-900
                      border-b border-slate-200/60
                      bg-inherit
                      ${!isMobile ? 'sticky left-0 z-20 backdrop-blur shadow-[2px_0_8px_rgba(0,0,0,0.05)]' : ''}
                      min-w-[220px]
                    `}
                  >
                    <span className="whitespace-normal block">{r.label[language]}</span>
                  </td>

                  {columns.map((c) => {
                    const ok = r.values[c.key];
                    const isHero = c.key === "ethylock";
                    return (
                      <td
                        key={c.key}
                        className={`
                          px-5 py-4 text-center border-b border-slate-200/60
                          ${isHero ? "bg-emerald-950/5" : ""}
                          min-w-[140px]
                        `}
                      >
                        <div className="flex justify-center">
                          {ok ? <IconCheck label={yesLabel} /> : <IconX label={noLabel} />}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        {isMobile && (
          <div className="px-5 py-3 border-t border-slate-200/60 bg-white/50">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                <div className={`h-1.5 w-1.5 rounded-full ${showLeftArrow ? 'bg-slate-600' : 'bg-slate-300'}`} />
                <div className={`h-2 w-2 rounded-full ${showLeftArrow ? 'bg-slate-700' : 'bg-slate-300'}`} />
                <div className={`h-2.5 w-2.5 rounded-full ${showLeftArrow ? 'bg-slate-800' : 'bg-slate-300'}`} />
              </div>
              <span className="text-xs text-slate-600 font-medium">
                {language === "es" ? "Desliza para ver más" : "Swipe to see more"}
              </span>
              <div className="flex items-center gap-1">
                <div className={`h-2.5 w-2.5 rounded-full ${showRightArrow ? 'bg-slate-800' : 'bg-slate-300'}`} />
                <div className={`h-2 w-2 rounded-full ${showRightArrow ? 'bg-slate-700' : 'bg-slate-300'}`} />
                <div className={`h-1.5 w-1.5 rounded-full ${showRightArrow ? 'bg-slate-600' : 'bg-slate-300'}`} />
              </div>
            </div>
          </div>
        )}

        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4 bg-slate-50/70 border-t border-slate-200/70">
          <div className="text-xs text-slate-600 font-medium">
            <span className="inline-flex items-center gap-1 mr-3">
              <IconCheck label={yesLabel} />
              <span>{language === "es" ? "Cumple" : "Meets"}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <IconX label={noLabel} />
              <span>{language === "es" ? "No cumple" : "Does not meet"}</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-950/70" />
              <span className="font-medium">{language === "es" ? "Énfasis: ETHYLOCK" : "Highlight: ETHYLOCK"}</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-950/60" />
              <span>{language === "es" ? "Otros tratamientos" : "Other treatments"}</span>
            </span>
          </div>
        </div>
      </div>
 
      {isMobile && (
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-2">
          <Smartphone className="h-3 w-3" />
          <span>{language === "es" ? "Modo móvil: Toda la tabla hace scroll horizontal" : "Mobile mode: Entire table scrolls horizontally"}</span>
        </div>
      )}
    </section>
  );
}