import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import api from "../api/axios";

const useProducts = () => {
  const { limit, offset, filter, sort, category_id } = useSelector(
    (state) => state.product,
  );

  return useQuery({
    queryKey: ["products", limit, offset, filter, sort, category_id], // limit/offset/filter/sort/category_id değişince otomatik yeni istek atar
    queryFn: async () => {
      console.log("İstek atılıyor:", { limit, offset, filter, category_id });
      const { data } = await api.get("/products", {
        params: {
          limit,
          offset,
          ...(filter ? { filter } : {}),
          ...(sort ? { sort } : {}),
          ...(category_id ? { category: Number(category_id) } : {}),
        },
      });

      return data;
    },
  });
};

export default useProducts;
