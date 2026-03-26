import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const { data, isLoading, error } = useProducts(page);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-text-secondary">Yükleniyor...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-danger">Hata: {error.message}</p>
      </div>
    );

  if (!data || !Array.isArray(data.products)) {
    return <p>Ürünler bulunamadı.</p>;
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const visibleProducts = data.products.slice(startIndex, endIndex);

  // 2. Dinamik Sayfa Sayısı Hesaplama
  // Toplam ürün sayısını limit'e bölüp yukarı yuvarlıyoruz (Örn: 25/12 = 2.08 -> 3 sayfa)
  const totalPages = Math.ceil(data.products.length / limit);

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* --- FLEX YAPISI --- */}
      <div className="flex flex-wrap -mx-4">
        {/* -mx-4: Kenarlardaki boşluğu dengelemek için */}

        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
          >
            {/* w-full: Mobilde 1 tane
               sm:w-1/2: Küçük ekranlarda 2 tane
               lg:w-1/4: Geniş ekranlarda 4 tane (12 / 4 = 3 satır oluşur)
            */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Pagination (Sayfalama) */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          onClick={() => {
            setPage(1);
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
          className="px-4 py-2 border disabled:opacity-30"
        >
          First
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPage(i + 1);
              window.scrollTo(0, 0);
            }}
            className={`px-4 py-2 border ${
              page === i + 1 ? "bg-primary text-white" : "text-text-secondary"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => {
            setPage((prev) => Math.min(prev + 1, totalPages));
            window.scrollTo(0, 0);
          }}
          disabled={page === totalPages}
          className="px-4 py-2 border disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopPage;
