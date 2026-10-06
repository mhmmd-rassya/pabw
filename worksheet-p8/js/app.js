// --- LEMBAR B: DATA & VARIABEL ---
const nama = "Muhammad Rassya Kasyfurrahman";
const jumlahKarya = 3;
let pilihanAktif = "semua";

console.log(typeof nama); // "string"
console.log(typeof jumlahKarya); // "number"

const profil = {
  nama: "Muhammad Rassya Kasyfurrahman",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

// --- LEMBAR C: DUA FUNGSI MURNI ---

// 1. Fungsi murni menyusun kalimat perkenalan dari objek profil
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi murni merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => {
  return daftar.join(" · ");
};

// Uji panggil fungsi dan tampilkan di Console
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// --- LEMBAR D: STRUKTUR DATA & ARRAY METHODS ---

// 1. Array of Object untuk karya/proyek
const daftarProyek = [
  {
    judul: "Halaman Kelas Terbuka Kampus",
    tahun: 2026,
    selesai: true,
    tag: "HTML & CSS",
  },
  {
    judul: "Sistem Informasi Profil Mahasiswa",
    tahun: 2026,
    selesai: true,
    tag: "CSS Grid",
  },
  {
    judul: "Eksplorasi Design Tokens",
    tahun: 2026,
    selesai: false,
    tag: "Tokens",
  },
];

// 2. console.table
console.table(daftarProyek);

// 3. filter
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);
console.table(proyekSelesai);

// 4. find
const proyekCari = daftarProyek.find(
  (proyek) => proyek.judul === "Eksplorasi Design Tokens",
);
console.log(proyekCari);

// 5. map
const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);

// 6. sort pada salinan array (data asli tidak berubah)
const proyekUrut = [...daftarProyek].sort((a, b) =>
  a.judul.localeCompare(b.judul),
);
console.table(proyekUrut);
console.log("Data asli setelah sort:", daftarProyek);
