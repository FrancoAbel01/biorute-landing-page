"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

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

// Datos (puedes ampliar filas sin tocar estilos)
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

/* =========================
   ICONOS (serios: verde/rojo opacos)
========================= */
function IconCheck({ label }: { label: string }) {
  return (
    <span
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-full
        bg-emerald-900/15 text-emerald-900 ring-1 ring-emerald-900/25
        shadow-[0_6px_18px_rgba(0,0,0,0.10)]
      "
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

function IconX({ label }: { label: string }) {
  return (
    <span
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-full
        bg-rose-950/15 text-rose-950 ring-1 ring-rose-950/25
        shadow-[0_6px_18px_rgba(0,0,0,0.10)]
      "
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
      </svg>
    </span>
  );
}

/* =========================
   COMPONENTE
========================= */
export default function EfficacyTablePro() {
  const { language } = useLanguage();

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

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-4 md:mb-5">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-1 text-sm md:text-base text-slate-600">{subtitle}</p>
      </div>

      {/* Card */}
      <div
        className="
          relative overflow-hidden rounded-3xl
          border border-slate-200/70
          bg-white/70 backdrop-blur
          shadow-[0_18px_55px_rgba(2,6,23,0.14)]
        "
      >
        {/* top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 opacity-80" />

        {/* Scroll container */}
        <div className="overflow-x-auto">
          <table className="min-w-[820px] w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/80">
                {/* Sticky first column (se ve muy pro en mobile) */}
                <th
                  className="
                    sticky left-0 z-20
                    text-left px-5 py-4 text-sm font-semibold text-slate-900
                    border-b border-slate-200/70
                    bg-slate-50/95 backdrop-blur
                  "
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
                      `}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className={isHero ? "text-emerald-950" : "text-indigo-950/90"}>
                          {c.label[language]}
                        </span>

                        
                        {isHero && (
                          <span
                            className="
                                   hidden md:inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium
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
                  {/* Sticky first column */}
                  <td
                    className="
                      sticky left-0 z-10
                      px-5 py-4 text-sm md:text-[15px] text-slate-900
                      border-b border-slate-200/60
                      bg-inherit backdrop-blur
                      whitespace-nowrap
                    "
                  >
                    <span className="whitespace-normal">{r.label[language]}</span>
                  </td>

                  {columns.map((c) => {
                    const ok = r.values[c.key];
                    const isHero = c.key === "ethylock";
                    return (
                      <td
                        key={c.key}
                        className={`
                          px-5 py-4 text-center
                          border-b border-slate-200/60
                          ${isHero ? "bg-emerald-950/5" : ""}
                        `}
                      >
                        {ok ? <IconCheck label={yesLabel} /> : <IconX label={noLabel} />}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / legend */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-5 py-4 bg-slate-50/70 border-t border-slate-200/70">
          <div className="text-xs text-slate-600">
            {language === "es"
              ? "✓ Cumple el atributo · ✕ No cumple el atributo"
              : "✓ Meets attribute · ✕ Does not meet attribute"}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-950/70" />
              {language === "es" ? "Énfasis: ETHYLOCK" : "Highlight: ETHYLOCK"}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-950/60" />
              {language === "es" ? "Otros tratamientos" : "Other treatments"}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-950/70" />
              {language === "es" ? "No cumple" : "Does not meet"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
