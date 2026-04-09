import { useHistory } from "react-router-dom";

const ProductCard = ({ product, layout, gender, categoryName, categoryId }) => {
  const history = useHistory();
  const handleClick = () => {
    const productNameSlug = product.name
      .toLowerCase()
      .replace(/\s+/g, "-") // boşlukları tire yap
      .replace(/[^a-z0-9-]/g, ""); // özel karakterleri kaldır

    if (gender && categoryName && categoryId) {
      // Kategori seçilmişse tam URL
      history.push(
        `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`,
      );
    } else {
      // Genel shop'tan geliyorsa kısa URL
      history.push(`/shop/tumu/tumu/0/${productNameSlug}/${product.id}`);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer group flex ${layout ? "flex-col" : "flex-row"}`}
    >
      <div
        className={`overflow-hidden bg-bg-gray ${layout ? "w-full" : "w-fit"}`}
      >
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-full h-70 md:w-50 md:object-center  object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div
        className={`text-center py-4 ${layout ? "w-full" : "w-full  px-3 flex flex-col justify-center items-center"}`}
      >
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
