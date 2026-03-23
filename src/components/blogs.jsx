import { useSelector } from "react-redux";
import { AlarmClock } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { ChevronRight } from "lucide-react";
export default function Blogs() {
  const blogs = useSelector((item) => item.blogPosts.list);

  return (
    <div className="pt-[112px] text-center pb-[112px] ">
      <div className="flex flex-col gap-2.5 mb-20">
        <p className="text-primary text-sm font-bold">Practice Advice</p>
        <h3 className="font-bold text-[40px] text-text-primary">
          Featured Posts
        </h3>
        <p className="font-normal text-sm text-text-secondary">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="flex flex-row gap-2.5 lg:flex-nowrap flex-wrap justify-center">
        {blogs.map((item) => {
          return (
            <div className="flex flex-col shadow-md pb-8.5 ">
              <div className="relative">
                <img src={item.image} className="w-full" alt="" />
                <p className="absolute top-5 left-5 bg-[#E74040] text-white text-sm px-2.5 font-medium rounded-xs">
                  NEW{" "}
                </p>
              </div>
              <div className="flex flex-row gap-5 pt-5 text-xs pl-6 pt-6 ">
                {item.tags.map((link, index) => {
                  if (index === 0) {
                    return (
                      <a href="" className="text-[#8EC2F2]">
                        {link}
                      </a>
                    );
                  } else {
                    return (
                      <a href="" className="text-text-secondary">
                        {link}
                      </a>
                    );
                  }
                })}
              </div>

              <div className="flex pt-2.5 text-left pl-6 text-xl">
                {item.title}
              </div>

              <div className="flex pt-2.5 w-76 text-sm pl-6 text-left text-text-secondary font-medium">
                {item.excerpt}
              </div>

              <div className="flex pl-6 pt-6 text-xs text-text-secondary font-normal justify-between">
                <div className="flex gap-1">
                  <span className="text-primary text-sm">
                    <AlarmClock size={15} />
                  </span>{" "}
                  {item.date}
                </div>

                <div className="flex pr-6 gap-1">
                  <span className="text-secondary">
                    {" "}
                    <ChartNoAxesCombined size={15} />{" "}
                  </span>
                  {item.comments} comments
                </div>
              </div>

              <div className="flex pl-6 pt-6">
                <a href="" className="text-sm font-bold text-text-secondary">
                  Learn More
                </a>{" "}
                <span className="text-primary ">
                  <ChevronRight strokeWidth={1} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
