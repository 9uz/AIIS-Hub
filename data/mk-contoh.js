/* =====================================================================
   TEMPLATE MATA KULIAH
   ---------------------------------------------------------------------
   Salin berkas ini, ganti namanya menjadi data/mk-<kode>.js, isi datanya,
   lalu daftarkan nama berkasnya di data/daftar.js.

   Hampir seluruh bagian bersifat OPSIONAL. Bagian yang tidak Anda isi
   otomatis tidak ditampilkan, dan menu navigasinya ikut menyesuaikan.
   Yang WAJIB hanya: kode, slug, nama, dan jadwal.
   ===================================================================== */

window.MK = window.MK || [];
window.MK.push({

  // ---------- WAJIB ----------
  kode: 'TI24318',
  slug: 'ti24318',                 // dipakai pada alamat: #/ti24318/jadwal
  nama: 'Basis Data Terapan',

  // ---------- Identitas (opsional) ----------
  sks: '3 sks (Teori + Praktik)',
  semester: 'Gasal',
  tahunAjaran: '2026/2027',
  warna: '8a5b12',                 // warna aksen mata kuliah, tanpa tanda #
  ringkas: 'Perancangan, pembuatan, dan optimasi basis data relasional untuk kebutuhan aplikasi nyata.',
  basisBerkas: 'berkas/ti24318/',  // seluruh path berkas di bawah relatif terhadap ini

  pengampu: [
    { nama: 'Nama Dosen Pengampu, S.Kom., M.Kom.', peran: 'Dosen Pengampu' },
  ],

  sorotan: 'Berkas ini adalah <strong>contoh</strong> yang disertakan untuk menunjukkan bahwa situs dapat memuat lebih dari satu mata kuliah. Isinya belum lengkap dan hanya memperlihatkan bagian-bagian yang tersedia.',

  angka: [
    ['16', 'pertemuan'],
    ['6', 'Sub-CPMK'],
  ],

  // ---------- Silabus (opsional) ----------
  identitas: [
    ['Bahan kajian', 'Data and Information Management'],
    ['Metode pembelajaran', 'Ceramah, studi kasus, dan praktik terbimbing'],
  ],

  deskripsi: [
    'Mata kuliah ini membahas perancangan basis data relasional mulai dari pemodelan konseptual hingga penerapan pada sistem nyata, termasuk normalisasi, penyusunan kueri, pengindeksan, dan pertimbangan kinerja.',
  ],

  prasyarat: 'Algoritma dan Pemrograman.',

  cpl: [
    ['CPL04', 'Mampu mengidentifikasi dan memecahkan masalah teknis dengan pendekatan praktis modern.'],
  ],

  subcpmk: [
    ['Sub-CPMK 1', 'Menjelaskan konsep dasar basis data relasional dan model entity-relationship. (C2)'],
    ['Sub-CPMK 2', 'Menganalisis rancangan basis data dan menerapkan normalisasi sampai bentuk normal ketiga. (C4)'],
    ['Sub-CPMK 3', 'Menyusun kueri SQL untuk kebutuhan pengambilan dan pengubahan data. (C3)'],
    ['Sub-CPMK 4', 'Menganalisis rencana eksekusi kueri dan menjustifikasi strategi pengindeksan. (C4)'],
    ['Sub-CPMK 5', 'Menjelaskan konsep transaksi, konkurensi, dan pemulihan. (C2\u2013C3)'],
    ['Sub-CPMK 6', 'Merancang basis data untuk satu studi kasus nyata beserta justifikasinya. (C4\u2013C6)'],
  ],

  // ---------- Jadwal (wajib) ----------
  jadwal: [
    {
      blok: 'Sebelum Ujian Tengah Semester',
      pertemuan: [
        { n: '1', topik: 'Pengantar Basis Data dan Model Relasional', label: 'Sub-CPMK 1', bobot: '5%', warna: '8a5b12', catatan: 'Kontrak perkuliahan \u00b7 Konsep dasar' },
        { n: '2', topik: 'Pemodelan Entity-Relationship', label: 'Sub-CPMK 1', bobot: '5%', warna: '8a5b12', catatan: 'Entitas, relasi, kardinalitas' },
        { n: '3', topik: 'Normalisasi', label: 'Sub-CPMK 2', bobot: '8%', warna: '8a5b12', catatan: 'Bentuk normal pertama sampai ketiga \u00b7 Tugas 1' },
        { n: '4', topik: 'SQL Dasar', label: 'Sub-CPMK 3', bobot: '5%', warna: '8a5b12', catatan: 'SELECT, JOIN, agregasi' },
        { n: '5', topik: 'SQL Lanjut', label: 'Sub-CPMK 3', bobot: '8%', warna: '8a5b12', catatan: 'Subkueri, window function \u00b7 Tugas 2' },
        { n: '6', topik: 'Pengindeksan', label: 'Sub-CPMK 4', bobot: '5%', warna: '8a5b12', catatan: 'B-tree, indeks majemuk' },
        { n: '7', topik: 'Rencana Eksekusi dan Kinerja Kueri', label: 'Sub-CPMK 4', bobot: '8%', warna: '8a5b12', catatan: 'EXPLAIN, biaya kueri \u00b7 Tugas 3' },
        { n: '8', topik: 'Ujian Tengah Semester', label: 'Sub-CPMK 1\u20134', bobot: '5%', warna: '8A8A96', catatan: 'Ujian tertulis 100 menit', jenis: 'ujian' },
      ]
    },
    {
      blok: 'Setelah Ujian Tengah Semester',
      pertemuan: [
        { n: '9', topik: 'Transaksi dan Sifat ACID', label: 'Sub-CPMK 5', bobot: '5%', warna: '8a5b12', catatan: 'Atomicity, consistency, isolation, durability' },
        { n: '10', topik: 'Kendali Konkurensi', label: 'Sub-CPMK 5', bobot: '8%', warna: '8a5b12', catatan: 'Penguncian, tingkat isolasi \u00b7 Tugas 4' },
        { n: '11', topik: 'Pemulihan dan Cadangan Data', label: 'Sub-CPMK 5', bobot: '5%', warna: '8a5b12', catatan: 'Write-ahead log, strategi pencadangan' },
        { n: '12', topik: 'Keamanan dan Hak Akses', label: 'Sub-CPMK 5', bobot: '5%', warna: '8a5b12', catatan: 'Peran, hak akses, audit' },
        { n: '13', topik: 'Basis Data Non-Relasional', label: 'Sub-CPMK 6', bobot: '8%', warna: '8a5b12', catatan: 'Kapan relasional tidak lagi tepat \u00b7 Tugas 5' },
        { n: '14', topik: 'Proyek Akhir \u2014 Perancangan', label: 'Sub-CPMK 6', bobot: '4%', warna: '6B5B95', catatan: 'Kerja kelompok terbimbing', jenis: 'proyek' },
        { n: '15', topik: 'Proyek Akhir \u2014 Penerapan dan Laporan', label: 'Sub-CPMK 6', bobot: '6%', warna: '6B5B95', catatan: 'Kerja kelompok terbimbing', jenis: 'proyek' },
        { n: '16', topik: 'Ujian Akhir Semester', label: 'Sub-CPMK 1\u20136', bobot: '10%', warna: '8A8A96', catatan: 'Presentasi proyek akhir', jenis: 'ujian' },
      ]
    },
  ],

  // ---------- Penilaian (opsional) ----------
  penilaian: {
    komponen: [
      ['Aktivitas Partisipatif', '55%', 'Diskusi kasus dan praktik terbimbing di kelas.'],
      ['Tugas Terstruktur', '20%', 'Lima tugas pada pertemuan 3, 5, 7, 10, dan 13.'],
      ['Hasil Proyek', '10%', 'Proyek akhir Tahap 1 dan Tahap 2.'],
      ['Ujian Tengah Semester', '5%', 'Ujian tertulis terjadwal.'],
      ['Ujian Akhir Semester', '10%', 'Presentasi proyek akhir.'],
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
  },

  // ---------- Tugas (opsional) ----------
  tugas: [
    ['Tugas Terstruktur 1', 'Pertemuan 3', '4%', 'Normalisasi satu skema basis data yang bermasalah, disertai penjelasan tiap langkahnya.'],
    ['Tugas Terstruktur 2', 'Pertemuan 5', '4%', 'Penyusunan kueri untuk sepuluh kebutuhan informasi yang diberikan.'],
    ['Tugas Terstruktur 3', 'Pertemuan 7', '4%', 'Analisis rencana eksekusi kueri lambat dan usulan pengindeksan beserta alasannya.'],
    ['Tugas Terstruktur 4', 'Pertemuan 10', '4%', 'Telaah skenario konkurensi dan penentuan tingkat isolasi yang tepat.'],
    ['Tugas Terstruktur 5', 'Pertemuan 13', '4%', 'Justifikasi pemilihan antara basis data relasional dan non-relasional untuk satu kasus.'],
  ],

  // ---------- Referensi (opsional) ----------
  referensi: {
    utama: [
      ['Silberschatz, Korth & Sudarshan', 'Database System Concepts, 7th ed.', 'McGraw-Hill, 2019'],
    ],
    pendukung: [
      ['Markus Winand', 'SQL Performance Explained', '2012', 'https://use-the-index-luke.com/'],
    ],
  },
});
