import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'The Chilean Agro-Export Challenge',
      paragraphs: [
        `Chile is the world’s 5th largest exporter of fresh fruit. This industry generates over USD 7 billion (Source: ODEPA) and represents 1.5% of the national GDP (Central Bank).`,
        `Our fruit stands out globally for its quality, flavor, and food safety. However, Chile’s geographical location creates a major challenge: the most profitable markets are far away, while nearby markets are highly saturated by other exporters.`,
        `Dehydration, decay, and over-ripening are the main issues affecting fruit during long-distance transport. Although exporters have spent more than 15 years improving processes, fungicide dosages, and packaging, there is still significant uncaptured value due to the product’s short shelf life.`,
        `Fifty days to reach India and forty days to arrive at supermarkets in China are just two examples of barriers that have yet to be overcome for avocados and cherries, respectively.`,
      ],
    },
    es: {
      title: 'El Desafío de la Agroexportación Chilena',
      paragraphs: [
        `Chile es el quinto mayor exportador mundial de fruta fresca. Esta industria genera más de USD 7.000 millones (Fuente: ODEPA) y representa el 1,5% del PIB nacional (Banco Central).`,
        `Nuestra fruta destaca a nivel global por su calidad, sabor y seguridad alimentaria. Sin embargo, la ubicación geográfica de Chile representa una desventaja: los mercados más rentables se encuentran a gran distancia, mientras que los mercados cercanos están saturados por otros exportadores.`,
        `La deshidratación, la descomposición y la sobremaduración son los principales problemas que se producen durante el transporte de larga distancia. Si bien los exportadores han trabajado durante más de 15 años en mejorar procesos, dosis de fungicidas y envases, aún existe un valor significativo no capturado debido a la corta vida útil del producto.`,
        `Cincuenta días para llegar a India y cuarenta días para alcanzar supermercados en China son solo dos ejemplos de barreras que aún no han sido superadas para las paltas y las cerezas, respectivamente.`,
      ],
    },
  };

  const t = content[language];

  return (
    <section id="home" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F3D2B] mb-8">
          {t.title}
        </h1>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
          {t.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
