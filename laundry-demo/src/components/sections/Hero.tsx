import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppLink } from "@/lib/utils";

export default function Hero() {
  const waLink = buildWhatsAppLink(siteConfig.business.whatsappNumber, siteConfig.business.whatsappMessage);

  // Ikon-ikon kecil untuk bottom strip
  const features = [
    { title: "Antar-Jemput", desc: "Gratis area tertentu" },
    { title: "Higienis", desc: "Deterjen premium" },
    { title: "Tepat Waktu", desc: "Sesuai estimasi" },
    { title: "Garansi", desc: "Cuci ulang gratis" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-slate-900 overflow-hidden">
      
      {/* 1. BACKGROUND FOTO */}
      <div className="absolute inset-0 z-0">
        <img
          // Foto tekstur kain/handuk bersih
          src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2000&auto=format&fit=crop"
          alt="Laundry Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. KONTEN UTAMA (Teks Kiri) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full pt-32 md:pt-40">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            {siteConfig.business.tagline}
          </h1>
          <p className="mt-6 text-sm md:text-base text-slate-200 leading-relaxed max-w-md">
            {siteConfig.business.description}
          </p>
          <div className="mt-8 flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold uppercase tracking-[0.15em] px-6 py-3.5 transition-colors">
              Pesan Sekarang
            </a>
            <a href="#layanan" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.15em] hover:text-brand-300 transition-colors group">
              Lihat Layanan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM STRIP (Gaya Tisoo) */}
      <div className="relative z-10 w-full bg-black/60 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex flex-wrap justify-between gap-6">
          
          {/* Grid Fitur Kecil */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 flex-1">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                {/* Ikon garis tipis (placeholder) */}
                <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center text-white/50 text-[10px]">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">{f.title}</p>
                  <p className="text-[9px] text-white/60">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Kanan Strip */}
          <div className="flex items-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-400 hover:text-brand-300">
              Hubungi Kami →
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}