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
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../store/index";
import MD5 from "crypto-js/md5";
import { toast } from "react-toastify";

import { addToCart, removeToCart, removeToFav } from "../store";
import { Link } from "react-router-dom";
export function Navbar() {
  const navbar = useSelector((store) => store.reducer.contact);
  const navLink = useSelector((store) => store.reducer.navLinks);
  const { data: categories } = useCategories();

  const cart = useSelector((store) => store.cart);
  const fav = useSelector((store) => store.cart.fav);
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.client.user);

  console.log(fav);
  const gravatarUrl = user.email
    ? `https://www.gravatar.com/avatar/${MD5(user.email.trim().toLowerCase())}?d=identicon`
    : null;

  const hideCampaigne =
    location.pathname === "/about" || location.pathname === "/team";

  function setLog() {
    dispatch(fetchLogout());
    toast.success("Başarıyla çıkış yaptınız");
    history.push("/");
  }

  return (
    <nav>
      {!hideCampaigne && (
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
      )}

      <div className="md:h-[58px] h-fit flex flex-col md:flex-row justify-between mt-3 mb-2 ">
        <div className="flex flex-row flex-wrap md:flex-nowrap xl:gap-[119px] items-center  w-full justify-between">
          <h3 className="font-bold pl-9.5 text-2xl order-1">Bandage</h3>
          <div className="flex gap-7.5 pr-7.5 items-center text-text-primary md:text-primary md:flex-row w-auto  justify-end order-2 md:order-3 flex-col shrink-0 ">
            <div className="md:flex flex-row gap-1.5 font-medium flex justify-center items-center">
              {user.token ? (
                // ✅ Giriş yapıldıysa Dropdown Yapısı
                <div className="relative group flex items-center gap-2 cursor-pointer py-2">
                  <img
                    src={gravatarUrl}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-bold text-sm sm:text-base">
                    {user.name}
                  </span>
                  <ChevronDown
                    size={14}
                    className="text-gray-500 transition-transform group-hover:rotate-180"
                  />

                  {/* --- AÇILIR MENÜ (DROPDOWN) --- */}
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
                    <div className="py-2">
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 no-underline font-semibold"
                      >
                        Siparişlerim
                      </Link>
                    </div>
                    <div className="h-[1px] bg-gray-100 my-1"></div>
                    <button
                      onClick={setLog}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-bold border-none bg-transparent cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                // ✅ Giriş yapılmadıysa (Aynı kalıyor)
                <>
                  {!hideCampaigne && <User className="hidden md:block" />}
                  <Link
                    to={`/login?redirect=${window.location.pathname}`}
                    className="font-bold cursor-pointer no-underline text-inherit"
                  >
                    Login
                  </Link>
                  {hideCampaigne && (
                    <div className="text-white bg-primary px-7 py-3 rounded-md flex flex-row items-center cursor-pointer ml-4">
                      Become a member <ArrowRight className="ml-2" />
                    </div>
                  )}
                  {!hideCampaigne && (
                    <div className="text-sm sm:text-base">
                      /{" "}
                      <Link
                        to="/register"
                        className="no-underline text-inherit"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>

            {!hideCampaigne && (
              <div className="flex flex-row gap-1 items-center relative flex-wrap">
                {/* Arama Bileşeni */}
                <Search />
                {/* Sepet Alanı */}
                <div className="relative flex flex-row gap-1 flex-wrap justify-center items-center">
                  <a
                    href="/cart
                  "
                  >
                    <ShoppingCart />
                  </a>{" "}
                  <span>
                    {cart.cart.reduce((acc, item) => {
                      return acc + item.count;
                    }, 0)}
                  </span>
                  {/* Sepet İkonu ve Tetikleyici */}
                  <div
                    className="cursor-pointer"
                    onClick={() => setCartOpen(!cartOpen)}
                  >
                    <ChevronDown className="size-4 text-gray-400" />
                  </div>
                  <Menu
                    className="flex md:hidden cursor-pointer "
                    onClick={() => {
                      return setOpen(!open);
                    }}
                  />
                  {/* Açılır Sepet Menüsü (Dropdown) */}
                  {cartOpen && (
                    <div className="absolute top-full right-0 mt-3 w-80 rounded-lg bg-white shadow-2xl z-50 border border-gray-100 p-4">
                      <div className="flex flex-col">
                        <h4 className="font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100 text-sm tracking-tight">
                          Sepetim ({" "}
                          {cart.cart.reduce((acc, item) => {
                            return acc + item.count;
                          }, 0)}{" "}
                          Ürün)
                        </h4>

                        <div className="flex flex-col space-y-3 max-h-64 overflow-y-auto pr-1">
                          {cart.cart.length > 0 ? (
                            cart.cart.map((item, index) => (
                              <div
                                key={item.product?.id || index}
                                className="flex items-start gap-3 py-2 px-1 border-b border-gray-50 last:border-none"
                              >
                                {/* Ürün Görseli */}
                                <img
                                  src={item.product?.images?.[0]?.url}
                                  className="w-10 h-12 object-cover rounded shadow-sm flex-shrink-0"
                                  alt={item.product?.name}
                                />

                                {/* Ürün Detayları */}
                                <div className="flex flex-col flex-1 min-w-0">
                                  <span className="truncate text-xs font-semibold text-gray-800">
                                    {item.product?.name}
                                  </span>
                                  <span className="text-[10px] text-gray-500">
                                    Adet: {item.count}
                                  </span>
                                  <span className="text-xs font-bold text-blue-600 mt-1">
                                    {item.product?.price?.toFixed(2)} TL
                                  </span>
                                  <div className="flex flex-row gap-4">
                                    <button
                                      className="bg-primary px-3 py-0.2 rounded-md text-white"
                                      onClick={() =>
                                        dispatch(addToCart(item.product))
                                      }
                                    >
                                      +
                                    </button>
                                    <button
                                      className="bg-primary px-3 py-0.2 rounded-md text-white"
                                      onClick={() =>
                                        dispatch(removeToCart(item.product))
                                      }
                                    >
                                      -
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs text-gray-400 text-center py-6">
                              Sepetiniz boş
                            </p>
                          )}
                        </div>

                        {/* Toplam ve Alt Kısım */}
                        {cart.cart.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-medium text-gray-600">
                                Toplam:
                              </span>
                              <span className="text-sm font-bold text-gray-900">
                                {cart.cart
                                  .reduce(
                                    (acc, curr) =>
                                      acc + curr.product.price * curr.count,
                                    0,
                                  )
                                  .toFixed(2)}{" "}
                                TL
                              </span>
                            </div>
                            <a href="/cart" className="cursor-pointer">
                              <button className="w-full bg-orange-500 text-white text-xs font-bold py-2 rounded hover:bg-orange-600 transition-colors">
                                Sepete Git
                              </button>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <Heart
                  className="md:flex cursor-pointer"
                  onClick={() => setFavOpen(!favOpen)}
                />
                {favOpen && (
                  <div className="absolute top-full right-0 mt-3 w-80 rounded-lg bg-white shadow-2xl z-50 border border-gray-100 p-4">
                    <div className="flex flex-col">
                      <h4 className="font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100 text-sm tracking-tight">
                        Favorilerim ❤️({" "}
                        {fav.reduce((acc, item) => {
                          return acc + item.count;
                        }, 0)}{" "}
                        Ürün)
                      </h4>

                      <div className="flex flex-col space-y-3 max-h-64 overflow-y-auto pr-1">
                        {fav.length > 0 ? (
                          fav.map((item, index) => (
                            <div
                              key={item.product?.id || index}
                              className="flex items-start gap-3 py-2 px-1 border-b border-gray-50 last:border-none"
                            >
                              {/* Ürün Görseli */}
                              <img
                                src={item.product?.images?.[0]?.url}
                                className="w-10 h-12 object-cover rounded shadow-sm flex-shrink-0"
                                alt={item.product?.name}
                              />

                              {/* Ürün Detayları */}
                              <div className="flex flex-col flex-1 min-w-0">
                                <span className="truncate text-xs font-semibold text-gray-800">
                                  {item.product?.name}
                                </span>
                                <span className="text-[10px] text-gray-500">
                                  Adet: {item.count}
                                </span>
                                <span className="text-xs font-bold text-blue-600 mt-1">
                                  {item.product?.price?.toFixed(2)} TL
                                </span>
                                <div className="flex flex-row gap-4 text-sm pt-2">
                                  <button
                                    className="bg-primary px-3 py-0.2 rounded-md text-white"
                                    onClick={() =>
                                      dispatch(addToCart(item.product))
                                    }
                                  >
                                    Sepete Ekle
                                  </button>
                                  <button
                                    className="bg-primary px-3 py-0.2 rounded-md text-white"
                                    onClick={() =>
                                      dispatch(removeToFav(item.product))
                                    }
                                  >
                                    Favoriden Çıkart
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-gray-400 text-center py-6">
                            Favori'de Ürün Yok
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
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
                        <div className="absolute top-full left-0 mt-2 w-96 rounded-md bg-white shadow-xl z-50 border border-gray-100 p-4">
                          <div className="flex flex-row gap-8">
                            {/* Kadın Sütunu */}
                            <div className="flex flex-col flex-1">
                              <h4 className="font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
                                Kadın
                              </h4>
                              {categories
                                .filter((cat) => cat.gender === "k")
                                .map((cat) => (
                                  <Link
                                    key={cat.id}
                                    to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${cat.title}/${cat.id}`}
                                    onClick={() => setShopOpen(false)}
                                    className="py-2 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                                  >
                                    {cat.title}
                                  </Link>
                                ))}
                            </div>

                            {/* Ayraç */}
                            <div className="w-px bg-gray-200" />

                            {/* Erkek Sütunu */}
                            <div className="flex flex-col flex-1">
                              <h4 className="font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
                                Erkek
                              </h4>
                              {categories
                                .filter((cat) => cat.gender === "e")
                                .map((cat) => (
                                  <Link
                                    key={cat.id}
                                    to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${cat.title}/${cat.id}`}
                                    onClick={() => setShopOpen(false)}
                                    className="py-2 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                                  >
                                    {cat.title}
                                  </Link>
                                ))}
                            </div>
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
