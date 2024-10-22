import { AboutUsExtended } from "../sections/AboutUsExtended";
import { Annoucements } from "../sections/Annoucements";
import { Events } from "../sections/Events";
import { Footer } from "../sections/Footer";
import { Gallery } from "../sections/Gallery";
import { Welcome } from "../sections/Welcome";
import { Nav } from "../Components/Nav";



import App from "../App";

function AboutPage() {
  return (
    <main className="relative inset-0 bg-gradient-to-r from-blue-300 via-yellow-300 to-green-300 z-0 ">
        <section class="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 h-2 flex items-center"></section>
        <section className=""><Nav/></section>
        <section className="padding-x mt-96  h-screen">
          <div>
            <AboutUsExtended className=""/>
          </div>      
        </section>
        <section className=" h-48 bg-black">
            <Footer/>
        </section>

        <section class="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 h-2 flex items-center"></section>
    </main>
  )
}

export default AboutPage