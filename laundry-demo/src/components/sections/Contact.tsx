// Contact.tsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppLink } from "@/lib/utils";

export default function Contact() {
  const { business, contact, operatingHours } = siteConfig;
  const waLink = buildWhatsAppLink(business.whatsappNumber, business.whatsappMessage);

  return (
    <section id="kontak" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <span className="eyebrow text-brand-600">— Kontak</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">Mampir yuk.</h2>
            <p className="text-sm md:text-base text-slate-600 mb-8 max-w-md">Kami siap membantu. Hubungi lewat WhatsApp atau datang langsung ke lokasi.</p>
            <ul className="space-y-6">
              {[{ icon: MapPin, label: "Alamat", val: contact.address, href: contact.mapsUrl }, { icon: Phone, label: "Telepon", val: contact.phone, href: `tel:${contact.phone.replace(/[^0-9+]/g, "")}` }, { icon: Mail, label: "Email", val: contact.email, href: `mailto:${contact.email}` }].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1">{item.label}</p>
                    <a href={item.href} target={item.label === "Alamat" ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors">{item.val}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-sand-50 p-6 md:p-8 border border-sand-200">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-slate-900 font-serif">Jam Operasional</h3>
            </div>
            <ul className="mb-8">
              {operatingHours.map((h) => (
                <li key={h.day} className="flex justify-between py-3 border-b border-sand-200 last:border-0 text-sm">
                  <span className="text-slate-600">{h.day}</span>
                  <span className="font-bold text-slate-900">{h.hours}</span>
                </li>
              ))}
            </ul>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold uppercase tracking-[0.1em] px-6 py-3.5 transition-colors w-full">Chat via WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}