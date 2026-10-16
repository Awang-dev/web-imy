const words = [
  "SILATURAHMI",
  "KEKELUARGAAN",
  "BUDAYA YOGYAKARTA",
  "PENGEMBANGAN DIRI",
  "PRESTASI MAHASISWA",
  "GUYUB RUKUN",
  "SEDULUR SAKLAWASE",
];

// Daftar kata digandakan agar animasi translateX(-50%) di index.css berputar mulus.
function Marquee() {
  const loop = [...words, ...words];

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-[#141110] py-3.5" aria-hidden="true">
      <div className="animate-marquee whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-gold/90">
        {loop.map((word, index) => (
          <span key={index}>
            <span className="mx-6">{word}</span>
            <span className="text-white/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
