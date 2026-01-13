
import { useLanguage } from "../context/LanguageContext";

export default function Idea() {
  const { language } = useLanguage();

  const content = {
    en: {
      eyebrow: "Context",
      title: "The Chilean Agro-Export Challenge",
      lead:
        "Chile is a global leader in fresh fruit exports, yet long-distance logistics still limit access to the most profitable markets.",
      bullets: [
        { label: "Fresh fruit export rank", value: "Top 5 worldwide" },
        { label: "Industry value", value: "USD 7B+" },
        { label: "Share of GDP", value: "1.5%" },
      ],
      paragraphs: [
        `Our fruit stands out globally for its quality, flavor, and food safety. However, Chile’s geographical location creates a major challenge: the most profitable markets are far away, while nearby markets are highly saturated by other exporters.`,
        `Dehydration, decay, and over-ripening are the main issues affecting fruit during long-distance transport. Although exporters have spent more than 15 years improving processes, fungicide dosages, and packaging, there is still significant uncaptured value due to the product’s short shelf life.`,
        `Fifty days to reach India and forty days to arrive at supermarkets in China are just two examples of barriers that have yet to be overcome for avocados and cherries, respectively.`,
      ],
    },
    es: {
      eyebrow: "Contexto",
      title: "El Desafío de la Agroexportación Chilena",
      lead:
        "Chile es líder global en exportación de fruta fresca, pero la logística de larga distancia aún limita el acceso a los mercados más rentables.",
      bullets: [
        { label: "Ranking exportación", value: "Top 5 mundial" },
        { label: "Valor industria", value: "USD 7.000M+" },
        { label: "Participación PIB", value: "1,5%" },
      ],
      paragraphs: [
        `Nuestra fruta destaca a nivel global por su calidad, sabor y seguridad alimentaria. Sin embargo, la ubicación geográfica de Chile representa una desventaja: los mercados más rentables se encuentran a gran distancia, mientras que los mercados cercanos están saturados por otros exportadores.`,
        `La deshidratación, la descomposición y la sobremaduración son los principales problemas que se producen durante el transporte de larga distancia. Si bien los exportadores han trabajado durante más de 15 años en mejorar procesos, dosis de fungicidas y envases, aún existe un valor significativo no capturado debido a la corta vida útil del producto.`,
        `Cincuenta días para llegar a India y cuarenta días para alcanzar supermercados en China son solo dos ejemplos de barreras que aún no han sido superadas para las paltas y las cerezas, respectivamente.`,
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section
      id="idea"
      className="relative py-24 md:py-32 bg-[#FDFDFB] overflow-hidden"
    >
      {/* Subtle background accents */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_55%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 items-start">
          {/* Left column: Title + lead + stats */}
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold tracking-wide text-black backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              {t.eyebrow}
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-[#1F3D2B]">
              {t.title}
            </h2>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-zinc-700 max-w-xl">
              {t.lead}
            </p>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {t.bullets.map((b, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-black/10 bg-white/70 px-4 py-4 backdrop-blur"
                >
                  <div className="text-xs text-zinc-500">{b.label}</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-900">
                    {b.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-zinc-500">
              * Source: ODEPA / Central Bank
            </div>
          </div>

          {/* Right column: Content */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.06)] backdrop-blur">
              <div className="space-y-6 text-[15px] md:text-lg text-zinc-700 leading-relaxed">
                {t.paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>

              {/* Divider + highlight */}
              <div className="my-10 h-px w-full bg-black/10" />

              <div className="rounded-2xl bg-emerald-50 border border-emerald-200/60 p-5 md:p-6">
                <p className="text-sm md:text-base text-emerald-900 leading-relaxed">
                  {language === "es"
                    ? "El problema no es la calidad: es el tiempo. La vida útil define qué mercados son alcanzables."
                    : "The issue isn’t quality: it’s time. Shelf life determines which markets are reachable."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
