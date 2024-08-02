import { HttpRequest } from "../services/axios.config";

export async function fetchProducts(sizeId) {
  console.log(sizeId);
  const url = sizeId === "all" ? `/products` : `/products?size.id=${sizeId}`;
  const response = await HttpRequest.get(url);
  console.log(response.data);
  return response.data;
}
