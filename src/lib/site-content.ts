import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import aluminiumDoor from "@/assets/aluminium-door.jpg";
import heroImage from "@/assets/willmore-hero.jpg";

export { heroImage };

export const products = [
  {
    no: "01",
    name: "Pintu Baja",
    slug: "baja",
    image: steelDoor,
    summary: "Pilihan untuk kebutuhan keamanan, ketahanan, dan tampilan rumah modern.",
    points: ["Kokoh untuk akses utama", "Pilihan desain minimalis", "Dapat disesuaikan dengan kebutuhan ruang"],
  },
  {
    no: "02",
    name: "Pintu Kayu",
    slug: "kayu",
    image: woodDoor,
    summary: "Karakter natural dan hangat untuk hunian yang mengutamakan detail.",
    points: ["Karakter serat yang khas", "Pilihan untuk rumah modern", "Opsi desain sesuai kebutuhan"],
  },
  {
    no: "03",
    name: "Pintu Aluminium",
    slug: "aluminium",
    image: aluminiumDoor,
    summary: "Profil bersih dan ringan untuk bukaan modern serta koneksi antarruang.",
    points: ["Tampilan ramping", "Cocok untuk bukaan lebar", "Perawatan praktis"],
  },
  {
    no: "04",
    name: "Pintu PVC & UPVC",
    slug: "pvc-upvc",
    image: heroImage,
    summary: "Solusi praktis untuk kebutuhan ruang yang mengutamakan kemudahan perawatan.",
    points: ["Mudah dirawat", "Pilihan sesuai fungsi ruang", "Konsultasi material tersedia"],
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
