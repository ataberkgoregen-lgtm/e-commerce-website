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
} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Navbar() {
  const navbar = useSelector((store) => store.contact);
  const navLink = useSelector((store) => store.navLinks);
  const [open, setOpen] = useState(false);

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
            className={`transition-all duration-300 order-3 md:order-2 w-full md:w-auto md:max-h-full md:opacity-100 ${
              open
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-[17px] text-text-secondary sm:text-xl text-sm font-semibold h-fit w-full md:w-auto text-center order-3 md:order-2 ">
              {navLink.map((item) => {
                if (item.label === "Shop") {
                  return (
                    <el-dropdown class="hidden md:inline-block ">
                      <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 sm:text-xl text-sm  text-text-secondary inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                        {item.label}
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          data-slot="icon"
                          aria-hidden="true"
                          className="-mr-1 size-5 text-gray-400 font-bold"
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </button>

                      <el-menu
                        anchor="bottom end"
                        popover
                        class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <div class="py-1">
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                          >
                            Men
                          </a>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                          >
                            Women
                          </a>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                          >
                            Kid
                          </a>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                          >
                            Accesories
                          </a>
                        </div>
                      </el-menu>
                    </el-dropdown>
                  );
                }
                return <a href={item.path}>{item.label}</a>;
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
