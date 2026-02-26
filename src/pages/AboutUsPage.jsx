import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Nav } from "../Components/Nav";
import { Footer } from "../sections/Footer";
import Stars from '../Components/Stars';
import { aboutUsContent } from '../data/AboutUsData';

function AboutUsPage() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <main className='relative min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white' style={{
            background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <Stars />

            {/* --- NAVBAR --- */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Nav isScrolled={isScrolled} />
            </div>

            <div className="relative z-10 w-full flex-grow pt-32 md:pt-40 pb-0 flex flex-col items-center">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {t('navbar.about')}
                    </h1>
                    <p className="text-indigo-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
                        BEST Izmir & Board of European Students of Technology
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* --- CONTENT SECTION --- */}
                <section className="bg-transparent w-full flex flex-col items-center justify-center py-10 gap-10">
                    {aboutUsContent.map(({ titleKey, textKey, imgSrc }, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={sectionVariants}
                            className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12 mb-20"
                        >
                            {index % 2 === 0 ? (
                                /* SOL YAZI - SAĞ RESİM */
                                <>
                                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                                        {titleKey && (
                                            <div className="mb-6">
                                                <h2 className="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 drop-shadow-lg mb-2">
                                                    {t(titleKey)}
                                                </h2>
                                                <div className="h-1 w-24 bg-purple-500 rounded-full mx-auto md:mx-0 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                                            </div>
                                        )}
                                        <p className="whitespace-pre-wrap text-lg md:text-xl text-slate-200 font-light leading-relaxed drop-shadow-md">
                                            {t(textKey)}
                                        </p>
                                    </div>
                                    {/* Resim */}
                                    <div className="md:w-1/2 w-full flex justify-center">
                                        <div className="relative group w-full max-w-md">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                            <img
                                                alt="About Us"
                                                className="relative w-full aspect-video rounded-3xl object-cover hover:scale-[1.02] transition-transform duration-500 shadow-xl border border-white/10"
                                                src={imgSrc}
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* SOL RESİM - SAĞ YAZI */
                                <>
                                    <div className="md:w-1/2 w-full flex justify-center order-last md:order-first">
                                        <div className="relative group w-full max-w-md">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                            <img
                                                src={imgSrc}
                                                alt="About Us"
                                                className="relative w-full aspect-video rounded-3xl object-cover hover:scale-[1.02] transition-transform duration-500 shadow-xl border border-white/10"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                                        {titleKey && (
                                            <div className="mb-6">
                                                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 drop-shadow-lg mb-2">
                                                    {t(titleKey)}
                                                </h2>
                                                <div className="h-1 w-24 bg-purple-500 rounded-full mx-auto md:mx-0 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                                            </div>
                                        )}
                                        <p className="whitespace-pre-wrap text-lg md:text-xl text-slate-200 font-light leading-relaxed drop-shadow-md">
                                            {t(textKey)}
                                        </p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </section>
            </div>

            {/* --- FOOTER --- */}
            <div className="w-full mt-auto pt-24 z-10">
                <Footer />
            </div>
        </main>
    );
}

export default AboutUsPage;
