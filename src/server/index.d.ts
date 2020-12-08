export interface IHeader {
  [key: string]: string;
}

export const IContent: IHeader = {
  json: "application/json;charset=UTF-8",
  html: "text/html",
  stream: "application/octet-stream",
  form: "application/x-www-form-urlencoded",
  formData: "multipart/form-data",
};

export interface IResponse {
  code?: number;
  data?: any;
  massage?: string | void;
  rest?: any;
}
