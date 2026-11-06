import { siteConfig } from "@/data/siteConfig";

export default function HowToOrder() {
  return (
    <section id="cara-pesan" className="py-16 md:py-24 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-10 md:mb-16">
          <span className="eyebrow text-brand-400">— Cara Pesan</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Pesan dalam 4 langkah mudah.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
          {siteConfig.howToOrder.map((step) => (
            <div key={step.step} className="border-t border-brand-700 pt-5">
              <span className="text-3xl md:text-4xl font-bold text-brand-400 font-serif">0{step.step}</span>
              <h3 className="mt-3 text-base md:text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-brand-100/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}