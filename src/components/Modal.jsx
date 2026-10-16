import { useEffect } from "react";
import { kontak, IG_URL } from "../data/kontak";

// Props dari MainLayout: isOpen (boolean) dan onClose (function).
function Modal({ isOpen, onClose }) {
  // Tutup dengan tombol Esc dan kunci scroll halaman selama modal terbuka.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="w-full max-w-md rounded-3xl bg-cream p-7 text-ink shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Hubungi Sedulur</span>
            <h2 id="modal-title" className="mt-1 font-serif text-2xl font-semibold">
              Pilih kontak yang nyaman untukmu
            </h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Tutup" className="text-muted transition-colors hover:text-ink">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {kontak
            .filter((item) => item.wa)
            .map((item) => (
              <a
                key={item.id}
                href={`https://wa.me/${item.wa}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#E8E4DC] bg-white px-4 py-3 transition-all hover:border-gold/60 hover:shadow-sm"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gold-deep">{item.label}</p>
                  <p className="font-serif text-base font-semibold">{item.name}</p>
                  <p className="text-xs text-muted">{item.detail}</p>
                </div>
                <span className="material-symbols-outlined text-gold-deep">chat</span>
              </a>
            ))}
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl bg-espresso px-4 py-3 text-cream transition-colors hover:bg-espresso-light"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gold">Media Sosial</p>
              <p className="font-serif text-base font-semibold">Instagram @imy_unnes</p>
            </div>
            <span className="material-symbols-outlined text-gold">photo_camera</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
