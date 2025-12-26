// Team.js
import React, { useState, useEffect } from 'react';
import { Nav } from "../Components/Nav";
import { FlipCard } from '../Components/FlipCard';
import Stars from '../Components/Stars';
import { teamMembersData } from '../data/TeamMembers';

function Team() {
  const teamMembers = teamMembersData;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='relative min-h-screen' style={{
      background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed' // Sayfa kaydığında arka plan sabit kalsın
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

      <section className="relative z-50">
        <Nav isScrolled={isScrolled} />
      </section>


      <section className="relative z-10 w-full py-10">
        {/* --- YENİ EKLENEN BAŞLIK BÖLÜMÜ --- */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            Yönetim
          </h2>
          <p className="text-sm md:text-lg font-bold text-indigo-300 uppercase tracking-[0.2em]">
            Board
          </p>
          {/* Dekoratif çizgi (Opsiyonel) */}
          <div className="w-24 h-1 bg-indigo-400 mx-auto mt-4 rounded-full opacity-60"></div>
        </div>

        <div className={`
            flex gap-6 w-full
            
            /* --- MOBİL ÖZELLİKLERİ (Varsayılan) --- */
            flex-nowrap           /* Yan yana dizil, aşağı inme */
            overflow-x-auto       /* Yatay scroll aç */
            snap-x snap-mandatory /* Kaydırınca karta yapış */
            justify-start         /* Başlangıçtan sırala */
            px-6 pb-12            /* Kenarlardan boşluk bırak */

            /* --- MASAÜSTÜ ÖZELLİKLERİ (md: ve üzeri) --- */
            md:flex-wrap          /* Ekran genişse alt satıra geç (Scroll'u iptal eder) */
            md:overflow-visible   /* Scroll özelliğini kapat */
            md:justify-center     /* Ortala */
            md:px-4               /* Masaüstü kenar boşluğu */
        `}>

          {teamMembers.map((member) => (

            /* --- KART WRAPPER --- */
            <div
              key={member.id}
              className={`
                relative h-[300px] md:h-[300px] team-card

                /* --- MOBİL BOYUTLANDIRMA --- */
                flex-shrink-0       /* Asla küçülme/büzülme */
                snap-center         /* Ekranın ortasına hizalan */
                w-[85vw]            /* Ekranın %85'ini kapla (Yandaki kartın ucu görünür) */
                max-w-[200px]       /* Çok geniş telefonlarda devasa olma */

                /* --- MASAÜSTÜ BOYUTLANDIRMA --- */
                md:w-full           /* Grid içinde kendi alanını kapla */
                md:max-w-[200px]    /* Masaüstünde ideal kart genişliği */
                md:flex-shrink      /* Normal esneme davranışına dön */
              `}
            >
              <FlipCard
                foto={member.foto}
                isim={member.isim}
                gorev={member.gorev}
                reyting={member.reyting}
                yazi={member.yazi}
                stats={member.stats}
                variant={member.variant}
                ikon={member.ikon}
              />
            </div>
          ))}
          {/* Sadece mobilde en sağda biraz boşluk kalsın diye görünmez bir div */}
          <div className="w-2 flex-shrink-0 md:hidden"></div>

        </div>








      </section>
      <section className="relative z-10 w-full py-10">
        {/* --- YENİ EKLENEN BAŞLIK BÖLÜMÜ --- */}
        <div className="text-center mb-10 px-4">
          <p className="text-sm md:text-lg font-bold text-indigo-300 uppercase tracking-[0.2em]">
            NonBoard
          </p>
          <div className="w-24 h-1 bg-indigo-400 mx-auto mt-4 rounded-full opacity-60 text"></div>
        </div>

        <div className={`
            flex gap-6 w-full
            
            /* --- MOBİL ÖZELLİKLERİ (Varsayılan) --- */
            flex-nowrap           /* Yan yana dizil, aşağı inme */
            overflow-x-auto       /* Yatay scroll aç */
            snap-x snap-mandatory /* Kaydırınca karta yapış */
            justify-start         /* Başlangıçtan sırala */
            px-6 pb-12            /* Kenarlardan boşluk bırak */

            /* --- MASAÜSTÜ ÖZELLİKLERİ (md: ve üzeri) --- */
            md:flex-wrap          /* Ekran genişse alt satıra geç (Scroll'u iptal eder) */
            md:overflow-visible   /* Scroll özelliğini kapat */
            md:justify-center     /* Ortala */
            md:px-4               /* Masaüstü kenar boşluğu */
        `}>

          {teamMembers.map((member) => (

            /* --- KART WRAPPER --- */
            <div
              key={member.id}
              className={`
                relative h-[300px] md:h-[300px] team-card

                /* --- MOBİL BOYUTLANDIRMA --- */
                flex-shrink-0       /* Asla küçülme/büzülme */
                snap-center         /* Ekranın ortasına hizalan */
                w-[85vw]            /* Ekranın %85'ini kapla (Yandaki kartın ucu görünür) */
                max-w-[200px]       /* Çok geniş telefonlarda devasa olma */

                /* --- MASAÜSTÜ BOYUTLANDIRMA --- */
                md:w-full           /* Grid içinde kendi alanını kapla */
                md:max-w-[200px]    /* Masaüstünde ideal kart genişliği */
                md:flex-shrink      /* Normal esneme davranışına dön */
              `}
            >
              <FlipCard
                foto={member.foto}
                isim={member.isim}
                gorev={member.gorev}
                reyting={member.reyting}
                yazi={member.yazi}
                stats={member.stats}
                variant={member.variant}
                ikon={member.ikon}
              />
            </div>
          ))}
          {/* Sadece mobilde en sağda biraz boşluk kalsın diye görünmez bir div */}
          <div className="w-2 flex-shrink-0 md:hidden"></div>

        </div>
      </section>

    </main>
  );
}

export default Team;