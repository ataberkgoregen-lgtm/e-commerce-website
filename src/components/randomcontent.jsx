import { useSelector } from "react-redux";
import asian from "../photos/asian-woman-man-with-winter-clothes 1.svg";

export default function RandomContent() {
  const info = useSelector((store) => store.heroSlides[2]);
  return (
    <div className="flex flex-row w-full ">
      <div className="w-[682px] ">
        <img src={asian} alt="" className="" />
      </div>
      <div className="w-2/3 flex flex-col justify-center  ml-[110px]">
        <h5 className="text-text-light text-base font-bold mb-7.5">
          {info.season}
        </h5>
        <h2 className="text-[40px] font-bold mb-7.5">{info.title}</h2>
        <h4 className="text-text-secondary text-xl font-normal mb-7.5">
          {info.description}
        </h4>
        <div className="flex flex-row gap-2.5">
          {info.cta.map((item, index) => {
            return index === 0 ? (
              <div className="flex px-10 py-4 bg-bg-green text-white rounded-md">
                <a href={item.path} className="text-sm">
                  {item.label}
                </a>
              </div>
            ) : (
              <div className="flex border-2 px-10 py-4 text-bg-green rounded-md">
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
