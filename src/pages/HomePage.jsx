
import { Footer } from "../sections/Footer"
import { Welcome } from "../sections/Welcome";
import { ByNumbers } from "../sections/ByNumbers"
import { Nav } from "../Components/Nav"
import { AboutUs } from "../sections/AboutUs"


//merhaba merhaba


function HomePage() {
    
    return(
    <main className="relative">
        
        <section className="">
            <Nav/>
            </section>

        <section className="xl:padding- wide:padding-r">
            <Welcome/>
        </section>

        <AboutUs></AboutUs>
        
        
        <ByNumbers></ByNumbers>
        

        <section className=" h-48 bg-black">
            <Footer/>
        </section>
    </main>
  )
}

export default HomePage;