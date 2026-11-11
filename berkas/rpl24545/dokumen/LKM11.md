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
