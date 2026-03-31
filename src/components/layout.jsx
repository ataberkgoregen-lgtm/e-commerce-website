import { useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";
import SocialMedias from "./socialmeadias";
export default function Layout({ children }) {
  const location = useLocation();

  const isShopPage = location.pathname.includes("shop");

  return (
    <>
      <Navbar />

      <main>{children}</main>

      {/* Footer Aşağıda */}
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
    </>
  );
}
