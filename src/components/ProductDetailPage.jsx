import { useParams, useHistory } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const history = useHistory();
  const { data: product, isLoading, error } = useProductDetail(productId);

  if (isLoading)
    return <div className="flex justify-center py-20">Yükleniyor...</div>;
  if (error || !product)
    return (
      <div className="text-center py-20">
        <p className="text-danger">Ürün bulunamadı!</p>
        <button
          onClick={() => history.push("/products")}
          className="mt-4 text-primary underline"
        >
          Ürünlere Dön
        </button>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row gap-16">
        {/* SOL: GÖRSEL */}
        <div className="w-full md:w-1/2">
          <div className="bg-bg-gray rounded-2xl overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* SAĞ: BİLGİLER */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <nav className="mb-4">
            <button
              onClick={() => history.goBack()}
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              ← Mağazaya Geri Dön
            </button>
          </nav>

          <h1 className="text-4xl font-bold text-text-primary leading-tight">
            {product.title}
          </h1>
          <p className="text-xl text-text-secondary mt-2 font-medium">
            {product.department}
          </p>

          <div className="flex items-center gap-6 mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex flex-col">
              <span className="text-sm text-text-light line-through font-medium">
                ${product.originalPrice}
              </span>
              <span className="text-4xl font-extrabold text-secondary">
                ${product.salePrice}
              </span>
            </div>
            <div className="ml-auto">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-bold">
                %20 İNDİRİM
              </span>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-bold uppercase tracking-widest text-text-primary">
              Mevcut Renkler
            </p>
            <div className="flex gap-4 mt-4">
              {product.colors?.map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md ring-1 ring-gray-200 cursor-pointer hover:ring-primary transition-all"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <button className="flex-1 bg-primary text-white py-5 px-8 rounded-xl font-bold text-lg hover:shadow-xl hover:bg-primary/90 transition-all active:scale-95">
              SEPETE EKLE
            </button>
            <button className="p-5 border-2 border-border rounded-xl hover:bg-gray-50 transition-colors">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
