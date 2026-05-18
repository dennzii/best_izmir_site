import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import bestmapLight from "../assets/HomePage/bestMap2.png";
import bestmapDark from "../assets/HomePage/bestMap3.png";
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
const LIGHT_BG = 'linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f5f0ff 100%)';

// Her bulut için: konum + parallax hızı (rate: 0=scroll ile birlikte, 0.3=çok yavaş=çok geride)
const CLOUDS = [
  { left: '78%', top: '30vh',  width: '7%', opacityDark: 0.18, opacityLight: 0.40, rate: 0.30 },
  { left: '57%', top: '100vh', width: '6%', opacityDark: 0.18, opacityLight: 0.40, rate: 0.45 },
  { left: '12%', top: '140vh', width: '8%', opacityDark: 0.15, opacityLight: 0.35, rate: 0.20 },
  { left: '82%', top: '175vh', width: '7%', opacityDark: 0.18, opacityLight: 0.38, rate: 0.55 },
  { left: '42%', top: '225vh', width: '6%', opacityDark: 0.15, opacityLight: 0.35, rate: 0.35 },
  { left: '8%',  top: '265vh', width: '5%', opacityDark: 0.15, opacityLight: 0.32, rate: 0.15 },
];

const S = 5000; // Sayfa toplam scroll tahmini (px)

function HomePage() {
  const { isDark } = useTheme();
  const [topTriggerRef, inView] = useInView({ threshold: 0 });
  const { scrollY } = useScroll();

  // Bulut parallax — her biri farklı hızda "geride kalır"
  const c0y = useTransform(scrollY, [0, S], [0, S * CLOUDS[0].rate]);
  const c1y = useTransform(scrollY, [0, S], [0, S * CLOUDS[1].rate]);
  const c2y = useTransform(scrollY, [0, S], [0, S * CLOUDS[2].rate]);
  const c3y = useTransform(scrollY, [0, S], [0, S * CLOUDS[3].rate]);
  const c4y = useTransform(scrollY, [0, S], [0, S * CLOUDS[4].rate]);
  const c5y = useTransform(scrollY, [0, S], [0, S * CLOUDS[5].rate]);
  const cloudYs = [c0y, c1y, c2y, c3y, c4y, c5y];

  // Güneş/Hilal — çok az hareket
  const decorY = useTransform(scrollY, [0, S], [0, S * 0.05]);

  const cloudFilter = isDark
    ? 'none'
    : 'invert(65%) sepia(40%) saturate(600%) hue-rotate(185deg) brightness(108%)';

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: isDark ? DARK_BG : LIGHT_BG, position: 'relative', overflowX: 'hidden' }}>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Nav isScrolled={!inView} />
        </div>
      </div>

      {/* SABİT ARKA PLAN — Yıldızlar */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, background: isDark ? DARK_BG : LIGHT_BG }}>
        <Stars />
      </div>

      {/* DEKORASYONLAR — scroll parallax ile hareket eder */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>

        {/* Güneş / Hilal */}
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

        {/* Bulutlar */}
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

      {/* İÇERİK — Normal scroll akışı, stabil */}
      <div className="relative flex flex-col w-full" style={{ zIndex: 10 }}>

        <div ref={topTriggerRef} className="absolute top-0 w-full h-1 pointer-events-none" />

        {/* 1. WELCOME */}
        <div className="w-full h-screen">
          <Welcome />
        </div>

        {/* 2. ABOUT US */}
        <div className="w-full">
          <AboutUs />
        </div>

        {/* 3. EVENTS */}
        <div className="w-full">
          <HomeEvents />
        </div>

        {/* 4. CONTACT */}
        <div className="w-full">
          <HomeContact />
        </div>

        {/* 5. SPONSORS */}
        <div className="w-full">
          <HomeSponsors />
        </div>

        {/* 6. BY NUMBERS */}
        {/* Mobil: düz akış */}
        <div className="md:hidden w-full">
          <ByNumbers />
        </div>
        {/* Desktop: harita arkada, ByNumbers üstünde */}
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

        {/* 7. FOOTER — map bittikten sonra */}
        <Footer />

      </div>
    </div>
  );
}

export default HomePage;
