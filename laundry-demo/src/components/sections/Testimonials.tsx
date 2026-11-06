// Testimonials.tsx
import { Star } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-6">
          <span className="eyebrow text-brand-600">— Testimoni</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Kata mereka.</h2>
        </div>
        <div className="mb-12">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.1em] text-amber-700 border border-amber-200 bg-amber-50 px-3 py-1">ⓘ Contoh demo</span>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {siteConfig.testimonials.map((t) => (
            <div key={t.name} className="flex flex-col border-t border-sand-300 pt-6">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < t.rating ? "fill-brand-600 text-brand-600" : "text-sand-300"}`} />
                ))}
              </div>
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-serif italic flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-[10px] uppercase tracking-[0.1em] text-slate-500 mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}