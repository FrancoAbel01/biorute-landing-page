import { GraduationCap, Building, Beaker, Users, MapPin, Calendar as CalendarIcon } from 'lucide-react';

export default function Ecosystem() {
  const actors = [
    {
      icon: GraduationCap,
      title: 'Universidades',
      count: '25+',
      description: 'Centros de investigación y formación',
      color: 'bg-blue-500',
    },
    {
      icon: Beaker,
      title: 'Centros I+D',
      count: '15+',
      description: 'Institutos especializados',
      color: 'bg-purple-500',
    },
    {
      icon: Building,
      title: 'Empresas Biotec',
      count: '80+',
      description: 'Startups y empresas establecidas',
      color: 'bg-green-500',
    },
    {
      icon: Users,
      title: 'Proveedores',
      count: '50+',
      description: 'Servicios especializados',
      color: 'bg-orange-500',
    },
  ];

  const events = [
    {
      name: 'BioTech Summit 2026',
      date: '20-22 Marzo',
      location: 'Santiago',
      type: 'Conferencia',
    },
    {
      name: 'Workshop: Financiamiento Biotec',
      date: '5 Abril',
      location: 'Online',
      type: 'Workshop',
    },
    {
      name: 'Networking: BioAgro',
      date: '18 Abril',
      location: 'Valparaíso',
      type: 'Networking',
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#0A2472] mb-6">
            Ecosistema Biotecnológico
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B894] to-[#0A2472] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una red colaborativa de instituciones, empresas y expertos impulsando la innovación
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {actors.map((actor) => (
            <div
              key={actor.title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${actor.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <actor.icon className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-[#0A2472] mb-2">
                {actor.count}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {actor.title}
              </h3>
              <p className="text-sm text-gray-600">{actor.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0A2472] via-[#0d3394] to-[#00B894] rounded-2xl shadow-2xl p-10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Mapa del Ecosistema</h3>
              <p className="mb-8 text-white/90 leading-relaxed">
                Conecta con actores clave del ecosistema biotecnológico chileno: universidades, centros de investigación, empresas y proveedores especializados.
              </p>
              <div className="flex items-center mb-8 bg-white/10 rounded-lg p-4 backdrop-blur">
                <MapPin className="mr-3" size={24} />
                <span className="font-semibold">Presencia en 8 regiones del país</span>
              </div>
              <button className="w-full px-6 py-4 bg-white text-[#0A2472] font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                Explorar Mapa Interactivo
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A2472] to-[#00B894] p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Próximos Eventos
              </h3>
              <p className="text-white/80">Conexión y aprendizaje en el ecosistema</p>
            </div>

            <div className="p-8 space-y-4">
              {events.map((event) => (
                <div
                  key={event.name}
                  className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#00B894] transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-800 group-hover:text-[#0A2472] transition-colors">{event.name}</h4>
                    <span className="text-xs px-3 py-1 bg-[#00B894] text-white rounded-full font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon size={16} className="mr-2 text-[#00B894]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-[#00B894]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-8 pb-8 text-center">
              <button className="text-[#0A2472] font-bold hover:text-[#00B894] transition-colors inline-flex items-center">
                Ver todos los eventos
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
