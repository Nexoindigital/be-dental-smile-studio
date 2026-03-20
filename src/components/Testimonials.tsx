import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    text: "Excelente atención, la doctora es muy profesional y cuidadosa. Me hicieron sentir muy cómoda durante todo el tratamiento. ¡Mi sonrisa nunca se vio mejor!",
  },
  {
    name: "Carlos Hernández",
    text: "La mejor clínica dental de Oaxaca. Fui por una limpieza y me quedé impresionado con la tecnología y el trato. Totalmente recomendado.",
  },
  {
    name: "Ana López",
    text: "Mi experiencia con el blanqueamiento fue increíble. Resultados naturales y un precio justo. La Dra. Betsabea es una gran profesional.",
  },
];

const Testimonials = () => (
  <section id="testimonios" className="section-padding bg-dark-surface text-dark-surface-foreground">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonios</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">Pacientes Satisfechos</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border/10 bg-card/5 backdrop-blur p-6 space-y-4">
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm leading-relaxed opacity-85">"{t.text}"</p>
            <p className="font-semibold text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
