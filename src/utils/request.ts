import axios, {AxiosRequestConfig} from "axios";

const request = axios.create({
    // url 前缀
    // baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器，发起请求前
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// 输入 axios 的配置
export default <T = any>(config: AxiosRequestConfig) => {
    return request(config).then(res => {
        return res.data as T
    })
}
