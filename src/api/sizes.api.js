import { HttpRequest } from "../services/axios.config";

export async function fetchSizes() {
  const response = await HttpRequest.get("/sizes");
  console.log(response.data);
  return response.data;
}
