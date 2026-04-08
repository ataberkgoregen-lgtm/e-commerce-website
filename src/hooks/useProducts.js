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
      const numericId = category_id ? Number(category_id) : null;

      const finalId = numericId > 5 ? null : numericId;
      console.log("İstek atılıyor1:", { filter, finalId });
      console.log("İstek atılıyor2:", { limit, offset, filter, finalId });
      const { data } = await api.get("/products", {
        params: {
          limit,
          offset,
          ...(filter ? { filter: filter } : {}),
          ...(sort ? { sort: sort } : {}),
          ...(category_id ? { category: finalId } : {}),
        },
      });

      return data;
    },
  });
};

export default useProducts;
