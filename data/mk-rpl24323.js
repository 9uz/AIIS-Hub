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

  sorotan: '<strong>Mata kuliah teori, 4 sks.</strong> Pembelajaran memakai metode <em>case method</em>: ceramah interaktif, diskusi kasus, dan latihan terbimbing di kelas. Kegiatan berbasis komputer berlangsung di luar jam tatap muka sebagai penugasan terstruktur dan bersifat opsional.',

  angka: [
    ['16', 'pertemuan'],
    ['12', 'Sub-CPMK'],
    ['5', 'tugas terstruktur'],
    ['55%', 'aktivitas partisipatif'],
  ],

  pintasan: [
    ['Unduh RPS', 'dokumen/RPS_TI_Data_Science_2026_Revisi_v2.docx'],
    ['Dokumen Tugas Akhir', 'dokumen/Tugas_Studi_Kasus_Akhir_Data_Science_Revisi.docx'],
  ],

  // ---------- Silabus ----------
  identitas: [
    ['Bahan kajian', 'Data and Information Management'],
    ['Bobot', '3 sks (Teori) \u00b7 150 menit tatap muka per minggu'],
    ['Klasifikasi beban belajar', 'MK Kompetensi \u2014 tatap muka 150 menit, penugasan terstruktur 180 menit, belajar mandiri 180 menit per minggu'],
    ['Metode pembelajaran', 'Case method, didukung ceramah interaktif dan latihan terbimbing'],
  ],

  deskripsi: [
    'Mata kuliah ini membekali mahasiswa dengan kerangka berpikir analitis dalam memahami, menilai, dan merancang solusi berbasis data. Pembahasan diawali dengan konsep dasar Data Science, etika profesional dan privasi data, serta anatomi pipeline Data Science beserta persoalan kualitas data yang menyertainya.',
    'Mahasiswa kemudian mempelajari elemen learning problem dan strategi pembagian data, dilanjutkan pemodelan prediktif meliputi regresi linier, Gradient Descent, regularisasi, Maximum Likelihood Estimation, bias-variance trade-off, klasifikasi linier dan multi-kelas, metrik evaluasi, cross-validation dan tuning hyperparameter, model berbasis pohon dan ensemble, serta clustering dan dasar probabilitas. Bagian akhir membahas arsitektur Neural Network hingga CNN, RNN, dan Large Language Model secara konseptual beserta keterbatasan dan implikasi etisnya.',
    'Mata kuliah ditutup dengan Studi Kasus Akhir berkelompok berupa perancangan pipeline Data Science di tingkat rancangan dan analisis. Implementasi kode bersifat nilai tambah, bukan syarat.',
  ],

  prasyarat: 'Tidak ada mata kuliah prasyarat formal. Pengetahuan awal yang diharapkan: dasar pemrograman Python, statistika deskriptif, serta dasar aljabar linier dan kalkulus. Modul penyegaran tersedia pada LMS bagi mahasiswa yang belum memenuhinya.',

  cpl: [
    ['CPL04', 'Mampu mengidentifikasi dan memecahkan masalah teknis dengan pendekatan praktis modern serta mengoptimalkan infrastruktur TI dengan mempertimbangkan keamanan dan skalabilitas.'],
    ['CPL05', 'Mampu menerapkan teknologi informasi dengan etika profesional dalam menyelesaikan berbagai masalah di industri, khususnya di bidang transportasi berkelanjutan.'],
    ['CPL08', 'Menunjukkan komitmen pada pengembangan profesional berkelanjutan melalui pembelajaran sepanjang hayat.'],
  ],

  cpmk: [
    ['CPMK041', 'Mengidentifikasi dan menganalisis masalah teknis dalam sistem teknologi informasi menggunakan kerangka kerja, alat, dan teknik yang tepat.', 'CPL04'],
    ['CPMK051', 'Menganalisis dan menjustifikasi penerapan teknologi informasi untuk menyelesaikan masalah industri secara efektif, efisien, dan beretika.', 'CPL05'],
    ['CPMK081', 'Mengidentifikasi kebutuhan belajarnya sendiri dan menyusun rencana pembelajaran mandiri.', 'CPL08'],
  ],

  subcpmk: [
    ['Sub-CPMK 1', 'Menjelaskan konsep dasar Data Science dan membedakannya dari Big Data, AI, dan Machine Learning, serta mengidentifikasi isu etika, privasi, dan bias data. (C2\u2013C3)'],
    ['Sub-CPMK 2', 'Menganalisis anatomi pipeline Data Science dan mengidentifikasi konsekuensi masalah kualitas data terhadap kinerja model. (C4)'],
    ['Sub-CPMK 3', 'Menganalisis elemen learning problem serta menjustifikasi strategi pembagian data untuk menghindari kebocoran data. (C4)'],
    ['Sub-CPMK 4', 'Menganalisis formulasi regresi linier dan fungsi loss, menjelaskan mekanisme Gradient Descent dan SGD, serta menginterpretasikan koefisien. (C4)'],
    ['Sub-CPMK 5', 'Menganalisis peran regularisasi dan Maximum Likelihood Estimation, serta mengevaluasi underfitting dan overfitting melalui bias-variance trade-off. (C4)'],
    ['Sub-CPMK 6', 'Menganalisis model klasifikasi linier dan fungsi sigmoid, serta menginterpretasikan keluaran probabilistik dan pengaruh ambang batas. (C4)'],
    ['Sub-CPMK 7', 'Membandingkan strategi klasifikasi multi-kelas serta memilih dan menjustifikasi metrik evaluasi sesuai karakteristik masalah dan distribusi data. (C4)'],
    ['Sub-CPMK 8', 'Menganalisis prosedur cross-validation dan tuning hyperparameter, serta mengevaluasi validitas suatu prosedur evaluasi model. (C4)'],
    ['Sub-CPMK 9', 'Menganalisis mekanisme model berbasis pohon dan ensemble, serta membandingkan karakteristiknya dengan model linier. (C4)'],
    ['Sub-CPMK 10', 'Menganalisis prinsip clustering dan konsep dasar probabilitas, serta menginterpretasikan hasil pengelompokan data. (C4)'],
    ['Sub-CPMK 11', 'Menganalisis arsitektur Neural Network, fungsi aktivasi, backpropagation, dan teknik regularisasi secara konseptual. (C4)'],
    ['Sub-CPMK 12', 'Menganalisis representasi data teks sebagai jembatan menuju arsitektur modern, serta konsep dasar CNN, RNN, dan LLM beserta implikasi etisnya. (C4)'],
  ],

  catatanCpmk: 'CPMK081 tidak dipetakan pada penguasaan materi tertentu, melainkan pada asesmen yang secara langsung mengukur kemandirian belajar: Tugas Terstruktur 5 pada pertemuan 13 dan Studi Kasus Akhir pada pertemuan 14\u201315.',

  // ---------- Jadwal ----------
  catatanJadwal: 'Berkas materi tersedia dalam format PowerPoint. Setiap berkas memuat catatan pembicara beserta kunci jawaban latihan.',

  jadwal: [
    {
      blok: 'Sebelum Ujian Tengah Semester',
      pertemuan: [
	    { n: '1',minggu: 'Minggu 1', tanggal: '31 Agu \u2013 6 Sep', topik: 'Pengantar Data Science dan Etika Data', label: 'Sub-CPMK 1', bobot: '5%', warna: '2A4B7C', catatan: 'Kontrak perkuliahan \u00b7 Etika, privasi, dan bias data',
			agenda: [
            {
              judul: 'Pengantar Data Science dan Etika Data', konsep: 'Pengantar Data Science dan Etika Data',
              materi: [['Slide: Pengantar Data Science', '']],
            },
            {
              judul: 'Proyek Kelompok', konsep: 'Pembentukan kelompok dan dokumentasi awal proyek',
              materi: [['Daftar Kelompok', '']],
            },
          ],
		},
        { n: '2',minggu: 'Minggu 2', tanggal: '7 – 13 Sep', topik: 'Anatomi Pipeline dan Kualitas Data', label: 'Sub-CPMK 2', bobot: '5%', warna: '2A4B7C', catatan: 'Missing value, outlier, encoding, scaling, EDA' },
        { n: '3',minggu: 'Minggu 3', tanggal: '14 – 20 Sep', topik: 'Learning Problem dan Pembagian Data', label: 'Sub-CPMK 3', bobot: '8%', warna: '2A4B7C', catatan: 'Ruang hipotesis, bias induktif, data leakage \u00b7 ' ,
		agenda: [
            {
              judul: 'Learning Problem dan Pembagian Data', konsep: 'Learning Problem dan Pembagian Data',
              materi: [['Slide: Learning Problem ...', '']],
            },
            {
              judul: 'Tugas 1', konsep: 'Tugas 1',
              materi: [['Tugas :', '']],
            },
          ],
		  },
        { n: '4',minggu: 'Minggu 4', tanggal: '21 – 27 Sep', topik: 'Regresi Linier, Fungsi Loss, dan Gradient Descent', label: 'Sub-CPMK 4', bobot: '5%', warna: '21295C', catatan: 'MSE, gradient descent, learning rate, SGD', berkas: 'slides/P04_Regresi_Linier_dan_Gradient_Descent.pptx' },
        { n: '5',minggu: 'Minggu 5', tanggal: '28 Sep – 4 Okt', topik: 'Regularisasi, MLE, dan Bias-Variance Trade-off', label: 'Sub-CPMK 5', bobot: '8%', warna: 'B85042', catatan: 'Ridge, Lasso, underfitting, overfitting \u00b7 ',
		agenda: [
            {
              judul: 'Klasifikasi Multi-Kelas dan Metrik Evaluasi', konsep: 'Klasifikasi Multi-Kelas dan Metrik Evaluasi',
              materi: [['Slide: Klasifikasi Multi-Kelas ...','slides/P05_Regularisasi_MLE_Bias_Variance.pptx' ]],
            },
            {
              judul: 'Tugas 2', konsep: 'Tugas 2',
              materi: [['Tugas 2:', '']],
            },
          ],
		},
        { n: '6',minggu: 'Minggu 6', tanggal: '5 – 11 Okt', topik: 'Klasifikasi Linier: Logistic Regression', label: 'Sub-CPMK 6', bobot: '5%', warna: '1C2B36', catatan: 'Sigmoid, odds, cross-entropy, ambang batas', berkas: 'slides/P06_Logistic_Regression.pptx' },
        { n: '7',minggu: 'Minggu 7', tanggal: '12 – 18 Okt', topik: 'Klasifikasi Multi-Kelas dan Metrik Evaluasi', label: 'Sub-CPMK 7', bobot: '8%', warna: '2F2545', catatan: 'Softmax, confusion matrix, precision, recall, ROC \u00b7 Tugas 3',
		agenda: [
            {
              judul: 'Klasifikasi Multi-Kelas dan Metrik Evaluasi', konsep: 'Klasifikasi Multi-Kelas dan Metrik Evaluasi',
              materi: [['Slide: Klasifikasi Multi-Kelas ...','slides/P07_MultiKelas_dan_Metrik_Evaluasi.pptx' ]],
            },
            {
              judul: 'Tugas 3', konsep: 'Tugas 3',
              materi: [['Tugas 3 :', '']],
            },
          ],
		},
        { n: '8',minggu: 'Minggu 8', tanggal: '19 – 25 Okt', topik: 'Ujian Tengah Semester', label: 'Sub-CPMK 1\u20137', bobot: '5%', warna: '8A8A96', catatan: 'Ujian tertulis 100 menit \u00b7 40% konsep, 60% analisis kasus', jenis: 'ujian' },
      ]
    },
    {
      blok: 'Setelah Ujian Tengah Semester',
      pertemuan: [
        { n: '9',minggu: 'Minggu 9', tanggal: '26 Okt – 1 Nov', topik: 'Validasi Model dan Tuning Hyperparameter', label: 'Sub-CPMK 8', bobot: '5%', warna: '3A2028', catatan: 'k-fold, stratified, grid vs random search, kebocoran data', berkas: 'slides/P09_Validasi_dan_Tuning_Hyperparameter.pptx' },
        { n: '10',minggu: 'Minggu 10', tanggal: '2 – 8 Nov', topik: 'Model Berbasis Pohon dan Ensemble', label: 'Sub-CPMK 9', bobot: '8%', warna: '1B3A2F', catatan: 'Gini, pruning, bagging, boosting \u00b7 Tugas 4 \u00b7 Presentasi Kilat sesi 1', berkas: 'slides/P10_Model_Berbasis_Pohon_dan_Ensemble.pptx',
		agenda: [
            {
              judul: 'Model Berbasis Pohon dan Ensemble', konsep: 'Model Berbasis Pohon dan Ensemble',
              materi: [['Slide: Klasifikasi Multi-Kelas ...','slides/P07_MultiKelas_dan_Metrik_Evaluasi.pptx' ]],
            },
			{
              judul: 'Presentasi Kilat sesi 1', konsep: 'Presentasi Kilat sesi 1',
            },
            {
              judul: 'Tugas 4', konsep: 'Tugas 4',
              materi: [['Tugas 4 :', '']],
            },
          ],},
        { n: '11',minggu: 'Minggu 11', tanggal: '9 – 15 Nov', topik: 'Clustering dan Dasar Probabilitas', label: 'Sub-CPMK 10', bobot: '5%', warna: '22252B', catatan: 'K-Means, elbow, silhouette, probabilitas bersyarat', berkas: 'slides/P11_Clustering_dan_Dasar_Probabilitas.pptx' },
        { n: '12',minggu: 'Minggu 12', tanggal: '16 – 22 Nov', topik: 'Arsitektur Neural Network', label: 'Sub-CPMK 11', bobot: '5%', warna: '191B33', catatan: 'Aktivasi, forward pass, backpropagation, dropout', berkas: 'slides/P12_Arsitektur_Neural_Network.pptx' },
        { n: '13',minggu: 'Minggu 13', tanggal: '23 – 29 Nov', topik: 'Representasi Teks, CNN, RNN, dan LLM', label: 'Sub-CPMK 12', bobot: '8%', warna: '0F3743', catatan: 'BoW, TF-IDF, attention, etika LLM \u00b7 Tugas 5 \u00b7 Presentasi Kilat sesi 2', berkas: '' ,
		agenda: [
            {
              judul: 'Representasi Teks, CNN, RNN, dan LLM', konsep: 'Representasi Teks, CNN, RNN, dan LLM',
              materi: [['Slide: Representasi Teks, CNN, ...','slides/P13_Teks_CNN_RNN_dan_LLM.pptx' ]],
            },
            {
              judul: 'Tugas 5', konsep: 'Tugas 5',
              materi: [['Tugas 5 :', '']],
            },
          ],
		},
        { n: '14',minggu: 'Minggu 14', tanggal: '30 Nov – 6 Des', topik: 'Studi Kasus Akhir \u2014 Tahap 1: Perancangan', label: 'CPMK051 & CPMK081', bobot: '4%', warna: '6B5B95', catatan: 'Kerja kelompok terbimbing \u00b7 Dokumen rancangan pipeline', jenis: 'proyek' },
        { n: '15',minggu: 'Minggu 15', tanggal: '7 – 13 Des', topik: 'Studi Kasus Akhir \u2014 Tahap 2: Analisis dan Laporan', label: 'CPMK051 & CPMK081', bobot: '6%', warna: '6B5B95', catatan: 'Kerja kelompok terbimbing \u00b7 Laporan akhir dan evaluasi kritis', jenis: 'proyek' },
        { n: '16',minggu: 'Minggu 16', tanggal: '14 – 20 Des', topik: 'Ujian Akhir Semester', label: 'Sub-CPMK 1\u201312', bobot: '10%', warna: '8A8A96', catatan: 'Presentasi Studi Kasus Akhir \u00b7 Tanya-jawab individual', jenis: 'ujian' },
      ]
    },
  ],

  peringatanJadwal: {
    judul: 'Catatan untuk pertemuan 1\u20133',
    isi: 'Materi ketiga pertemuan ini masih memakai bahan lama dan perlu disesuaikan dengan RPS revisi \u2014 terutama penambahan pembahasan etika dan privasi data, studi kasus berdomain transportasi, serta pembahasan kebocoran data. Berkasnya belum diunggah ke situs ini.',
  },

  // ---------- Penilaian ----------
  penilaian: {
    aturan: 'Sesuai ketentuan Politeknik Negeri Madiun, mata kuliah teori menerapkan metode <em>case study</em> dengan bobot Aktivitas Partisipatif minimal 55%. Bobot tugas minimal 20%, sedangkan UTS dan UAS masing-masing berada pada rentang 5\u201330%.',
    komponen: [
      ['Aktivitas Partisipatif', '55%', 'Diskusi kasus, latihan terbimbing di kelas, dan Presentasi Kilat Algoritma. Berlangsung pada pertemuan 1\u20137 dan 9\u201313.'],
      ['Tugas Terstruktur', '20%', 'Lima tugas pada pertemuan 3, 5, 7, 10, dan 13, masing-masing berbobot 4%.'],
      ['Hasil Proyek', '10%', 'Studi Kasus Akhir Tahap 1 (4%) dan Tahap 2 (6%).'],
      ['Ujian Tengah Semester', '5%', 'Ujian tertulis terjadwal 100 menit atas materi pertemuan 1\u20137.'],
      ['Ujian Akhir Semester', '10%', 'Presentasi Studi Kasus Akhir disertai tanya-jawab individual.'],
    ],
    rekonsiliasi: [
      'Aktivitas Partisipatif 55% \u2014 pertemuan 1, 2, 4, 6, 9, 11, dan 12 masing-masing 5%; pertemuan 3, 5, 7, 10, dan 13 masing-masing 4%.',
      'Tugas 20% \u2014 lima tugas terstruktur pada pertemuan 3, 5, 7, 10, dan 13, masing-masing 4%.',
      'Hasil Proyek 10% \u2014 pertemuan 14 sebesar 4% dan pertemuan 15 sebesar 6%.',
      'Ujian Tengah Semester 5% pada pertemuan 8; Ujian Akhir Semester 10% pada pertemuan 16.',
      'Latihan pada pertemuan 4, 6, 9, 11, dan 12 bersifat formatif dan dinilai melalui komponen Aktivitas Partisipatif.',
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
      { judul: 'Ujian Tengah Semester', isi: 'Ujian tertulis terjadwal 100 menit atas materi pertemuan 1\u20137. Komposisi soal: 40% konsep dan 60% analisis kasus. Tidak ada soal yang menuntut menulis kode.', catatan: 'Tabel rumus metrik disediakan pada lembar soal. Rekomendasi tanpa alasan tidak memperoleh nilai penuh.' },
      { judul: 'Ujian Akhir Semester', isi: 'Presentasi Studi Kasus Akhir berdurasi 12 menit, dilanjutkan tanya-jawab individual 8 menit.', catatan: 'Nilai perorangan dapat berbeda dari nilai kelompok berdasarkan penguasaan individual.' },
    ],
  },

  // ---------- Tugas & Proyek ----------
  tugas: [
    ['Tugas Terstruktur 1', 'Pertemuan 3', '4%', 'Analisis elemen learning problem dan koreksi skenario pembagian data yang mengandung kebocoran.'],
    ['Tugas Terstruktur 2', 'Pertemuan 5', '4%', 'Diagnosis bias-variance dari kurva pembelajaran, disertai rekomendasi perbaikan beserta alasannya.'],
    ['Tugas Terstruktur 3', 'Pertemuan 7', '4%', 'Perhitungan metrik dari confusion matrix dan justifikasi pemilihan metrik pada biaya kesalahan asimetris.'],
    ['Tugas Terstruktur 4', 'Pertemuan 10', '4%', 'Analisis perbandingan model linier dan model berbasis pohon untuk satu kasus, disertai justifikasi.'],
    ['Tugas Terstruktur 5', 'Pertemuan 13', '4%', 'Telaah mandiri satu algoritma di luar materi kuliah, rencana belajar mandiri, dan refleksi. Mengukur CPMK081.'],
  ],

  proyek: {
    judul: 'Studi Kasus Akhir',
    sorotan: '<strong>Status kode program.</strong> Implementasi kode bersifat <em>opsional</em> dan menjadi nilai tambah, bukan syarat kelulusan tugas. Kelompok yang tidak menyertakan kode tetap dapat memperoleh nilai penuh sepanjang seluruh bagian analisis dan justifikasi tertulis dikerjakan dengan baik.',
    tautan: ['Unduh dokumen tugas lengkap', 'dokumen/Tugas_Studi_Kasus_Akhir_Data_Science_Revisi.docx'],
    tahap: [
      { cap: 'Tahap 1 \u00b7 Pertemuan 14 \u00b7 4%', judul: 'Perancangan', butir: ['Learning problem dan variabel target', 'Pemahaman data dan kualitasnya', 'Rencana praproses dan feature engineering', 'Rancangan model dan ruang hipotesis', 'Prosedur evaluasi dan titik rawan kebocoran'] },
      { cap: 'Tahap 2 \u00b7 Pertemuan 15 \u00b7 6%', judul: 'Analisis dan Laporan', butir: ['Hasil dan interpretasinya', 'Analisis kesalahan', 'Evaluasi kritis: keterbatasan, bias, etika', 'Kesimpulan dan rekomendasi'] },
      { cap: 'Presentasi \u00b7 Pertemuan 16 \u00b7 10%', judul: 'Ujian Akhir Semester', butir: ['Presentasi kelompok 12 menit', 'Tanya-jawab individual 8 menit', 'Nilai individual dapat berbeda dari nilai kelompok'] },
    ],
  },

  ketentuan: [
    { judul: 'Dataset', butir: ['Bersumber dari data publik yang dapat diverifikasi', 'Diutamakan domain transportasi berkelanjutan atau layanan publik', 'Tidak boleh sama antar-kelompok', 'Dilarang memuat data pribadi tanpa anonimisasi'] },
    { judul: 'AI generatif', isi: 'Diperbolehkan sebagai alat bantu belajar, dengan syarat dicantumkan pada Lampiran Pernyataan Penggunaan AI: bagian mana yang dibantu dan bagaimana hasilnya diverifikasi.', catatan: 'Menyerahkan keluaran LLM tanpa verifikasi dan tanpa pengakuan diperlakukan sebagai pelanggaran akademik.' },
  ],

  kegiatan: {
    judul: 'Presentasi Kilat Algoritma',
    isi: 'Tiap kelompok memaparkan satu algoritma yang diundi selama 5\u20137 menit, dengan struktur wajib: prinsip kerja, asumsi yang mendasari, kelebihan dan keterbatasan, kapan tepat digunakan, dan satu contoh penerapan nyata.',
    sesi: [
      { cap: 'Sesi 1 \u00b7 Pertemuan 10', judul: 'Algoritma prediktif pembanding', catatan: 'SVM \u00b7 Generalized Linear Models \u00b7 Naive Bayes \u00b7 Nearest Neighbors \u00b7 Kernel Ridge Regression \u00b7 Stochastic Gradient Descent \u00b7 Gradient Boosting \u00b7 AdaBoost' },
      { cap: 'Sesi 2 \u00b7 Pertemuan 13', judul: 'Unsupervised dan reduksi dimensi', catatan: 'K-Means \u00b7 Hierarchical Clustering \u00b7 Agglomerative Clustering \u00b7 HDBSCAN \u00b7 PCA \u00b7 Gaussian Processes \u00b7 Isotonic Regression \u00b7 Neural Network Models' },
    ],
  },

  // ---------- Sumber Rujukan ----------
  referensi: {
    utama: [
      ['Aur\u00e9lien G\u00e9ron', 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 3rd ed.', 'O\u2019Reilly Media, 2022'],
      ['Rahmad Syah', 'Pengantar Machine Learning: Teori dan Aplikasi dengan Python', 'Penerbit Andi, 2021'],
    ],
    pendukung: [
      ['Andriy Burkov', 'The Hundred-Page Machine Learning Book', '2019'],
      ['Goodfellow, Bengio & Courville', 'Deep Learning', 'MIT Press, 2016'],
      ['Jake VanderPlas', 'Python Data Science Handbook, 2nd ed.', 'O\u2019Reilly Media, 2022'],
      ['Sebastian Raschka', 'Build a Large Language Model (From Scratch)', 'Manning, 2024'],
      ['Jurafsky & Martin', 'Speech and Language Processing, 3rd ed. (draft)', 'Stanford University, 2025'],
      ['Barocas, Hardt & Narayanan', 'Fairness and Machine Learning', 'MIT Press, 2023'],
      ['Norouzi & Gonzalez', 'CS 189/289A: Introduction to Machine Learning', 'UC Berkeley', 'https://eecs189.org/'],
      ['Jonathan Shewchuk', 'CS 189/289A Lecture Notes', 'UC Berkeley', 'https://people.eecs.berkeley.edu/~jrs/189/'],
      ['James, Witten, Hastie & Tibshirani', 'An Introduction to Statistical Learning', 'Springer \u2014 tersedia bebas daring'],
      ['Hastie, Tibshirani & Friedman', 'The Elements of Statistical Learning, 2nd ed.', 'Springer \u2014 tersedia bebas daring'],
    ],
  },

  atribusi: 'Sebagian bahan ajar mata kuliah ini diadaptasi dari materi terbuka CS 189/289A: Introduction to Machine Learning, University of California, Berkeley. Setiap slide dan lembar kasus hasil adaptasi mencantumkan atribusi sumber sesuai ketentuan penggunaan materi terbuka.',

  berkasKuliah: [
    ['Rencana Pembelajaran Semester (RPS)', 'dokumen/RPS_TI_Data_Science_2026_Revisi_v2.docx', 'DOCX \u00b7 memuat rubrik penilaian pada Lampiran 1\u20133'],
    ['Dokumen Tugas Studi Kasus Akhir', 'dokumen/Tugas_Studi_Kasus_Akhir_Data_Science_Revisi.docx', 'DOCX \u00b7 memuat Lampiran Pernyataan Penggunaan AI'],
  ],

  perangkat: 'Python, Jupyter Notebook, pandas, NumPy, Matplotlib, dan scikit-learn disebut sebagai pengetahuan konseptual dan dipakai pada penugasan terstruktur yang bersifat opsional. Dokumentasi <em>scikit-learn User Guide</em> menjadi rujukan utama kegiatan Presentasi Kilat Algoritma.',
});
