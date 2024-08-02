import { useQuery } from "@tanstack/react-query";
import { fetchCartProducts } from "../api/cartProducts.api";

export function useGetCartProducts() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => fetchCartProducts(),
  });
}
