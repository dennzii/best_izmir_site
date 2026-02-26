
import izmir_foto from "../assets/izmir_foto.png";
import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="bg-slate-600 relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={izmir_foto}
          alt="Background"
          className="w-full h-full object-cover object-[38%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-start items-start pl-8 pt-56 md:justify-center md:pt-0 md:pl-20">
        <h1 className="text-slate-300 text-6xl sm:text-7xl md:text-8xl font-bold z-10 drop-shadow-lg">{t('welcome.word1')}</h1>
        <h1 className="text-slate-400 text-6xl sm:text-7xl md:text-8xl font-bold z-10 drop-shadow-lg">{t('welcome.word2')}</h1>
        <h1 className="text-slate-500 text-6xl sm:text-7xl md:text-8xl font-bold z-10 drop-shadow-lg">{t('welcome.word3')}</h1>
      </div>
    </section>
  );
};

export default Welcome;
