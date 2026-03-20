import { MessageCircle, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-dental.jpg";

const WHATSAPP_URL = "https://wa.me/5295716525648?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center gradient-pink overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
            Cédula Profesional 3493-02-062
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
            Sonríe con <span className="text-primary">confianza</span>, nosotros cuidamos de ti
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Atención dental profesional, estética y personalizada en Oaxaca. Dra. Betsabea Pascual Domínguez, cirujana dentista.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              <MessageCircle size={18} />
              Agendar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Ver Servicios
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
            <img
              src={heroImg}
              alt="Clínica dental moderna Be-Dental en Oaxaca"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border hidden sm:block">
            <p className="text-3xl font-display font-bold text-primary">+500</p>
            <p className="text-xs text-muted-foreground font-medium">Pacientes satisfechos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
