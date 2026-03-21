import { useState } from "react";
import img1 from "../photos/shop-hero-1-product-slide-1.svg";
import { useSelector } from "react-redux";
const slides = [img1, img1];

export default function HeroSlider() {
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
    <div className="relative w-full  mx-auto overflow-hidden ">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <img key={index} src={src} className="w-full flex-shrink-0" />
        ))}
      </div>

      <div className="absolute left-50 top-1/2 -translate-y-1/2 text-white">
        <div>
          <p className="text-base font-semibold pb-[35px]">
            {activeSlide.season}
          </p>

          <p className="text-6xl font-semibold pb-[35px]">
            {activeSlide.title}
          </p>

          <p className="pb-[35px] w-90 text-xl">{activeSlide.description}</p>

          <button className="bg-bg-green px-10 py-3.5 rounded-md text-2xl cursor-pointer font-semibold">
            {activeSlide.cta.label}
          </button>
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[100px] text-white px-3 pl-[30px]  font-light"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[100px] text-white px-3 pr-[30px]  font-light"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex pb-6 gap-0.5">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-13 h-2 cursor-pointer  ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
