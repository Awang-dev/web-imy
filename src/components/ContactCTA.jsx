import { kontak, WA_URL, IG_URL } from "../data/kontak";

const buttonWa =
  "inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-espresso shadow-lg transition-all duration-200 hover:bg-gold-deep hover:text-white";

// onOpenModal dikirim dari Home. Kalau belum tersedia, tombol WhatsApp jatuh ke tautan biasa.
function ContactCTA({ onOpenModal }) {
  return (
    <section
      id="kontak"
      className="relative w-full scroll-mt-20 overflow-hidden bg-espresso px-6 py-24 text-cream sm:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-96 w-96 rounded-full bg-gold-deep/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center space-y-10 text-center">
        <div className="flex items-center gap-3 text-gold" aria-hidden="true">
          <span className="text-xs opacity-60">•</span>
          <span className="text-base">◆</span>
          <span className="text-xs opacity-60">•</span>
        </div>
        <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Pintu Persaudaraan Terbuka Lebar
        </span>
        <h2 className="font-serif text-4xl font-normal leading-[1.12] text-white sm:text-5xl lg:text-6xl">
          <span className="block">
            Meja Telah Tertata, <span className="whitespace-nowrap">Pintu Selalu Terbuka.</span>
          </span>
          <span className="block italic text-gold">Mari Pulang ke Rumah Sedulur.</span>
        </h2>
        <p className="max-w-2xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
          Jadikan masa perkuliahanmu di Universitas Negeri Semarang lebih bermakna bersama saudara se-Yogyakarta.
          Hubungi narahubung kami, hadiri srawung terdekat, atau ikuti linimasa kegiatan terbaru.
        </p>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-5 pt-2 text-left sm:grid-cols-3">
          {kontak.map((item) => (
            <div key={item.id} className="space-y-1 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gold">{item.label}</span>
              <p className="font-serif text-base font-medium text-white">{item.name}</p>
              <p className="text-xs text-white/60">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {onOpenModal ? (
            <button type="button" onClick={onOpenModal} className={buttonWa}>
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Hubungi Kami via WhatsApp →</span>
            </button>
          ) : (
            <a href={WA_URL} target="_blank" rel="noreferrer" className={buttonWa}>
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Hubungi Kami via WhatsApp →</span>
            </a>
          )}
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-lg">photo_camera</span>
            <span>Kunjungi Instagram @imy_unnes</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-[11px] uppercase tracking-[0.2em] text-white/50">
          <span>Tanpa biaya masuk</span>
          <span className="text-white/20">•</span>
          <span>Konsultasi kos &amp; kampus</span>
          <span className="text-white/20">•</span>
          <span>Seluruh mahasiswa Jogja di UNNES</span>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
