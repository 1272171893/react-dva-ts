import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});
