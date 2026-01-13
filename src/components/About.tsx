import { useLanguage } from '../context/LanguageContext';

// 👉 cambia estas rutas por tus imágenes reales
import aboutEn from '../imagen/english_table.jpeg';
import aboutEs from '../imagen/español_tabla.jpeg';

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Solution',
      paragraphs: [
        `Our solution uses anti-ripening peptides that provide antioxidant, anti-ethylene, and anti-dehydration protection. This technology maintains the quality and nutritional integrity of the fruit for extended periods, ensuring greener pedicels, firmer avocados, and redder cherries.`,
        `As a result, exporters can access destinations that are currently considered unreachable (e.g., the avocado market), securing a comparative advantage that increases profit margins.`,
      ],
      image: {
        src: aboutEn,
        alt: 'Anti-ripening peptide technology – English',
      },
    },
    es: {
      title: 'Nuestra Solución',
      paragraphs: [
        `Nuestra solución utiliza péptidos antimaduración que proporcionan protección antioxidante, anti-etileno y antideshidratante. Esta tecnología mantiene la calidad e integridad nutricional de la fruta por períodos prolongados, asegurando pedúnculos más verdes, paltas más firmes y cerezas más rojas.`,
        `En consecuencia, los exportadores pueden acceder a destinos que actualmente se consideran inalcanzables (ej.: el mercado de la palta), asegurando una ventaja comparativa que incrementa los márgenes de utilidad.`,
      ],
      image: {
        src: aboutEs,
        alt: 'Tecnología de péptidos antimaduración – Español',
      },
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl text-center md:text-5xl font-bold text-[#1F3D2B] mb-8">
          {t.title}
        </h2>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {t.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* IMAGEN FINAL */}
        <div className="mt-16 flex justify-center">
          <img
            src={t.image.src}
            alt={t.image.alt}
            className="w-full max-w-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
