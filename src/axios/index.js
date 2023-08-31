import axios from 'axios'

const PORT = process.env.VUE_APP_PORT

const axiosInstance = axios.create({
  baseURL: `http://localhost:${PORT}`
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance