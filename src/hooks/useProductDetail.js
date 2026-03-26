import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useProductDetail = (productId) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      // Sayfa yenilenirse burası çalışır: Tüm listeyi çekip içinden ID'yi buluyoruz
      const { data } = await axios.get("/products.json");
      return data.products.find((p) => String(p.id) === String(productId));
    },
    // Burası "Sihirli" kısım: Shop sayfasındaki veriyi anında kullanmamızı sağlar
    initialData: () => {
      // "products" anahtarıyla çekilmiş tüm sayfaları cache'den al
      const allQueriesData = queryClient.getQueriesData({
        queryKey: ["products"],
      });

      for (const [key, data] of allQueriesData) {
        if (data?.products) {
          const found = data.products.find(
            (p) => String(p.id) === String(productId),
          );
          if (found) return found; // Eğer bulursan bekleme, direkt göster!
        }
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5, // 5 dakika taze kabul et
  });
};

export default useProductDetail;
