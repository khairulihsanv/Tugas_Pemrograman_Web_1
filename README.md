- Penghubung File CSS dan JavaScript
<link rel="stylesheet" href="style.css">
<script src="scripts.js"></script>
Penjelasan : Tanpa `<link>` maka halaman tidak akan punya tampilan, dan tanpa `<script>` maka tombol-tombol tidak akan berfungsi.


- ID pada Elemen Kunci
<tbody id="isiTabel">
<ul id="listKategori">
Penjelasan : tanpa `id`, JavaScript tidak bisa menemukan tabel atau daftar kategori untuk dimanipulasi.


- onclick dan onsubmit
<button onclick="hapusObat(this)"> Hapus</button>
<form onsubmit="tambahObat(event)">
Penjelasan : onclick berarti "saat diklik, jalankan fungsi ini". onsubmit berarti "saat form disubmit, jalankan fungsi ini". Tanpa code tersebut, tombol dan form tidak melakukan apapun.
Kata this artinya "elemen ini sendiri" (tombol yang diklik), sedangkan event adalah informasi kejadian submit yang dikirim otomatis oleh browser.


- required pada Input
<input type="text" id="nama_obat" required>
<select id="kategori" required>
Penjelasan : Form tidak bisa disubmit jika elemen ini masih kosong — browser akan otomatis menampilkan peringatan tanpa perlu kode JavaScript tambahan. Sangat penting untuk mencegah data kosong masuk ke tabel.


<select> vs <input type="text">
<input type="text" placeholder="Contoh: Analgesik">
<select id="kategori">
    <option value="Analgesik">Analgesik</option>
    <option value="Antibiotik">Antibiotik</option>
</select>
Penjelasan : Kategori dan satuan sengaja dibuat <select> bukan <input> karena jika pengguna mengetik bebas, tulisan bisa berbeda-beda (misal: "analgesik", "Analgesik", "ANALGESIK") yang akan merusak perhitungan di fungsi updateKategori().


- Flexbox pada Form Group
.form-group {
    display: flex;
    align-items: center;
    gap: 10px;
}
.form-group label {
    width: 130px;
    flex-shrink: 0;
}
.form-group input, .form-group select {
    flex: 1;
}
Penjelasan : display: flex membuat label dan input otomatis sejajar horizontal. Tanpa ini, label dan input akan menumpuk ke bawah.
flex-shrink: 0 memastikan label tidak menyempit, dan 
flex: 1 membuat input mengisi sisa ruang yang ada — sehingga form tampil rapi di berbagai ukuran layar.


- Efek Fokus pada Input
.form-group input:focus,
.form-group select:focus {
    border-color: #004a87;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 74, 135, 0.12);
}
Penjelasan : memberikan umpan balik visual kepada pengguna bahwa mereka sedang mengisi input tersebut. 
outline: none menghapus garis default browser, lalu diganti dengan 
box-shadow biru transparan yang lebih elegan. Ini penting untuk pengalaman pengguna (UX).


- Zebra Stripe & Hover pada Tabel
tr:nth-child(even) {
    background-color: #f0f7ff;
}
tr:hover {
    background-color: #dceeff;
    transition: background 0.2s;
}
Penjelasan : Zebra stripe (warna bergantian) membantu mata mengikuti data dalam satu baris tanpa tersesat ke baris lain. Efek hover mempertegas baris mana yang sedang dilihat pengguna. transition: 0.2s membuat perubahan warna tidak terasa kasar.
 
 
- Badge Angka Kategori
.badge-angka {
    background-color: #004a87;
    color: white;
    padding: 2px 10px;
    border-radius: 12px;
    float: right;
}
Penjelasan : float: right adalah properti paling krusial di sini — mendorong badge ke sisi kanan, sementara nama kategori tetap di kiri.
border-radius: 12px pada elemen kecil menghasilkan bentuk kapsul yang khas untuk badge. Tanpa Code ini, angka hanya akan tampil sebagai teks biasa menempel di nama kategori.


- Warna Tombol Sesuai Fungsi
.btn-tambah { background-color: #1a9e5c; } 
.btn-hapus  { background-color: #fee2e2; color: #b91c1c; }
.btn-submit { background-color: #004a87; } 
Penjelasan : Pengguna bisa langsung memahami fungsi tombol hanya dari warnanya, tanpa harus membaca teksnya.


event.preventDefault()
function tambahObat(event) {
    event.preventDefault(); // 
}
Penjelasan : Secara default, saat form disubmit, browser akan me-reload halaman dan semua data yang sudah diisi ke tabel akan hilang. preventDefault() menghentikan perilaku itu, sehingga JavaScript bisa bekerja tanpa gangguan. Jika baris tersebut dihapus, semua fitur tambah obat tidak akan berfungsi.


- Logika Penentuan Status Otomatis
if (jumlah === 0) {
    status = "Habis";
} else if (jumlah < 30) {
    status = "Menipis";
} else {
    status = "Aman";
}
Penjelasan :  Pengguna tidak perlu menentukan status sendiri, sistem menentukan secara otomatis berdasarkan jumlah stok.


- Melacak Baris dari Tombol Hapus
function hapusObat(tombol) {
    var baris = tombol.parentNode.parentNode;
Penjelasan: DOM traversal (menjelajahi struktur HTML). satu tombol hapus ada di setiap baris, JavaScript harus tahu tombol mana yang diklik dan baris mana yang harus dihapus.


- Menghitung Kategori dari Tabel
for (var i = 0; i < baris.length; i++) {
    var kat = baris[i].cells[2].innerText;
    if (hitungKategori[kat] !== undefined) {
        hitungKategori[kat]++;
    }
}
Penjelasan : fungsi updateKategori(). Perulangan membaca kolom Kategori (cells[2]) di setiap baris tabel, lalu menghitung berapa kali setiap kategori muncul. Pengecekan !== undefined penting untuk menghindari error jika ada kategori yang tidak terdaftar di sistem.


- Menulis HTML dari JavaScript
barisBaru.innerHTML =
    "<td>" + nomorBaru + "</td>" +
    "<td>" + nama + "</td>" +
    ...
    "<td><button onclick='hapusObat(this)'>🗑 Hapus</button></td>";
Penjelasan :  Saat pengguna mengisi form dan menekan tambah, JavaScript membuat kode HTML baris tabel secara dinamis dan menyisipkannya ke halaman tanpa reload. tombol hapus yang dibuat otomatis di setiap baris baru juga langsung berfungsi karena sudah terpasang `onclick`.


- updateKategori() Dipanggil di Tiga Tempat
// 1. Saat halaman pertama dibuka
updateKategori();

// 2. Setelah tambah obat
function tambahObat(event) {
    ...
    updateKategori(); // ← badge langsung bertambah
}

// 3. Setelah hapus obat
function hapusObat(tombol) {
    ...
    updateKategori(); // ← badge langsung berkurang
}
Penjelaan : Fungsi ini dipanggil di tiga titik yang berbeda untuk memastikan badge angka selalu sinkron dengan isi tabel. Ini adalah pola penting dalam pemrograman: setiap kali data berubah, tampilan harus segera diperbarui. Jika salah satu pemanggilan dihapus, badge akan menampilkan angka yang tidak akurat.
