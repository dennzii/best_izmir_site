import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutFoto1 from "../assets/HomePage/about_foto4.png";
import aboutFoto2 from "../assets/HomePage/about_foto2.png";
import aboutFoto3 from "../assets/HomePage/about_foto1.png";

export const AboutUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  const content = [
    {
      ref: ref1,
      inView: inView1,
      title: "Hakkımızda", // Başlığı Türkçe yaptım, istersen değiştirebilirsin
      text: "Açıkçası rakıyı hiç sevmiyorum çünkü bana hem tadı hem de kokusu fazla yoğun ve ağır geliyor. Ama dost meclisinde bulunmak paha biçilemez.",
      imgSrc: aboutFoto1
    }, 
    {
      ref: ref2,
      inView: inView2,
      // title: "Vizyonumuz", // İstersen buraya da başlık ekleyebilirsin
      text: "Gözlüklü Shrek'e benzemek, hayatı biraz daha eğlenceli ve umursamaz bir perspektiften görmek demek olabilir. Biz de olaylara böyle bakıyoruz.",
      imgSrc: aboutFoto2
    }, 
    {
      ref: ref3,
      inView: inView3,
      // title: "Ekibimiz",
      text: "Aslan ve Yengeç burçlarının tam arasında doğmuş olmak, iki farklı dünyanın özelliklerini bir arada taşımak gibi bir şey. Hem lider hem duygusal.",
      imgSrc: aboutFoto3
    }
  ];

  return (
    // bg-transparent önemli, arkadaki yıldızları kapatmamalı
    <section className="bg-transparent w-full flex flex-col items-center justify-center py-20 gap-10">
      
      {content.map(({ ref, inView, title, text, imgSrc }, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          {index % 2 === 0 ? (
            /* --- SOL YAZI - SAĞ RESİM --- */
            <>
              <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                
                {/* Başlık Varsa Göster */}
                {title && (
                  <div className="mb-6">
                    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 drop-shadow-lg mb-2">
                      {title}
                    </h2>
                    <div className="h-1 w-24 bg-purple-500 rounded-full mx-auto md:mx-0 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                  </div>
                )}
                
                {/* Metin */}
                <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed drop-shadow-md">
                  {text}
                </p>
              </div>

              {/* Resim */}
              <div className="md:w-1/2 w-full flex justify-center">
                <img
                  alt="About Us"
                  className="w-full max-w-md h-auto rounded-3x hover:scale-105 transition-transform duration-500 object-cover"
                  src={imgSrc}
                />
              </div>
            </>
          ) : (
            /* --- SOL RESİM - SAĞ YAZI --- */
            <>
              {/* Resim (Mobilde üstte görünmesi için order kullanabiliriz ama flex-col default sıralar) */}
              <div className="md:w-1/2 w-full flex justify-center order-last md:order-first">
                <img
                  src={imgSrc}
                  alt="About Us"
                  className="w-full max-w-md h-auto rounded-3xl  hover:scale-105 transition-transform duration-500 object-cover"
                />
              </div>

              <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                 {/* Eğer 2. elemanın da başlığı olsaydı buraya eklerdik */}
                <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed drop-shadow-md">
                  {text}
                </p>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </section>
  );
};