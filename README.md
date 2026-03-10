# 💊 Sistem Monitoring Stok Obat

**Praktikum Pemrograman Web — BAB 1: HTML, CSS, JavaScript Sederhana**  
Program Studi D3 Teknik Informatika KAB. Madiun — Sekolah Vokasi, Universitas Sebelas Maret

---

## 📋 Identitas

| Keterangan | Isi |
|---|---|
| Nama Sistem | Sistem Monitoring Stok Obat |
| Nomor Sistem | 23 (Bidang Kesehatan) |
| Mata Kuliah | Pemrograman Web |
| Program Studi | D3 Teknik Informatika KAB. Madiun |
| Institusi | Sekolah Vokasi — Universitas Sebelas Maret |

---

## 📝 Deskripsi Sistem

Sistem Monitoring Stok Obat adalah sebuah **landing page** berbasis web yang berfungsi untuk memantau dan mengelola ketersediaan obat di apotek. Sistem ini memungkinkan pengguna untuk:

- Melihat daftar stok obat beserta statusnya secara real-time
- Menambah data obat baru ke dalam daftar
- Menghapus data obat yang sudah tidak tersedia
- Memantau jumlah obat per kategori secara otomatis
- Mengirim laporan stok obat melalui form

---

## 🗂️ Struktur File

```
📁 sistem-monitoring-stok-obat/
├── 📄 stok_obat.html   → Struktur halaman (HTML)
├── 🎨 style.css        → Tampilan dan styling (CSS)
└── ⚙️ scripts.js       → Logika dan interaktivitas (JavaScript)
```

---

## 🌐 Cara Menjalankan

1. **Download** atau clone repository ini
2. Pastikan ketiga file (`stok_obat.html`, `style.css`, `scripts.js`) berada dalam **satu folder yang sama**
3. Buka file `stok_obat.html` menggunakan browser (Chrome, Firefox, Edge, dll.)
4. Tidak memerlukan server atau instalasi tambahan

---

## ✨ Fitur

| Fitur | Keterangan |
|---|---|
| 📊 Tabel Stok Obat | Menampilkan daftar obat beserta kategori, jumlah, satuan, dan status |
| ➕ Tambah Obat | Form untuk menambah data obat baru ke tabel |
| 🗑️ Hapus Obat | Tombol hapus pada setiap baris dengan konfirmasi |
| 🏷️ Badge Kategori | Menampilkan jumlah obat per kategori secara otomatis |
| 📋 Form Laporan | Form untuk mengirimkan laporan stok obat |
| 🔄 Status Otomatis | Status stok (Aman / Menipis / Habis) ditentukan otomatis berdasarkan jumlah |

---

## 🔍 Penjelasan Kode

### 📄 HTML (`stok_obat.html`)

Berisi struktur halaman web yang terdiri dari:

- **`<header>`** — Judul dan nama institusi sistem
- **`<table id="isiTabel">`** — Tabel daftar stok obat dengan kolom: No, Nama Obat, Kategori, Jumlah Stok, Satuan, Status, dan Aksi
- **`<ul id="listKategori">`** — Daftar kategori obat beserta badge jumlah, diisi otomatis oleh JavaScript
- **`<form name="formTambah">`** — Form tambah obat baru dengan input teks, dropdown kategori, input angka, dan dropdown satuan
- **`<form name="formLapor">`** — Form untuk mengirim laporan stok obat

### 🎨 CSS (`style.css`)

Mengatur tampilan seluruh halaman, meliputi:

- **`body`** — Background biru muda, font Segoe UI
- **`.container`** — Kotak konten utama dengan shadow dan border-radius
- **`header`** — Latar gradasi biru dengan teks putih
- **`h2`** — Judul bagian dengan garis kuning di sisi kiri sebagai aksen
- **`table, th, td`** — Tabel dengan header biru tua, zebra stripe pada baris, dan efek hover
- **`.daftar-kategori`** — Kotak daftar kategori dengan latar gradasi biru muda
- **`.badge-angka`** — Label bulat biru di sisi kanan setiap kategori yang menampilkan jumlah obat
- **`.form-group`** — Layout label dan input sejajar horizontal
- **`.btn-tambah`** — Tombol hijau untuk menambah obat
- **`.btn-hapus`** — Tombol merah untuk menghapus baris obat
- **`.btn-submit`** — Tombol biru untuk mengirim laporan

### ⚙️ JavaScript (`scripts.js`)

Berisi tiga fungsi utama:

#### `updateKategori()`
Menghitung jumlah obat per kategori dari isi tabel, lalu menampilkan hasilnya ke daftar kategori dengan badge angka. Fungsi ini dipanggil saat halaman pertama dibuka, setelah menambah obat, dan setelah menghapus obat.

```javascript
function updateKategori() {
    // Hitung jumlah obat tiap kategori dari tabel
    // Tampilkan hasilnya ke <ul id="listKategori">
}
```

#### `tambahObat(event)`
Mengambil data dari form tambah, menentukan status stok secara otomatis, menyisipkan baris baru ke tabel, lalu mereset form.

```javascript
function tambahObat(event) {
    event.preventDefault(); // Cegah reload halaman
    // Ambil nilai form → tentukan status → sisipkan baris baru ke tabel
}
```

**Logika status otomatis:**
| Kondisi | Status |
|---|---|
| Jumlah = 0 | 🔴 Habis |
| Jumlah < 30 | 🟡 Menipis |
| Jumlah ≥ 30 | 🟢 Aman |

#### `hapusObat(tombol)`
Melacak baris tabel dari tombol yang diklik, menampilkan konfirmasi, menghapus baris, lalu memperbarui nomor urut.

```javascript
function hapusObat(tombol) {
    var baris = tombol.parentNode.parentNode; // Lacak baris dari tombol
    var konfirmasi = confirm("Yakin ingin menghapus?");
    if (konfirmasi) {
        baris.parentNode.removeChild(baris); // Hapus baris
        // Perbarui nomor urut & kategori
    }
}
```

---

## 🖥️ Screenshot

> Tambahkan screenshot tampilan web di sini setelah menjalankan di browser.

```
Contoh:
![Tampilan Halaman Utama](screenshot.png)
```

---

## 🛠️ Teknologi yang Digunakan

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📚 Referensi

- [MDN Web Docs — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Modul Praktikum Pemrograman Web — UNS Sekolah Vokasi](https://uns.ac.id)

---

> 📌 *Dibuat sebagai pemenuhan tugas mandiri Praktikum Pemrograman Web — BAB 1*  
> *D3 Teknik Informatika KAB. Madiun, Sekolah Vokasi, Universitas Sebelas Maret*
