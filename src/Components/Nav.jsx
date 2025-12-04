import logo_beyaz from "../assets/logo_beyaz.png";
import { navLinks } from "../constants";
import React from 'react';

// Sadece isScrolled prop'una bakıyor. Hesap kitap yok.
export const Nav = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
      ${isScrolled 
        ? "bg-black/90 backdrop-blur-xl py-3 shadow-lg border-b border-white/10" 
        : "bg-transparent py-6"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
        <a href="/" className="z-50">
          <img 
            className={`transition-all duration-300 drop-shadow-lg ${isScrolled ? 'w-24' : 'w-32'}`}
            src={logo_beyaz}
            alt="Logo"
          />
        </a>
        
        <ul className="flex space-x-8 max-lg:hidden items-center">
          {navLinks.map(item => (
            <li key={item.label} className="group relative">
              <a 
                href={item.href} 
                className={`font-bold text-sm tracking-wide transition-colors duration-300 drop-shadow-md
                ${isScrolled ? "text-slate-200 hover:text-white" : "text-white hover:text-purple-300"}`}
              >
                {item.label}
              </a>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(168,85,247,0.7)]"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}