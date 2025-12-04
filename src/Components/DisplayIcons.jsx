import React from 'react'
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const DisplayIcons = () => {

  // Bu fonksiyonu tüm butonlar kullanacak
  const openLink = (url) => {
    // '_blank' parametresi linki yeni sekmede açar. 
    // Aynı sekmede açmak istersen: window.location.href = url; kullanabilirsin.
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className='flex items-center gap-4'>
       
       {/* Gradient Tanımlaması (Instagram İçin) 
          Görünmez olması için width ve height 0 yapıldı ama ID'si (grad1) duruyor.
       */}
       <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#bc1888", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* --- INSTAGRAM BUTONU --- */}
      <button 
        onClick={() => openLink('https://www.instagram.com/best.izmir/')} 
        className="hover:scale-125 transition-transform duration-300"
      >
        {/* fill="url(#grad1)" diyerek yukarıdaki gradienti çağırıyoruz */}
        <FaInstagram style={{ fill: "url(#grad1)" }} className="w-8 h-8 md:w-10 md:h-10" />
      </button>


      {/* --- LINKEDIN BUTONU --- */}
      <button 
        onClick={() => openLink('https://www.linkedin.com/company/best-izmir/')} 
        className="hover:scale-125 transition-transform duration-300"
      >
        <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 text-blue-500 rounded-md" />
      </button>


    </div>
  )
}

export default DisplayIcons