import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../constants';
import logoDark from '../assets/logo_beyaz.png';
import logoLight from '../assets/logo_normal.png';

export const Footer = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <footer className={`w-full relative z-10 border-t ${isDark ? 'border-white/10 bg-black/60 backdrop-blur-xl' : 'border-slate-200 bg-white/80 backdrop-blur-xl'}`}>

      {/* Ana İçerik */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* SÜTUN 1: Logo + Açıklama + Sosyal Medya */}
        <div className="flex flex-col gap-4">
          <a href="/">
            <img
              src={isDark ? logoDark : logoLight}
              alt="BEST İzmir"
              className="h-28 object-contain object-left"
            />
          </a>
        </div>

        {/* SÜTUN 2: Hızlı Bağlantılar */}
        <div className="flex flex-col gap-3">
          <h4 className={`text-sm font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {t('footer.quickLinks')}
          </h4>
          <div className={`w-8 h-0.5 mb-2 ${isDark ? 'bg-purple-500' : 'bg-indigo-500'}`} />
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {t(`navbar.${link.label.toLowerCase()}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SÜTUN 3: İletişim */}
        <div className="flex flex-col gap-3">
          <h4 className={`text-sm font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {t('footer.contactTitle')}
          </h4>
          <div className={`w-8 h-0.5 mb-2 ${isDark ? 'bg-purple-500' : 'bg-indigo-500'}`} />
          <div className="flex items-start gap-3">
            <FaEnvelope className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-purple-400' : 'text-indigo-500'}`} />
            <a
              href="mailto:izmir@best-eu.org"
              className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              izmir@best-eu.org
            </a>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-purple-400' : 'text-indigo-500'}`} />
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t('footer.address')}
            </p>
          </div>
                    <div className="flex items-center gap-3 mt-1">
            <a
              href="https://www.instagram.com/best.izmir/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-200 hover:scale-110 ${isDark ? 'border-white/20 text-slate-300 hover:border-pink-500/60 hover:text-pink-400' : 'border-slate-300 text-slate-600 hover:border-pink-400 hover:text-pink-500'}`}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/best-izmir/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-200 hover:scale-110 ${isDark ? 'border-white/20 text-slate-300 hover:border-blue-400/60 hover:text-blue-400' : 'border-slate-300 text-slate-600 hover:border-blue-500 hover:text-blue-600'}`}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Alt Telif Hakkı Çizgisi */}
      <div className={`border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            {t('footer.rights')} © {new Date().getFullYear()} BEST İzmir.
          </p>
          <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>
            Board of European Students of Technology
          </p>
        </div>
      </div>

    </footer>
  );
};
