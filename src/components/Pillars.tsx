import { Microscope, Sprout, Fish, Factory } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      icon: Microscope,
      title: 'BioMedicina',
      description: 'Desarrollo de terapias, diagnósticos y dispositivos médicos innovadores para mejorar la salud humana.',
      color: 'from-blue-500 to-blue-600',
      opportunities: 'Oncología, medicina regenerativa, diagnóstico molecular',
    },
    {
      icon: Sprout,
      title: 'BioAgro',
      description: 'Soluciones biotecnológicas para agricultura sostenible, biofertilizantes y mejoramiento genético.',
      color: 'from-green-500 to-green-600',
      opportunities: 'Agricultura de precisión, biocontrol, semillas mejoradas',
    },
    {
      icon: Fish,
      title: 'BioAcuícola',
      description: 'Innovación en acuicultura: sanidad, nutrición y sustentabilidad para la industria del salmón y otras especies.',
      color: 'from-cyan-500 to-cyan-600',
      opportunities: 'Vacunas, alimentos funcionales, genética acuícola',
    },
    {
      icon: Factory,
      title: 'BioIndustrial',
      description: 'Procesos biotecnológicos para producción sustentable de químicos, materiales y energía.',
      color: 'from-purple-500 to-purple-600',
      opportunities: 'Biocombustibles, bioplásticos, enzimas industriales',
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#0A2472] mb-6">
            Pilares Estratégicos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B894] to-[#0A2472] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuatro sectores clave donde Chile tiene ventajas competitivas para desarrollar biotecnología de clase mundial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${pillar.color} p-8 flex justify-center items-center h-40`}>
                <pillar.icon size={80} className="text-white group-hover:scale-125 transition-transform duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0A2472] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {pillar.description}
                </p>
                <div className="border-t-2 border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-[#00B894] mb-2 uppercase tracking-wide">
                    Oportunidades
                  </p>
                  <p className="text-sm text-gray-500">
                    {pillar.opportunities}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
