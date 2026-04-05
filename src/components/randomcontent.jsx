import { useSelector } from "react-redux";
import asian from "../photos/asian-woman-man-with-winter-clothes 1.svg";

export default function RandomContent() {
  const info = useSelector((store) => store.reducer.heroSlides[2]);
  return (
    <div className="flex flex-row w-full xl:flex-nowrap flex-wrap justify-center items-center mt-[120px] xl:mt-0">
      <div className="w-full xl:w-auto md:min-w-[700px] min-w-[260px] m-auto xl:order-1 order-2 m-0 items-center justify-center flex">
        <img src={asian} alt="" className="" />
      </div>
      <div className="w-full flex flex-col xl:text-left text-center justify-center ml-0 2xl:ml-[60px] xl:order-2 order-1">
        <h5 className="text-text-light text-base font-bold mb-7.5">
          {info.season}
        </h5>
        <h2 className="text-[40px] font-bold mb-7.5">{info.title}</h2>
        <h4 className="text-text-secondary text-xl font-normal mb-7.5">
          {info.description}
        </h4>
        <div className="flex xl:flex-row flex-col gap-2.5 xl:justify-start justify-center text-center items-center ">
          {info.cta.map((item, index) => {
            return index === 0 ? (
              <div className="flex px-10 py-4 bg-bg-green text-white rounded-md min-w-[200px] text-center justify-center">
                <a href={item.path} className="text-sm">
                  {item.label}
                </a>
              </div>
            ) : (
              <div className="flex border-2 px-10 py-4 text-bg-green rounded-md w-[200px] justify-center">
                <a href={item.path} className="text-sm">
                  {item.label}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
