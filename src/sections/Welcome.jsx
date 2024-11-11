import { Button } from "../Components/Button"
import izmir_foto from "../assets/izmir_foto.png"
import Counter from "../Components/Counter"

export const Welcome = () => {
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-full  max-w-full ">
      <div className="relative xl:w-2/5 ml-20 flex flex-col justify-center items-start w-full max-xl:px-10 pt-28">
        <p className="text-xl font-palanquin text-slate-gray">A Summer Course</p>
        <h1 className="font-palanquin mt-8 text-4xl text-slate-950 font-bold">
        <span>We are BEST İzmir</span>
        <br/>
        <span>Join Us!</span>
        </h1>
        <p className="text-xl font-palanquin text-slate-gray mb-10 mt-14">Discover your potential energy.</p>
        <Counter  targetNumber={3000} duration={3000}></Counter>
        <Button className="" label={"Apply Now!"}></Button>
      </div>
      <div className="relative flex-1 flex  justify-center items-center min-h-screen ">
        <img src={izmir_foto}>
        </img>
      </div>
    </section>
  )
}
