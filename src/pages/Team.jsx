import React from 'react'
import { Nav } from "../Components/Nav"
import { Welcome } from "../sections/Welcome";
import foto1 from "../assets/angry_bird.png"

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

            
        <FlipCard foto={foto1}></FlipCard>
             
    </main>
  )
}

export default Team