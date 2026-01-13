import { Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import logo from '../imagen/logoBioRoute.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programa: [
      { name: 'Qué es BioRoute', href: '#about' },
      { name: 'Pilares Estratégicos', href: '#pillars' },
      { name: 'Equipo', href: '#contact' },
    ],
    recursos: [
      { name: 'Financiamiento', href: '#financing' },
      { name: 'Ecosistema', href: '#ecosystem' },
      { name: 'Biblioteca', href: '#resources' },
    ],
    legal: [
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'CORFO', href: 'https://www.corfo.cl' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#2f4e37] text-white rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* LOGO + DESCRIPCIÓN + REDES */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              {/* Logo como imagen */}
              <img src={logo} alt="BioRoute Logo" className="h-32 w-auto bg-white rounded-lg" />
            </div>
            <p className="text-white text-sm mb-6 font-medium">
              Impulsando la biotecnología chilena hacia el mundo
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all text-white"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* ENLACES - PROGRAMA */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Programa</h4>
            <ul className="space-y-3">
              {footerLinks.programa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white underline hover:text-[#00B894] transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ENLACES - RECURSOS */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white underline hover:text-[#00B894] transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ENLACES - LEGAL */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white underline hover:text-[#00B894] transition-colors text-sm font-medium"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm font-medium">
            © {currentYear} BioRoute Chile - CORFO. Todos los derechos reservados.
          </p>
          <p className="text-white text-sm font-medium">
            Desarrollado para impulsar la biotecnología nacional
          </p>
        </div>
      </div>
    </footer>
  );
}
