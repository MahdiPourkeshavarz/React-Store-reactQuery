import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products.api";

export const useGetProducts = (sizeId) => {
  return useQuery({
    queryKey: ["products", sizeId],
    queryFn: () => fetchProducts(sizeId),
  });
};
