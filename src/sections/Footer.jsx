import DisplayIcons from "../Components/DisplayIcons"
import AngryBird from "../assets/angry_bird.png"

export const Footer = () => {

  

  return (
    <section>
    <div className="py-2 px-2 ">
      <img src={AngryBird} className="w-36 h-36 "></img>
    </div>
     
      <p className="absolute bottom-0 left-0 ml-5
        mb-5 font-montserrat text-slate-gray">
        All rights reserved 2008 BEST İzmir.
      </p>
      <div className="">
          <DisplayIcons className=""></DisplayIcons>
      </div>
      
    </section>
  )
}
