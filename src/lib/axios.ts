import axios from "axios";

console.log('API URL:', import.meta.env.VITE_API_URL);

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://naiara-jobber-backend-477bded58652.herokuapp.com",
});
