import logo from "../imagen/logoBioRoute.png";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      tagline: "Bringing Chilean biotechnology to the world.",
      contactLabel: "Contact:",
      contactEmail: "contacto@bioroutebt.com",
      programTitle: "Program",
      links: [
        { name: "What is BioRoute", href: "#about" },
      ],
      rights: `© ${currentYear} BioRoute Chile. All rights reserved.`,
      builtBy: "Built by",
      developerName: "CodeXpertDS.com",
      developerHref: "https://codeXpertDS.com",
    },
    es: {
      tagline: "Impulsando la biotecnología chilena hacia el mundo.",
      contactLabel: "Contacto:",
      contactEmail: "contacto@bioroutebt.com",
      programTitle: "Programa",
      links: [
        { name: "Qué es BioRoute", href: "#about" },
        { name: "Pilares Estratégicos", href: "#pillars" },
      ],
      rights: `© ${currentYear} BioRoute Chile. Todos los derechos reservados.`,
      builtBy: "Desarrollado por",
      developerName: "CodeXpertDS.com",
      developerHref: "https://codeXpertDS.com",
    },
  } as const;

  const t = content[language];

  return (
    <footer className="bg-[#2f4e37] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="min-w-[260px]">
            <div className="flex items-center gap-4">
              <img
                src={logo as unknown as string}
                alt="BioRoute Logo"
                className="h-16 w-auto rounded-lg bg-white/95 p-2"
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-sm text-white/90 font-medium max-w-sm leading-relaxed">
              {t.tagline}
            </p>

            {/* CONTACTO */}
            <p className="mt-3 text-sm text-white/90 font-medium">
              {t.contactLabel}{" "}
              <a
                href={`mailto:${t.contactEmail}`}
                className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
              >
                {t.contactEmail}
              </a>
            </p>
          </div>

          <div className="w-full md:w-auto">
            <h4 className="font-semibold text-base mb-4 text-white">
              {t.programTitle}
            </h4>
            <ul className="space-y-3">
              {t.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/25 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-white/85 font-medium">{t.rights}</p>

          <p className="text-sm text-white/85 font-medium">
            {t.builtBy}{" "}
            <a
              href={t.developerHref}
              target="_blank"
              rel="noreferrer"
              className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              {t.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
