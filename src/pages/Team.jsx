import React from 'react'
import { Nav } from "../Components/Nav"
import { Welcome } from "../sections/Welcome";
import foto1 from "../assets/stock_team_insan.jpg";
import foto2 from "../assets/stock_team_insan.jpg";
import foto3 from "../assets/stock_team_insan.jpg";
import foto4 from "../assets/stock_team_insan.jpg";
import foto5 from "../assets/stock_team_insan.jpg";
import foto6 from "../assets/stock_team_insan.jpg";
import foto7 from "../assets/stock_team_insan.jpg";
import foto8 from "../assets/stock_team_insan.jpg";
import foto9 from "../assets/stock_team_insan.jpg";



import { FlipCard } from '../Components/FlipCard'

function Team() {



  return (
    <main className='relative  bg-indigo-100'>
      <section className="">
        <Nav />
      </section>



      <section className="xl:padding- wide:padding-r">
        <Welcome />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto p-6">
      <FlipCard
        foto={foto1}
        isim="Ahmet Yılmaz"
        gorev="Frontend Developer"
        yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum."
      />
      <FlipCard foto={foto2} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      <FlipCard foto={foto3} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      <FlipCard foto={foto4} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      <FlipCard foto={foto5} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      <FlipCard foto={foto6} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      <FlipCard foto={foto7} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      <FlipCard foto={foto8} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      <FlipCard foto={foto9} isim="Ahmet Yılmaz" gorev="Frontend Developer" yazi="Merhaba! Ben bir yazılım geliştiricisiyim. React, Tailwind ve daha fazlasıyla ilgileniyorum." />
      </section>




    </main>

  );
}

export default Team