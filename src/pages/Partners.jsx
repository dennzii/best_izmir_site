import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Nav } from '../Components/Nav';
import { Footer } from '../sections/Footer';
import Stars from '../Components/Stars';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import microsoftLogo from '../assets/Partnerler Logo/Microsoft.webp';
import boschLogo from '../assets/Partnerler Logo/Bosch.webp';
import vestelLogo from '../assets/Partnerler Logo/Vestel.webp';
import erasmusLogo from '../assets/Partnerler Logo/Erasmus+.webp';
import renklerLogo from '../assets/Partnerler Logo/Renkler.webp';
import upegemLogo from '../assets/Partnerler Logo/UPEGEM.webp';
import teolLogo from '../assets/Partnerler Logo/Teol.webp';
import dilekLogo from '../assets/Partnerler Logo/Dilek.webp';
import englishTimeLogo from '../assets/Partnerler Logo/EnglishTıme.svg';
import kesiadLogo from '../assets/Partnerler Logo/KESIAD.webp';
import ikdLogo from '../assets/Partnerler Logo/IKD.webp';
import kusadasiBelLogo from '../assets/Partnerler Logo/KusadasiBel.webp';
import casaItaliaLogo from '../assets/Partnerler Logo/CasaItalia.webp';
import americanLifeLogo from '../assets/Partnerler Logo/AmericanLife.webp';
import bornovaBelLogo from '../assets/Partnerler Logo/BornovaBel.webp';

const DARK_BG = 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)';
const LIGHT_BG = 'linear-gradient(135deg, #e0f2fe 0%, #dcfce7 50%, #fffbeb 100%)';

const partnerLogos = [
  { src: microsoftLogo,   alt: 'Microsoft' },
  { src: boschLogo,       alt: 'Bosch' },
  { src: vestelLogo,      alt: 'Vestel' },
  { src: erasmusLogo,     alt: 'Erasmus+' },
  { src: renklerLogo,     alt: 'Renkler' },
  { src: upegemLogo,      alt: 'UPEGEM' },
  { src: teolLogo,        alt: 'Teol' },
  { src: dilekLogo,       alt: 'Dilek' },
  { src: englishTimeLogo, alt: 'English Time' },
  { src: kesiadLogo,      alt: 'KESIAD' },
  { src: ikdLogo,         alt: 'IKD' },
  { src: kusadasiBelLogo, alt: 'Kuşadası Belediyesi' },
  { src: casaItaliaLogo,  alt: 'Casa Italia' },
  { src: americanLifeLogo,alt: 'American Life' },
  { src: bornovaBelLogo,  alt: 'Bornova Belediyesi' },
];

function Partners() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main
      className="relative min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white"
      style={{ background: isDark ? DARK_BG : LIGHT_BG, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <Stars />

      <div className="fixed top-0 left-0 w-full z-50">
        <Nav isScrolled={isScrolled} />
      </div>

      <div className="relative z-10 container mx-auto flex-grow px-4 pt-32 md:pt-40 pb-0 flex flex-col items-center">

        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t('partners.title')}
          </h1>
          <p className="text-indigo-600 dark:text-indigo-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* --- SPONSOR SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mb-16 md:mb-20"
        >
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-8 md:p-12 shadow-md dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-center">
            <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 mb-2">
              {t('partners.sponsorTitle')}
            </h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-200 leading-relaxed text-base md:text-lg font-light mb-8">
              {t('partners.sponsorText')}
            </p>
            <Link to="/contact">
              <button className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-4 focus:ring-indigo-500/50 group">
                {t('partners.contactButton')}
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* --- LOGO GRID --- */}
        <div className="w-full max-w-5xl mb-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white border border-slate-200 dark:border-slate-600/40 rounded-2xl p-4 flex items-center justify-center aspect-square hover:border-indigo-400/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(99,102,241,0.15)]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-[85%] h-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <div className="w-full mt-auto z-10">
        <Footer />
      </div>
    </main>
  );
}

export default Partners;
