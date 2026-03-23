import { Children } from "react";
import EditorsPick from "./editorspick";
import BestSeller from "./bestseller";
import HeroSlider from "./heroslider";
import HeroSlider2 from "./heroslider2";
import RandomContent from "./randomcontent";
import Blogs from "./blogs";
import SocialMedias from "./socialmeadias";
import Footer from "./footer";
export default function Homepage() {
  return (
    <div className="w-full ">
      <HeroSlider></HeroSlider>
      <div className="w-full bg-bg-light ">
        <div className="w-3/5 m-auto">
          <EditorsPick></EditorsPick>
        </div>
      </div>
      <div className="w-3/5 bg-white m-auto">
        <BestSeller></BestSeller>
      </div>
      <HeroSlider2></HeroSlider2>
      <div className="w-3/5 m-auto">
        <RandomContent></RandomContent>
      </div>
      <div className="w-3/5 m-auto">
        <Blogs></Blogs>
      </div>
      <div className="w-full  bg-bg-light">
        <div className="w-3/5 m-auto">
          <SocialMedias />
        </div>
      </div>
      <div className="w-full m-auto">
        <div className="w-3/5 m-auto">
          <Footer />
        </div>
        <div className="bg-bg-light text-center py-6 font-bold text-text-secondary m-auto">
          <div className="sm:w-150 w-60 m-auto">
            <h6 className="">Made With Love By Finland All Right Reserved </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
