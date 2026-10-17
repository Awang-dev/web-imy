Website Profil [Nama Ormawa]

Website profil satu halaman untuk [Nama Ormawa], dibuat oleh Kelompok 5 sebagai tugas proyek akhir (Final Project) pada kegiatan Internship DevXExperience 2026. Website menampilkan profil organisasi, visi dan misi, struktur pengurus, program kerja, serta ajakan untuk menghubungi pengurus.

Repository: https://github.com/Awang-dev/web-imy_FP_Kelompok5
Website (Vercel): (https://web-imy-fp-kelompok5-rgjh.vercel.app/)
Dokumen perencanaan: prd
Fitur
Navbar responsive dengan hamburger menu dan anchor link ke tiap section
Hero dan Marquee
About Us (Tentang Kami)
Visi & Misi
Struktur Pengurus
Program Kerja
Contact CTA dengan Modal
Footer
Halaman 404 (NotFound)

Section pada halaman utama memakai id anchor #tentang-kami, #visi-misi, #struktur-pengurus, #program-kerja, dan #kontak.

Teknologi
Kebutuhan	Teknologi
Library UI	React 19
Build tool	Vite 8
Routing	React Router DOM 7
Styling	Tailwind CSS 4 (@tailwindcss/vite)
Linter	Oxlint
Hosting	Vercel
Struktur Proyek
text
web-imy_FP_Kelompok5/
├── public/              # aset statis
├── src/
│   ├── components/      # Navbar, Hero, Marquee, AboutUs, VisiMisi, Struktur,
│   │                    # ProgramKerja, ContactCTA, Modal, Footer
│   ├── data/            # aboutHighlights.js, misi.js, struktur.js, programKerja.js
│   ├── layouts/         # MainLayout.jsx
│   ├── pages/           # Home.jsx, NotFound.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vercel.json          # pengaturan routing untuk Vercel
├── vite.config.js
├── package.json
└── prd                  # Product Requirements Document

Struktur folder di atas mengikuti pembagian tugas tim. Sesuaikan dengan isi src/ terbaru jika ada perubahan.

Cara Menjalankan

Prasyarat: Node.js dan Git sudah terpasang.

bash
# 1. Clone repository
git clone https://github.com/Awang-dev/web-imy_FP_Kelompok5.git
cd web-imy_FP_Kelompok5

# 2. Pasang dependensi
npm install

# 3. Jalankan mode pengembangan
npm run dev

Buka http://localhost:5173/ di browser.

Perintah	Fungsi
npm run dev	Menjalankan server pengembangan
npm run build	Membuat build produksi
npm run preview	Melihat hasil build secara lokal
npm run lint	Mengecek kode dengan Oxlint
Alur Kerja Tim
Branch main dilindungi (branch protection), jadi tidak ada yang push langsung ke main.
Setiap anggota bekerja di branch sendiri, misalnya feat/dynamic-sections.
Sebelum mulai bekerja, jalankan git pull dari main terbaru.
Setelah selesai, buka Pull Request ke main. Project Manager mereview lalu me-merge.
Progres tugas dipantau di Trello (To Do → In Progress → Review PR → Done).
Tim Pengembang (Kelompok 5)
Peran	Nama	Tanggung Jawab
A, Project Manager	Tanaya Awang Ranumeru	Repo GitHub, Trello, komunikasi PIC Ormawa, PRD, review dan merge PR, dokumentasi, deploy Vercel
B, Front-End Developer 1	Salma	Setup Vite + Tailwind + React Router, layout, NotFound, Navbar, Hero, Footer
C, Front-End Developer 2	Tama	File data, AboutUs, VisiMisi, Struktur, ProgramKerja, ContactCTA, Modal, Home

Rincian pengerjaan ada di PengerjaanKelompok.md.

Deployment

Website di-deploy ke Vercel dengan menghubungkan repository GitHub ini lewat dashboard Vercel. File vercel.json memastikan seluruh alamat halaman diarahkan ke aplikasi React sehingga routing berjalan dengan benar.

Lisensi

Proyek ini dibuat untuk keperluan tugas dan pembelajaran.
