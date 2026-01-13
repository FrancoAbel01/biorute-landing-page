import { DollarSign, Rocket, Building2, Calendar } from 'lucide-react';

export default function Financing() {
  const instruments = [
    {
      name: 'Startup Chile',
      description: 'Capital semilla para emprendimientos en etapa temprana',
      amount: 'Hasta $50M CLP',
      duration: '6-12 meses',
      ideal: 'Startups biotec validando producto',
      icon: Rocket,
    },
    {
      name: 'I+D Aplicada',
      description: 'Financiamiento para investigación aplicada y desarrollo tecnológico',
      amount: 'Hasta $200M CLP',
      duration: '24-36 meses',
      ideal: 'Proyectos con validación técnica',
      icon: Building2,
    },
    {
      name: 'Consorcios Tecnológicos',
      description: 'Fondos para proyectos colaborativos público-privados',
      amount: 'Hasta $1.000M CLP',
      duration: '36-48 meses',
      ideal: 'Alianzas estratégicas del sector',
      icon: Building2,
    },
  ];

  const upcomingCalls = [
    { name: 'Convocatoria Startup Chile', date: '15 Feb 2026', status: 'open' },
    { name: 'Fondo I+D Biomedicina', date: '30 Mar 2026', status: 'open' },
    { name: 'Consorcios Acuícola', date: '15 May 2026', status: 'soon' },
  ];

  return (
    <section id="financing" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#0A2472] mb-6">
            Financiamiento y Concursos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B894] to-[#0A2472] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Múltiples instrumentos diseñados para cada etapa de tu proyecto biotecnológico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {instruments.map((instrument) => (
            <div
              key={instrument.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#00B894]/10 to-[#0A2472]/10 p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00B894] to-[#0A2472] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <instrument.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2472]">
                    {instrument.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{instrument.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <DollarSign size={18} className="text-[#00B894] mr-3" />
                    <span className="text-sm font-semibold text-gray-800">{instrument.amount}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="text-[#00B894] mr-3" />
                    <span className="text-sm text-gray-600">{instrument.duration}</span>
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-[#0A2472]">Ideal para:</span> {instrument.ideal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#0A2472] to-[#00B894] p-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Convocatorias Próximas
            </h3>
            <p className="text-white/80">Acceso a instrumentos de financiamiento disponibles</p>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              {upcomingCalls.map((call) => (
                <div
                  key={call.name}
                  className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:border-[#00B894] transition-all group"
                >
                  <div className="flex items-center">
                    <Calendar className="text-[#00B894] mr-4 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">{call.name}</h4>
                      <p className="text-sm text-gray-500">{call.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      call.status === 'open'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {call.status === 'open' ? 'Abierta' : 'Próximamente'}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00B894] to-[#0A2472] text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                Solicitar asesoría para postular
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
