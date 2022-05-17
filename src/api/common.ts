import request from "@/utils/request";

// 请求方法
export const getLoginInfo = () => {
    return request({
        method: 'GET',
        url:'/login/info'
    })
}
