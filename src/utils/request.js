import axios from 'axios';

const service = axios.create({
  baseURL: process.env.MANAGEMENT_API,
  withCredentials: false,
  timeout: 60 * 1000,
});

service.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      console.log(401);
    }
    return Promise.reject(error.response.data);
  }
);

export default service;
