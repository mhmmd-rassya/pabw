import { daftarProyek } from "./app.js";

// LEMBAR A: Memilih elemen di halaman
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

const form = document.querySelector("#form-kontak");
const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputNim = document.querySelector("#nim");
const inputPesan = document.querySelector("#pesan");
const tombolKirim = document.querySelector("#tombol-kirim");

const galatNama = document.querySelector("#galat-nama");
const galatEmail = document.querySelector("#galat-email");
const galatNim = document.querySelector("#galat-nim");
const galatPesan = document.querySelector("#galat-pesan");

// LEMBAR B: Menyusun elemen kartu dari data (createElement & textContent)
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const divIsi = document.createElement("div");
  divIsi.className = "kartu__isi";

  const h3 = document.createElement("h3");
  h3.className = "kartu__judul";
  h3.textContent = proyek.judul; // Menggunakan textContent (Aman XSS)

  divIsi.append(h3);

  const divKaki = document.createElement("div");
  divKaki.className = "kartu__kaki";

  const spanTag = document.createElement("span");
  spanTag.className = "tag";
  spanTag.textContent = proyek.tag || "Web";

  const spanTahun = document.createElement("span");
  spanTahun.className = "tahun";
  spanTahun.textContent = proyek.tahun;

  divKaki.append(spanTag, spanTahun);
  li.append(divIsi, divKaki);

  return li;
}

// LEMBAR D.1: Fungsi render tunggal
function render(daftar) {
  wadah.textContent = ""; // 1. Kosongkan wadah lebih dulu
  if (daftar.length === 0) {
    // 2. Periksa keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek))); // 3. Isi ulang
}

// LEMBAR C: Event delegation tombol filter dan penanda aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // Klik di luar tombol, abaikan

  tandaiTombolAktif(tombol);
  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori,
  );
  render(terpilih);
});

// LEMBAR D.2: Validasi Form Kontak
function validasiForm() {
  const namaValid = inputNama.value.trim() !== "";
  const emailValid = inputEmail.value.trim().includes("@");
  const nimValid = inputNim.value.trim().length === 8;
  const pesanValid = inputPesan.value.trim() !== "";

  galatNama.textContent = namaValid ? "" : "Nama wajib diisi";
  inputNama.setAttribute("aria-invalid", !namaValid);

  galatEmail.textContent = emailValid ? "" : "Format email tidak sah";
  inputEmail.setAttribute("aria-invalid", !emailValid);

  galatNim.textContent = nimValid ? "" : "NIM harus 8 digit";
  inputNim.setAttribute("aria-invalid", !nimValid);

  galatPesan.textContent = pesanValid ? "" : "Pesan wajib diisi";
  inputPesan.setAttribute("aria-invalid", !pesanValid);

  const seluruhSah = namaValid && emailValid && nimValid && pesanValid;
  tombolKirim.disabled = !seluruhSah;
  return seluruhSah;
}

// Pemasangan event listener pada form
inputNama.addEventListener("input", validasiForm);
inputEmail.addEventListener("input", validasiForm);
inputNim.addEventListener("input", validasiForm);
inputPesan.addEventListener("input", validasiForm);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah reload halaman
  if (validasiForm()) {
    alert("Pesan berhasil dikirim!");
    form.reset();
    validasiForm();
  } else {
    if (inputNama.value.trim() === "") inputNama.focus();
    else if (!inputEmail.value.trim().includes("@")) inputEmail.focus();
    else if (inputNim.value.trim().length !== 8) inputNim.focus();
    else if (inputPesan.value.trim() === "") inputPesan.focus();
  }
});

// Inisialisasi awal
render(daftarProyek);
validasiForm();
