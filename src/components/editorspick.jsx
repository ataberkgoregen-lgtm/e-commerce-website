import { useSelector } from "react-redux";

export default function EditorsPick() {
  const editors = useSelector((store) => store.editorsPick);

  return (
    <div className=" pt-[80px] pb-20">
      <div className="flex flex-col m-auto ">
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className="text-2xl font-bold mb-[15px]">{editors.heading}</h3>
          <p className="text-text-secondary font-medium text-sm">
            {editors.subheading}
          </p>
        </div>

        <div className="flex xl:flex-row flex-col gap-8 justify-center items-center ">
          <div className="relative xl:w-[510px] xl:h-[500px] w-fit ">
            <img
              src={editors.categories[0].image}
              alt=""
              className="w-full h-full xl:object-cover "
            />
            <button className="cursor-pointer absolute bottom-6 left-8 bg-white text-black px-16 py-3  z-10 text-base font-bold">
              {editors.categories[0].label}
            </button>
          </div>

          <div className="relative xl:w-[250px] xl:h-[500px] w-fit">
            <img
              src={editors.categories[1].image}
              alt=""
              className="w-full h-full xl:object-cover"
            />
            <button className="cursor-pointer absolute bottom-6 left-5 bg-white text-black px-8 py-3 z-10 text-base font-bold">
              {editors.categories[1].label}
            </button>
          </div>

          <div className="flex flex-col gap-4 flex-wrap">
            <div className="relative xl:w-[239px] xl:h-[242px] ">
              <img src={editors.categories[2].image} alt="" />
              <button className="cursor-pointer absolute bottom-6 left-4 bg-white text-black px-7 py-3  z-10 text-base font-bold">
                {editors.categories[2].label}
              </button>
            </div>
            <div className="relative xl:w-[239px] xl:h-[242px]">
              <img src={editors.categories[3].image} alt="" />
              <button className="cursor-pointer absolute bottom-6 left-4 bg-white text-black px-10 py-3  z-10 text-base font-bold flex ">
                {editors.categories[3].label}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
