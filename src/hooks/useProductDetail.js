import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios"; // ✅ fetch yerine axios instance

const useProductDetail = (productId) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data } = await api.get(`/products/${productId}`); // ✅ direkt ürünü çek
      return data;
    },
    initialData: () => {
      const allQueriesData = queryClient.getQueriesData({
        queryKey: ["products"],
      });

      for (const [key, data] of allQueriesData) {
        if (data?.products) {
          const found = data.products.find(
            (p) => String(p.id) === String(productId),
          );
          if (found) return found; // cache'de varsa direkt göster
        }
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useProductDetail;
