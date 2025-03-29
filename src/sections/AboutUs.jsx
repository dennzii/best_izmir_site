import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-indigo-100 min-h-screen flex flex-col items-center justify-center py-6 sm:py-10">
      {[{
        ref: ref1,
        inView: inView1,
        title: "About Me (Uzeyir)",
        text: "Açıkçası rakıyı hiç sevmiyorum çünkü bana hem tadı hem de kokusu fazla yoğun ve ağır geliyor...",
        imgSrc: "https://www.fokaibalikrestaurant.com/tema/genel/uploads/urunler/rak%C4%B11.webp"
      }, {
        ref: ref2,
        inView: inView2,
        text: "Gözlüklü Shrek'e benzemek, hayatı biraz daha eğlenceli ve umursamaz bir perspektiften görmek demek olabilir...",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHCdETeYXEziCeObOizVUpx0auv9lVr4TvQ&s"
      }, {
        ref: ref3,
        inView: inView3,
        text: "Aslan ve Yengeç burçlarının tam arasında doğmuş olmak, iki farklı dünyanın özelliklerini bir arada taşımak gibi bir şey...",
        imgSrc: "https://t4.ftcdn.net/jpg/05/08/82/03/360_F_508820353_8p3eN8bBWoAQoxj4susKlzL6979VEFuf.jpg"
      }].map(({ ref, inView, title, text, imgSrc }, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-col md:flex-row items-center mb-6 sm:mb-10"
        >
          {index % 2 === 0 ? (
            <>
              <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start p-4 sm:p-6 h-full">
                {title && <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-indigo-900">{title}</h2>}
                <p className="text-base sm:text-lg text-gray-700 text-center md:text-left">{text}</p>
              </div>
              <div className="md:w-1/2 w-full flex justify-center p-4 sm:p-6 h-full">
                <img
                  src={imgSrc}
                  alt="About Us"
                  className="w-full h-auto max-w-full sm:max-w-md rounded-lg shadow-lg object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="md:w-1/2 w-full flex justify-center p-4 sm:p-6 h-full">
                <img
                  src={imgSrc}
                  alt="About Us"
                  className="w-full h-auto max-w-full sm:max-w-md rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start p-4 sm:p-6 h-full">
                <p className="text-base sm:text-lg text-gray-700 text-center md:text-left">{text}</p>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </section>
  );
};
