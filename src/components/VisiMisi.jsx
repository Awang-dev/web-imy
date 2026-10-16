import misi, { visi } from "../data/misi";

// Lebar kartu misi di layar md dan lg (grid 6 kolom di lg), mengikuti mockup.
// Ditulis utuh supaya Tailwind bisa mendeteksi class-nya.
const spans = [
  "md:col-span-1 lg:col-span-2",
  "md:col-span-1 lg:col-span-2",
  "md:col-span-2 lg:col-span-2",
  "md:col-span-1 lg:col-span-3",
  "md:col-span-1 lg:col-span-3",
];

function VisiMisi() {
  return (
    <section
      id="visi-misi"
      className="relative w-full scroll-mt-20 overflow-hidden border-b border-[#E8E4DC] bg-cream px-6 py-24 sm:px-8 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        <div className="max-w-5xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Visi &amp; Misi Organisasi</span>
          </div>
          <h2 className="font-serif text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-5xl">
            Visi Luhur &amp; <span className="italic text-gold-deep">Misi Gerak Paguyuban.</span>
          </h2>
          <p className="max-w-2xl text-sm font-light leading-relaxed text-muted sm:text-base">
            Prinsip kebersamaan yang menjadi pedoman luhur seluruh gerak langkah kepengurusan dan dedikasi IMY
            UNNES di tanah rantau.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[#E8E4DC] bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Visi Organisasi</span>
              <span className="material-symbols-outlined text-gold-deep">auto_awesome</span>
            </div>
            <blockquote className="pt-1 font-serif text-2xl font-normal italic leading-snug text-ink sm:text-3xl lg:text-4xl">
              “{visi.text}”
            </blockquote>
            <p className="text-xs font-light leading-relaxed text-muted sm:text-sm">{visi.note}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8E4DC] pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold-deep" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink">Lima Misi Utama</span>
            </div>
            <span className="font-serif text-xs font-medium uppercase italic tracking-wider text-gold-deep">
              Lima Langkah Bakti IMY UNNES
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
            {misi.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col justify-between space-y-5 rounded-2xl border border-[#E8E4DC] bg-white p-7 shadow-sm transition-all hover:border-gold/40 ${spans[index]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-espresso shadow-sm">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-deep">{item.tag}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-ink">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisiMisi;
