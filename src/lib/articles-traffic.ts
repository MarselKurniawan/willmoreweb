import type { Article, ArticleSection } from "@/lib/articles";
import { completeSetNote } from "@/lib/site-content";
import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import upvcDoor from "@/assets/upvc-door.jpg";
import bathroomDoor from "@/assets/bathroom-door.jpg";

// Recorded when this editorial batch was added; never calculated on page load.
const publishedAt = "2026-10-15T02:12:00Z";
const section = (id: string, heading: string, paragraphs: string[], list?: string[], categorySlugs?: string[]): ArticleSection => ({ id, heading, paragraphs, list, categorySlugs });

export const trafficArticles: Article[] = [
  {
    slug: "pintu-kamar-mandi-aluminium",
    category: "Pintu Aluminium", publishedAt,
    title: "Pintu Kamar Mandi Aluminium: Kelebihan, Tips Memilih, dan Perbandingan dengan UPVC & PVC",
    metaTitle: "Pintu Kamar Mandi Aluminium Anti Karat | Panduan Willmore",
    description: "Panduan pintu kamar mandi aluminium: kenapa tidak berkarat, garansi warna 10 tahun, perbandingan dengan UPVC dan PVC, serta checklist sebelum membeli.",
    keyword: "pintu kamar mandi aluminium, pintu aluminium kamar mandi, pintu kamar mandi anti karat, pintu kamar mandi terbaik",
    image: bathroomDoor, imageAlt: "Pintu kamar mandi untuk area basah di rumah modern",
    relatedSlugs: ["rekomendasi-pintu-kamar-mandi", "panduan-memilih-pintu-aluminium", "pintu-upvc-vs-pvc", "pintu-upvc-terbaik-bisa-dikunci"],
    intro: [
      "Pintu kamar mandi aluminium menjadi salah satu pilihan yang paling banyak dicari karena kamar mandi adalah ruang dengan tantangan paling berat di rumah: cipratan air, uap panas, dan kelembapan yang terjadi setiap hari. Pintu yang salah material bisa cepat menggembung, berjamur, keropos, atau berkarat di bagian bawah.",
      "Artikel ini membahas kapan pintu aluminium tepat untuk kamar mandi, apa yang perlu diperiksa sebelum membeli, dan bagaimana membandingkannya dengan pintu UPVC serta PVC. Semua spesifikasi yang disebut mengacu pada kategori produk Willmore yang dapat Anda cek langsung di halaman spesifikasinya.",
    ],
    sections: [
      section("kenapa-aluminium", "Kenapa Aluminium Cocok untuk Kamar Mandi?", [
        "Masalah terbesar pintu di area basah adalah korosi dan perubahan bentuk. Pintu aluminium Willmore tidak akan berkarat, sehingga bagian bawah pintu yang paling sering terkena air tidak menjadi titik lemah. Selain kamar mandi, karakter ini juga membuatnya cocok untuk pintu teras outdoor.",
        "Hal kedua yang sering dikeluhkan adalah warna pintu yang memudar atau berubah setelah beberapa tahun terkena uap dan cairan pembersih. Pintu aluminium Willmore memiliki garansi 10 tahun tidak berubah warna dan sudah teruji. Tanyakan ketentuan lengkap garansi saat konsultasi agar Anda tahu objek yang dijamin.",
      ], ["Tidak berkarat walau sering terkena air.", "Garansi 10 tahun tidak berubah warna.", "Sudah teruji.", "Satu set lengkap kusen dan handle, siap dipasang."], ["aluminium"]),
      section("masalah-umum", "Masalah Umum Pintu Kamar Mandi yang Perlu Dihindari", [
        "Banyak rumah memakai pintu interior biasa untuk kamar mandi karena tampilannya serasi dengan pintu kamar. Dalam praktiknya, pintu yang tidak dirancang untuk area basah dapat menyerap air dari bagian bawah, mengelupas pada lapisan permukaan, atau menjadi sulit ditutup karena berubah bentuk.",
        "Masalah lain datang dari kusen. Kusen yang tidak cocok dengan daun pintu menciptakan celah, sementara sambungan yang tidak rapi menjadi tempat air dan kotoran mengendap. Karena itu, pilih pintu yang dijual sebagai satu set lengkap dengan kusen dan handle sehingga komponennya saling cocok.",
      ]),
      section("perbandingan", "Aluminium vs UPVC vs PVC untuk Kamar Mandi", [
        "Ketiga material ini sama-sama relevan untuk area basah, tetapi masing-masing punya kelebihan berbeda. Pilih berdasarkan lokasi kamar mandi, kebutuhan kunci, dan anggaran.",
      ], [
        "Aluminium: tidak berkarat, garansi warna 10 tahun, cocok kamar mandi dan teras outdoor.",
        "UPVC: garansi bahan 10 tahun, tidak getas, lentur, tahan keropos, bisa dikunci, cocok semi outdoor.",
        "PVC: grade atas, paling terjangkau di koleksi Willmore, cocok untuk kamar mandi interior.",
      ], ["aluminium", "upvc", "pvc"]),
      section("kapan-pilih", "Kapan Sebaiknya Memilih Pintu Aluminium?", [
        "Pilih aluminium bila kamar mandi Anda sering basah, berada dekat area luar, atau Anda ingin pintu yang warnanya tetap terjaga dalam jangka panjang. Aluminium juga pilihan masuk akal untuk kamar mandi di area teras atau taman yang terkena cuaca.",
        "Jika kamar mandi berada di dalam rumah dan anggaran menjadi prioritas, pintu PVC grade atas bisa menjadi pilihan efisien. Jika Anda membutuhkan pintu yang bisa dikunci untuk area semi outdoor, UPVC Willmore yang dilengkapi handle kunci layak dipertimbangkan.",
      ]),
      section("checklist", "Checklist Sebelum Membeli Pintu Kamar Mandi Aluminium", [
        "Siapkan informasi berikut sebelum meminta penawaran. Data yang lengkap membuat konsultasi lebih cepat dan mengurangi risiko pesanan tidak sesuai bukaan.",
      ], ["Foto bukaan kamar mandi dan area sekitarnya.", "Perkiraan ukuran bukaan untuk diverifikasi.", "Arah buka pintu dan ruang gerak di dalam kamar mandi.", "Apakah area terkena cuaca luar atau hanya interior.", "Kebutuhan kunci dan privasi."]),
      section("perawatan", "Tips Merawat Pintu Kamar Mandi", [
        "Lap permukaan pintu secara berkala dengan kain lembap dan sabun ringan, lalu keringkan. Hindari sikat kasar atau pembersih abrasif yang dapat menggores permukaan. Pastikan ventilasi kamar mandi berfungsi agar uap tidak terus mengendap.",
        `Periksa handle dan engsel sesekali, terutama bila pintu sering dibuka-tutup. ${completeSetNote} Jika ada pertanyaan setelah pemasangan, layanan after sales Willmore siap membantu.`,
      ]),
      section("faq", "FAQ Pintu Kamar Mandi Aluminium", [
        "Apakah pintu aluminium Willmore bisa berkarat? Tidak, pintu aluminium Willmore tidak akan berkarat. Berapa garansinya? Garansi 10 tahun tidak berubah warna, dan sudah teruji.",
        "Apakah pintu aluminium bisa dipakai di teras? Bisa, pintu aluminium Willmore cocok untuk teras outdoor. Bagaimana mengetahui harganya? Harga bergantung pada ukuran, desain, dan pemasangan; kirim kebutuhan Anda melalui halaman kontak atau cek toko resmi di Shopee dan Tokopedia.",
      ]),
    ],
  },
  {
    slug: "pintu-upvc-terbaik-bisa-dikunci",
    category: "Pintu UPVC", publishedAt,
    title: "Pintu UPVC Terbaik: Garansi Bahan 10 Tahun, Tahan Keropos, dan Bisa Dikunci",
    metaTitle: "Pintu UPVC Terbaik Bisa Dikunci, Garansi 10 Tahun | Willmore",
    description: "Kenali pintu UPVC: kelebihan, beda dengan PVC, cocok untuk ruang apa, dan kenapa handle kunci penting. Pintu UPVC Willmore bergaransi bahan 10 tahun.",
    keyword: "pintu upvc, pintu upvc terbaik, pintu upvc kamar mandi, pintu upvc bisa dikunci, kelebihan pintu upvc",
    image: upvcDoor, imageAlt: "Pintu UPVC untuk kamar mandi dan area semi outdoor",
    relatedSlugs: ["pintu-upvc-vs-pvc", "panduan-memilih-pintu-pvc-upvc", "pintu-kamar-mandi-aluminium", "rekomendasi-pintu-kamar-mandi"],
    intro: [
      "Pintu UPVC makin sering dicari sebagai alternatif pintu kayu untuk kamar mandi, dapur, dan area servis. Alasannya sederhana: UPVC tidak menyerap air seperti kayu, perawatannya mudah, dan tampilannya rapi. Namun tidak semua pintu UPVC sama, terutama dalam hal garansi bahan dan ketersediaan handle kunci.",
      "Panduan ini menjelaskan apa itu UPVC, kelebihannya dibanding PVC, ruang yang cocok, serta hal yang perlu diperiksa sebelum memilih pintu UPVC terbaik untuk rumah Anda.",
    ],
    sections: [
      section("apa-itu-upvc", "Apa Itu Pintu UPVC?", [
        "UPVC adalah singkatan dari unplasticized polyvinyl chloride, yaitu jenis PVC yang lebih kaku dan stabil. Di pasaran, UPVC banyak dipakai untuk pintu dan jendela karena tidak mudah lapuk oleh air dan tidak menjadi makanan rayap seperti kayu.",
        "Meski namanya mirip, UPVC dan PVC memiliki karakter dan posisi yang berbeda di koleksi Willmore. UPVC diarahkan untuk interior hingga semi outdoor dengan garansi bahan, sedangkan PVC grade atas menjadi pilihan interior yang paling terjangkau.",
      ]),
      section("kelebihan", "Kelebihan Pintu UPVC Willmore", [
        "Berikut kelebihan pintu UPVC Willmore berdasarkan spesifikasi kategorinya. Poin terakhir sering menjadi pembeda, karena tidak banyak pintu UPVC di pasaran yang dilengkapi handle kunci.",
      ], ["Garansi bahan 10 tahun.", "Tidak getas dan lentur.", "Tahan keropos.", "Dilengkapi handle dan bisa dikunci.", "Cocok untuk interior hingga semi outdoor.", "Satu set lengkap kusen dan handle, siap dipasang."], ["upvc"]),
      section("handle-kunci", "Kenapa Handle Kunci Penting pada Pintu UPVC?", [
        "Banyak pintu UPVC hanya dilengkapi grendel sederhana. Untuk kamar mandi di dalam kamar tidur hal itu mungkin cukup, tetapi untuk area semi outdoor, dapur yang terhubung ke halaman belakang, atau ruang servis, kemampuan untuk dikunci menjadi kebutuhan nyata.",
        "Pintu UPVC Willmore dilengkapi handle kunci sehingga bisa dikunci seperti pintu pada umumnya. Ini memperluas penggunaan UPVC dari sekadar pintu kamar mandi menjadi pintu untuk area yang memerlukan rasa aman tambahan.",
      ]),
      section("upvc-vs-pvc", "Pintu UPVC vs PVC: Mana yang Dipilih?", [
        "Pilih UPVC bila Anda membutuhkan garansi bahan jangka panjang, pintu yang bisa dikunci, atau penggunaan di area semi outdoor. Pilih PVC grade atas bila pintu dipakai di interior dan anggaran ingin ditekan tanpa memakai material murahan.",
        "Keduanya sama-sama dijual sebagai satu set lengkap kusen dan handle. Bandingkan berdasarkan lokasi pintu, bukan hanya harga, agar pintu tetap nyaman dipakai dalam jangka panjang.",
      ], undefined, ["upvc", "pvc"]),
      section("ruang-cocok", "Ruang yang Cocok untuk Pintu UPVC", [
        "Pintu UPVC Willmore cocok untuk ruang yang sering terkena air atau lembap, serta area yang berada di antara dalam dan luar rumah.",
      ], ["Kamar mandi dan toilet.", "Dapur atau area servis.", "Ruang cuci dan jemur.", "Area semi outdoor yang beratap."]),
      section("checklist", "Checklist Memilih Pintu UPVC Terbaik", [
        "Gunakan daftar ini untuk membandingkan penawaran pintu UPVC dari berbagai penjual secara adil.",
      ], ["Apa objek dan durasi garansinya?", "Apakah pintu dilengkapi handle kunci?", "Apakah kusen dan handle termasuk dalam paket?", "Apakah cocok untuk semi outdoor atau hanya interior?", "Apakah pemasangan dan after sales tersedia?"]),
      section("faq", "FAQ Pintu UPVC", [
        "Apakah pintu UPVC Willmore bisa dikunci? Bisa, pintu UPVC Willmore dilengkapi handle kunci. Berapa garansinya? Garansi bahan 10 tahun.",
        "Apakah pintu UPVC tahan rayap? UPVC bukan material kayu sehingga tidak menjadi makanan rayap, dan UPVC Willmore tahan keropos. Di mana membelinya? Hubungi Willmore lewat halaman kontak atau kunjungi toko resmi di Shopee dan Tokopedia.",
      ]),
    ],
  },
  {
    slug: "model-pintu-kamar-minimalis",
    category: "Pintu Kayu", publishedAt,
    title: "Model Pintu Kamar Minimalis: Inspirasi, Material, dan Tips Memilih Pintu Kamar Tidur",
    metaTitle: "Model Pintu Kamar Minimalis & Tips Memilih | Willmore",
    description: "Inspirasi model pintu kamar minimalis, pilihan material, arah buka, dan alasan pintu kayu HMR tebal 4,2 cm lebih kokoh dan tahan rayap untuk kamar tidur.",
    keyword: "pintu kamar, model pintu kamar, pintu kamar minimalis, pintu kamar tidur, pintu kayu kamar",
    image: woodDoor, imageAlt: "Pintu kayu kamar tidur bergaya minimalis",
    relatedSlugs: ["panduan-memilih-pintu-kayu", "pintu-kayu-engineering-door", "merk-pintu-rumah-terbaik-minimalis", "rekomendasi-pintu-terbaik-per-ruangan"],
    intro: [
      "Pintu kamar adalah salah satu elemen interior yang paling sering disentuh setiap hari, tetapi kerap dipilih terakhir dan terburu-buru. Padahal model pintu kamar memengaruhi suasana ruangan, privasi, dan kenyamanan saat dibuka-tutup.",
      "Artikel ini merangkum inspirasi model pintu kamar minimalis, material yang cocok, serta hal teknis seperti arah buka dan ketebalan daun pintu yang sering terlewat.",
    ],
    sections: [
      section("ciri-minimalis", "Ciri Model Pintu Kamar Minimalis", [
        "Gaya minimalis menonjolkan garis bersih, sedikit ornamen, dan warna yang tenang. Pada pintu kamar, ciri ini terlihat dari permukaan polos atau beralur sederhana, handle yang ramping, serta kusen yang rapi menyatu dengan dinding.",
        "Detail kecil seperti architrave sangat berpengaruh. Architrave menutup celah antara kusen dan dinding sehingga sambungan terlihat bersih tanpa lubang, sesuatu yang penting untuk gaya minimalis yang mengandalkan kerapian.",
      ]),
      section("inspirasi", "Inspirasi Model Pintu Kamar", [
        "Berikut beberapa arah desain yang umum dipakai untuk pintu kamar minimalis. Diskusikan pilihan desain yang tersedia saat konsultasi.",
      ], ["Pintu kayu polos dengan warna natural untuk kesan hangat.", "Pintu dengan alur garis horizontal atau vertikal sederhana.", "Pintu bernuansa gelap sebagai aksen di dinding terang.", "Pintu senada dengan lantai kayu atau furnitur kamar."]),
      section("material", "Material Terbaik untuk Pintu Kamar", [
        "Untuk kamar tidur, pintu kayu tetap menjadi favorit karena karakternya hangat. Pintu kayu Willmore memakai lapisan HMR, bukan HPL, sehingga lebih tahan rayap. Ketebalannya 4,2 cm, di atas standar umum 3,5 cm, sehingga terasa lebih kuat dan kokoh.",
        "Jika kamar memiliki kamar mandi dalam, pintu kamar mandinya sebaiknya memakai material untuk area basah seperti aluminium, UPVC, atau PVC, bukan disamakan dengan pintu kamar.",
      ], ["Lapisan HMR, bukan HPL.", "Ketebalan 4,2 cm (standar umum 3,5 cm).", "Lebih tahan rayap.", "Dilengkapi architrave.", "Satu set lengkap kusen dan handle."], ["kayu"]),
      section("arah-buka", "Arah Buka dan Tata Letak Kamar", [
        "Sebelum memilih model, tentukan arah buka pintu. Pintu yang membuka ke arah lemari, meja, atau saklar lampu akan terasa mengganggu setiap hari. Untuk kamar kecil, perhatikan ruang gerak daun pintu agar tidak bertabrakan dengan furnitur.",
        "Catat juga posisi engsel dan sisi handle agar sesuai kebiasaan penghuni. Informasi ini sebaiknya disampaikan sejak awal konsultasi karena memengaruhi pesanan kusen.",
      ]),
      section("tebal-pintu", "Kenapa Ketebalan Pintu Kamar Penting?", [
        "Daun pintu yang lebih tebal umumnya terasa lebih solid saat ditutup dan tidak mudah bergetar. Itulah alasan pintu kayu Willmore dibuat setebal 4,2 cm, lebih tebal dari standar umum 3,5 cm.",
        "Saat membandingkan penawaran pintu kamar, tanyakan ketebalan daun pintu dan jenis lapisannya. Dua pintu yang terlihat mirip di foto bisa sangat berbeda dalam kekokohan dan ketahanan terhadap rayap.",
      ]),
      section("checklist", "Checklist Memilih Pintu Kamar", [
        "Gunakan daftar ini agar pintu kamar Anda tidak hanya cantik, tetapi juga nyaman dipakai.",
      ], ["Gaya interior dan warna yang diinginkan.", "Arah buka dan ruang gerak.", "Ketebalan daun pintu dan jenis lapisan.", "Kelengkapan kusen, handle, dan architrave.", "Ketersediaan pemasangan dan after sales."]),
      section("faq", "FAQ Pintu Kamar", [
        "Pintu apa yang cocok untuk kamar tidur? Pintu kayu cocok untuk nuansa hangat; pintu kayu Willmore berlapis HMR dengan tebal 4,2 cm. Apakah pintu kayu Willmore tahan rayap? Lapisan HMR membuatnya lebih tahan rayap.",
        "Apakah pembelian sudah termasuk kusen? Ya, setiap pembelian sudah termasuk satu set lengkap kusen dan handle, siap dipasang.",
      ]),
    ],
  },
  {
    slug: "pintu-besi-minimalis-vs-pintu-baja",
    category: "Pintu Baja", publishedAt,
    title: "Pintu Besi Minimalis vs Pintu Baja: Mana yang Tepat untuk Pintu Utama?",
    metaTitle: "Pintu Besi Minimalis vs Pintu Baja Motif Kayu | Willmore",
    description: "Mencari pintu besi minimalis? Pahami beda pintu besi dan pintu baja, serta kenapa pintu baja motif kayu dengan 11 titik kunci jadi alternatif pintu utama.",
    keyword: "pintu besi minimalis, pintu besi, model pintu besi, pintu besi rumah, pintu baja minimalis",
    image: steelDoor, imageAlt: "Pintu baja motif serat kayu sebagai pintu utama rumah minimalis",
    relatedSlugs: ["pintu-baja-motif-kayu-harga-spesifikasi", "rekomendasi-pintu-baja-berkualitas", "panduan-memilih-pintu-baja", "rekomendasi-pintu-utama-rumah"],
    intro: [
      "Pintu besi minimalis termasuk pencarian yang sangat populer di Indonesia. Banyak pemilik rumah menginginkan pintu utama yang terasa aman dan kuat, tetapi tetap cocok dengan fasad minimalis. Istilah pintu besi sering dipakai secara umum, padahal produk yang dimaksud bisa berbeda-beda.",
      "Artikel ini menjelaskan cara membedakan pintu besi dan pintu baja, hal yang membuat pintu utama aman, serta mengapa pintu baja motif kayu bisa menjadi alternatif yang memadukan keamanan dan tampilan hangat.",
    ],
    sections: [
      section("istilah", "Pintu Besi dan Pintu Baja: Jangan Hanya Lihat Nama", [
        "Di pasaran, istilah pintu besi dipakai untuk banyak hal, dari pintu teralis, pintu pagar, hingga pintu rumah berbahan logam. Pintu baja sendiri adalah pintu berbahan baja yang dirancang sebagai pintu rumah. Karena istilahnya sering tumpang tindih, tanyakan material, isi paket, dan sistem kunci, bukan hanya mengandalkan nama produk.",
        "Untuk pintu utama, yang Anda butuhkan adalah pintu yang aman, tahan cuaca, dan rapi saat terpasang. Nilai produk dari spesifikasi itu, bukan dari label besi atau baja semata.",
      ]),
      section("keamanan", "Apa yang Membuat Pintu Utama Aman?", [
        "Keamanan pintu tidak hanya ditentukan materialnya, tetapi juga sistem penguncian dan kecocokan dengan kusen. Pintu baja Willmore memiliki 11 titik penguncian untuk keamanan berlapis, dijual sebagai satu set lengkap kusen dan handle sehingga komponennya saling cocok.",
        "Selain kunci, perhatikan celah antara pintu, kusen, dan dinding. Architrave pada pintu baja Willmore menutup celah tersebut sehingga hasil pemasangan rapi, dan peredam di sela pintu menambah kenyamanan saat pintu ditutup.",
      ], undefined, ["baja"]),
      section("tampilan", "Tampilan Minimalis tanpa Kesan Dingin", [
        "Kekhawatiran umum pada pintu logam adalah tampilannya yang kaku. Pintu baja Willmore memakai motif serat kayu yang sangat natural, sehingga fasad minimalis tetap terasa hangat tanpa mengorbankan keamanan.",
        "Motif kayu menjelaskan tampilan, bukan materialnya. Jadi Anda mendapatkan karakter visual kayu dengan sifat baja yang tahan air dan cuaca.",
      ]),
      section("spesifikasi", "Spesifikasi Pintu Baja Willmore", [
        "Berikut ringkasan spesifikasi yang dapat Anda bandingkan dengan pintu besi minimalis lain di pasaran.",
      ], ["Material baja dengan motif serat kayu natural.", "11 titik penguncian.", "Tahan air dan cuaca.", "Architrave dan peredam di sela pintu.", "Satu set lengkap daun pintu, kusen, dan handle."], ["baja"]),
      section("model", "Model Pintu Utama yang Umum Dipilih", [
        "Untuk rumah minimalis, pintu tunggal cocok untuk bukaan standar, sementara pintu ganda memberi kesan lebih megah untuk fasad yang lebar. Pilih warna motif kayu yang serasi dengan lantai teras, kusen jendela, atau aksen fasad.",
        "Diskusikan ukuran bukaan, model, dan arah buka saat konsultasi agar pesanan sesuai kondisi lokasi.",
      ]),
      section("harga", "Bagaimana Membandingkan Harga?", [
        "Harga pintu besi atau baja sangat dipengaruhi ukuran, model, isi paket, dan pemasangan. Penawaran yang hanya mencantumkan daun pintu tidak bisa dibandingkan langsung dengan penawaran satu set lengkap.",
        `${completeSetNote} Kirim foto bukaan dan kebutuhan Anda melalui halaman kontak untuk mendapat arahan, atau cek toko resmi Willmore di Shopee dan Tokopedia.`,
      ]),
      section("faq", "FAQ Pintu Besi Minimalis dan Pintu Baja", [
        "Apakah pintu baja Willmore tahan cuaca? Ya, tahan air dan cuaca. Berapa titik kuncinya? 11 titik penguncian. Apakah tampilannya seperti kayu? Ya, memakai motif serat kayu yang sangat natural.",
        "Apakah cocok untuk rumah minimalis? Cocok sebagai pintu utama, pintu samping, atau pintu garasi rumah modern dan minimalis.",
      ]),
    ],
  },
];
