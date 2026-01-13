import { BookOpen, FileText, Users, Mail, Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: FileText,
      title: 'Guías y Formatos',
      items: [
        'Guía para postular a financiamiento',
        'Template de pitch deck biotec',
        'Checklist de propiedad intelectual',
        'Formatos de reporte técnico',
      ],
    },
    {
      icon: BookOpen,
      title: 'Estudios y Reportes',
      items: [
        'Panorama Biotec Chile 2025',
        'Oportunidades en BioMedicina',
        'Análisis mercado BioAgro',
        'Tendencias globales biotecnología',
      ],
    },
    {
      icon: Users,
      title: 'Banco de Expertos',
      items: [
        'Red de mentores especializados',
        'Investigadores disponibles',
        'Asesores regulatorios',
        'Expertos en comercialización',
      ],
    },
  ];

  const latestNews = [
    {
      date: '15 Ene 2026',
      title: 'Startup chilena de biodiagnóstico capta $2M en ronda seed',
      category: 'Inversión',
    },
    {
      date: '10 Ene 2026',
      title: 'Nuevo protocolo de validación para vacunas acuícolas',
      category: 'Investigación',
    },
    {
      date: '5 Ene 2026',
      title: 'Chile firmó acuerdo de transferencia tecnológica con Alemania',
      category: 'Colaboración',
    },
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#0A2472] mb-6">
            Recursos y Contenidos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B894] to-[#0A2472] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para impulsar tu proyecto biotecnológico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00B894] to-[#0A2472] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2472]">
                  {resource.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {resource.items.map((item) => (
                  <li key={item} className="flex items-start group/item">
                    <Download size={18} className="text-[#00B894] mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 text-sm hover:text-[#0A2472] cursor-pointer font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A2472] to-[#00B894] p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Últimas Noticias
              </h3>
              <p className="text-white/80">Novedades del ecosistema biotecnológico</p>
            </div>

            <div className="p-8 space-y-5">
              {latestNews.map((news) => (
                <div
                  key={news.title}
                  className="border-l-4 border-[#00B894] pl-5 py-3 hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500 mr-3">{news.date}</span>
                    <span className="text-xs px-3 py-1 bg-[#0A2472] text-white rounded-full font-semibold">
                      {news.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-[#0A2472] transition-colors">{news.title}</h4>
                </div>
              ))}
            </div>

            <div className="px-8 pb-8 text-center">
              <button className="text-[#0A2472] font-bold hover:text-[#00B894] transition-colors inline-flex items-center">
                Ver todas las noticias
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00B894] via-[#00a384] to-[#009474] rounded-2xl shadow-lg p-10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <Mail size={56} className="mb-6" />
              <h3 className="text-3xl font-bold mb-4">Newsletter</h3>
              <p className="mb-8 text-white/90 leading-relaxed">
                Recibe las últimas noticias, convocatorias y oportunidades del ecosistema biotecnológico.
              </p>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-lg text-gray-800 mb-3 font-medium focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full px-4 py-3 bg-white text-[#00B894] font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
