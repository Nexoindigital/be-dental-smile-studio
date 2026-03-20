import { Sparkles, SmilePlus, BrainCircuit, Scissors, Syringe, Palette } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5295716525648?text=Hola%2C%20me%20gustar%C3%ADa%20información%20sobre%20";

const services = [
  { icon: Sparkles, title: "Limpieza Dental", desc: "Eliminación de sarro y placa bacteriana para mantener encías saludables y prevenir enfermedades." },
  { icon: SmilePlus, title: "Blanqueamiento Dental", desc: "Devolvemos la luminosidad a tu sonrisa con técnicas profesionales seguras y efectivas." },
  { icon: BrainCircuit, title: "Ortodoncia", desc: "Corrección de la posición dental con brackets y alineadores para una sonrisa perfecta." },
  { icon: Syringe, title: "Endodoncia", desc: "Tratamiento de conductos para salvar dientes dañados y eliminar dolor e infecciones." },
  { icon: Scissors, title: "Extracciones", desc: "Procedimientos seguros y sin dolor, con seguimiento post-operatorio personalizado." },
  { icon: Palette, title: "Diseño de Sonrisa", desc: "Transformamos tu sonrisa con un enfoque estético integral y resultados naturales." },
];

const Services = () => (
  <section id="servicios" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Lo que hacemos</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
          Nuestros Servicios Dentales
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
            <a
              href={`${WHATSAPP_URL}${encodeURIComponent(s.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Consultar por WhatsApp →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
