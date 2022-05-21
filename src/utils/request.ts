import axios, {AxiosRequestConfig} from "axios";
import {ElMessage} from "element-plus";
import {store} from "@/store";

const request = axios.create({
    // url 前缀，如果不需要代理，则开启
    // baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器，发起请求前
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 统一设置用户身份 token
    const user = store.state.user
    if (user && user.token) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(function (response) {
    // 统一处理接口的相关错误
    if (response.data.code && response.data.code !== 200) {
        ElMessage.error(response.data.msg || '请联系管理员')
        // 如果为异常，阻止接下来的动作,抛出异常
        return Promise.reject(response.data)
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// 输入 axios 的配置
export default <T = any>(config: AxiosRequestConfig) => {
    return request(config).then(res => {
        return res.data.data as T
    })
}
