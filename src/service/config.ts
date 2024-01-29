import Axios, { AxiosRequestHeaders } from "axios";

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: { },
});

export const service = {
  get: async (url: string, headers?: AxiosRequestHeaders) => {
    return await axiosInstance.get(url, {
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
    return await axiosInstance.post(url, data, {
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
