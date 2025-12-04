
import izmir_foto from "../assets/izmir_foto.png";

export const Welcome = () => {

  return (
    <section
      id="home"
      className="bg-slate-600 relative min-h-full max-w-full"
    >
      <div className="relative justify-center items-center min-w-fit min-h-screen">
        <img
          src={izmir_foto}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      <div className="absolute inset-0 flex flex-col left-5 mt-48">
        <h1 className="text-slate-300 text-8xl md:text-6xl font-bold z-10">Boyoz</h1>
        <h1 className="text-slate-400 text-8xl md:text-6xl font-bold z-10">Gevrek</h1>
        <h1 className="text-slate-500 text-8xl md:text-6xl font-bold z-10">Çay</h1>
      </div>
    </section>
  );
};

export default Welcome;
