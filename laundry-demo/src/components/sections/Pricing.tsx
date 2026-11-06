import { Check } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppLink, formatRupiah } from "@/lib/utils";

export default function Pricing() {
  const waLink = buildWhatsAppLink(siteConfig.business.whatsappNumber, siteConfig.business.whatsappMessage);

  return (
    <section id="harga" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-10 md:mb-16">
          <span className="eyebrow text-brand-700">— Harga</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Harga jelas. Tanpa biaya tersembunyi.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {siteConfig.pricing.map((plan) => (
            <div key={plan.id} className={`flex flex-col py-6 md:py-8 border-t-2 ${plan.popular ? "border-brand-600" : "border-slate-200"}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-slate-900">{plan.name}</h3>
                {plan.popular && <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 bg-brand-50 px-2 py-1">Populer</span>}
              </div>
              <div className="mb-6">
                {plan.pricePerKg !== null ? (
                  <p className="text-3xl md:text-4xl font-bold text-slate-900">
                    {formatRupiah(plan.pricePerKg)}
                    <span className="text-sm font-normal text-slate-500">/{plan.unit}</span>
                  </p>
                ) : (
                  <p className="text-2xl md:text-3xl font-bold text-slate-900">Mulai {formatRupiah(25000)}</p>
                )}
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Estimasi {plan.duration}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center text-xs font-bold uppercase tracking-[0.1em] px-6 py-3.5 transition-colors ${plan.popular ? "bg-brand-600 hover:bg-brand-700 text-white" : "border border-slate-300 hover:border-slate-900 text-slate-900"}`}>
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}