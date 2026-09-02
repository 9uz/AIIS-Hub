/* =====================================================================
   Data mata kuliah: Basis Data (TI24318)
   Contoh penggunaan TEMA KLASIK \u2014 bilah navigasi atas, sampul berwarna,
   dan satu halaman bersambung dengan tabel jadwal bergaya tabel kuliah.
   ===================================================================== */
window.MK = window.MK || [];
window.MK.push({

  kode: 'TI24318',
  slug: 'basisdata',
  nama: 'Basis Data',
  tema: 'klasik',                  // <<< pembeda tema; hilangkan untuk memakai tema sidebar

  sks: '3 sks (Teori + Praktik)',
  semester: 'Gasal',
  tahunAjaran: '2026/2027',
  warna: '2c5f8a',
  ringkas: 'Perancangan basis data yang efektif dan efisien, dari analisis kebutuhan sampai optimasi dan tren terkini.',
  basisBerkas: 'berkas/basisdata/',

  pengampu: [
    { nama: 'Nama Dosen Pengampu, S.Kom., M.Kom.', peran: 'Dosen Pengampu', surel: 'dosen@pnm.ac.id' },
    { nama: 'Nama Asisten Laboratorium', peran: 'Asisten Praktikum' },
  ],

  sorotan: 'Mata kuliah ini fokus pada proses perancangan basis data yang <strong>efektif dan efisien</strong>, meliputi analisis kebutuhan, pemodelan konseptual, logika, dan fisik, implementasi, optimasi basis data, optimasi kueri, serta pengenalan teknologi basis data terbaru seperti NoSQL dan big data.',

  deskripsi: [
    'Kelas ini ditutup dengan proyek pemrograman langsung menggunakan SQL, PHP, dan Python. Proyek dikerjakan berkelompok dan dibimbing sejak pertemuan pertama.',
  ],

  topikUtama: [
    'Pengantar perancangan basis data, analisis kebutuhan, dan pemodelan konseptual dengan ERD.',
    'Transformasi ERD ke model relasional, normalisasi, dan denormalisasi.',
    'Perancangan fisik basis data, implementasi dengan SQL, serta optimasi performa.',
    'Keamanan dan integritas data, serta tren terkini.',
  ],

  prasyarat: 'Algoritma dan Pemrograman.',

  infoPenting: [
    ['Perkuliahan', 'R301, R313, R218'],
    ['Laboratorium', '16.30 \u2013 17.50 \u00b7 R301'],
    ['Perangkat', 'XAMPP, MySQL Workbench, DBeaver'],
  ],

  angka: [
    ['16', 'pertemuan'],
    ['6', 'Sub-CPMK'],
    ['5', 'tugas'],
    ['1', 'proyek'],
  ],

  pintasan: [
    ['Panduan Proyek Akhir', 'dokumen/panduan-proyek.pdf'],
    ['Daftar Kelompok', 'dokumen/daftar-kelompok.pdf'],
  ],

  identitas: [
    ['Bahan kajian', 'Data and Information Management'],
    ['Metode pembelajaran', 'Ceramah, studi kasus, dan praktik terbimbing'],
  ],

  subcpmk: [
    ['Sub-CPMK 1', 'Menjelaskan konsep dasar basis data relasional dan melakukan analisis kebutuhan data. (C2\u2013C3)'],
    ['Sub-CPMK 2', 'Menyusun model konseptual dengan ERD dan mentransformasikannya ke model relasional. (C3\u2013C4)'],
    ['Sub-CPMK 3', 'Menerapkan normalisasi sampai bentuk normal ketiga dan menjustifikasi keputusan denormalisasi. (C4)'],
    ['Sub-CPMK 4', 'Menyusun kueri SQL dan menganalisis rencana eksekusinya untuk kebutuhan optimasi. (C3\u2013C4)'],
    ['Sub-CPMK 5', 'Menjelaskan konsep keamanan, integritas, transaksi, dan konkurensi basis data. (C2\u2013C3)'],
    ['Sub-CPMK 6', 'Merancang dan mengimplementasikan basis data untuk satu studi kasus nyata beserta justifikasinya. (C4\u2013C6)'],
  ],

  catatanJadwal: 'Tautan yang belum aktif ditandai dengan teks abu-abu dan akan diisi menjelang pertemuan berlangsung.',

  jadwal: [
    {
      blok: 'Bagian 1 \u00b7 Analisis Kebutuhan dan Pemodelan Konseptual',
      pertemuan: [
        {
          n: '1', minggu: 'Minggu 1', tanggal: '2\u20136 Sep', label: 'Sub-CPMK 1', bobot: '5%', warna: '2c5f8a',
          agenda: [
            {
              judul: 'What Databases?', konsep: 'Pengantar perancangan basis data',
              materi: [['Pengantar: Perancangan Basis Data', '']],
              bacaan: [
                ['Welcome to SQL', 'https://youtu.be/IXycPq7MnwE'],
                ['Introduction To Database', 'https://www.youtube.com/watch?v=D-k-h0GuFmE&list=PLroEs25KGvwzmvIxYHRhoGTz9w8LeXek0'],
              ],
            },
            {
              judul: 'Proyek Kelompok', konsep: 'Pembentukan kelompok dan dokumentasi awal proyek',
              materi: [['Dokumentasi Awal', ''], ['Daftar Kelompok', '']],
            },
            {
              judul: 'Tugas 1 dirilis', konsep: 'Penyiapan perkakas',
              materi: [['Panduan pemasangan XAMPP', '']],
            },
          ],
        },
        {
          n: '2', minggu: 'Minggu 2', tanggal: '9\u201313 Sep', label: 'Sub-CPMK 1', bobot: '5%', warna: '2c5f8a',
          agenda: [
            {
              judul: 'Analisis Kebutuhan Data', konsep: 'Wawancara, observasi, dan telaah proses bisnis',
              materi: [['Slide: Analisis Kebutuhan', '']],
              bacaan: [['Requirements Gathering for Databases', '']],
            },
            { judul: 'Praktikum', konsep: 'Menyusun daftar kebutuhan data dari studi kasus', materi: [['Lembar kerja praktikum', '']] },
          ],
        },
        {
          n: '3', minggu: 'Minggu 3', tanggal: '16\u201320 Sep', label: 'Sub-CPMK 2', bobot: '8%', warna: '2c5f8a',
          agenda: [
            { judul: 'Pemodelan Entity-Relationship', konsep: 'Entitas, atribut, relasi, dan kardinalitas', materi: [['Slide: ERD', '']] },
            { judul: 'Tugas 2 dirilis', konsep: 'Menyusun ERD dari deskripsi kasus', materi: [['Lembar tugas', '']] },
          ],
        },
        {
          n: '4', minggu: 'Minggu 4', tanggal: '23\u201327 Sep', label: 'Sub-CPMK 2', bobot: '5%', warna: '2c5f8a',
          agenda: [
            { judul: 'ERD Lanjut', konsep: 'Relasi ternari, entitas lemah, dan generalisasi', materi: [['Slide: ERD Lanjut', '']] },
          ],
        },
      ],
    },
    {
      blok: 'Bagian 2 \u00b7 Model Relasional dan Normalisasi',
      pertemuan: [
        {
          n: '5', minggu: 'Minggu 5', tanggal: '30 Sep \u2013 4 Okt', label: 'Sub-CPMK 2', bobot: '5%', warna: '3a7ca5',
          agenda: [
            { judul: 'Transformasi ERD ke Relasional', konsep: 'Aturan pemetaan entitas dan relasi menjadi tabel', materi: [['Slide: Transformasi', '']] },
          ],
        },
        {
          n: '6', minggu: 'Minggu 6', tanggal: '7\u201311 Okt', label: 'Sub-CPMK 3', bobot: '8%', warna: '3a7ca5',
          agenda: [
            { judul: 'Normalisasi', konsep: 'Ketergantungan fungsional, bentuk normal pertama sampai ketiga', materi: [['Slide: Normalisasi', '']] },
            { judul: 'Tugas 3 dirilis', konsep: 'Normalisasi skema bermasalah', materi: [['Lembar tugas', '']] },
          ],
        },
        {
          n: '7', minggu: 'Minggu 7', tanggal: '14\u201318 Okt', label: 'Sub-CPMK 3', bobot: '5%', warna: '3a7ca5',
          agenda: [
            { judul: 'Denormalisasi', konsep: 'Kapan normalisasi justru merugikan, dan bagaimana menjustifikasinya', materi: [['Slide: Denormalisasi', '']] },
          ],
        },
        {
          n: '8', minggu: 'UTS', tanggal: '21\u201325 Okt', label: 'Sub-CPMK 1\u20133', bobot: '10%', warna: '8A8A96', jenis: 'ujian',
          agenda: [{ judul: 'Ujian Tengah Semester', konsep: 'Ujian tertulis 100 menit atas materi pertemuan 1\u20137', materi: [['Kisi-kisi UTS', '']] }],
        },
      ],
    },
    {
      blok: 'Bagian 3 \u00b7 Implementasi, Optimasi, dan Keamanan',
      pertemuan: [
        {
          n: '9', minggu: 'Minggu 9', tanggal: '28 Okt \u2013 1 Nov', label: 'Sub-CPMK 4', bobot: '5%', warna: '4a8fb5',
          agenda: [
            { judul: 'SQL Dasar', konsep: 'SELECT, JOIN, agregasi, dan pengelompokan', materi: [['Slide: SQL Dasar', '']], bacaan: [['SQL Tutorial \u2014 W3Schools', 'https://www.w3schools.com/sql/']] },
          ],
        },
        {
          n: '10', minggu: 'Minggu 10', tanggal: '4\u20138 Nov', label: 'Sub-CPMK 4', bobot: '8%', warna: '4a8fb5',
          agenda: [
            { judul: 'SQL Lanjut', konsep: 'Subkueri, view, stored procedure, dan window function', materi: [['Slide: SQL Lanjut', '']] },
            { judul: 'Tugas 4 dirilis', konsep: 'Penyusunan kueri untuk sepuluh kebutuhan informasi', materi: [['Lembar tugas', '']] },
          ],
        },
        {
          n: '11', minggu: 'Minggu 11', tanggal: '11\u201315 Nov', label: 'Sub-CPMK 4', bobot: '5%', warna: '4a8fb5',
          agenda: [
            { judul: 'Perancangan Fisik dan Pengindeksan', konsep: 'B-tree, indeks majemuk, dan pemilihan indeks', materi: [['Slide: Indeks', '']], bacaan: [['Use The Index, Luke!', 'https://use-the-index-luke.com/']] },
          ],
        },
        {
          n: '12', minggu: 'Minggu 12', tanggal: '18\u201322 Nov', label: 'Sub-CPMK 4', bobot: '5%', warna: '4a8fb5',
          agenda: [
            { judul: 'Optimasi Kueri', konsep: 'Membaca rencana eksekusi dan memperkirakan biaya kueri', materi: [['Slide: Optimasi Kueri', '']] },
          ],
        },
        {
          n: '13', minggu: 'Minggu 13', tanggal: '25\u201329 Nov', label: 'Sub-CPMK 5', bobot: '8%', warna: '4a8fb5',
          agenda: [
            { judul: 'Keamanan, Integritas, dan Transaksi', konsep: 'Hak akses, batasan integritas, sifat ACID, dan konkurensi', materi: [['Slide: Keamanan dan Transaksi', '']] },
            { judul: 'Tugas 5 dirilis', konsep: 'Telaah skenario konkurensi dan penentuan tingkat isolasi', materi: [['Lembar tugas', '']] },
          ],
        },
        {
          n: '14', minggu: 'Minggu 14', tanggal: '2\u20136 Des', label: 'Sub-CPMK 5', bobot: '5%', warna: '4a8fb5',
          agenda: [
            { judul: 'Tren Terkini: NoSQL dan Big Data', konsep: 'Kapan model relasional tidak lagi menjadi pilihan yang tepat', materi: [['Slide: NoSQL', '']] },
          ],
        },
      ],
    },
    {
      blok: 'Bagian 4 \u00b7 Proyek Akhir',
      pertemuan: [
        {
          n: '15', minggu: 'Minggu 15', tanggal: '9\u201313 Des', label: 'Sub-CPMK 6', bobot: '8%', warna: '6B5B95', jenis: 'proyek',
          agenda: [{ judul: 'Pendampingan Proyek Akhir', konsep: 'Kerja kelompok terbimbing: implementasi dan pengujian', materi: [['Rubrik penilaian proyek', '']] }],
        },
        {
          n: '16', minggu: 'UAS', tanggal: '16\u201320 Des', label: 'Sub-CPMK 1\u20136', bobot: '10%', warna: '8A8A96', jenis: 'ujian',
          agenda: [{ judul: 'Presentasi Proyek Akhir', konsep: 'Demonstrasi sistem, tanya-jawab, dan penyerahan laporan', materi: [['Ketentuan presentasi', '']] }],
        },
      ],
    },
  ],

  penilaian: {
    aturan: 'Kelas ini menggabungkan penilaian teori dan praktik. Proyek akhir dikerjakan berkelompok, tetapi penilaiannya memuat komponen individual melalui tanya-jawab saat presentasi.',
    komponen: [
      ['Aktivitas Partisipatif dan Praktikum', '40%', 'Kehadiran aktif, latihan terbimbing, dan lembar kerja praktikum mingguan.'],
      ['Tugas Terstruktur', '25%', 'Lima tugas pada pertemuan 1, 3, 6, 10, dan 13.'],
      ['Proyek Akhir', '15%', 'Rancangan, implementasi, dan laporan proyek kelompok.'],
      ['Ujian Tengah Semester', '10%', 'Ujian tertulis atas materi pertemuan 1\u20137.'],
      ['Ujian Akhir Semester', '10%', 'Presentasi proyek akhir disertai tanya-jawab individual.'],
    ],
    mutu: [
      ['A', '4,00', 'Sangat Baik', '82 &lt; nilai \u2264 100'],
      ['AB', '3,50', 'Lebih dari Baik', '75 &lt; nilai \u2264 82'],
      ['B', '3,00', 'Baik', '67 &lt; nilai \u2264 75'],
      ['BC', '2,50', 'Lebih dari Cukup', '59 &lt; nilai \u2264 67'],
      ['C', '2,00', 'Cukup', '49 &lt; nilai \u2264 59'],
      ['D', '1,00', 'Kurang', '39 &lt; nilai \u2264 49'],
      ['E', '0,00', 'Gagal', 'nilai \u2264 39'],
    ],
    ujian: [
      { judul: 'Ujian Tengah Semester', isi: 'Ujian tertulis terjadwal atas materi pertemuan 1\u20137, menekankan pemodelan dan normalisasi.', catatan: 'Diperbolehkan membawa satu lembar catatan tulisan tangan.' },
      { judul: 'Ujian Akhir Semester', isi: 'Presentasi proyek akhir: demonstrasi sistem, penjelasan rancangan, dan tanya-jawab individual.', catatan: 'Nilai perorangan dapat berbeda dari nilai kelompok.' },
    ],
  },

  tugas: [
    ['Tugas 1', 'Minggu 1', '5%', 'Pemasangan dan penyiapan perkakas kerja: XAMPP, MySQL, dan klien basis data.'],
    ['Tugas 2', 'Minggu 3', '5%', 'Menyusun ERD lengkap dari deskripsi kasus yang diberikan, disertai penjelasan asumsinya.'],
    ['Tugas 3', 'Minggu 6', '5%', 'Normalisasi satu skema basis data bermasalah sampai bentuk normal ketiga, disertai penjelasan tiap langkah.'],
    ['Tugas 4', 'Minggu 10', '5%', 'Penyusunan kueri SQL untuk sepuluh kebutuhan informasi yang ditentukan.'],
    ['Tugas 5', 'Minggu 13', '5%', 'Telaah skenario konkurensi dan penentuan tingkat isolasi yang tepat beserta alasannya.'],
  ],

  proyek: {
    judul: 'Proyek Akhir',
    sorotan: '<strong>Proyek kelompok.</strong> Kelompok dibentuk pada pertemuan pertama dan bekerja sepanjang semester. Implementasi memakai SQL, PHP, dan Python. Setiap kelompok mengambil kasus yang berbeda.',
    tautan: ['Unduh panduan proyek', 'dokumen/panduan-proyek.pdf'],
    tahap: [
      { cap: 'Tahap 1 \u00b7 Minggu 1\u20134', judul: 'Analisis dan Konseptual', butir: ['Pembentukan kelompok', 'Penentuan kasus dan lingkupnya', 'Analisis kebutuhan data', 'ERD konseptual'] },
      { cap: 'Tahap 2 \u00b7 Minggu 5\u201310', judul: 'Perancangan dan Implementasi', butir: ['Transformasi ke model relasional', 'Normalisasi skema', 'Pembuatan basis data dengan SQL', 'Antarmuka dasar dengan PHP atau Python'] },
      { cap: 'Tahap 3 \u00b7 Minggu 11\u201316', judul: 'Optimasi dan Presentasi', butir: ['Pengindeksan dan optimasi kueri', 'Pengaturan hak akses', 'Laporan akhir', 'Presentasi dan demonstrasi'] },
    ],
  },

  ketentuan: [
    { judul: 'Kelompok', butir: ['Terdiri atas 3\u20134 mahasiswa', 'Kasus tidak boleh sama antar-kelompok', 'Pembagian peran dicantumkan dalam laporan', 'Perubahan anggota harus seizin dosen'] },
    { judul: 'Pengumpulan', isi: 'Seluruh tugas dan laporan dikumpulkan melalui LMS dalam format PDF, kecuali berkas basis data yang dikumpulkan sebagai berkas dump SQL.', catatan: 'Keterlambatan dikenakan pengurangan 10% nilai komponen per hari kerja, maksimal tiga hari.' },
  ],

  referensi: {
    utama: [
      ['Silberschatz, Korth & Sudarshan', 'Database System Concepts, 7th ed.', 'McGraw-Hill, 2019'],
      ['Elmasri & Navathe', 'Fundamentals of Database Systems, 7th ed.', 'Pearson, 2016'],
    ],
    pendukung: [
      ['Markus Winand', 'Use The Index, Luke!', 'Panduan daring', 'https://use-the-index-luke.com/'],
      ['W3Schools', 'SQL Tutorial', 'Panduan daring', 'https://www.w3schools.com/sql/'],
      ['MySQL', 'MySQL Reference Manual', 'Dokumentasi resmi', 'https://dev.mysql.com/doc/'],
    ],
  },

  perangkat: 'XAMPP (Apache, MySQL, PHP), MySQL Workbench atau DBeaver untuk pemodelan dan eksplorasi, serta Python dengan pustaka <em>mysql-connector</em> untuk bagian pemrograman proyek akhir.',
});
