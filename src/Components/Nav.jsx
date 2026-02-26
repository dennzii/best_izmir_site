import logo_beyaz from "../assets/logo_beyaz.png";
import { navLinks } from "../constants";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FiMenu, FiX } from 'react-icons/fi';

// Sadece isScrolled prop'una bakıyor. Hesap kitap yok.
export const Nav = ({ isScrolled }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Menü açıldığında body scroll'unu engelle
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
      ${isScrolled || isOpen
                        ? "bg-black/90 backdrop-blur-xl py-3 shadow-lg border-b border-white/10"
                        : "bg-transparent py-6"
                    }`}
            >
                <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
                    <a href="/" className="z-50 relative z-[60]">
                        <img
                            className={`transition-all duration-300 drop-shadow-lg ${isScrolled ? 'w-24' : 'w-32'}`}
                            src={logo_beyaz}
                            alt="Logo"
                        />
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className={`lg:hidden relative z-[60] text-3xl transition-colors duration-300 ${isScrolled || isOpen ? 'text-white' : 'text-white hover:text-purple-300'}`}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>

                    <ul className="flex space-x-8 max-lg:hidden items-center">
                        {navLinks.map(item => (
                            <li key={item.label} className="group relative">
                                <a
                                    href={item.href}
                                    className={`font-bold text-sm tracking-wide transition-colors duration-300 drop-shadow-md
                ${isScrolled ? "text-slate-200 hover:text-white" : "text-white hover:text-purple-300"}`}
                                >
                                    {/* item.key ile veya etiket ile çeviri anahtarından veriyi alıyoruz. Örneğin: 'navbar.home' */}
                                    {t(`navbar.${item.label.toLowerCase()}`)}
                                </a>
                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(168,85,247,0.7)]"></span>
                            </li>
                        ))}

                        {/* Dil Değiştirici Buton */}
                        <li className="ml-4">
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-black/95 backdrop-blur-2xl shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-32 px-8 border-l border-white/10 z-[45] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col space-y-8">
                    {navLinks.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-xl font-bold tracking-wide hover:text-purple-400 transition-colors"
                        >
                            {t(`navbar.${item.label.toLowerCase()}`)}
                        </a>
                    ))}

                    <div className="pt-8 border-t border-white/20">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </>
    )
}