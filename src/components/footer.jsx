import { useSelector } from "react-redux";

export default function Footer() {
  const footer = useSelector((item) => item.reducer.footer);
  return (
    <div className="flex flex-row justify-between flex-wrap mb-14 gap-8">
      {footer.columns.map((item) => {
        return (
          <div>
            <h5 className="pb-5 font-bold text-base text-text-primary">
              {item.heading}
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm text-text-secondary">
              {item.links.map((ele) => {
                return <li>{ele.label}</li>;
              })}
            </ul>
          </div>
        );
      })}
      <div className="md:pt-0 pt-5">
        <p className="text-text-primary font-bold">
          {footer.newsletter.heading}
        </p>
        <div className="border-1 border-[#E6E6E6] rounded-sm flex flex-row flex-nowrap ">
          {" "}
          <input
            type="text"
            placeholder={footer.newsletter.placeholder}
            className="text-center font-normal rounded-l-sm w-full bg-[#F9F9F9]"
          />
          <button className="bg-primary px-4 py-3.5 xs:px-1 rounded-r-xs  border-l-1 border-[#E6E6E6]  text-white cursor-pointer font-normal">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
