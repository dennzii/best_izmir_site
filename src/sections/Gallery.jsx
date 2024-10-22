import { Carousel } from "@material-tailwind/react";
import { gallery_photos } from "../constants"

export const Gallery = () => {
  return (
    <section className="w-full flex flex-col justify-center min-h-80 mt-10 mb-10 max-w-full ">
      <h1 className="text-4xl font-montserrat flex justify-center  font-bold ">Gallery</h1>
      <br></br>
      <Carousel className="rounded-xl ml-20 bg-blue-200 h-96 w-6/12 justify-self-center">
      {gallery_photos.map(item => (
        <img src={item.path}
        alt="image 1"
        className=" object-cover h-full w-full object-cover ">
        
        </img>
      ))}
    </Carousel>
    </section>
  )
}
