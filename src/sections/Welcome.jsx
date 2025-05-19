import { useEffect, useRef } from "react";
import { Button } from "../Components/Button";
import izmir_foto from "../assets/izmir_foto.png";

export const Welcome = () => {
  const scrolled = useRef(false);

  // 👇 Yavaş scroll fonksiyonu (1.5 saniye boyunca smooth kayar)
  function slowScrollTo(to, duration = 1000) {
    const start = window.scrollY;
    const distance = to - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutQuad(progress));
      if (progress < 1) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
  }

  // 👇 İlk scroll hareketinde otomatik kaydır
  useEffect(() => {
    const handleWheel = () => {
      if (!scrolled.current) {
        scrolled.current = true;
        slowScrollTo(window.innerHeight, 1500); // 1.5 saniyede aşağı kay
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <section
      id="home"
      className="bg-slate-600 relative min-h-full max-w-full"
    >
      <div className="relative justify-center items-center min-w-fit min-h-screen">
        <img
          src={izmir_foto}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      <div className="absolute inset-0 flex flex-col left-5 mt-48">
        <h1 className="text-slate-300 text-8xl md:text-6xl font-bold z-10">Boyoz</h1>
        <h1 className="text-slate-400 text-8xl md:text-6xl font-bold z-10">Gevrek</h1>
        <h1 className="text-slate-500 text-8xl md:text-6xl font-bold z-10">Çay</h1>
      </div>
    </section>
  );
};

export default Welcome;
