import logo_normal from "../assets/logo_normal.png";
import {navLinks} from "../constants"
import React, { useState, useEffect } from 'react';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = ()=> {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header className={`fixed w-full padding-x py-5 px-5 z-30 transition-all duration-800 ease-in-out ${
   scrolled ? `bg-blue-200 shadow-lg py-0` : `bg-transparent`
   }`}
   >
    <nav className="flex justify-between items-center">
      <a href="/">
      <img className={`${scrolled ? 'w-20 h-20' : 'w-32 h-32'}`}
      src={logo_normal}
      alt="Logo"
      width={130}
      height={130}>
      </img>
      </a>
      
      <ul className="flex space-x-6 justify-center px-5 gap-16 max-lg:hidden mr-20">
        {navLinks.map(item => (
          <li key={item.label} className="border-b-2 border-transparent hover:border-purple-400">
            <a href={item.href} className="font-semibold  leading-normal text-lg text-slate-black">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
   </header>
  )
}
