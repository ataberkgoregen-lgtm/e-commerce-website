import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = (page = 1, limit = 12) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const { data } = await axios.get(`/products.json`, {
        params: {
          page: page,
          limit: limit, // Backend bu parametreye göre 12 tane döndürmeli
        },
      });
      return data;
    },
    // Sayfa geçişlerinde eski veriyi ekranda tutar, "Yükleniyor" sıçramasını önler
    staleTime: 1000, // 5 saniye boyunca veriyi taze kabul et
  });
};

export default useProducts;
