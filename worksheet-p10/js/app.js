// js/app.js
const nama = "Muhammad Rassya Kasyfurrahman";
const jumlahKarya = 3;
let pilihanAktif = "semua";

console.log(typeof nama);
console.log(typeof jumlahKarya);

const profil = {
  nama: "Muhammad Rassya Kasyfurrahman",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => {
  return daftar.join(" · ");
};

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Data Proyek diekspor dan diberi kategori sesuai data-kategori pada tombol filter
export const daftarProyek = [
  {
    judul: "Halaman Kelas Terbuka Kampus",
    tahun: 2026,
    selesai: true,
    tag: "HTML & CSS",
    kategori: "web",
  },
  {
    judul: "Sistem Informasi Profil Mahasiswa",
    tahun: 2026,
    selesai: true,
    tag: "CSS Grid",
    kategori: "web",
  },
  {
    judul: "Eksplorasi Design Tokens",
    tahun: 2026,
    selesai: false,
    tag: "Tokens",
    kategori: "data",
  },
];

console.table(daftarProyek);
