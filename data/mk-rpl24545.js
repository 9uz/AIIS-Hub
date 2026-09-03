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
  kode: 'RPL24545',
  slug: 'rpl24545',                 // dipakai pada alamat: #/ti24318/jadwal
  nama: 'Data Science',
  tema: 'klasik', 
  // ---------- Identitas (opsional) ----------
  sks: '4 sks (Teori + Praktik)',
  semester: 'Gasal',
  tahunAjaran: '2026/2027',
  warna: '8a5b12',                 // warna aksen mata kuliah, tanpa tanda #
  ringkas: 'Perancangan, pembuatan, dan optimasi basis data relasional untuk kebutuhan aplikasi nyata.',
  basisBerkas: 'berkas/rpl24545/',  // seluruh path berkas di bawah relatif terhadap ini

  pengampu: [
    { nama: 'Gus nanang syaifuddiin, S.Kom., M.Kom.', peran: 'Dosen Pengampu' },
  ],

 sorotan: 'Mata kuliah ini membahas penerapan konsep dan teknik <strong>Data Science</strong> secara langsung melalui studi kasus nyata, mulai dari pengenalan data science, machine learning, preprocessing, eksplorasi data, visualisasi, pemodelan, evaluasi, hingga pengenalan neural network dan model generatif.',

angka: [
  ['16', 'pertemuan'],
  ['11', 'Sub-CPMK'],
],

 // ---------- Silabus (opsional) ----------
identitas: [
  ['Bahan kajian', 'Data Science, Machine Learning, Neural Networks, dan Generative Models'],
  ['Metode pembelajaran', 'Ceramah interaktif, diskusi, studi kasus, praktikum coding, dan pembelajaran berbasis proyek'],
],

deskripsi: [
  'Mata kuliah ini berfokus pada penerapan konsep dan teknik data science secara langsung melalui studi kasus nyata. Mahasiswa mempelajari seluruh tahapan proses data science, mulai dari pengumpulan data, pembersihan dan eksplorasi data (data preprocessing & exploratory data analysis), visualisasi data, hingga pembangunan dan evaluasi model analitik atau machine learning. Mata kuliah menekankan penggunaan Python dan pustaka pendukungnya, kerja berbasis proyek, serta kemampuan analisis dan interpretasi hasil untuk mendukung pengambilan keputusan berbasis data. Studi kasus dan dataset yang digunakan dalam praktikum disarankan memanfaatkan data lokal Indonesia, seperti data BPS, survei nasional, atau dataset publik Indonesia di Kaggle.',
],

prasyarat: 'Tidak ada.',

cpl: [
  ['CPL07', 'Mampu membangun dan mengimplementasikan solusi perangkat lunak dengan memanfaatkan teknik, tools dan bahasa pemrograman.'],
  ['CPL09', 'Mampu mengorganisasi data serta mengolah informasi pada suatu organisasi dengan memanfaatkan berbagai metode dan tools kecerdasan buatan dalam pengembangan perangkat lunak.'],
],

cpmk: [
  ['CPMK072', 'Menganalisis perkembangan teknologi dan isu terkini (etika, sosial, legal, dan ekonomi) di bidang TIK, khususnya pada penerapan data science.', 'CPL07'],
  ['CPMK074', 'Mampu memanfaatkan komputasi cerdas dalam proses pemecahan masalah berdasarkan analisis dan informasi pada produk TIK.', 'CPL07'],
  ['CPMK092', 'Mampu menggunakan teknologi terkini dan menganalisis dampak komputasi terhadap individu, organisasi dan masyarakat.', 'CPL07'],
  ['CPMK093', 'Mampu menerapkan pemikiran logis, kritis, inovatif, bermutu, dan terukur dalam melakukan pekerjaan yang spesifik di bidang keahliannya serta sesuai dengan standar kompetensi kerja bidang yang bersangkutan.', 'CPL07'],
],

subcpmk: [
  ['Sub-CPMK 1', 'Mahasiswa memahami ruang lingkup mata kuliah, kontrak perkuliahan, dan pengantar sains data; menjelaskan konsep dasar data science dan membedakannya dengan istilah terkait; serta memahami peluang Data Science dan menguasai tools dasar.'],
  ['Sub-CPMK 2', 'Mahasiswa mampu menjelaskan elemen penting permasalahan pembelajaran (target, tujuan, data) dan merancang arsitektur model, ruang hipotesis, serta bias induktif.'],
  ['Sub-CPMK 3', 'Mahasiswa mampu menerapkan algoritma optimisasi, tuning hyperparameter, dan metrik evaluasi model.'],
  ['Sub-CPMK 4', 'Mahasiswa mampu menerapkan algoritma clustering (K-Means) dan model probabilitas dasar pada data.'],
  ['Sub-CPMK 5', 'Mahasiswa mampu menerapkan model regresi linier dan meminimalkan fungsi kesalahan (error function).'],
  ['Sub-CPMK 6', 'Mahasiswa mampu menganalisis pengaruh regularisasi, Maximum Likelihood Estimation (MLE), dan bias-variance trade-off pada model regresi.'],
  ['Sub-CPMK 7', 'Mahasiswa mampu menerapkan model klasifikasi linier (regresi logistik) menggunakan fungsi sigmoid dan regularisasi.'],
  ['Sub-CPMK 8', 'Mahasiswa mampu mengevaluasi performa model klasifikasi multi-kelas menggunakan confusion matrix dan metrik evaluasi.'],
  ['Sub-CPMK 9', 'Mahasiswa mampu menerapkan algoritma Gradient Descent dan Stochastic Gradient Descent (SGD) dalam optimisasi model.'],
  ['Sub-CPMK 10', 'Mahasiswa mampu merancang dan mengimplementasikan arsitektur jaringan saraf tiruan (neural network) menggunakan PyTorch.'],
  ['Sub-CPMK 11', 'Mahasiswa mampu menganalisis arsitektur dan aplikasi CNN, RNN, dan model generatif (LLM) pada permasalahan data science.'],
],

// ---------- Jadwal (wajib) ----------
jadwal: [
  {
    blok: 'Sebelum Ujian Tengah Semester',
    pertemuan: [
      {
        n: '1', minggu: 'Minggu 1', tanggal: '31 Agu \u2013 6 Sep',
        topik: 'Pendahuluan dan Gambaran Umum Data Science',
        label: 'Sub-CPMK 1',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Kontrak perkuliahan · Konsep dasar Data Science · Data Mining · Peluang Data Science · Pengenalan Pandas dan Matplotlib',
		agenda: [
            {
              judul: 'Kontrak perkuliahan · Konsep dasar Data Science · Data Mining · Peluang Data Science', konsep: 'Kontrak perkuliahan · Konsep dasar Data Science · Data Mining · Peluang Data Science',
              materi: [['Slide: Kontrak perkuliahan · Konsep dasar Data Science ...','slides/p1_0.pdf' ]],
            },
			{
              judul: 'Pengenalan tools yang dibutuhkan', konsep: 'Pengenalan tools yang dibutuhkan dalam machine learning (ML): pandas dan visualisasi data',
              materi: [
			  ['Slide: Pengenalan tools..', 'slides/p1_1.pptx'],
			  ],
            },
            {
              judul: 'Modul Belajar 1', konsep: 'Membuat DataFrame sederhana menggunakan Pandas dan menghasilkan visualisasi data menggunakan Matplotlib.',
              materi: [
                  ['Modul Notebook', 'dokumen/lec2.ipynb' ],
                  ['Dataset : Augmented_Landmarks_DataFrame', 'slides/data/Augmented_Landmarks_DataFrame.csv'],
                  ['Dataset : uc_berkeley_events', 'slides/data/uc_berkeley_events.csv']
              ],
            },
            {
                judul: 'Tugas Mandiri', konsep: 'Cari dataset secara mandiri di [UCI Machine Learning Repository](https://archive.ics.uci.edu/datasets) yang memenuhi kriteria wajib.',
                materi: [
                    ['Tugas Praktikum 1', 'dokumen/tugas1.ipynb' ],
                    ['Form Pengumpulan :', ]
                ],
            },
          ],
	  },
      {
        n: '2', minggu: 'Minggu 2', tanggal: '7 – 13 Sep',
        topik: 'Dasar-dasar Machine Learning',
        label: 'Sub-CPMK 2',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Learning Problem · Target · Objective · Data · Model Design · Hypothesis Space · Bias Induktif',
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
      {
        n: '3', minggu: 'Minggu 3', tanggal: '14 – 20 Sep',
        topik: 'Optimisasi, Hyperparameter Tuning, dan Evaluasi Model',
        label: 'Sub-CPMK 3',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Optimisasi iteratif · Hyperparameter tuning · Prediksi · Accuracy · Log Loss · Precision · Recall'
      },
      {
        n: '4', minggu: 'Minggu 4', tanggal: '21 – 27 Sep',
        topik: 'Unsupervised Learning dan Probabilitas',
        label: 'Sub-CPMK 4',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Unsupervised Learning · Probabilitas · K-Means · Gaussian Mixture Model (GMM)'
      },
      {
        n: '5',minggu: 'Minggu 5', tanggal: '28 Sep – 4 Okt',
        topik: 'Regresi Linier',
        label: 'Sub-CPMK 5',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Linear Regression · Fungsi basis · Vektorisasi · Error Function · Minimasi Error · Evaluasi Model'
      },
      {
        n: '6', minggu: 'Minggu 6', tanggal: '5 – 11 Okt',
        topik: 'Regularisasi pada Regresi Linier',
        label: 'Sub-CPMK 6',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Regularized Least Squares · Ridge · Lasso · Normal Equation · Perbandingan OLS dan Regularisasi'
      },
      {
        n: '7',  minggu: 'Minggu 7',
        topik: 'MLE dan Bias-Variance Trade-off',
        label: 'Sub-CPMK 6',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Maximum Likelihood Estimation · Prior Beliefs · Distribusi Noise · Bias-Variance Trade-off'
      },
      {
        n: '8',  minggu: 'Minggu 8',
        topik: 'Ujian Tengah Semester',
        label: 'Sub-CPMK 1–6',
        bobot: '15%',
        warna: '8A8A96',
        catatan: 'Ujian tertulis berbasis studi kasus + praktik coding singkat · Materi pertemuan 1–7',
        jenis: 'ujian'
      },
    ]
  },
  {
    blok: 'Setelah Ujian Tengah Semester',
    pertemuan: [
      {
        n: '9',  minggu: 'Minggu 9',
        topik: 'Regresi Logistik',
        label: 'Sub-CPMK 7',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Klasifikasi linier · Fungsi sigmoid · Model probabilistik · Regularisasi · Optimisasi'
      },
      {
        n: '10',  minggu: 'Minggu 10',
        topik: 'Klasifikasi Multi-Kelas dan Evaluasi Model',
        label: 'Sub-CPMK 8',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Multi-Class Classification · Confusion Matrix · ROC · F1-Score · Evaluasi performa'
      },
      {
        n: '11', minggu: 'Minggu 11',
        topik: 'Optimisasi dan Gradient Descent',
        label: 'Sub-CPMK 9',
        bobot: '5%',
        warna: '2F6B8A',
        catatan: 'Gradient Descent · Stochastic Gradient Descent · Konvergensi · Perbandingan GD dan SGD'
      },
      {
        n: '12',minggu: 'Minggu 12',
        topik: 'Neural Networks',
        label: 'Sub-CPMK 10',
        bobot: '5%',
        warna: '6B5B95',
        catatan: 'Model Non-linear · Arsitektur Neural Network · Fungsi Aktivasi · Implementasi PyTorch'
      },
      {
        n: '13', minggu: 'Minggu 13',
        topik: 'Neural Networks dan Backpropagation',
        label: 'Sub-CPMK 10',
        bobot: '5%',
        warna: '6B5B95',
        catatan: 'Implementasi Neural Network dengan PyTorch · Backpropagation · Tuning Model · Peer Review'
      },
      {
        n: '14', minggu: 'Minggu 14',
        topik: 'Neural Networks: Normalisasi, Inisialisasi, dan Regularisasi',
        label: 'Sub-CPMK 10',
        bobot: '5%',
        warna: '6B5B95',
        catatan: 'Batch Normalization · Weight Initialization · Regularisasi · Proyek Akhir Tahap 1: Topik dan Dataset',
        jenis: 'proyek'
      },
      {
        n: '15', minggu: 'Minggu 15',
        topik: 'CNN, RNN, dan Large Language Models',
        label: 'Sub-CPMK 11',
        bobot: '5%',
        warna: '6B5B95',
        catatan: 'Convolutional Neural Network · Recurrent Neural Network · Generative Models · LLM · Proyek Akhir Tahap 2: Data Cleaning, EDA, dan Baseline',
        jenis: 'proyek'
      },
      {
        n: '16', minggu: 'Minggu 16',
        topik: 'Ujian Akhir Semester — Presentasi Proyek Akhir',
        label: 'Sub-CPMK 1–11',
        bobot: '15%',
        warna: '8A8A96',
        catatan: 'Finalisasi model · Evaluasi performa · Laporan akhir · Presentasi · Tanya jawab · Etika penggunaan data',
        jenis: 'ujian'
      },
    ]
  },
],

// ---------- Penilaian (opsional) ----------
penilaian: {
  komponen: [
    ['Aktivitas dan Tugas Praktikum', '55%', 'Partisipasi, latihan coding, studi kasus, dan tugas praktikum pada setiap tahapan pembelajaran.'],
    ['Proyek Akhir Tahap 1', '5%', 'Pemilihan topik/kasus dan pengumpulan dataset.'],
    ['Proyek Akhir Tahap 2', '5%', 'Data cleaning, exploratory data analysis (EDA), dan model baseline.'],
    ['Ujian Tengah Semester', '15%', 'Ujian tertulis berbasis studi kasus dan praktik coding singkat.'],
    ['Ujian Akhir Semester / Proyek Akhir Tahap 3', '15%', 'Presentasi proyek akhir, penyempurnaan model, evaluasi, laporan, komunikasi, kerja tim, dan etika penggunaan data.'],
  ],
  mutu: [
    ['A', '4,00', 'Sangat Baik', '82 < nilai ≤ 100'],
    ['AB', '3,50', 'Lebih dari Baik', '75 < nilai ≤ 82'],
    ['B', '3,00', 'Baik', '67 < nilai ≤ 75'],
    ['BC', '2,50', 'Lebih dari Cukup', '59 < nilai ≤ 67'],
    ['C', '2,00', 'Cukup', '49 < nilai ≤ 59'],
    ['D', '1,00', 'Kurang', '39 < nilai ≤ 49'],
    ['E', '0,00', 'Gagal', 'nilai ≤ 39'],
  ],
},

// ---------- Tugas (opsional) ----------
tugas: [
  ['Tugas Praktikum 1', 'Pertemuan 1', '5%', 'Membuat DataFrame sederhana menggunakan Pandas dan menghasilkan visualisasi data menggunakan Matplotlib.'],
  ['Tugas Praktikum 2', 'Pertemuan 2', '5%', 'Menganalisis suatu permasalahan dan mengidentifikasi target, objective, data, arsitektur model, hypothesis space, serta bias induktif.'],
  ['Tugas Praktikum 3', 'Pertemuan 3', '5%', 'Melakukan hyperparameter tuning dan evaluasi model menggunakan accuracy, log loss, precision, dan recall.'],
  ['Tugas Praktikum 4', 'Pertemuan 4', '5%', 'Menerapkan K-Means atau Gaussian Mixture Model pada dataset dan menyajikan visualisasi serta interpretasi hasil clustering.'],
  ['Tugas Praktikum 5', 'Pertemuan 5', '5%', 'Membangun model regresi linier, melakukan vektorisasi, meminimalkan error function, dan mengevaluasi hasil model.'],
  ['Tugas Praktikum 6', 'Pertemuan 6–7', '10%', 'Membandingkan OLS, Ridge, dan Lasso serta menganalisis regularisasi, MLE, dan bias-variance trade-off.'],
  ['Tugas Praktikum 7', 'Pertemuan 9', '5%', 'Membangun model klasifikasi menggunakan regresi logistik dan menjelaskan fungsi sigmoid serta regularisasi.'],
  ['Tugas Praktikum 8', 'Pertemuan 10', '5%', 'Mengevaluasi model klasifikasi multi-kelas menggunakan confusion matrix, ROC, dan F1-score.'],
  ['Tugas Praktikum 9', 'Pertemuan 11', '5%', 'Mengimplementasikan Gradient Descent dan Stochastic Gradient Descent serta membandingkan performa dan konvergensinya.'],
  ['Tugas Praktikum 10', 'Pertemuan 12–13', '10%', 'Merancang dan mengimplementasikan neural network menggunakan PyTorch serta melakukan tuning dan evaluasi model.'],
  ['Proyek Akhir Tahap 1', 'Pertemuan 14', '5%', 'Menentukan topik/kasus data science dan mengumpulkan dataset yang relevan, dengan prioritas dataset lokal Indonesia.'],
  ['Proyek Akhir Tahap 2', 'Pertemuan 15', '5%', 'Melakukan data cleaning, exploratory data analysis (EDA), dan membangun model baseline berdasarkan dataset yang dikumpulkan.'],
  ['Proyek Akhir Tahap 3', 'Pertemuan 16', '15%', 'Menyempurnakan model, mengevaluasi performa, menyusun laporan akhir, dan mempresentasikan hasil proyek beserta interpretasi dan rekomendasinya.'],
],

// ---------- Referensi (opsional) ----------
referensi: {
  utama: [
    ['Aurélien Géron', 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 3rd ed.', "O'Reilly, 2022"],
    ['Rahmad Syah', 'Pengantar Machine Learning: Teori dan Aplikasi dengan Python', 'Andi, 2021'],
  ],
  pendukung: [
    ['Andriy Burkov', 'The Hundred-Page Machine Learning Book', '2019'],
    ['Ian Goodfellow, Yoshua Bengio & Aaron Courville', 'Deep Learning', 'MIT Press, 2016'],
    ['Jake VanderPlas', 'Python Data Science Handbook', "O'Reilly, 2016"],
    ['Wayne Xin Zhao et al.', 'A Survey of Large Language Models', 'arXiv:2303.18223, 2023; versi terbaru 2024'],
  ],
},
});
