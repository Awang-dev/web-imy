
function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#181514] px-6 pb-20 pt-16 text-[#FBF9F6] sm:px-8 lg:pb-28 lg:pt-24">
            {/* Dekorasi cahaya emas */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[550px] w-[550px] rounded-full bg-[#DEA810]/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#B98311]/10 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Kolom kiri: teks */}
                <div className="flex flex-col items-start space-y-7 lg:col-span-7">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-[#DEA810]" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DEA810]">
                            EST. 2018 · SEKARAN, UNNES
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl font-medium leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[70px]">
                        Ikatan Mahasiswa
                        <br />
                        <span className="font-normal italic text-[#DEA810]">
                            Yogyakarta UNNES.
                        </span>
                    </h1>

                    <p className="max-w-xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
                        Saatnya bersatu, berproses, dan tumbuh bersama.
                        Ruang persaudaraan dan silaturahmi bagi mahasiswa
                        asal Daerah Istimewa Yogyakarta yang menempuh
                        pendidikan di Universitas Negeri Semarang.
                        Menjaga nilai luhur budaya, saling menguatkan
                        di tanah perantauan.
                    </p>

                    {/* Informasi agenda dan sekretariat */}
                    <div className="grid w-full max-w-xl grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-2">
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DEA810]">
                                Agenda Terdekat
                            </span>
                            <p className="font-serif text-lg font-medium text-white">
                                Srawung Perdana &amp; Makrab
                            </p>
                            <p className="text-xs text-white/60">
                                Terbuka untuk sedulur anyar
                            </p>
                        </div>

                        <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DEA810]">
                                Sekretariat &amp; Status
                            </span>
                            <p className="font-serif text-lg font-medium text-white">
                                Sekaran, Gunungpati
                            </p>
                            <p className="text-xs text-white/60">
                                Terbuka &amp; Bebas Biaya
                            </p>
                        </div>
                    </div>

                    {/* Tombol */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                            href="#program-kerja"
                            className="inline-flex items-center gap-2 rounded-full bg-[#DEA810] px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-[#181514] shadow-md transition-all duration-200 hover:bg-[#B98311] hover:text-white"
                        >
                            Jelajahi Program Kami
                            <span>→</span>
                        </a>

                        <a
                            href="#kontak"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 hover:bg-white/10"
                        >
                            Hubungi Pengurus
                        </a>
                    </div>
                </div>

                {/* Kolom kanan: foto */}
                <div className="relative flex justify-center lg:col-span-5">
                    <div className="group relative h-[450px] w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-[#211D1B] shadow-2xl sm:h-[550px] lg:h-[600px]">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmdtqG9tq_NBqFkX_h5g0rG6nT_tTLvsWhhHtc7g54RVVbICKlY3JwiXSfY5ZdEL__2vWfGlk9jnhhmeSK3kqI73bDoXec59Jvkw2E-VBkBGi9PcqSiLvWX0j0UqHertn-PHCIQpE-n0XAuT_IXNSrjPZYACI3ft36aWI3bVUJSNuOkSgo3UOlfUEiuR2KAB8zLsJwjWBzSWR_5rCCIFFZ8fWHdBbrEVnMqAqtLWiYCdpZImIvxabFYq7pe7G3klni4Q"
                            alt="Momen hangat perkumpulan mahasiswa IMY UNNES"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#181514] via-black/20 to-black/30" />

                        {/* Badge kanan atas */}
                        <div className="absolute right-4 top-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#181514]/85 px-3.5 py-2 shadow-lg backdrop-blur-md">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DEA810]/20 text-[#DEA810]">
                                ♥
                            </span>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-[#DEA810]">
                                    Wadah Sedulur
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    100% Guyub &amp; Hangat
                                </p>
                            </div>
                        </div>

                        {/* Informasi bagian bawah foto */}
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#181514]/90 p-4 shadow-xl backdrop-blur-md">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#DEA810]" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#DEA810]">
                                        Srawung Rutin Sedulur
                                    </span>
                                </div>
                                <p className="font-serif text-base font-medium text-white">
                                    500+ Mahasiswa Asal Jogja di UNNES
                                </p>
                                <p className="text-xs text-white/70">
                                    Guyub rukun, saling asah asih asuh di rantau
                                </p>
                            </div>

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DEA810] font-serif text-lg font-bold text-[#181514] shadow-md">
                                ✦
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
