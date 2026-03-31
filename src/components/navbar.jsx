import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  User,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Navbar() {
  const navbar = useSelector((store) => store.contact);
  const navLink = useSelector((store) => store.navLinks);
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav>
      <div className="h-[58px] bg-topbar-bg text-white lg:flex flex-row hidden font-bold justify-between items-center">
        <div className="flex flex-row font-bold gap-7 justify-center pl-9">
          <div className="flex flex-row font-bold gap-2">
            <Phone />
            {navbar.phone}
          </div>

          <div className="flex flex-row font-bold gap-2">
            <Mail />
            {navbar.email}
          </div>
        </div>
        <div>{navbar.promo}</div>
        <div className="flex flex-row gap-3 pr-9">
          Follow Us :
          <a href="https://www.instagram.com/">
            <Instagram />
          </a>
          <a href="https://www.youtube.com/">
            <Youtube />
          </a>
          <a href="https://www.facebook.com/">
            <Facebook />
          </a>
          <a href="https://www.twitter.com/">
            <Twitter />
          </a>
        </div>
      </div>
      <div className="md:h-[58px]  h-fit flex flex-col md:flex-row justify-between mt-3 mb-2 ">
        <div className="flex flex-row flex-wrap md:flex-nowrap xl:gap-[119px] items-center  w-full justify-between">
          <h3 className="font-bold pl-9.5 text-2xl order-1">Bandage</h3>
          <div className="flex gap-7.5 pr-7.5 items-center text-text-primary md:text-primary flex-row w-auto  justify-end order-2 md:order-3 shrink-0 ">
            <div className="md:flex flex-row gap-1.5 font-medium hidden ">
              <User />
              <a href="">Login</a> / <a href="">Register</a>
            </div>

            <Search />
            <ShoppingCart />
            <Heart className="hidden md:flex" />
            <Menu
              className="flex md:hidden cursor-pointer "
              onClick={() => {
                return setOpen(!open);
              }}
            />
          </div>
          <div
            className={`transition-all duration-300 order-3 md:order-2 w-full md:w-auto md:max-h-full md:opacity-100 md:overflow-visible ${
              open
                ? "max-h-96 opacity-100 overflow-visible"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-[17px] text-text-secondary sm:text-xl text-sm font-semibold h-fit w-full md:w-auto text-center order-3 md:order-2 cursor-pointer">
              {navLink.map((item) => {
                if (item.label === "Shop") {
                  return (
                    <div
                      key={item.label}
                      className="relative flex items-center justify-center"
                    >
                      <a
                        href="/shop"
                        className="text-text-secondary sm:text-xl text-sm"
                      >
                        {item.label}
                      </a>
                      <button
                        className="ml-1 cursor-pointer"
                        onClick={() => setShopOpen(!shopOpen)}
                      >
                        <ChevronDown className="size-4 text-gray-400" />
                      </button>

                      {shopOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg z-50">
                          <div className="py-1">
                            <a
                              href="/shop/men"
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                              Men
                            </a>
                            <a
                              href="/shop/women"
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                              Women
                            </a>
                            <a
                              href="/shop/kids"
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                              Kid
                            </a>
                            <a
                              href="/shop/accessories"
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                              Accessories
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a key={item.label} href={item.path}>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
