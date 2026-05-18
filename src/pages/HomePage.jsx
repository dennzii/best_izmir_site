import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useTheme } from '../context/ThemeContext';
import bestmap from "../assets/HomePage/bestMap2.png";
import Stars from '../Components/Stars';
import { useInView } from 'react-intersection-observer'; // BU SATIRI EKLE

// BİLEŞENLER
import { Footer } from "../sections/Footer";
import { Welcome } from "../sections/Welcome";
import { ByNumbers } from "../sections/ByNumbers";
import { Nav } from "../Components/Nav";
import { AboutUs } from "../sections/AboutUs";
import { HomeEvents } from "../sections/HomeEvents";
import { HomeContact } from "../sections/HomeContact";
import { HomeSponsors } from "../sections/HomeSponsors";

// GÖRSEL URL HELPER
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

const DARK_BG = 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)';
const LIGHT_BG = 'linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f5f0ff 100%)';

function HomePage() {
  const parallax = useRef(null);
  const { isDark } = useTheme();
  const [topTriggerRef, inView] = useInView({ threshold: 0 });

  // Ekran genişliği kontrolü (Mobil vs Desktop)
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // İlk yüklemede kontrol et
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    // --- MOBİL GÖRÜNÜM (Parallax Yok) ---
    return (
      <div style={{ width: '100%', minHeight: '100vh', background: isDark ? DARK_BG : LIGHT_BG, position: 'relative', overflowX: 'hidden' }}>

        {/* 1. NAVBAR (Sabit) */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Nav isScrolled={!inView} />
        </div>

        {/* 2. ARKA PLAN (Yıldızlar + Dekorasyonlar) */}
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
          style={{ background: isDark ? DARK_BG : LIGHT_BG }}
        >
          <Stars />
        </div>

        {/* 3. İÇERİK AKIŞI (Z-Index ile yıldızların üstünde) */}
        <div className="relative z-10 flex flex-col w-full">

          {/* Scroll Tetikleyicisi (Nav rengi için) */}
          <div ref={topTriggerRef} className="absolute top-0 w-full h-1 pointer-events-none" />

          {/* WELCOME */}
          <div className="w-full h-screen">
            <Welcome />
          </div>

          {/* ABOUT US */}
          <div className="w-full px-4 py-4">
            <AboutUs />
          </div>

          {/* EVENTS */}
          <div className="w-full px-4 py-4">
            <HomeEvents />
          </div>

          {/* CONTACT */}
          <div className="w-full px-4 py-4">
            <HomeContact />
          </div>

          {/* SPONSORS */}
          <div className="w-full py-4">
            <HomeSponsors />
          </div>

          {/* HARİTA & BY NUMBERS (Üst üste bindirme) */}
          <div className="relative w-full flex flex-col items-center justify-center py-4">

            {/* HARİTA (Arkada) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <img src={bestmap} style={{ width: '90%', height: 'auto', maxWidth: '600px' }} alt="Best Map" />
            </div>

            {/* BY NUMBERS (Önde) */}
            <div className="w-full z-10">
              <ByNumbers />
            </div>

          </div>

          {/* FOOTER */}
          <div className="w-full mt-4">
            <Footer />
          </div>

        </div>
      </div>
    );
  }

  // --- DESKTOP GÖRÜNÜM (Parallax Var) ---
  return (
    <div style={{ width: '100%', height: '100%', background: isDark ? DARK_BG : LIGHT_BG }}>
      {/* 1. NAVBAR */}

      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="pointer-events-auto">
          {/* !inView diyerek mantığı tersine çevirip gönderiyoruz */}
          <Nav isScrolled={!inView} />
        </div>
      </div>
      {/* 2. PARALLAX KAPSIYICI */}
      <Parallax ref={parallax} pages={5.0}>

        {/* --- KATMAN GRUBU A: ARKA PLANLAR --- */}

        {/* CSS GRADIENT + KOD YILDIZLAR */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={8}
          style={{ background: isDark ? DARK_BG : LIGHT_BG, backgroundSize: 'cover' }}
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
        <ParallaxLayer offset={1.3} speed={0.8} style={{ opacity: isDark ? 0.3 : 0.55, pointerEvents: 'none', zIndex: 0 }}>
          <img
            src={url('cloud')}
            style={{
              display: 'block',
              width: '22%',
              marginLeft: '8%',
              filter: isDark ? 'none' : 'invert(65%) sepia(40%) saturate(600%) hue-rotate(185deg) brightness(108%)',
            }}
            alt="cloud"
          />
        </ParallaxLayer>

        {/* --- KATMAN GRUBU B: SÜSLEMELER --- */}

        {/* DÜZELTME BURADA: BEST MAP (Harita) */}
        {/* ByNumbers arkasında durması lazım. */}
        <ParallaxLayer
          offset={3.3}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.4,
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
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
          offset={0.9}
          speed={0.2}
          factor={1.2}
          style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 10 }}
        >
          <div className="w-full pointer-events-auto px-4 mt-16">
            <AboutUs />
          </div>
        </ParallaxLayer>

        {/* 3. EVENTS */}
        <ParallaxLayer
          offset={1.5}
          speed={0.2}
          factor={1.2}
          style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 10 }}
        >
          <div className="w-full pointer-events-auto px-4 mt-16">
            <HomeEvents />
          </div>
        </ParallaxLayer>

        {/* 4. CONTACT */}
        <ParallaxLayer
          offset={2.1}
          speed={0.2}
          factor={1.2}
          style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 10 }}
        >
          <div className="w-full pointer-events-auto px-4 mt-16">
            <HomeContact />
          </div>
        </ParallaxLayer>

        {/* 5. SPONSORS */}
        <ParallaxLayer
          offset={2.85}
          speed={0.3}
          factor={0.6}
          style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 10 }}
        >
          <div className="w-full pointer-events-auto">
            <HomeSponsors />
          </div>
        </ParallaxLayer>

        {/* 6. BY NUMBERS */}
        <ParallaxLayer
          offset={3.3}
          speed={0.5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
        >
          <div className="w-full pointer-events-auto">
            <ByNumbers />
          </div>
        </ParallaxLayer>

        {/* 7. FOOTER */}
        <ParallaxLayer
          offset={4.1}
          speed={0.5}
          factor={0.9}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
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