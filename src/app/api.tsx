import Axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "https://dash-starter.com/api";

const api = Axios.create({
  baseURL,
});

api.interceptors.response.use((response) => {
  return response;
});

api.interceptors.request.use(
  function (config) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (config as any).headers = {
      ...config.headers,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
