import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('access_token'))
      config.headers.Authorization = `Bearer ${sessionStorage.getItem('access_token')}`;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;
