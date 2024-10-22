import React from 'react'
import {FaYoutube,FaTwitter,FaInstagram} from 'react-icons/fa'

const DisplayIcons = () => {

  const handleButtonClick = () => {
    window.location.href = 'https://www.instagram.com/best.izmir/';  // Hedef URL'yi buraya yaz
  }

  return (
    <div className=' flex absolute bottom-0 right-0 mr-5'>
       
       <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
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

      <button onClick={handleButtonClick} className=" mr-4">
      <FaInstagram fill="url(#grad1)" className="w-12 h-12 ">
            
            </FaInstagram>
      </button>
        

       <FaTwitter className="h-12 w-12 fill-blue-400 mr-4" />
       <FaYoutube className="h-12 w-12 fill-red-600 mr-4" />
    </div>
  )
}

export default DisplayIcons