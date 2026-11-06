import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppLink } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const waLink = buildWhatsAppLink(
    siteConfig.business.whatsappNumber,
    siteConfig.business.whatsappMessage,
  );

  return (
    <a
  href={waLink}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat via WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white pl-4 pr-5 py-3 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5"
>
  <MessageCircle className="w-5 h-5" />
  <span className="hidden sm:inline text-xs font-bold uppercase tracking-[0.1em]">
    WhatsApp
  </span>
</a>
  );
}