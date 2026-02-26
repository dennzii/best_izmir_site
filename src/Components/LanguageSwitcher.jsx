import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const isTurkish = i18n.language.startsWith('tr');

    const toggleLanguage = () => {
        const newLang = isTurkish ? 'en' : 'tr';
        i18n.changeLanguage(newLang);
    };

    return (
        <div
            onClick={toggleLanguage}
            className="relative flex items-center w-20 h-10 p-1 bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-md rounded-full cursor-pointer transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            title="Dili Değiştir / Change Language"
        >
            {/* Background pill that animates */}
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute w-8 h-8 rounded-full shadow-lg transition-colors duration-500 ${isTurkish ? 'bg-blue-500' : 'bg-purple-500'}`}
                style={{
                    left: isTurkish ? "4px" : "calc(100% - 36px)",
                }}
            />

            {/* Labels */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10 w-full h-full text-xs font-bold">
                <div className="flex-1 flex justify-center">
                    <span className={`transition-colors duration-300 ${isTurkish ? 'text-white' : 'text-indigo-200'}`}>
                        TR
                    </span>
                </div>
                <div className="flex-1 flex justify-center">
                    <span className={`transition-colors duration-300 ${!isTurkish ? 'text-white' : 'text-indigo-200'}`}>
                        EN
                    </span>
                </div>
            </div>
        </div>
    );
};
