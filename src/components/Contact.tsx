import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'emprendedor',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado. En una implementación real, esto se conectaría a un backend o Supabase.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const team = [
    { name: 'María González', role: 'Directora Ejecutiva', email: 'mgonzalez@bioroute.cl' },
    { name: 'Carlos Pérez', role: 'Coordinador de Financiamiento', email: 'cperez@bioroute.cl' },
    { name: 'Ana Silva', role: 'Gestora de Ecosistema', email: 'asilva@bioroute.cl' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#0A2472] mb-6">
            Contáctanos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00B894] to-[#0A2472] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a impulsar tu proyecto biotecnológico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[#0A2472] mb-8">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Tipo de consulta
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/20 transition-all"
                >
                  <option value="emprendedor">Emprendedor</option>
                  <option value="investigador">Investigador</option>
                  <option value="inversionista">Inversionista</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/20 transition-all"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#00B894] to-[#0A2472] text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                Enviar mensaje
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0A2472] mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00B894] to-[#0A2472] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-lg">Email</h4>
                  <p className="text-gray-600">contacto@bioroute.cl</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00B894] to-[#0A2472] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-lg">Teléfono</h4>
                  <p className="text-gray-600">+56 2 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00B894] to-[#0A2472] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-lg">Dirección</h4>
                  <p className="text-gray-600">
                    Moneda 921, Piso 7<br />
                    Santiago Centro, Chile
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
              <h4 className="text-2xl font-bold text-[#0A2472] mb-6">
                Nuestro Equipo
              </h4>
              <div className="space-y-5">
                {team.map((member) => (
                  <div key={member.email} className="border-l-4 border-[#00B894] pl-5 pb-4">
                    <h5 className="font-bold text-gray-800 mb-1">{member.name}</h5>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    <a href={`mailto:${member.email}`} className="text-sm font-semibold text-[#00B894] hover:text-[#0A2472] transition-colors">
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
