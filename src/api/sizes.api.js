import { HttpRequest } from "../services/axios.config";

export async function fetchSizes() {
  const response = await HttpRequest.get("/sizes");

  return response.data;
}
