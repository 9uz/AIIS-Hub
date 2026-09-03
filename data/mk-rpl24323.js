/* Data mata kuliah: Data Science (TI24425) */
window.MK = window.MK || [];
window.MK.push({

  // ---------- Identitas ----------
  kode: 'RPL24323',
  slug: 'rpl24323',
  nama: 'Pemrograman Berbasis Web II  ',
  sks: '4 sks (Praktik & Teori)',
  tema: 'klasik', 
  bahanKajian: 'Data and Information Management',
  semester: 'Genap',
  tahunAjaran: '2026/2027',
  warna: '90AFC5',
  ringkas: 'Kerangka berpikir analitis untuk memahami, menilai, dan merancang solusi berbasis data.',
  basisBerkas: 'berkas/rpl24323',

  pengampu: [
    { nama: 'Gus Nanang Syaifuddiin, S.Kom., M.Kom.', peran: 'Dosen Pengampu' },
  ],
    sorotan: '<strong>Mata kuliah praktik, 2 sks (6 jam per minggu).</strong> Pembelajaran menggunakan metode <em>Project-Based Learning (PjBL)</em>: tutorial, pelaksanaan di laboratorium, presentasi, dan post-test untuk membangun proyek aplikasi web secara bertahap sepanjang semester[cite: 1].',

    angka: [
        ['16', 'pertemuan'],
        ['9', 'Sub-CPMK'],
        ['3', 'CPMK'],
        ['30%', 'bobot UAS (Showcase)'],
    ],

    pintasan: [
        ['Unduh RPS', 'dokumen/RPS_Praktik_Pemrograman_Berbasis_Web_II_2026.pdf'],
    ],

    // ---------- Silabus ----------
    identitas: [
        ['Kode MK', 'RPL24323'],
        ['Bahan kajian', 'Software Construction'],
        ['Bobot', '2 sks / 6 jam tatap muka per minggu (340 menit total)'],
        ['Klasifikasi beban belajar', 'MK Praktik — tutorial 60", persiapan 40", pelaksanaan 150", presentasi 40", post-test 50" per minggu'],
        ['Metode pembelajaran', 'Project-Based Learning (PjBL) & Praktikum Laboratorium'],
        ['Dosen pengampu', 'Bayu Prasetiyo Utomo, S.Kom., M.Eng.'],
    ],

    deskripsi: [
        'Mata kuliah ini fokus pada implementasi praktis konsep-konsep lanjutan dalam pengembangan aplikasi web menggunakan framework backend modern[cite: 1].',
        'Mahasiswa akan mengembangkan proyek aplikasi web secara bertahap sepanjang semester, menerapkan berbagai fitur lanjutan, dan mendalami best practices dalam pengembangan web profesional[cite: 1].',
    ],

    prasyarat: 'Tidak ada mata kuliah prasyarat formal[cite: 1]. Pengetahuan dasar pemrograman web dan konsep basis data diharapkan sudah dipahami.',

    cpl: [
        ['CPL07', 'Mampu membangun dan mengimplementasikan solusi perangkat lunak dengan memanfaatkan teknik, tools, dan bahasa pemrograman[cite: 1].'],
        ['CPL08', 'Mampu menguasai teknik penjaminan kualitas, deployment, operasional, dan integrasi dalam berbagai infrastruktur[cite: 1].'],
    ],

    cpmk: [
        ['CPMK072', 'Mampu menulis kode program menggunakan bahasa pemrograman yang relevan[cite: 1].', 'CPL07'],
        ['CPMK074', 'Mahasiswa dapat menerapkan teknik-teknik pemrograman dan menggunakan alat bantu pengembangan perangkat lunak (IDE, version control systems, dll.) secara efektif[cite: 1].', 'CPL07'],
        ['CPMK082', 'Mahasiswa mampu merancang dan mengimplementasikan strategi deployment yang efektif untuk berbagai jenis aplikasi[cite: 1].', 'CPL08'],
    ],

    subcpmk: [
        ['Sub-CPMK 1', 'Mampu menulis kode program sederhana menggunakan bahasa pemrograman yang relevan untuk aplikasi web (SCPMK0722301)[cite: 1].'],
        ['Sub-CPMK 2', 'Mampu menerapkan konsep dasar pemrograman seperti variabel, tipe data, operator, dan struktur kontrol dalam kode program (SCPMK0722302)[cite: 1].'],
        ['Sub-CPMK 3', 'Mampu menulis kode program yang terstruktur dan terdokumentasi dengan baik (SCPMK0722303)[cite: 1].'],
        ['Sub-CPMK 4', 'Mampu menggunakan IDE (Integrated Development Environment) untuk menulis, mengedit, dan men-debug kode program (SCPMK0742304)[cite: 1].'],
        ['Sub-CPMK 5', 'Mampu menerapkan teknik-teknik pemrograman seperti fungsi, modul, dan objek dalam kode program (SCPMK0742305)[cite: 1].'],
        ['Sub-CPMK 6', 'Mampu menggunakan sistem kontrol versi (version control systems) seperti Git untuk mengelola kode program (SCPMK0742306)[cite: 1].'],
        ['Sub-CPMK 7', 'Mampu memahami konsep dasar deployment seperti server, database, dan domain (SCPMK0822307)[cite: 1].'],
        ['Sub-CPMK 8', 'Mampu mengimplementasikan strategi deployment sederhana untuk aplikasi web menggunakan tools yang relevan (SCPMK0822308)[cite: 1].'],
        ['Sub-CPMK 9', 'Mampu melakukan konfigurasi dasar server web dan database untuk deployment aplikasi web (SCPMK0822309)[cite: 1].'],
    ],

    catatanCpmk: 'CPMK072 menaungi Sub-CPMK 1–3, CPMK074 menaungi Sub-CPMK 4–6, dan CPMK082 menaungi Sub-CPMK 7–9[cite: 1].',

    // ---------- Jadwal ----------
    catatanJadwal: 'Setiap pertemuan dilaksanakan di laboratorium komputer dengan metode Project-Based Learning (PjBL)[cite: 1]. Alokasi waktu terdiri dari Tutorial (60"), Persiapan (40"), Pelaksanaan (150"), Presentasi (40"), dan Post-Test (50")[cite: 1].',

    jadwal: [
        {
            blok: 'Sebelum Ujian Tengah Semester',
            pertemuan: [
                { n: '1', minggu: 'Minggu 1', topik: 'Persiapan Lingkungan Kerja', label: 'Sub-CPMK 4', bobot: '5%', catatan: 'Konsep IDE, Package Manager, dan Konfigurasi Environment[cite: 1]', media: 'VS Code, Modul 1[cite: 1]',
                    agenda: [
                        {
                            judul: 'Kontrak perkuliahan,', konsep: '',
                            materi: [['Slide: Pengantar dan Kontrak perkuliahan','slides/1.Pengantar_perkuliahan_v2.pdf' ]],
                        },
                        {
                            judul: 'Persiapan Lingkungan Kerja dan Praktikum', konsep: 'Persiapan Lingkungan Kerja dan Praktikum',
                            materi: [
                                ['Slide: Kontrak perkuliahan, Persiapan Lingkungan Kerja ...',''],
                                ['Modul: E-modul ...','https://trplpnm.notion.site/emodul-ppbw2' ],
                                ['Pengumpulan Lembar Kerja','https://forms.gle/5SbJ6LcmPnJh8ZaT6']
                            ],
                        },
                        ]
                },
                { n: '2', minggu: 'Minggu 2', topik: 'Version Control System & Inisiasi PjBL', label: 'Sub-CPMK 6', bobot: '4%', catatan: 'Konsep Repositori, Inisiasi Git, Percabangan, dan Sinkronisasi Remote[cite: 1]', media: 'VS Code, Git SCM, Akun Git, Modul 2[cite: 1]',
                    agenda: [],
                },
                { n: '3', minggu: 'Minggu 3', topik: 'Pemrograman Dasar MVC', label: 'Sub-CPMK 1', bobot: '5%', catatan: 'Konsep Arsitektur MVC, Pembuatan Routes, Penulisan Controller Dasar, dan Perenderan View Sederhana[cite: 1]', media: 'Framework Backend, Modul 3[cite: 1]' },
                { n: '4', minggu: 'Minggu 4', topik: 'Struktur Kontrol & Antarmuka', label: 'Sub-CPMK 2', bobot: '5%', catatan: 'Passing Controller ke View, Direktif Percabangan, Direktif Perulangan, dan Pencetakan Nilai Aman[cite: 1]', media: 'Framework Backend, Modul 4[cite: 1]' },
                { n: '5', minggu: 'Minggu 5', topik: 'Teknik Objek & Database', label: 'Sub-CPMK 5', bobot: '4%', catatan: 'Konfigurasi Koneksi DB, Konsep ORM vs SQL, Pembuatan Migration Tabel, dan Pembuatan Model Relasi[cite: 1]', media: 'Framework Backend, Modul 5[cite: 1]' },
                { n: '6', minggu: 'Minggu 6', topik: 'Logika ORM Lanjutan (CRUD)', label: 'Sub-CPMK 2', bobot: '5%', catatan: 'Operasi Create, Read, Update, Delete, serta Filtering Data[cite: 1]', media: 'Framework Backend, Modul 6[cite: 1]' },
                { n: '7', minggu: 'Minggu 7', topik: 'Kode Terstruktur & Validasi', label: 'Sub-CPMK 3', bobot: '5%', catatan: 'Validasi Masukan Server-side, Penanganan Pesan Error, Standarisasi Clean Code, dan Komentar Dokumentasi[cite: 1]', media: 'Framework Backend, Modul 7[cite: 1]' },
                { n: '8', minggu: 'Minggu 8', topik: 'Evaluasi Tengah Semester (UTS)', label: 'Minggu 1–7', bobot: '10%', catatan: 'Pengembangan Basis Aplikasi Web MVC Terintegrasi Database[cite: 1]', jenis: 'ujian' },
            ]
        },
        {
            blok: 'Setelah Ujian Tengah Semester',
            pertemuan: [
                { n: '9', minggu: 'Minggu 9', topik: 'REST API Dasar', label: 'Sub-CPMK 3', bobot: '5%', catatan: 'Konsep Stateless & RESTful, Endpoint API, Respon JSON, dan Kode Status HTTP[cite: 1]', media: 'Framework Backend, Modul 9[cite: 1]' },
                { n: '10', minggu: 'Minggu 10', topik: 'Modul Pihak Ketiga & Ekosistem', label: 'Sub-CPMK 5', bobot: '4%', catatan: 'Instalasi via Composer, Integrasi Pustaka Controller, serta Ekspor PDF/Excel[cite: 1]', media: 'Framework Backend, Modul 10[cite: 1]' },
                { n: '11', minggu: 'Minggu 11', topik: 'Pengujian API', label: 'Sub-CPMK 5', bobot: '4%', catatan: 'Instalasi Postman, Transmisi Data (POST/PUT), Body Payload, dan Pengujian Autentikasi[cite: 1]', media: 'Framework Backend, Modul 11[cite: 1]' },
                { n: '12', minggu: 'Minggu 12', topik: 'Git Resolusi Konflik', label: 'Sub-CPMK 6', bobot: '4%', catatan: 'Simulasi Merge Conflict, Pesan Indikator Konflik, Resolusi Konflik di IDE, serta Code Review & Sinkronisasi[cite: 1]', media: 'Framework Backend, Modul 12[cite: 1]' },
                { n: '13', minggu: 'Minggu 13', topik: 'Konfigurasi Lingkungan Server', label: 'Sub-CPMK 9', bobot: '3%', catatan: 'Modifikasi Variabel .env, Ekspor Basis Data SQL, Persiapan Kredensial Server, dan Audit Keamanan Minor[cite: 1]', media: 'Framework Backend, Modul 13[cite: 1]' },
                { n: '14', minggu: 'Minggu 14', topik: 'Persiapan Deployment', label: 'Sub-CPMK 7', bobot: '4%', catatan: 'Optimalisasi Asset UI, Registrasi cPanel/PaaS, Pembuatan Database Remote, dan Strategi Pengunggahan[cite: 1]', media: 'Framework Backend, Modul 14[cite: 1]' },
                { n: '15', minggu: 'Minggu 15', topik: 'Peluncuran Web (Deployment)', label: 'Sub-CPMK 8', bobot: '3%', catatan: 'Sinkronisasi Push to Deploy, Impor DB ke Server Remote, Penyesuaian Path Root, dan Uji Coba Domain Publik[cite: 1]', media: 'Framework Backend, Modul 15[cite: 1]' },
                { n: '16', minggu: 'Minggu 16', topik: 'Evaluasi Akhir Semester (UAS)', label: 'Minggu 1–15', bobot: '30%', catatan: 'Showcase Proyek Akhir: Presentasi Sistem Sesuai Tema Proyek Berkelanjutan PjBL[cite: 1]', jenis: 'ujian' },
            ]
        },
    ],

    // ---------- Penilaian ----------
    penilaian: {
        aturan: 'Penilaian berbasis luaran praktikum mingguan (URL repositori remote & log commit), unjuk kerja PjBL, serta stabilitas aplikasi web pada domain publik saat UAS[cite: 1].',
        komponen: [
            ['Unjuk Kerja & Lembar Kerja Mingguan', '60%', 'Penilaian praktikum berkala pada minggu 1–7 dan 9–15 (bobot 3%–5% per pertemuan)[cite: 1].'],
            ['Evaluasi Tengah Semester (UTS)', '10%', 'Evaluasi praktikum pengembangan aplikasi web terintegrasi database pada pertemuan 8[cite: 1].'],
            ['Evaluasi Akhir Semester (UAS)', '30%', 'Showcase produk proyek akhir yang dipresentasikan dan dapat diakses publik secara stabil[cite: 1].'],
        ],
    },

    // ---------- Sumber Rujukan ----------
    referensi: {
        utama: [
            ['Stauffer, M.', 'Laravel: Up & Running: A Framework for Building Modern PHP Apps', 'O\'Reilly Media, 2019[cite: 1]'],
            ['Dokumentasi Resmi', 'Dokumentasi resmi framework Laravel', '[cite: 1]'],
        ],
        pendukung: [
            ['Conrod, B. & Zammetti, F.', 'Web Development with Node and Express', 'O\'Reilly Media, 2020[cite: 1]'],
            ['Fowler, M.', 'Refactoring: Improving the Design of Existing Code', 'Addison-Wesley Professional, 2018[cite: 1]'],
            ['Newman, S.', 'Building Microservices: Designing Fine-Grained Systems', 'O\'Reilly Media, 2021[cite: 1]'],
            ['Nygard, M.', 'Release It!: Design and Deploy Production-Ready Software', 'Pragmatic Bookshelf, 2018[cite: 1]'],
        ],
    },

    perangkat: 'VS Code, Git SCM, Framework Backend (Laravel), Composer, Postman, cPanel/PaaS, dan Web/Database Server[cite: 1].',
});