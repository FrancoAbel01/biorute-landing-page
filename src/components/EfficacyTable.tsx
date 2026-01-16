"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

type ColKey = "ethylock" | "waxes" | "fungicides" | "mcp";

type Row = {
  id: string;
  label: { es: string; en: string };
  values: Record<ColKey, boolean>;
};

const columns: { key: ColKey; label: { es: string; en: string } }[] = [
  { key: "ethylock", label: { es: "ETHYLOCK", en: "ETHYLOCK" } },
  { key: "waxes", label: { es: "Ceras convencionales", en: "Conventional waxes" } },
  { key: "fungicides", label: { es: "Fungicidas", en: "Fungicides" } },
  { key: "mcp", label: { es: "1-MCP", en: "1-MCP" } },
];

// ✅ Datos extraídos de tu imagen
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
    label: {
      es: "Reduce respiración y deshidratación",
      en: "Reduces respiration and dehydration",
    },
    values: { ethylock: true, waxes: true, fungicides: false, mcp: true },
  },
  {
    id: "organoleptic",
    label: {
      es: "Preserva características organolépticas",
      en: "Preserves organoleptic characteristics",
    },
    values: { ethylock: true, waxes: false, fungicides: false, mcp: true },
  },
];

function IconCheck() {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700"
      aria-label="Sí"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

function IconX() {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/15 text-rose-700"
      aria-label="No"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
      </svg>
    </span>
  );
}

export default function EfficacyTable() {
  const { language } = useLanguage();

  const title =
    language === "es"
      ? "Comparación de eficacia: ETHYLOCK vs otros tratamientos postcosecha"
      : "Efficacy comparison: ETHYLOCK vs other postharvest products";

  const leftHeader = language === "es" ? "Atributo / Calidad" : "Product / Quality attribute";

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#244629]">
          {title}
        </h3>
        <p className="mt-1 text-sm md:text-base text-[#244629]/70">
          {language === "es"
            ? "Resumen visual basado en los atributos mostrados en la tabla original."
            : "Visual summary based on the attributes shown in the original table."}
        </p>
      </div>

      <div
        className="
          rounded-3xl border border-[#244629]/15 bg-white/40
          shadow-[0_16px_48px_rgba(0,0,0,0.10)]
          overflow-hidden
        "
      >
        {/* scroll horizontal en móvil */}
        <div className="overflow-x-auto">
          <table className="min-w-[780px] w-full border-collapse">
            <thead>
              <tr className="bg-[#244629]/5">
                <th
                  className="
                    text-left px-5 py-4 text-sm font-semibold text-[#244629]
                    border-b border-[#244629]/15
                  "
                >
                  {leftHeader}
                </th>

                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={`
                      px-5 py-4 text-sm font-semibold text-[#244629]
                      border-b border-[#244629]/15
                      ${c.key === "ethylock" ? "bg-emerald-700/10" : ""}
                    `}
                  >
                    <span
                      className={`
                        inline-flex items-center gap-2
                        ${c.key === "ethylock" ? "text-emerald-900" : "text-[#244629]"}
                      `}
                    >
                      {c.label[language]}
                      {/* {c.key === "ethylock" && (
                        <span className="text-[11px] font-bold px-2 py-1 rounded-full bg-emerald-700/15 text-emerald-900">
                          {language === "es" ? "Destacado" : "Highlighted"}
                        </span>
                      )} */}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.id}
                  className={`
                    ${idx % 2 === 0 ? "bg-white/50" : "bg-white/20"}
                    hover:bg-[#244629]/5 transition-colors
                  `}
                >
                  <td className="px-5 py-4 text-sm md:text-[15px] text-[#244629] border-b border-[#244629]/10">
                    {r.label[language]}
                  </td>

                  {columns.map((c) => {
                    const ok = r.values[c.key];
                    return (
                      <td
                        key={c.key}
                        className={`
                          px-5 py-4 text-center border-b border-[#244629]/10
                          ${c.key === "ethylock" ? "bg-emerald-700/5" : ""}
                        `}
                      >
                        {ok ? <IconCheck /> : <IconX />}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* footer mini */}
        <div className="px-5 py-4 bg-[#244629]/5 text-xs text-[#244629]/70">
          {language === "es"
            ? "✓ = Cumple el atributo · ✕ = No cumple el atributo"
            : "✓ = Meets attribute · ✕ = Does not meet attribute"}
        </div>
      </div>
    </div>
  );
}
