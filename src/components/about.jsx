import { Instagram, Facebook, Twitter } from "lucide-react";

export default function About() {
  return (
    <div>
      <div className="w-3/5  m-auto my-6 ">
        <div className=" flex items-center flex-row mt-6 flex-wrap">
          <div className="flex flex-col md:w-1/2 h-full gap-10 ">
            <h5 className="text-base font-bold">ABOUT COMPANY</h5>
            <h1 className="md:text-6xl text-4xl font-bold">ABOUT US</h1>
            <p className="text-lg text-text-secondary md:w-85">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="bg-primary px-10 text-white py-4 cursor-pointer rounded-md w-fit font-bold">
              Get Quote Now
            </button>
          </div>
          <div className="md:w-1/2  ">
            <img src="/technology 1.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-row text-center sm:text-start justify-between items-center flex-wrap">
          <div className="flex flex-col gap-5 md:w-1/3 ">
            <p className="text-danger">Problems trying</p>
            <h3 className="font-bold md:w-70">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <div className=" md:w-1/2 flex justify-center items-center">
            <p className="text-sm text-text-secondary">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center md:justify-between my-20 flex-wrap gap-10 ">
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-6xl font-bold">15K</h1>
            <h5 className="text-base text-text-secondary font-bold">
              Happy Customers
            </h5>
          </div>
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-6xl font-bold">150K</h1>
            <h5 className="text-base text-text-secondary font-bold">
              Monthly Visitors
            </h5>
          </div>
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-6xl font-bold ">15</h1>
            <h5 className="text-base text-text-secondary font-bold">
              Countries Worldwide
            </h5>
          </div>
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-6xl font-bold">100+</h1>
            <h5 className="text-base text-text-secondary font-bold">
              Top Partners
            </h5>
          </div>
        </div>
        <div className="w-full h-fit md:my-[112px] m-0 ">
          <iframe
            src="https://player.vimeo.com/video/1149424875"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            className="w-full rounded-3xl h-[509px]"
          ></iframe>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center text-center max-w-150 m-auto gap-2.5 my-[112px]">
            <h2 className="text-4xl font-bold">Meet Our Team</h2>
            <p className="text-sm text-text-secondary font-medium">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics{" "}
            </p>
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
      </div>
      <div className="w-full bg-bg-light">
        <div className="w-3/5 m-auto flex flex-col justify-center gap-3 text-center pt-20">
          <h2 className="mb-7 text-text-primary font-bold text-4xl">
            Big Companies Are Here
          </h2>
          <p className="text-text-secondary text-sm">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="w-3/5 mx-auto px-8 py-12 flex flex-row justify-around flex-wrap gap-10 pb-20 ">
          <img src="/Vector.svg" alt="" />
          <img src="/Vector (1).svg" alt="" />
          <img src="/Vector (2).svg" alt="" />
          <img src="/Vector (3).svg" alt="" />
          <img src="/Vector (4).svg" alt="" />
          <img src="/Vector (5).svg" alt="" />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between bg-primary text-white flex-wrap gap-10 md:flex-nowrap pt-10">
        <div className="w-full flex justify-center items-center px-5">
          <div className="flex flex-col gap-10 items-start">
            <h5 className="font-bold">WORK WITH US</h5>
            <h2 className="text-4xl font-bold">Now Let’s grow Yours</h2>
            <p className="md:w-120 text-sm">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="border-1 border-white px-5 py-3 rounded-md cursor-pointer">
              Button{" "}
            </button>
          </div>
        </div>
        <div className=" overflow-hidden">
          <img src="/unsplash_vjMgqUkS8q8.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
