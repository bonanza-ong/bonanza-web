import axios, { AxiosInstance } from "axios";
import { redirect } from "react-router-dom";
import { keycloak } from "../../app/Keycloak";

export interface HttpClient extends AxiosInstance {
  url: string;
}

export const createHttpClient = (path: string) => {
  const baseUrl = `${import.meta.env.VITE_API}${path}`;

  const httpClient = axios.create({
    baseURL: baseUrl,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
  }) as HttpClient;

  httpClient.url = baseUrl;

  httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        401 === error.response.status &&
        window.location.pathname !== "/signin"
      ) {
        redirect("/signin");
      } else {
        return Promise.reject(error);
      }
    },
  );

  httpClient.interceptors.request.use(async (config: any) => {
    const token = keycloak.token;
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
  return httpClient;
};
