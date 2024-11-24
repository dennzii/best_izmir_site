import logo_beyaz from "../assets/logo_beyaz.png";
import {navLinks} from "../constants"
import React, { useState, useEffect } from 'react';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const height = window.innerHeight;

  useEffect(() => {
    const handleScroll = ()=> {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
   <header className={`fixed w-full padding-x z-50 transition-transform duration-800 ease-in-out ${
   scrolled ? "bg-gradient-to-b from-black to-transparent" : `bg-transparent`
   }`}
   >
   
    <nav className="flex justify-between items-center">
      <a href="/">
      <img className={`mt-3 ml-5 mb-3 ${scrolled ? 'w-32 h-auto' : 'w-32 h-auto'}`}
      src={logo_beyaz}
      alt="Logo"
      >
      </img>
      </a>
      
      <ul className="flex space-x-6 justify-center px-5 gap-16 max-lg:hidden mr-20">
        {navLinks.map(item => (
          <li key={item.label} className="border-b-2 border-transparent  hover:border-purple-400">
            <a href={item.href} className="font-semibold  leading-normal text-sm text-slate-300">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
   </header>
  )
}
