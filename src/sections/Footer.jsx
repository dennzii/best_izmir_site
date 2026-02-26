import React from 'react';
import DisplayIcons from "../Components/DisplayIcons"
import BestBird from "../assets/best_bird.png";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    // DEĞİŞİKLİK BURADA: 
    // 'bg-gradient-to-t from-black via-black/80 to-transparent' ekledik.
    // Bu, aşağıdan yukarıya doğru siyahtan şeffafa giden bir geçiş sağlar.
    <footer className="w-full px-6 py-8 text-white relative z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4 md:gap-6">

        {/* 1. LOGO ALANI (SOL) */}
        <div className="flex-shrink-0">
          <img
            src={BestBird}
            alt="Best Bird Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* 2. İKONLAR (SAĞ) */}
        <div className="flex items-center">
          <div className="scale-110">
            <DisplayIcons />
          </div>
        </div>

      </div>

      {/* 3. TELİF HAKKI YAZISI (EN ALT) */}
      <div className="w-full text-center mt-8 border-t border-white/10 pt-4">
        <p className="font-montserrat text-sm text-gray-400">
          {t('footer.rights')} © {new Date().getFullYear()} BEST İzmir.
        </p>
      </div>

    </footer>
  )
}