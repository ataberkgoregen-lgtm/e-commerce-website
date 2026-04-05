import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get("/categories");
      return data;
    },
    staleTime: Infinity, // kategoriler değişmez, bir kez çek yeter
  });
};
