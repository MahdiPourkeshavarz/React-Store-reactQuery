import { HttpRequest } from "../services/axios.config";

export async function fetchProducts(sizeId) {
  const url = sizeId ? `/products?size.id=${sizeId}` : `/products`;
  const response = await HttpRequest.get(url);

  return response.data;
}
