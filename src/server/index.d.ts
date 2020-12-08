export interface IHeader {
  [key: string]: string;
}

export const ContentType: IHeader = {
  json: "application/json",
  html: "text/html",
  stream: "application/octet-stream",
  form: "application/x-www-form-urlencoded",
  formData: "multipart/form-data",
};

export const Methods: IHeader = {
  post: "post",
  get: "get",
  request: "request",
  delete: "delete",
  head: "head",
  options: "options",
  put: "put",
  patch: "patch",
};
export interface IResponse {
  code?: number;
  data?: any;
  massage?: string | void;
  rest?: any;
}
