/* =====================================================================
   MESIN SITUS MATA KULIAH
   Merender seluruh halaman dari berkas data. Tidak perlu proses build.
   ===================================================================== */
(function () {
  'use strict';

  // ---------- Utilitas ----------
  var E = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var ada = function (v) { return v && (!Array.isArray(v) || v.length > 0); };
  var el = function (id) { return document.getElementById(id); };

  // ---------- Pemuat berkas data ----------
  function muatSkrip(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = function () { rej(new Error('Gagal memuat ' + src)); };
      document.head.appendChild(s);
    });
  }

  function muatSemua() {
    var daftar = (window.SITUS && window.SITUS.berkasMataKuliah) || [];
    return daftar.reduce(function (rantai, nama) {
      return rantai.then(function () {
        return muatSkrip('data/' + nama).catch(function (e) {
          console.warn(e.message + ' \u2014 mata kuliah ini dilewati.');
        });
      });
    }, Promise.resolve());
  }

  // ---------- Definisi halaman ----------
  // tampil: fungsi yang menentukan apakah halaman ini punya isi
  var HALAMAN = [
    { id: 'jadwal', judul: 'Jadwal', tampil: function (m) { return ada(m.jadwal); }, render: rJadwal },
    { id: 'silabus', judul: 'Silabus', tampil: function (m) { return ada(m.deskripsi) || ada(m.cpl) || ada(m.subcpmk) || ada(m.identitas); }, render: rSilabus },
    { id: 'penilaian', judul: 'Penilaian', tampil: function (m) { return m.penilaian && (ada(m.penilaian.komponen) || ada(m.penilaian.mutu)); }, render: rPenilaian },
    { id: 'tugas', judul: 'Tugas & Proyek', tampil: function (m) { return ada(m.tugas) || m.proyek || m.kegiatan; }, render: rTugas },
    { id: 'sumber', judul: 'Sumber Rujukan', tampil: function (m) { return (m.referensi && (ada(m.referensi.utama) || ada(m.referensi.pendukung))) || ada(m.berkasKuliah); }, render: rSumber },
  ];

  function halamanAktifUntuk(m) {
    return HALAMAN.filter(function (h) { return h.tampil(m); });
  }

  // ---------- Komponen tampilan ----------
  function kepala(judul, ringkas) {
    return '<header class="kepala"><h1>' + E(judul) + '</h1>' +
      (ringkas ? '<p class="ringkas">' + ringkas + '</p>' : '') + '</header>';
  }

  function tabel(kolom, baris, kelas) {
    return '<table class="tabel ' + (kelas || '') + '"><thead><tr>' +
      kolom.map(function (k) { return '<th>' + E(k) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + baris + '</tbody></table>';
  }

  function kotakInfo(judul, isi, jenis) {
    return '<div class="kartu-' + (jenis || 'info') + '">' +
      (judul ? '<h3>' + E(judul) + '</h3>' : '') +
      '<p class="tanpa-bawah">' + isi + '</p></div>';
  }

  // ---------- Halaman: Jadwal ----------
  function rJadwal(m) {
    var h = kepala(m.nama, [m.kode, m.sks, m.semester ? 'Semester ' + m.semester : '', m.tahunAjaran]
      .filter(Boolean).map(E).join(' &middot; '));

    if (m.sorotan) h += '<div class="kartu-info"><p' + (ada(m.pengampu) ? '' : ' class="tanpa-bawah"') + '>' + m.sorotan + '</p>' +
      (ada(m.pengampu) ? '<p class="tanpa-bawah"><strong>' + E(m.pengampu[0].peran || 'Pengampu') + ':</strong> ' +
        m.pengampu.map(function (p) { return E(p.nama); }).join(', ') + '</p>' : '') + '</div>';

    if (ada(m.angka)) {
      h += '<div class="ringkas-angka">' + m.angka.map(function (a) {
        return '<div><span class="angka">' + E(a[0]) + '</span><span class="ket">' + E(a[1]) + '</span></div>';
      }).join('') + '</div>';
    }

    h += '<div class="baris-judul"><h2 id="jadwal">Jadwal Perkuliahan</h2>' +
      '<input type="search" id="cari" class="cari" placeholder="Saring pertemuan\u2026" aria-label="Saring pertemuan">' +
      '</div>';
    if (m.catatanJadwal) h += '<p class="catatan">' + E(m.catatanJadwal) + '</p>';

    (m.jadwal || []).forEach(function (blok) {
      if (blok.blok) h += '<h3 class="blok">' + E(blok.blok) + '</h3>';
      h += '<ol class="daftar-pertemuan">';
      (blok.pertemuan || []).forEach(function (P) {
        var kelas = P.jenis ? ' ' + E(P.jenis) : '';
        var cari = [P.n, P.topik, P.label, P.catatan].filter(Boolean).join(' ').toLowerCase();
        var aksi = P.berkas
          ? '<a class="unduh" href="' + E((m.basisBerkas || '') + P.berkas) + '">Materi <span aria-hidden="true">&#8595;</span></a>'
          : '<span class="belum">' + E(P.jenis === 'ujian' ? 'Tanpa materi slide' : (P.jenis === 'proyek' ? 'Kerja kelompok' : 'Materi menyusul')) + '</span>';
        h += '<li class="pertemuan' + kelas + '" data-cari="' + E(cari) + '">' +
          '<span class="pita" style="background:#' + E(P.warna || m.warna || '888888') + '"></span>' +
          '<div class="no">' + E(P.n) + '</div><div class="detail">' +
          '<h4>' + E(P.topik) + '</h4><p class="meta">' +
          (P.label ? '<span class="tag">' + E(P.label) + '</span>' : '') +
          (P.label && P.bobot ? '<span class="pisah">&middot;</span>' : '') +
          (P.bobot ? 'Bobot ' + E(P.bobot) : '') + '</p>' +
          (P.catatan ? '<p class="ket">' + E(P.catatan) + '</p>' : '') +
          '</div><div class="aksi">' + aksi + '</div></li>';
      });
      h += '</ol>';
    });

    h += '<p class="hasil-kosong" id="kosong" hidden>Tidak ada pertemuan yang cocok dengan kata kunci itu.</p>';
    if (m.peringatanJadwal) h += kotakInfo(m.peringatanJadwal.judul, E(m.peringatanJadwal.isi), 'peringatan');
    return h;
  }

  function pasangPencarian() {
    var input = el('cari');
    if (!input) return;
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var terlihat = 0;
      document.querySelectorAll('.pertemuan').forEach(function (li) {
        var cocok = !q || li.dataset.cari.indexOf(q) !== -1;
        li.hidden = !cocok;
        if (cocok) terlihat++;
      });
      document.querySelectorAll('.blok, .daftar-pertemuan').forEach(function (n) {
        if (n.classList.contains('daftar-pertemuan')) {
          var isi = n.querySelectorAll('.pertemuan:not([hidden])').length;
          n.hidden = isi === 0;
          if (n.previousElementSibling && n.previousElementSibling.classList.contains('blok')) {
            n.previousElementSibling.hidden = isi === 0;
          }
        }
      });
      var kosong = el('kosong');
      if (kosong) kosong.hidden = terlihat !== 0;
    });
  }

  // ---------- Halaman: Silabus ----------
  function rSilabus(m) {
    var h = kepala('Silabus', 'Deskripsi, capaian pembelajaran, dan ketentuan mata kuliah');

    var idn = [['Nama mata kuliah', m.nama], ['Kode', m.kode]]
      .concat(m.identitas || [])
      .concat(m.semester ? [['Semester', m.semester + (m.tahunAjaran ? ' \u00b7 Tahun Akademik ' + m.tahunAjaran : '')]] : [])
      .concat(ada(m.pengampu) ? [['Dosen pengampu', m.pengampu.map(function (p) { return p.nama; }).join(', ')]] : []);
    h += '<h2 id="identitas">Identitas Mata Kuliah</h2><table class="tabel"><tbody>' +
      idn.map(function (r) { return '<tr><th scope="row">' + E(r[0]) + '</th><td>' + E(r[1]) + '</td></tr>'; }).join('') +
      '</tbody></table>';

    if (ada(m.deskripsi)) {
      h += '<h2 id="deskripsi">Deskripsi</h2>' +
        m.deskripsi.map(function (p) { return '<p>' + E(p) + '</p>'; }).join('');
    }
    if (m.prasyarat) h += '<h2 id="prasyarat">Prasyarat dan Pengetahuan Awal</h2><p>' + E(m.prasyarat) + '</p>';

    if (ada(m.cpl)) {
      h += '<h2 id="cpl">Capaian Pembelajaran Lulusan</h2>' + tabel(['Kode', 'Rumusan'],
        m.cpl.map(function (r) { return '<tr><td class="kode-sel">' + E(r[0]) + '</td><td>' + E(r[1]) + '</td></tr>'; }).join(''));
    }
    if (ada(m.cpmk)) {
      h += '<h2 id="cpmk">Capaian Pembelajaran Mata Kuliah</h2>' + tabel(['Kode', 'Rumusan', 'CPL'],
        m.cpmk.map(function (r) { return '<tr><td class="kode-sel">' + E(r[0]) + '</td><td>' + E(r[1]) + '</td><td>' + E(r[2] || '') + '</td></tr>'; }).join(''));
    }
    if (ada(m.subcpmk)) {
      h += '<h2 id="subcpmk">Kemampuan Akhir Tiap Tahapan Belajar</h2>' + tabel(['Kode', 'Rumusan'],
        m.subcpmk.map(function (r) { return '<tr><td class="kode-sel">' + E(r[0]) + '</td><td>' + E(r[1]) + '</td></tr>'; }).join(''));
    }
    if (m.catatanCpmk) h += kotakInfo('Catatan pemetaan', E(m.catatanCpmk));
    return h;
  }

  // ---------- Halaman: Penilaian ----------
  function rPenilaian(m) {
    var p = m.penilaian || {};
    var h = kepala('Penilaian', 'Komponen, bobot, dan kriteria');
    if (p.aturan) h += '<div class="kartu-info"><p class="tanpa-bawah">' + p.aturan + '</p></div>';

    if (ada(p.komponen)) {
      var total = 0, sah = true;
      p.komponen.forEach(function (r) {
        var n = parseFloat(String(r[1]).replace('%', '').replace(',', '.'));
        if (isNaN(n)) sah = false; else total += n;
      });
      h += '<h2 id="komponen">Komponen Penilaian</h2>' +
        '<table class="tabel"><thead><tr><th>Komponen</th><th class="tengah">Bobot</th><th>Keterangan</th></tr></thead><tbody>' +
        p.komponen.map(function (r) {
          return '<tr><td><strong>' + E(r[0]) + '</strong></td><td class="tengah bobot">' + E(r[1]) + '</td><td>' + E(r[2] || '') + '</td></tr>';
        }).join('') +
        (sah ? '<tr class="jumlah' + (Math.abs(total - 100) > 0.01 ? ' salah' : '') + '"><td><strong>Jumlah</strong></td><td class="tengah">' +
          (Math.round(total * 100) / 100) + '%</td><td>' +
          (Math.abs(total - 100) > 0.01 ? '<span class="galat">Jumlah bobot belum 100%</span>' : '') + '</td></tr>' : '') +
        '</tbody></table>';
    }

    if (ada(p.rekonsiliasi)) {
      h += '<h2 id="rekonsiliasi">Rekonsiliasi dengan Jadwal Mingguan</h2><ul class="daftar">' +
        p.rekonsiliasi.map(function (r) { return '<li>' + E(r) + '</li>'; }).join('') + '</ul>';
    }
    if (ada(p.mutu)) {
      h += '<h2 id="mutu">Kriteria Nilai Akhir</h2>' + tabel(['Huruf', 'Angka', 'Kualifikasi', 'Interval'],
        p.mutu.map(function (r) { return '<tr><td>' + E(r[0]) + '</td><td>' + E(r[1]) + '</td><td>' + E(r[2]) + '</td><td>' + r[3] + '</td></tr>'; }).join(''), 'tabel-nilai');
    }
    if (ada(p.ujian)) {
      h += '<h2 id="ujian">Bentuk Ujian</h2><div class="dua-kolom">' + p.ujian.map(function (u) {
        return '<div class="kotak"><h3>' + E(u.judul) + '</h3><p' + (u.catatan ? '' : ' class="tanpa-bawah"') + '>' + E(u.isi) + '</p>' +
          (u.catatan ? '<p class="tanpa-bawah kecil">' + E(u.catatan) + '</p>' : '') + '</div>';
      }).join('') + '</div>';
    }
    return h;
  }

  // ---------- Halaman: Tugas ----------
  function rTugas(m) {
    var h = kepala('Tugas & Proyek', 'Tugas terstruktur, proyek akhir, dan kegiatan kelas');

    if (ada(m.tugas)) {
      h += '<h2 id="terstruktur">Tugas Terstruktur</h2>' +
        '<table class="tabel"><thead><tr><th>Tugas</th><th>Diberikan</th><th class="tengah">Bobot</th><th>Uraian</th></tr></thead><tbody>' +
        m.tugas.map(function (r) {
          return '<tr><td><strong>' + E(r[0]) + '</strong></td><td>' + E(r[1]) + '</td><td class="tengah bobot">' + E(r[2]) + '</td><td>' + E(r[3]) + '</td></tr>';
        }).join('') + '</tbody></table>';
    }

    if (m.proyek) {
      var pr = m.proyek;
      h += '<h2 id="proyek">' + E(pr.judul || 'Proyek Akhir') + '</h2>';
      if (pr.sorotan || pr.tautan) {
        h += '<div class="kartu-sorot">' + (pr.sorotan ? '<p>' + pr.sorotan + '</p>' : '') +
          (pr.tautan ? '<p class="tanpa-bawah"><a class="unduh besar" href="' + E((m.basisBerkas || '') + pr.tautan[1]) + '">' +
            E(pr.tautan[0]) + ' <span aria-hidden="true">&#8595;</span></a></p>' : '') + '</div>';
      }
      if (ada(pr.tahap)) {
        h += '<div class="tiga-kolom">' + pr.tahap.map(function (t) {
          return '<div class="kotak">' + (t.cap ? '<span class="cap">' + E(t.cap) + '</span>' : '') +
            '<h3>' + E(t.judul) + '</h3><ul class="daftar rapat">' +
            (t.butir || []).map(function (b) { return '<li>' + E(b) + '</li>'; }).join('') + '</ul></div>';
        }).join('') + '</div>';
      }
    }

    if (ada(m.ketentuan)) {
      h += '<h2 id="ketentuan">Ketentuan</h2><div class="dua-kolom">' + m.ketentuan.map(function (k) {
        return '<div class="kotak"><h3>' + E(k.judul) + '</h3>' +
          (k.isi ? '<p' + (k.catatan ? '' : ' class="tanpa-bawah"') + '>' + E(k.isi) + '</p>' : '') +
          (ada(k.butir) ? '<ul class="daftar rapat">' + k.butir.map(function (b) { return '<li>' + E(b) + '</li>'; }).join('') + '</ul>' : '') +
          (k.catatan ? '<p class="tanpa-bawah kecil">' + E(k.catatan) + '</p>' : '') + '</div>';
      }).join('') + '</div>';
    }

    if (m.kegiatan) {
      var kg = m.kegiatan;
      h += '<h2 id="kegiatan">' + E(kg.judul) + '</h2>' + (kg.isi ? '<p>' + E(kg.isi) + '</p>' : '');
      if (ada(kg.sesi)) {
        h += '<div class="dua-kolom">' + kg.sesi.map(function (s) {
          return '<div class="kotak">' + (s.cap ? '<span class="cap">' + E(s.cap) + '</span>' : '') +
            '<h3>' + E(s.judul) + '</h3><p class="tanpa-bawah kecil">' + E(s.catatan) + '</p></div>';
        }).join('') + '</div>';
      }
    }
    return h;
  }

  // ---------- Halaman: Sumber ----------
  function rSumber(m) {
    var h = kepala('Sumber Rujukan', 'Buku teks, catatan kuliah, dan berkas mata kuliah');
    var baris = function (r) {
      var judul = r[3] ? '<a href="' + E(r[3]) + '" target="_blank" rel="noopener">' + E(r[1]) + '</a>' : E(r[1]);
      return '<tr><td>' + E(r[0]) + '</td><td>' + judul + '</td><td class="kecil">' + E(r[2] || '') + '</td></tr>';
    };
    var ref = m.referensi || {};
    if (ada(ref.utama)) h += '<h2 id="utama">Rujukan Utama</h2>' + tabel(['Penulis', 'Judul', 'Penerbit'], ref.utama.map(baris).join(''));
    if (ada(ref.pendukung)) h += '<h2 id="pendukung">Rujukan Pendukung</h2>' + tabel(['Penulis', 'Judul', 'Penerbit'], ref.pendukung.map(baris).join(''));
    if (m.atribusi) h += kotakInfo('Atribusi', E(m.atribusi), 'peringatan');
    if (ada(m.berkasKuliah)) {
      h += '<h2 id="berkas">Berkas Mata Kuliah</h2><ul class="daftar-berkas">' + m.berkasKuliah.map(function (b) {
        return '<li><a href="' + E((m.basisBerkas || '') + b[1]) + '">' + E(b[0]) + '</a><span>' + E(b[2] || '') + '</span></li>';
      }).join('') + '</ul>';
    }
    if (m.perangkat) h += '<h2 id="perangkat">Perangkat yang Disebut di Kelas</h2><p class="tanpa-bawah">' + m.perangkat + '</p>';
    return h;
  }

  // ---------- Halaman: Beranda program studi ----------
  function rBeranda() {
    var S = window.SITUS || {};
    var mk = window.MK || [];
    var h = kepala(S.judulBeranda || 'Situs Mata Kuliah',
      [S.prodi, S.institusi, S.tahunAjaran ? 'Tahun Akademik ' + S.tahunAjaran : ''].filter(Boolean).map(E).join(' &middot; '));
    if (S.keteranganBeranda) h += '<p class="pengantar">' + E(S.keteranganBeranda) + '</p>';

    if (!mk.length) {
      h += kotakInfo('Belum ada mata kuliah', 'Daftarkan berkas data mata kuliah pada <code>data/daftar.js</code>.', 'peringatan');
      return h;
    }
    h += '<h2>Daftar Mata Kuliah</h2><div class="grid-mk">' + mk.map(function (m) {
      var jml = (m.jadwal || []).reduce(function (a, b) { return a + (b.pertemuan || []).length; }, 0);
      var berkas = (m.jadwal || []).reduce(function (a, b) {
        return a + (b.pertemuan || []).filter(function (p) { return p.berkas; }).length;
      }, 0);
      return '<a class="kartu-mk" href="#/' + E(m.slug) + '/jadwal" style="--aksen-mk:#' + E(m.warna || '1f6f80') + '">' +
        '<span class="kode">' + E(m.kode) + '</span>' +
        '<h3>' + E(m.nama) + '</h3>' +
        (m.ringkas ? '<p>' + E(m.ringkas) + '</p>' : '') +
        '<span class="kaki-mk">' + [m.sks, m.semester ? 'Semester ' + m.semester : ''].filter(Boolean).map(E).join(' \u00b7 ') + '</span>' +
        '<span class="kaki-mk angka-mk">' + jml + ' pertemuan \u00b7 ' + berkas + ' berkas materi</span>' +
        '</a>';
    }).join('') + '</div>';
    return h;
  }

  // ---------- Tata letak: sidebar ----------
  function sidebar(m, aktif) {
    var S = window.SITUS || {};
    var h = '<div class="merek">';
    if (m) {
      h += '<a class="kembali" href="#/">&#8592; Semua mata kuliah</a>' +
        '<span class="kode">' + E(m.kode) + '</span>' +
        '<a href="#/' + E(m.slug) + '/jadwal" class="nama">' + E(m.nama) + '</a>';
    } else {
      h += '<a href="#/" class="nama">' + E(S.prodi ? S.prodi.replace('Program Studi ', '') : 'Mata Kuliah') + '</a>';
    }
    h += '<span class="sub">' + [S.prodi, S.institusi].filter(Boolean).map(E).join('<br>') + '</span></div>';

    if (m) {
      h += '<nav aria-label="Navigasi mata kuliah"><ul>' + halamanAktifUntuk(m).map(function (p) {
        return '<li><a href="#/' + E(m.slug) + '/' + p.id + '"' + (p.id === aktif ? ' class="aktif" aria-current="page"' : '') + '>' + E(p.judul) + '</a></li>';
      }).join('') + '</ul></nav>';
    } else {
      h += '<nav aria-label="Navigasi utama"><ul><li><a href="#/" class="aktif">Daftar Mata Kuliah</a></li></ul></nav>';
    }

    var pint = [];
    if (m && ada(m.pintasan)) pint = pint.concat(m.pintasan.map(function (p) { return [p[0], (m.basisBerkas || '') + p[1]]; }));
    if (ada(S.pintasanGlobal)) pint = pint.concat(S.pintasanGlobal);
    if (pint.length) {
      h += '<div class="pintasan"><p class="label">Pintasan</p>' + pint.map(function (p) {
        var luar = /^https?:/.test(p[1]);
        return '<a href="' + E(p[1]) + '"' + (luar ? ' target="_blank" rel="noopener"' : '') + '>' + E(p[0]) + '</a>';
      }).join('') + '</div>';
    }
    return h;
  }

  function kaki(m) {
    var S = window.SITUS || {};
    var h = '<footer class="kaki">';
    if (m) h += '<p>' + [m.semester ? 'Semester ' + m.semester : '', m.tahunAjaran ? 'Tahun Akademik ' + m.tahunAjaran : '', m.sks].filter(Boolean).map(E).join(' \u00b7 ') + '</p>';
    if (m && m.atribusi) h += '<p>' + E(m.atribusi) + '</p>';
    h += '<p class="kecil">' + [S.prodi, S.jurusan, S.institusi].filter(Boolean).map(E).join(', ') + '.</p></footer>';
    return h;
  }

  function rangkaSamping(isiSamping, isiUtama) {
    return '<button class="tombol-menu" id="tombol-menu" aria-label="Buka menu">Menu</button>' +
      '<div class="bungkus"><aside class="samping">' + isiSamping + '</aside>' +
      '<main class="isi" id="utama">' + isiUtama + '</main></div>';
  }

  // ---------- Tata letak: klasik ----------
  var BAGIAN_KLASIK = [
    { id: 'home', judul: 'Beranda', tampil: function (m) { return true; }, render: kHome },
    { id: 'jadwal', judul: 'Jadwal', tampil: function (m) { return ada(m.jadwal); }, render: kJadwal },
    { id: 'ketentuan', judul: 'Ketentuan', tampil: function (m) { return m.penilaian && (ada(m.penilaian.komponen) || ada(m.penilaian.mutu)); }, render: kKetentuan },
    { id: 'proyek', judul: 'Tugas & Proyek', tampil: function (m) { return ada(m.tugas) || m.proyek || m.kegiatan; }, render: kProyek },
    { id: 'sumber', judul: 'Sumber', tampil: function (m) { return (m.referensi && (ada(m.referensi.utama) || ada(m.referensi.pendukung))) || ada(m.berkasKuliah); }, render: kSumber },
    { id: 'pengampu', judul: 'Pengampu', tampil: function (m) { return ada(m.pengampu); }, render: kPengampu },
  ];

  function bagianKlasik(m) { return BAGIAN_KLASIK.filter(function (b) { return b.tampil(m); }); }

  function kHome(m) {
    var kiri = '<h2>Tentang Mata Kuliah</h2><hr>';
    if (m.sorotan) kiri += '<p>' + m.sorotan + '</p>';
    (m.deskripsi || []).forEach(function (p) { kiri += '<p>' + E(p) + '</p>'; });
    if (ada(m.topikUtama)) {
      kiri += '<p>Beberapa topik utama:</p><ul class="daftar">' +
        m.topikUtama.map(function (t) { return '<li>' + E(t) + '</li>'; }).join('') + '</ul>';
    }
    if (m.prasyarat) kiri += '<p><strong>Prasyarat.</strong> ' + E(m.prasyarat) + '</p>';

    var kanan = '';
    if (ada(m.infoPenting)) {
      kanan += '<h2>Informasi Penting</h2><hr>';
      m.infoPenting.forEach(function (r) {
        kanan += '<address><strong>' + E(r[0]) + '</strong><br>' + E(r[1]) + '</address>';
      });
    }
    if (ada(m.angka)) {
      kanan += '<div class="angka-klasik">' + m.angka.map(function (a) {
        return '<div><span class="angka">' + E(a[0]) + '</span><span class="ket">' + E(a[1]) + '</span></div>';
      }).join('') + '</div>';
    }
    if (ada(m.pintasan)) {
      kanan += '<h2 class="rapat">Berkas</h2><hr>' + m.pintasan.map(function (p) {
        return '<p class="tautan-berkas"><a href="' + E((m.basisBerkas || '') + p[1]) + '">' + E(p[0]) + '</a></p>';
      }).join('');
    }
    return '<div class="baris"><div class="kol-8">' + kiri + '</div><div class="kol-4">' + kanan + '</div></div>';
  }

  function tautanMateri(m, t) {
    var url = t[1] ? (/^https?:/.test(t[1]) ? t[1] : (m.basisBerkas || '') + t[1]) : '';
    var luar = /^https?:/.test(t[1] || '');
    return '[' + (url
      ? '<a href="' + E(url) + '"' + (luar ? ' target="_blank" rel="noopener"' : '') + '>' + E(t[0]) + '</a>'
      : '<span class="belum-tautan">' + E(t[0]) + '</span>') + ']';
  }

  function kJadwal(m) {
    var h = '<h2>Jadwal Perkuliahan</h2><hr>';
    if (m.catatanJadwal) h += '<p class="catatan">' + E(m.catatanJadwal) + '</p>';
    h += '<div class="gulir-tabel"><table class="tabel-jadwal"><thead><tr>' +
      '<th class="k-minggu">Pertemuan</th><th class="k-tanggal">Tanggal</th><th>Materi</th><th class="k-bahan">Bahan Kuliah</th>' +
      '</tr></thead><tbody>';

    (m.jadwal || []).forEach(function (blok) {
      if (blok.blok) h += '<tr class="baris-blok"><td colspan="4">' + E(blok.blok) + '</td></tr>';
      (blok.pertemuan || []).forEach(function (P) {
        var agenda = ada(P.agenda) ? P.agenda : [{
          judul: P.topik, konsep: P.catatan,
          materi: P.berkas ? [['Materi kuliah', P.berkas]] : []
        }];
        agenda.forEach(function (a, i) {
          var kelas = P.jenis ? ' baris-' + E(P.jenis) : '';
          h += '<tr class="baris-agenda' + kelas + (i === 0 ? ' awal' : '') + '">' +
            '<td class="k-minggu">' + (i === 0 ? '<span class="lencana" style="background:#' + E(P.warna || m.warna || '888') + '">' + E(P.minggu || P.n) + '</span>' : '') + '</td>' +
            '<td class="k-tanggal">' + (i === 0 ? E(P.tanggal || '') : '') + '</td>' +
            '<td><b>' + E(a.judul) + '</b>' + (a.konsep ? '<br><i>' + E(a.konsep) + '</i>' : '') +
            (i === 0 && P.label ? '<br><span class="tag">' + E(P.label) + '</span>' + (P.bobot ? ' <span class="kecil">Bobot ' + E(P.bobot) + '</span>' : '') : '') + '</td>' +
            '<td class="k-bahan">' + (ada(a.materi)
              ? a.materi.map(function (t) { return tautanMateri(m, t); }).join('<br>')
              : '<span class="belum-tautan">menyusul</span>') +
            (ada(a.bacaan) ? '<br><br><span class="kecil">Bacaan dan tontonan:</span><br>' +
              a.bacaan.map(function (t) { return tautanMateri(m, t); }).join('<br>') : '') +
            '</td></tr>';
        });
      });
    });
    h += '</tbody></table></div>';
    if (m.peringatanJadwal) h += kotakInfo(m.peringatanJadwal.judul, E(m.peringatanJadwal.isi), 'peringatan');
    return h;
  }

  function kKetentuan(m) {
    var isi = rPenilaian(m);
    return isi.replace(/^<header[\s\S]*?<\/header>/, '<h2>Ketentuan dan Penilaian</h2><hr>');
  }
  function kProyek(m) {
    var isi = rTugas(m);
    return isi.replace(/^<header[\s\S]*?<\/header>/, '<h2>Tugas dan Proyek</h2><hr>');
  }
  function kSumber(m) {
    var isi = rSumber(m);
    return isi.replace(/^<header[\s\S]*?<\/header>/, '<h2>Sumber Rujukan</h2><hr>');
  }
  function kPengampu(m) {
    return '<h2>Dosen Pengampu</h2><hr><div class="grid-orang">' + m.pengampu.map(function (p) {
      var inisial = p.nama.replace(/,.*$/, '').split(/\s+/).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
      return '<div class="orang">' +
        (p.foto ? '<img src="' + E((m.basisBerkas || '') + p.foto) + '" alt="">' : '<span class="inisial" style="background:#' + E(m.warna || '1f6f80') + '">' + E(inisial) + '</span>') +
        '<div><strong>' + E(p.nama) + '</strong>' +
        (p.peran ? '<span class="peran">' + E(p.peran) + '</span>' : '') +
        (p.surel ? '<a href="mailto:' + E(p.surel) + '">' + E(p.surel) + '</a>' : '') + '</div></div>';
    }).join('') + '</div>';
  }

  function rangkaKlasik(m, sorot) {
    var S = window.SITUS || {};
    var bagian = bagianKlasik(m);
    var nav = bagian.map(function (b) {
      return '<li><a href="#/' + E(m.slug) + '/' + b.id + '"' + (b.id === sorot ? ' class="aktif"' : '') + '>' + E(b.judul) + '</a></li>';
    }).join('');

    var h = '<nav class="bilah-atas"><div class="wadah">' +
      '<a class="merek-atas" href="#/' + E(m.slug) + '">' + E(m.nama) + '</a>' +
      '<button class="tombol-bilah" id="tombol-menu" aria-label="Buka menu">&#9776;</button>' +
      '<ul class="menu-atas" id="menu-atas">' + nav +
      '<li class="pisah-menu"><a href="#/">Semua mata kuliah</a></li></ul>' +
      '</div></nav>';

    h += '<header class="sampul" style="background:#' + E(m.warna || '1f6f80') + '"><div class="wadah">' +
      '<span class="kode-sampul">' + E(m.kode) + '</span>' +
      '<h1>' + E(m.nama).toUpperCase() + '</h1>' +
      '<p>' + [m.sks, m.semester ? 'Semester ' + m.semester : '', m.tahunAjaran].filter(Boolean).map(E).join(' &middot; ') + '</p>' +
      '</div></header>';

    h += '<main class="wadah" id="utama">' + bagian.map(function (b) {
      return '<section class="bagian" id="' + b.id + '">' + b.render(m) + '</section>';
    }).join('') + '</main>';

    h += '<footer class="kaki-klasik"><div class="wadah">' +
      '<p>' + E(m.nama) + ' \u00b7 ' + [S.prodi, S.institusi].filter(Boolean).map(E).join(' \u00b7 ') + '</p>' +
      (m.atribusi ? '<p class="kecil">' + E(m.atribusi) + '</p>' : '') +
      '<p class="kecil">Hak cipta \u00a9 ' + new Date().getFullYear() + '</p>' +
      '</div></footer>';
    return h;
  }

  // ---------- Router ----------
  function baca() {
    var t = (location.hash || '#/').replace(/^#\/?/, '').split('/').filter(Boolean);
    return { slug: t[0] || null, halaman: t[1] || null };
  }

  function pasangMenu() {
    var b = document.getElementById('tombol-menu');
    if (b) b.addEventListener('click', function () { document.body.classList.toggle('buka'); });
  }

  function gambar() {
    var r = baca();
    var mk = window.MK || [];
    var m = r.slug ? mk.filter(function (x) { return x.slug === r.slug; })[0] : null;
    var app = document.getElementById('app');
    document.body.classList.remove('buka', 'tema-klasik');

    if (r.slug && !m) {
      app.innerHTML = rangkaSamping(sidebar(null, null),
        kepalaGalat(r.slug) + kaki(null));
      pasangMenu();
      window.scrollTo(0, 0);
      return;
    }

    if (!m) {
      document.title = (window.SITUS.judulBeranda || 'Mata Kuliah') + ' | ' + (window.SITUS.prodi || '');
      app.innerHTML = rangkaSamping(sidebar(null, null), rBeranda() + kaki(null));
      pasangMenu();
      window.scrollTo(0, 0);
      return;
    }

    if (m.tema === 'klasik') {
      document.body.classList.add('tema-klasik');
      document.title = m.nama + ' | ' + m.kode;
      app.innerHTML = rangkaKlasik(m, r.halaman || 'home');
      pasangMenu();
      var target = r.halaman && document.getElementById(r.halaman);
      if (target) { target.scrollIntoView(); } else { window.scrollTo(0, 0); }
      return;
    }

    var tersedia = halamanAktifUntuk(m);
    var hal = tersedia.filter(function (p) { return p.id === r.halaman; })[0] || tersedia[0];
    document.title = hal.judul + ' \u00b7 ' + m.nama + ' | ' + m.kode;
    app.innerHTML = rangkaSamping(sidebar(m, hal.id), hal.render(m) + kaki(m));
    pasangMenu();
    if (hal.id === 'jadwal') pasangPencarian();
    window.scrollTo(0, 0);
  }

  function kepalaGalat(slug) {
    return kepala('Mata kuliah tidak ditemukan',
      'Kode <code>' + E(slug) + '</code> tidak terdaftar pada <code>data/daftar.js</code>.') +
      '<p><a href="#/">Kembali ke daftar mata kuliah</a></p>';
  }

  // ---------- Mulai ----------
  window.addEventListener('hashchange', gambar);
  document.addEventListener('DOMContentLoaded', function () {
    muatSemua().then(gambar).catch(function (e) {
      document.getElementById('app').innerHTML = kepala('Terjadi kesalahan', E(e.message));
    });
  });
})();
