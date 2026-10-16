function Footer() {
  return (
    <footer className="w-full bg-[#120F0E] text-white/70 border-t border-white/10 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Logo & Story (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Logo IMY UNNES"
                className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoN2hxvBD2fF-5mRiSdxno6infD9LyCIQhKQx5d-7oA7D3BpXcgs1TWfJLmfqTqvpe_PaXEeDxDhrLYwujZq2gWE6l4KcnBosj4vTR4ZhWzhnIo5vkAkmd93stEWVDBoD1DTNnprP0eWJQYs0EBUxy1yRlYQqZKDHnnEAyc6T5xImoF-v-X8rOJ087DxXNkc39HL8Oz9zAR8Cqd2eW78tUMqOlUEir0JK8imkNMNdCekRIwGW-a7SPzCviclxsxCIrOg"
              />
              <span className="font-serif text-xl font-semibold text-white">
                IMY UNNES
              </span>
            </div>

            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Wadah guyub rukun, kreasi intelektual, dan pengabdian mahasiswa
              asal Daerah Istimewa Yogyakarta di Universitas Negeri Semarang.
              Menjaga luhurnya paugeran budaya seraya menyongsong masa depan.
            </p>

            <div className="text-xs text-gold font-medium">
              Instagram: <span className="text-white">@imy_unnes</span>
            </div>
          </div>

          {/* Col 2: Sekretariat (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-serif text-base text-white font-medium">
              Sekretariat &amp; Domisili
            </h5>

            <p className="text-xs text-white/60 leading-relaxed">
              Gedung PKM Universitas Negeri Semarang
              <br />
              Sekaran, Kec. Gunungpati, Kota Semarang
              <br />
              Jawa Tengah 50229
            </p>
          </div>

          {/* Col 3: Narahubung (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="font-serif text-base text-white font-medium">
              Narahubung Paguyuban
            </h5>

            <div className="space-y-1.5 text-xs text-white/60">
              <p>
                <span className="text-gold">WhatsApp:</span> +62 895-3792-22419
              </p>
              <p>
                <span className="text-gold">Surel:</span> kontak@imyunnes.or.id
              </p>
              <p>
                <span className="text-gold">Instagram:</span> @imy_unnes
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © 2026 Ikatan Mahasiswa Yogyakarta UNNES. Sedulur Saklawase,
            Berkarakter &amp; Bermartabat.
          </p>

          <div className="flex items-center gap-6">
            <a
              className="hover:text-gold transition-colors"
              href="#tentang-kami"
            >
              Tentang Kami
            </a>

            <a
              className="hover:text-gold transition-colors"
              href="#visi-misi"
            >
              Visi &amp; Misi
            </a>

            <a
              className="hover:text-gold transition-colors"
              href="#struktur-pengurus"
            >
              Struktur
            </a>

            <a
              className="hover:text-gold transition-colors"
              href="#program-kerja"
            >
              Program Kerja
            </a>

            <a
              className="hover:text-gold transition-colors"
              href="#kontak"
            >
              Kontak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;