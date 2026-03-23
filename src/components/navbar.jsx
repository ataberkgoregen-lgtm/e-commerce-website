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
} from "lucide-react";
import { useSelector } from "react-redux";

export function Navbar() {
  const navbar = useSelector((store) => store.contact);
  const navLink = useSelector((store) => store.navLinks);

  return (
    <nav>
      <div className="h-[58px] bg-topbar-bg text-white flex flex-row font-bold justify-between items-center">
        <div className="flex flex-row font-bold gap-7 justify-center  pl-9">
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
      <div className="h-[58px] flex flex-row justify-between mt-3 mb-2 flex-wrap">
        <div className="flex flex-row gap-[119px] items-center">
          <h3 className="font-bold pl-9.5 text-2xl">Bandage</h3>
          <div className="flex flex-row gap-[15px] text-text-secondary text-sm font-semibold flex-wrap">
            {navLink.map((item) => {
              if (item.label === "Shop") {
                return (
                  <el-dropdown class="inline-block">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 text-sm  text-text-secondary inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                      {item.label}
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        class="-mr-1 size-5 text-gray-400"
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

        <div className="flex flex-row gap-7.5 pr-7.5 items-center text-primary flex-wrap">
          <div className="flex flex-row gap-1.5 font-medium">
            <User />
            <a href="">Login</a> / <a href="">Register</a>
          </div>

          <Search />
          <ShoppingCart />
          <Heart />
        </div>
      </div>
    </nav>
  );
}
