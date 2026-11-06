import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const { business, contact, socialMedia, footer } = siteConfig;
  return (
    <footer className="bg-slate-900 text-sand-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <h3 className="text-2xl font-bold text-white font-serif">{business.name}</h3>
            <p className="mt-4 text-sm text-sand-200/60 leading-relaxed max-w-sm">{business.description}</p>
            <div className="mt-6 flex gap-3">
              {socialMedia.instagram && <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-sand-100/50 hover:text-white transition-colors">IG</a>}
              {socialMedia.facebook && <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-sand-100/50 hover:text-white transition-colors">FB</a>}
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-100/40 mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-500" /><span className="text-sand-200/70">{contact.address}</span></li>
              <li className="flex gap-2"><Phone className="w-4 h-4 shrink-0 mt-0.5 text-brand-500" /><a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white">{contact.phone}</a></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0 mt-0.5 text-brand-500" /><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-sand-100/40">
          <p>{footer.copyright}</p>
          <a href="#" className="hover:text-white">↑</a>
        </div>
      </div>
    </footer>
  );
}