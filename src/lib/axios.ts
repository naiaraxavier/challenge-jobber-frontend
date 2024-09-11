import axios from "axios";

console.log('API URL:', process.env.REACT_APP_API_URL);

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:8000",
});
