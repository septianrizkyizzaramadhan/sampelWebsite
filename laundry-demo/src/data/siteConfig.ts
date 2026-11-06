import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  business: {
    name: "CleanWave Laundry",
    tagline: "Cucian Bersih, Hidup Lebih Ringan",
    description:
      "Layanan laundry profesional dengan antar-jemput gratis. Pakaian bersih, wangi, dan rapi tanpa perlu keluar rumah.",
    whatsappNumber: "6281234567890",
    whatsappMessage: "Halo CleanWave Laundry, saya ingin memesan layanan laundry.",
  },

  contact: {
    address:
      "Jl. Contoh Raya No. 123, Kelurahan Demo, Kecamatan Contoh, Kota Demo 12345",
    phone: "0812-3456-7890",
    email: "hello@cleanwavelaundry.demo",
    mapsUrl: "https://maps.google.com/?q=Jl.+Contoh+Raya+No.+123",
  },

  operatingHours: [
    { day: "Senin – Jumat", hours: "07.00 – 21.00" },
    { day: "Sabtu", hours: "08.00 – 20.00" },
    { day: "Minggu", hours: "09.00 – 17.00" },
  ],

  services: [
    {
      id: "cuci-kering",
      title: "Cuci Kering",
      description:
        "Pakaian dicuci, dikeringkan, dan dilipat rapi. Cocok untuk pakaian sehari-hari.",
      icon: "Shirt",
    },
    {
      id: "cuci-setrika",
      title: "Cuci Setrika",
      description:
        "Pakaian dicuci, dikeringkan, disetrika, dan dilipat rapi. Siap langsung pakai.",
      icon: "Sparkles",
    },
    {
      id: "setrika-saja",
      title: "Setrika Saja",
      description:
        "Untuk pakaian yang sudah bersih dan hanya butuh disetrika rapi.",
      icon: "Wind",
    },
    {
      id: "cuci-sepatu",
      title: "Cuci Sepatu",
      description:
        "Perawatan khusus sepatu sneakers, kanvas, dan kulit agar bersih dan awet.",
      icon: "Footprints",
    },
    {
      id: "cuci-selimut",
      title: "Cuci Selimut & Bed Cover",
      description:
        "Pencucian menyeluruh untuk selimut, bed cover, dan sprei berukuran besar.",
      icon: "BedDouble",
    },
    {
      id: "cuci-express",
      title: "Layanan Express",
      description: "Untuk kebutuhan mendesak, cucian selesai dalam 6–12 jam.",
      icon: "Zap",
    },
  ],

  pricing: [
    {
      id: "reguler",
      name: "Reguler",
      pricePerKg: 6000,
      unit: "kg",
      duration: "3 hari",
      popular: false,
      features: [
        "Cuci + kering + lipat",
        "Antar-jemput gratis (min. 3 kg)",
        "Pewangi pilihan",
        "Estimasi 3 hari kerja",
      ],
    },
    {
      id: "express",
      name: "Express",
      pricePerKg: 10000,
      unit: "kg",
      duration: "1 hari",
      popular: true,
      features: [
        "Cuci + kering + lipat",
        "Antar-jemput gratis (min. 2 kg)",
        "Pewangi premium",
        "Selesai dalam 24 jam",
        "Prioritas antrian",
      ],
    },
    {
      id: "satuan",
      name: "Satuan",
      pricePerKg: null,
      unit: "pcs",
      duration: "2 hari",
      popular: false,
      features: [
        "Selimut: Rp 25.000/pcs",
        "Bed cover: Rp 35.000/pcs",
        "Sepatu: Rp 25.000/pasang",
        "Sprei set: Rp 20.000/set",
      ],
    },
  ],

  features: [
    {
      title: "Antar-Jemput Gratis",
      description:
        "Layanan antar-jemput gratis untuk area tertentu. Cucian dijemput dan diantar kembali ke rumah.",
      icon: "Truck",
    },
    {
      title: "Bersih & Higienis",
      description:
        "Menggunakan deterjen berkualitas dan proses pencucian yang higienis untuk hasil maksimal.",
      icon: "ShieldCheck",
    },
    {
      title: "Tepat Waktu",
      description:
        "Komitmen pada estimasi waktu. Cucian selesai sesuai jadwal yang dijanjikan.",
      icon: "Clock",
    },
    {
      title: "Harga Terjangkau",
      description:
        "Harga kompetitif dengan kualitas terbaik. Tidak ada biaya tersembunyi.",
      icon: "Wallet",
    },
  ],

  howToOrder: [
    {
      step: 1,
      title: "Hubungi via WhatsApp",
      description:
        "Klik tombol WhatsApp dan kirim pesan pemesanan. Admin kami akan merespons cepat.",
    },
    {
      step: 2,
      title: "Jadwalkan Penjemputan",
      description:
        "Tentukan alamat dan waktu penjemputan. Kurir kami akan datang sesuai jadwal.",
    },
    {
      step: 3,
      title: "Cucian Diproses",
      description:
        "Cucian diproses oleh tim profesional dengan standar kebersihan tinggi.",
    },
    {
      step: 4,
      title: "Diantar Kembali",
      description:
        "Cucian bersih, wangi, dan rapi diantar kembali ke rumah Anda. Bayar setelah terima.",
    },
  ],

  // ⚠️ CONTOH DEMO — ganti dengan testimoni asli klien sebelum dijual
  testimonials: [
    {
      name: "Ibu Sari",
      role: "Ibu Rumah Tangga",
      quote:
        "Praktis banget! Tinggal WhatsApp, cucian dijemput dan diantar kembali bersih. Tidak perlu keluar rumah.",
      rating: 5,
    },
    {
      name: "Pak Budi",
      role: "Karyawan Swasta",
      quote:
        "Sudah langganan 6 bulan. Hasil cuci selalu rapi, wangi, dan tidak pernah telat. Recommended!",
      rating: 5,
    },
    {
      name: "Mbak Rina",
      role: "Mahasiswa",
      quote:
        "Harga terjangkau untuk mahasiswa, hasilnya memuaskan. Express-nya benar-benar cepat!",
      rating: 4,
    },
  ],

  socialMedia: {
    instagram: "https://instagram.com/cleanwavelaundry",
    facebook: "https://facebook.com/cleanwavelaundry",
    tiktok: "",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} CleanWave Laundry. Semua hak dilindungi.`,
  },
};