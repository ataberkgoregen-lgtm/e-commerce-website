import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, setChecked, emptyToCart } from "../store";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((item) => item.cart);

  const total = cart.cart
    .reduce((acc, curr) => acc + curr.product.price * curr.count, 0)
    .toFixed(2);

  const shippingFee = 29.99;

  const result =
    parseFloat(total) === 0
      ? 0
      : parseFloat(total) > 150
        ? parseFloat(total)
        : parseFloat(total) + shippingFee;

  const displayResult = result.toFixed(2);
  const isFreeShipping = parseFloat(total) > 150;
  const hasItems = parseFloat(total) > 0;

  return (
    <div className="w-4/5 flex flex-col lg:flex-row rounded-md m-auto mb-20 mt-10 lg:mt-20 gap-3">
      {/* Ürünler */}
      <div className="w-full lg:w-4/5">
        <div className="text-text-primary text-lg mb-3">
          <h2 className="font-bold">
            Sepetim (
            <span className="px-2 py-1">
              {cart.cart.reduce((acc, item) => acc + item.count, 0)}
            </span>
            ) ürün
          </h2>
        </div>

        <div className="flex flex-col">
          {cart.cart.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-row gap-2 border-2 items-center mb-4 bg-bg-gray border-border px-2 rounded-md"
            >
              <input
                type="checkbox"
                className="w-5 h-5 ml-1 shrink-0"
                onClick={() => dispatch(setChecked(item.product))}
              />

              <div className="w-24 h-36 sm:w-32 sm:h-44 md:w-40 md:h-56 shrink-0">
                <img
                  src={item.product.images[0].url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
                <div className="flex flex-col gap-1 sm:gap-3 mx-2 sm:mx-5">
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold">
                    {item.product.name}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    {item.product.description}
                  </p>
                </div>

                <div className="flex flex-row items-center text-sm sm:text-base font-bold gap-1 pb-2 sm:pb-0">
                  <button
                    className="bg-primary px-3 py-1 rounded-md text-white"
                    onClick={() => dispatch(addToCart(item.product))}
                  >
                    +
                  </button>
                  <span className="px-3 py-1 border border-border rounded-md">
                    {item.count}
                  </span>
                  <button
                    className="bg-primary px-3 py-1 rounded-md text-white"
                    onClick={() => dispatch(removeToCart(item.product))}
                  >
                    -
                  </button>
                  <p className="pl-2">
                    {(
                      Math.round(item.product.price * item.count * 100) / 100
                    ).toFixed(2)}
                  </p>
                  <Trash
                    className="ml-2 mt-1 cursor-pointer"
                    onClick={() => dispatch(emptyToCart(item.product))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sipariş Özeti */}
      <div className="w-full lg:w-1/5">
        <div className="flex flex-col border-2 border-primary-dark rounded-md h-fit gap-2 py-2">
          <h2 className="text-primary-dark text-xl sm:text-2xl font-bold px-2 py-2">
            Sipariş Özeti
          </h2>
          <div className="flex flex-row justify-between px-2">
            <p className="text-base sm:text-lg">Ürün Toplamı</p>
            <span>{total} TL</span>
          </div>

          <div className="flex flex-col gap-3">
            {hasItems && (
              <div className="flex flex-row justify-between px-2">
                <p className="text-base sm:text-lg">Kargo Toplam</p>
                <span>29.99 TL</span>
              </div>
            )}
            {isFreeShipping && (
              <div className="flex flex-row justify-between px-2">
                <p className="w-2/3 text-sm">150 TL ve Üzeri Kargo Bedava</p>
                <span>-29.99 TL</span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="border-border border-t-2 w-5/6 m-auto"></span>
            <div className="flex flex-row justify-between px-2 pt-2">
              <p>Toplam</p>
              <span>{displayResult} TL</span>
            </div>
            <button className="mt-2 bg-primary-dark w-full sm:w-fit px-4 py-2 m-auto rounded-md text-white cursor-pointer font-bold">
              Sepeti Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
