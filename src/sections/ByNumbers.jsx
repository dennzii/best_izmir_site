import React from "react";
import { motion } from "framer-motion"; // Animasyon için (AboutUs'ta kullanmıştık)
import { byNumbersStats as stats } from "../data/ByNumbersData";
import { useTranslation } from "react-i18next";

export const ByNumbers = () => {
  const { t } = useTranslation();

  // Verileri bir dizi (array) olarak tutalım, yönetmesi kolay olsun

  return (
    <section className="w-full py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- BAŞLIK --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-slate-400 drop-shadow-lg">
            {t("byNumbers.title")}
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
        </motion.div>

        {/* --- KUTULAR (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Sırayla gelsinler
              viewport={{ once: true }}

              // GLASSMORPHISM KARTI
              className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >

              {/* Arkadaki parlama efekti (Hover'da çıkar) */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>

              {/* Rakam */}
              <h3 className={`text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br ${stat.color} drop-shadow-lg`}>
                {stat.number}
              </h3>

              {/* Başlık */}
              <p className="text-2xl font-bold text-white mb-2 tracking-wide">
                {t(stat.labelKey)}
              </p>

              {/* Açıklama (İstersen kaldırabilirsin) */}
              <p className="text-sm text-gray-400 font-light max-w-[200px]">
                {t(stat.descKey)}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};