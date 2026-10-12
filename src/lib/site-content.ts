import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import aluminiumDoor from "@/assets/aluminium-door.jpg";
import heroAsset from "@/assets/willmore-home-entrance.jpg.asset.json";
import upvcDoor from "@/assets/upvc-door.jpg";

export const heroImage = heroAsset.url;

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

export const categories = [
  {
    slug: "baja", name: "Pintu Baja", image: steelDoor,
    metaTitle: "Pintu Baja Willmore | Motif Kayu Natural, 11 Titik Kunci",
    description: "Pintu baja Willmore bermotif serat kayu natural, tahan air dan cuaca, 11 titik penguncian, architrave, dan peredam. Satu set lengkap siap pasang.",
    intro: "Pintu baja Willmore menggabungkan keamanan baja dengan motif serat kayu yang paling natural, sehingga cocok sebagai pintu utama rumah modern.",
    specs: [["Material", "Baja"], ["Finishing", "Motif serat kayu natural"], ["Keamanan", "11 titik penguncian"], ["Ketahanan", "Tahan air dan cuaca"], ["Detail", "Architrave dan peredam di sela pintu"], ["Paket", "Daun pintu, kusen, dan handle"]],
    uses: ["Pintu utama rumah", "Pintu samping atau garasi", "Area yang terkena cuaca"],
    faqs: [["Apakah pintu baja Willmore tahan cuaca?", "Ya. Pintu baja Willmore tahan air dan cuaca sehingga cocok untuk pintu utama."], ["Apa fungsi architrave?", "Architrave menutup celah antara kusen dan dinding sehingga hasil pemasangan lebih rapi dan tidak terlihat lubang."], ["Berapa titik penguncian pintu baja Willmore?", "Pintu baja Willmore memiliki 11 titik penguncian."]],
    articles: ["panduan-memilih-pintu-baja", "pintu-baja-vs-pintu-kayu", "rekomendasi-pintu-utama-rumah"],
  },
  {
    slug: "kayu", name: "Pintu Kayu", image: woodDoor,
    metaTitle: "Pintu Kayu Willmore | Lapisan HMR, Tebal 4,2 cm, Tahan Rayap",
    description: "Pintu kayu Willmore berlapis HMR (bukan HPL), tebal 4,2 cm di atas standar 3,5 cm, lebih tahan rayap, dengan architrave. Satu set lengkap siap pasang.",
    intro: "Pintu kayu Willmore dibuat lebih tebal dari standar dan memakai lapisan HMR agar lebih kuat, kokoh, dan tahan rayap.",
    specs: [["Lapisan", "HMR, bukan HPL"], ["Ketebalan", "4,2 cm (standar umum 3,5 cm)"], ["Ketahanan", "Lebih tahan rayap"], ["Detail", "Architrave untuk hasil rapi"], ["Paket", "Daun pintu, kusen, dan handle"]],
    uses: ["Pintu kamar tidur", "Pintu ruang kerja", "Pintu interior bernuansa hangat"],
    faqs: [["Apa beda lapisan HMR dan HPL?", "Willmore memakai lapisan HMR, bukan HPL, sehingga pintu kayu lebih tahan rayap."], ["Berapa ketebalan pintu kayu Willmore?", "4,2 cm, di atas ketebalan standar umum 3,5 cm, sehingga lebih kuat dan kokoh."]],
    articles: ["panduan-memilih-pintu-kayu", "pintu-baja-vs-pintu-kayu", "rekomendasi-pintu-rumah-terbaik"],
  },
  {
    slug: "aluminium", name: "Pintu Aluminium", image: aluminiumDoor,
    metaTitle: "Pintu Aluminium Willmore | Anti Karat, Garansi Warna 10 Tahun",
    description: "Pintu aluminium Willmore tidak berkarat, garansi 10 tahun tidak berubah warna dan sudah teruji. Cocok untuk teras outdoor dan kamar mandi.",
    intro: "Pintu aluminium Willmore dirancang untuk area basah dan luar ruangan: tidak akan berkarat dan warnanya bergaransi 10 tahun.",
    specs: [["Material", "Aluminium"], ["Ketahanan", "Tidak berkarat"], ["Garansi", "10 tahun tidak berubah warna"], ["Status", "Sudah teruji"], ["Paket", "Daun pintu, kusen, dan handle"]],
    uses: ["Pintu teras outdoor", "Pintu kamar mandi", "Area basah dan lembap"],
    faqs: [["Apakah pintu aluminium Willmore bisa berkarat?", "Tidak. Pintu aluminium Willmore tidak akan berkarat."], ["Apa garansi pintu aluminium Willmore?", "Garansi 10 tahun warna tidak berubah, dan sudah teruji."]],
    articles: ["panduan-memilih-pintu-aluminium", "rekomendasi-pintu-aluminium-rumah-minimalis", "rekomendasi-pintu-kamar-mandi"],
  },
  {
    slug: "upvc", name: "Pintu UPVC", image: upvcDoor,
    metaTitle: "Pintu UPVC Willmore | Garansi Bahan 10 Tahun, Bisa Dikunci",
    description: "Pintu UPVC Willmore bergaransi bahan 10 tahun, tidak getas, lentur, tahan keropos, dilengkapi handle kunci, cocok semi outdoor. Satu set siap pasang.",
    intro: "Tidak banyak pintu UPVC yang dilengkapi handle kunci. Pintu UPVC Willmore bisa dikunci dan cocok untuk area semi outdoor.",
    specs: [["Material", "UPVC"], ["Garansi", "10 tahun bahan"], ["Karakter", "Tidak getas, lentur, tahan keropos"], ["Kunci", "Dilengkapi handle dan bisa dikunci"], ["Penggunaan", "Interior hingga semi outdoor"], ["Paket", "Daun pintu, kusen, dan handle"]],
    uses: ["Pintu kamar mandi", "Pintu dapur atau area servis", "Area semi outdoor"],
    faqs: [["Apakah pintu UPVC Willmore bisa dikunci?", "Bisa. Pintu UPVC Willmore dilengkapi handle kunci."], ["Berapa garansi pintu UPVC Willmore?", "Garansi bahan 10 tahun."]],
    articles: ["panduan-memilih-pintu-pvc-upvc", "pintu-upvc-vs-pvc", "rekomendasi-pintu-kamar-mandi"],
  },
  {
    slug: "pvc", name: "Pintu PVC", image: upvcDoor,
    metaTitle: "Pintu PVC Willmore | Grade Atas, Worth It, Tidak Overprice",
    description: "Pintu PVC Willmore grade atas: harga paling terjangkau di koleksi Willmore dengan kualitas sepadan, tidak overprice. Satu set lengkap kusen dan handle.",
    intro: "Pintu PVC Willmore adalah pilihan paling terjangkau di koleksi kami, tetapi tetap memakai PVC grade atas — bukan yang murahan.",
    specs: [["Material", "PVC grade atas"], ["Nilai", "Worth it, tidak overprice"], ["Penggunaan", "Interior"], ["Paket", "Daun pintu, kusen, dan handle"]],
    uses: ["Pintu kamar mandi interior", "Pintu gudang atau ruang servis", "Renovasi dengan anggaran efisien"],
    faqs: [["Apakah pintu PVC Willmore murahan?", "Tidak. Willmore memakai PVC grade atas; harganya paling terjangkau di koleksi kami tetapi kualitasnya sepadan."], ["Apa beda PVC dan UPVC?", "UPVC bergaransi bahan 10 tahun, lentur, dan bisa dikunci untuk semi outdoor; PVC grade atas adalah pilihan interior yang paling terjangkau."]],
    articles: ["pintu-upvc-vs-pvc", "panduan-memilih-pintu-pvc-upvc", "rekomendasi-pintu-kamar-mandi"],
  },
] as const;

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
