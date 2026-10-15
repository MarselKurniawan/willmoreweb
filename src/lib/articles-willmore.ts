import type { Article, ArticleSection } from "@/lib/articles";
import { categories, completeSetNote } from "@/lib/site-content";
import homepagePhoto from "@/assets/willmore-home-entrance.jpg";

// Recorded when this article was added; never calculated on page load.
const publishedAt = "2026-10-15T02:05:00Z";
const section = (id: string, heading: string, paragraphs: string[], list?: string[], categorySlugs?: string[]): ArticleSection => ({ id, heading, paragraphs, list, categorySlugs });
const spec = (slug: string) => (categories.find((c) => c.slug === slug)?.specs ?? []).map(([k, v]) => `${k}: ${v}`);

export const willmoreArticles: Article[] = [
  {
    slug: "kelebihan-willmore-merk-pintu-berkualitas",
    category: "Brand Willmore", publishedAt,
    title: "Kelebihan Willmore: Alasan Willmore Masuk Daftar Rekomendasi Merk Pintu Berkualitas",
    metaTitle: "Kelebihan Willmore | Rekomendasi Merk Pintu Baja & Kayu Berkualitas",
    description: "Kelebihan pintu Willmore sejak 2002: pintu baja 11 titik kunci, pintu kayu HMR 4,2 cm, aluminium anti karat, UPVC garansi bahan 10 tahun, satu set siap pasang.",
    keyword: "kelebihan Willmore, merk pintu terbaik, merk pintu berkualitas, rekomendasi merk pintu, rekomendasi merk pintu baja, rekomendasi merk pintu kayu",
    image: homepagePhoto,
    imageAlt: "Pintu ganda motif kayu Willmore pada fasad rumah modern dengan pencahayaan malam",
    relatedSlugs: ["merk-pintu-terbaik-di-indonesia", "merk-pintu-berkualitas-rekomendasi-merk-pintu", "rekomendasi-merk-pintu-terpercaya-indonesia", "rekomendasi-pintu-baja-berkualitas", "pintu-kayu-engineering-door"],
    intro: [
      "Saat mencari merk pintu terbaik atau merk pintu berkualitas, kebanyakan orang menemukan daftar nama tanpa penjelasan mengapa sebuah merek layak dipilih. Artikel ini membahas kelebihan Willmore secara terbuka: apa saja yang ditawarkan setiap material, apa yang termasuk dalam pembelian, dan layanan apa yang mendampingi Anda. Dengan begitu, Anda dapat menilai sendiri apakah Willmore pantas masuk daftar rekomendasi merk pintu untuk rumah Anda.",
      "Kami sengaja hanya memakai fakta produk yang dapat diperiksa di halaman kategori Willmore. Tidak ada peringkat buatan, testimoni karangan, atau klaim bahwa satu merek pasti paling cocok untuk semua rumah. Merek yang baik untuk Anda adalah merek yang spesifikasinya sesuai dengan fungsi ruang, kondisi lokasi, dan cara Anda menggunakan pintu setiap hari.",
    ],
    sections: [
      section("ringkasan-kelebihan", "Ringkasan Kelebihan Willmore", [
        "Jika Anda hanya punya waktu satu menit, berikut kelebihan utama Willmore yang paling sering menjadi alasan pembeli memasukkannya ke daftar rekomendasi merk pintu. Setiap poin dibahas lebih rinci pada bagian berikutnya, lengkap dengan tautan ke spesifikasi materialnya.",
      ], [
        "Berpengalaman di bidang pintu sejak 2002.",
        "Lima pilihan material dalam satu merek: baja, kayu, aluminium, UPVC, dan PVC.",
        "Pintu baja bermotif serat kayu natural dengan 11 titik penguncian.",
        "Pintu kayu berlapis HMR, bukan HPL, dengan ketebalan 4,2 cm.",
        "Aluminium tidak berkarat dengan garansi 10 tahun tidak berubah warna.",
        "UPVC bergaransi bahan 10 tahun dan dilengkapi handle kunci.",
        "Setiap pembelian berupa satu set lengkap kusen dan handle, siap dipasang.",
        "Layanan dari konsultasi, pemilihan produk, instalasi, hingga after sales.",
      ]),
      section("sejak-2002", "Pengalaman Sejak 2002 sebagai Spesialis Pintu", [
        "Willmore hadir sejak 2002 dan berfokus pada satu bidang: pintu. Fokus seperti ini penting ketika Anda mencari merk pintu berkualitas, karena pintu bukan sekadar papan yang dipasang di bukaan dinding. Ada kusen, handle, sistem kunci, arah buka, dan kondisi lokasi yang harus cocok satu sama lain agar pintu nyaman dipakai bertahun-tahun.",
        "Pengalaman panjang tidak otomatis menjamin setiap produk cocok untuk Anda, tetapi memberi dasar untuk konsultasi yang lebih terarah. Tim Willmore terbiasa membantu membandingkan material berdasarkan fungsi ruang, sehingga Anda tidak memilih hanya dari foto atau harga yang terlihat di layar.",
      ]),
      section("pintu-baja", "Kelebihan Pintu Baja Willmore: Rekomendasi Merk Pintu Baja", [
        "Bagi Anda yang mencari rekomendasi merk pintu baja, poin pertama yang perlu diperiksa adalah keamanan dan ketahanan terhadap cuaca. Pintu baja Willmore memiliki 11 titik penguncian untuk keamanan berlapis serta tahan air dan cuaca, sehingga cocok sebagai pintu utama rumah, pintu samping, atau pintu garasi.",
        "Kelebihan kedua adalah tampilan. Banyak orang ragu memilih pintu baja karena khawatir terlihat dingin seperti pintu gudang. Pintu baja Willmore memakai motif serat kayu yang sangat natural, sehingga fasad tetap terasa hangat. Detail architrave menutup celah antara kusen dan dinding agar hasil pemasangan rapi tanpa lubang yang terlihat, dan peredam di sela pintu menambah kenyamanan saat pintu ditutup.",
      ], spec("baja"), ["baja"]),
      section("pintu-kayu", "Kelebihan Pintu Kayu Willmore: Rekomendasi Merk Pintu Kayu", [
        "Untuk rekomendasi merk pintu kayu, perhatikan dua hal yang sering luput: lapisan permukaan dan ketebalan daun pintu. Pintu kayu Willmore memakai lapisan HMR, bukan HPL, sehingga lebih tahan terhadap rayap. Ketebalannya 4,2 cm, di atas ketebalan standar umum 3,5 cm, sehingga pintu terasa lebih kuat dan kokoh ketika dibuka dan ditutup.",
        "Pintu kayu Willmore juga dilengkapi architrave untuk hasil akhir yang rapi. Pilihan ini cocok untuk pintu kamar tidur, ruang kerja, dan ruang interior yang ingin menghadirkan nuansa hangat. Jika Anda sedang membandingkan pintu kayu solid dengan engineering door, baca juga panduan khusus kami tentang perbedaan keduanya.",
      ], spec("kayu"), ["kayu"]),
      section("area-basah", "Aluminium, UPVC, dan PVC untuk Area Basah dan Semi Outdoor", [
        "Merek pintu yang lengkap seharusnya punya jawaban untuk kamar mandi, teras, dan area servis. Pintu aluminium Willmore tidak akan berkarat dan memiliki garansi 10 tahun tidak berubah warna yang sudah teruji, cocok untuk pintu teras outdoor dan kamar mandi.",
        "Pintu UPVC Willmore bergaransi bahan 10 tahun, tidak getas, lentur, dan tahan keropos. Kelebihannya, tidak banyak pintu UPVC yang dilengkapi handle kunci, sedangkan UPVC Willmore bisa dikunci dan cocok untuk area semi outdoor. Untuk kebutuhan interior dengan anggaran efisien, pintu PVC Willmore memakai PVC grade atas: paling terjangkau di koleksi Willmore, tetapi kualitasnya sepadan dan tidak overprice.",
      ], undefined, ["aluminium", "upvc", "pvc"]),
      section("satu-set", "Satu Set Lengkap Kusen dan Handle, Siap Dipasang", [
        `${completeSetNote} Ini kelebihan praktis yang sering diremehkan. Ketika daun pintu, kusen, dan handle datang sebagai satu paket, risiko komponen yang tidak cocok satu sama lain menjadi lebih kecil dan proses pemasangan lebih sederhana.`,
        "Saat membandingkan Willmore dengan merek lain, pastikan Anda membandingkan isi paket yang setara. Harga daun pintu saja tentu berbeda dengan harga satu set lengkap. Tanyakan juga hal di luar paket produk, seperti pengiriman, pemasangan, atau penyesuaian bukaan, agar perbandingan penawaran tetap adil.",
      ]),
      section("layanan", "Layanan dari Konsultasi hingga After Sales", [
        "Kelebihan Willmore tidak berhenti pada produk. Layanan Willmore mencakup konsultasi, pemilihan produk, instalasi, dan after sales. Konsultasi membantu Anda memahami kebutuhan ruang, fungsi, gaya, dan material yang relevan, sementara after sales memastikan Anda tetap punya tempat bertanya setelah pintu terpasang.",
        "Agar konsultasi efektif, siapkan foto bukaan, perkiraan ukuran, fungsi ruang, serta kondisi lokasi seperti paparan air atau cuaca. Informasi ini membantu tim memberi arahan yang sesuai, termasuk kemungkinan memakai material berbeda untuk ruang yang berbeda di rumah yang sama.",
      ]),
      section("kanal-resmi", "Kanal Resmi untuk Membeli dan Mengikuti Willmore", [
        "Willmore dapat dihubungi melalui WhatsApp lewat halaman kontak, dan produknya tersedia di toko resmi Shopee serta Tokopedia. Membeli melalui kanal resmi membantu Anda memastikan produk dan informasi yang diterima sesuai dengan yang dijelaskan di website.",
        "Untuk melihat inspirasi pintu, info produk, dan tips perawatan, ikuti Willmore di Instagram, TikTok, Facebook, dan YouTube. Tautan media sosial resmi tersedia di bagian akhir artikel ini.",
      ]),
      section("cara-menilai", "Apakah Willmore Merk Pintu Terbaik untuk Rumah Anda?", [
        "Tidak ada satu merk pintu terbaik untuk semua orang. Merek yang tepat adalah merek yang spesifikasinya menjawab kebutuhan Anda. Gunakan daftar berikut untuk menilai apakah kelebihan Willmore sesuai dengan rencana rumah Anda sebelum memutuskan.",
      ], [
        "Pintu utama membutuhkan keamanan dan tahan cuaca: pertimbangkan pintu baja.",
        "Pintu kamar interior dengan nuansa hangat: pertimbangkan pintu kayu HMR 4,2 cm.",
        "Kamar mandi atau teras outdoor: pertimbangkan aluminium anti karat.",
        "Area semi outdoor yang perlu dikunci: pertimbangkan UPVC.",
        "Interior dengan anggaran efisien: pertimbangkan PVC grade atas.",
        "Ingin paket siap pasang dan pendampingan: konsultasikan dengan tim Willmore.",
      ], ["baja", "kayu", "aluminium", "upvc", "pvc"]),
      section("faq", "FAQ Seputar Kelebihan Willmore", [
        "Apakah Willmore merk pintu berkualitas? Willmore berpengalaman sejak 2002 dan setiap material punya spesifikasi yang jelas, seperti 11 titik penguncian pada pintu baja dan ketebalan 4,2 cm pada pintu kayu. Nilailah kualitasnya dengan mencocokkan spesifikasi itu dengan kebutuhan Anda.",
        "Apakah pembelian Willmore sudah termasuk kusen? Ya, setiap pembelian sudah termasuk satu set lengkap kusen dan handle. Apakah ada garansi? Aluminium bergaransi 10 tahun tidak berubah warna, dan UPVC bergaransi bahan 10 tahun. Tanyakan ketentuan lengkapnya saat konsultasi.",
        "Bagaimana mengetahui harga pintu Willmore? Harga dipengaruhi material, ukuran, desain, dan kebutuhan pemasangan. Kirim kebutuhan proyek melalui halaman kontak untuk mendapat arahan, atau lihat toko resmi Willmore di Shopee dan Tokopedia.",
      ]),
    ],
  },
];
