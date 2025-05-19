import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export const FlipCard = ({ foto, isim, gorev, yazi }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  const commonClasses =
    'w-72 h-96 border-4 border-rose-700 rounded-lg shadow-lg bg-white cursor-pointer transition-transform duration-300 overflow-hidden';

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      {/* Ön Yüz */}
      <div className={commonClasses} onClick={flipCard}>
        <div className="relative w-full h-full">
          <img src={foto} alt={isim} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-center">
            <h2 className="text-lg font-bold">{isim}</h2>
            <p className="text-sm">{gorev}</p>
          </div>
        </div>
      </div>

      {/* Arka Yüz */}
      <div className={commonClasses + ' bg-rose-200'} onClick={flipCard}>
        <div className="flex items-center justify-center h-full text-rose-900 p-6 text-center">
          <p>{yazi}</p>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
