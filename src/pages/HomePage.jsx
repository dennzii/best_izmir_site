import { AboutUs } from "../sections/AboutUs";
import { Annoucements } from "../sections/Annoucements";
import { Events } from "../sections/Events";
import { Footer } from "../sections/Footer";
import { Gallery } from "../sections/Gallery";
import { Welcome } from "../sections/Welcome";

import { Nav } from "../Components/Nav"

import AboutPage from "./AboutPage";
//merhaba merhaba


function HomePage() {
    
    return(
    <main className="relative">
        <section className="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 h-2 flex items-center"></section>
        <section className="py-5">
            <Nav/>
            </section>

        <section className="xl:padding- wide:padding-r">
            <Welcome/>
        </section>

        <section className="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 h-1 flex items-center"></section>

        <section className="padding-x">
            <Annoucements/>
        </section>

        <section className="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 h-1 flex items-center"></section>

        <section className="padding-x bg-center">
            <Gallery/>
        </section>

        <section class="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 h-1 flex items-center"></section>

        <section className="padding-x py-16 bg-orange-100">
            <AboutUs/>
        </section>

      

        <section className=" h-48 bg-black">
            <Footer/>
        </section>

        <section class="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 h-2 flex items-center"></section>

    </main>
  )
}

export default HomePage;