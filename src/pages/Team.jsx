
// Team.js
import React, { useState, useEffect } from 'react';
import { Nav } from "../Components/Nav";
import { Footer } from "../sections/Footer";
import { FlipCard } from '../Components/FlipCard';
import Stars from '../Components/Stars';
import { boardMembersData, coordinatorsData } from '../data/TeamMembers';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Team() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className='relative min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white' style={{
      background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <Stars />

      {/* Scrollbar gizleme stilleri (Sadece mobil görünümde estetik için) */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .team-card img {
          animation: none !important;
          transition: none !important;
          will-change: auto;
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
          padding: 0 !important;
        }
        .team-card:hover img {
            animation: none !important;
            transform: none !important;
            filter: none !important;
        }
      `}</style>

      <section className="fixed top-0 left-0 w-full z-50">
        <Nav isScrolled={isScrolled} />
      </section>


      <div className="relative z-10 w-full flex-grow pt-32 md:pt-40 pb-0 flex flex-col items-center">

        {/* --- PAGE HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {t('teamPage.title')}
          </h1>
          <p className="text-indigo-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
            {t('teamPage.subtitle')}
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>


        {/* --- BOARD SECTION --- */}
        <div className="w-full max-w-[1536px] px-4 mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-bold text-white tracking-wide">{t('teamPage.board')}</h2>
            <div className="h-px bg-white/20 flex-grow"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`
                    flex gap-6 w-full
                    /* --- MOBİL ÖZELLİKLERİ --- */
                    flex-nowrap overflow-x-auto snap-x snap-mandatory justify-start px-2 pb-8
                    /* --- MASAÜSTÜ ÖZELLİKLERİ --- */
                    md:flex-wrap md:overflow-visible md:justify-center
                `}
          >
            {boardMembersData.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className={`
                        relative h-[300px] md:h-[300px] team-card
                        /* --- MOBİL --- */
                        flex-shrink-0 snap-center w-[85vw] max-w-[280px]
                        /* --- MASAÜSTÜ --- */
                        md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.25rem)] md:max-w-[280px] md:flex-shrink-0
                    `}
              >
                <FlipCard
                  foto={member.foto}
                  isim={member.isim}
                  gorevKey={member.gorevKey}
                  reyting={member.reyting}
                  yaziKey={member.yaziKey}
                  stats={member.stats}
                  variant={member.variant}
                  ikon={member.ikon}
                />
              </motion.div>
            ))}
            {/* Mobil sağ boşluk */}
            <div className="w-2 flex-shrink-0 md:hidden"></div>
          </motion.div>
        </div>


        {/* --- NON-BOARD SECTION --- */}
        <div className="w-full max-w-[1536px] px-4">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-bold text-white tracking-wide">{t('teamPage.members')}</h2>
            <div className="h-px bg-white/20 flex-grow"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`
                    flex gap-6 w-full
                    flex-nowrap overflow-x-auto snap-x snap-mandatory justify-start px-2 pb-8
                    md:flex-wrap md:overflow-visible md:justify-center
                `}
          >
            {coordinatorsData.map((member) => (
              <motion.div
                key={member.id + "_nb"} // Unique key fix for demo
                variants={itemVariants}
                className={`
                        relative h-[300px] md:h-[300px] team-card
                        flex-shrink-0 snap-center w-[85vw] max-w-[280px]
                        md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.25rem)] md:max-w-[280px] md:flex-shrink-0
                    `}
              >
                <FlipCard
                  foto={member.foto}
                  isim={member.isim}
                  gorevKey={member.gorevKey}
                  reyting={member.reyting}
                  yaziKey={member.yaziKey}
                  stats={member.stats}
                  variant={member.variant}
                  ikon={member.ikon}
                />
              </motion.div>
            ))}
            <div className="w-2 flex-shrink-0 md:hidden"></div>
          </motion.div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="w-full mt-auto pt-24 z-10">
        <Footer />
      </div>
    </main>
  );
}

export default Team;