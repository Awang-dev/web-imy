import aboutHighlights from "../data/aboutHighlights";

function AboutUs() {
  return (
    <section
      id="tentang-kami"
      className="w-full scroll-mt-20 border-b border-[#E8E4DC] bg-cream px-6 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Tentang Kami</span>
          </div>
          <h2 className="font-serif text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            <span className="block">Rumah Perantau di Tanah Sekaran,</span>
            <span className="block font-normal italic text-gold-deep">Tumbuh Bersama Sedulur.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between space-y-8 rounded-3xl border border-[#E8E4DC] bg-white p-8 shadow-sm lg:col-span-7 lg:p-10">
            <div className="space-y-6">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-deep">
                  <span className="material-symbols-outlined text-base">roofing</span>
                  <span>Tentang IMY UNNES</span>
                </div>
                <p className="text-base font-medium leading-relaxed text-ink sm:text-lg">
                  Ikatan Mahasiswa Yogyakarta Universitas Negeri Semarang (
                  <span className="font-bold text-gold-deep">IMY UNNES</span>) merupakan organisasi daerah yang
                  menjadi ruang berkumpul, berproses, dan saling menguatkan bagi mahasiswa asal Daerah Istimewa
                  Yogyakarta yang melanjutkan pendidikan di UNNES.
                </p>
              </div>
              <div className="space-y-3 border-t border-[#F0ECE4] pt-5">
                <h3 className="font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  Wadah Bertumbuh &amp; Menguatkan
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  IMY UNNES hadir untuk membangun hubungan yang erat, menciptakan rasa nyaman dan kekeluargaan,
                  serta menjadi tempat bagi mahasiswa Yogyakarta untuk saling mendukung selama berada di
                  perantauan. Tidak hanya berfokus pada silaturahmi, IMY UNNES juga menjadi wadah untuk
                  mengembangkan potensi, memperluas relasi, bertukar informasi, dan meningkatkan pengalaman
                  berorganisasi.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F0ECE4] pt-6">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/logo-imy.png"
                  alt="Logo IMY UNNES"
                  className="h-10 w-10 rounded-full bg-gold/10 object-contain p-1"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink">Keluarga Mahasiswa Jogja</p>
                  <p className="text-xs text-muted">Sekaran, Gunungpati, Semarang</p>
                </div>
              </div>
              <span className="rounded-full border border-[#E8E4DC] bg-cream-alt px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-deep">
                Sedulur Saklawase
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {aboutHighlights.map((item) => (
              <div
                key={item.id}
                className="flex flex-1 flex-col justify-between rounded-3xl border border-[#E8E4DC] bg-white p-7 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-ink">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-muted">{item.description}</p>
                </div>
                <div className="flex items-center border-t border-[#F5F2EB] pt-4 text-xs font-semibold tracking-wide text-gold-deep">
                  <span>{item.footer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
