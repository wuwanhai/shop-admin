import request from "@/utils/request";
import {IgetBlogInfo} from "@/api/tyeps/common";



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

