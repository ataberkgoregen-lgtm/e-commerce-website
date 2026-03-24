import { useState } from "react";
import img1 from "../photos/shop-hero-1-product-slide-1.svg";
import { useSelector } from "react-redux";

const slides = [img1, img1];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const heroSlide = useSelector((store) => store.heroSlides);
  const activeSlide = heroSlide[current];

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* ── Slides ── */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              className="w-full object-cover object-center h-[500px] sm:h-[600px] md:h-full"
            />
          </div>
        ))}
      </div>

      {/* ── Yazı Overlay ── */}
      <div className="absolute inset-0 flex items-center justify-center sm:justify-start sm:pl-16 md:pl-40 pointer-events-none">
        <div className="text-white text-center sm:text-left px-10 sm:px-0 max-w-[90%] sm:max-w-md pointer-events-auto">
          <p className="text-sm font-semibold mb-6 tracking-widest uppercase">
            {activeSlide.season}
          </p>

          <p className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-11 leading-tight">
            {activeSlide.title}
          </p>

          <p className="text-base sm:text-xl mb-8 opacity-90">
            {activeSlide.description}
          </p>

          <button className="bg-bg-green px-8 py-3 rounded-md text-lg sm:text-2xl cursor-pointer font-semibold">
            {activeSlide.cta.label}
          </button>
        </div>
      </div>

      {/* ── Sol Ok ── */}
      <button
        onClick={prevSlide}
        className="absolute left-8 sm:left-3 top-1/2 -translate-y-1/2 text-[100px] sm:text-[100px] text-white font-light leading-none"
      >
        ‹
      </button>

      {/* ── Sağ Ok ── */}
      <button
        onClick={nextSlide}
        className="absolute right-8 sm:right-3 top-1/2 -translate-y-1/2 text-[100px] sm:text-[100px] text-white font-light leading-none"
      >
        ›
      </button>

      {/* ── Dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-12 h-1.5 cursor-pointer transition-colors ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
