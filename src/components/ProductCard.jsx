import { useHistory } from "react-router-dom";

const ProductCard = ({ product, layout }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(`/product/${product.id}`)}
      className={`cursor-pointer group flex ${layout ? "flex-col" : "flex-row"}`}
    >
      <div
        className={`overflow-hidden bg-bg-gray ${layout ? "w-full" : "w-3/4 mr-5"}`}
      >
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className={`text-center py-4 ${layout ? "w-full" : "w-50"}`}>
        <h3 className="font-bold text-text-primary">{product.name}</h3>
        <p className="text-text-secondary text-sm mt-1">
          {product.description}
        </p>

        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-secondary font-bold">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
