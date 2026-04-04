import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "../api/axios";

const getProducts = async () => {
  const products = await api.get("/products");
  return products.data;
};

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });
};

export default useProducts;
