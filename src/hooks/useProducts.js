import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import api from "../api/axios";

const useProducts = () => {
  const { limit, offset, filter } = useSelector((state) => state.product);

  return useQuery({
    queryKey: ["products", limit, offset, filter], // limit/offset/filter değişince otomatik yeni istek atar
    queryFn: async () => {
      const { data } = await api.get("/products", {
        params: { limit, offset, filter },
      });
      return data;
    },
  });
};

export default useProducts;
