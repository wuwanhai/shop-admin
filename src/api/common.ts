import request from "@/utils/request";

//  any 为泛型，也就是任意类型,
//  T 用于接受自定义类型，也就是二次封装
interface ResponseData<T = any> {
    code: number,
    status: number,
    msg: string,
    data: T,
}

// 请求方法
export const getLoginInfo = () => {
    return request.get<ResponseData<{
        login_square: String,
        login_logo: String,
        slide: String[]
    }>>('./login/info')
}
