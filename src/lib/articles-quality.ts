import type { Article } from "@/lib/articles";
import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import { getCategory } from "@/lib/site-content";

export const qualityArticles: Article[] = [
  {
    slug: "rekomendasi-pintu-baja-berkualitas",
    category: "Pintu Baja",
    title: "Rekomendasi Pintu Baja Berkualitas: Panduan Memilih untuk Rumah",
    metaTitle: "Rekomendasi Pintu Baja Berkualitas untuk Rumah | Willmore",
    description: "Memilih pintu baja berkualitas: periksa penguncian, ketahanan cuaca, kusen, finishing, dan pemasangan. Kenali spesifikasi pintu baja Willmore.",
    keyword: "rekomendasi pintu baja, pintu baja berkualitas",
    image: steelDoor,
    imageAlt: "Contoh tampilan pintu baja untuk pertimbangan desain pintu utama",
    intro: [
      "Rekomendasi pintu baja yang tepat bukan sekadar memilih pintu dengan tampilan paling tebal atau harga paling tinggi. Untuk rumah, kualitas perlu dilihat dari kesesuaian lokasi, sistem penguncian, ketahanan terhadap cuaca, kelengkapan paket, dan hasil pemasangan. Pintu yang terlihat bagus di foto belum tentu cocok dengan bukaan atau kebutuhan penghuni.",
      "Panduan ini membantu Anda membandingkan pintu baja berkualitas secara lebih terarah. Willmore menjadi salah satu pilihan yang dapat Anda pertimbangkan berdasarkan spesifikasi yang dijelaskan di sini, bukan berdasarkan peringkat atau klaim bahwa satu merek pasti terbaik untuk semua rumah. Siapkan catatan kebutuhan sebelum membandingkan katalog agar keputusan tidak hanya bergantung pada motif permukaan.",
    ],
    sections: [
      { id: "kebutuhan-pintu", heading: "Mulai dari Fungsi dan Lokasi Pintu", paragraphs: [
        "Pintu utama menjadi akses yang paling sering digunakan sekaligus bagian penting dari tampilan fasad. Karena itu, pertimbangan keamanan dan kenyamanan perlu berjalan bersama. Catat apakah pintu berada di bawah teras, terkena hujan secara langsung, atau menghadap area yang ramai. Kondisi tersebut membantu menentukan pertanyaan yang harus diajukan saat konsultasi.",
        "Untuk pintu samping atau akses garasi, perhatikan ruang gerak di sekitar bukaan. Daun pintu tidak boleh menghalangi kendaraan, tangga, atau jalur penghuni. Jika tujuan Anda adalah pintu kamar yang terlindung dari cuaca, bandingkan juga material kayu agar pilihan mengikuti fungsi ruang, bukan hanya preferensi terhadap baja.",
      ] },
      { id: "spesifikasi-willmore", heading: "Spesifikasi Pintu Baja Willmore yang Bisa Dibandingkan", paragraphs: [
        "Pintu baja Willmore memadukan motif serat kayu natural dengan ketahanan air dan cuaca. Detail yang ditawarkan mencakup 11 titik penguncian, architrave untuk menutup celah pemasangan, serta peredam pada sela pintu. Pembelian juga sudah termasuk daun pintu, kusen, dan handle sebagai satu set lengkap siap dipasang.",
        "Gunakan spesifikasi ini sebagai daftar pembanding ketika melihat produk lain. Tanyakan bukan hanya apakah pintu memiliki kunci, tetapi bagaimana sistemnya bekerja; bukan hanya apakah ada kusen, tetapi apakah ukuran dan kelengkapannya sesuai. Informasi yang jelas lebih berguna daripada istilah premium tanpa penjelasan detail.",
      ], list: [...(getCategory("baja")?.specs.map(([label, value]) => `${label}: ${value}`) ?? [])] },
      { id: "penguncian", heading: "Menilai Sistem Penguncian Tanpa Berlebihan", paragraphs: [
        "Sebelas titik penguncian merupakan salah satu detail pintu baja Willmore. Saat berkonsultasi, minta penjelasan cara mengoperasikan handle dan kunci serta bagaimana posisi pengunci bertemu dengan kusen. Pengalaman penggunaan penting karena sistem yang baik tetap harus mudah digunakan penghuni setiap hari.",
        "Jumlah titik kunci bukan jaminan bahwa rumah tidak mungkin dimasuki. Keamanan juga bergantung pada pemasangan, kondisi dinding, kebiasaan mengunci, dan akses lain di rumah. Hindari menilai keamanan hanya dari satu angka. Pastikan pintu dapat menutup dengan normal tanpa harus didorong atau diangkat secara berlebihan.",
      ] },
      { id: "motif-dan-detail", heading: "Motif Kayu, Architrave, dan Peredam: Apa yang Perlu Dilihat?", paragraphs: [
        "Motif serat kayu menghadirkan karakter visual hangat pada pintu baja. Cocokkan motif dengan warna dinding, lantai teras, dan elemen fasad. Foto dapat membantu menyaring pilihan, tetapi tanyakan tampilan produk yang tersedia agar warna atau model yang Anda bayangkan tidak dianggap otomatis tersedia.",
        "Architrave berfungsi menutup celah di sekitar kusen sehingga pertemuan pintu dan dinding terlihat lebih rapi. Detail ini tetap membutuhkan pemasangan yang benar; ia tidak menggantikan pekerjaan meratakan bukaan. Peredam pada sela pintu membantu kenyamanan saat menutup, tetapi tidak sama dengan sertifikasi kedap suara. Jika membutuhkan isolasi suara khusus, tanyakan kemampuan produk secara terpisah.",
      ] },
      { id: "pengukuran", heading: "Pengukuran Sebelum Memilih Model", paragraphs: [
        "Ukur lebar dan tinggi bukaan pada beberapa titik serta catat ketebalan dinding. Bedakan ukuran bukaan tembok dengan ukuran daun pintu: keduanya tidak selalu sama karena kusen dan kebutuhan pemasangan mengambil ruang. Kirim foto bukaan dari depan dan samping agar konsultasi memiliki konteks yang cukup.",
        "Tentukan arah bukaan dengan melihat posisi furnitur, sakelar, dan jalur masuk. Untuk rencana pintu satu daun atau dua daun, konfirmasi model dan ukuran yang tersedia terlebih dahulu. Jangan memesan hanya berdasarkan perkiraan ukuran dari pintu rumah lain, karena kondisi setiap bangunan bisa berbeda.",
      ] },
      { id: "paket-dan-biaya", heading: "Bandingkan Paket Lengkap, Bukan Harga Daun Pintu Saja", paragraphs: [
        "Saat membandingkan penawaran, pastikan komponen yang dihitung setara. Harga daun pintu saja tidak dapat langsung dibandingkan dengan paket yang sudah mencakup kusen dan handle. Periksa juga apakah penawaran memasukkan pekerjaan pemasangan, pengiriman, atau penyesuaian bukaan. Kelengkapan produk dan biaya pekerjaan adalah dua hal berbeda.",
        "Willmore menyediakan satu set lengkap kusen dan handle. Namun, jangan menganggap pemasangan atau pengiriman otomatis gratis. Sampaikan ukuran, lokasi proyek, model, dan kebutuhan pekerjaan agar tim dapat memberikan arahan yang sesuai. Artikel ini tidak mencantumkan angka harga karena penawaran resmi perlu mengikuti produk dan kebutuhan aktual.",
      ] },
      { id: "kesalahan", heading: "Kesalahan yang Perlu Dihindari", paragraphs: [
        "Kesalahan umum adalah memutuskan dari foto, mengabaikan ukuran kusen, atau membandingkan paket berbeda sebagai produk yang setara. Ada juga pembeli yang menganggap istilah tahan cuaca berarti pintu boleh dibiarkan tergenang terus-menerus. Perawatan dan kondisi pemasangan tetap perlu diperhatikan meskipun material memiliki ketahanan air dan cuaca.",
      ], list: ["Konfirmasi model dan ukuran sebelum transaksi.", "Periksa kelengkapan kusen, handle, dan sistem kunci.", "Minta rincian biaya pekerjaan, bukan asumsi dari harga produk.", "Tanyakan panduan perawatan dan dukungan setelah pemasangan.", "Jangan menganggap jumlah titik kunci sebagai jaminan keamanan mutlak."] },
      { id: "faq-baja", heading: "Pertanyaan Umum tentang Rekomendasi Pintu Baja", paragraphs: [
        "Apakah pintu baja cocok untuk pintu utama? Pintu baja Willmore dapat dipertimbangkan untuk pintu utama karena tahan air dan cuaca serta memiliki 11 titik penguncian. Pemilihan akhir tetap perlu menyesuaikan bukaan, arah akses, dan kebutuhan penghuni.",
        "Apakah motif kayu berarti pintunya berbahan kayu? Tidak. Motif serat kayu merupakan tampilan finishing; kategori produknya tetap pintu baja. Jika menginginkan pintu kayu, bandingkan kategori material yang berbeda agar spesifikasinya tidak tertukar.",
        "Apa langkah berikutnya sebelum membeli? Baca spesifikasi kategori baja, catat ukuran bukaan, lalu konsultasikan model yang tersedia. Rekomendasi terbaik adalah pilihan yang dapat dipasang dengan benar dan sesuai kebutuhan rumah, bukan produk yang sekadar memiliki label paling premium.",
      ] },
    ],
  },
  {
    slug: "pintu-kayu-engineering-door",
    category: "Pintu Kayu",
    title: "Pintu Kayu dan Engineering Door: Perbedaan serta Panduan Memilih",
    metaTitle: "Pintu Kayu / Engineering Door: Panduan Memilih | Willmore",
    description: "Pahami istilah engineering door, hal yang perlu ditanyakan tentang konstruksi pintu kayu, serta lapisan HMR dan ketebalan 4,2 cm pada pintu Willmore.",
    keyword: "pintu kayu, engineering door, engineered door",
    image: woodDoor,
    imageAlt: "Contoh tampilan pintu kayu untuk ruang interior rumah",
    intro: [
      "Saat mencari pintu kayu, Anda mungkin menemukan istilah engineering door atau engineered door. Istilah ini sering muncul bersama penjelasan tentang panel, lapisan permukaan, dan konstruksi pintu. Namun, penyebutannya saja belum cukup untuk mengetahui bahan di dalam, ketebalan, atau kesesuaian pintu untuk ruangan tertentu.",
      "Artikel ini menjelaskan pertanyaan yang perlu diajukan sebelum membeli pintu kayu. Untuk produk Willmore, informasi yang sudah dijelaskan adalah lapisan HMR, ketebalan 4,2 cm, architrave, dan paket lengkap kusen serta handle. Komposisi inti, susunan lapisan, atau klasifikasi engineered pada model tertentu perlu dikonfirmasi langsung; jangan menyimpulkannya hanya dari foto atau nama kategori.",
    ],
    sections: [
      { id: "istilah-engineering", heading: "Apa Itu Engineering Door atau Engineered Door?", paragraphs: [
        "Secara umum, engineered door merujuk pada pintu yang dibuat dari kombinasi komponen atau lapisan melalui proses rekayasa, bukan semata-mata satu papan kayu utuh. Istilah engineering door kerap digunakan dalam pencarian dengan maksud serupa. Susunan dan bahan setiap produsen dapat berbeda, sehingga istilah tersebut bukan spesifikasi lengkap maupun standar kualitas tunggal.",
        "Tanyakan bahan rangka, bahan inti, lapisan permukaan, dan bagaimana komponen tersebut disatukan. Pintu yang sama-sama disebut engineered dapat memiliki karakter yang berbeda. Karena itu, perbandingan yang berguna harus memakai informasi konstruksi nyata, bukan menganggap semua pintu dengan istilah tersebut memiliki ketahanan yang identik.",
      ] },
      { id: "kayu-solid", heading: "Pintu Kayu Solid dan Pintu Berlapis: Jangan Menebak dari Motif", paragraphs: [
        "Pintu kayu solid dan pintu berlapis memiliki pendekatan konstruksi yang berbeda. Tampilan motif kayu di permukaan tidak membuktikan bahwa seluruh daun pintu dibuat dari kayu solid. Sebaliknya, adanya beberapa lapisan juga tidak otomatis berarti sebuah pintu berkualitas rendah. Yang perlu dilihat adalah kecocokan bahan dan detail produk dengan kebutuhan penggunaan.",
        "Saat membaca katalog, pisahkan informasi tampilan dari informasi struktur. Warna, motif, dan bentuk panel menjelaskan desain; bahan inti, rangka, dan lapisan menjelaskan konstruksi. Jika katalog belum memuat komposisi lengkap, minta penjelasan sebelum memesan. Cara ini mengurangi risiko salah mengira produk karena istilah pemasaran yang terlalu umum.",
      ] },
      { id: "hmr", heading: "Lapisan HMR pada Pintu Kayu Willmore", paragraphs: [
        "Pintu kayu Willmore menggunakan lapisan HMR, bukan HPL. Informasi produk yang diberikan Willmore menyebut karakter lebih tahan rayap. Tetap gunakan klaim ini secara proporsional: lebih tahan bukan berarti pintu tidak mungkin mengalami masalah pada kondisi apa pun. Perawatan dan kondisi lingkungan masih perlu diperhatikan.",
        "HMR dan HPL tidak sebaiknya dinilai sebagai dua label yang otomatis menentukan seluruh kualitas pintu. Tanyakan fungsi lapisan pada model yang dipilih, jenis finishing, dan perawatan yang disarankan. Artikel ini tidak menyatakan pintu kayu Willmore kedap air, tahan api, atau memiliki sertifikasi tertentu karena informasi tersebut belum tersedia.",
      ] },
      { id: "ketebalan", heading: "Ketebalan 4,2 cm: Detail yang Perlu Dipertimbangkan", paragraphs: [
        "Pintu kayu Willmore memiliki ketebalan 4,2 cm. Ketebalan ini menjadi salah satu pembeda produk, tetapi jangan menjadikannya satu-satunya ukuran kualitas. Konstruksi, kecocokan engsel, keselarasan kusen, dan hasil pemasangan turut memengaruhi bagaimana pintu terasa saat digunakan.",
        "Ketika membandingkan katalog, pastikan angka yang dibandingkan sama-sama mengacu pada ketebalan daun pintu. Jangan tertukar dengan ketebalan dinding atau ukuran kusen. Tanyakan pula komponen yang sudah disertakan agar Anda tidak memilih aksesori tambahan yang tidak cocok dengan ketebalan pintu yang dipesan.",
      ], list: [...(getCategory("kayu")?.specs.map(([label, value]) => `${label}: ${value}`) ?? [])] },
      { id: "lokasi", heading: "Memilih Pintu Kayu untuk Kamar dan Ruang Interior", paragraphs: [
        "Pintu kayu dapat dipertimbangkan untuk kamar tidur, ruang kerja, atau interior yang ingin menampilkan karakter hangat. Mulailah dari fungsi ruangan: apakah akses digunakan sering, apakah membutuhkan privasi, dan apakah ada furnitur dekat jalur bukaan. Desain pintu perlu mendukung aktivitas, bukan mengganggu sirkulasi.",
        "Untuk kamar mandi, teras terbuka, atau area yang sering terkena air, jangan menganggap semua pintu kayu sesuai. Bandingkan aluminium, PVC, atau UPVC sesuai lokasi penggunaan. Jika tetap menginginkan tampilan kayu di area tertentu, konsultasikan model serta batas penggunaannya terlebih dahulu agar pilihan tidak bergantung pada motif semata.",
      ] },
      { id: "ukuran-dan-architrave", heading: "Mengukur Bukaan dan Memahami Architrave", paragraphs: [
        "Catat tinggi, lebar, serta ketebalan dinding di lokasi pemasangan. Ambil ukuran pada beberapa titik untuk mengetahui apakah bukaan sudah rata. Tentukan arah bukaan dengan mempertimbangkan furnitur, jalur berjalan, dan posisi sakelar. Ukuran akhir perlu dikonfirmasi terhadap model pintu serta kusen yang akan digunakan.",
        "Pintu kayu Willmore dilengkapi architrave untuk hasil akhir yang rapi. Bagian ini membantu menutup pertemuan kusen dan dinding, tetapi tidak menggantikan kesiapan bukaan. Kirim foto area pemasangan saat konsultasi agar kebutuhan perapian dinding dan ruang untuk detail penutup bisa dibahas sebelum transaksi.",
      ] },
      { id: "paket", heading: "Paket Lengkap dan Pertanyaan Sebelum Membeli", paragraphs: [
        "Setiap pembelian pintu Willmore sudah termasuk satu set kusen dan handle. Kelengkapan ini memudahkan perencanaan komponen, tetapi biaya pemasangan, pengiriman, dan pekerjaan tambahan tetap harus dikonfirmasi. Jangan menyamakan siap dipasang dengan seluruh pekerjaan otomatis termasuk dalam harga.",
        "Jika Anda mencari engineering door untuk proyek, siapkan daftar kebutuhan yang bisa diperiksa: jumlah unit, fungsi tiap ruang, ukuran bukaan, desain, dan jadwal. Minta informasi konstruksi pada produk yang ditawarkan. Dengan demikian, pilihan didasarkan pada spesifikasi yang disepakati, bukan asumsi bahwa istilah engineered berlaku untuk seluruh katalog.",
      ], list: ["Apa bahan inti dan rangka pada model ini?", "Bagaimana lapisan permukaan dan finishing-nya?", "Untuk lokasi penggunaan apa produk ini disarankan?", "Apa kelengkapan paket dan kebutuhan pemasangannya?", "Apakah ada garansi pada model ini, dan apa syarat tertulisnya?"] },
      { id: "perawatan", heading: "Perawatan dan Pertanyaan Umum", paragraphs: [
        "Gunakan panduan perawatan dari tim produk untuk finishing yang dipilih. Sebagai kebiasaan awal, hindari genangan atau percikan air berkepanjangan, bersihkan dengan kain lembut, dan jangan memakai bahan abrasif tanpa arahan. Jika pintu mulai bergesekan atau handle terasa berat, periksa penyebabnya daripada memaksa daun pintu setiap hari.",
        "Apakah pintu kayu Willmore sudah pasti engineered door? Klasifikasi serta komposisi tiap model perlu dikonfirmasi. Informasi yang tersedia di website adalah lapisan HMR, ketebalan 4,2 cm, architrave, serta paket kusen dan handle; detail tersebut tidak cukup untuk menyimpulkan bahan inti.",
        "Apakah pintu lebih tahan rayap berarti tidak perlu perawatan? Tidak. Kondisi bangunan dan cara penggunaan tetap penting. Sebelum membeli, baca kategori pintu kayu dan panduan perbandingan baja dengan kayu, lalu konsultasikan kebutuhan ruang. Pintu yang tepat adalah pintu dengan spesifikasi jelas, lokasi penggunaan sesuai, dan pemasangan yang benar.",
      ] },
    ],
  },
];