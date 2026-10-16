import { bph, divisi } from "../data/struktur";

function Struktur() {
  return (
    <section
      id="struktur-pengurus"
      className="w-full scroll-mt-20 border-b border-[#E8E4DC] bg-cream-alt px-6 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Struktur Kepengurusan</span>
          <h2 className="font-serif text-4xl font-normal text-ink sm:text-5xl">
            Nahkoda &amp; Penggerak <span className="italic text-gold-deep">IMY UNNES 2026</span>
          </h2>
          <p className="text-sm text-muted sm:text-base">
            Pilar kepengurusan yang mengabdi untuk menjaga keharmonisan, memperkokoh persaudaraan, dan
            menggerakkan wadah mahasiswa Yogyakarta di Semarang.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold-deep" />
            <span className="text-xs font-bold uppercase tracking-wider text-ink">Badan Pengurus Harian (BPH)</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bph.map((person) => (
              <div
                key={person.id}
                className="flex flex-col justify-between rounded-2xl border border-[#E8E4DC] bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <span
                    className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      person.highlight ? "bg-gold text-espresso" : "bg-cream-alt text-ink"
                    }`}
                  >
                    {person.role}
                  </span>
                  <h4 className="font-serif text-xl font-semibold leading-snug text-ink">{person.name}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{person.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#F2EEE6] pt-5 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  <span>IMY UNNES</span>
                  <span className="material-symbols-outlined text-base">{person.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold-deep" />
            <span className="text-xs font-bold uppercase tracking-wider text-ink">Divisi Fungsional</span>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            {divisi.map((d) => (
              <div
                key={d.id}
                className="flex flex-col space-y-6 rounded-2xl border border-[#EBE7DF] bg-white p-7 shadow-sm transition-all hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                      <span className="material-symbols-outlined text-xl">{d.icon}</span>
                    </div>
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-deep">
                      {d.members.length} Pengurus
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-semibold text-ink">{d.name}</h4>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-gold-deep">{d.subtitle}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-muted">{d.desc}</p>
                </div>
                <div className="space-y-2.5 border-t border-[#F5F2EB] pt-4">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">Anggota Divisi</span>
                  <div className="grid grid-cols-1 gap-2">
                    {d.members.map((name) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-xl bg-cream-alt/70 px-3 py-2 text-xs"
                      >
                        <span className="font-semibold text-ink">{name}</span>
                        <span className="rounded border border-[#E8E4DC] bg-white px-1.5 py-0.5 text-[10px] font-medium text-gold-deep">
                          Pengurus
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Struktur;
