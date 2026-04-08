import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { ChevronRight, LayoutGrid, ListChecks } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCategory } from "../store/productActions";
import { setSort, setFilter, setOffset } from "../store/productActions";

const ShopPage = () => {
  const [page, setPage] = useState(1);
  const { limit, offset } = useSelector((state) => state.product);
  const shopPage = useSelector((item) => item.reducer.shop);
  const [layout, setLayout] = useState(true);
  const { data, isLoading, isError } = useProducts();
  const { sort, filter } = useSelector((state) => state.product);
  const [filterInput, setFilterInput] = useState("");

  const currentPage = Math.floor(offset / limit) + 1;
  const products = data?.products ?? [];
  const total = data?.total ?? 0; // backend'den toplam ürün sayısı
  const totalPages = Math.ceil(total / limit);

  const { categoryId, categoryName } = useParams();

  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    const newOffset = (newPage - 1) * limit;
    dispatch(setOffset(newOffset));

    // Sayfa değiştiğinde en üste kaydır
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (categoryId) {
      dispatch(setCategory(categoryId));
      dispatch(setFilter(categoryName || ""));
    }
  }, [categoryId, categoryName, dispatch]);

  const getPageNumbers = (currentPage, totalPages) => {
    // Toplam sayfa 7 veya altındaysa hepsini göster
    if (totalPages <= 7) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    // Başta her zaman 1 var, sonda her zaman totalPages var
    // Ortada currentPage etrafında 2 sayfa var
    const pages = new Set([
      1,
      totalPages,
      currentPage,
      currentPage - 1,
      currentPage + 1,
    ]);

    // Sırala, geçersizleri temizle
    return [...pages]
      .filter((p) => p >= 1 && p <= totalPages)
      .sort((a, b) => a - b);
  };
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-text-secondary">Yükleniyor...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-danger">Hata: {isError.message}</p>
      </div>
    );

  return (
    <div className="w-full">
      <div className="md:h-[58px] h-fit flex flex-col md:flex-row justify-between mt-3 mb-2  ">
        <div className="flex flex-row flex-wrap md:flex-nowrap xl:gap-[119px] items-center w-full justify-between ">
          <h3 className="font-bold pl-9.5 text-2xl order-1">Shop</h3>
          <div className="flex gap-2 items-center text-text-primary md:text-primary flex-row w-auto  justify-end order-2 md:order-3 shrink-0 px-7">
            <a href="/" className="text-text-primary font-bold">
              Home
            </a>
            <p>
              <ChevronRight className="text-text-light " />
            </p>
            <a href="" className="text-text-light font-thin">
              Shop
            </a>
          </div>
        </div>
      </div>
      <div className="w-3/5 mx-auto px-8 py-12">
        {/* --- FLEX YAPISI --- */}

        <div className="flex flex-row justify-center xl:justify-between pb-12 flex-wrap items-center w-full gap-1 ">
          {shopPage.map((item) => {
            return (
              <div className="relative m-auto">
                <img src={item.image} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <h4 className="absolute top-2/5 left-1/3 text-white font-bold z-20">
                  {item.head}
                </h4>
                <p className="absolute bottom-2/6 left-1/3 text-white z-20">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="pt-9 pb-21 flex flex-row justify-between items-center flex-wrap gap-10">
          <h6 className="text-text-secondary font-bold">
            Showing all 12 results
          </h6>
          <div className="flex flex-row gap-4 items-center">
            <h6 className="text-text-secondary font-bold">Views:</h6>
            <button
              className="border-1 p-2 rounded-md border-border cursor-pointer"
              onClick={() => setLayout(true)}
            >
              {" "}
              <LayoutGrid />
            </button>
            <button
              className="border-1 p-2 rounded-md border-border cursor-pointer "
              onClick={() => setLayout(false)}
            >
              <ListChecks />
            </button>
          </div>
          <div className="flex flex-row gap-5 flex-wrap">
            <select
              value={sort}
              onChange={(e) => dispatch(setSort(e.target.value))}
              name=""
              id=""
              className="bg-bg-gray text-center px-1 py-4 border-1 border-border rounded-md font-light"
            >
              <option value="">Sıralama Seçin</option>
              <option value="price:asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price:desc">Fiyat: Yüksekten Düşüğe</option>
              <option value="rating:asc">Puan: Düşükten Yükseğe</option>
              <option value="rating:desc">Puan: Yüksekten Düşüğe</option>
            </select>

            <input
              type="text"
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              placeholder="Ürün ara..."
            />
            <button
              onClick={() => dispatch(setFilter(filterInput))}
              className="bg-primary px-7 py-2 text-white rounded-md font-bold cursor-pointer"
            >
              Filter
            </button>
          </div>
        </div>

        {layout ? (
          <div className="flex flex-wrap -mx-4">
            {/* -mx-4: Kenarlardaki boşluğu dengelemek için */}

            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
              >
                {/* w-full: Mobilde 1 tane
               sm:w-1/2: Küçük ekranlarda 2 tane
               lg:w-1/4: Geniş ekranlarda 4 tane (12 / 4 = 3 satır oluşur)
            */}
                <ProductCard product={product} layout={layout} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col -mx-4 items-center justify-center ">
            {/* -mx-4: Kenarlardaki boşluğu dengelemek için */}

            {products.map((product) => (
              <div
                key={product.id}
                className="w-full items-center justify-center  px-4 mb-8 pb-4 border-b-2"
              >
                <ProductCard product={product} layout={layout} />
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => {
              handlePageChange(1);
            }}
            disabled={currentPage === 1}
            className="px-4 py-2 border disabled:opacity-30 cursor-pointer"
          >
            First
          </button>

          {getPageNumbers(currentPage, totalPages).map((pageNum, i, arr) => {
            // Önceki sayıyla arasında boşluk varsa "..." ekle
            const showDots = i > 0 && pageNum - arr[i - 1] > 1;

            return (
              <span key={pageNum} className="flex items-center gap-2">
                {showDots && (
                  <span className="px-2 text-text-secondary">...</span>
                )}
                <button
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 border cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-primary text-white"
                      : "text-text-secondary"
                  }`}
                >
                  {pageNum}
                </button>
              </span>
            );
          })}

          <button
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border disabled:opacity-30 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      <div className="w-full bg-bg-light">
        <div className="w-3/5 mx-auto px-8 py-12 flex flex-row justify-around flex-wrap gap-10 ">
          <img src="/Vector.svg" alt="" />
          <img src="/Vector (1).svg" alt="" />
          <img src="/Vector (2).svg" alt="" />
          <img src="/Vector (3).svg" alt="" />
          <img src="/Vector (4).svg" alt="" />
          <img src="/Vector (5).svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
