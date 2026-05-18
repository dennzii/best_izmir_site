import React from 'react';
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

const logos = [
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

// Seamless loop için logoları 3x çoğalt
const tripled = [...logos, ...logos, ...logos];

export const HomeSponsors = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-8 relative z-10">
      <style>{`
        @keyframes sponsorScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .sponsor-track {
          animation: sponsorScroll 30s linear infinite;
          will-change: transform;
        }
        .sponsor-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-2">
          {t('partners.sectionTitle')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          {t('partners.sectionSubtitle')}
        </p>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Carousel */}
      <div className="w-full overflow-hidden relative">
        {/* Sol fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#f8faff] dark:from-[#090A0F] to-transparent" />
        {/* Sağ fade */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-[#f8faff] dark:from-[#090A0F] to-transparent" />

        <div className="sponsor-track flex gap-5 w-max py-2">
          {tripled.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-slate-200 dark:border-slate-600/30 rounded-2xl px-6 py-4 w-44 h-28 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buton */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-6 px-6"
      >
        <Link to="/partners">
          <button className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/40">
            {t('partners.viewAll')}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </Link>
      </motion.div>
    </section>
  );
};
