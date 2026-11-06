import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Features from "@/components/sections/Features";
import HowToOrder from "@/components/sections/HowToOrder";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Pricing />
      <Features />
      <HowToOrder />
      <Testimonials />
      <Contact />
    </main>
  );
}