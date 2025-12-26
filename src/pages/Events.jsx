
import React, { useState, useEffect } from 'react';
import { Nav } from "../Components/Nav";
import { Footer } from "../sections/Footer";
import Stars from '../Components/Stars';
import { eventsData } from '../data/EventsData';
import { motion } from 'framer-motion';

function Events() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='relative min-h-screen font-sans selection:bg-indigo-500 selection:text-white' style={{
      background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <Stars />

      {/* --- NAVBAR --- */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav isScrolled={isScrolled} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">

        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            BEST EVENTS
          </h1>
          <p className="text-indigo-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
            Unutulmaz anlar, birlikte yaşanan deneyimler ve geleceğe bıraktığımız izler.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>


        {/* --- TIMELINE CONTAINER --- */}
        <div className="w-full max-w-5xl relative">

          {/* Timeline Çizgisi (Mobil: Sol tarafta, Desktop: Ortada) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 md:transform md:-translate-x-1/2"></div>

          {eventsData.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} />
          ))}

        </div>

        {/* --- FOOTER (Page Specific Margin) --- */}
        <div className="w-full mt-24">
          <Footer />
        </div>

      </div>
    </main>
  );
}

// Alt Bileşen: Timeline Item
function TimelineItem({ event, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`
                relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-32 w-full
                ${isEven ? 'md:flex-row-reverse' : ''} 
            `}
    >

      {/* 1. BOŞLUK (Timeline hizalaması için) */}
      <div className="hidden md:block w-5/12"></div>

      {/* 2. NOKTA ( timeline üzerindeki ) */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-400 rounded-full border-4 border-[#0F1520] shadow-[0_0_15px_rgba(99,102,241,0.6)] z-20 transform -translate-x-1/2"></div>


      {/* 3. İÇERİK KARTI */}
      <div className="w-full pl-12 md:pl-0 md:w-5/12 relative group">

        {/* Kart Tasarımı */}
        <div className="
                    relative overflow-hidden rounded-3xl 
                    bg-white/5 backdrop-blur-md border border-white/10
                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                    transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)]
                ">

          {/* Görsel Alanı */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

            {/* Tarih Rozeti */}
            <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {event.date}
            </div>
          </div>

          {/* Metin Alanı */}
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              {event.title}
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
              {event.description}
            </p>
          </div>

          {/* Dekoratif Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>

        </div>
      </div>

    </motion.div>
  );
}

export default Events;