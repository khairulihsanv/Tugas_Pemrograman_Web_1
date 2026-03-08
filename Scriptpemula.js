// Fungsi menghitung dan menampilkan jumlah obat per kategori
function updateKategori() {
    var tbody = document.getElementById("isiTabel");
    var baris = tbody.rows;

    // Daftar kategori yang tersedia
    var daftarKategori = ["Analgesik", "Antibiotik", "Antasida", "Vitamin & Suplemen", "Antihipertensi", "Antihistamin"];
    var hitungKategori = {};

    // Inisialisasi semua kategori dengan nilai 0
    daftarKategori.forEach(function(kat) {
        hitungKategori[kat] = 0;
    });

    // Hitung jumlah obat di setiap kategori berdasarkan isi tabel
    for (var i = 0; i < baris.length; i++) {
        var kat = baris[i].cells[2].innerText;
        if (hitungKategori[kat] !== undefined) {
            hitungKategori[kat]++;
        }
    }

    // Tampilkan hasil ke dalam list kategori
    var listEl = document.getElementById("listKategori");
    listEl.innerHTML = "";
    daftarKategori.forEach(function(kat) {
        listEl.innerHTML +=
            "<li>" + kat +
            "<span class='badge-angka'>" + hitungKategori[kat] + " obat</span>" +
            "</li>";
    });
}

// Fungsi Tambah Obat ke Tabel
function tambahObat(event) {
    // Mencegah halaman refresh saat form disubmit
    event.preventDefault();

    // Mengambil nilai dari setiap input dan select form
    var nama     = document.getElementById("nama_obat").value;
    var kategori = document.getElementById("kategori").value;
    var jumlah   = parseInt(document.getElementById("jumlah").value);
    var satuan   = document.getElementById("satuan").value;

    // Menentukan status otomatis berdasarkan jumlah stok
    var status;
    if (jumlah === 0) {
        status = "Habis";
    } else if (jumlah < 30) {
        status = "Menipis";
    } else {
        status = "Aman";
    }

    // Mengambil tbody tabel dan menghitung jumlah baris untuk nomor urut
    var tbody = document.getElementById("isiTabel");
    var nomorBaru = tbody.rows.length + 1;

    // Membuat baris baru dan mengisi kolom-kolomnya
    var barisBaru = tbody.insertRow();
    barisBaru.innerHTML =
        "<td>" + nomorBaru + "</td>" +
        "<td>" + nama + "</td>" +
        "<td>" + kategori + "</td>" +
        "<td>" + jumlah + "</td>" +
        "<td>" + satuan + "</td>" +
        "<td>" + status + "</td>" +
        "<td><button class='btn-hapus' onclick='hapusObat(this)'>🗑 Hapus</button></td>";

    // Perbarui tampilan list kategori
    updateKategori();

    // Menampilkan pop-up alert konfirmasi
    alert("Obat \"" + nama + "\" berhasil ditambahkan ke daftar stok!");

    // Mengosongkan form setelah data ditambahkan
    document.forms["formTambah"].reset();
}

// Fungsi Hapus Baris Obat dari Tabel
function hapusObat(tombol) {
    // Mengambil nama obat dari kolom ke-2 (index 1) pada baris yang sama
    var baris = tombol.parentNode.parentNode;
    var namaObat = baris.cells[1].innerText;

    // Konfirmasi sebelum menghapus
    var konfirmasi = confirm("Yakin ingin menghapus obat: " + namaObat + "?");

    if (konfirmasi) {
        // Menghapus baris dari tabel
        baris.parentNode.removeChild(baris);

        // Memperbarui nomor urut setelah penghapusan
        var tbody = document.getElementById("isiTabel");
        for (var i = 0; i < tbody.rows.length; i++) {
            tbody.rows[i].cells[0].innerText = i + 1;
        }

        // Perbarui tampilan list kategori
        updateKategori();

        alert("Obat \"" + namaObat + "\" berhasil dihapus dari daftar.");
    }
}

// Jalankan saat halaman pertama kali dibuka
updateKategori();