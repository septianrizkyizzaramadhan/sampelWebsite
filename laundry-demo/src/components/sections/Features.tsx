import { Truck, ShieldCheck, Clock, Wallet, Sparkles, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const iconMap: Record<string, LucideIcon> = { Truck, ShieldCheck, Clock, Wallet };

export default function Features() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-[#1e2e17] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow text-brand-400">— Keunggulan</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white leading-tight">
            Lebih dari sekadar cuci.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {siteConfig.features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Sparkles;
            return (
              <div key={feature.title} className="border-t border-white/20 pt-6">
                <Icon className="w-6 h-6 text-brand-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-white font-serif">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}