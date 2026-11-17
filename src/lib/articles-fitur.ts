import type { Article, ArticleSection } from "@/lib/articles";
import steelDoor from "@/assets/produk-pintu-baja.webp";
import woodDoor from "@/assets/produk-pintu-kayu.webp";
import aluminiumDoor from "@/assets/produk-pintu-aluminium.webp";
import upvcDoor from "@/assets/produk-pintu-upvc.webp";

// Recorded when this editorial batch was added; never calculated on page load.
const publishedAt = "2026-11-17T07:40:00Z";
const s = (id: string, heading: string, paragraphs: string[], list?: string[], categorySlugs?: string[]): ArticleSection => ({ id, heading, paragraphs, list, categorySlugs });

const brand = s("tentang-willmore", "Tentang Willmore, High Quality Door Specialist", [
  "Willmore adalah merk pintu Indonesia yang berdiri sejak 2002 dengan fokus pada satu hal: pintu berkualitas tinggi untuk rumah. Pilihan materialnya lengkap, mulai dari pintu baja (steel door), pintu kayu (wooden door / engineering door), pintu aluminium, hingga pintu UPVC dan PVC. Setiap pembelian sudah termasuk satu set lengkap kusen dan handle sehingga pintu siap dipasang.",
  "Saat mencari di Google, Anda bisa mengetik \"pintu Willmore\", \"Willmore steel door\", atau \"Willmore pintu baja\" untuk menemukan halaman resmi, toko Shopee dan Tokopedia, serta akun media sosial resmi kami.",
]);
const sosmed = s("media-sosial", "Lihat Videonya Langsung di Instagram dan TikTok Willmore", [
  "Cara paling mudah memastikan kualitas adalah melihat produknya bekerja. Di TikTok @pintuwillmore dan Instagram @willmoreofficial kami membagikan video detail motif, cara kerja kunci, uji bukaan engsel, dan hasil pemasangan di rumah pelanggan. Ikuti akunnya supaya Anda tidak ketinggalan model terbaru.",
  "Untuk penjelasan yang lebih panjang, kunjungi YouTube @willmoreofficial dan Facebook WillmoreOfficial1. Simpan video model yang Anda suka, lalu kirimkan saat konsultasi WhatsApp agar tim kami langsung menunjukkan produk yang sama.",
]);
const faqBaja = s("tanya-jawab", "Tanya-Jawab Singkat", [
  "Apakah pintu baja Willmore bisa dipasang smart door lock? Bisa. Pintu baja Willmore dapat dipakai bersama smart door lock.",
  "Berapa titik penguncian pintu baja Willmore? Model standar memiliki 11 titik penguncian, sedangkan Manhattan Double Door memiliki 13 titik penguncian.",
  "Apa saja yang didapat saat membeli? Kusen, handle, dan anak kunci sudah termasuk, ditambah architrave untuk hasil yang lebih rapi.",
]);

export const fiturArticles: Article[] = [
  {
    slug: "pintu-baja-manhattan-pemenang-homedec",
    category: "Pintu Baja", publishedAt,
    title: "Pintu Baja Manhattan Willmore: Steel Door Pemenang Excellent Product HOMEDEC",
    metaTitle: "Pintu Baja Manhattan Willmore | Pemenang HOMEDEC, 13 Titik Kunci",
    description: "Pintu baja Manhattan Willmore, Winner Excellent Product Steel Door di pameran HOMEDEC: motif kayu paling natural, 11–13 titik penguncian, tahan api, garansi coating 10 tahun.",
    keyword: "pintu baja manhattan, pintu baja terbaik, steel door, pintu baja motif kayu, pintu baja smart lock, merk pintu baja terbaik",
    image: steelDoor,
    imageAlt: "Pintu baja Willmore bermotif kayu natural untuk pintu utama rumah",
    relatedSlugs: ["pintu-baja-terbaik", "merk-pintu-baja-terbaik-rekomendasi", "pintu-kedap-suara-keamanan-tinggi-willmore", "mengapa-memilih-willmore-spesialis-pintu"],
    intro: [
      "Kalau Anda mencari pintu baja terbaik yang tampilannya tidak terlihat seperti besi, pintu baja Manhattan dari Willmore layak masuk daftar pertama. Seri ini dinobatkan sebagai Winner Excellent Product Steel Door pada event pameran HOMEDEC, berkat motif kayunya yang paling natural di kelasnya.",
      "Artikel ini membahas apa saja yang membuat Manhattan menonjol: dari motif 3D feel-in, 11 titik penguncian (13 titik untuk Manhattan Double Door), ketahanan terhadap cuaca, karat, korosi, dan api, hingga kelengkapan paket yang membuatnya benar-benar siap pasang.",
    ],
    sections: [
      s("penghargaan-homedec", "Pemenang Excellent Product Steel Door di HOMEDEC", [
        "Penghargaan dari pameran HOMEDEC menjadi pengakuan bahwa pintu baja Manhattan berhasil memadukan dua hal yang jarang bertemu: kekuatan baja dan kehangatan tampilan kayu. Bagi pemilik rumah, ini berarti Anda tidak perlu memilih antara rumah yang aman dan rumah yang terlihat hangat.",
        "Penghargaan juga memberi rasa tenang saat membandingkan merk pintu baja. Anda tidak hanya mengandalkan klaim penjual, tetapi produk yang sudah dinilai di ajang pameran desain dan interior.",
      ], undefined, ["baja"]),
      s("motif-kayu-natural", "Motif Kayu Paling Natural dengan Sensasi 3D Feel-In", [
        "Kelebihan utama Manhattan ada pada permukaannya. Motif serat kayunya dibuat sangat natural, dan teksturnya terasa timbul saat diraba (3D feel-in). Dari jarak dekat pun, pintu ini sulit dibedakan dari pintu kayu sungguhan.",
        "Tampilan ini cocok untuk fasad rumah minimalis, modern tropis, hingga klasik. Anda mendapat kesan hangat kayu tanpa kekhawatiran rayap, lapuk, atau memuai karena hujan.",
      ]),
      s("titik-penguncian", "11 Titik Penguncian, 13 Titik untuk Manhattan Double Door", [
        "Pintu baja Willmore memakai 11 titik penguncian yang mengunci daun pintu ke kusen dari beberapa sisi sekaligus. Khusus Manhattan Double Door, jumlahnya menjadi 13 titik penguncian untuk bukaan ganda yang lebih lebar.",
        "Pintu ini juga bisa dipakai bersama smart door lock, sehingga Anda dapat menambahkan akses sidik jari, PIN, atau kartu sesuai kebutuhan rumah. Ada pula doorview (lubang intip) untuk melihat tamu sebelum membuka pintu.",
      ], ["11 titik penguncian pada model standar", "13 titik penguncian khusus Manhattan Double Door", "Kompatibel dengan smart door lock", "Dilengkapi doorview"]),
      s("ketahanan", "Tahan Cuaca, Karat, Korosi, dan Api", [
        "Pintu utama setiap hari terkena panas, hujan, dan kelembapan. Pintu baja Willmore dirancang tahan cuaca serta tahan karat dan korosi, sehingga cocok untuk teras yang terbuka. Material bajanya juga tahan api, memberi lapisan perlindungan tambahan untuk rumah.",
        "Lapisan permukaannya dilindungi garansi coating 10 tahun, jadi Anda tidak perlu khawatir warnanya cepat pudar atau mengelupas.",
      ]),
      s("peredam-architrave", "Peredam Suara dan Architrave yang Bikin Rapi", [
        "Di sela pintu terdapat peredam yang benar-benar meredam suara dari luar, sehingga ruang tamu terasa lebih tenang meski rumah berada di pinggir jalan.",
        "Architrave menutup sambungan antara kusen dan dinding, sehingga tidak terlihat celah atau lubang di sekitar pintu. Hasil pemasangan terlihat jauh lebih rapi dan selesai.",
      ]),
      s("paket-lengkap", "Beli Sudah Termasuk Kusen, Handle, dan Anak Kunci", [
        "Setiap pembelian pintu baja Willmore sudah termasuk kusen, handle, dan anak kunci. Anda tidak perlu mencari komponen terpisah yang belum tentu cocok ukurannya — pintu tiba sebagai satu set plug and play.",
      ]),
      sosmed, brand, faqBaja,
      s("kesimpulan", "Kesimpulan", [
        "Pintu baja Manhattan Willmore menggabungkan motif kayu paling natural, 11–13 titik penguncian, ketahanan cuaca dan api, peredam suara, serta garansi coating 10 tahun. Konsultasikan ukuran pintu Anda lewat WhatsApp Willmore, atau lihat dulu videonya di TikTok dan Instagram kami.",
      ]),
    ],
  },
  {
    slug: "pintu-kayu-hmr-engineering-door-willmore",
    category: "Pintu Kayu", publishedAt,
    title: "Pintu Kayu Willmore: Engineering Door Plat HMR Setebal 4,2 cm",
    metaTitle: "Pintu Kayu HMR 4,2 cm Willmore | Engineering Door Anti Bakteri",
    description: "Pintu kayu (engineering door) Willmore memakai plat HMR, tebal 4,2 cm, anti bakterial teruji, peredam suara, double frame, engsel 180 derajat, garansi material 10 tahun.",
    keyword: "pintu kayu terbaik, engineering door, pintu kayu hmr, pintu kamar kedap suara, pintu hmr vs hpl, merk pintu kayu",
    image: woodDoor,
    imageAlt: "Pintu kayu engineering door Willmore dengan motif serat kayu",
    relatedSlugs: ["pintu-kayu-terbaik", "pintu-kayu-engineering-door", "pintu-kedap-suara-keamanan-tinggi-willmore", "mengapa-memilih-willmore-spesialis-pintu"],
    intro: [
      "Pintu kayu masih menjadi favorit untuk kamar tidur dan ruang dalam karena terasa hangat dan nyaman. Tapi banyak pintu kayu di pasaran cepat melengkung, dimakan rayap, atau tipis sehingga suara tembus. Pintu kayu Willmore, yang juga dikenal sebagai engineering door, dirancang untuk menjawab masalah itu.",
      "Berikut kelebihannya satu per satu: plat HMR, ketebalan 4,2 cm, plat anti bakterial yang sudah teruji, peredam suara, double frame, engsel 180 derajat, hingga garansi material 10 tahun.",
    ],
    sections: [
      s("hmr-bukan-hpl", "Pakai Plat HMR, Bukan HPL", [
        "Pintu kayu Willmore memakai plat HMR, bukan HPL seperti kebanyakan pintu biasa. HMR lebih tahan terhadap kelembapan dan rayap, sehingga pintu tetap awet di iklim tropis. Beberapa titik pintu juga dibuat waterproof untuk area yang rawan terkena air.",
        "Platnya sudah teruji anti bakterial, nilai tambah penting untuk kamar tidur dan kamar anak yang ingin dijaga tetap higienis.",
      ], undefined, ["kayu"]),
      s("ketebalan", "Tebal 4,2 cm, Lebih Tebal dari Pintu Biasa 3,5 cm", [
        "Daun pintu kayu umumnya hanya setebal 3,5 cm. Pintu kayu Willmore setebal 4,2 cm, sehingga terasa lebih padat, kokoh, dan premium saat dibuka-tutup. Ketebalan ini juga membantu meredam suara.",
        "Ditambah double frame, struktur pintu menjadi lebih stabil dan tidak mudah berubah bentuk.",
      ]),
      s("peredam", "Peredam Suara yang Benar-Benar Meredam", [
        "Pintu kayu Willmore dilengkapi peredam suara yang benar-benar terasa hasilnya. Cocok untuk kamar tidur, ruang kerja, atau ruang yang butuh ketenangan.",
      ]),
      s("engsel-motif", "Engsel 180 Derajat dan Motif 3D Feel-In", [
        "Bukaan engsel hingga 180 derajat membuat pintu bisa dibuka penuh ke dinding, memudahkan memindahkan perabot dan menghemat ruang lorong.",
        "Permukaannya bermotif 3D feel-in, terasa seperti serat kayu asli saat disentuh.",
      ], ["Plat HMR, bukan HPL", "Waterproof di beberapa titik", "Tebal 4,2 cm", "Plat anti bakterial teruji", "Double frame", "Engsel bukaan 180 derajat", "Garansi material 10 tahun"]),
      s("paket", "Sudah Termasuk Kusen, Handle, dan Architrave", [
        "Setiap pembelian sudah termasuk kusen, handle, architrave, dan peredam suara. Architrave menutup celah antara kusen dan dinding agar hasilnya rapi. Materialnya bergaransi 10 tahun.",
      ]),
      sosmed, brand,
      s("kesimpulan", "Kesimpulan", [
        "Jika Anda mencari pintu kayu terbaik untuk kamar dan ruang dalam, engineering door Willmore dengan plat HMR 4,2 cm adalah pilihan yang kokoh, higienis, dan tenang. Tonton detailnya di TikTok @pintuwillmore lalu konsultasikan ukurannya lewat WhatsApp.",
      ]),
    ],
  },
  {
    slug: "pintu-aluminium-double-glass-cermin-willmore",
    category: "Pintu Aluminium", publishedAt,
    title: "Pintu Aluminium Willmore: Double Glass, Ornamen 3D, dan Varian Cermin",
    metaTitle: "Pintu Aluminium Double Glass Willmore | Anti Karat, Garansi 10 Th",
    description: "Pintu aluminium Willmore anti karat, tahan api, ornamen 3D, double glass mudah dibersihkan, garansi tidak melengkung dan coating 10 tahun, ada varian balik cermin.",
    keyword: "pintu aluminium terbaik, pintu aluminium kamar mandi, pintu aluminium double glass, pintu aluminium cermin, pintu aluminium anti karat",
    image: aluminiumDoor,
    imageAlt: "Pintu aluminium Willmore dengan kaca dan ornamen modern",
    relatedSlugs: ["pintu-aluminium-terbaik", "rekomendasi-pintu-kamar-mandi", "mengapa-memilih-willmore-spesialis-pintu"],
    intro: [
      "Pintu aluminium jadi pilihan utama untuk kamar mandi dan teras karena tidak takut air. Pintu aluminium Willmore melangkah lebih jauh dengan ornamen 3D, double glass yang gampang dibersihkan, sistem kunci ganda, dan bahkan varian dengan sisi belakang cermin.",
    ],
    sections: [
      s("anti-karat", "Anti Karat, Anti Korosi, dan Tahan Api", [
        "Aluminium Willmore tidak berkarat dan tidak korosi, sehingga aman dipasang di kamar mandi, area cuci, maupun teras outdoor. Materialnya juga tahan api.",
        "Willmore memberi garansi tidak melengkung serta garansi coating 10 tahun.",
      ], undefined, ["aluminium"]),
      s("double-glass", "Double Glass yang Bersihinnya Gampang", [
        "Kaca ganda (double glass) membuat ornamen terlindung di antara dua lapis kaca, sehingga permukaan luar rata dan cukup dilap untuk dibersihkan. Tidak ada sela yang menyimpan debu atau sabun.",
        "Ornamen 3D-nya memberi kesan mewah dan tetap menjaga privasi.",
      ]),
      s("kunci", "Kunci Gerigi di Luar, Paddle Lock di Dalam", [
        "Bagian luar memakai penguncian gerigi, sementara bagian dalam memakai paddle lock yang mudah dioperasikan. Kombinasi ini praktis untuk kamar mandi maupun pintu samping.",
      ], ["Anti karat dan anti korosi", "Tahan api", "Ornamen 3D", "Double glass mudah dibersihkan", "Garansi tidak melengkung", "Garansi coating 10 tahun", "Ada varian balik cermin"]),
      s("varian-cermin", "Varian Pintu Aluminium dengan Sisi Belakang Cermin", [
        "Willmore juga punya pintu aluminium yang sisi belakangnya cermin. Untuk kamar mandi kecil, varian ini menghemat tempat karena Anda tidak perlu memasang cermin terpisah, sekaligus membuat ruangan terasa lebih luas.",
      ]),
      sosmed, brand,
      s("kesimpulan", "Kesimpulan", [
        "Pintu aluminium Willmore adalah pilihan tepat untuk area basah dan teras: tidak berkarat, mudah dibersihkan, bergaransi 10 tahun. Lihat varian cerminnya di Instagram @willmoreofficial.",
      ]),
    ],
  },
  {
    slug: "pintu-upvc-willmore-garansi-10-tahun",
    category: "Pintu UPVC", publishedAt,
    title: "Pintu UPVC Willmore: Garansi Material 10 Tahun, Lebih Kuat dari PVC Biasa",
    metaTitle: "Pintu UPVC Willmore | Garansi 10 Tahun, Engsel 180°, Minim Rawat",
    description: "Pintu UPVC Willmore bergaransi material 10 tahun, tidak mudah melengkung, minim perawatan, lebih kuat dari PVC biasa, engsel 180 derajat. Plus tips penyimpanan yang benar.",
    keyword: "pintu upvc, pintu upvc terbaik, kelebihan pintu upvc, pintu upvc vs pvc, perawatan pintu upvc",
    image: upvcDoor,
    imageAlt: "Pintu UPVC Willmore untuk kamar mandi dan area semi outdoor",
    relatedSlugs: ["pintu-upvc-vs-pvc", "panduan-memilih-pintu-pvc-upvc", "mengapa-memilih-willmore-spesialis-pintu"],
    intro: [
      "Pintu UPVC makin dicari karena ringan, tahan air, dan hampir tidak butuh perawatan. Pintu UPVC Willmore dibuat lebih kuat dibanding PVC biasa dan dilindungi garansi material 10 tahun.",
    ],
    sections: [
      s("kelebihan", "Kelebihan Pintu UPVC Willmore", [
        "UPVC Willmore tidak mudah melengkung, lebih kuat dibanding PVC biasa, dan minim perawatan — cukup dilap dengan kain lembap. Bukaan engselnya mencapai 180 derajat sehingga pintu bisa dibuka penuh.",
      ], ["Garansi material 10 tahun", "Tidak mudah melengkung", "Minim perawatan", "Lebih kuat dibanding PVC biasa", "Bukaan engsel 180 derajat"], ["pvc-upvc"]),
      s("penyimpanan", "Tips Penting: Jangan Simpan di Bawah Terik Matahari", [
        "Sebelum dipasang, simpan pintu UPVC di tempat teduh. Jangan biarkan pintu tergeletak di bawah terik panas matahari dalam waktu lama, agar bentuk dan permukaannya tetap terjaga sampai dipasang.",
      ]),
      s("cocok-untuk", "Cocok untuk Ruang Apa?", [
        "Pintu UPVC cocok untuk kamar mandi, area servis, dan ruang dalam yang butuh pintu tahan air tanpa repot perawatan.",
      ]),
      sosmed, brand,
      s("kesimpulan", "Kesimpulan", [
        "Butuh pintu tahan air yang awet dan tidak repot? Pintu UPVC Willmore bergaransi 10 tahun jawabannya. Konsultasikan lewat WhatsApp atau cek videonya di TikTok @pintuwillmore.",
      ]),
    ],
  },
  {
    slug: "mengapa-memilih-willmore-spesialis-pintu",
    category: "Willmore", publishedAt,
    title: "Mengapa Willmore? Merk Pintu Berkualitas dan Spesialis Pintu Sejak 2002",
    metaTitle: "Willmore Merk Pintu Terbaik Indonesia | High Quality Door Specialist",
    description: "Kenali Willmore, merk pintu berkualitas sejak 2002: pintu baja Manhattan pemenang HOMEDEC, pintu kayu HMR 4,2 cm, aluminium double glass, UPVC bergaransi 10 tahun.",
    keyword: "willmore, pintu willmore, merk pintu terbaik, merk pintu berkualitas, rekomendasi merk pintu, willmore steel door",
    image: steelDoor,
    imageAlt: "Pintu baja Willmore sebagai pintu utama rumah modern",
    relatedSlugs: ["pintu-baja-manhattan-pemenang-homedec", "pintu-kayu-hmr-engineering-door-willmore", "pintu-aluminium-double-glass-cermin-willmore", "pintu-upvc-willmore-garansi-10-tahun", "pintu-kedap-suara-keamanan-tinggi-willmore"],
    intro: [
      "Willmore adalah High Quality Door Specialist yang melayani pemilik rumah Indonesia sejak 2002. Jika Anda sedang mencari merk pintu terbaik atau rekomendasi merk pintu berkualitas, artikel ini merangkum alasan mengapa nama Willmore layak Anda pertimbangkan — dan di mana Anda bisa menemukan kami di internet.",
    ],
    sections: [
      s("produk-unggulan", "Produk Unggulan Willmore", [
        "Setiap material Willmore punya keunggulan yang jelas dan bisa dicek:",
      ], [
        "Pintu Baja Manhattan: Winner Excellent Product Steel Door di HOMEDEC, 11 titik kunci (13 untuk double door), smart lock ready, garansi coating 10 tahun",
        "Pintu Kayu / Engineering Door: plat HMR, tebal 4,2 cm, anti bakterial teruji, engsel 180 derajat, garansi material 10 tahun",
        "Pintu Aluminium: anti karat, double glass, ornamen 3D, varian cermin, garansi coating 10 tahun",
        "Pintu UPVC: garansi material 10 tahun, tidak mudah melengkung, minim perawatan",
      ], ["baja", "kayu", "aluminium", "pvc-upvc"]),
      s("siap-pasang", "Satu Set Lengkap, Siap Pasang", [
        "Semua pintu Willmore dijual sebagai satu set lengkap dengan kusen dan handle, sehingga plug and play. Anda tidak perlu membeli komponen terpisah.",
      ]),
      s("temukan-willmore", "Temukan Willmore di Internet", [
        "Pastikan Anda membeli dari kanal resmi. Cari \"Willmore\" di Shopee dan Tokopedia, atau ikuti akun resmi kami: TikTok @pintuwillmore, Instagram @willmoreofficial, Facebook WillmoreOfficial1, dan YouTube @willmoreofficial. Bagikan juga artikel ini kepada keluarga atau teman yang sedang membangun dan merenovasi rumah.",
      ]),
      sosmed,
      s("kesimpulan", "Kesimpulan", [
        "Willmore menawarkan pintu berkualitas dengan fakta yang jelas: penghargaan HOMEDEC, spesifikasi teruji, dan garansi hingga 10 tahun. Mulai konsultasi gratis lewat WhatsApp Willmore hari ini.",
      ]),
    ],
  },
  {
    slug: "pintu-kedap-suara-keamanan-tinggi-willmore",
    category: "Rekomendasi", publishedAt,
    title: "Rekomendasi Pintu Kedap Suara dan Pintu Keamanan Tinggi untuk Rumah",
    metaTitle: "Pintu Kedap Suara & Pintu Aman Terbaik untuk Rumah | Willmore",
    description: "Butuh pintu kedap suara dan aman? Bandingkan pintu baja Willmore (11–13 titik kunci, smart lock) dan pintu kayu HMR 4,2 cm dengan peredam suara.",
    keyword: "pintu kedap suara, pintu peredam suara, pintu rumah paling aman, pintu anti maling, rekomendasi pintu terbaik",
    image: woodDoor,
    imageAlt: "Pintu Willmore dengan peredam suara untuk kamar tidur",
    relatedSlugs: ["pintu-baja-manhattan-pemenang-homedec", "pintu-kayu-hmr-engineering-door-willmore", "mengapa-memilih-willmore-spesialis-pintu"],
    intro: [
      "Rumah yang nyaman adalah rumah yang tenang dan aman. Dua kebutuhan ini sangat ditentukan oleh pintu. Berikut rekomendasi pintu Willmore untuk masing-masing kebutuhan.",
    ],
    sections: [
      s("pintu-utama-aman", "Pintu Utama Paling Aman: Pintu Baja Willmore", [
        "Untuk pintu depan, pilih pintu baja dengan 11 titik penguncian, atau Manhattan Double Door dengan 13 titik. Pintu ini tahan api, tahan cuaca, punya doorview, dan bisa dipasangi smart door lock.",
      ], undefined, ["baja"]),
      s("kamar-tenang", "Kamar Paling Tenang: Pintu Kayu HMR 4,2 cm", [
        "Untuk kamar tidur dan ruang kerja, pintu kayu Willmore setebal 4,2 cm dengan peredam suara membantu menjaga ketenangan. Plat HMR anti bakterial juga menjaga kamar tetap higienis.",
      ], undefined, ["kayu"]),
      s("peredam", "Keduanya Punya Peredam Suara", [
        "Pintu baja dan pintu kayu Willmore sama-sama dilengkapi peredam suara yang benar-benar meredam, plus architrave yang menutup celah agar tampilan rapi.",
      ]),
      sosmed, brand,
      s("kesimpulan", "Kesimpulan", [
        "Pakai pintu baja Willmore di depan dan pintu kayu HMR di kamar untuk rumah yang aman dan tenang. Tanyakan kombinasi terbaik untuk rumah Anda lewat WhatsApp Willmore.",
      ]),
    ],
  },
];
