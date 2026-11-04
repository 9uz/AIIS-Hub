# PANDUAN TAHAPAN PENGERJAAN PROYEK UAS MACHINE LEARNING (6 MINGGU)

**Kerangka:** ML Lifecycle **L** (Learning Problem) → **M** (Model Design) → **O** (Optimization) → **P** (Predict & Evaluate)  
**Template laporan:** `Laporan_Proyek_ML_LMOP.md`  
**Tanggal mulai:** [dd/mm/yyyy] | **Tanggal pengumpulan final:** [dd/mm/yyyy]

---

## RINGKASAN JADWAL

| Minggu | Tahap | Fokus Utama | Bab Laporan | Checkpoint |
|--------|-------|-------------|-------------|------------|
| 1 | **L** | Ide mahasiswa selaras SDGs, dataset, problem formulation | 1–3 | **Checkpoint 1**: persetujuan ide, SDG & dataset |
| 2 | **L** | Data understanding, EDA, data preparation | 4–5 | – |
| 3 | **M** | Model baseline & advanced, hypothesis space | 6.1–6.2 | **Checkpoint 2**: hasil baseline & advanced |
| 4 | **M → O** | Tuning model advanced, desain & training awal deep learning | 6.2.4, 6.3.1–6.3.5 | – |
| 5 | **O** | Optimasi deep learning, eksperimen, diagnosis training | 6.3.4–6.3.7 | **Checkpoint 3**: model DL terlatih |
| 6 | **P** | Evaluasi, perbandingan, iterasi, finalisasi, video | 7–10 | **Pengumpulan final & presentasi** |

---

## MINGGU 1 — [L] LEARNING PROBLEM

**Tujuan:** Mahasiswa memiliki ide sendiri yang selaras dengan satu SDG, dataset yang layak, dan rumusan Target–Objective–Data.

**Tugas:**
1. **Kembangkan ide sendiri berbasis SDGs** (referensi: https://sdgs.un.org/2030agenda):
   - Pelajari 17 SDGs dan targetnya, lalu pilih **satu** SDG utama yang paling dekat dengan minat/lingkungan Anda.
   - Identifikasi masalah nyata di bawah SDG tersebut (isu lokal, nasional, atau global).
   - Tentukan bagaimana masalah itu dapat dirumuskan sebagai tugas ML dan jenis datanya (tabular / image / text / time series / recommender).
   - Isi **Formulir Pengajuan Ide** (Lampiran B template) dan isi Bab 2.2 *Keterkaitan dengan SDGs*.
   - Daftar contoh di Lampiran A hanya inspirasi; ide wajib berasal dari mahasiswa.
2. Pilih dataset (Kaggle / UCI / lainnya). Pastikan ukurannya memadai untuk 3 model dan DL bisa dilatih di Colab/Kaggle.
3. Studi literatur: minimal 2 referensi ilmiah (format APA/IEEE).
4. Tulis latar belakang, 2–4 problem statements, dan goals terukur.
5. Isi tabel **Learning Problem** (Target, Objective, Data) di Bab 3.2.
6. Tentukan rencana tiga model (baseline, advanced, deep learning) dan alasan awalnya.
7. Buat repository GitHub kosong dan tambahkan dosen sebagai collaborator/pemilik akses baca.

**Deliverable:**
- Formulir Pengajuan Ide (Lampiran B)
- Proposal singkat 1–2 halaman (Bab 1–3 versi awal, termasuk Bab 2.2 keterkaitan SDGs)
- Link dataset dan repository GitHub

**Checklist selesai:**
- [ ] Target dan jenis tugas ML jelas (klasifikasi/regresi/dll.)
- [ ] Objective dan metrik utama ditentukan
- [ ] Dataset dapat diakses dan sudah dicek ukurannya
- [ ] Minimal 2 referensi terkumpul
- [ ] Ide berasal dari mahasiswa dan selaras dengan satu SDG beserta target spesifiknya
- [ ] Peran ML dan kontribusi terhadap SDG dijelaskan
- [ ] Pertimbangan etika (bias, privasi) dicatat
- [ ] Ide, SDG, dan dataset disetujui dosen (**Checkpoint 1**)

---

## MINGGU 2 — [L] DATA UNDERSTANDING & DATA PREPARATION

**Tujuan:** Data bersih, siap dipakai, dan terbagi dengan benar tanpa kebocoran informasi (leakage).

**Tugas:**
1. Isi informasi dataset (jumlah baris/kolom, tipe, ukuran, format) dan tabel deskripsi fitur (Bab 4.1–4.2).
2. Analisis kondisi data: missing values, duplikat, outlier, imbalance, noise (Bab 4.3).
3. EDA (opsional): minimal 3 visualisasi beserta insight (Bab 4.4).
4. Data cleaning dan feature engineering (Bab 5.1–5.2).
5. Transformasi data sesuai jenis data (encoding, scaling, tokenisasi, augmentasi, dll.) (Bab 5.3).
6. **Splitting** train/validation/test dengan `random_state` tetap; gunakan stratified jika klasifikasi (Bab 5.4).
7. Data balancing jika diperlukan, **hanya pada data training** (Bab 5.5).
8. Tulis ringkasan Apa–Mengapa–Bagaimana (Bab 5.6).
9. Commit notebook `01_learning_problem_eda` dan `02_data_preparation` ke GitHub.

**Deliverable:**
- Bab 4–5 selesai
- Notebook data preparation yang bisa dijalankan ulang

**Checklist selesai:**
- [ ] Scaler/encoder di-fit hanya pada data training
- [ ] Test set disimpan dan tidak disentuh sampai Minggu 6
- [ ] Jumlah sampel tiap split tercatat
- [ ] Setiap langkah preprocessing punya alasan tertulis

---

## MINGGU 3 — [M] MODEL DESIGN: BASELINE & ADVANCED

**Tujuan:** Dua model pertama terlatih dan dijustifikasi berdasarkan hypothesis space dan inductive bias.

**Tugas:**
1. **Model 1 (Baseline):** pilih model sederhana, jelaskan teori, alasan, hypothesis space, dan inductive bias (Bab 6.1.1–6.1.2).
2. Latih baseline, catat hyperparameter dan hasil pada validation set (Bab 6.1.3–6.1.5).
3. **Model 2 (Advanced):** pilih model (Random Forest/XGBoost/SVM/dll.), jelaskan teori, keunggulan, kelemahan, hypothesis space, dan inductive bias (Bab 6.2.1–6.2.2).
4. Latih model advanced dengan parameter awal (Bab 6.2.3).
5. Bandingkan awal baseline vs advanced pada validation set.
6. Commit notebook `03_model_design_baseline_ml`.

**Deliverable:**
- Bab 6.1 dan 6.2.1–6.2.3 selesai
- Skor validasi baseline dan advanced

**Checklist selesai:**
- [ ] Alasan pemilihan model menyebut karakteristik data
- [ ] Asumsi/inductive bias tiap model dijelaskan
- [ ] Hasil validasi tercatat (bukan test set)
- [ ] Asistensi **Checkpoint 2** dilakukan

---

## MINGGU 4 — [M → O] TUNING ADVANCED & DESAIN DEEP LEARNING

**Tujuan:** Model advanced teroptimasi dan model deep learning sudah berjalan end-to-end.

**Tugas:**
1. **Tuning Model 2:** Grid Search / Random Search dengan cross-validation; catat search space, best parameters, dan skor sebelum vs sesudah tuning (Bab 6.2.4).
2. Tulis kontrol overfitting pada model advanced (Bab 6.2.5).
3. **Desain Model 3 (DL):** pilih jenis DL sesuai data (MLP/CNN/Transfer Learning/LSTM/dll.), centang jenisnya, jelaskan alasan (Bab 6.3.1).
4. Rancang arsitektur: layer, jumlah unit/filter, inductive bias arsitektur, jumlah parameter (Bab 6.3.2).
5. Siapkan preprocessing khusus DL: input shape, normalisasi, augmentasi (Bab 6.3.3).
6. Implementasi dan jalankan training pertama (sanity check: loss turun, tidak error) (Bab 6.3.5).
7. Commit notebook `04_deep_learning_optimization` (versi awal).

**Deliverable:**
- Model 2 hasil tuning
- Model 3 berjalan end-to-end (training awal, belum final)

**Checklist selesai:**
- [ ] Tuning memakai validation/CV, bukan test set
- [ ] Arsitektur DL memenuhi syarat minimum (MLP ≥2 hidden layers, CNN ≥2 conv layers, RNN ≥1 layer, dst.)
- [ ] Training awal berjalan tanpa error dan loss menurun
- [ ] `model.summary()` tersimpan

---

## MINGGU 5 — [O] OPTIMIZATION DEEP LEARNING

**Tujuan:** Model deep learning terlatih dengan konfigurasi terbaik dan dapat didiagnosis dengan jelas.

**Tugas:**
1. Tetapkan konfigurasi training: optimizer, learning rate, loss, batch size, epochs, callbacks, regularisasi (Bab 6.3.4).
2. Jalankan **minimal 2 eksperimen** dengan konfigurasi berbeda (mis. learning rate, batch size, dropout) dan isi tabel eksperimen.
3. Latih model final **minimal 10 epoch**; catat waktu training dan resource (CPU/GPU, platform) (Bab 6.3.6).
4. Buat plot **Training & Validation Loss** dan **Accuracy/Metric** per epoch.
5. Diagnosis: overfitting? converge? perlu lebih banyak epoch? learning rate sesuai?
6. Simpan model terbaik dan tempel model summary (Bab 6.3.7).
7. Rapikan notebook `04_deep_learning_optimization`.

**Deliverable:**
- Bab 6.3 selesai lengkap
- Tabel eksperimen optimasi dan plot training
- Model DL final tersimpan

**Checklist selesai:**
- [ ] Minimal 10 epoch dan waktu training tercatat
- [ ] Kedua plot (loss dan metric) tersedia
- [ ] Minimal 2 eksperimen dibandingkan dengan alasan pemilihan konfigurasi final
- [ ] Asistensi **Checkpoint 3** dilakukan

---

## MINGGU 6 — [P] PREDICT & EVALUATE, FINALISASI

**Tujuan:** Evaluasi jujur pada test set, analisis ilmiah, dan seluruh deliverable siap dikumpulkan.

**Tugas (urutan disarankan):**

*Hari 1–2: Evaluasi*
1. Pilih dan justifikasi metrik evaluasi sesuai Objective (Bab 7.1).
2. Evaluasi ketiga model pada **test set** (sekali saja); sertakan confusion matrix/visualisasi dan feature importance bila relevan (Bab 7.2).
3. Buat tabel dan visualisasi perbandingan tiga model, termasuk training time dan inference time (Bab 7.3).

*Hari 3: Analisis & iterasi*
4. Analisis hasil: model terbaik, trade-off, error analysis, generalization gap, kesesuaian inductive bias (Bab 7.4).
5. Isi tabel **Umpan Balik Lifecycle** (satu iterasi perbaikan L/M/O berdasarkan temuan evaluasi) (Bab 7.5). Jika iterasi mengubah model, evaluasi ulang secara transparan dan catat di laporan.

*Hari 4–5: Finalisasi*
6. Tulis kesimpulan, key insights, ringkasan per tahap lifecycle, dan future work (Bab 8–9).
7. Finalisasi GitHub: notebook berisi output, `requirements.txt`, README informatif, struktur folder rapi, `.gitignore` (Bab 10).
8. Rekam video pembahasan dan masukkan link di halaman informasi proyek.
9. Cek ulang reproducibility: jalankan notebook dari awal sampai akhir.

*Hari 6–7: Pengumpulan & presentasi*
10. Kumpulkan laporan final, link GitHub, dan link video.
11. Presentasi/tanya jawab (jika dijadwalkan).

**Deliverable akhir:**
- Laporan lengkap (semua bab)
- Repository GitHub
- Video pembahasan
- Slide presentasi (opsional)

**Checklist selesai:**
- [ ] Test set hanya dipakai untuk evaluasi akhir
- [ ] Ketiga model dibandingkan pada metrik yang sama
- [ ] Ada error analysis dan satu iterasi lifecycle
- [ ] Goals Bab 3.3 dibahas tercapai/tidaknya
- [ ] Repo, laporan, dan video lengkap serta link dapat diakses

---

## RINGKASAN CHECKPOINT UNTUK DOSEN

| Checkpoint | Waktu | Yang diperiksa | Tindak lanjut jika bermasalah |
|------------|-------|----------------|-------------------------------|
| **1** | Akhir Minggu 1 | Ide mahasiswa, keterkaitan SDG & target, dataset, Target–Objective–Data, rencana 3 model | Minta revisi jika kaitan SDG lemah, ide duplikat, atau dataset terlalu kecil/tidak cocok untuk DL |
| **2** | Akhir Minggu 3 | Data prep tanpa leakage, hasil baseline & advanced, justifikasi inductive bias | Perbaiki splitting/preprocessing sebelum lanjut ke DL |
| **3** | Akhir Minggu 5 | Model DL terlatih, plot training, tabel eksperimen | Beri waktu ekstra di awal Minggu 6 untuk training ulang jika perlu |

---

## RISIKO UMUM DAN ANTISIPASI

| Risiko | Tahap | Antisipasi |
|--------|-------|------------|
| Dataset terlalu besar untuk Colab | L | Gunakan subset atau sampling terstratifikasi, dokumentasikan |
| Data leakage (scaler di-fit pada seluruh data) | L | Cek di Checkpoint 2 |
| Model DL tidak converge / overfitting parah | O | Turunkan learning rate, tambah regularisasi/augmentasi, EarlyStopping |
| Memakai test set untuk tuning | O / P | Wajibkan tuning pada validation/CV; periksa notebook |
| Kode dari internet tanpa dipahami | M / O | Tanya jawab saat checkpoint/presentasi tentang arsitektur dan hyperparameter |
| Terlambat menyelesaikan dokumentasi | P | Tulis bab laporan setiap minggu, bukan di akhir |
| Ide terlalu luas atau kaitan dengan SDG hanya formalitas | L | Wajibkan target SDG spesifik dan indikator kontribusi di Bab 2.2; periksa di Checkpoint 1 |
| Ide tidak punya data yang layak | L | Verifikasi dataset sebelum persetujuan ide |
