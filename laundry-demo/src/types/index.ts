// ============================================================
// TYPES — Definisi tipe global untuk seluruh project
// ============================================================
// Semua tipe data yang dipakai berulang didefinisikan di sini.
// Kalau kamu jual template ini, klien cukup lihat file ini untuk
// tahu bentuk data apa yang harus diisi di siteConfig.ts.
// ============================================================

import type { LucideIcon } from "lucide-react";

// ---------- LAYANAN ----------
// Satu item layanan laundry (misal: Cuci Kering, Cuci Setrika)
export interface Service {
  id: string;
  title: string;
  description: string;
  // icon: nama ikon Lucide dalam bentuk string (misal: "Shirt", "Sparkles")
  // Kenapa string, bukan komponen langsung? Karena data ini disimpan di
  // siteConfig.ts — biar mudah diganti tanpa sentuh komponen.
  icon: string;
}

// ---------- HARGA ----------
// Satu paket harga (Reguler, Express, Satuan)
export interface PricingPlan {
  id: string;
  name: string;
  // null = harga tidak per kg (misal: paket satuan)
  pricePerKg: number | null;
  unit: string;
  duration: string;
  // popular: untuk menandai paket "paling populer" dengan badge
  popular: boolean;
  features: string[];
}

// ---------- KEUNGGULAN ----------
// Satu poin keunggulan bisnis
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

// ---------- CARA PEMESANAN ----------
// Satu langkah dalam alur pemesanan
export interface OrderStep {
  step: number;
  title: string;
  description: string;
}

// ---------- TESTIMONI ----------
// Satu testimoni pelanggan
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  // rating: 1–5 bintang
  rating: 1 | 2 | 3 | 4 | 5;
}

// ---------- JAM OPERASIONAL ----------
// Satu baris jadwal buka
export interface OperatingHour {
  day: string;
  hours: string;
}

// ---------- SOSIAL MEDIA ----------
// Link sosial media (kosongkan "" kalau tidak ada)
export interface SocialMedia {
  instagram: string;
  facebook: string;
  tiktok: string;
}

// ---------- IDENTITAS BISNIS ----------
export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

// ---------- KONTAK ----------
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapsUrl: string;
}

// ---------- FOOTER ----------
export interface FooterInfo {
  copyright: string;
}

// ---------- SITE CONFIG (GABUNGAN) ----------
// Ini tipe utama yang dipakai oleh siteConfig.ts.
// Semua data website harus mengikuti bentuk ini.
export interface SiteConfig {
  business: BusinessInfo;
  contact: ContactInfo;
  operatingHours: OperatingHour[];
  services: Service[];
  pricing: PricingPlan[];
  features: Feature[];
  howToOrder: OrderStep[];
  testimonials: Testimonial[];
  socialMedia: SocialMedia;
  footer: FooterInfo;
}

// ---------- PROPS KOMPONEN ----------
// Tipe props untuk komponen yang menerima data dari luar.
// Ini opsional tapi sangat membantu autocomplete di VS Code.

// Contoh: Navbar bisa menerima className tambahan
export interface NavbarProps {
  className?: string;
}