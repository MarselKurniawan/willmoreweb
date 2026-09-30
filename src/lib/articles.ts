import steelDoor from "@/assets/steel-door.jpg";
import woodDoor from "@/assets/wood-door.jpg";
import aluminiumDoor from "@/assets/aluminium-door.jpg";
import upvcDoor from "@/assets/upvc-door.jpg";
import heroImage from "@/assets/willmore-hero.jpg";

export type ArticleSection = { id: string; heading: string; paragraphs: string[]; list?: string[] };
export type Article = {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  description: string;
  keyword: string;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "panduan-memilih-pintu-baja",
    category: "Pintu Baja",
    title: "Panduan Lengkap Memilih Pintu Baja untuk Rumah Modern",
    metaTitle: "Panduan Memilih Pintu Baja untuk Rumah | Willmore",
    description: "Kenali pintu baja Willmore dengan serat kayu natural, 11 titik penguncian, tahan air dan cuaca, architrave, serta peredam sela pintu.",
    keyword: "pintu baja",
    image: steelDoor,
    imageAlt: "Pintu baja modern berwarna gelap sebagai pintu utama rumah",
    intro: [
      "Pintu utama adalah wajah pertama sebuah rumah sekaligus lapisan pertama perlindungan bagi penghuninya. Karena itu, semakin banyak pemilik rumah mempertimbangkan pintu baja sebagai pilihan untuk akses utama. Material ini dikenal karena karakternya yang kokoh, tampilannya yang tegas, dan kemampuannya menyatu dengan gaya arsitektur modern maupun minimalis.",
      "Namun, memilih pintu baja tidak cukup hanya dengan melihat foto katalog. Ada banyak faktor yang perlu dipahami, mulai dari lokasi pemasangan, ukuran bukaan, sistem kunci, hingga finishing yang sesuai dengan fasad rumah. Panduan ini membahas semua hal tersebut secara runtut agar Anda bisa mengambil keputusan dengan lebih yakin.",
    ],
    sections: [
      {
        id: "apa-itu-pintu-baja",
        heading: "Apa Itu Pintu Baja?",
        paragraphs: [
          "Pintu baja adalah pintu yang daun dan rangkanya menggunakan material baja sebagai struktur utama. Permukaannya umumnya diberi lapisan finishing agar lebih tahan terhadap cuaca dan memiliki tampilan yang menarik, misalnya motif serat kayu, warna solid, atau tekstur tertentu. Di bagian dalam, pintu baja biasanya memiliki isian yang membantu kekakuan panel dan kenyamanan penggunaan.",
          "Berbeda dengan anggapan lama bahwa pintu baja hanya cocok untuk gudang atau bangunan industri, desain pintu baja kini sangat beragam. Banyak model yang dirancang khusus untuk hunian, dengan proporsi, motif, dan aksesori yang membuatnya terlihat elegan sebagai pintu utama rumah.",
        ],
      },
      {
        id: "kelebihan-pintu-baja",
        heading: "Kelebihan Pintu Baja Dibandingkan Material Lain",
        paragraphs: [
          "Alasan utama orang memilih pintu baja adalah rasa aman. Pintu baja Willmore memadukan tampilan motif serat kayu yang sangat natural dengan perlindungan untuk penggunaan sehari-hari. Selain tahan air dan cuaca, detail keamanannya dirancang agar akses utama rumah terasa lebih kokoh dan nyaman.",
        ],
        list: [
          "Motif serat kayu yang sangat natural untuk tampilan hangat dengan kekuatan baja.",
          "Tahan air dan cuaca untuk kebutuhan akses utama rumah.",
          "Sistem 11 titik penguncian memberi keamanan berlapis.",
          "Architrave menutup celah pemasangan agar lubang di sekitar pintu tidak terlihat.",
          "Peredam pada sela pintu membantu pintu menutup lebih nyaman.",
          "Pembelian sudah termasuk satu set kusen dan handle yang siap dipasang.",
        ],
      },
      {
        id: "tempat-yang-cocok",
        heading: "Di Mana Pintu Baja Paling Cocok Dipasang?",
        paragraphs: [
          "Pintu baja paling sering dipilih sebagai pintu utama atau pintu depan karena di sanalah kebutuhan keamanan paling tinggi. Pintu samping yang menghubungkan rumah dengan carport, pintu belakang menuju area servis, dan pintu akses ruko juga termasuk lokasi yang ideal.",
          "Untuk ruangan di dalam rumah seperti kamar tidur atau ruang kerja, pintu baja tetap bisa digunakan, tetapi Anda perlu mempertimbangkan bobot, suasana ruang, dan kesesuaian desain dengan interior. Di area ini, sebagian orang lebih memilih pintu kayu atau material lain yang memberikan kesan lebih hangat.",
        ],
      },
      {
        id: "cara-memilih-ukuran",
        heading: "Cara Menentukan Ukuran dan Model Pintu Baja",
        paragraphs: [
          "Langkah pertama adalah mengukur lebar dan tinggi bukaan tembok dengan teliti. Ukur di beberapa titik, karena bukaan tembok tidak selalu presisi. Catat juga ketebalan dinding, arah bukaan pintu yang diinginkan, serta ruang bebas di depan dan belakang pintu agar daun pintu dapat terbuka dengan nyaman.",
          "Setelah ukuran diketahui, tentukan model: pintu satu daun, pintu satu setengah daun, atau pintu dua daun. Rumah dengan fasad lebar biasanya tampak lebih seimbang dengan pintu ganda, sedangkan rumah minimalis dengan lahan terbatas cukup menggunakan pintu satu daun. Jika Anda ragu, konsultasi dengan tim yang berpengalaman akan membantu memastikan ukuran dan model yang tepat sebelum pemesanan.",
        ],
      },
      {
        id: "finishing-dan-desain",
        heading: "Memilih Finishing dan Desain yang Selaras dengan Fasad",
        paragraphs: [
          "Finishing menentukan kesan akhir pintu. Warna gelap seperti hitam atau abu-abu arang memberi kesan tegas dan modern. Motif serat kayu memberikan kehangatan tanpa harus menggunakan kayu asli. Sementara itu, warna netral cocok untuk rumah yang ingin tampil bersih dan sederhana.",
          "Perhatikan juga detail panel, pegangan pintu, dan kaca aksen bila ada. Elemen kecil seperti handle dan kunci ikut memengaruhi kenyamanan penggunaan sehari-hari. Pilih kombinasi yang sesuai dengan karakter rumah, bukan sekadar mengikuti tren sesaat.",
        ],
      },
      {
        id: "perawatan-pintu-baja",
        heading: "Tips Merawat Pintu Baja Agar Tetap Awet",
        paragraphs: [
          "Perawatan pintu baja tidak rumit, tetapi perlu dilakukan secara konsisten. Kebiasaan kecil dapat menjaga tampilan dan fungsi pintu dalam jangka panjang.",
        ],
        list: [
          "Bersihkan permukaan dengan kain lembut dan air sabun ringan, hindari bahan abrasif.",
          "Periksa engsel dan kunci secara berkala, beri pelumas bila gerakannya mulai berat.",
          "Hindari benturan benda tajam yang dapat menggores lapisan finishing.",
          "Segera tangani goresan pada lapisan agar area tersebut tetap terlindungi.",
          "Pastikan area sekitar pintu tidak tergenang air dalam waktu lama.",
        ],
      },
      {
        id: "kesalahan-umum",
        heading: "Kesalahan yang Sering Terjadi Saat Membeli Pintu Baja",
        paragraphs: [
          "Kesalahan paling umum adalah membeli pintu hanya berdasarkan tampilan tanpa memperhatikan ukuran bukaan dan kebutuhan pemasangan. Akibatnya, pintu tidak pas dan perlu penyesuaian tambahan. Kesalahan lain adalah mengabaikan layanan purnajual, padahal pendampingan setelah pemasangan sangat membantu ketika ada penyetelan yang dibutuhkan.",
          "Karena itu, pilihlah penyedia yang tidak hanya menjual produk, tetapi juga membantu konsultasi, pemilihan produk, instalasi, dan after sales. Rangkaian layanan yang lengkap membuat proses lebih tenang dan hasil akhirnya lebih sesuai harapan.",
        ],
      },
      {
        id: "kesimpulan",
        heading: "Kesimpulan",
        paragraphs: [
          "Pintu baja adalah pilihan tepat untuk Anda yang mengutamakan keamanan, ketahanan, dan tampilan modern pada akses utama rumah. Kunci keberhasilannya terletak pada ukuran yang tepat, model yang sesuai fasad, finishing yang selaras, dan pemasangan yang rapi.",
          "Willmore, spesialis pintu berkualitas sejak 2002, siap membantu Anda membandingkan pilihan pintu baja sesuai kebutuhan ruang. Lihat koleksi di halaman produk, atau mulai konsultasi agar tim kami dapat memberi arahan yang tepat.",
        ],
      },
    ],
  },
  {
    slug: "panduan-memilih-pintu-kayu",
    category: "Pintu Kayu",
    title: "Pintu Kayu untuk Rumah: Kelebihan, Jenis Desain, dan Cara Merawatnya",
    metaTitle: "Pintu Kayu untuk Rumah: Kelebihan & Perawatan | Willmore",
    description: "Kenali pintu kayu Willmore berlapis HMR, lebih tahan rayap, tebal premium 4,2 cm, lengkap dengan architrave, kusen, dan handle.",
    keyword: "pintu kayu",
    image: woodDoor,
    imageAlt: "Pintu kayu natural dengan serat hangat pada rumah modern",
    intro: [
      "Tidak ada material yang mampu menghadirkan kehangatan seperti kayu. Serat alaminya yang unik membuat setiap pintu terasa berkarakter, sehingga pintu kayu tetap menjadi favorit banyak pemilik rumah dari generasi ke generasi. Baik untuk rumah bergaya klasik, tropis, maupun modern, pintu kayu mampu memberi kesan akrab dan berkelas.",
      "Meski begitu, kayu adalah material alami yang punya sifat khusus. Agar pintu kayu tetap indah dan berfungsi baik, Anda perlu memahami cara memilih desain, finishing, lokasi pemasangan, serta perawatannya. Artikel ini akan membahasnya satu per satu.",
    ],
    sections: [
      {
        id: "mengapa-pintu-kayu",
        heading: "Mengapa Pintu Kayu Masih Menjadi Pilihan Favorit?",
        paragraphs: [
          "Daya tarik utama pintu kayu terletak pada keindahan natural yang sulit ditiru. Pintu kayu Willmore menggunakan lapisan HMR, bukan HPL, sehingga lebih tahan terhadap rayap. Ketebalan 4,2 cm—di atas ketebalan umum 3,5 cm—memberikan karakter yang lebih kuat dan kokoh.",
          "Selain estetika, pintu kayu fleksibel dalam desain. Kayu dapat dibentuk menjadi panel, profil ukiran sederhana, kombinasi dengan kaca, atau tampilan polos yang minimalis. Fleksibilitas ini membuatnya cocok untuk banyak gaya arsitektur.",
        ],
      },
      {
        id: "kelebihan-pintu-kayu",
        heading: "Kelebihan Pintu Kayu",
        paragraphs: ["Berikut beberapa alasan pintu kayu layak dipertimbangkan untuk rumah Anda:"],
        list: [
          "Lapisan HMR membantu meningkatkan ketahanan terhadap rayap.",
          "Ketebalan premium 4,2 cm membuat pintu lebih kuat dan kokoh.",
          "Architrave memberi hasil pemasangan yang lebih rapi.",
          "Karakter kayu menghadirkan suasana hangat dan premium.",
          "Sudah termasuk satu set kusen dan handle yang siap dipasang.",
        ],
      },
      {
        id: "lokasi-pemasangan",
        heading: "Lokasi Pemasangan yang Ideal untuk Pintu Kayu",
        paragraphs: [
          "Pintu kayu sangat cocok untuk ruang dalam seperti kamar tidur, ruang kerja, ruang keluarga, dan ruang tamu. Di area ini, pintu terlindungi dari paparan hujan dan sinar matahari langsung sehingga kualitas kayu lebih terjaga.",
          "Untuk pintu utama, pintu kayu tetap bisa menjadi pilihan menawan, terutama jika area depan rumah memiliki kanopi atau teras yang melindunginya. Jika pintu akan terpapar cuaca secara langsung, diskusikan jenis finishing dan perlindungan tambahan sebelum memutuskan.",
        ],
      },
      {
        id: "memilih-desain",
        heading: "Tips Memilih Desain Pintu Kayu",
        paragraphs: [
          "Mulailah dari gaya rumah. Rumah modern cocok dengan pintu kayu berpanel sederhana dan garis tegas. Rumah tropis tampak serasi dengan warna kayu natural dan tekstur serat yang terlihat jelas. Sementara rumah bergaya klasik bisa memilih panel bertingkat dengan detail profil.",
          "Pertimbangkan pula kebutuhan cahaya. Kombinasi kayu dan kaca dapat membantu cahaya masuk ke ruangan tanpa mengorbankan karakter pintu. Jangan lupa menyesuaikan warna pintu dengan lantai, kusen, dan furnitur agar tampilan ruang terasa menyatu.",
        ],
      },
      {
        id: "finishing-kayu",
        heading: "Pentingnya Finishing pada Pintu Kayu",
        paragraphs: [
          "Finishing bukan hanya soal warna, tetapi juga perlindungan. Lapisan finishing membantu menjaga permukaan kayu dari kelembapan, debu, dan goresan ringan. Finishing natural menonjolkan serat kayu, sedangkan finishing warna solid memberi tampilan modern yang lebih rapi.",
          "Pilih finishing berdasarkan lokasi pintu. Pintu eksterior membutuhkan perlindungan yang lebih kuat dibandingkan pintu interior. Tanyakan rekomendasi finishing saat konsultasi agar pilihan Anda sesuai dengan kondisi rumah.",
        ],
      },
      {
        id: "perawatan-pintu-kayu",
        heading: "Cara Merawat Pintu Kayu Agar Awet",
        paragraphs: ["Perawatan yang tepat membuat pintu kayu tetap indah selama bertahun-tahun. Terapkan kebiasaan berikut:"],
        list: [
          "Bersihkan debu secara rutin menggunakan kain kering yang lembut.",
          "Hindari menyiram atau membasahi pintu dengan air berlebihan.",
          "Jaga sirkulasi udara di sekitar pintu agar kelembapan tidak berlebih.",
          "Periksa engsel dan kunci, lalu kencangkan bila ada bagian yang longgar.",
          "Perbarui lapisan finishing ketika permukaan mulai kusam atau terkelupas.",
        ],
      },
      {
        id: "baja-atau-kayu",
        heading: "Pintu Kayu atau Pintu Baja, Mana yang Lebih Baik?",
        paragraphs: [
          "Jawabannya bergantung pada prioritas Anda. Pintu kayu unggul dalam kehangatan dan karakter natural, sedangkan pintu baja unggul dalam kesan kokoh dan keamanan untuk akses utama. Banyak rumah memadukan keduanya: pintu baja untuk bagian depan, pintu kayu untuk ruang dalam.",
          "Jika Anda masih bingung, baca juga panduan kami tentang pintu baja dan perbandingan material lainnya, lalu diskusikan kebutuhan Anda bersama tim Willmore.",
        ],
      },
      {
        id: "kesimpulan",
        heading: "Kesimpulan",
        paragraphs: [
          "Pintu kayu adalah pilihan ideal untuk menghadirkan suasana hangat dan berkarakter di rumah. Dengan desain yang sesuai, finishing yang tepat, dan perawatan rutin, pintu kayu akan tetap cantik dan berfungsi baik dalam waktu lama.",
          "Willmore membantu Anda memilih pintu kayu yang sesuai dengan gaya dan kebutuhan ruang, mulai dari konsultasi hingga after sales. Kunjungi halaman produk atau hubungi kami untuk memulai.",
        ],
      },
    ],
  },
  {
    slug: "panduan-memilih-pintu-aluminium",
    category: "Pintu Aluminium",
    title: "Pintu Aluminium: Solusi Ramping untuk Bukaan Lebar dan Rumah Modern",
    metaTitle: "Pintu Aluminium untuk Rumah Modern: Panduan | Willmore",
    description: "Kenali pintu aluminium Willmore yang tidak berkarat untuk teras outdoor dan kamar mandi, dengan garansi 10 tahun tidak berubah warna.",
    keyword: "pintu aluminium",
    image: aluminiumDoor,
    imageAlt: "Pintu aluminium berprofil ramping dengan kaca lebar menghadap taman",
    intro: [
      "Rumah modern identik dengan ruang terbuka, cahaya alami yang melimpah, dan koneksi yang mulus antara area dalam dan luar. Untuk mewujudkan konsep tersebut, pintu aluminium sering menjadi jawaban. Profilnya yang ramping memungkinkan penggunaan kaca yang lebar, sehingga ruangan terasa lebih lapang dan terang.",
      "Artikel ini membahas apa saja kelebihan pintu aluminium, jenis bukaan yang tersedia, lokasi yang paling cocok, hingga cara merawatnya supaya tetap berfungsi dengan baik.",
    ],
    sections: [
      {
        id: "mengenal-pintu-aluminium",
        heading: "Mengenal Pintu Aluminium",
        paragraphs: [
          "Pintu aluminium menggunakan profil aluminium sebagai rangka, biasanya dikombinasikan dengan panel kaca atau panel solid. Karena aluminium relatif ringan namun tetap kuat, profilnya bisa dibuat lebih tipis dibandingkan banyak material lain. Hasilnya adalah tampilan yang bersih, minimalis, dan kontemporer.",
          "Pintu aluminium banyak digunakan pada rumah tinggal, apartemen, kantor, hingga area komersial karena fleksibel dalam desain dan praktis dalam perawatan.",
        ],
      },
      {
        id: "kelebihan-aluminium",
        heading: "Kelebihan Pintu Aluminium",
        paragraphs: ["Pintu aluminium Willmore telah teruji dan dilengkapi garansi 10 tahun tidak berubah warna. Beberapa alasan material ini makin diminati antara lain:"],
        list: [
          "Tidak akan berkarat sehingga cocok untuk area lembap dan outdoor.",
          "Garansi 10 tahun tidak berubah warna dan sudah teruji.",
          "Ideal untuk pintu teras outdoor dan kamar mandi.",
          "Perawatan praktis dan permukaan mudah dibersihkan.",
          "Sudah termasuk satu set kusen dan handle yang siap dipasang.",
        ],
      },
      {
        id: "jenis-bukaan",
        heading: "Jenis Bukaan: Swing, Sliding, dan Folding",
        paragraphs: [
          "Pintu swing adalah pintu yang dibuka dengan cara didorong atau ditarik menggunakan engsel. Model ini cocok untuk akses yang membutuhkan kesan formal dan penutupan yang rapat. Pintu sliding dibuka dengan cara digeser pada rel, sehingga ideal untuk ruang yang terbatas karena tidak memerlukan area ayunan daun pintu.",
          "Ada juga model folding atau lipat, yang memungkinkan bukaan sangat lebar ketika seluruh daun pintu dilipat ke satu sisi. Model ini populer untuk menghubungkan ruang keluarga dengan taman atau teras. Pemilihan jenis bukaan sebaiknya disesuaikan dengan lebar bukaan, kebiasaan penggunaan, dan tata letak furnitur.",
        ],
      },
      {
        id: "lokasi-ideal",
        heading: "Lokasi Ideal untuk Pintu Aluminium",
        paragraphs: [
          "Pintu aluminium sangat cocok untuk pintu menuju taman, teras belakang, balkon, dan area kolam. Di lokasi ini, kebutuhan akan cahaya dan pemandangan biasanya lebih tinggi. Pintu aluminium juga sering dipakai untuk kamar mandi, dapur, dan area servis karena perawatannya praktis.",
          "Untuk pintu utama, aluminium dapat digunakan pada rumah dengan konsep modern yang mengutamakan tampilan ringan. Namun jika prioritas utama Anda adalah keamanan akses depan, pertimbangkan juga pintu baja sebagai alternatif.",
        ],
      },
      {
        id: "kaca-dan-privasi",
        heading: "Mengatur Kaca dan Privasi",
        paragraphs: [
          "Kaca bening memberikan pemandangan maksimal, tetapi tidak selalu cocok untuk area yang membutuhkan privasi. Anda bisa memilih kaca buram, kaca bermotif, atau menambahkan tirai dan kisi-kisi. Pertimbangkan arah matahari agar ruangan tetap nyaman tanpa silau berlebihan.",
          "Diskusikan jenis kaca bersama tim ahli, karena pilihan kaca memengaruhi kenyamanan, keamanan, dan tampilan pintu secara keseluruhan.",
        ],
      },
      {
        id: "perawatan-aluminium",
        heading: "Tips Merawat Pintu Aluminium",
        paragraphs: ["Pintu aluminium termasuk mudah dirawat. Ikuti langkah sederhana berikut agar tetap bekerja optimal:"],
        list: [
          "Bersihkan profil dan kaca dengan kain lembut serta cairan pembersih ringan.",
          "Jaga rel pintu sliding tetap bebas dari debu, pasir, dan kotoran.",
          "Periksa roda, engsel, dan kunci secara berkala.",
          "Hindari penggunaan sikat kasar yang dapat menggores permukaan.",
          "Perhatikan karet penyekat dan segera ganti bila sudah getas.",
        ],
      },
      {
        id: "kesalahan-umum",
        heading: "Hal yang Perlu Diperhatikan Sebelum Membeli",
        paragraphs: [
          "Pastikan ukuran bukaan diukur dengan teliti, termasuk ruang untuk rel atau ayunan pintu. Perhatikan juga apakah area pemasangan terkena hujan langsung, karena hal ini memengaruhi detail pemasangan dan penyekatan.",
          "Pemasangan yang rapi sama pentingnya dengan kualitas produk. Pintu aluminium yang dipasang tidak presisi bisa terasa berat saat digeser atau tidak menutup rapat. Karena itu, pilih penyedia yang menawarkan layanan instalasi dan pendampingan setelah pemasangan.",
        ],
      },
      {
        id: "kesimpulan",
        heading: "Kesimpulan",
        paragraphs: [
          "Pintu aluminium adalah pilihan ideal untuk Anda yang menginginkan tampilan ramping, bukaan lebar, dan ruang yang terang. Dengan memilih jenis bukaan dan kaca yang tepat, pintu aluminium dapat menjadi elemen utama yang mempercantik rumah modern.",
          "Tim Willmore siap membantu Anda memilih pintu aluminium sesuai kebutuhan ruang. Lihat pilihan produk atau mulai konsultasi bersama kami.",
        ],
      },
    ],
  },
  {
    slug: "panduan-memilih-pintu-pvc-upvc",
    category: "Pintu PVC & UPVC",
    title: "Pintu PVC dan UPVC: Perbedaan, Kelebihan, dan Tempat yang Tepat",
    metaTitle: "Pintu PVC & UPVC: Perbedaan dan Kelebihannya | Willmore",
    description: "Bandingkan PVC grade atas dan UPVC Willmore bergaransi 10 tahun, tidak getas, lentur, tahan keropos, serta dilengkapi handle dan kunci.",
    keyword: "pintu PVC UPVC",
    image: upvcDoor,
    imageAlt: "Pintu UPVC putih berprofil ramping pada interior rumah yang terang",
    intro: [
      "Tidak semua pintu di rumah membutuhkan material yang sama. Untuk area seperti kamar mandi, dapur, atau ruang servis, banyak orang mencari pintu yang praktis, tidak rewel, dan mudah dibersihkan. Di sinilah pintu PVC dan UPVC menjadi pilihan yang menarik.",
      "Meski namanya mirip, PVC dan UPVC memiliki karakter berbeda. Artikel ini menjelaskan perbedaan keduanya, kelebihan masing-masing, lokasi pemasangan yang ideal, serta tips merawatnya.",
    ],
    sections: [
      {
        id: "apa-itu-pvc-upvc",
        heading: "Apa Itu Pintu PVC dan UPVC?",
        paragraphs: [
          "PVC adalah singkatan dari polyvinyl chloride, sejenis material polimer yang banyak digunakan pada produk bangunan. Pintu PVC umumnya berbentuk panel ringan yang praktis dan sering dipakai untuk kamar mandi atau ruang dalam lainnya.",
          "UPVC atau unplasticized polyvinyl chloride adalah varian PVC tanpa bahan pelentur tambahan, sehingga karakternya lebih kaku. Material ini sering digunakan untuk profil kusen, jendela, dan pintu yang membutuhkan bentuk stabil, termasuk pintu dengan kombinasi kaca.",
        ],
      },
      {
        id: "perbedaan",
        heading: "Perbedaan Pintu PVC dan UPVC",
        paragraphs: [
          "Perbedaan utama terletak pada karakter dan penggunaannya. PVC Willmore berada di kelas atas, bukan sekadar mengejar harga termurah. Pilihannya diarahkan pada kualitas yang terasa sepadan tanpa harga berlebihan. UPVC Willmore bersifat lentur, tidak getas, dan tahan keropos untuk penggunaan semi-outdoor.",
          "UPVC Willmore juga sudah dilengkapi handle serta kunci, keunggulan yang tidak selalu tersedia pada produk sejenis, dan dilindungi garansi bahan 10 tahun. Pilihan akhirnya tetap perlu disesuaikan dengan fungsi ruang dan kondisi pemasangan.",
        ],
      },
      {
        id: "kelebihan",
        heading: "Kelebihan Pintu PVC dan UPVC",
        paragraphs: ["Berikut beberapa kelebihan yang membuat material ini banyak dipilih:"],
        list: [
          "PVC grade atas dengan keseimbangan kualitas dan harga yang sepadan.",
          "UPVC bergaransi bahan 10 tahun.",
          "UPVC tidak getas, lentur, dan tahan keropos untuk area semi-outdoor.",
          "UPVC dilengkapi handle dan dapat dikunci.",
          "Semua pembelian termasuk satu set kusen dan handle yang siap dipasang.",
        ],
      },
      {
        id: "lokasi",
        heading: "Lokasi Pemasangan yang Paling Cocok",
        paragraphs: [
          "Pintu PVC sangat populer untuk kamar mandi dan toilet, karena area tersebut lembap dan sering terkena cipratan air. Pintu ini juga cocok untuk gudang, ruang cuci, dan area servis lainnya.",
          "Pintu UPVC dapat digunakan pada area yang membutuhkan tampilan lebih rapi, seperti pintu menuju taman samping, pintu dapur, atau bukaan dengan kaca. Untuk pintu utama yang membutuhkan keamanan tinggi, pertimbangkan material lain seperti baja.",
        ],
      },
      {
        id: "tips-memilih",
        heading: "Tips Memilih Pintu PVC dan UPVC",
        paragraphs: [
          "Tentukan terlebih dahulu fungsi ruang dan tingkat penggunaan. Pintu kamar mandi yang dibuka-tutup berkali-kali setiap hari membutuhkan engsel dan kunci yang nyaman digunakan. Ukur bukaan dengan teliti, termasuk ketebalan dinding dan arah bukaan.",
          "Perhatikan juga warna dan motif agar selaras dengan keramik, kusen, dan elemen interior lain. Warna putih dan netral memberi kesan bersih, sedangkan motif tertentu dapat menambah karakter ruang.",
        ],
      },
      {
        id: "perawatan",
        heading: "Cara Merawat Pintu PVC dan UPVC",
        paragraphs: ["Perawatannya sangat sederhana. Beberapa kebiasaan berikut membantu pintu tetap awet:"],
        list: [
          "Lap permukaan dengan kain basah dan sabun ringan secara berkala.",
          "Hindari bahan kimia keras dan sikat kawat.",
          "Periksa engsel serta kunci, dan kencangkan bila mulai longgar.",
          "Jaga ventilasi ruang basah agar kelembapan tidak berlebihan.",
          "Hindari benturan keras yang dapat merusak panel.",
        ],
      },
      {
        id: "perbandingan",
        heading: "Perbandingan dengan Material Lain",
        paragraphs: [
          "Dibandingkan pintu kayu, PVC dan UPVC lebih praktis di area basah. Dibandingkan pintu baja, material ini lebih ringan dan cocok untuk ruang dalam, tetapi baja tetap lebih unggul untuk akses utama. Sementara aluminium menjadi pilihan untuk bukaan lebar dengan profil ramping.",
          "Setiap material memiliki peran masing-masing. Rumah yang dirancang dengan baik sering menggunakan kombinasi beberapa material sesuai fungsi setiap ruang.",
        ],
      },
      {
        id: "kesimpulan",
        heading: "Kesimpulan",
        paragraphs: [
          "Pintu PVC dan UPVC adalah solusi praktis untuk ruang yang mengutamakan kemudahan perawatan. Memahami perbedaan keduanya membantu Anda memilih produk yang tepat untuk setiap area rumah.",
          "Willmore menyediakan pilihan pintu PVC dan UPVC beserta layanan konsultasi, instalasi, dan after sales. Kunjungi halaman produk atau hubungi kami untuk mendapatkan arahan.",
        ],
      },
    ],
  },
  {
    slug: "mengenal-willmore-spesialis-pintu",
    category: "Brand Willmore",
    title: "Mengenal Willmore: Spesialis Pintu Berkualitas Sejak 2002",
    metaTitle: "Mengenal Willmore, Spesialis Pintu Sejak 2002 | Willmore",
    description: "Kenali Willmore, High Quality Door Specialist sejak 2002: pilihan pintu baja, kayu, aluminium, PVC, UPVC, serta layanan konsultasi hingga after sales.",
    keyword: "Willmore pintu",
    image: heroImage,
    imageAlt: "Interior arsitektur modern dengan pintu Willmore",
    intro: [
      "Memilih pintu sering dianggap sepele, padahal pintu memengaruhi keamanan, kenyamanan, dan tampilan rumah setiap hari. Willmore hadir untuk membantu proses itu menjadi lebih mudah dan terarah. Sejak 2002, Willmore dikenal sebagai High Quality Door Specialist yang fokus pada pintu berkualitas untuk rumah dan proyek.",
      "Artikel ini mengajak Anda mengenal Willmore lebih dekat: pilihan material yang tersedia, rangkaian layanannya, alasan mengapa pengalaman penting dalam memilih pintu, dan cara terhubung dengan Willmore melalui marketplace maupun media sosial.",
    ],
    sections: [
      {
        id: "siapa-willmore",
        heading: "Siapa Willmore?",
        paragraphs: [
          "Willmore adalah brand pintu yang berfokus pada kualitas, fungsi, dan desain. Dengan pengalaman sejak 2002, Willmore memahami bahwa setiap rumah memiliki kebutuhan yang berbeda, sehingga pendekatan yang digunakan tidak sekadar menjual produk, melainkan membantu pelanggan menemukan pintu yang tepat.",
          "Filosofi ini tercermin dalam layanan yang menyeluruh, mulai dari konsultasi awal hingga pendampingan setelah pintu terpasang.",
        ],
      },
      {
        id: "pilihan-material",
        heading: "Pilihan Material Pintu dari Willmore",
        paragraphs: ["Willmore menyediakan beberapa pilihan material untuk berbagai kebutuhan ruang:"],
        list: [
          "Pintu Baja — motif serat kayu natural, tahan cuaca, dan aman dengan 11 titik penguncian.",
          "Pintu Kayu — lapisan HMR yang lebih tahan rayap dengan ketebalan premium 4,2 cm.",
          "Pintu Aluminium — tidak berkarat dan bergaransi warna 10 tahun untuk area outdoor maupun kamar mandi.",
          "Pintu PVC & UPVC — PVC grade atas serta UPVC bergaransi yang dapat dikunci untuk area semi-outdoor.",
          "Setiap pembelian hadir sebagai satu set lengkap kusen dan handle, siap dipasang.",
        ],
      },
      {
        id: "layanan",
        heading: "Rangkaian Layanan dari Konsultasi hingga After Sales",
        paragraphs: [
          "Willmore percaya bahwa pintu yang baik lahir dari proses yang baik. Karena itu, layanan dimulai dengan konsultasi untuk memahami kebutuhan ruang, fungsi, gaya, dan pilihan material. Setelah itu, tim membantu pemilihan produk agar Anda dapat membandingkan karakter setiap material tanpa keputusan yang terburu-buru.",
          "Instalasi menjadi bagian dari rangkaian layanan agar hasil akhir sesuai kebutuhan proyek. Dan layanan tidak berhenti ketika pintu terpasang, karena Willmore tetap mendampingi melalui layanan after sales.",
        ],
      },
      {
        id: "mengapa-pengalaman-penting",
        heading: "Mengapa Pengalaman Penting dalam Memilih Pintu?",
        paragraphs: [
          "Pengalaman membantu mengenali detail yang sering terlewat: ukuran bukaan yang tidak presisi, arah bukaan yang kurang tepat, atau material yang tidak cocok dengan kondisi lokasi. Detail semacam ini berpengaruh besar pada kenyamanan penggunaan pintu dalam jangka panjang.",
          "Dengan pengalaman lebih dari dua dekade, Willmore dapat memberikan arahan yang relevan untuk berbagai kebutuhan, dari rumah tinggal hingga proyek yang lebih besar.",
        ],
      },
      {
        id: "cara-memilih-bersama-willmore",
        heading: "Cara Memilih Pintu Bersama Willmore",
        paragraphs: ["Agar konsultasi berjalan efektif, siapkan beberapa informasi berikut:"],
        list: [
          "Perkiraan ukuran bukaan pintu.",
          "Lokasi penggunaan pintu, misalnya pintu utama, kamar, atau kamar mandi.",
          "Material yang diminati atau gaya rumah yang diinginkan.",
          "Kebutuhan pemasangan dan jadwal proyek.",
        ],
      },
      {
        id: "belanja-online",
        heading: "Belanja Pintu Willmore Secara Online",
        paragraphs: [
          "Selain melalui konsultasi, produk Willmore juga tersedia di marketplace resmi, yaitu Shopee dan Tokopedia. Ini memudahkan Anda yang ingin melihat pilihan produk dan melakukan pembelian secara online.",
          "Untuk kebutuhan yang lebih spesifik, seperti ukuran khusus atau proyek dengan banyak unit, konsultasi langsung tetap menjadi cara terbaik agar produk yang dipilih benar-benar sesuai.",
        ],
      },
      {
        id: "media-sosial",
        heading: "Ikuti Willmore di Media Sosial",
        paragraphs: [
          "Dapatkan inspirasi desain pintu, informasi produk terbaru, dan tips perawatan melalui akun resmi Willmore di Instagram @willmoreofficial, TikTok @pintuwillmore, Facebook WillmoreOfficial1, dan YouTube @willmoreofficial.",
          "Melalui media sosial, Anda juga dapat melihat berbagai contoh penerapan pintu sebagai referensi sebelum menentukan pilihan untuk rumah Anda.",
        ],
      },
      {
        id: "kesimpulan",
        heading: "Kesimpulan",
        paragraphs: [
          "Willmore adalah mitra yang tepat untuk menemukan pintu berkualitas, dengan pilihan material lengkap dan layanan yang mendampingi dari awal hingga akhir. Pengalaman sejak 2002 menjadi dasar Willmore dalam membantu setiap pelanggan mengambil keputusan yang tepat.",
          "Siap menemukan pintu yang tepat untuk ruang Anda? Jelajahi produk Willmore atau mulai konsultasi hari ini.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const wordCount = (a: Article) =>
  [...a.intro, ...a.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])].join(" ").split(/\s+/).length;
import { recommendationArticles } from "@/lib/articles-rekomendasi";
articles.push(...recommendationArticles);
