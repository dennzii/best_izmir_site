import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import aboutFoto2 from "../assets/HomePage/about_foto2.jpg";

export const HomeEvents = () => {
    const { t } = useTranslation();

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="bg-transparent w-full flex flex-col items-center justify-center py-20 px-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="container mx-auto max-w-6xl flex flex-col md:flex-row-reverse items-center gap-12"
            >
                {/* --- RIGHT TEXT CONTENT (Left on Mobile) --- */}
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <div className="mb-6">
                        <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 drop-shadow-lg mb-2">
                            {t("eventsPage.title")}
                        </h2>
                        <div className="h-1 w-24 bg-purple-500 rounded-full mx-auto md:mx-0 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                    </div>

                    <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed drop-shadow-md mb-8">
                        {t("eventsPage.subtitle")}
                    </p>

                    <Link to="/events">
                        <button className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] focus:outline-none focus:ring-4 focus:ring-purple-500/50 group">
                            {t("aboutUs.readMore")}
                            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </Link>
                </div>

                {/* --- LEFT IMAGE --- */}
                <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
                    <div className="relative group w-full max-w-md">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <img
                            alt="BEST Izmir Events"
                            src={aboutFoto2}
                            className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl object-cover hover:scale-[1.02] transition-transform duration-500 shadow-2xl border border-white/10"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
