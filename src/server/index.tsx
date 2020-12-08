import axios, { AxiosInstance } from "axios";
import { IResponse, IContent } from "./index.d";
// import qs from "qs";
const instance: AxiosInstance = axios.create({
  // baseURL: "https://some-domain.com/api/",
  timeout: 60000,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

instance.interceptors.request.use(
  (config: any) => {
    const [method, url, params, content, message] = config.data || [];
    const contentType: string = IContent[content || "json"];
    config.method = method.toLowerCase() || "get";
    config.token = sessionStorage.getItem("token") || "";
    config.url = url || "";
    config.headers = { ...config.headers, "Content-Type": contentType };
    config.message = message || false;
    if(config.method === "get" ){
     config.params = params || {};
     return config;
    }
    config.data = params || {}
    config.query = params || {}
    console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("response", response);
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
