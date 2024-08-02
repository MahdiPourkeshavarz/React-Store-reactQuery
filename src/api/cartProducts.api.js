import { HttpRequest } from "../services/axios.config";

export async function fetchCartProducts() {
  const url = "/cart";
  const response = await HttpRequest.get(url);
  const result = response.data;

  return {result, totalPrice: result.reduce((ac, item)=> item.price + ac,0)};
}
