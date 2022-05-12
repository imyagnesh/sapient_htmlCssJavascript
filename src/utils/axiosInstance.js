import axios from "axios";
import Auth from "../auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  timeoutErrorMessage: "Timeout! try after some time",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const auth = new Auth();
    const token = auth.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response?.data) {
      return Promise.reject(new Error(error?.response?.data));
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
