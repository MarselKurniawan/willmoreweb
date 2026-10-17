import type { Article, ArticleSection } from "@/lib/articles";
import { completeSetNote } from "@/lib/site-content";
import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import aluminiumDoor from "@/assets/aluminium-door.jpg";

// Recorded when this editorial batch was added; never calculated on page load.
const publishedAt = "2026-10-17T03:20:00Z";
const section = (id: string, heading: string, paragraphs: string[], list?: string[], categorySlugs?: string[]): ArticleSection => ({ id, heading, paragraphs, list, categorySlugs });

const sosmedSection = section("media-sosial", "Lihat Contoh Aslinya di Instagram dan TikTok Willmore", [
  "Membaca spesifikasi saja sering belum cukup untuk membayangkan hasil akhir di rumah. Karena itu, sebelum memutuskan, kami sarankan Anda melihat foto dan video pemasangan asli di akun Instagram @willmoreofficial dan TikTok @pintuwillmore. Di sana Anda bisa melihat detail motif, warna, dan tampilan pintu setelah terpasang dari dekat.",
  "Willmore juga aktif di Facebook (WillmoreOfficial1) dan YouTube (@willmoreofficial) untuk konten yang lebih panjang seperti penjelasan produk dan tips perawatan. Jika ada model di media sosial yang Anda sukai, kirimkan tangkapan layarnya saat konsultasi agar tim kami bisa mengarahkan Anda ke produk yang sama.",
]);

export const keunggulanArticles: Article[] = [
  {
    slug: "pintu-baja-terbaik",
    category: "Pintu Baja", publishedAt,
    title: "Pintu Baja Terbaik: Keunggulan, Kriteria Memilih, dan Kesalahan yang Harus Dihindari",
    metaTitle: "Pintu Baja Terbaik untuk Rumah | Keunggulan & Tips Memilih",
    description: "Apa yang membuat pintu baja terbaik? Kenali keunggulan pintu baja Willmore: 11 titik penguncian, tahan air cuaca, motif serat kayu natural, dan satu set siap pasang.",
    keyword: "pintu baja terbaik, pintu baja berkualitas, keunggulan pintu baja, pintu baja rumah, merk pintu baja terbaik",
    image: steelDoor,
    imageAlt: "Pintu baja bermotif serat kayu natural untuk pintu utama rumah",
    relatedSlugs: ["merk-pintu-baja-terbaik-rekomendasi", "rekomendasi-pintu-baja-berkualitas", "pintu-baja-vs-pintu-kayu", "pintu-besi-minimalis-vs-pintu-baja", "panduan-memilih-pintu-baja"],
    intro: [
      "Banyak orang mencari pintu baja terbaik karena pintu utama adalah bagian rumah yang paling sering digunakan sekaligus paling menentukan keamanan. Masalahnya, hampir semua penjual mengklaim produknya yang terbaik. Artikel ini membantu Anda menilai secara objektif: keunggulan apa yang benar-benar penting pada pintu baja, kriteria apa yang perlu diperiksa sebelum membeli, dan kesalahan apa yang paling sering terjadi.",
      "Sebagai gambaran nyata, kami memakai spesifikasi pintu baja Willmore yang bisa Anda periksa langsung di halaman kategorinya. Semua poin di artikel ini merujuk pada fakta produk, bukan klaim peringkat.",
    ],
    sections: [
      section("kenapa-pintu-baja", "Kenapa Pintu Baja Layak Dipertimbangkan", [
        "Pintu baja menggabungkan dua hal yang biasanya sulit didapat sekaligus: kekuatan material dan ketahanan terhadap cuaca. Pintu kayu solid memang kokoh, tetapi membutuhkan perawatan rutin terhadap perubahan cuaca. Pintu baja tidak memiliki masalah pelapukan dan lebih stabil di area yang terkena panas dan hujan bergantian.",
        "Dulu kelemahan pintu baja adalah tampilannya yang kaku dan dingin seperti pintu gudang. Teknologi finishing saat ini mengubah itu. Pintu baja Willmore, misalnya, memakai motif serat kayu yang sangat natural sehingga dari kejauhan sulit dibedakan dengan pintu kayu asli.",
      ]),
      section("keunggulan-utama", "Keunggulan Utama Pintu Baja Willmore", [
        "Jika Anda sedang membandingkan beberapa merek, inilah poin-poin yang membuat pintu baja Willmore masuk kategori pintu baja berkualitas. Setiap poin dapat diverifikasi di halaman spesifikasi.",
      ], [
        "11 titik penguncian untuk keamanan berlapis, bukan satu titik kunci saja.",
        "Tahan air dan cuaca, cocok untuk pintu utama, pintu samping, dan garasi.",
        "Motif serat kayu paling natural, tampilan hangat tanpa perawatan kayu.",
        "Architrave menutup celah kusen dan dinding, hasil pemasangan rapi tanpa lubang terlihat.",
        "Peredam di sela pintu, suara benturan lebih halus saat ditutup.",
        "Satu set lengkap kusen dan handle, siap dipasang.",
      ], ["baja"]),
      section("kriteria", "Kriteria Pintu Baja Terbaik: Checklist Sebelum Membeli", [
        "Gunakan daftar berikut saat membandingkan merek apa pun, bukan hanya Willmore. Merek yang baik akan bisa menjawab semua pertanyaan ini dengan jelas.",
      ], [
        "Berapa jumlah titik pengunciannya? Semakin banyak, semakin sulit dibobol.",
        "Apakah tahan air dan cuaca untuk pemakaian outdoor?",
        "Apakah finishing-nya natural atau terlihat seperti pelat logam?",
        "Apakah termasuk kusen dan handle, atau daun pintu saja?",
        "Apakah ada architrave untuk hasil akhir yang rapi?",
        "Apakah penjual menyediakan layanan konsultasi dan after sales?",
      ]),
      section("kesalahan-umum", "Kesalahan Umum Saat Membeli Pintu Baja", [
        "Kesalahan pertama adalah membandingkan harga tanpa membandingkan isi paket. Harga daun pintu saja tentu lebih murah daripada satu set lengkap kusen dan handle. Pastikan Anda membandingkan paket yang setara agar tidak terkecoh.",
        "Kesalahan kedua adalah mengabaikan detail pemasangan. Celah antara kusen dan dinding yang tidak tertutup akan terlihat setiap hari. Di sinilah architrave berperan: komponen ini menutup sambungan sehingga hasil akhirnya rapi. Kesalahan ketiga, memilih hanya dari katalog tanpa berkonsultasi soal arah buka, ukuran bukaan, dan kondisi lokasi.",
      ]),
      section("untuk-siapa", "Apakah Pintu Baja Cocok untuk Rumah Anda?", [
        "Pintu baja paling cocok sebagai pintu utama dan pintu samping yang membutuhkan keamanan tinggi serta ketahanan cuaca. Untuk pintu kamar tidur yang mengutamakan kehangatan tampilan, pintu kayu bisa jadi alternatif; bandingkan keduanya di artikel pintu baja vs pintu kayu.",
        `${completeSetNote} Artinya, begitu pintu datang, semua komponen yang dibutuhkan untuk pemasangan sudah tersedia dan saling cocok satu sama lain.`,
      ], undefined, ["baja"]),
      sosmedSection,
      section("faq", "FAQ Seputar Pintu Baja Terbaik", [
        "Apakah pintu baja bisa berkarat? Pintu baja Willmore dirancang tahan air dan cuaca untuk pemakaian di area terbuka seperti pintu utama dan garasi.",
        "Apakah pintu baja terlihat seperti pintu gudang? Tidak harus. Pintu baja Willmore memakai motif serat kayu yang sangat natural sehingga tampilannya hangat seperti pintu kayu.",
        "Apakah pembelian sudah termasuk kusen? Ya, setiap pembelian sudah termasuk satu set lengkap kusen dan handle, siap dipasang.",
      ]),
    ],
  },
  {
    slug: "merk-pintu-baja-terbaik-rekomendasi",
    category: "Pintu Baja", publishedAt,
    title: "Merk Pintu Baja Terbaik: Cara Menilai dan Rekomendasi untuk Rumah Anda",
    metaTitle: "Merk Pintu Baja Terbaik & Rekomendasi Pintu Baja | Willmore",
    description: "Panduan memilih merk pintu baja terbaik: cara menilai merek, rekomendasi pintu baja berkualitas, dan hal yang perlu dicek sebelum membeli.",
    keyword: "merk pintu baja, merk pintu baja terbaik, rekomendasi merk pintu baja, rekomendasi pintu baja, pintu baja terbaik",
    image: steelDoor,
    imageAlt: "Detail pintu baja bermotif kayu dengan kusen rapi",
    relatedSlugs: ["pintu-baja-terbaik", "rekomendasi-pintu-baja-berkualitas", "kelebihan-willmore-merk-pintu-berkualitas", "rekomendasi-pintu-utama-rumah", "merk-pintu-terbaik-di-indonesia"],
    intro: [
      "Mencari merk pintu baja terbaik di Indonesia bisa membingungkan karena setiap penjual menyebut produknya yang paling unggul. Cara paling aman adalah menilai merek dari hal-hal yang bisa diperiksa: spesifikasi keamanan, ketahanan cuaca, isi paket pembelian, dan layanan pendampingnya.",
      "Artikel ini merangkum cara menilai merk pintu baja secara objektif, lalu menjelaskan rekomendasi pintu baja Willmore sebagai bahan perbandingan. Tujuannya bukan memaksa Anda memilih satu merek, melainkan memberi alat untuk memutuskan sendiri.",
    ],
    sections: [
      section("cara-menilai", "Cara Menilai Merk Pintu Baja", [
        "Merek yang bisa dipercaya menampilkan spesifikasinya secara terbuka, bukan hanya slogan. Minimal ada empat hal yang harus bisa Anda temukan jawabannya sebelum membeli.",
      ], [
        "Spesifikasi keamanan: jumlah titik penguncian dan jenis kunci.",
        "Ketahanan material: apakah tahan air dan cuaca untuk area outdoor.",
        "Isi paket: apakah termasuk kusen, handle, dan komponen pemasangan.",
        "Layanan: apakah ada konsultasi, pemasangan, dan after sales.",
      ]),
      section("rekomendasi", "Rekomendasi Pintu Baja Willmore", [
        "Willmore adalah spesialis pintu sejak 2002. Pintu bajanya memiliki 11 titik penguncian untuk keamanan berlapis, tahan air dan cuaca, serta motif serat kayu yang sangat natural sehingga cocok untuk fasad rumah modern maupun klasik.",
        "Detail yang sering luput di merek lain juga diperhatikan: architrave menutup celah antara kusen dan dinding agar tidak ada lubang yang terlihat setelah pemasangan, dan peredam di sela pintu membuat tutupan lebih halus. Setiap pembelian berupa satu set lengkap kusen dan handle, siap dipasang.",
      ], undefined, ["baja"]),
      section("perbandingan-material", "Kapan Pintu Baja Lebih Tepat Dibanding Material Lain", [
        "Pintu baja unggul untuk pintu utama, pintu samping, dan garasi karena kombinasi keamanan dan ketahanan cuacanya. Untuk interior yang mengutamakan kehangatan, pintu kayu lebih cocok; untuk kamar mandi, aluminium atau UPVC lebih aman terhadap air.",
        "Banyak rumah memakai material berbeda untuk ruang berbeda, dan itu justru pendekatan yang benar. Satu merek dengan pilihan material lengkap memudahkan Anda mengoordinasikan semuanya dalam satu konsultasi.",
      ], undefined, ["baja", "kayu", "aluminium"]),
      section("cek-sebelum-beli", "Yang Perlu Anda Cek Sebelum Membeli", [
        "Sebelum mentransfer uang, luangkan waktu untuk memverifikasi hal-hal berikut. Penjual yang baik tidak akan keberatan menjawabnya.",
      ], [
        "Minta foto detail produk asli, bukan hanya gambar katalog.",
        "Pastikan paket yang dibandingkan setara: satu set lengkap atau daun pintu saja.",
        "Tanyakan ukuran standar yang tersedia dan kemungkinan ukuran khusus.",
        "Beli melalui kanal resmi: website, WhatsApp resmi, atau toko resmi di Shopee dan Tokopedia.",
      ]),
      sosmedSection,
      section("faq", "FAQ Merk Pintu Baja", [
        "Berapa titik penguncian yang ideal untuk pintu utama? Semakin banyak semakin aman; pintu baja Willmore memiliki 11 titik penguncian.",
        "Apakah pintu baja cocok untuk rumah minimalis? Ya, motif serat kayu natural pada pintu baja Willmore justru banyak dipilih untuk fasad rumah modern dan minimalis.",
        "Di mana membeli pintu baja Willmore? Melalui WhatsApp di halaman kontak, atau toko resmi Willmore di Shopee dan Tokopedia.",
      ]),
    ],
  },
  {
    slug: "pintu-kayu-terbaik",
    category: "Pintu Kayu", publishedAt,
    title: "Pintu Kayu Terbaik dan Engineering Door: Keunggulan, Perbedaan, dan Cara Memilih",
    metaTitle: "Pintu Kayu Terbaik (Engineering Door) | Panduan Memilih Willmore",
    description: "Apa itu engineering door dan kenapa jadi pintu kayu terbaik untuk interior? Kenali keunggulan pintu kayu Willmore: lapisan HMR anti rayap dan tebal 4,2 cm.",
    keyword: "pintu kayu terbaik, engineering door, pintu engineering door, pintu kayu berkualitas, merk pintu kayu terbaik, rekomendasi merk pintu kayu",
    image: woodDoor,
    imageAlt: "Pintu kayu engineering door dengan finishing hangat untuk interior rumah",
    relatedSlugs: ["pintu-kayu-engineering-door", "pintu-baja-vs-pintu-kayu", "model-pintu-kamar-minimalis", "kelebihan-willmore-merk-pintu-berkualitas", "panduan-memilih-pintu-kayu"],
    intro: [
      "Istilah engineering door semakin sering muncul saat orang mencari pintu kayu terbaik. Tidak semua orang paham artinya, dan banyak yang mengira ini sekadar nama lain dari pintu kayu biasa. Padahal, konstruksinya berbeda dan perbedaan itu menentukan ketahanan pintu terhadap rayap, kelembapan, dan perubahan bentuk.",
      "Artikel ini menjelaskan apa itu engineering door, bagaimana membedakannya dari pintu kayu solid dan pintu berlapis HPL, serta keunggulan pintu kayu Willmore yang memakai lapisan HMR dengan ketebalan di atas standar.",
    ],
    sections: [
      section("apa-itu", "Apa Itu Engineering Door?", [
        "Engineering door adalah pintu yang dibangun dari beberapa lapis material kayu olahan yang direkayasa agar stabil, bukan satu papan kayu utuh. Konstruksi berlapis ini membuat pintu lebih tahan terhadap perubahan bentuk akibat suhu dan kelembapan dibanding kayu solid biasa.",
        "Karena konstruksinya direkayasa, kualitas engineering door sangat ditentukan oleh dua hal: lapisan permukaannya dan ketebalannya. Dua hal inilah yang paling perlu Anda tanyakan ke penjual sebelum membeli.",
      ]),
      section("hmr-vs-hpl", "Lapisan HMR vs HPL: Perbedaan yang Menentukan Umur Pintu", [
        "Banyak pintu kayu di pasaran memakai lapisan HPL. Tampilannya memang rapi, tetapi HPL adalah lapisan dekoratif yang ditempel di permukaan, sehingga lebih rentan mengelupas dan kurang tahan terhadap rayap.",
        "Pintu kayu Willmore memakai lapisan HMR, bukan HPL. HMR memberikan ketahanan yang lebih baik terhadap rayap dan kelembapan, sehingga pintu lebih awet untuk pemakaian harian bertahun-tahun. Ini poin penting yang sering tidak dijelaskan penjual, jadi pastikan Anda menanyakannya saat membandingkan merek.",
      ], undefined, ["kayu"]),
      section("ketebalan", "Ketebalan 4,2 cm: Lebih Kuat dari Standar", [
      "Ketebalan standar pintu interior di pasaran umumnya 3,5 cm. Pintu kayu Willmore memiliki ketebalan 4,2 cm, di atas standar tersebut. Perbedaan 0,7 cm ini terasa nyata saat digunakan: pintu lebih berbobot, lebih kokoh saat dibuka tutup, dan lebih baik meredam suara antar ruangan.",
        "Bagi Anda yang sering merasa pintu kamar terasa ringan dan berderit, ketebalan adalah hal pertama yang perlu diperiksa. Pintu yang lebih tebal juga memberi ruang lebih untuk pemasangan handle dan kunci yang kokoh.",
      ]),
      section("keunggulan-ringkas", "Ringkasan Keunggulan Pintu Kayu Willmore", [
        "Berikut poin-poin yang membuat pintu kayu Willmore layak masuk daftar rekomendasi merk pintu kayu Anda.",
      ], [
        "Lapisan HMR, bukan HPL: lebih tahan rayap dan kelembapan.",
        "Ketebalan 4,2 cm, di atas standar umum 3,5 cm: lebih kuat dan kokoh.",
        "Architrave menutup celah kusen dan dinding, hasil akhir rapi.",
        "Nuansa kayu hangat, cocok untuk kamar tidur, ruang kerja, dan interior.",
        "Satu set lengkap kusen dan handle, siap dipasang.",
      ], ["kayu"]),
      section("cara-memilih", "Cara Memilih Pintu Kayu Terbaik untuk Rumah Anda", [
        "Tentukan dulu fungsi ruangnya. Untuk kamar tidur dan ruang kerja, prioritaskan ketebalan dan peredaman suara. Untuk ruang yang lebih lembap, pastikan lapisannya tahan kelembapan. Jangan memilih pintu kayu untuk area yang langsung terkena air seperti kamar mandi; untuk itu, aluminium atau UPVC lebih tepat.",
        "Langkah kedua, verifikasi tiga hal ke penjual: jenis lapisan (HMR atau HPL), ketebalan daun pintu, dan isi paket pembelian. Ketiga jawaban itu cukup untuk membedakan pintu kayu berkualitas dari pintu kayu biasa.",
      ]),
      sosmedSection,
      section("faq", "FAQ Pintu Kayu dan Engineering Door", [
        "Apakah engineering door tahan rayap? Pintu kayu Willmore memakai lapisan HMR yang lebih tahan rayap dibanding lapisan HPL biasa.",
        "Berapa ketebalan pintu kayu yang ideal? Standar umum 3,5 cm; pintu kayu Willmore 4,2 cm sehingga lebih kuat dan kokoh.",
        "Apakah pintu kayu cocok untuk kamar mandi? Tidak disarankan. Untuk area basah, pilih pintu aluminium atau UPVC yang tahan air.",
      ]),
    ],
  },
  {
    slug: "pintu-aluminium-terbaik",
    category: "Pintu Aluminium", publishedAt,
    title: "Pintu Aluminium Terbaik: Keunggulan untuk Teras, Kamar Mandi, dan Rumah Modern",
    metaTitle: "Pintu Aluminium Terbaik Anti Karat | Garansi 10 Tahun Willmore",
    description: "Keunggulan pintu aluminium terbaik: tidak berkarat, garansi 10 tahun tidak berubah warna, cocok untuk teras outdoor dan kamar mandi. Panduan memilih lengkap.",
    keyword: "pintu aluminium terbaik, pintu aluminium, pintu aluminium kamar mandi, pintu aluminium anti karat, merk pintu aluminium terbaik",
    image: aluminiumDoor,
    imageAlt: "Pintu aluminium modern untuk teras dan kamar mandi",
    relatedSlugs: ["pintu-kamar-mandi-aluminium", "rekomendasi-pintu-aluminium-rumah-minimalis", "rekomendasi-pintu-kamar-mandi", "panduan-memilih-pintu-aluminium", "pintu-upvc-vs-pvc"],
    intro: [
      "Pintu aluminium menjadi pilihan utama untuk dua area paling menantang di rumah: teras yang terkena panas dan hujan, serta kamar mandi yang lembap setiap hari. Alasannya sederhana: aluminium tidak berkarat. Tetapi tidak semua pintu aluminium sama kualitasnya, dan artikel ini membantu Anda memilih yang terbaik.",
      "Kami membahas keunggulan pintu aluminium secara umum, kriteria yang perlu diperiksa, dan spesifikasi pintu aluminium Willmore sebagai bahan perbandingan yang bisa Anda verifikasi langsung.",
    ],
    sections: [
      section("keunggulan", "Keunggulan Utama Pintu Aluminium", [
        "Keunggulan paling mendasar adalah ketahanan terhadap korosi. Di area yang sering terkena air, pintu besi bisa berkarat dan pintu kayu bisa lapuk. Aluminium tidak mengalami keduanya, sehingga umur pakainya panjang dengan perawatan minim.",
        "Keunggulan kedua adalah bobotnya yang ringan namun rigid, sehingga engsel lebih awet dan pintu tetap mudah dibuka tutup. Untuk rumah bergaya modern dan minimalis, profil aluminium yang ramping juga memberi tampilan bersih yang sulit dicapai material lain.",
      ], [
        "Tidak berkarat walau sering terkena air.",
        "Ringan, kokoh, dan awet engselnya.",
        "Perawatan minim, cukup dilap berkala.",
        "Profil ramping, cocok untuk rumah modern dan minimalis.",
      ], ["aluminium"]),
      section("garansi", "Garansi 10 Tahun Tidak Berubah Warna", [
        "Masalah umum pintu aluminium murah adalah warna yang memudar atau mengelupas setelah beberapa tahun terkena cuaca dan cairan pembersih. Pintu aluminium Willmore memiliki garansi 10 tahun tidak berubah warna dan sudah teruji, sehingga Anda tidak perlu khawatir tampilannya cepat kusam.",
        "Saat membandingkan merek, tanyakan secara spesifik: apakah garansinya mencakup perubahan warna, berapa lama, dan apa saja ketentuannya. Merek yang berani memberi garansi warna jangka panjang menunjukkan keyakinan pada kualitas finishing-nya.",
      ]),
      section("penggunaan", "Penggunaan Terbaik: Teras, Kamar Mandi, dan Area Servis", [
        "Untuk teras outdoor, pintu aluminium menahan panas dan hujan tanpa perawatan khusus. Untuk kamar mandi, sifat anti karatnya membuat bagian bawah pintu yang sering terkena cipratan air tetap aman bertahun-tahun. Baca panduan khusus kami tentang pintu kamar mandi aluminium untuk pembahasan lebih dalam.",
        "Untuk area semi outdoor yang membutuhkan kunci, pertimbangkan juga UPVC Willmore yang dilengkapi handle kunci. Untuk interior kering dengan anggaran efisien, PVC grade atas bisa menjadi alternatif.",
      ], undefined, ["aluminium", "upvc", "pvc"]),
      section("cara-memilih", "Cara Memilih Pintu Aluminium Terbaik", [
        "Periksa tiga hal ini sebelum membeli, apa pun mereknya: kualitas finishing dan garansi warnanya, ketegasan profil (profil yang terlalu tipis mudah penyok), dan isi paket pembelian. Pintu aluminium Willmore dijual sebagai satu set lengkap kusen dan handle, siap dipasang, sehingga Anda tidak perlu mencari komponen terpisah.",
        "Terakhir, manfaatkan konsultasi sebelum membeli. Kirimkan foto bukaan dan perkiraan ukuran agar tim dapat mengarahkan pilihan yang sesuai dengan kondisi lokasi, termasuk arah buka dan kebutuhan ventilasi.",
      ]),
      sosmedSection,
      section("faq", "FAQ Pintu Aluminium", [
        "Apakah pintu aluminium benar-benar tidak berkarat? Ya, aluminium tidak mengalami korosi seperti besi, sehingga aman untuk area basah dan outdoor.",
        "Berapa lama garansi pintu aluminium Willmore? Garansi 10 tahun tidak berubah warna dan sudah teruji; tanyakan ketentuan lengkapnya saat konsultasi.",
        "Apakah pintu aluminium cocok untuk pintu utama? Pintu utama umumnya membutuhkan keamanan lebih tinggi; pintu baja dengan 11 titik penguncian lebih tepat untuk itu, sementara aluminium ideal untuk teras dan kamar mandi.",
      ]),
    ],
  },
];
