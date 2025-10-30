import axios from 'axios';

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://localhost:8080/api/', // httpInstance的基础URL
  timeout: 10000, // 请求超时时间
});

// 添加请求拦截器
httpInstance.interceptors.request.use(config => {
  // 在发送请求之前做些什么，例如添加token到headers
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response.data;
}, error => {
  // 对响应错误做点什么
  if (error.response && error.response.status === 401) {
    // 例如，处理401未授权错误，可以重定向到登录页面等
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default httpInstance;