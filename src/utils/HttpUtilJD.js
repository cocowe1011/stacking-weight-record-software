import axios from 'axios';

const HttpUtilJD = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_JD,
  timeout: 30000,
  withCredentials: true
});

// 添加响应拦截器
HttpUtilJD.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default HttpUtilJD;
