import axios, { AxiosInstance } from "axios";
import { IResponse, ContentType,Methods} from "./index.d";
const instance: AxiosInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 60000,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

instance.interceptors.request.use(
  (config: any) => {
    const type: string = config.type || "json";
    const token: string = sessionStorage.getItem("token") || "";
    const ContentTypes: string = ContentType[type];
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const promise = (...agurment: any) => {
  return new Promise((resolve, reject) => {
    instance({ data: agurment })
      .then((result: IResponse) => resolve(result))
      .catch((error) => reject(error));
  });
};

export default promise;
