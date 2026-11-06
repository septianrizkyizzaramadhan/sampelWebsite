// ============================================================
// UTILS — Fungsi helper yang dipakai berulang
// ============================================================

/**
 * Membuat link WhatsApp siap klik.
 * @param phoneNumber - format internasional, tanpa "+" dan spasi (mis: "6281234567890")
 * @param message - pesan otomatis yang muncul di chat
 */
export function buildWhatsAppLink(phoneNumber: string, message = ""): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${phoneNumber}${text}`;
}

/**
 * Format angka jadi Rupiah tanpa desimal.
 * Contoh: 6000 -> "Rp 6.000"
 */
export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}