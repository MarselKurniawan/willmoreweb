import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import aluminiumDoor from "@/assets/aluminium-door.jpg";
import heroImage from "@/assets/willmore-hero.jpg";
import upvcDoor from "@/assets/upvc-door.jpg";

export { heroImage };

export const whatsappNumber = "6281227281454";
export const completeSetNote = "Setiap pembelian sudah termasuk satu set lengkap kusen dan handle, siap dipasang.";

export const products = [
  {
    no: "01",
    name: "Pintu Baja",
    slug: "baja",
    image: steelDoor,
    summary: "Pintu baja premium dengan motif serat kayu yang sangat natural, dirancang untuk keamanan, ketahanan, dan tampilan rumah modern.",
    points: ["Tahan air dan cuaca", "11 titik penguncian untuk keamanan berlapis", "Architrave menutup celah agar hasil lebih rapi", "Peredam pada sela pintu", "Satu set lengkap kusen dan handle"],
  },
  {
    no: "02",
    name: "Pintu Kayu",
    slug: "kayu",
    image: woodDoor,
    summary: "Pintu kayu premium berlapis HMR dengan ketebalan 4,2 cm untuk karakter yang lebih kuat, kokoh, dan tahan rayap.",
    points: ["Lapisan HMR, bukan HPL", "Ketebalan premium 4,2 cm", "Architrave untuk hasil akhir yang rapi", "Lebih tahan terhadap rayap", "Satu set lengkap kusen dan handle"],
  },
  {
    no: "03",
    name: "Pintu Aluminium",
    slug: "aluminium",
    image: aluminiumDoor,
    summary: "Pintu yang tidak berkarat untuk teras, area outdoor, dan kamar mandi, dengan jaminan warna hingga 10 tahun.",
    points: ["Tidak akan berkarat", "Garansi 10 tahun tidak berubah warna", "Cocok untuk teras outdoor dan kamar mandi", "Sudah teruji", "Satu set lengkap kusen dan handle"],
    badge: "Sudah Teruji",
  },
  {
    no: "04",
    name: "Pintu PVC & UPVC",
    slug: "pvc-upvc",
    image: upvcDoor,
    summary: "Pilihan PVC kelas atas dan UPVC bergaransi untuk area interior hingga semi-outdoor dengan kualitas yang sepadan dengan harganya.",
    points: ["UPVC bergaransi bahan 10 tahun", "UPVC tidak getas, lentur, dan tahan keropos", "UPVC dilengkapi handle serta dapat dikunci", "PVC grade atas dengan harga yang tetap sepadan", "Satu set lengkap kusen dan handle"],
  },
] as const;

export const services = [
  { no: "01", title: "Konsultasi", text: "Kami membantu memahami kebutuhan ruang, fungsi, gaya, dan pilihan material yang relevan." },
  { no: "02", title: "Pemilihan Produk", text: "Bandingkan karakter pintu baja, kayu, aluminium, PVC, dan UPVC tanpa keputusan yang terburu-buru." },
  { no: "03", title: "Instalasi", text: "Pemasangan menjadi bagian dari rangkaian layanan agar hasil akhir sesuai kebutuhan proyek." },
  { no: "04", title: "After Sales", text: "Layanan tidak berhenti ketika pintu terpasang. Willmore tetap mendampingi kebutuhan setelah pembelian." },
] as const;

export const faqs = [
  ["Material pintu apa yang cocok untuk rumah?", "Pilihan terbaik bergantung pada lokasi pintu, tingkat keamanan, paparan cuaca, gaya rumah, dan kebutuhan perawatan. Tim Willmore membantu membandingkannya melalui konsultasi."],
  ["Apakah Willmore menyediakan pemasangan?", "Ya. Layanan Willmore mencakup konsultasi, pemilihan produk, instalasi, hingga after sales."],
  ["Apakah tersedia pintu custom?", "Kebutuhan desain dan ukuran dapat dibahas saat konsultasi agar pilihan produknya sesuai dengan kondisi ruang."],
  ["Bagaimana cara mengetahui harga pintu?", "Harga dipengaruhi material, ukuran, desain, finishing, dan kebutuhan pemasangan. Sampaikan kebutuhan proyek melalui halaman kontak untuk mendapatkan arahan yang sesuai."],
  ["Apa perbedaan pintu baja, kayu, aluminium, dan UPVC?", "Pintu baja mengutamakan keamanan dan ketahanan, kayu menghadirkan karakter natural, aluminium cocok untuk tampilan ramping dan bukaan lebar, sedangkan PVC dan UPVC praktis dalam perawatan."],
  ["Apakah saya bisa berkonsultasi sebelum memilih produk?", "Ya. Konsultasi membantu Anda membandingkan material berdasarkan fungsi ruang, gaya rumah, kebutuhan keamanan, dan perawatannya."],
  ["Apakah Willmore memiliki layanan setelah pemasangan?", "Ya. Willmore menyediakan layanan after sales untuk mendampingi kebutuhan pelanggan setelah pintu terpasang."],
] as const;

export const marketplaces = [
  { name: "Shopee", url: "https://shopee.co.id/willmore", className: "marketplace-shopee" },
  { name: "Tokopedia", url: "https://www.tokopedia.com/willmore-official", className: "marketplace-tokopedia" },
] as const;

export const socials = [
  { id: "instagram", name: "Instagram", handle: "@willmoreofficial", url: "https://www.instagram.com/willmoreofficial" },
  { id: "tiktok", name: "TikTok", handle: "@pintuwillmore", url: "https://www.tiktok.com/@pintuwillmore" },
  { id: "facebook", name: "Facebook", handle: "WillmoreOfficial1", url: "https://www.facebook.com/WillmoreOfficial1" },
  { id: "youtube", name: "YouTube", handle: "@willmoreofficial", url: "https://www.youtube.com/@willmoreofficial" },
] as const;
