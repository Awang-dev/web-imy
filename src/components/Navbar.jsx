import logoImy from "../assets/logo_imy.png";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "Tentang Kami", href: "#tentang-kami" },
        { label: "Visi & Misi", href: "#visi-misi" },
        { label: "Struktur", href: "#struktur-pengurus" },
        { label: "Program Kerja", href: "#program-kerja" },
        { label: "Kontak", href: "#kontak" },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#181514]/90 backdrop-blur-md">
            <nav
                className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-8"
                aria-label="Navigasi utama"
            >
                {/* Logo */}
                <a
                    href="/"
                    onClick={closeMenu}
                    className="group flex shrink-0 items-center gap-3.5"
                >
                    <img
                        src={logoImy}
                        alt="Logo IMY"
                        className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
                    />

                    <div className="flex flex-col">
                        <span className="font-serif text-lg font-semibold leading-tight tracking-wide text-white">
                            IMY UNNES
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#DEA810]/90">
                            Guyub Rukun Seduluran
                        </span>
                    </div>
                </a>

                {/* Menu desktop */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white/80 transition-colors hover:text-[#DEA810]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Tombol CTA dan hamburger */}
                <div className="flex shrink-0 items-center gap-3">
                    <a
                        href="https://wa.me/62895334571700"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden items-center gap-2 rounded-full bg-[#DEA810] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#181514] shadow-md transition-all duration-200 hover:bg-[#B98311] hover:text-white sm:inline-flex"
                    >
                        Gabung Sekarang
                        <span className="text-sm">→</span>
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
                    >
                        {isMenuOpen ? (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6l12 12M18 6L6 18"
                                />
                            </svg>
                        ) : (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-white/10 bg-[#181514] px-6 py-4 shadow-xl lg:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-[#DEA810]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="https://wa.me/62895379222419"
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeMenu}
                            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#DEA810] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#181514] transition-colors hover:bg-[#B98311] hover:text-white sm:hidden"
                        >
                            Gabung Sekarang →
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
