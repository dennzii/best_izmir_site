import React, { useState } from 'react';
import { themes, lightThemes } from '../data/TeamMembers';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

/*
 * FLIP ÖZELLİĞİ — şu an devre dışı.
 * Yeniden etkinleştirmek için:
 *   1. motion importunu geri ekle
 *   2. cardVariants objesini geri ekle (rotateY 0 ↔ 180, duration 0.6)
 *   3. Wrapper div'e  style={{ perspective: '1200px' }}  ekle
 *   4. İç div'i <motion.div variants={cardVariants} animate={isFlipped ? 'flipped' : 'unflipped'} style={{ transformStyle: 'preserve-3d' }}> yap
 *   5. Ön yüze  onClick={() => setIsFlipped(true)}  ve  backfaceVisibility: 'hidden'  ekle
 *   6. Aşağıdaki arka yüz JSX'ini tekrar render'a ekle:
 *
 *   <div
 *     onClick={() => setIsFlipped(false)}
 *     className={`absolute inset-0 rounded-xl cursor-pointer overflow-hidden flex flex-col border ${theme.border} ${theme.backBg}`}
 *     style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', boxShadow: theme.shadow }}
 *   >
 *     <div className={`w-full h-0.5 flex-shrink-0 ${theme.accentBar}`} />
 *     <div className={`w-full px-5 pt-4 pb-2 flex-shrink-0 border-b ${theme.border}`}>
 *       <p className={`text-[9px] font-bold uppercase tracking-widest ${theme.roleColor}`}>{t(gorevKey)}</p>
 *       <p className={`text-sm font-semibold mt-0.5 ${theme.nameColor}`}>{isim}</p>
 *     </div>
 *     <div className={`text-3xl leading-none ${theme.quoteColor} flex-shrink-0 mt-3 px-5 self-start`}>❝</div>
 *     <div className="flex-1 flex items-center justify-center w-full px-5 overflow-hidden">
 *       <p className={`text-xs leading-relaxed text-center italic ${theme.backTextColor} max-h-full overflow-y-auto scrollbar-hide`}>
 *         {t(yaziKey)}
 *       </p>
 *     </div>
 *     <div className={`text-3xl leading-none ${theme.quoteColor} px-5 pb-5 self-end flex-shrink-0`}>❞</div>
 *   </div>
 */

export const FlipCard = ({
  foto,
  isim,
  gorevKey,
  yaziKey,
  variant = 'gold',
}) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const themeSet = isDark ? themes : lightThemes;
  const theme = themeSet[variant] || themeSet.gold;

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="relative w-full h-full">
        <div
          className={`absolute inset-0 rounded-xl overflow-hidden flex flex-col items-center border ${theme.border} ${theme.frontBg}`}
          style={{
            boxShadow: isHovered ? theme.hoverShadow : theme.shadow,
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <div className={`w-full h-0.5 flex-shrink-0 ${theme.accentBar}`} />

          <div className="flex-1 flex items-center justify-center w-full px-6 pt-5 pb-3">
            <img
              src={foto}
              alt={isim}
              className={`w-36 h-40 object-cover rounded-lg border ${theme.photoBorder}`}
              style={{ boxShadow: theme.photoShadow }}
            />
          </div>

          <div className="w-full text-center px-5 pb-5 flex-shrink-0">
            <h2 className={`text-base font-semibold tracking-wide ${theme.nameColor}`}>{isim}</h2>
            <div className={`my-2 mx-auto w-10 h-px ${theme.dividerLine}`} />
            <p className={`text-[10px] font-medium uppercase tracking-widest ${theme.roleColor}`}>
              {t(gorevKey)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
