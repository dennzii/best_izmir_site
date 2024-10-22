
import foto1 from "../assets/about_foto1.png"
import foto2 from "../assets/about_foto2.png"
import foto3 from "../assets/about_foto3.png"
import foto4 from "../assets/about_foto4.png"

export const AboutUsExtended = () => {
    return (
      <section className="relative flex flex-col items-center p-10">
        {/* İçerik */}

        <div className=""></div>

        <div className="relative z-20 text-center max-w-4xl">
          <h1 className="text-4xl font-palanquin font-bold mt-10">About Us</h1>
          <p className="text-xl mx-auto mt-5 px-6 lg:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, scelerisque et consequat eu, facilisis in neque. Maecenas venenatis molestie lobortis. Cras ut arcu quis arcu auctor malesuada. Morbi finibus eget lorem at rhoncus. Pellentesque viverra rhoncus nunc et molestie. Duis varius, leo in euismod dignissim, risus massa pharetra diam, porttitor interdum velit sapien et turpis. Duis sodales hendrerit ex, a dignissim nisi sagittis ac. Fusce varius orci consectetur ante facilisis, id vestibulum enim convallis.
          </p>
        </div>

        {/* Resimler */}
        <div className="relative w-full max-w-4xl">
          {/* Üstteki Resimler */}
          <img src={foto1} className="absolute w-96 h-auto top-0 left-0 transform rotate-12"></img>
          <img src={foto2} className="absolute w-96 h-auto top-0 right-0 transform rotate-6"></img>
          
          {/* Alttaki Resimler */}
          <img src={foto3} className="absolute w-96 h-auto bottom-0 pb-32 left-20 transform rotate-3"></img>
          <img src={foto4} className="absolute w-80 h-auto bottom-0 pb-48 right-20 transform rotate-[-5deg] z-10"></img>
        </div>
      </section>
    )
}
