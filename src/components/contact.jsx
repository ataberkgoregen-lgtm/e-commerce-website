import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Contact() {
  const history = useHistory();
  return (
    <div className="bg-[url(/background.svg)] bg-cover bg-center h-screen text-white">
      <div className="w-3/5 flex flex-row m-auto justify-center items-center h-screen">
        <div className="w-1/2 flex flex-col m-auto  gap-9 max-w-100">
          <h2 className="text-4xl font-bold">CONTACT US</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <button
            className="bg-primary px-10 w-fit rounded font-bold py-3.5 cursor-pointer"
            onClick={() => history.push("/")}
          >
            CONTACT US
          </button>
        </div>
        <div className="w-1/2 flex flex-col gap-20">
          <div className="flex flex-row gap-20">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Paris</h3>
              <h4 className="text-[20px]">1901 Thorn ridge Cir. </h4>
              <div className="border-1 border-primary w-1/3"></div>
              <ul className="flex flex-col gap-4 font-bold">
                <li>75000 Paris</li>
                <li>Phone ; +451 215 215 </li>
                <li>Fax : +451 215 215</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">New York</h3>
              <h4 className="text-[20px]">1901 Thorn ridge Cir. </h4>
              <div className="border-1 border-primary w-1/3"></div>
              <ul className="flex flex-col gap-4 font-bold">
                <li>75000 Paris</li>
                <li>Phone ; +451 215 215 </li>
                <li>Fax : +451 215 215</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-20">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Berlin</h3>
              <h4 className="text-[20px]">1901 Thorn ridge Cir. </h4>
              <div className="border-1 border-primary w-1/3"></div>
              <ul className="flex flex-col gap-4 font-bold">
                <li>75000 Paris</li>
                <li>Phone ; +451 215 215 </li>
                <li>Fax : +451 215 215</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">London</h3>
              <h4 className="text-[20px]">1901 Thorn ridge Cir. </h4>
              <div className="border-1 border-primary w-1/3"></div>
              <ul className="flex flex-col gap-4 font-bold">
                <li>75000 Paris</li>
                <li>Phone ; +451 215 215 </li>
                <li>Fax : +451 215 215</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
