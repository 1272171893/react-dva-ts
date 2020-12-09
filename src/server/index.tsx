import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IResponse, IContent } from "./index.d";
import { message } from "antd";
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
    if (config.method === "get") {
      config.params = params || {};
      return config;
    }
    config.data = params || {};
    config.query = params || {};
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse<IResponse>) => {
    const config: any = response.config || {};
    const data: IResponse | any = response.data || {};
    if (response.status === 200) {
      if (config.message && data.code === 200) {
        message.success(data.message || "成功");
      }
      if (config.message && data.code !== 200) {
        message.error(data.message || "失败");
      }
      return data;
    }
    message.error("网络异常");
    return Promise.reject(data);
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
