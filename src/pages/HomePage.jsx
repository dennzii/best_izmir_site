import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import bestmapLight from "../assets/HomePage/BestMap2.png";
import bestmapDark from "../assets/HomePage/BestMap3.png";
import Stars from '../Components/Stars';
import { useInView } from 'react-intersection-observer';

import { Footer } from "../sections/Footer";
import { Welcome } from "../sections/Welcome";
import { ByNumbers } from "../sections/ByNumbers";
import { Nav } from "../Components/Nav";
import { AboutUs } from "../sections/AboutUs";
import { HomeEvents } from "../sections/HomeEvents";
import { HomeContact } from "../sections/HomeContact";
import { HomeSponsors } from "../sections/HomeSponsors";

const cloudUrl = 'https://awv3node-homepage.surge.sh/build/assets/cloud.svg';

const DARK_BG = 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)';
const LIGHT_BG = 'linear-gradient(135deg, #e0f2fe 0%, #dcfce7 50%, #fffbeb 100%)';

// rate: her bulutun scroll hızı — 0 = sayfa ile birlikte, 0.5 = yarı hızda (parallax derinliği)
const CLOUDS = [
  { left: '78%', top: '30vh',  width: '7%', opacityDark: 0.18, opacityLight: 0.40, rate: 0.30 },
  { left: '57%', top: '100vh', width: '6%', opacityDark: 0.18, opacityLight: 0.40, rate: 0.45 },
  { left: '12%', top: '140vh', width: '8%', opacityDark: 0.15, opacityLight: 0.35, rate: 0.20 },
  { left: '82%', top: '175vh', width: '7%', opacityDark: 0.18, opacityLight: 0.38, rate: 0.55 },
  { left: '42%', top: '225vh', width: '6%', opacityDark: 0.15, opacityLight: 0.35, rate: 0.35 },
  { left: '8%',  top: '265vh', width: '5%', opacityDark: 0.15, opacityLight: 0.32, rate: 0.15 },
];

// Toplam sayfa scroll tahmini — bulut transform aralığını belirler
const S = 5000;

function HomePage() {
  const { isDark } = useTheme();
  const [topTriggerRef, inView] = useInView({ threshold: 0 });
  const { scrollY } = useScroll();

  const c0y = useTransform(scrollY, [0, S], [0, S * CLOUDS[0].rate]);
  const c1y = useTransform(scrollY, [0, S], [0, S * CLOUDS[1].rate]);
  const c2y = useTransform(scrollY, [0, S], [0, S * CLOUDS[2].rate]);
  const c3y = useTransform(scrollY, [0, S], [0, S * CLOUDS[3].rate]);
  const c4y = useTransform(scrollY, [0, S], [0, S * CLOUDS[4].rate]);
  const c5y = useTransform(scrollY, [0, S], [0, S * CLOUDS[5].rate]);
  const cloudYs = [c0y, c1y, c2y, c3y, c4y, c5y];

  const decorY = useTransform(scrollY, [0, S], [0, S * 0.05]);
  const sunY = useTransform(scrollY, [0, S], [0, S * 0.15]);
  const leftCloudY = useTransform(scrollY, [0, S], [0, S * 0.40]);

  // Light modda bulutları mavi tona çevirir
  const cloudFilter = isDark
    ? 'none'
    : 'invert(65%) sepia(40%) saturate(600%) hue-rotate(185deg) brightness(108%)';

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: isDark ? DARK_BG : LIGHT_BG, position: 'relative', overflowX: 'hidden' }}>

      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Nav isScrolled={!inView} />
        </div>
      </div>

      {/* Yıldız arka planı sabit kalır, içerik üzerinden scroll eder */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, background: isDark ? DARK_BG : LIGHT_BG }}>
        <Stars />
      </div>

      {/* Dekorasyon katmanı: bulutlar ve güneş/hilal scroll ile yavaş hareket eder */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>

        {/* Güneş — yalnızca light modda görünür */}
        {!isDark && (
          <motion.div style={{ position: 'absolute', left: '3%', top: '18vh', y: sunY }}>
            <div style={{
              width: 90, height: 90, borderRadius: '50%',
              background: 'radial-gradient(circle at 38% 38%, #fef9c3, #fcd34d 50%, #f59e0b)',
              boxShadow: '0 0 0 8px rgba(252,211,77,0.2), 0 0 50px 20px rgba(245,158,11,0.3)',
            }} />
          </motion.div>
        )}

        {/* Sol bulut — yalnızca light modda görünür */}
        {!isDark && (
          <motion.img
            src={cloudUrl}
            alt=""
            style={{
              position: 'absolute', display: 'block',
              width: '22%', left: '4%', top: '80vh',
              filter: cloudFilter, opacity: 0.75,
              y: leftCloudY,
            }}
          />
        )}

        <motion.div style={{ position: 'absolute', left: '5%', top: 'calc(110vh - 80px)', y: decorY }}>
          {isDark ? (
            <svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.22 }}>
              <defs>
                <mask id="crescent">
                  <circle cx="100" cy="100" r="88" fill="white"/>
                  <circle cx="134" cy="82" r="68" fill="black"/>
                </mask>
              </defs>
              <circle cx="100" cy="100" r="88" fill="#c7d2fe" mask="url(#crescent)"/>
            </svg>
          ) : (
            <div style={{ width: '220px', height: '220px', borderRadius: '50%', background: '#fbbf24', opacity: 0.20 }} />
          )}
        </motion.div>

        {CLOUDS.map((c, i) => (
          <motion.img
            key={i}
            src={cloudUrl}
            alt=""
            style={{
              position: 'absolute',
              display: 'block',
              width: c.width,
              left: c.left,
              top: c.top,
              filter: cloudFilter,
              opacity: isDark ? c.opacityDark : c.opacityLight,
              y: cloudYs[i],
            }}
          />
        ))}
      </div>

      {/* İçerik akışı — normal scroll, z-index dekorasyonların üzerinde */}
      <div className="relative flex flex-col w-full" style={{ zIndex: 10 }}>

        {/* topTriggerRef görünür olduğunda navbar şeffaf kalır */}
        <div ref={topTriggerRef} className="absolute top-0 w-full h-1 pointer-events-none" />

        <div className="w-full h-screen">
          <Welcome />
        </div>

        <div className="w-full">
          <AboutUs />
        </div>

        <div className="w-full">
          <HomeEvents />
        </div>

        <div className="w-full">
          <HomeContact />
        </div>

        <div className="w-full">
          <HomeSponsors />
        </div>

        {/* ByNumbers: mobilde düz akış, masaüstünde harita arka planda */}
        <div className="md:hidden w-full">
          <ByNumbers />
        </div>
        <div className="hidden md:flex relative w-full justify-center items-center">
          <img
            src={isDark ? bestmapDark : bestmapLight}
            className="pointer-events-none"
            style={{ width: '58%', height: 'auto', opacity: 0.18, position: 'relative', zIndex: 0 }}
            alt="Best Map"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
            <div className="w-full">
              <ByNumbers />
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default HomePage;
