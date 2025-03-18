import React from 'react'
import { Nav } from "../Components/Nav"
import { Welcome } from "../sections/Welcome";
import foto1 from "../assets/angry_bird.png";
import foto2 from "../assets/angry_bird.png";
import foto3 from "../assets/angry_bird.png";
import foto4 from "../assets/angry_bird.png";
import foto5 from "../assets/angry_bird.png";
import foto6 from "../assets/angry_bird.png";
import foto7 from "../assets/angry_bird.png";
import foto8 from "../assets/angry_bird.png";
import foto9 from "../assets/angry_bird.png";



import {FlipCard} from '../Components/FlipCard'

function Team() {


 
  return (
    <main className='relative'>
          <section className="">
            <Nav/>
            </section>



            <section className="xl:padding- wide:padding-r">
                        <Welcome/>
            </section>

            <section className="grid grid-cols-3 gap-4 p-8">
              <FlipCard foto={foto1}></FlipCard>
              <FlipCard foto={foto2}></FlipCard>
              <FlipCard foto={foto3}></FlipCard>
              <FlipCard foto={foto4}></FlipCard>
              <FlipCard foto={foto5}></FlipCard>
              <FlipCard foto={foto6}></FlipCard>
              <FlipCard foto={foto7}></FlipCard>
              <FlipCard foto={foto8}></FlipCard>
              <FlipCard foto={foto9}></FlipCard>
            </section>
            
        
             
    </main>

  );
}

export default Team