import React from 'react'
import { Nav } from "../Components/Nav"
import { Welcome } from "../sections/Welcome";

function Team() {
  return (
    <main className='relative'>
          <section className="">
            <Nav/>
            </section>

            <section className="xl:padding- wide:padding-r">
                        <Welcome/>
                    </section>
    </main>
  )
}

export default Team