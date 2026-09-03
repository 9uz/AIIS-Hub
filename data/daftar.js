/* =====================================================================
   KONFIGURASI SITUS
   ---------------------------------------------------------------------
   Berkas ini adalah satu-satunya tempat Anda mendaftarkan mata kuliah.
   Untuk menambah mata kuliah baru:
     1. Salin data/mk-contoh.js menjadi data/mk-<kode>.js
     2. Isi datanya
     3. Tambahkan nama berkasnya ke dalam array "berkasMataKuliah" di bawah
   Tidak ada proses build. Cukup muat ulang halaman.
   ===================================================================== */

window.SITUS = {
  institusi: 'Politeknik Negeri Madiun',
  jurusan: 'Jurusan Teknik',
  prodi: 'Program Studi Teknologi Rekayasa Perangkat Lunak',
  tahunAjaran: '2026/2027',
  judulBeranda: 'AIIS-Hub',
  keteranganBeranda: 'Kumpulan rencana pembelajaran, jadwal, dan bahan ajar mata kuliah Program Studi Teknologi Rekayasa Perangkat Lunak.',

  // Tautan yang muncul di bagian bawah sidebar pada semua halaman
  pintasanGlobal: [
    ['Laman Program Studi', 'https://www.pnm.ac.id'],
    //['CS 189 Berkeley', 'https://eecs189.org/'],
  ],

  berkasMataKuliah: [
    'mk-ti24425.js',      // Data Science  (Tema Klasik)
	'mk-rpl24323.js', // Pemrograman web II
	'mk-rpl24545.js', // data science TRPL
  ],
};
