import { useEffect, useRef, useState } from 'react';
import logo from '../imagen/logoBioRoute.png';
import { useLanguage } from '../context/LanguageContext';

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-out
      ${isNavbarHidden ? '-translate-y-full' : 'translate-y-0'}
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
              className="h-16 w-auto"
            />
          </div>

          {/* BOTÓN CAMBIO IDIOMA */}
          <button
            onClick={toggleLanguage}
            className="
              ml-auto flex items-center justify-center
              min-w-[44px] h-10 px-3
              rounded-full bg-[#1F3D2B]
              text-white text-sm font-semibold
              hover:opacity-90 transition-opacity
            "
            aria-label="Change language"
          >
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
}
