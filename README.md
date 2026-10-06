[README.md](https://github.com/user-attachments/files/33094107/README.md)
# PABW — Muhammad Rassya Kasyfurrahman — 25523258

Repo ini memuat pekerjaan Mata kuliah Pengembangan Aplikasi Berbasis Web (PABW) untuk setiap pertemuan Kelas E.

---

## Pertemuan 4 — Halaman profil saya

Halaman profil ini dibuat untuk, mahasiswa Program Studi Informatika Universitas Islam Indonesia. Halaman berisi informasi diri, kegiatan, karya, keterampilan, dan formulir kontak.

### Arah visual

- **Arah visual:** Tegas dan teknis
- **Warna utama:** `#060F27` (navy nyaris hitam) — diambil dari warna langit malam pada foto profil saya sendiri di bagian Tentang saya
- **Warna netral:** `--gray-50` `#F8FAFC` untuk latar, `--gray-900` `#0F172A` untuk teks; latar kartu putih `#FFFFFF`, garis tepi `#D1D5DB`
- **Ukuran huruf:** teks isi 1rem, judul bagian 1.5rem, judul halaman 2.25rem
- **Jarak dasar:** skala 4 langkah — 0.25rem / 0.5rem / 0.75rem / 1rem, dan 1.5rem untuk jarak antar bagian halaman
- **Radius & bayangan:** radius 0.5rem untuk tombol dan kartu, radius penuh 999px untuk bentuk pil, bayangan halus `0 1px 3px rgba(0,0,0,.10)`

### Design token yang saya tetapkan

| Token             | Nilai     | Untuk apa               |
| :---------------- | :-------- | :---------------------- |
| `--color-primary` | `#060F27` | tombol, tautan, penanda |
| `--color-fg`      | `#0F172A` | warna teks utama        |

Kriteria selesai saya: mengubah `--color-primary` cukup di satu baris (lapis primitif `--blue-700` di `tokens.css`), lalu tombol, tautan, judul, dan garis fokus ikut berubah sekaligus tanpa menyunting berkas lain.

## Pertemuan 5 — Layout modern: flexbox dan grid

Halaman yang sama dengan Pertemuan 4, disalin ke `worksheet-p5/`. Isi HTML, warna, dan token tidak berubah; yang berubah hanya CSS yang mengatur posisi.

### Sketsa kerangka

```text
+------------------------------------------------------+
| KEPALA (flex)  judul ............ menu  [tema]       | baris 1: auto
+------------------------------------------------------+
| TENTANG SAYA  (area "tentang", dua kolom)            |
+------------------------------------------------------+
| KETERAMPILAN | KARYA (galeri auto-fit)              | baris 2: 1fr
| (sidebar,    | HUBUNGI SAYA                          | kolom: 16rem 1fr
| span 4 baris)| TANYA JAWAB                           |
|              | PERJALANAN SAYA                       |
+------------------------------------------------------+
| KAKI HALAMAN                                         | baris 3: auto
+------------------------------------------------------+
```

---
