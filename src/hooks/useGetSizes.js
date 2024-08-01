import { useQuery } from "@tanstack/react-query";
import { fetchSizes } from "../api/sizes.api";

export function useGetSizes() {
  return useQuery({
    queryKey: ["sizes"],
    queryFn: fetchSizes,
  });
}
