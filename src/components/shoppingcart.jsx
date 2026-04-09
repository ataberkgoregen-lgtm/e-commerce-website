import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart, setChecked } from "../store";
export default function ShoppingCart() {
  const dispatch = useDispatch();

  const cart = useSelector((item) => item.cart);
  console.log(cart);
  return (
    <div className="w-4/5 flex flex-row border-2 border-border rounded-md m-auto mb-20 mt-20 ">
      <div className="w-4/5  ">
        <div className="text-text-primary text-lg">
          <h2 className="font-bold">
            Sepetim (
            <span className="px-2 py-1">
              {cart.cart.reduce((acc, item) => {
                return acc + item.count;
              }, 0)}
            </span>
            ) ürün
          </h2>
        </div>

        <div className="flex flex-col ">
          {cart.cart.map((item) => {
            return (
              <div className="flex flex-row gap-2 border-2 items-center mb-4 bg-bg-gray border-border px-2 rounded-md">
                <input
                  type="checkbox"
                  className="w-5 h-5 ml-1 shrink-0"
                  onClick={() => dispatch(setChecked(item.product))}
                />
                <div className="w-40 h-56 shrink-0 ">
                  <img
                    src={item.product.images[0].url}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="flex flex-row items-center justify-between w-full ">
                  <div className="flex flex-col ">
                    <h3 className="text-2xl font-bold">{item.product.name}</h3>
                    <p className="text-sm">{item.product.description}</p>
                  </div>

                  <div className="flex flex-row text-base font-bold ">
                    <button
                      className="bg-primary px-3 py-0.2 rounded-md text-white"
                      onClick={() => dispatch(addToCart(item.product))}
                    >
                      +
                    </button>
                    <span className="px-3 py-1 border-1 border-border rounded-md">
                      {item.count}
                    </span>
                    <button
                      className="bg-primary px-3 py-0.2 rounded-md text-white"
                      onClick={() => dispatch(removeToCart(item.product))}
                    >
                      -
                    </button>
                    <div className="flex flex-row items-center pl-3">
                      <p>
                        {Math.round(item.product.price * item.count * 100) /
                          100}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-1/5 border-2"></div>
    </div>
  );
}
