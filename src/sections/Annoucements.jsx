import { Carousel } from "@material-tailwind/react";
import {annoucements} from "../constants/index"

export  const Annoucements = () => {
  return (
    <section className="w-full flex flex-col justify-center min-h-80 max-w-full bg-blue-200">
      <h1 className="text-8xl font-montserrat mt-10 font-bold ml-5">Annoucements</h1>
      <br></br>
      <Carousel className="">
      {annoucements.map(item => (
        <div>
        <h1 className="text-2xl font-montserrat font-bold justify-end ml-20 mr-20 mb-5 mt-5">{item.heading}</h1>
        <p className="text-xl font-palanquin justify-end ml-20 mr-20 mb-20">{item.quote}</p>
        </div>
      ))}
    </Carousel>
    </section>
    

  )
}
