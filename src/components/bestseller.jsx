import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
export default function BestSeller() {
  const { data, isLoading } = useProducts();
  const products = data?.products ?? [];

  const visibleProducts = products.slice(0, 8);
  console.log(visibleProducts);
  return (
    <div className="pt-20 text-center">
      <div className="flex flex-col gap-2.5 mb-20">
        <p className="text-text-secondary text-xl font-normal">
          Featured Products
        </p>
        <h3 className="font-bold text-2xl text-text-primary">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-normal text-sm text-text-secondary">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex flex-wrap ">
        {visibleProducts.map((item) => {
          return (
            <div
              key={item.id}
              className="w-65 pb-20 m-auto flex flex-col justify-center gap-2.5"
            >
              <img src={item.images[0].url} alt="" />
              <h5 className="font-bold text-text-primary pt-6">{item.name}</h5>
              <p className="font-bold text-text-secondary">
                {item.description}
              </p>
              <div className="flex flex-row gap-3 justify-center">
                <p className="font-bold text-text-light">${item.price}</p>
                <p className="font-bold text-secondary">${item.price}</p>
              </div>
              <div className="flex flex-row justify-center gap-1">
                <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
                <div className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
