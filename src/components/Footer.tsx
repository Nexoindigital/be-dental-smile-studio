import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark-surface text-dark-surface-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold text-primary">Be</span>
            <span className="text-xl font-display font-bold">-Dental</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Clínica dental profesional en Oaxaca. Cuidamos tu sonrisa con los más altos estándares de calidad.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Enlaces</h4>
          <nav className="space-y-2 text-sm opacity-70">
            <a href="#inicio" className="block hover:text-primary transition-colors">Inicio</a>
            <a href="#servicios" className="block hover:text-primary transition-colors">Servicios</a>
            <a href="#nosotros" className="block hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="block hover:text-primary transition-colors">Contacto</a>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Contacto</h4>
          <div className="space-y-2 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <a href="tel:+5295716525648" className="hover:text-primary transition-colors">957 165 25648</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-primary mt-0.5" />
              <span>Calzada de la República 104A, Oaxaca</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Horarios</h4>
          <div className="space-y-2 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary" />
              <span>Lun - Vie: 9:00 – 19:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary" />
              <span>Sábado: 9:00 – 14:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border/10 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Be-Dental. Todos los derechos reservados. Cédula Profesional 3493-02-062.
      </div>
    </div>
  </footer>
);

export default Footer;
