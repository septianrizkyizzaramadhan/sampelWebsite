"use client";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Harga", href: "#harga" },
  { label: "Tentang", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = buildWhatsAppLink(siteConfig.business.whatsappNumber, siteConfig.business.whatsappMessage);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-sand-50/95 backdrop-blur-md py-3 border-b border-sand-200 shadow-sm" : "bg-sand-50 py-4 md:py-5 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* KIRI: Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600 hover:text-brand-600 transition-colors">{link.label}</a>
          ))}
        </nav>

        {/* TENGAH: Logo */}
        <div className="flex justify-start md:justify-center">
          <a href="#" className="text-xl md:text-2xl font-bold text-brand-700 font-serif tracking-tight">
            {siteConfig.business.name}
          </a>
        </div>

        {/* KANAN: CTA / Mobile Toggle */}
        <div className="flex justify-end items-center gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-2.5 transition-colors">
            <User className="w-3.5 h-3.5" /> Pesan
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-800">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="px-5 pb-5 pt-3 flex flex-col gap-1 bg-sand-50 border-t border-sand-200">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-brand-600">{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}