import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import useProducts from "../hooks/useProducts";
import { ChevronRight } from "lucide-react";

export default function Team() {
  return (
    <div className="w-full">
      <div className="w-3/5  m-auto my-6 mb-15">
        <div className="flex text-center items-center flex-col mt-6 flex-wrap justify-center gap-10 pt-25">
          <h5 className="text-text-secondary font-bold text-base">
            WHAT WE DO
          </h5>
          <h1 className="text-text-primary text-4xl md:text-6xl font-bold">
            Innovation tailored for you
          </h1>
          <div className="flex flex-row flex-wrap md:flex-nowrap xl:gap-[119px] items-center w-full justify-center">
            {" "}
            <div className="flex gap-2 items-center text-text-primary md:text-primary flex-row w-auto justify-end order-2 md:order-3 shrink-0 px-7">
              {" "}
              <a href="/" className="text-text-primary font-bold">
                {" "}
                Home{" "}
              </a>{" "}
              <p>
                {" "}
                <ChevronRight className="text-text-light " />{" "}
              </p>{" "}
              <a href="" className="text-text-light font-thin">
                {" "}
                Team{" "}
              </a>{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full md:h-[530px]">
        {/* Sol — büyük resim */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full md:pr-2">
          <img
            src="/unsplash_left.svg"
            alt=""
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Sağ — 2x2 flex */}
        <div className="w-full md:w-1/2 md:pl-2 flex flex-wrap gap-2">
          <img
            src="/unsplash_r1.svg"
            alt=""
            className="w-[calc(50%-4px)] h-[150px] md:h-[265px] object-cover block"
          />
          <img
            src="/unsplash_r2.svg"
            alt=""
            className="w-[calc(50%-4px)] h-[150px] md:h-[265px] object-cover block"
          />
          <img
            src="/unsplash_rb3.svg"
            alt=""
            className="w-[calc(50%-4px)] h-[150px] md:h-[265px] object-cover block"
          />
          <img
            src="/unsplash_rb4.svg"
            alt=""
            className="w-[calc(50%-4px)] h-[150px] md:h-[265px] object-cover block"
          />
        </div>
      </div>

      <div className="flex flex-col w-3/5 m-auto">
        <div className="flex flex-col justify-center items-center text-center max-w-150 m-auto gap-2.5 my-[112px]">
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
        </div>
        <div className="flex flex-row gap-4 mb-[120px] flex-wrap md:flex-nowrap">
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-1.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary ">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-2.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-3.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-[120px] flex-wrap md:flex-nowrap">
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-1.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary ">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-2.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-3.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-[120px] flex-wrap md:flex-nowrap">
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-1.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary ">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-2.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="w-full flex flex-col text-center gap-2">
            <img src="/team-1-user-3.svg" alt="" />
            <h5 className="text-base font-bold mt-7">Username</h5>
            <h6>Profession</h6>
            <div className="flex flex-row gap-3 justify-center text-primary">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 flex flex-col justify-center m-auto text-center gap-8 mb-20 items-center">
        <h2 className="text-text-primary text-4xl font-bold">
          Start your 14 days free trial
        </h2>
        <p className="text-text-secondary">
          Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met
          sent. RELIT official consequent.
        </p>
        <button className="px-8 py-4 text-white bg-primary rounded-md cursor-pointer w-fit justify-center ">
          Try it free now
        </button>
        <div className="flex flex-row justify-center gap-3">
          <Twitter />
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </div>
  );
}
