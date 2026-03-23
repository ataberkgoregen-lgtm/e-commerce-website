// height: 716
import { useState } from "react";
import img1 from "../photos/shop-hero-2-png-picture-1.svg";
import { useSelector } from "react-redux";
const slides = [img1, img1];

export default function HeroSlider2() {
  const [current, setCurrent] = useState(0);
  const heroSlide = useSelector((store) => store.heroSlides);

  const activeSlide = heroSlide[current];
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden h-[716px] bg-secondary sm:h-fit">
      <div
        className="flex transition-transform duration-500 w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroSlide.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative bg-secondary flex items-center xl:flex-nowrap flex-wrap justify-center "
          >
            {/* Yazı — sol taraf */}
            <div className="md:ml-[5%] text-white z-10 xl:pl-[8%] w-1/2 ">
              <p className="text-base font-semibold pb-[35px]">
                {slide.season}
              </p>
              <p className="text-6xl font-semibold pb-[35px] w-90">
                {slide.title}
              </p>
              <p className="pb-[35px] w-120 text-xl">{slide.description}</p>
              <div className="flex flex-row items-center gap-8 font-bold text-2xl">
                {slide.price && <p>${slide.price}</p>}
                <button className="bg-bg-green px-10 py-3.5 rounded-md text-2xl cursor-pointer font-semibold">
                  {slide.cta.label}
                </button>
              </div>
            </div>

            {/* Resim — sağ taraf: sadece bu slide'ın resmi */}
            <div className="w-full md:w-1/2 h-[250px] md:h-full flex items-end justify-center overflow-hidden ">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-auto object-contain object-bottom"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[100px] text-white px-3 pl-[30px] font-light"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[100px] text-white px-3 pr-[30px] font-light"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex pb-6 gap-0.5">
        {heroSlide.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-13 h-2 cursor-pointer ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
