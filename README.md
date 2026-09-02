# Situs Mata Kuliah

Situs statis untuk menerbitkan rencana pembelajaran, jadwal, dan bahan ajar mata kuliah.
Seluruh isi dibaca dari berkas data, sehingga satu situs dapat memuat banyak mata kuliah
tanpa perlu menyentuh kode HTML.

## Menjalankan

Buka `index.html` langsung di peramban. Tidak ada proses build, tidak ada dependensi,
tidak perlu server. Untuk menerbitkannya, unggah seluruh folder apa adanya ke
GitHub Pages, Netlify, atau server kampus.

## Struktur

```
index.html              Kerangka halaman (tidak perlu diubah)
assets/style.css        Tampilan
assets/app.js           Mesin render dan navigasi
data/daftar.js          Konfigurasi situs dan daftar mata kuliah
data/mk-ti24425.js      Data mata kuliah Data Science (tema sidebar)
data/mk-basisdata.js    Data mata kuliah Basis Data (tema klasik)
data/mk-contoh.js       Template mata kuliah baru (tidak didaftarkan)
berkas/<kode>/          Slide dan dokumen tiap mata kuliah
```

## Menambah mata kuliah

1. Salin `data/mk-contoh.js` menjadi `data/mk-<kode>.js`
2. Isi datanya
3. Tambahkan nama berkas tersebut ke `berkasMataKuliah` di `data/daftar.js`
4. Buat folder `berkas/<kode>/` untuk slide dan dokumennya
5. Muat ulang halaman

## Bagian yang wajib dan opsional

Yang **wajib** hanya empat: `kode`, `slug`, `nama`, dan `jadwal`.

Seluruh bagian lain bersifat opsional. Bagian yang tidak diisi otomatis tidak
ditampilkan, dan menu navigasinya ikut menyesuaikan. Mata kuliah tanpa proyek
akhir, misalnya, tidak akan menampilkan halaman Tugas & Proyek jika `tugas`,
`proyek`, dan `kegiatan` sama-sama kosong.

## Alamat halaman

Navigasi memakai tanda pagar, sehingga tetap bekerja pada hosting statis apa pun
dan alamatnya dapat disalin serta dibagikan:

```
#/                       Daftar mata kuliah
#/ti24425/jadwal         Jadwal
#/ti24425/silabus        Silabus
#/ti24425/penilaian      Penilaian
#/ti24425/tugas          Tugas & Proyek
#/ti24425/sumber         Sumber Rujukan
```

## Fitur pembantu

- **Penyaring jadwal.** Kotak pencarian di halaman jadwal menyaring pertemuan
  berdasarkan nomor, topik, Sub-CPMK, maupun catatannya.
- **Pemeriksa bobot.** Jumlah bobot komponen penilaian dihitung otomatis. Bila
  totalnya bukan 100%, barisnya ditandai merah beserta peringatan.
- **Warna per pertemuan.** Kolom `warna` pada tiap pertemuan menghasilkan pita
  berwarna di sisi kiri, berguna untuk menandai blok materi yang berkaitan.
- **Berkas otomatis.** Pertemuan yang mengisi `berkas` mendapat tombol unduh;
  yang tidak, diberi label sesuai `jenis` (`ujian`, `proyek`, atau kosong).

## Dua tema

Setiap mata kuliah memilih temanya sendiri lewat bidang `tema`.

| Tema | Nilai | Bentuk |
|---|---|---|
| Sidebar | `'samping'` atau dikosongkan | Menu di sisi kiri, tiap bagian jadi halaman terpisah |
| Klasik | `'klasik'` | Bilah navigasi atas, sampul berwarna, satu halaman bersambung |

Tema klasik cocok untuk mata kuliah yang jadwalnya padat dengan banyak kegiatan
per minggu, karena tabel jadwalnya dapat memuat beberapa baris kegiatan dalam
satu pertemuan. Warna sampul dan lencana pertemuan mengikuti bidang `warna`.

### Bidang khusus tema klasik

| Bidang | Keterangan |
|---|---|
| `topikUtama` | Daftar topik yang ditampilkan pada bagian Beranda |
| `infoPenting` | Kotak informasi di kolom kanan, misalnya ruang dan jam laboratorium |
| `pengampu[].surel`, `pengampu[].foto` | Ditampilkan pada bagian Pengampu |
| `pertemuan[].minggu` | Teks lencana, misalnya `'Minggu 1'` atau `'UTS'` |
| `pertemuan[].tanggal` | Rentang tanggal, misalnya `'2–6 Sep'` |
| `pertemuan[].agenda` | Beberapa kegiatan dalam satu pertemuan |

### Struktur agenda

Satu pertemuan dapat memuat beberapa kegiatan, masing-masing menjadi satu baris
tabel. Baris pertama membawa lencana dan tanggalnya.

```js
{
  n: '1', minggu: 'Minggu 1', tanggal: '2–6 Sep',
  label: 'Sub-CPMK 1', bobot: '5%', warna: '2c5f8a',
  agenda: [
    {
      judul: 'What Databases?',
      konsep: 'Pengantar perancangan basis data',
      materi: [['Slide pengantar', 'slides/p01.pdf']],
      bacaan: [['Welcome to SQL', 'https://youtu.be/IXycPq7MnwE']]
    },
    {
      judul: 'Proyek Kelompok',
      konsep: 'Pembentukan kelompok',
      materi: [['Dokumentasi Awal', '']]     // url kosong = tautan belum aktif
    }
  ]
}
```

Tautan dengan url kosong ditampilkan sebagai teks abu-abu bertanda kurung siku,
sehingga jadwal tetap dapat diterbitkan sebelum seluruh bahannya siap.

Pertemuan tanpa `agenda` tetap bekerja: `topik`, `catatan`, dan `berkas` dipakai
untuk membentuk satu baris tabel secara otomatis. Artinya data mata kuliah bertema
sidebar dapat dipindah ke tema klasik hanya dengan menambahkan `tema: 'klasik'`.

## Acuan bidang data

| Bidang | Jenis | Keterangan |
|---|---|---|
| `kode`, `slug`, `nama` | teks | Wajib. `slug` dipakai pada alamat halaman |
| `tema` | teks | `'klasik'` atau dikosongkan untuk tema sidebar |
| `sks`, `semester`, `tahunAjaran`, `ringkas` | teks | Tampil di kepala halaman dan kartu daftar |
| `warna` | teks | Kode heksadesimal tanpa `#`, jadi warna aksen mata kuliah |
| `basisBerkas` | teks | Awalan untuk seluruh path berkas, misalnya `berkas/ti24425/` |
| `pengampu` | larik objek | `{ nama, peran }` |
| `sorotan` | HTML | Kotak pengantar di halaman jadwal |
| `angka` | larik pasangan | Kartu ringkasan angka, `['16', 'pertemuan']` |
| `pintasan` | larik pasangan | Tautan di sidebar, relatif terhadap `basisBerkas` |
| `identitas`, `deskripsi`, `prasyarat` | — | Halaman Silabus |
| `cpl`, `cpmk`, `subcpmk` | larik larik | Tabel capaian pembelajaran |
| `jadwal` | larik blok | Wajib. Tiap blok berisi `blok` dan `pertemuan` |
| `penilaian` | objek | `aturan`, `komponen`, `rekonsiliasi`, `mutu`, `ujian` |
| `tugas` | larik larik | `[nama, kapan, bobot, uraian]` |
| `proyek`, `ketentuan`, `kegiatan` | objek | Halaman Tugas & Proyek |
| `referensi` | objek | `utama` dan `pendukung`, tiap butir `[penulis, judul, penerbit, url?]` |
| `atribusi`, `berkasKuliah`, `perangkat` | — | Halaman Sumber Rujukan |

### Bidang satu pertemuan

```js
{
  n: '4',                                  // nomor pertemuan
  topik: 'Regresi Linier',                 // judul
  label: 'Sub-CPMK 4',                     // penanda kecil
  bobot: '5%',
  warna: '21295C',                         // pita kiri
  catatan: 'MSE, gradient descent, SGD',
  berkas: 'slides/P04.pptx',               // opsional, menghasilkan tombol unduh
  jenis: 'ujian'                           // opsional: 'ujian' atau 'proyek'
}
```

## Catatan

Bidang `sorotan`, `penilaian.aturan`, `proyek.sorotan`, dan `perangkat` diperlakukan
sebagai HTML sehingga dapat memuat `<strong>` atau `<em>`. Bidang lainnya di-escape
otomatis dan aman diisi teks apa adanya.
