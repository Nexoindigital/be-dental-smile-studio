import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5295716525648?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
