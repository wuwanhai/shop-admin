import request from "@/utils/request";
import {IgetBlogInfo, ILoginResponseInfo} from "@/api/tyeps/common";



// 请求方法
// export const getLoginInfo = () => {
//     return request.get<ResponseData<{
//         login_square: String,
//         login_logo: String,
//         slide: String[]
//     }>>('./login/info')
// }

// export const getLoginInfo = () => {
//     return request<{
//         login_square: String,
//         login_logo: String,
//         slide: String[]
//     }> ({
//         method:'GET',
//         url:'/login/info'
//     })
// }

// 本地接口
export const getBlogInfo = () => {
    return request<IgetBlogInfo> ({
        method:'GET',
        url:'/api/blogs/2'
    })
}


// 获取验证码

export const getCaptcha = () => {
    return request <Blob>({
        method: "GET",
        url:'/captcha_pro',
        params: {
            // 时间戳，确保每次请求相同接口，存在缓存的问题
            stamp: Date.now()
        },
        // 响应类型  二进制
        responseType: 'blob'
    })
}

// 登录接口
export const login = (data:{
    name: String,
    password: String,
    captcha: String
}) => {
    return request<ILoginResponseInfo>({
        method:'POST',
        url:'/api/login',
        data
    })
}

export const logout = () => {
    return request<IgetBlogInfo> ({
        method:'GET',
        url:'/api/blogs/2'
    })
}



