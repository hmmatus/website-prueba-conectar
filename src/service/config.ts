import Axios, { AxiosRequestHeaders } from "axios";

Axios.create({
  baseURL: process.env.API_URL,
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

export const service = {
  get: async (url: string, headers?: AxiosRequestHeaders) => {
    return await Axios.get(url, {
      headers,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  },
  post: async (url: string, data: any, headers?: AxiosRequestHeaders) => {
    return await Axios.post(url, data, {
      headers,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  },
};
