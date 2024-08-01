import axios from "axios";

import { baseURL } from "../constants";

export const HttpRequest = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
