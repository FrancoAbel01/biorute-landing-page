"use client";

import { useEffect, useRef, useState } from "react";
import logo from "../imagen/logoBioRoute.png";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll hacia abajo → ocultar
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsNavbarHidden(true);
      }

      // Scroll hacia arriba → mostrar
      if (currentScrollY < lastScrollY.current) {
        setIsNavbarHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-transform duration-300 ease-out
        ${isNavbarHidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div
        className="
          mx-auto w-[90vw] max-w-7xl
          bg-white
          rounded-b-3xl
          shadow-[0_6px_24px_rgba(0,0,0,0.08)]
          border border-t-0 border-black/5
          px-8
        "
      >
        <div className="relative flex items-center h-16">
          {/* LOGO CENTRADO */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <img
              src={logo}
              alt="BioRoute Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* LANGUAGE TOGGLE */}
          <div
            className="
              ml-auto flex items-center
              rounded-full border border-black/10
              bg-[#F7F8F6]
              p-1
              text-sm font-medium
              text-zinc-700
              shadow-inner
            "
          >
            <button
              onClick={() => setLanguage("es")}
              className={`
                px-3 py-1 rounded-full
                transition-all duration-200
                ${
                  language === "es"
                    ? "bg-[#1F3D2B] text-white shadow"
                    : "hover:bg-black/5"
                }
              `}
              aria-label="Cambiar a español"
            >
              ES
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`
                px-3 py-1 rounded-full
                transition-all duration-200
                ${
                  language === "en"
                    ? "bg-[#1F3D2B] text-white shadow"
                    : "hover:bg-black/5"
                }
              `}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
