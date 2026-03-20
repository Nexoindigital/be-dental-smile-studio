import { ShieldCheck, Star, Cpu, Heart } from "lucide-react";
import dentistImg from "@/assets/dentist-working.jpg";

const benefits = [
  { icon: ShieldCheck, title: "Atención Certificada", desc: "Cirujana dentista con cédula profesional y formación continua." },
  { icon: Star, title: "Excelente Reputación", desc: "Cientos de reseñas positivas y pacientes satisfechos nos respaldan." },
  { icon: Cpu, title: "Tecnología Moderna", desc: "Equipos de última generación para diagnósticos y tratamientos precisos." },
  { icon: Heart, title: "Atención Personalizada", desc: "Cada paciente recibe un plan de tratamiento a su medida." },
];

const WhyUs = () => (
  <section id="nosotros" className="section-padding">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">¿Por qué elegirnos?</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">
            Tu mejor opción en salud dental
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <b.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={dentistImg}
            alt="Dra. Betsabea atendiendo paciente en Be-Dental"
            className="w-full h-[400px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
