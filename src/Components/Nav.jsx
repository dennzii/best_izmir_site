import logo_beyaz from "../assets/logo_beyaz.png";
import logo_siyah from "../assets/BEST Izmir Logo Siyah.png";
import logo from "../assets/logo_normal.png";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export const Nav = ({ isScrolled }) => {
    const { t } = useTranslation();
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

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

    const headerClass = isDark
        ? (isScrolled || isOpen
            ? "bg-black/90 backdrop-blur-xl py-3 shadow-lg border-b border-white/10"
            : "bg-transparent py-6")
        : (isScrolled || isOpen
            ? "bg-white/90 backdrop-blur-xl py-3 shadow-lg border-b border-slate-200"
            : "bg-transparent py-6");

    const linkClass = isDark
        ? (isScrolled ? "text-slate-200 hover:text-white" : "text-white hover:text-purple-300")
        : "text-slate-700 hover:text-slate-900";

    const toggleBtnClass = isDark
        ? (isScrolled || isOpen ? "text-white" : "text-white hover:text-purple-300")
        : "text-slate-700 hover:text-slate-900";

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerClass}`}>
                <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
                    <Link to="/" className="relative z-[60]">
                        <img
                            className={`transition-all duration-300 drop-shadow-lg ${isScrolled ? 'w-24' : 'w-32'}`}
                            src={isDark ? logo_beyaz : logo}
                            alt="Logo"
                        />
                    </Link>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className={`lg:hidden relative z-[60] text-3xl transition-colors duration-300 ${toggleBtnClass}`}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>

                    <ul className="flex space-x-8 max-lg:hidden items-center">
                        {navLinks.map(item => (
                            <li key={item.label} className="group relative">
                                <Link
                                    to={item.href}
                                    className={`font-bold text-sm tracking-wide transition-colors duration-300 drop-shadow-md ${linkClass}`}
                                >
                                    {t(`navbar.${item.label.toLowerCase()}`)}
                                </Link>
                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(168,85,247,0.7)]"></span>
                            </li>
                        ))}

                        {/* Dil + Tema — birbirine yakın, nav linklerinden ayrı */}
                        <li className={`flex items-center gap-2 ml-4 pl-6 border-l ${isDark ? 'border-white/20' : 'border-slate-300/50'}`}>
                            <LanguageSwitcher />
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className={`w-10 h-10 flex items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 shadow-md hover:scale-105
                                    ${isDark
                                        ? 'bg-black/40 hover:bg-black/60 border-white/30 text-yellow-300 hover:border-yellow-300/50'
                                        : 'bg-white/40 hover:bg-white/60 border-black/20 text-slate-700 hover:border-indigo-400/50'
                                    }`}
                            >
                                {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
                            </button>
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
                className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm backdrop-blur-2xl shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-32 px-8 border-l z-[45] ${
                    isDark
                        ? 'bg-black/95 border-white/10'
                        : 'bg-white/95 border-slate-200'
                } ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col space-y-8">
                    {navLinks.map(item => (
                        <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-xl font-bold tracking-wide transition-colors ${
                                isDark
                                    ? 'text-white hover:text-purple-400'
                                    : 'text-slate-800 hover:text-purple-600'
                            }`}
                        >
                            {t(`navbar.${item.label.toLowerCase()}`)}
                        </Link>
                    ))}

                    <div className={`pt-8 border-t flex items-center gap-4 ${isDark ? 'border-white/20' : 'border-slate-200'}`}>
                        <LanguageSwitcher />
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className={`w-10 h-10 flex items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 shadow-md
                                ${isDark
                                    ? 'bg-black/40 border-white/30 text-yellow-300'
                                    : 'bg-white/40 border-black/20 text-slate-700'
                                }`}
                        >
                            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
