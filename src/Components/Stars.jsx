import React, { useMemo } from 'react';

const Stars = () => {
  const generateStars = (count) => {
    let shadow = "";
    for (let i = 0; i < count; i++) {
      // DÜZELTME BURADA:
      // Eskiden: Math.random() * 200 (Sadece 2 sayfa yetiyordu)
      // Şimdi: Math.random() * 500 (5 sayfa boyunca yıldız saçar, Footer'a kadar iner)
      const x = Math.floor(Math.random() * 100); 
      const y = Math.floor(Math.random() * 500); 
      
      shadow += `${x}vw ${y}vh #FFF, `;
    }
    return shadow.slice(0, -2);
  };

  // Yıldız sayısını biraz artırdık ki aşağılara da yetsin
  const smallStars = useMemo(() => generateStars(400), []); 
  const mediumStars = useMemo(() => generateStars(150), []); 
  const largeStars = useMemo(() => generateStars(70), []);   

  return (
    // 'fixed' yerine 'absolute' kullanıyoruz ki Parallax katmanıyla beraber aksın
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      
      {/* Küçük Yıldızlar */}
      <div 
        className="w-[1px] h-[1px] bg-transparent rounded-full animate-pulse"
        style={{ boxShadow: smallStars }}
      ></div>

      {/* Orta Yıldızlar */}
      <div 
        className="w-[2px] h-[2px] bg-transparent rounded-full opacity-80"
        style={{ boxShadow: mediumStars }}
      ></div>

       {/* Büyük Yıldızlar */}
       <div 
        className="w-[3px] h-[3px] bg-transparent rounded-full opacity-60"
        style={{ boxShadow: largeStars }}
      ></div>

    </div>
  );
};

export default Stars;