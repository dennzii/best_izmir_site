// FlipCardFramer.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { themes } from '../data/TeamMembers';

export const FlipCard = ({
  foto,
  isim,
  gorev,
  yazi,
  reyting = 85,
  stats,
  variant = 'gold',
  ikon
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = themes[variant] || themes.gold;

  const flipCard = () => {
    setIsFlipped(prev => !prev);
  };

  const cardVariants = {
    flipped: { rotateY: 180, transition: { duration: 0.7 } },
    unflipped: { rotateY: 0, transition: { duration: 0.7 } }
  };

  return (
    <div
      className="w-full h-full group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        variants={cardVariants}
        animate={isFlipped ? "flipped" : "unflipped"}
        className="relative w-full h-full ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* --- ÖN YÜZ --- */}
        <motion.div
          onClick={flipCard}
          // overflow-hidden: İçeriğin dışarı taşmasını engeller
          className={`absolute inset-0 rounded-2xl shadow-xl cursor-pointer border overflow-hidden ${theme.frontGradient} ${theme.textColor} ${theme.wrapperBorder} flex flex-col items-center p-4 transition-shadow duration-300 hover:shadow-2xl`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        >
          {/* Header Bölümü (Görev ve Reyting) */}
          <div className="w-full flex justify-between items-start mb-2 flex-shrink-0">
            <div className="flex flex-col">
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${theme.accentColor} opacity-80`}>
                {gorev}
              </span>
              <span className={`text-2xl font-black ${theme.textColor} mt-0.5`}>
                {reyting}
              </span>
            </div>
          </div>

          {/* Fotoğraf Alanı (Esnek bırakıldı) */}
          <div className="w-full flex-1 flex justify-center items-center my-1">
            <div className="relative w-24 transition-transform duration-500 hover:scale-105" style={{ transform: 'translateZ(0)' }}>
              <div className={`absolute inset-0 rounded-full ${theme.backGradient} opacity-20 blur-2xl animate-pulse`}></div>
              <img
                src={foto}
                alt={isim}
                className="relative w-full h-auto object-contain rounded-2xl shadow-lg"
                style={{ transform: 'translateZ(0)' }}
              />
            </div>
          </div>

          {/* İsim Alanı */}
          <div className="w-full text-center mb-3 flex-shrink-0">
            <h2 className={`text-lg font-bold tracking-tight ${theme.textColor}`}>
              {isim}
            </h2>
          </div>

          {/* İstatistikler
          {stats && stats.length > 0 && (
            <div className="w-full flex items-center justify-around gap-2 pt-2 border-t border-white/30 flex-shrink-0">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className={`text-sm font-bold ${theme.textColor}`}>
                    {stat.value}
                  </span>
                  <span className="text-[9px] opacity-70 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )} */}
        </motion.div>

        {/* --- ARKA YÜZ (DÜZENLENDİ) --- */}
        <motion.div
          onClick={flipCard}
          // justify-between: İçeriği yukarı ve aşağı yayar.
          // p-4: Boşluğu azalttık ki içerik sığsın (önceden p-6 idi).
          // overflow-hidden: Kesinlikle dışarı taşma yapmaz.
          className={`absolute inset-0 rounded-2xl shadow-xl cursor-pointer border overflow-hidden ${theme.backGradient} ${theme.backTextColor} ${theme.wrapperBorder} flex flex-col justify-between items-center p-4 text-center transition-shadow duration-300 hover:shadow-2xl`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(0)',
          }}
        >
          {/* Üst Tırnak */}
          <div className={`text-4xl ${theme.accentColor} opacity-40 flex-shrink-0 mt-2`}>❝</div>

          {/* Yazı Alanı - Burası kritik */}
          {/* flex-1: Mevcut boşluğu doldurur.
              overflow-y-auto: Yazı çok uzunsa kartı bozmaz, kendi içinde kaydırılabilir olur.
              text-sm: Yazı fontunu biraz küçülttük. 
          */}
          <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
            <p className="text-sm md:text-base leading-relaxed font-light px-1 max-h-full overflow-y-auto scrollbar-hide">
              {yazi}
            </p>
          </div>

          {/* Alt Tırnak */}
          <div className={`text-4xl ${theme.accentColor} opacity-40 flex-shrink-0 mb-2`}>❞</div>

          {/* Footer (İsim ve İkon) */}
          <div className="flex flex-col items-center flex-shrink-0 mb-2">
            <div className="text-[10px] uppercase tracking-widest opacity-70 font-semibold">
              — {isim} —
            </div>
            {ikon && (
              <div className="mt-2">
                <img
                  src={ikon}
                  alt={`${isim} icon`}
                  className="w-12 h-12 object-contain" // İkon boyutu küçültüldü (w-16 idi)
                />
              </div>
            )}
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};