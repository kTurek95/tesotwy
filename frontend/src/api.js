import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "8b499734-c311-48c8-a520-63c0dc3eb81f-dev.e1-eu-north-azure.choreoapis.dev";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

