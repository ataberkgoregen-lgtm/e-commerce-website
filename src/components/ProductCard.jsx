import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(`/product/${product.id}`)}
      className="cursor-pointer group"
    >
      {/* Görsel */}
      <div className="overflow-hidden bg-bg-gray">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Bilgiler */}
      <div className="text-center py-4">
        <h3 className="font-bold text-text-primary">{product.title}</h3>
        <p className="text-text-secondary text-sm mt-1">{product.department}</p>

        {/* Fiyat */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-text-light line-through text-sm">
            ${product.originalPrice}
          </span>
          <span className="text-secondary font-bold">${product.salePrice}</span>
        </div>

        {/* Renkler */}
        <div className="flex justify-center gap-2 mt-3">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
