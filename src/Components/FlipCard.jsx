import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { themes } from '../data/TeamMembers';
import { useTranslation } from 'react-i18next';

export const FlipCard = ({
  foto,
  isim,
  gorevKey,
  yaziKey,
  variant = 'gold',
}) => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = themes[variant] || themes.gold;

  const cardVariants = {
    flipped:   { rotateY: 180, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
    unflipped: { rotateY: 0,   transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <div className="w-full h-full" style={{ perspective: '1200px' }}>
      <motion.div
        variants={cardVariants}
        animate={isFlipped ? 'flipped' : 'unflipped'}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ─── ÖN YÜZ ─── */}
        <div
          onClick={() => setIsFlipped(true)}
          className={`absolute inset-0 rounded-xl cursor-pointer overflow-hidden flex flex-col items-center border ${theme.border} ${theme.frontBg}`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', boxShadow: theme.shadow }}
        >
          {/* Üst aksan çizgisi */}
          <div className={`w-full h-0.5 flex-shrink-0 ${theme.accentBar}`} />

          {/* Fotoğraf */}
          <div className="flex-1 flex items-center justify-center w-full px-6 pt-5 pb-3">
            <img
              src={foto}
              alt={isim}
              className={`w-36 h-40 object-cover rounded-lg border ${theme.photoBorder}`}
              style={{ boxShadow: theme.photoShadow }}
            />
          </div>

          {/* İsim + çizgi + görev */}
          <div className="w-full text-center px-5 pb-5 flex-shrink-0">
            <h2 className={`text-base font-semibold tracking-wide ${theme.nameColor}`}>{isim}</h2>
            <div className={`my-2 mx-auto w-10 h-px ${theme.dividerLine}`} />
            <p className={`text-[10px] font-medium uppercase tracking-widest ${theme.roleColor}`}>
              {t(gorevKey)}
            </p>
          </div>
        </div>

        {/* ─── ARKA YÜZ ─── */}
        <div
          onClick={() => setIsFlipped(false)}
          className={`absolute inset-0 rounded-xl cursor-pointer overflow-hidden flex flex-col border ${theme.border} ${theme.backBg}`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: theme.shadow,
          }}
        >
          {/* Üst aksan çizgisi */}
          <div className={`w-full h-0.5 flex-shrink-0 ${theme.accentBar}`} />

          {/* Görev başlığı */}
          <div className={`w-full px-5 pt-4 pb-2 flex-shrink-0 border-b ${theme.border}`}>
            <p className={`text-[9px] font-bold uppercase tracking-widest ${theme.roleColor}`}>
              {t(gorevKey)}
            </p>
            <p className={`text-sm font-semibold mt-0.5 ${theme.nameColor}`}>{isim}</p>
          </div>

          {/* Açılış tırnağı */}
          <div className={`text-3xl leading-none ${theme.quoteColor} flex-shrink-0 mt-3 px-5 self-start`}>❝</div>

          {/* Alıntı */}
          <div className="flex-1 flex items-center justify-center w-full px-5 overflow-hidden">
            <p className={`text-xs leading-relaxed text-center italic ${theme.backTextColor} max-h-full overflow-y-auto scrollbar-hide`}>
              {t(yaziKey)}
            </p>
          </div>

          {/* Kapanış tırnağı */}
          <div className={`text-3xl leading-none ${theme.quoteColor} px-5 pb-5 self-end flex-shrink-0`}>❞</div>
        </div>
      </motion.div>
    </div>
  );
};
