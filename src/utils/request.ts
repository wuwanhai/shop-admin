import axios, {AxiosRequestConfig} from "axios";
import {ElMessage, ElMessageBox} from "element-plus";
import {store} from "@/store";
import router from "@/router/";

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

let isRefreshing:boolean = false
// 响应拦截器
request.interceptors.response.use(function (response) {
    let code = response.data.code
    // 正确的情况
    if (!code || code === 200 ) {
        return response
    }

    // 错误情况
    if (code === 410000) {
        if ( isRefreshing ) return Promise.reject(response)
        isRefreshing = true
        ElMessageBox.confirm('您的登录已经过期，可以取消或者重新登录',{
            confirmButtonText:'确认',
            cancelButtonText:'取消',
        }).then(() => {
            // 清除本地过期状态
            store.commit('setUser',null)
            // 跳转到登录界面
            router.push({
                name:'login',
                query: {
                    redirect: router.currentRoute.value.fullPath
                }
            })
        }).finally(() => {
            // 还原锁状态
            isRefreshing = false
        })
        // 消化内部异常
        return Promise.reject(response)
    }

    // 统一处理接口的相关错误

    // 其他错误状态
    ElMessage.error(response.data.msg || '请求失败，请稍后重试')

    // 手动返回promis
    return Promise.reject(response)

    // if (response.data.code && response.data.code !== 200) {
    //     ElMessage.error(response.data.msg || '请联系管理员')
    //     // 如果为异常，阻止接下来的动作,抛出异常
    //     return Promise.reject(response.data)
    // }
    // return response;
    //

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
