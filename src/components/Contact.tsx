import { useState } from "react";
import { MapPin, Phone, MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5295716525648?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.nombre}. Tel: ${form.telefono}. ${form.mensaje}`;
    window.open(`https://wa.me/5295716525648?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contacto" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contáctanos</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Estamos para ayudarte
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-sm text-muted-foreground">Calzada de la República 104A, Oaxaca</p>
                  <p className="text-xs text-muted-foreground">A 3 minutos del Panteón General de Oaxaca</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a href="tel:+5295716525648" className="text-sm text-primary hover:underline">
                    957 165 25648
                  </a>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Escríbenos por WhatsApp
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Ubicación de Be-Dental en Oaxaca"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.2!2d-96.72!3d17.065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzU0LjAiTiA5NsKwNDMnMTIuMCJX!5e0!3m2!1ses!2smx!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-5 shadow-sm">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">Nombre</label>
              <input
                id="nombre"
                type="text"
                required
                maxLength={100}
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
              <input
                id="telefono"
                type="tel"
                required
                maxLength={15}
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tu número de teléfono"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
              <textarea
                id="mensaje"
                required
                maxLength={500}
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              {sent ? "¡Mensaje enviado!" : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
