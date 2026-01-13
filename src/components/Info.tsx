import { useLanguage } from '../context/LanguageContext';

// Imágenes
import infoEn1 from '../imagen/english_cereza.jpeg';
import infoEn2 from '../imagen/english_aguacate.jpeg';
import infoEs1 from '../imagen/español_cereza.jpeg';
import infoEs2 from '../imagen/español_aguacate.jpeg';

export default function Info() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Ethylock (Avocado) | CherryStop (Cherry)',
      description:
        'It is a liquid solution applied directly into the wash tanks at processing plants. It creates an extra protective layer from which the peptides diffuse.',
      images: [
        { src: infoEn1, alt: 'Ethylock / CherryStop – Cherry (EN)' },
        { src: infoEn2, alt: 'Ethylock / CherryStop – Avocado (EN)' },
      ],
    },
    es: {
      title: 'Ethylock (Palta) | CherryStop (Cereza)',
      description:
        'Es una solución líquida que se aplica directamente en los tanques de lavado de las plantas de proceso. Crea una capa protectora extra desde la cual los péptidos se difunden.',
      images: [
        { src: infoEs1, alt: 'Ethylock / CherryStop – Cereza (ES)' },
        { src: infoEs2, alt: 'Ethylock / CherryStop – Palta (ES)' },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="info" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* TEXTO */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D2B] mb-6">
          {t.title}
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          {t.description}
        </p>

        {/* IMÁGENES DEBAJO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.images.map((img) => (
            <div
              key={img.alt}
              className="rounded-2xl overflow-hidden border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
