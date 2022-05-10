import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  timeoutErrorMessage: "Timeout! try after some time",
});

export default axiosInstance;
