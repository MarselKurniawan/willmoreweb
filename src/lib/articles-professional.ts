import type { Article, ArticleSection } from "@/lib/articles";
import { categories, completeSetNote } from "@/lib/site-content";
import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import aluminiumDoor from "@/assets/aluminium-door.jpg";
import homepagePhoto from "@/assets/willmore-home-entrance.jpg";

// Recorded when this editorial batch was added; never calculated on page load.
const publishedAt = "2026-10-14T03:33:44Z";
const materialSummary = categories.map((category) => `${category.name}: ${category.intro}`);
const section = (id: string, heading: string, paragraphs: string[], list?: string[], categorySlugs?: string[]): ArticleSection => ({ id, heading, paragraphs, list, categorySlugs });

export const professionalArticles: Article[] = [
  {
    slug: "rekomendasi-merk-pintu-terpercaya-indonesia",
    category: "Rekomendasi", publishedAt,
    title: "Rekomendasi Merk Pintu Terpercaya di Indonesia: Periksa Bukti, Bukan Sekadar Nama",
    metaTitle: "Rekomendasi Merk Pintu Terpercaya di Indonesia | Willmore",
    description: "Cara memilih merk pintu terpercaya dari spesifikasi, garansi, kanal resmi, dan layanan. Kenali pilihan Willmore tanpa peringkat merek yang tidak teruji.",
    keyword: "rekomendasi merk pintu terpercaya di Indonesia, merk pintu terpercaya, merk pintu berkualitas",
    image: woodDoor, imageAlt: "Contoh desain pintu kayu untuk membandingkan pilihan pintu rumah",
    relatedSlugs: ["merk-pintu-berkualitas-rekomendasi-merk-pintu", "produsen-pintu-terbaik-indonesia-cara-menilai", "brand-pintu-terbaik-rumah-modern"],
    intro: [
      "Rekomendasi merk pintu terpercaya di Indonesia sebaiknya dimulai dari bukti yang dapat Anda periksa: kejelasan material, kecocokan penggunaan, isi paket, ketentuan garansi, dan dukungan setelah pembelian. Nama yang sering muncul di iklan dapat menjadi awal pencarian, tetapi belum cukup untuk memastikan sebuah pintu cocok dengan rumah Anda.",
      "Panduan ini membantu Anda menyusun daftar pendek merek secara lebih objektif. Willmore dibahas sebagai salah satu pilihan berdasarkan informasi kategori produknya, bukan sebagai pemenang peringkat nasional. Tidak ada klaim bahwa satu merek pasti paling aman, paling awet, atau terbaik untuk seluruh pembeli tanpa pengujian yang relevan. Tujuannya adalah membantu Anda bertanya dengan tepat sebelum mengeluarkan biaya.",
    ],
    sections: [
      section("arti-terpercaya", "Apa yang Membuat Merk Pintu Layak Dipercaya?", [
        "Merek yang layak dipertimbangkan mampu menjelaskan produk yang dijual secara konsisten. Nama model, material, ukuran, dan aksesori pada katalog seharusnya dapat dicocokkan dengan penawaran. Jika ada informasi berbeda antara foto, deskripsi marketplace, dan percakapan penjualan, mintalah klarifikasi tertulis sebelum membayar. Perbedaan kecil bisa memengaruhi kecocokan kusen atau kelengkapan pemasangan.",
        "Kepercayaan juga berkaitan dengan batas klaim. Istilah premium tidak menjelaskan ketebalan, sistem kunci, maupun cakupan garansi. Penyedia yang terbuka mengenai penggunaan yang disarankan dan hal yang perlu dikonfirmasi memberi Anda dasar keputusan lebih baik daripada janji yang terdengar mutlak. Simpan informasi penting agar dapat dirujuk kembali apabila ada kebutuhan setelah pembelian.",
      ]),
      section("cek-material", "Periksa Spesifikasi Material Sesuai Lokasi", [
        "Mulailah dari ruangan, bukan dari merek. Pintu utama memerlukan pembahasan akses dan penguncian, pintu kamar perlu mempertimbangkan privasi serta tata letak, sedangkan kamar mandi berhubungan dengan air dan kelembapan. Dengan konteks ini, Anda dapat membandingkan penawaran dalam kategori yang sama, bukan mencampurkan pintu interior dengan produk untuk luar ruangan.",
        "Willmore menyediakan lima material dengan karakter berbeda. Gunakan ringkasan di bawah sebagai penyaringan awal, kemudian baca spesifikasi kategori terkait. Foto memperlihatkan desain, tetapi tidak membuktikan ketahanan api atau kemampuan kedap suara. Kebutuhan khusus seperti itu harus ditanyakan bersama dokumentasinya; jangan menyimpulkan kemampuan teknis hanya dari tampilan atau nama material.",
      ], materialSummary, ["baja", "kayu", "aluminium", "pvc", "upvc"]),
      section("garansi-tertulis", "Baca Objek Garansi, Tidak Hanya Durasinya", [
        "Garansi 10 tahun pada satu kategori tidak otomatis berarti semua produk dan semua komponennya dijamin selama durasi yang sama. Anda perlu mengetahui bagian yang dilindungi, kondisi pemakaian, bukti pembelian yang dibutuhkan, serta cara mengajukan klaim. Garansi bahan, warna, aksesori, dan pekerjaan pemasangan merupakan hal berbeda yang perlu dibedakan.",
        "Informasi Willmore menyebut garansi 10 tahun tidak berubah warna untuk aluminium dan garansi bahan 10 tahun untuk UPVC. Tanyakan ketentuan lengkapnya sebelum membeli. Artikel ini tidak memperluas cakupan tersebut ke baja, kayu, PVC, handle, atau instalasi. Ketika membandingkan merk pintu terpercaya, catat setiap objek garansi secara terpisah agar perbandingan tetap setara.",
      ], undefined, ["aluminium", "upvc"]),
      section("kanal-pembelian", "Cocokkan Kanal Resmi, Model, dan Isi Paket", [
        "Saat melihat produk di marketplace, pastikan judul listing merujuk pada material yang sedang Anda cari. Nama toko saja tidak menjawab apa yang diterima. Periksa apakah penawaran mencakup daun pintu, kusen, handle, atau komponen lain. Mintalah rincian apabila satu foto dipakai untuk beberapa pilihan model atau ukuran yang berbeda.",
        `${completeSetNote} Namun, paket lengkap produk bukan keterangan bahwa ongkos kirim, pemasangan, atau perbaikan bukaan otomatis termasuk. Konfirmasikan rincian tersebut melalui penawaran. Website Willmore menautkan Shopee dan Tokopedia untuk membantu Anda menuju kanal yang dicantumkan, lalu mencocokkan kategori serta detail pesanan sebelum membuat keputusan.`,
      ]),
      section("menilai-ulasan", "Gunakan Ulasan sebagai Petunjuk, Bukan Satu-satunya Bukti", [
        "Ulasan yang bermanfaat menjelaskan pengalaman konkret: kecocokan barang dengan pesanan, kondisi saat diterima, proses pemasangan, atau respons terhadap pertanyaan. Perhatikan kapan pengalaman itu terjadi dan apakah produknya sama dengan yang Anda pilih. Peringkat toko tidak selalu menjelaskan mutu setiap model atau kecocokannya dengan lingkungan rumah Anda.",
        "Foto pelanggan dapat membantu menilai proporsi dan detail hasil pemasangan, tetapi jangan menganggap satu foto sebagai bukti semua klaim. Jika produk direkomendasikan kreator atau retailer, bedakan pengalaman pribadi, materi promosi, dan pengujian. Panduan ini tidak memuat testimoni pelanggan atau penghargaan untuk Willmore karena data tersebut tidak disediakan sebagai dasar pembahasan.",
      ]),
      section("layanan", "Nilai Konsultasi dan Dukungan Setelah Pembelian", [
        "Keputusan pintu tidak berhenti pada pemilihan warna. Anda masih perlu mengonfirmasi ukuran bukaan, arah buka, kondisi dinding, dan kesiapan lokasi. Penyedia yang dapat membahas pertanyaan ini membantu mengurangi ketidakpastian. Tanyakan siapa yang dapat dihubungi apabila ada perubahan kebutuhan proyek atau pertanyaan setelah produk diterima.",
        "Layanan Willmore mencakup konsultasi, pemilihan produk, instalasi, dan after sales. Jelaskan kondisi ruang serta pekerjaan yang diharapkan agar cakupannya bisa dibicarakan. Jangan menganggap layanan berarti semua pekerjaan tambahan sudah termasuk atau memiliki biaya yang seragam. Kesepakatan tertulis sebelum membeli jauh lebih berguna daripada mengandalkan asumsi mengenai paket pelayanan.",
      ]),
      section("checklist-kepercayaan", "Checklist Sebelum Memilih Merk Pintu", [
        "Buat catatan per merek dengan kolom yang sama. Apabila salah satu rincian belum ada, tandai perlu konfirmasi, bukan langsung memberi nilai buruk atau mengisi sendiri. Cara ini membantu Anda membandingkan informasi yang tersedia secara adil dan melihat pertanyaan mana yang masih harus diselesaikan sebelum pembelian.",
      ], ["Material dan lokasi penggunaan dijelaskan.", "Model, ukuran, arah buka, dan isi paket sudah cocok.", "Objek garansi dan prosedur klaim dipahami.", "Biaya produk dan pekerjaan tambahan dipisahkan.", "Kanal konsultasi dan dukungan setelah pembelian diketahui."]),
      section("faq", "Pertanyaan Umum tentang Merk Pintu Terpercaya", [
        "Apakah merek paling terkenal pasti tepat? Belum tentu. Popularitas tidak menggantikan pemeriksaan model dan fungsi. Apakah harga tinggi menjamin kualitas? Harga harus dinilai bersama material, kelengkapan, dan layanan. Perbandingan yang hanya memakai angka awal berisiko melewatkan komponen atau pekerjaan yang belum termasuk.",
        "Apakah Willmore layak masuk daftar pertimbangan? Anda dapat menilainya dari lima kategori pintu, spesifikasi yang dicantumkan, serta layanan yang tersedia. Langkah berikutnya adalah menentukan ruang, membaca kategori terkait, lalu menyampaikan ukuran dan kebutuhan kepada tim. Keputusan akhir sebaiknya berdasarkan penawaran yang jelas, bukan sekadar label merk terbaik.",
      ]),
    ],
  },
  {
    slug: "brand-pintu-terbaik-rumah-modern", category: "Rekomendasi", publishedAt,
    title: "Brand Pintu Terbaik untuk Rumah Modern: Menyatukan Desain, Material, dan Fungsi",
    metaTitle: "Brand Pintu Terbaik untuk Rumah Modern | Willmore",
    description: "Pilih brand pintu untuk rumah modern berdasarkan tampilan fasad, fungsi ruang, material, dan detail pemasangan. Bandingkan lima pilihan material Willmore.",
    keyword: "brand pintu terbaik untuk rumah modern, brand pintu terbaik, pintu rumah modern",
    image: homepagePhoto, imageAlt: "Referensi fasad rumah modern dengan pintu ganda motif kayu pada malam hari",
    relatedSlugs: ["merk-pintu-rumah-terbaik-minimalis", "rekomendasi-pintu-terbaik-per-ruangan", "rekomendasi-merk-pintu-terpercaya-indonesia"],
    intro: [
      "Brand pintu terbaik untuk rumah modern adalah pilihan yang mampu memenuhi fungsi ruang sekaligus menyatu dengan rancangan rumah. Untuk akses utama, Anda mungkin mengutamakan penguncian dan tampilan fasad. Untuk interior, hubungan pintu dengan lantai, dinding, serta perabot dapat menjadi pertimbangan yang lebih dominan. Karena itu, jawabannya tidak selalu satu merek atau satu material untuk seluruh rumah.",
      "Artikel ini membahas cara mengubah inspirasi visual menjadi keputusan produk yang dapat diperiksa. Fokusnya adalah koordinasi desain dan fungsi, bukan daftar peringkat brand tanpa dasar. Willmore menjadi contoh pilihan spesialis pintu dengan kategori baja, kayu, aluminium, PVC, dan UPVC; model aktual, ukuran, serta pilihan finishing tetap perlu dikonfirmasi saat konsultasi.",
    ],
    sections: [
      section("arah-desain", "Mulai dari Karakter Rumah, Bukan Foto Pintu Saja", [
        "Rumah modern dapat memakai banyak pendekatan, dari garis sederhana sampai perpaduan tekstur yang lebih ekspresif. Pilih beberapa elemen yang ingin dipertahankan: warna dinding, karakter lantai, ritme jendela, dan bentuk bukaan. Dengan acuan ini, Anda dapat menilai apakah pintu menjadi aksen atau justru bagian yang tenang di antara elemen lain.",
        "Foto katalog membantu menyaring selera, tetapi kondisi pencahayaan, sudut foto, dan layar dapat memengaruhi tampilan warna. Mintalah foto detail atau contoh finishing yang tersedia sebelum menetapkan pilihan. Gambar dalam artikel ini merupakan referensi visual, bukan bukti bahwa setiap desain, proporsi, atau ukuran yang terlihat tersedia sebagai model siap pesan.",
      ]),
      section("pintu-utama", "Pintu Utama: Seimbangkan Fasad dan Penguncian", [
        "Pintu utama merupakan titik pertemuan antara tampilan rumah dan akses sehari-hari. Jangan memilih hanya karena motifnya cocok. Pertimbangkan area masuk, arah buka, lintasan orang, dan posisi furnitur di sisi dalam. Bukaan yang tampak proporsional dari luar tetap perlu diperiksa bersama kondisi ruang agar penggunaan pintu tidak mengganggu aktivitas penghuni.",
        "Pintu baja Willmore dapat dipertimbangkan untuk akses utama dengan motif serat kayu natural, ketahanan air dan cuaca, serta 11 titik penguncian. Architrave membantu menutup celah di sekitar kusen, dan peredam pada sela pintu menjadi bagian detail produknya. Sistem kunci tersebut tidak berarti jaminan rumah bebas pembobolan; kondisi kusen dan pemasangan tetap perlu diperhatikan.",
      ], undefined, ["baja"]),
      section("interior", "Pintu Interior: Jaga Hubungan dengan Material Ruang", [
        "Untuk kamar tidur atau ruang kerja, mulai dari privasi, pola sirkulasi, dan tampilan interior. Anda tidak harus menyamakan materialnya dengan pintu utama. Menggunakan keluarga warna atau detail handle yang selaras dapat menciptakan hubungan visual meskipun kebutuhan bahan tiap ruang berbeda. Kesesuaian tersebut perlu dibahas berdasarkan pilihan produk yang benar-benar tersedia.",
        "Pintu kayu Willmore menggunakan lapisan HMR, bukan HPL, dengan ketebalan 4,2 cm serta architrave. Informasi produknya menyebut lebih tahan rayap. Jangan menafsirkan spesifikasi itu sebagai sertifikasi kedap suara atau ketahanan air untuk semua lokasi. Jika kebutuhan ruangan memerlukan kemampuan khusus, tanyakan dokumentasi dan kesesuaian model sebelum memasukkannya ke rencana pembelian.",
      ], undefined, ["kayu"]),
      section("basah-outdoor", "Tampilan Modern Harus Tetap Sesuai Area Basah", [
        "Pintu yang terlihat serasi dengan desain rumah belum tentu menjadi pilihan tepat untuk setiap lingkungan. Kamar mandi, area servis, dan teras memerlukan pembahasan paparan air, kelembapan, serta posisi pemasangan. Catat kondisi aktualnya: apakah terkena percikan, terlindung atap, atau langsung berhadapan dengan cuaca. Deskripsi lokasi yang konkret lebih membantu daripada hanya menyebut rumah modern.",
        "Aluminium Willmore ditujukan antara lain untuk kamar mandi dan teras outdoor, dengan informasi tidak berkarat serta garansi warna 10 tahun. UPVC memiliki garansi bahan 10 tahun dan dapat dikunci untuk interior hingga semi-outdoor. PVC grade atas menjadi pilihan interior. Cakupan ini berbeda, jadi jangan memindahkan klaim outdoor atau garansi dari satu material ke seluruh koleksi.",
      ], undefined, ["aluminium", "upvc", "pvc"]),
      section("detail-desain", "Detail Kusen dan Handle Mengubah Hasil Akhir", [
        "Sering kali foto inspirasi menonjolkan daun pintu, padahal hasil akhir juga dipengaruhi kusen, sambungan ke dinding, dan handle. Periksa lebar area sekitar bukaan, posisi sakelar, serta pertemuan dengan lantai. Detail ini membantu tim membahas kesiapan lokasi dan mencegah keputusan desain yang bertabrakan dengan kondisi bangunan.",
        `${completeSetNote} Tetap cocokkan dimensi komponen dan arah penggunaan dengan model yang dipilih. Architrave bukan berarti semua kondisi bukaan dapat tertutup tanpa pekerjaan tambahan. Tanyakan apakah dinding perlu dirapikan, lantai masih akan berubah, atau ada komponen lain yang diperlukan agar perkiraan hasil akhir lebih realistis.`,
      ]),
      section("teknologi", "Jika Menginginkan Smart Lock, Konfirmasikan Kompatibilitas", [
        "Sebagian pemilik rumah modern ingin menambahkan kunci digital. Jika ini termasuk kebutuhan Anda, sampaikan sejak awal, bukan setelah produk terpasang. Kompatibilitas perlu dibahas berdasarkan model pintu, konstruksi, ruang aksesori, dan ketentuan pemasangan. Keberadaan handle kunci pada suatu pintu tidak otomatis menjelaskan dukungan terhadap semua perangkat tambahan.",
        "Artikel ini tidak menyatakan bahwa seluruh pintu Willmore mendukung smart lock karena informasi kompatibilitas belum tersedia. Minta arahan dan ketentuan yang relevan sebelum membeli perangkat. Cara yang sama berlaku untuk aksesori khusus lainnya: tentukan kebutuhan, tanyakan produk yang cocok, lalu pastikan perubahan tidak dilakukan hanya berdasarkan perkiraan dari foto.",
      ]),
      section("brief-rumah", "Siapkan Brief Singkat untuk Memilih Brand Pintu", [
        "Brief sederhana menghubungkan keinginan visual dengan kebutuhan teknis. Bawa foto fasad dan interior, lalu jelaskan lokasi setiap pintu. Jika rumah masih dikerjakan, beri tahu apakah ukuran bukaan dan ketinggian lantai sudah final. Untuk renovasi, jelaskan komponen lama yang akan dipertahankan agar penawaran tidak disusun dengan asumsi yang keliru.",
      ], ["Foto area masuk dan ruang yang akan memakai pintu.", "Daftar fungsi ruang serta paparan air atau cuaca.", "Ukuran bukaan sebagai bahan diskusi, bukan ukuran pesanan final tanpa verifikasi.", "Arah buka, posisi furnitur, dan kebutuhan aksesori.", "Prioritas visual, kebutuhan pemasangan, serta anggaran proyek."]),
      section("faq-modern", "FAQ: Memilih Pintu untuk Rumah Modern", [
        "Apakah semua pintu harus sama? Tidak. Material dapat berbeda sesuai ruang, sementara hubungan visual dijaga melalui rancangan yang konsisten. Apakah motif kayu hanya cocok untuk rumah klasik? Motif dapat dipadukan dengan elemen modern; kecocokannya perlu dinilai bersama fasad dan produk aktual, bukan hanya berdasarkan label gaya.",
        "Bagaimana menentukan brand yang tepat? Bandingkan kemampuan menjelaskan spesifikasi, pilihan yang sesuai ruang, isi paket, dan layanan. Willmore menyediakan konsultasi hingga after sales untuk membahas kebutuhan tersebut. Mulai dari kategori yang paling relevan, kemudian susun pilihan per ruang agar hasilnya bukan sekadar menarik di foto, tetapi juga sesuai penggunaan rumah.",
      ]),
    ],
  },
  {
    slug: "produsen-pintu-terbaik-indonesia-cara-menilai", category: "Rekomendasi", publishedAt,
    title: "Produsen Pintu Terbaik di Indonesia: Cara Menilai Material, Mutu, dan Penawaran",
    metaTitle: "Produsen Pintu Terbaik di Indonesia: Cara Menilai | Willmore",
    description: "Panduan menilai produsen dan penyedia pintu dari dokumen spesifikasi, sampel, garansi, serta penawaran proyek tanpa mengandalkan klaim terbaik semata.",
    keyword: "produsen pintu terbaik di Indonesia, produsen pintu, supplier pintu berkualitas",
    image: steelDoor, imageAlt: "Contoh pintu baja sebagai referensi pemeriksaan spesifikasi dalam pengadaan pintu",
    relatedSlugs: ["rekomendasi-merk-pintu-terpercaya-indonesia", "merk-pintu-berkualitas-rekomendasi-merk-pintu", "pintu-baja-motif-kayu-harga-spesifikasi"],
    intro: [
      "Untuk menilai produsen pintu terbaik di Indonesia, gunakan kriteria yang dapat dibandingkan: spesifikasi material, kecocokan penggunaan, konsistensi model, kejelasan paket, dan dukungan proyek. Klaim terbesar atau terbaik tidak cukup apabila pembeli belum mengetahui produk apa yang akan dikirim dan bagaimana hasilnya diperiksa. Pendekatan ini berguna untuk renovasi rumah maupun pengadaan beberapa unit.",
      "Panduan ini tidak menyusun peringkat pabrik nasional dan tidak menyatakan Willmore memiliki fasilitas produksi tertentu. Willmore dibahas sebagai spesialis serta penyedia pilihan pintu berdasarkan informasi yang tersedia. Bedakan identitas produsen, pemegang merek, distributor, dan penjual sebelum membandingkan kemampuan masing-masing; peran yang berbeda dapat menghasilkan layanan dan tanggung jawab yang berbeda pula.",
    ],
    sections: [
      section("identitas-penyedia", "Bedakan Produsen, Brand, Distributor, dan Penjual", [
        "Produsen berkaitan dengan pihak yang membuat produk, sedangkan merek menjadi identitas yang dikenali pembeli. Distributor dan penjual dapat menyalurkan produk tanpa melakukan seluruh proses pembuatannya. Karena itu, tanyakan peran penyedia pada produk yang ditawarkan. Nama brand di katalog tidak otomatis membuktikan kepemilikan pabrik, kapasitas produksi, atau asal setiap komponen.",
        "Untuk kebutuhan pengadaan, jelaskan siapa yang menerbitkan penawaran, siapa yang menangani pemesanan, dan ke mana pertanyaan setelah pembelian diarahkan. Informasi ini membantu Anda memahami alur komunikasi. Jika proyek mensyaratkan asal produk, sertifikasi, atau dokumen perusahaan tertentu, mintalah dokumen yang relevan dan cocokkan dengan model; jangan menganggapnya tersedia hanya dari profil pemasaran.",
      ]),
      section("spesifikasi-pengadaan", "Susun Spesifikasi Sebelum Meminta Penawaran", [
        "Penawaran sulit dibandingkan apabila permintaan awal hanya menyebut pintu bagus. Buat daftar lokasi, material yang dipertimbangkan, ukuran bukaan, arah penggunaan, dan kelengkapan. Untuk beberapa unit, beri kode setiap bukaan agar perubahan satu ruang tidak tertukar dengan ruang lain. Pastikan ukuran yang belum final diberi keterangan sebagai perkiraan, bukan pesanan pasti.",
        "Bandingkan spesifikasi yang sama terlebih dahulu. Pintu baja dengan detail penguncian tertentu tidak setara dengan pintu interior yang kebutuhan utamanya berbeda. Kelima kategori Willmore dapat membantu memetakan kebutuhan berdasarkan ruang. Baca halaman kategorinya untuk menyusun pertanyaan yang tepat, kemudian konfirmasi pilihan model serta ukuran sebelum menerima penawaran final.",
      ], materialSummary, ["baja", "kayu", "aluminium", "pvc", "upvc"]),
      section("sampel-detail", "Periksa Sampel atau Foto Detail secara Terarah", [
        "Jika sampel atau produk contoh dapat diperiksa, amati detail yang relevan: finishing, pertemuan komponen, gerak buka tutup, dan kecocokan aksesori. Catat apa yang benar-benar Anda lihat. Foto resolusi tinggi membantu pemeriksaan visual, tetapi tidak menggantikan pengujian untuk kebutuhan teknis khusus seperti ketahanan api atau performa akustik.",
        "Jangan mencoba menyimpulkan mutu inti atau ketebalan komponen tersembunyi dari tampilan luar. Mintalah spesifikasi atau dokumentasi yang sesuai. Ketebalan pintu kayu Willmore tercantum 4,2 cm, sedangkan spesifikasi baja mencantumkan 11 titik penguncian. Kedua informasi itu menjelaskan atribut berbeda; keduanya tidak boleh diubah menjadi kesimpulan bahwa setiap produk memiliki performa yang sama.",
      ]),
      section("penawaran-setara", "Pisahkan Produk dari Pekerjaan dan Biaya Tambahan", [
        "Harga awal yang terlihat lebih rendah mungkin hanya mencakup daun pintu. Bandingkan isi paket secara rinci sebelum menilai penawaran paling hemat. Komponen yang tidak disertakan dapat memerlukan pembelian atau pekerjaan lain. Untuk proyek renovasi, tanyakan juga apakah pelepasan pintu lama dan perapian bukaan menjadi bagian pekerjaan yang dibicarakan.",
        `${completeSetNote} Keterangan itu menjelaskan kelengkapan produk, bukan otomatis semua ongkos proyek. Pisahkan harga produk, pengiriman, instalasi, dan pekerjaan di lokasi pada catatan perbandingan. Artikel ini tidak mencantumkan angka harga karena daftar harga resmi untuk kebutuhan tersebut belum tersedia. Mintalah penawaran berdasarkan kondisi dan jumlah unit aktual.`,
      ]),
      section("rencana-proyek", "Konfirmasikan Jadwal dan Kesiapan Lokasi", [
        "Untuk pengadaan, waktu penerimaan produk dan kesiapan lokasi perlu dibicarakan bersama. Dinding, lantai, dan pekerjaan lain yang belum selesai dapat mengubah kebutuhan pemasangan. Jangan menganggap produk yang terlihat di katalog pasti tersedia untuk jumlah atau jadwal yang Anda perlukan. Tanyakan ketersediaan dan proses pemesanan untuk model yang sudah dipilih.",
        "Willmore menyediakan layanan konsultasi hingga instalasi, tetapi artikel ini tidak menetapkan waktu produksi, kapasitas, wilayah pengiriman, atau jadwal proyek. Semua rincian itu perlu dikonfirmasi melalui penawaran. Jika ada beberapa tahap pekerjaan, jelaskan prioritas bukaan agar diskusi dapat mempertimbangkan kebutuhan rumah tanpa membuat asumsi mengenai waktu penyelesaian.",
      ]),
      section("garansi-dokumen", "Nilai Garansi dan Bukti untuk Kebutuhan Khusus", [
        "Objek garansi lebih penting daripada durasi yang dibaca terpisah. Pada informasi Willmore, aluminium mempunyai garansi warna 10 tahun dan UPVC garansi bahan 10 tahun. Minta ketentuan lengkap, bukti pembelian yang diperlukan, serta alur pertanyaan atau klaim. Jangan menganggap semua aksesori dan pekerjaan pemasangan memiliki cakupan yang sama.",
        "Apabila proyek meminta sertifikasi tertentu, periksa dokumen untuk produk atau model yang relevan, termasuk cakupan dan identitas penerbitnya. Panduan ini tidak mengklaim Willmore mempunyai ISO, TKDN, sertifikasi tahan api, atau penghargaan tertentu. Mengosongkan informasi yang belum terbukti lebih tepat daripada menyisipkan label agar penawaran tampak unggul.",
      ]),
      section("penerimaan-produk", "Siapkan Pemeriksaan saat Produk Diterima", [
        "Gunakan daftar pesanan sebagai acuan pemeriksaan penerimaan. Cocokkan kode model, jumlah unit, komponen, dan kondisi yang dapat diamati. Dokumentasikan apabila ada perbedaan, lalu tanyakan melalui jalur yang disepakati. Pemeriksaan ini membantu komunikasi, bukan pengganti penilaian teknis ketika proyek mensyaratkan metode uji khusus.",
      ], ["Cocokkan model dan jumlah dengan pesanan.", "Periksa kelengkapan kusen dan handle sesuai paket.", "Amati kondisi finishing dan komponen yang terlihat.", "Simpan dokumen pesanan dan foto yang relevan.", "Konfirmasikan ketidaksesuaian sebelum melanjutkan pekerjaan yang terpengaruh."]),
      section("faq-produsen", "FAQ: Memilih Produsen atau Penyedia Pintu", [
        "Apakah produsen langsung selalu pilihan terbaik? Tidak selalu; peran penyedia perlu dinilai bersama kebutuhan, akses konsultasi, dan tanggung jawab yang jelas. Apakah kapasitas besar menjamin cocok untuk rumah kecil? Kecocokan model serta penawaran tetap perlu diperiksa. Kapasitas bukan pengganti pemilihan material yang benar.",
        "Bagaimana memulai dengan Willmore? Kirim daftar bukaan, fungsi ruang, foto lokasi, dan prioritas material. Gunakan informasi kategori sebagai awal diskusi, lalu mintalah rincian yang masih belum ada. Dengan cara ini, pencarian produsen pintu terbaik berubah menjadi proses penilaian yang bisa dipertanggungjawabkan, bukan sekadar memilih nama yang paling sering muncul.",
      ]),
    ],
  },
  {
    slug: "rekomendasi-pintu-terbaik-per-ruangan", category: "Rekomendasi", publishedAt,
    title: "Rekomendasi Pintu Terbaik per Ruangan: Utama, Kamar, Kamar Mandi, dan Teras",
    metaTitle: "Rekomendasi Pintu Terbaik per Ruangan | Willmore",
    description: "Bandingkan pintu untuk akses utama, kamar, kamar mandi, dan teras. Pilih baja, kayu, aluminium, PVC, atau UPVC sesuai fungsi dan kondisi ruangan.",
    keyword: "rekomendasi pintu terbaik per ruangan, pintu utama, pintu kamar, pintu kamar mandi, pintu teras",
    image: aluminiumDoor, imageAlt: "Contoh pintu aluminium untuk referensi pemilihan material sesuai ruangan",
    relatedSlugs: ["rekomendasi-pintu-utama-rumah", "rekomendasi-pintu-kamar-mandi", "pintu-kayu-engineering-door"],
    intro: [
      "Rekomendasi pintu terbaik per ruangan tidak harus menghasilkan satu material untuk seluruh rumah. Sebagai awal, pertimbangkan baja untuk akses utama, kayu untuk interior seperti kamar, aluminium untuk kamar mandi atau teras outdoor, UPVC untuk interior hingga semi-outdoor, dan PVC grade atas untuk kebutuhan interior. Pilihan akhirnya tetap perlu menyesuaikan kondisi lokasi dan model produk.",
      "Panduan ini memetakan fungsi ruang agar Anda tidak membeli hanya berdasarkan motif atau harga awal. Spesifikasi Willmore menjadi contoh yang dapat ditelusuri melalui halaman kategori. Ketika sebuah kebutuhan belum mempunyai informasi teknis, seperti performa kedap suara atau ukuran akses khusus, konfirmasikan secara terpisah. Nama ruangan saja belum cukup untuk menetapkan seluruh detail pesanan.",
    ],
    sections: [
      section("peta-kebutuhan", "Catat Fungsi, Air, Cuaca, dan Pola Akses", [
        "Buat daftar seluruh pintu yang dibutuhkan, kemudian catat kondisi setiap lokasi. Pintu kamar mandi dengan percikan langsung memiliki konteks berbeda dari pintu ruang servis yang kering. Teras yang terlindung atap juga tidak sama dengan akses yang terkena hujan langsung. Deskripsi sederhana ini membantu Anda menyaring material sebelum membahas model.",
        "Tambahkan informasi mengenai pengguna dan sirkulasi. Apakah pintu dilalui setiap hari, dekat furnitur, atau berhadapan dengan jalur sempit? Perhatikan arah buka dan ruang geraknya. Ukuran bukaan harus diperiksa bersama kondisi lantai serta dinding, bukan diperkirakan dari foto. Untuk kebutuhan aksesibilitas, sampaikan kebutuhan spesifik agar dapat dibahas berdasarkan rancangan rumah.",
      ]),
      section("utama", "Pintu Utama: Mulai dari Penguncian dan Fasad", [
        "Akses utama berhubungan dengan keamanan dan aktivitas keluar masuk. Pilih pintu dengan mempertimbangkan kondisi bukaan, kusen, dan pemasangan sebagai satu kesatuan. Tampilan fasad tetap penting, tetapi motif menarik tidak menjawab sistem penguncian. Mintalah penjelasan model serta detail produk agar Anda mengetahui apa yang menjadi dasar pilihan.",
        "Baja Willmore mempunyai motif serat kayu natural, tahan air dan cuaca, serta 11 titik penguncian. Produk ini juga mencantumkan architrave dan peredam pada sela pintu. Spesifikasi tersebut dapat menjadi alasan untuk mempertimbangkannya pada pintu utama, bukan jaminan absolut terhadap pembobolan atau semua risiko. Sesuaikan keputusan dengan kondisi pemasangan dan kebiasaan penggunaan rumah.",
      ], undefined, ["baja"]),
      section("kamar", "Pintu Kamar: Privasi, Tata Letak, dan Interior", [
        "Untuk kamar tidur, perhatikan apakah arah buka mengganggu lemari, tempat tidur, atau jalur masuk. Kebutuhan privasi juga dapat memengaruhi pilihan handle dan kunci. Hubungan warna pintu dengan dinding dan lantai membantu menjaga tampilan interior, tetapi jangan mengorbankan kelancaran penggunaan hanya agar semua pintu terlihat seragam.",
        "Pintu kayu Willmore memakai lapisan HMR, bukan HPL, dengan ketebalan 4,2 cm serta architrave untuk hasil akhir yang rapi. Informasinya menyebut lebih tahan rayap. Artikel ini tidak menyatakan pintu tersebut mempunyai sertifikasi kedap suara. Jika kamar juga menjadi ruang kerja atau membutuhkan kontrol suara tertentu, tanyakan kemampuan dan dokumentasi model sebelum menetapkannya sebagai pilihan.",
      ], undefined, ["kayu"]),
      section("kamar-mandi", "Pintu Kamar Mandi: Bedakan Aluminium, UPVC, dan PVC", [
        "Untuk kamar mandi, diskusikan paparan air serta kondisi ventilasi. Jangan menganggap semua material yang sering dipakai di kamar mandi mempunyai spesifikasi dan garansi identik. Aluminium Willmore dijelaskan tidak berkarat dan mempunyai garansi warna 10 tahun. UPVC mencantumkan garansi bahan 10 tahun, tidak getas, lentur, tahan keropos, dan dilengkapi handle yang dapat dikunci.",
        "PVC Willmore merupakan grade atas untuk interior dengan kualitas yang sepadan dengan harganya. Tidak ada angka harga resmi pada artikel ini, sehingga pemilihan perlu dilanjutkan dengan penawaran. Untuk membandingkan ketiga material, cocokkan lokasi penggunaan, kebutuhan kunci, isi paket, dan cakupan garansi. Jangan memindahkan garansi UPVC ke PVC hanya karena nama keduanya mirip.",
      ], undefined, ["aluminium", "upvc", "pvc"]),
      section("teras", "Pintu Teras: Jelaskan Outdoor atau Semi-outdoor", [
        "Kata teras dapat merujuk pada banyak kondisi. Sebagian terlindung dari air, sebagian menjadi akses luar dengan paparan langsung. Kirim foto lokasi dan jelaskan arah hujan atau air yang biasa mengenai area pintu. Informasi tersebut membantu tim membahas pilihan material, detail bukaan, dan kesiapan lokasi secara lebih konkret.",
        "Aluminium Willmore dicantumkan cocok untuk teras outdoor dan kamar mandi. UPVC dicantumkan untuk interior hingga semi-outdoor. Baja juga mempunyai informasi tahan air dan cuaca. Perbedaan cakupan ini harus dipertahankan saat memilih: semi-outdoor tidak boleh otomatis dianggap cocok untuk semua paparan luar ruangan. Tanyakan kesesuaian model serta ketentuan penggunaan sebelum memesan.",
      ], undefined, ["aluminium", "upvc", "baja"]),
      section("kombinasi-material", "Tidak Perlu Memaksakan Satu Material untuk Semua Ruang", [
        "Rumah dapat menggabungkan beberapa material karena fungsi tiap pintu berbeda. Anda dapat menyaring baja untuk akses utama, kayu untuk kamar, lalu aluminium atau UPVC untuk lokasi basah yang sesuai. Hubungan desain bisa dibicarakan melalui pilihan finishing dan detail yang tersedia, tanpa membuat klaim bahwa semua kategori memiliki warna atau model yang sama.",
        `${completeSetNote} Keterangan ini membantu membandingkan kelengkapan, tetapi ukuran komponen tetap perlu cocok dengan bukaan. Mintalah rincian per ruang agar tidak terjadi pertukaran model, arah buka, atau aksesori. Untuk renovasi bertahap, tandai ruang yang dikerjakan lebih dahulu dan komponen lama yang masih dipertahankan.`,
      ]),
      section("brief-per-ruang", "Checklist Pesanan per Ruangan", [
        "Satu lembar catatan per bukaan dapat mengurangi informasi yang tertukar saat konsultasi. Foto sebaiknya memperlihatkan sisi dalam dan luar agar posisi furnitur, dinding, serta lantai dapat dipahami. Ukuran awal berguna sebagai bahan diskusi, namun pesanan final perlu mengikuti verifikasi yang disepakati dengan penyedia dan pihak pemasangan.",
      ], ["Nama ruang dan fungsi pintu.", "Kondisi interior, outdoor, atau semi-outdoor.", "Paparan air dan kondisi area sekitar.", "Ukuran bukaan, arah buka, serta kesiapan lantai.", "Kebutuhan kunci, komponen, dan pekerjaan pemasangan."]),
      section("faq-ruangan", "FAQ: Memilih Pintu Berdasarkan Ruang", [
        "Apakah pintu kamar bisa langsung dipakai di teras? Jangan menyimpulkan demikian tanpa memeriksa rekomendasi penggunaan. Apakah UPVC sama dengan PVC? Pada koleksi Willmore, keduanya memiliki karakter dan cakupan garansi berbeda. Apakah paket lengkap sudah mencakup instalasi? Kelengkapan produk tidak otomatis menjelaskan biaya pekerjaan; tanyakan penawaran.",
        "Apa langkah berikutnya? Pilih kategori yang sesuai untuk setiap ruang, baca spesifikasinya, lalu hubungi tim dengan daftar kebutuhan. Untuk pembahasan lebih detail, lanjutkan ke panduan pintu utama, kamar mandi, atau kayu dan engineering door. Mengikuti kebutuhan ruang membantu Anda menyusun kombinasi yang lebih masuk akal daripada mencari satu label pintu terbaik untuk seluruh rumah.",
      ]),
    ],
  },
  {
    slug: "merk-pintu-rumah-terbaik-minimalis", category: "Rekomendasi", publishedAt,
    title: "Merk Pintu Rumah Terbaik untuk Rumah Minimalis: Proporsi, Kusen, dan Fungsi",
    metaTitle: "Merk Pintu Rumah Terbaik untuk Rumah Minimalis | Willmore",
    description: "Panduan memilih merk pintu rumah minimalis dari proporsi bukaan, detail kusen, material, dan arah buka. Kenali pilihan Willmore sesuai kebutuhan ruang.",
    keyword: "merk pintu rumah terbaik untuk rumah minimalis, pintu rumah minimalis, merk pintu rumah terbaik",
    image: woodDoor, imageAlt: "Referensi pintu kayu dengan karakter sederhana untuk interior rumah minimalis",
    relatedSlugs: ["brand-pintu-terbaik-rumah-modern", "rekomendasi-pintu-aluminium-rumah-minimalis", "rekomendasi-pintu-terbaik-per-ruangan"],
    intro: [
      "Merk pintu rumah terbaik untuk rumah minimalis sebaiknya dipilih dari kesesuaian fungsi, proporsi, dan detail, bukan hanya dari label minimalis pada katalog. Pintu yang sederhana tetap memerlukan ukuran tepat, arah buka yang nyaman, serta material yang sesuai lingkungan. Rumah berukuran terbatas juga memerlukan perhatian terhadap ruang gerak daun pintu dan pertemuannya dengan furnitur.",
      "Panduan ini berfokus pada keputusan praktis untuk menjaga tampilan yang tidak berlebihan. Willmore dibahas sebagai salah satu pilihan dengan lima kategori material. Tidak ada peringkat merek nasional, klaim bahwa semua model menghemat ruang, atau janji bahwa setiap foto referensi tersedia sebagai produk. Pilihan aktual perlu dilihat bersama katalog dan kondisi bukaan rumah Anda.",
    ],
    sections: [
      section("minimalis-fungsi", "Minimalis Berarti Memilih Detail yang Dibutuhkan", [
        "Tampilan minimalis biasanya diarahkan pada hubungan elemen yang jelas dan tidak ramai. Mulailah dengan menentukan peran pintu: menjadi aksen di fasad atau mengikuti karakter interior. Batasi acuan warna dan tekstur agar proses pemilihan tidak berubah setiap kali Anda menemukan foto baru. Rancangan yang konsisten membantu menyaring pilihan lebih cepat.",
        "Namun, kesederhanaan visual bukan alasan untuk melewatkan fungsi. Pintu yang tampak bersih tetap memerlukan handle, kunci, kusen, dan detail pemasangan yang sesuai. Ketika menilai merk pintu rumah terbaik, periksa apakah penyedia dapat menjelaskan komponen tersebut. Istilah minimalis pada judul listing tidak menjawab material maupun kesiapan produk untuk lokasi Anda.",
      ]),
      section("proporsi-bukaan", "Periksa Proporsi terhadap Dinding dan Jalur Gerak", [
        "Bukaan pintu perlu dibaca sebagai bagian dari dinding, lantai, dan jalur sirkulasi. Ukuran yang terlihat menarik di rumah lain tidak otomatis cocok untuk rumah Anda. Catat posisi sakelar, perabot, sudut dinding, serta arah penggunaan. Foto area yang lebih luas biasanya lebih berguna saat konsultasi daripada foto daun pintu saja.",
        "Jangan menetapkan ukuran hanya dari istilah standar. Kondisi renovasi, ketebalan dinding, serta tahap pekerjaan lantai dapat memengaruhi kebutuhan. Artikel ini tidak memberi ukuran produk Willmore yang belum dikonfirmasi. Gunakan ukuran awal sebagai bahan diskusi, kemudian mintalah verifikasi sebelum pesanan final agar keputusan desain sesuai dengan bukaan aktual.",
      ]),
      section("material-minimalis", "Pilih Material dari Fungsi Ruang", [
        "Untuk pintu utama rumah minimalis, baja bermotif kayu dapat menjadi pilihan ketika Anda ingin menggabungkan tekstur dengan kebutuhan penguncian. Baja Willmore mencantumkan 11 titik penguncian, tahan air dan cuaca, architrave, serta peredam di sela pintu. Motifnya menjadi bagian tampilan, sedangkan kecocokan model perlu dibahas dengan kondisi fasad dan pemasangan.",
        "Untuk interior, kayu Willmore memakai lapisan HMR dan ketebalan 4,2 cm. Untuk kamar mandi atau teras outdoor, aluminium mempunyai informasi tidak berkarat dan garansi warna 10 tahun. UPVC dapat digunakan pada interior hingga semi-outdoor, sedangkan PVC grade atas menjadi pilihan interior. Materi yang tepat dapat berbeda antar ruang meskipun rumah memakai konsep desain yang sama.",
      ], undefined, ["baja", "kayu", "aluminium", "pvc", "upvc"]),
      section("kusen-architrave", "Detail Kusen dan Architrave Perlu Direncanakan", [
        "Pada tampilan yang sederhana, sambungan di sekitar pintu mudah terlihat. Karena itu, tanyakan bagaimana kusen dan dinding bertemu serta apakah bukaan membutuhkan perapian. Architrave pada baja dan kayu Willmore membantu menutup celah agar hasil lebih rapi. Detail tersebut perlu disesuaikan dengan kondisi lokasi; bukan jaminan bahwa semua kekurangan bukaan dapat tertutup tanpa pekerjaan lain.",
        "Jangan mengasumsikan produk memiliki hidden frame atau kusen tersembunyi hanya karena tampilannya terlihat ramping pada foto. Informasi model seperti itu belum dijelaskan di sini. Jika ada rancangan khusus dari arsitek atau interior, sertakan gambarnya saat konsultasi agar tim dapat membahas kesesuaian dan kebutuhan yang harus dikonfirmasi.",
      ], undefined, ["baja", "kayu"]),
      section("arah-buka", "Rumah Kecil Membutuhkan Arah Buka yang Tepat", [
        "Pintu dapat bertabrakan dengan lemari, meja, atau pintu lain apabila arah buka ditentukan terlambat. Tandai posisi furnitur dan jalur utama penghuni sejak awal. Perhatikan juga ruang untuk menggunakan handle dan kunci. Pemeriksaan sederhana ini membantu pembahasan model yang sesuai tanpa mengandalkan asumsi bahwa semua pintu minimalis otomatis efisien ruang.",
        "Jika Anda membutuhkan mekanisme geser atau konfigurasi khusus, tanyakan ketersediaan serta spesifikasinya secara terpisah. Artikel ini tidak menyatakan semua kategori Willmore tersedia sebagai sliding door. Jangan mengubah rencana bukaan hanya berdasarkan foto inspirasi sebelum mengetahui produk dan pekerjaan yang diperlukan untuk mewujudkannya.",
      ]),
      section("biaya-paket", "Bandingkan Penawaran dengan Kelengkapan yang Sama", [
        "Anggaran rumah minimalis tetap perlu menilai seluruh kebutuhan, bukan hanya harga daun pintu. Kusen, handle, pengiriman, dan pekerjaan lokasi dapat membuat dua penawaran tidak setara. Minta rincian yang memisahkan produk dari pekerjaan agar Anda mengetahui apa yang sudah diterima dan apa yang masih perlu dibicarakan.",
        `${completeSetNote} Model serta ukuran tetap harus dicocokkan dengan kondisi rumah. Jangan menganggap kata siap dipasang berarti bukaan tidak perlu disiapkan atau instalasi sudah otomatis dibayar. Penawaran resmi membantu menentukan pilihan berdasarkan kebutuhan aktual tanpa menyisipkan harga perkiraan yang belum mempunyai dasar.`,
      ]),
      section("daftar-pilihan", "Susun Daftar Pendek, Lalu Konfirmasi Detail", [
        "Pilih dua atau tiga alternatif yang memenuhi fungsi ruang, kemudian bandingkan detailnya pada format yang sama. Jika beberapa informasi belum tersedia, tuliskan pertanyaannya sebelum konsultasi. Pendekatan ini membantu menjaga keputusan tetap terarah, terutama ketika Anda membeli beberapa pintu dengan lokasi penggunaan yang berbeda.",
      ], ["Apakah materialnya sesuai interior atau paparan luar?", "Apakah arah buka dan komponen cocok dengan bukaan?", "Apakah finishing tersedia sesuai acuan desain?", "Apa isi paket dan pekerjaan yang belum termasuk?", "Bagaimana cakupan garansi dan jalur after sales?" ]),
      section("faq-minimalis", "FAQ: Merk Pintu untuk Rumah Minimalis", [
        "Apakah pintu minimalis harus polos? Tidak harus; keputusan visual dapat menyesuaikan hubungan dengan fasad dan interior. Apakah semua pintu harus sama warna? Tidak wajib. Yang penting adalah rancangan yang konsisten dan kecocokan material. Konfirmasikan pilihan aktual karena artikel ini tidak menjanjikan finishing seragam pada seluruh kategori.",
        "Apakah Willmore cocok dipertimbangkan? Nilai dari kategori, spesifikasi, kelengkapan, dan layanan yang relevan dengan rumah Anda. Mulai dari foto serta ukuran bukaan, kemudian konsultasikan arah buka dan fungsi ruang. Untuk desain modern secara lebih luas, baca panduan brand pintu rumah modern; untuk perbandingan ruangan, lanjutkan ke rekomendasi material per ruang.",
      ]),
    ],
  },
  {
    slug: "pintu-baja-motif-kayu-harga-spesifikasi", category: "Pintu Baja", publishedAt,
    title: "Pintu Baja: Motif Kayu, Faktor Harga, dan Spesifikasi yang Perlu Diperiksa",
    metaTitle: "Pintu Baja: Motif Kayu, Harga & Spesifikasi | Willmore",
    description: "Panduan pintu baja motif kayu: 11 titik penguncian Willmore, ketahanan cuaca, faktor harga, dan beda pintu baja ringan sebelum meminta penawaran.",
    keyword: "pintu baja, pintu baja motif kayu, harga pintu baja, pintu baja ringan, pintu baja untuk pintu utama",
    image: steelDoor, imageAlt: "Contoh pintu baja sebagai referensi tampilan pintu utama rumah",
    relatedSlugs: ["panduan-memilih-pintu-baja", "rekomendasi-pintu-baja-berkualitas", "pintu-baja-vs-pintu-kayu"],
    intro: [
      "Pintu baja dapat dipertimbangkan untuk akses utama ketika Anda membutuhkan kombinasi penguncian, ketahanan terhadap cuaca, dan tampilan yang sesuai rumah. Pintu baja Willmore mempunyai motif serat kayu natural, 11 titik penguncian, architrave, serta peredam pada sela pintu. Paketnya mencakup kusen dan handle. Model, ukuran, serta penawaran tetap perlu dikonfirmasi sebelum membeli.",
      "Jika Anda mencari pintu baja motif kayu atau harga pintu baja, panduan ini membantu membaca atribut produk dan menyusun pertanyaan pembelian. Pembahasan harga berupa faktor yang perlu dibandingkan, bukan daftar angka yang belum tersedia. Artikel ini juga menjelaskan mengapa hasil pencarian pintu baja ringan tidak boleh langsung dianggap sama dengan produk pintu baja pada katalog.",
    ],
    sections: [
      section("apa-itu", "Apa Itu Pintu Baja dan untuk Siapa Pilihannya?", [
        "Pintu baja merujuk pada pintu berbahan baja, tetapi nama material belum menjelaskan seluruh konstruksi dan aksesori setiap model. Untuk menilai produk, periksa spesifikasi yang dicantumkan penyedia. Dua pintu dengan nama bahan sama dapat memiliki detail penguncian, finishing, komponen, dan paket yang berbeda. Gunakan informasi model aktual sebagai acuan, bukan asumsi dari istilah umum.",
        "Untuk rumah, mulai dari fungsi akses yang ingin dilindungi dan kondisi bukaan. Pintu utama, pintu samping, atau akses yang terkena cuaca perlu dibahas berdasarkan lokasi. Informasi baja Willmore mencantumkan tahan air dan cuaca. Tetap tanyakan ketentuan penggunaan dan detail pemasangan agar pilihan material tidak terpisah dari kesiapan kusen serta dinding rumah.",
      ], undefined, ["baja"]),
      section("motif-kayu", "Pintu Baja Motif Kayu: Tampilan tanpa Mengubah Material", [
        "Motif kayu menjelaskan karakter permukaan, bukan berarti daun pintunya berubah menjadi pintu kayu. Pada Willmore, motif serat kayu natural menjadi bagian keunggulan pintu baja. Pilihan ini dapat dipertimbangkan apabila Anda menyukai hubungan visual tekstur kayu dengan fasad tetapi ingin membahas produk berbahan baja untuk akses rumah.",
        "Cocokkan motif dan warna dengan produk yang tersedia. Pencahayaan dan layar dapat membuat foto terlihat berbeda dari benda aslinya, sehingga foto detail atau contoh finishing membantu diskusi. Jangan menyimpulkan ketahanan permukaan, ketebalan, atau konstruksi tersembunyi dari foto. Mintalah keterangan model agar desain yang dipilih benar-benar sesuai penawaran.",
      ]),
      section("penguncian", "11 Titik Penguncian: Pahami sebagai Bagian Sistem", [
        "Spesifikasi baja Willmore menyebut 11 titik penguncian. Informasi ini dapat menjadi pertanyaan utama saat menilai akses rumah: bagaimana kunci digunakan, bagaimana komponen bertemu dengan kusen, dan apa yang harus diperiksa ketika pemasangan selesai. Penguncian bukan unsur yang berdiri sendiri karena kondisi pemasangan dan penggunaan tetap memengaruhi pengalaman pemilik rumah.",
        "Jangan menafsirkan jumlah titik sebagai jaminan tidak bisa dibobol atau pengganti kebiasaan menjaga akses. Artikel ini tidak memuat hasil uji ketahanan pembobolan. Bila proyek memerlukan standar keamanan tertentu, tanyakan dokumentasi yang sesuai model. Keputusan yang baik memisahkan atribut yang dicantumkan dari performa khusus yang belum dibuktikan.",
      ]),
      section("architrave-peredam", "Architrave dan Peredam: Detail yang Sering Terlewat", [
        "Architrave membantu menutup celah antara kusen dan dinding sehingga hasil lebih rapi. Pada pintu baja Willmore, detail ini dicantumkan bersama peredam pada sela pintu. Periksa kebutuhan bukaan dan kondisi area sekitar agar Anda memahami bagaimana komponen tersebut digunakan pada pemasangan aktual, bukan hanya melihat hasil jadi di foto.",
        "Peredam pada sela pintu tidak otomatis berarti pintu bersertifikasi kedap suara. Architrave juga tidak menggantikan seluruh pekerjaan perapian dinding. Bila kebutuhan rumah melibatkan kontrol suara atau detail bangunan tertentu, sampaikan sejak awal agar tim dapat membahas kemampuan produk dan pekerjaan yang relevan tanpa memperluas klaim dari informasi dasar.",
      ]),
      section("harga", "Harga Pintu Baja: Bandingkan Isi Penawaran", [
        "Untuk mengetahui harga pintu baja, Anda perlu mengonfirmasi ukuran, model, desain, finishing, dan kebutuhan pemasangan. Harga daun pintu saja tidak setara dengan paket yang mencakup kusen serta handle. Jangan mengambil keputusan hanya dari angka pada hasil pencarian sebelum mengetahui variasi produk mana yang dimaksud dan komponen apa yang diterima.",
        `${completeSetNote} Tanyakan apakah pengiriman, instalasi, atau perapian bukaan dicantumkan terpisah. Artikel ini tidak mengarang rentang harga Willmore karena daftar harga resmi belum tersedia. Kirim ukuran awal, foto lokasi, dan jumlah unit agar tim dapat membahas penawaran yang lebih relevan daripada angka umum tanpa konteks proyek.`,
      ]),
      section("baja-ringan", "Pintu Baja dan Pintu Baja Ringan: Jangan Disamakan dari Nama", [
        "Pencarian pintu baja ringan dapat membawa Anda ke produk atau contoh konstruksi yang berbeda dari pintu baja rumah pada katalog. Kesamaan kata baja belum membuktikan komposisi, desain panel, atau sistem penguncian yang sama. Baca deskripsi produk satu per satu dan tanyakan konstruksinya kepada penyedia sebelum membuat perbandingan.",
        "Informasi Willmore pada artikel ini merujuk pada kategori pintu baja dengan spesifikasi yang dicantumkan, bukan klaim bahwa produknya adalah pintu baja ringan. Jika Anda sedang membandingkan penawaran dengan istilah tersebut, mintalah data model, komponen, dan lokasi penggunaan. Hindari memilih berdasarkan nama yang tampak mirip sementara fungsi dan paketnya berbeda.",
      ]),
      section("perbandingan-kayu", "Kapan Membandingkan dengan Pintu Kayu atau Aluminium?", [
        "Pintu kayu dapat menjadi pembanding ketika kebutuhan Anda lebih dekat dengan karakter interior. Kayu Willmore memakai HMR dan ketebalan 4,2 cm. Aluminium dapat dibandingkan ketika lokasi terkait kamar mandi atau teras outdoor; informasinya mencantumkan tidak berkarat dan garansi warna 10 tahun. Membandingkan material harus dimulai dari fungsi, bukan mencari pemenang mutlak.",
        "Jangan menyamakan seluruh garansi atau kemampuan antar kategori. Informasi baja tahan cuaca tidak sama dengan sertifikasi tahan api, dan spesifikasi kayu lebih tahan rayap tidak sama dengan jaminan tanpa risiko untuk semua kondisi. Untuk perbandingan yang lebih rinci, gunakan panduan baja versus kayu lalu konfirmasi produk yang sesuai dengan lokasi rumah.",
      ], undefined, ["kayu", "aluminium"]),
      section("cek-sebelum-pesan", "Checklist Sebelum Memesan Pintu Baja", [
        "Sebelum membayar, pastikan seluruh rincian yang memengaruhi kecocokan produk sudah dijelaskan. Ukuran bukaan awal dapat menjadi bahan konsultasi, tetapi ukuran pesanan perlu diverifikasi sesuai kesepakatan. Apabila masih ada pekerjaan lantai atau dinding, beri tahu tim agar penawaran tidak memakai asumsi bahwa lokasi sudah sepenuhnya siap.",
      ], ["Model, motif, dan ukuran pesanan cocok dengan kebutuhan.", "Arah buka serta ruang gerak tidak bertabrakan dengan furnitur.", "Kusen, handle, dan detail penguncian dijelaskan.", "Kondisi bukaan dan pekerjaan tambahan sudah dibahas.", "Harga produk, pengiriman, instalasi, dan ketentuan layanan dipahami."]),
      section("faq-baja", "FAQ: Pintu Baja Motif Kayu dan Harga", [
        "Apakah pintu baja Willmore tahan cuaca? Informasi kategori menyebut tahan air dan cuaca; konfirmasikan penggunaan model untuk lokasi Anda. Apakah motif kayu berarti berbahan kayu? Tidak, motif menjelaskan tampilan. Apakah pintu ini tahan api? Artikel ini tidak membuat klaim tersebut karena dokumentasi performa itu belum tersedia.",
        "Bagaimana meminta harga pintu baja? Sampaikan foto bukaan, perkiraan ukuran, kebutuhan model, jumlah unit, dan kondisi pemasangan. Baca spesifikasi kategori baja terlebih dahulu, kemudian lanjutkan konsultasi atau lihat kanal marketplace yang ditautkan website. Cara ini membantu Anda memperoleh rincian pembelian yang jelas tanpa mengandalkan angka atau klaim yang belum dikonfirmasi.",
      ]),
    ],
  },
];