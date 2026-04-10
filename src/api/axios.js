import axios from "axios";
import { myStore } from "../store/index"; // store'un yolu neyse

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = myStore.getState().client.user.token;
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default api;
