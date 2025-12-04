import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bestmap from "../assets/HomePage/bestMap.png";
import Stars from '../Components/Stars';
import { useInView } from 'react-intersection-observer'; // BU SATIRI EKLE

// BİLEŞENLER
import { Footer } from "../sections/Footer";
import { Welcome } from "../sections/Welcome";
import { ByNumbers } from "../sections/ByNumbers";
import { Nav } from "../Components/Nav";
import { AboutUs } from "../sections/AboutUs";

// GÖRSEL URL HELPER
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function HomePage() {
  const parallax = useRef(null);

  const [topTriggerRef, inView] = useInView({ threshold: 0 });

  
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>      
{/* 1. NAVBAR */}

      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
          <div className="pointer-events-auto">
             {/* !inView diyerek mantığı tersine çevirip gönderiyoruz */}
             <Nav isScrolled={!inView} />
          </div>
      </div>
      {/* 2. PARALLAX KAPSIYICI */}
      <Parallax ref={parallax} pages={4}>
        
        {/* --- KATMAN GRUBU A: ARKA PLANLAR --- */}

        {/* CSS GRADIENT + KOD YILDIZLAR */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={8} 
          style={{
            background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
            backgroundSize: 'cover',
          }}
        >
            <Stars />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0} factor={0.1} style={{ zIndex: 0 }}>
             <div 
                ref={topTriggerRef} 
                className="absolute top-0 w-full h-1 bg-transparent" 
             />
        </ParallaxLayer>
        {/* Bulut - AboutUs civarında */}
        <ParallaxLayer offset={1.5} speed={0.8} style={{ opacity: 0.3, pointerEvents: 'none', zIndex: 0 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud"/>
        </ParallaxLayer>

        {/* --- KATMAN GRUBU B: SÜSLEMELER --- */}
        
        {/* DÜZELTME BURADA: BEST MAP (Harita) */}
        {/* ByNumbers 2.7'de başlıyor. Haritayı 2.6'ya koyduk ki tam arkasına denk gelsin. */}
        <ParallaxLayer 
            offset={2.7} 
            speed={0.2} // İçerikten daha yavaş hareket etsin (Derinlik hissi)
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                opacity: 0.4, // Sayıların okunması için haritayı silikleştirdik
                pointerEvents: 'none', 
                zIndex: 0 // İçeriğin arkasında kalması için 0
            }}
        >
          {/* Haritayı ortaladık ve boyutunu ayarladık */}
          <img src={bestmap} style={{ width: '50%', height: 'auto' }} alt="Best Map" />
        </ParallaxLayer>


        {/* --- KATMAN GRUBU C: İÇERİK --- */}

        {/* 1. WELCOME */}
        <ParallaxLayer 
            offset={0} 
            speed={0.1} 
            onClick={() => parallax.current.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
        >
            <div className="w-full">
               <Welcome />
            </div>
        </ParallaxLayer>

        {/* 2. ABOUT US */}
        <ParallaxLayer 
            offset={1} 
            speed={0.2}
            factor={1.7} 
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 10 }}
        >
            <div className="w-full pointer-events-auto px-4 mt-32"> 
               <AboutUs />
            </div>
        </ParallaxLayer>

        {/* 3. BY NUMBERS */}
        <ParallaxLayer 
            offset={2.7} 
            speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
        >
             <div className="w-full pointer-events-auto">
                <ByNumbers />
             </div>
        </ParallaxLayer>

        {/* 4. FOOTER */}
        <ParallaxLayer 
            offset={3.6} 
            speed={0.5}
            factor={0.4}
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                zIndex: 100 
            }}
        >
            <div className="w-full">
                <Footer />
            </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default HomePage;