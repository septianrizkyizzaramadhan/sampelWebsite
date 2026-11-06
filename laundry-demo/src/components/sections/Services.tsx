import { Shirt, Sparkles, Wind, Footprints, BedDouble, Zap, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const iconMap: Record<string, LucideIcon> = { Shirt, Sparkles, Wind, Footprints, BedDouble, Zap };

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow text-brand-600">— Layanan Kami</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Kebersihan tanpa kompromi.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-14">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Shirt;
            return (
              <div key={service.id} className="group">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-brand-600" strokeWidth={1.2} />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">{service.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}