import program from "../data/programKerja";

function ProgramKerja() {
  return (
    <section
      id="program-kerja"
      className="w-full scroll-mt-20 border-b border-[#E8E4DC] bg-cream px-6 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-2">
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Rekam Jejak &amp; Program</span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-ink sm:text-5xl">
              Program Kerja &amp;
              <br className="hidden sm:inline" /> <span className="italic text-gold-deep">Rekam Jejak Kegiatan</span>
            </h2>
            <p className="text-sm text-muted sm:text-base">
              Momen kebersamaan, dinamika forum, dan agenda rutin IMY UNNES dalam merajut simpul kekeluargaan di
              tanah perantauan.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-deep">
            <span className="material-symbols-outlined text-lg">collections</span>
            <span>Dokumentasi 2024–2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {program.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8E4DC] bg-white shadow-sm transition-all hover:shadow-md"
            >
              {item.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-espresso/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
              ) : (
                <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-espresso-card to-espresso p-6 text-center">
                  <div className="space-y-2">
                    <span className="material-symbols-outlined text-4xl text-gold">{item.icon}</span>
                    <p className="font-serif text-lg text-white">{item.imageLabel}</p>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-espresso">
                    {item.badge}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gold-deep">{item.category}</span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                </div>
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-deep transition-colors group-hover:text-ink"
                >
                  <span>Hubungi Sedulur</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramKerja;
